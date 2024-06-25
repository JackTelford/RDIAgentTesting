import React, { memo, useEffect, useMemo, useRef, useState, FC } from "react";
import dynamic from "next/dynamic";
import FileEntry from "components/system/Files/FileEntry";
import StyledSelection from "components/system/Files/FileManager/Selection/StyledSelection";
import useSelection from "components/system/Files/FileManager/Selection/useSelection";
import useDraggableEntries from "components/system/Files/FileManager/useDraggableEntries";
import useFileDrop from "components/system/Files/FileManager/useFileDrop";
import useFileKeyboardShortcuts from "components/system/Files/FileManager/useFileKeyboardShortcuts";
import useFocusableEntries from "components/system/Files/FileManager/useFocusableEntries";
import useFolder from "components/system/Files/FileManager/useFolder";
import useFolderContextMenu from "components/system/Files/FileManager/useFolderContextMenu";
import {
  useClipboardEventTracker,
  useFolderTracker,
} from "../../../../hooks/EventTracker";
import {
  FileManagerViewNames,
  FileManagerViews,
} from "components/system/Files/Views";
import { useFileSystem } from "contexts/fileSystem";
import {
  FOCUSABLE_ELEMENT,
  MOUNTABLE_EXTENSIONS,
  PREVENT_SCROLL,
  SHORTCUT_EXTENSION,
} from "utils/constants";
import { getExtension, haltEvent } from "utils/functions";
import { basename, join } from "path";

const StatusBar = dynamic(
  () => import("components/system/Files/FileManager/StatusBar")
);
const StyledEmpty = dynamic(
  () => import("components/system/Files/FileManager/StyledEmpty")
);
const StyledLoading = dynamic(
  () => import("components/system/Files/FileManager/StyledLoading")
);

type FileManagerProps = {
  allowMovingDraggableEntries?: boolean;
  hideFolders?: boolean;
  hideLoading?: boolean;
  hideScrolling?: boolean;
  hideShortcutIcons?: boolean;
  id?: string;
  isDesktop?: boolean;
  isStartMenu?: boolean;
  loadIconsImmediately?: boolean;
  readOnly?: boolean;
  showStatusBar?: boolean;
  skipFsWatcher?: boolean;
  skipSorting?: boolean;
  url: string;
  view: FileManagerViewNames;
  customIcons?: Array<{
    "data-file": string;
    style: React.CSSProperties;
    iconProps: {
      "aria-label": string;
      title: string;
      alt: string;
      src: string;
      srcSet: string;
    };
  }>;
  onFileSingleClick?: (file: string) => void;
  onFileOpen?: (file: string) => void;
  onFileDoubleClick?: (file: string) => void; // Added this line
};

const defaultFileOpenHandler = (file: string) => {
  console.log(`file opened ${file}`);
};

const FileManager: FC<FileManagerProps> = ({
  allowMovingDraggableEntries,
  hideFolders,
  hideLoading,
  hideScrolling,
  hideShortcutIcons,
  id,
  isDesktop,
  isStartMenu,
  loadIconsImmediately,
  readOnly,
  showStatusBar,
  skipFsWatcher,
  skipSorting,
  url,
  view,
  customIcons = [],
  onFileOpen = defaultFileOpenHandler,
  onFileDoubleClick = defaultFileOpenHandler,
  onFileSingleClick = defaultFileOpenHandler,
}) => {
  const [currentUrl, setCurrentUrl] = useState(url);
  const [renaming, setRenaming] = useState("");
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    if (url !== currentUrl) {
      setCurrentUrl(url);
    }
  }, [url, currentUrl]);

  useFolderTracker(currentUrl, { logToConsole: true });

  useClipboardEventTracker({ logToConsole: true });

  const fileManagerRef = useRef<HTMLOListElement | null>(null);
  const { focusedEntries, focusableEntry, ...focusFunctions } =
    useFocusableEntries(fileManagerRef);
  const { fileActions, files, folderActions, isLoading, updateFiles } =
    useFolder(url, setRenaming, focusFunctions, {
      hideFolders,
      hideLoading,
      skipFsWatcher,
      skipSorting,
    });

  const { lstat, mountFs, rootFs } = useFileSystem();
  const { StyledFileEntry, StyledFileManager } = FileManagerViews[view];
  const { isSelecting, selectionRect, selectionStyling, selectionEvents } =
    useSelection(fileManagerRef, focusedEntries, focusFunctions);
  const draggableEntry = useDraggableEntries(
    focusedEntries,
    focusFunctions,
    fileManagerRef,
    isSelecting,
    allowMovingDraggableEntries
  );
  const fileDrop = useFileDrop({
    callback: folderActions.newPath,
    directory: url,
    updatePositions: allowMovingDraggableEntries,
  });
  const folderContextMenu = useFolderContextMenu(
    url,
    folderActions,
    isDesktop,
    isStartMenu
  );
  const loading = (!hideLoading && isLoading) || url !== currentUrl;
  const keyShortcuts = useFileKeyboardShortcuts(
    files,
    url,
    focusedEntries,
    setRenaming,
    focusFunctions,
    folderActions,
    updateFiles,
    fileManagerRef,
    id,
    view
  );
  const [permission, setPermission] = useState<PermissionState>("prompt");
  const requestingPermissions = useRef(false);
  const onKeyDown = useMemo(
    () => (renaming === "" ? keyShortcuts() : undefined),
    [keyShortcuts, renaming]
  );
  const fileKeys = useMemo(() => Object.keys(files), [files]);
  const isEmptyFolder =
    !isDesktop &&
    !isStartMenu &&
    !loading &&
    view === "icon" &&
    fileKeys.length === 0;

  useEffect(() => {
    if (
      !requestingPermissions.current &&
      permission !== "granted" &&
      rootFs?.mntMap[currentUrl]?.getName() === "FileSystemAccess"
    ) {
      requestingPermissions.current = true;

      import("contexts/fileSystem/functions").then(({ requestPermission }) =>
        requestPermission(currentUrl)
          .then((permissions) => {
            const isGranted = permissions === "granted";

            if (!permissions || isGranted) {
              setPermission("granted");

              if (isGranted) updateFiles();
            }
          })
          .catch((error: Error) => {
            if (error?.message === "Permission already granted") {
              setPermission("granted");
            }
          })
          .finally(() => {
            requestingPermissions.current = false;
          })
      );
    }
  }, [currentUrl, permission, rootFs?.mntMap, updateFiles]);

  useEffect(() => {
    if (!mounted && MOUNTABLE_EXTENSIONS.has(getExtension(url))) {
      const mountUrl = async (): Promise<void> => {
        if (!(await lstat(url)).isDirectory()) {
          setMounted((currentlyMounted) => {
            if (!currentlyMounted) {
              mountFs(url)
                .then(() => setTimeout(updateFiles, 100))
                .catch(() => {
                  // Ignore race-condition failures
                });
            }
            return true;
          });
        }
      };

      mountUrl().then(() => []);
    }
  }, [lstat, mountFs, mounted, updateFiles, url]);

  useEffect(() => {
    if (url !== currentUrl) {
      folderActions.resetFiles();
      setCurrentUrl(url);
      setPermission("denied");
    }
  }, [url, folderActions]);

  useEffect(() => {
    if (!loading && !isDesktop && !isStartMenu) {
      fileManagerRef.current?.focus(PREVENT_SCROLL);
    }
  }, [isDesktop, isStartMenu, loading]);

  return (
    <>
      {loading ? (
        <StyledLoading />
      ) : (
        <>
          {isEmptyFolder && <StyledEmpty />}
          <StyledFileManager
            ref={fileManagerRef}
            $isEmptyFolder={isEmptyFolder}
            $scrollable={!hideScrolling}
            onKeyDown={onKeyDown}
            {...(readOnly
              ? { onContextMenu: haltEvent }
              : {
                  $selecting: isSelecting,
                  ...fileDrop,
                  ...folderContextMenu,
                  ...selectionEvents,
                })}
            {...FOCUSABLE_ELEMENT}
          >
            {isSelecting && <StyledSelection style={selectionStyling} />}
            {customIcons.map((icon, index) => (
              <li
                key={index}
                draggable="true"
                style={icon.style}
                data-file={icon["data-file"]}
                className="sc-iGgVNO iPgsct"
                onClick={() => {
                  onFileSingleClick(icon["data-file"]);
                }}
                onDoubleClick={() => {
                  onFileDoubleClick(icon["data-file"]);
                }}
              >
                <button
                  aria-label={icon.iconProps["aria-label"]}
                  type="button"
                  className="sc-aYaIB hErKd"
                  title={icon.iconProps["title"]}
                >
                  <figure className="sc-dcJtft lflafl">
                    <picture>
                      <source
                        media="(min-resolution: 2.01x), (-webkit-min-device-pixel-ratio: 2.01)"
                        srcSet={icon.iconProps["srcSet"]}
                        type="image/webp"
                      />
                      <img
                        alt={icon.iconProps["alt"]}
                        decoding="async"
                        draggable="false"
                        height="48"
                        loading="eager"
                        width="48"
                        className="sc-gEvDqW jWxKGF"
                        src={icon.iconProps["src"]}
                      />
                    </picture>
                    <figcaption aria-level={1} role="heading">
                      {icon.iconProps["alt"]}
                    </figcaption>
                  </figure>
                </button>
              </li>
            ))}
            {fileKeys.map((file) => (
              <StyledFileEntry
                key={file}
                $desktop={isDesktop}
                $selecting={isSelecting}
                $visible={!isLoading}
                {...(!readOnly && draggableEntry(url, file, renaming === file))}
                {...(renaming === "" && { onKeyDown: keyShortcuts(file) })}
                {...focusableEntry(file)}
                data-file={file}
                onClick={() => {
                  onFileSingleClick?.(file);
                }}
                onDoubleClick={() => {
                  onFileDoubleClick?.(file);
                }}
              >
                <FileEntry
                  fileActions={fileActions}
                  fileManagerId={id}
                  fileManagerRef={fileManagerRef}
                  focusFunctions={focusFunctions}
                  focusedEntries={focusedEntries}
                  hasNewFolderIcon={isStartMenu}
                  hideShortcutIcon={hideShortcutIcons}
                  isDesktop={isDesktop}
                  isHeading={isDesktop && files[file].systemShortcut}
                  isLoadingFileManager={isLoading}
                  loadIconImmediately={loadIconsImmediately}
                  name={basename(file, SHORTCUT_EXTENSION)}
                  path={join(url, file)}
                  readOnly={readOnly}
                  renaming={renaming === file}
                  selectionRect={selectionRect}
                  setRenaming={setRenaming}
                  stats={files[file]}
                  view={view}
                  handleFileOpen={onFileOpen}
                />
              </StyledFileEntry>
            ))}
          </StyledFileManager>
        </>
      )}
      {showStatusBar && (
        <StatusBar
          count={loading ? 0 : fileKeys.length}
          directory={url}
          fileDrop={fileDrop}
          selected={focusedEntries}
        />
      )}
    </>
  );
};

export default memo(FileManager);
