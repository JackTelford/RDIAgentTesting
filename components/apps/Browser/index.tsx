import { basename, join, resolve } from "path";
import { useCallback, useEffect, useRef, useState } from "react";
import { useMenu, MenuProvider } from "contexts/menu";
import useHistoryMenu from "components/apps/Browser/useHistoryMenu";
import useBookmarkMenu from "components/apps/Browser/useBookmarkMenu";
import {
  createDirectoryIndex,
  type DirectoryEntries,
} from "components/apps/Browser/directoryIndex";
import { Arrow, Refresh, Stop } from "components/apps/Browser/NavigationIcons";
import StyledBrowser from "components/apps/Browser/StyledBrowser";
import {
  DINO_GAME,
  RDIForm,
  HOME_PAGE,
  LOCAL_HOST,
  NOT_FOUND,
  bookmarks,
  SalesReport,
} from "components/apps/Browser/config";
import { type ComponentProcessProps } from "components/system/Apps/RenderComponent";
import useTitle from "components/system/Window/useTitle";
import { useFileSystem } from "contexts/fileSystem";
import { useProcesses } from "contexts/process";
import processDirectory from "contexts/process/directory";
import useHistory from "hooks/useHistory";
import Button from "styles/common/Button";
import Icon from "styles/common/Icon";
import {
  FAVICON_BASE_PATH,
  IFRAME_CONFIG,
  ONE_TIME_PASSIVE_EVENT,
  SHORTCUT_EXTENSION,
} from "utils/constants";
import {
  GOOGLE_SEARCH_QUERY,
  getExtension,
  getUrlOrSearch,
  label,
} from "utils/functions";
import {
  getInfoWithExtension,
  getShortcutInfo,
} from "components/system/Files/FileEntry/functions";
import { useSession } from "contexts/session";

const Browser: FC<ComponentProcessProps> = ({ id }) => {
  const {
    icon: setIcon,
    linkElement,
    url: changeUrl,
    processes: { [id]: process },
    open,
  } = useProcesses();
  const { setForegroundId } = useSession();
  const { prependFileToTitle } = useTitle(id);
  const { initialTitle = "", url = "" } = process || {};
  const initialUrl = url || HOME_PAGE;
  const { canGoBack, canGoForward, history, moveHistory, position } =
    useHistory(initialUrl, id);
  const { exists, fs, stat, readFile, readdir } = useFileSystem();
  const inputRef = useRef<HTMLInputElement | null>(null);
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const [loading, setLoading] = useState(false);
  const [srcDoc, setSrcDoc] = useState("");
  const changeHistory = (step: number): void => {
    moveHistory(step);

    if (inputRef.current) inputRef.current.value = history[position + step];
  };
  const currentUrl = useRef("");
  const changeIframeWindowLocation = (
    newUrl: string,
    contentWindow: Window
  ): void => {
    let isSrcDoc = false;

    try {
      isSrcDoc = contentWindow.location?.pathname === "srcdoc";
    } catch {
      // Ignore failure to read iframe window path
    }

    if (isSrcDoc) {
      setSrcDoc("");
      iframeRef.current?.setAttribute("src", newUrl);
    } else {
      contentWindow.location?.replace(newUrl);
    }
  };

  const [activeTab, setActiveTab] = useState(0);
  const goToLink = useCallback(
    (newUrl: string): void => {
      if (inputRef.current) {
        inputRef.current.value = newUrl;
      }
      changeUrl(id, newUrl);
      updateTabUrl(activeTab, newUrl);
    },
    [changeUrl, id, activeTab]
  );

  const { backMenu, forwardMenu } = useHistoryMenu(
    history,
    position,
    moveHistory
  );

  const bookmarkMenu = useBookmarkMenu();
  const setUrl = useCallback(
    async (addressInput: string): Promise<void> => {
      const { contentWindow } = iframeRef.current || {};

      if (contentWindow?.location) {
        const isHtml =
          [".htm", ".html"].includes(getExtension(addressInput)) &&
          (await exists(addressInput));

        setLoading(true);
        if (isHtml) setSrcDoc((await readFile(addressInput)).toString());
        setIcon(id, processDirectory.Browser.icon);

        // Handle DINOGAME URL
        if (addressInput.toLowerCase().startsWith(DINO_GAME.url)) {
          changeIframeWindowLocation(
            `${window.location.origin}${DINO_GAME.path}`,
            contentWindow
          );
          prependFileToTitle(`${DINO_GAME.url}/`);
        }

        // Handle RDIForm URL
        else if (addressInput.toLowerCase().startsWith(RDIForm.url)) {
          changeIframeWindowLocation(
            `${window.location.origin}${RDIForm.path}`,
            contentWindow
          );
          prependFileToTitle(`${RDIForm.url}/`);
        }

        // Handle SalesReport URL
        else if (addressInput.toLowerCase().startsWith(SalesReport.url)) {
          changeIframeWindowLocation(
            `${window.location.origin}${SalesReport.path}`,
            contentWindow
          );
          prependFileToTitle(`${SalesReport.url}/`);
        } else if (!isHtml) {
          const processedUrl = await getUrlOrSearch(addressInput);
          if (
            LOCAL_HOST.has(processedUrl.host) ||
            LOCAL_HOST.has(addressInput)
          ) {
            const directory =
              decodeURI(processedUrl.pathname).replace(/\/$/, "") || "/";
            const searchParams = Object.fromEntries(
              new URLSearchParams(
                processedUrl.search.replace(";", "&")
              ).entries()
            );
            const { O: order, C: column } = searchParams;
            const isAscending = !order || order === "A";
            let newSrcDoc = NOT_FOUND;
            let newTitle = "404 Not Found";
            if (
              (await exists(directory)) &&
              (await stat(directory)).isDirectory()
            ) {
              const dirStats = (
                await Promise.all<DirectoryEntries>(
                  (await readdir(directory)).map(async (entry) => {
                    const href = join(directory, entry);
                    let description;
                    let shortcutUrl;
                    if (getExtension(entry) === SHORTCUT_EXTENSION) {
                      try {
                        ({ comment: description, url: shortcutUrl } =
                          getShortcutInfo(await readFile(href)));
                      } catch {
                        // Ignore failure to read shortcut
                      }
                    }

                    const stats = await stat(
                      shortcutUrl && (await exists(shortcutUrl))
                        ? shortcutUrl
                        : href
                    );
                    const isDir = stats.isDirectory();

                    return {
                      description,
                      href: isDir && shortcutUrl ? shortcutUrl : href,
                      icon: isDir ? "folder" : undefined,
                      modified: stats.mtime,
                      size: isDir || shortcutUrl ? undefined : stats.size,
                    };
                  })
                )
              )
                .sort(
                  (a, b) =>
                    Number(b.icon === "folder") - Number(a.icon === "folder")
                )
                .sort((a, b) => {
                  const aIsFolder = a.icon === "folder";
                  const bIsFolder = b.icon === "folder";

                  if (aIsFolder === bIsFolder) {
                    const aName = basename(a.href);
                    const bName = basename(b.href);

                    if (isAscending) return aName < bName ? -1 : 1;

                    return aName > bName ? -1 : 1;
                  }

                  return 0;
                })
                .sort((a, b) => {
                  if (!column || column === "N") return 0;

                  const sortValue = (
                    getValue: (entry: DirectoryEntries) => number | string
                  ): number => {
                    const aValue = getValue(a);
                    const bValue = getValue(b);

                    if (aValue === bValue) return 0;
                    if (isAscending) return aValue < bValue ? -1 : 1;

                    return aValue > bValue ? -1 : 1;
                  };

                  if (column === "S") {
                    return sortValue(({ size }) => size ?? 0);
                  }

                  if (column === "M") {
                    return sortValue(
                      ({ modified }) => modified?.getTime() ?? 0
                    );
                  }

                  if (column === "D") {
                    return sortValue(({ description }) => description ?? "");
                  }

                  return 0;
                })
                .sort(
                  (a, b) =>
                    Number(b.icon === "folder") - Number(a.icon === "folder")
                );

              iframeRef.current?.addEventListener(
                "load",
                () => {
                  try {
                    contentWindow.document.body
                      .querySelectorAll("a")
                      .forEach((a) => {
                        a.addEventListener("click", (event) => {
                          event.preventDefault();

                          const target =
                            event.currentTarget as HTMLAnchorElement;
                          const isDir =
                            target.getAttribute("type") === "folder";
                          const { origin, pathname, search } = new URL(
                            target.href
                          );

                          if (search) {
                            goToLink(
                              `${origin}${encodeURI(directory)}${search}`
                            );
                          } else if (isDir) {
                            goToLink(target.href);
                          } else if (fs && target.href) {
                            getInfoWithExtension(
                              fs,
                              decodeURI(pathname),
                              getExtension(pathname),
                              ({ pid, url: infoUrl }) =>
                                open(pid || "OpenWith", { url: infoUrl })
                            );
                          }
                        });
                      });
                  } catch {
                    // Ignore failure to add click event listeners
                  }
                },
                ONE_TIME_PASSIVE_EVENT
              );

              newSrcDoc = createDirectoryIndex(
                directory,
                processedUrl.origin,
                searchParams,
                directory === "/"
                  ? dirStats
                  : [
                      {
                        href: resolve(directory, ".."),
                        icon: "back",
                      },
                      ...dirStats,
                    ]
              );

              newTitle = `Index of ${directory}`;
            }

            setSrcDoc(newSrcDoc);
            prependFileToTitle(newTitle);
          } else {
            const addressUrl = processedUrl.href;
            changeIframeWindowLocation(addressUrl, contentWindow);
            if (addressUrl.startsWith(GOOGLE_SEARCH_QUERY)) {
              prependFileToTitle(`${addressInput} - Google Search`);
            } else {
              const { name = initialTitle } =
                bookmarks?.find(
                  ({ url: bookmarkUrl }) => bookmarkUrl === addressInput
                ) || {};
              prependFileToTitle(name);
            }

            if (addressInput.startsWith("ipfs://")) {
              setIcon(id, "/System/Icons/Favicons/ipfs.webp");
            } else {
              const favicon = new Image();
              const faviconUrl = `${
                new URL(addressUrl).origin
              }${FAVICON_BASE_PATH}`;

              favicon.addEventListener(
                "error",
                () => {
                  const { icon } =
                    bookmarks?.find(
                      ({ url: bookmarkUrl }) => bookmarkUrl === addressUrl
                    ) || {};

                  if (icon) setIcon(id, icon);
                },
                ONE_TIME_PASSIVE_EVENT
              );
              favicon.addEventListener(
                "load",
                () => setIcon(id, faviconUrl),
                ONE_TIME_PASSIVE_EVENT
              );
              favicon.src = faviconUrl;
            }
          }
        }
      }
    },
    [
      exists,
      fs,
      goToLink,
      id,
      initialTitle,
      open,
      prependFileToTitle,
      readFile,
      readdir,
      setIcon,
      stat,
    ]
  );

  useEffect(() => {
    if (process && history[position] !== currentUrl.current) {
      currentUrl.current = history[position];
      setUrl(history[position]);
    }
  }, [history, position, process, setUrl]);

  useEffect(() => {
    if (iframeRef.current) {
      linkElement(id, "peekElement", iframeRef.current);
    }
  }, [id, linkElement]);

  const [tabs, setTabs] = useState([{ id: 0, url: initialUrl }]);
  // Function to add a new tab
  const addTab = () => {
    const newTabId = new Date().getTime();
    setTabs([...tabs, { id: newTabId, url: HOME_PAGE }]);
    setActiveTab(newTabId);
  };

  // Function to switch to a different tab
  const switchTab = (tabId: number) => {
    const tab = tabs.find((tab) => tab.id === tabId); // added this to check to ensure the tab exists
    if (tab) {
      setActiveTab(tabId);
      setUrl(tab.url);
    }
  };

  // Update the URL for the current tab
  const updateTabUrl = (tabId: number, url: string) => {
    setTabs(tabs.map((tab) => (tab.id === tabId ? { ...tab, url } : tab)));
  };

  // Update useEffect to set the URL for the active tab
  useEffect(() => {
    if (process && history[position] !== currentUrl.current) {
      currentUrl.current = history[position];
      setUrl(history[position]).then((r) => r);
      updateTabUrl(activeTab, history[position]);
    }
  }, [history, position, process, setUrl, activeTab]);

  // Function to close a tab
  const closeTab = (tabId: number) => {
    const newTabs = tabs.filter((tab) => tab.id !== tabId);
    setTabs(newTabs);
    if (activeTab === tabId && newTabs.length > 0) {
      const newActiveTab = newTabs.length === 1 ? newTabs[0].id : newTabs[0].id;
      setActiveTab(newActiveTab);
      setUrl(newTabs[0].url);
    } else if (newTabs.length === 0) {
      setActiveTab(0);
      setUrl(HOME_PAGE);
    }
  };

  // copy paste logic
  const { setMenu } = useMenu();
  const [lastFocusedElement, setLastFocusedElement] =
    useState<HTMLElement | null>(null);
  const handleContextMenu = (event: React.MouseEvent) => {
    event.preventDefault();
    const { clientX, clientY } = event;
    const element = event.target as HTMLElement;
    setMenu({
      items: [
        {
          label: "Copy",
          action: () => handleCopy(element),
        },
        {
          label: "Paste",
          action: () => handlePaste(element),
        },
      ],
      x: clientX,
      y: clientY,
    });
  };
  const handleCopy = (element: HTMLElement) => {
    if (
      element instanceof HTMLInputElement ||
      element instanceof HTMLTextAreaElement
    ) {
      const selectionStart = element.selectionStart ?? 0;
      const selectionEnd = element.selectionEnd ?? 0;
      const selectedText = element.value.substring(
        selectionStart,
        selectionEnd
      );
      if (selectedText) {
        navigator.clipboard
          .writeText(selectedText)
          .then(() => {
            setMenu({ items: [], x: 0, y: 0 });
          })
          .catch((err) => {
            console.error("Failed to copy selected text:", err);
          });
      }
    }
  };
  const handlePaste = (element: HTMLElement) => {
    if (
      lastFocusedElement instanceof HTMLInputElement ||
      lastFocusedElement instanceof HTMLTextAreaElement
    ) {
      navigator.clipboard
        .readText()
        .then((text) => {
          if (document.body.contains(lastFocusedElement)) {
            const selectionStart = lastFocusedElement.selectionStart ?? 0;
            const selectionEnd = lastFocusedElement.selectionEnd ?? 0;
            const currentValue = lastFocusedElement.value;
            const newValue =
              currentValue.slice(0, selectionStart) +
              text +
              currentValue.slice(selectionEnd);
            lastFocusedElement.value = newValue;
            lastFocusedElement.setSelectionRange(
              selectionStart + text.length,
              selectionStart + text.length
            );

            // Manually update the state
            switch (lastFocusedElement.id) {
              case "urlInput":
                setUrl(newValue);
                break;
              default:
                break;
            }

            const inputEvent = new Event("input", { bubbles: true });
            lastFocusedElement.dispatchEvent(inputEvent);
            setMenu({ items: [], x: 0, y: 0 });
          }
        })
        .catch((err) => {
          console.error("Failed to read clipboard contents:", err);
        });
    }
  };

  // copy and paste logic

  return (
    <StyledBrowser $hasSrcDoc={Boolean(srcDoc)}>
      <div id="tabs-nav">
        {tabs.map((tab) => (
          <div key={tab.id} className="tab">
            <div className="tab-container">
              <Button
                id={`tab-${tab.id}`}
                key={tab.id}
                onClick={() => switchTab(tab.id)}
                {...label(`Switch to tab ${tab.url}`)}
              >
                {tab.url}
              </Button>
              <Button
                id={`close-tab-${tab.id}`}
                className="close-tab"
                onClick={() => closeTab(tab.id)}
                {...label(`Close tab ${tab.url}`)}
              >
                X
              </Button>
            </div>
          </div>
        ))}
        <Button id="add-tab" onClick={addTab} {...label(`Add new tab`)}>
          +
        </Button>
      </div>

      <nav>
        <div>
          <Button
            disabled={!canGoBack}
            onClick={() => changeHistory(-1)}
            {...label("Click to go back")}
            {...backMenu}
          >
            <Arrow direction="left" />
          </Button>
          <Button
            disabled={!canGoForward}
            onClick={() => changeHistory(+1)}
            {...label("Click to go forward")}
            {...forwardMenu}
          >
            <Arrow direction="right" />
          </Button>
          <Button
            disabled={loading}
            onClick={() => setUrl(history[position])}
            {...label("Reload this page")}
          >
            {loading ? <Stop /> : <Refresh />}
          </Button>
        </div>
        <input
          ref={inputRef}
          defaultValue={initialUrl}
          enterKeyHint="go"
          onFocusCapture={() => inputRef.current?.select()}
          onKeyDown={({ key }) => {
            if (inputRef.current && key === "Enter") {
              changeUrl(id, inputRef.current.value);
              if (currentUrl.current === inputRef.current.value) {
                setUrl(inputRef.current.value);
              }
              window.getSelection()?.removeAllRanges();
              inputRef.current.blur();
            }
          }}
          onContextMenu={handleContextMenu}
          type="text"
          id="urlInput"
        />
      </nav>
      <nav>
        {bookmarks.map(({ name, icon, url: bookmarkUrl }) => (
          <div key={name} className="bookmark-container">
            <Button
              className="bookmark-button"
              onClick={({ ctrlKey }) => {
                if (window.parent) {
                  window.parent.postMessage(
                    {
                      event: "bookmarkClicked",
                      details: {
                        name,
                        url: bookmarkUrl,
                      },
                    },
                    "*"
                  );
                }
                if (ctrlKey) {
                  open("Browser", { url: bookmarkUrl });
                } else {
                  goToLink(bookmarkUrl);
                }
              }}
              {...label(
                `${name}\n${bookmarkUrl.replace(/^http:\/\//, "").replace(/\/$/, "")}`
              )}
              {...bookmarkMenu}
            >
              <Icon alt={name} imgSize={32} src={icon} />
              <span className="bookmark-name">{name}</span>
            </Button>
          </div>
        ))}
      </nav>
      <iframe
        ref={iframeRef}
        onLoad={() => {
          try {
            iframeRef.current?.contentWindow?.addEventListener("focus", () =>
              setForegroundId(id)
            );
          } catch {
            // Ignore failure to add focus event listener
          }

          if (loading) setLoading(false);
        }}
        srcDoc={srcDoc || undefined}
        title={id}
        {...IFRAME_CONFIG}
      />
    </StyledBrowser>
  );
};

export default Browser;
