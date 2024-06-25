import React, { FC, useRef, useState } from "react";
import StyledDesktop from "components/system/Desktop/StyledDesktop";
import useWallpaper from "components/system/Desktop/Wallpapers/useWallpaper";
import FileManager from "components/system/Files/FileManager";
import { DESKTOP_PATH } from "utils/constants";
import Email from "../../apps/Email";
import RDIChat from "../../apps/RDIChat";
import TextFolder from "../../apps/TextFolder";
import { UserProvider } from "../../apps/RDIChat/UserContext";

interface DesktopProps {
  id: string;
  children?: React.ReactNode;
}

const Desktop: FC<DesktopProps> = ({ children, id }) => {
  const desktopRef = useRef<HTMLElement | null>(null);
  const [openApps, setOpenApps] = useState<{
    email: boolean;
    RDIChat: boolean;
    TextFolder: boolean;
  }>({
    email: false,
    RDIChat: false,
    TextFolder: false,
  });

  useWallpaper(desktopRef);

  const [selectedIcon, setSelectedIcon] = useState<string | null>(null);
  const lastClickTime = useRef<number>(0);
  const clickTimeout = useRef<NodeJS.Timeout | null>(null);

  const handleFileOpen = (file: string) => {
    setSelectedIcon(file);
    switch (file) {
      case "Email.url":
        setOpenApps((prev) => ({ ...prev, email: !prev.email }));
        break;
      case "RDIChat.url":
        setOpenApps((prev) => ({ ...prev, RDIChat: !prev.RDIChat }));
        break;
      case "TextFolder.url":
        setOpenApps((prev) => ({ ...prev, TextFolder: !prev.TextFolder }));
        break;
      default:
        break;
    }
  };

  const handleFileSingleClick = (file: string) => {
    setSelectedIcon(file);
  };

  const handleFileDoubleClick = (file: string) => {
    setSelectedIcon(file);
    switch (file) {
      case "Email.url":
        setOpenApps((prev) => {
          const newState = { ...prev, email: !prev.email };
          return newState;
        });
        break;
      case "RDIChat.url":
        setOpenApps((prev) => {
          const newState = { ...prev, RDIChat: !prev.RDIChat };
          return newState;
        });
        break;
      case "TextFolder.url":
        setOpenApps((prev) => {
          const newState = { ...prev, TextFolder: !prev.TextFolder };
          return newState;
        });
        break;
      default:
        break;
    }
  };

  const handleIconClick = (file: string) => {
    const now = Date.now();
    if (now - lastClickTime.current < 300) {
      if (clickTimeout.current) {
        clearTimeout(clickTimeout.current);
      }
      handleFileDoubleClick(file);
    } else {
      handleFileSingleClick(file);
      setSelectedIcon(file);
      clickTimeout.current = setTimeout(() => {
        handleFileOpen(file);
        clickTimeout.current = null;
      }, 300);
    }
    lastClickTime.current = now;
  };

  return (
    <StyledDesktop ref={desktopRef}>
      <FileManager
        url={DESKTOP_PATH}
        view="icon"
        allowMovingDraggableEntries
        hideLoading
        hideScrolling
        isDesktop
        loadIconsImmediately
        customIcons={[
          {
            "data-file": "Email.url",
            style: {
              gridColumnStart: 1,
              gridRowStart: 3,
              backgroundColor:
                selectedIcon === "Email.url" ? "" : "transparent",
            },
            iconProps: {
              "aria-label": "Email",
              title: "Opens Email Application",
              alt: "Outlook",
              src: "/System/Icons/16x16/outlookemail.png",
              srcSet:
                "/System/Icons/32x32/outlookemail.png 1x, /System/Icons/48x48/outlookemail.png 2x, /System/Icons/96x96/outlookemail.png 3x, /System/Icons/144x144/outlookemail.png 4x",
            },
          },
          {
            "data-file": "RDIChat.url",
            style: {
              gridColumnStart: 1,
              gridRowStart: 4,
              backgroundColor:
                selectedIcon === "RDIChat.url" ? "" : "transparent",
            },
            iconProps: {
              "aria-label": "RDIChat",
              title: "Opens RDIChat Application",
              alt: "RDIChat",
              src: "/System/Icons/16x16/chat.png",
              srcSet:
                "/System/Icons/32x32/chat.png 1x, /System/Icons/48x48/chat.png 2x, /System/Icons/96x96/chat.png 3x, /System/Icons/144x144/chat.png 4x",
            },
          },
          {
            "data-file": "TextFolder.url",
            style: {
              gridColumnStart: 1,
              gridRowStart: 5,
              backgroundColor:
                selectedIcon === "TextFolder.url" ? "" : "transparent",
            },
            iconProps: {
              "aria-label": "My Documents",
              title: "Opens TextFolder Application",
              alt: "My Documents",
              src: "/System/Icons/48x48/folder.png",
              srcSet:
                "/System/Icons/32x32/folder.png 1x, /System/Icons/16x16/folder.png 2x, /System/Icons/96x96/folder.png 3x, /System/Icons/144x144/folder.png 4x",
            },
          },
        ]}
        onFileOpen={handleIconClick}
        onFileDoubleClick={handleFileDoubleClick}
        onFileSingleClick={handleFileSingleClick}
      />
      {openApps.email && <Email id={id} key={`email-${openApps.email}`} />}

      {openApps.RDIChat && (
        <UserProvider>
          <RDIChat id={id} key={`RDIChat-${openApps.RDIChat}`} />
        </UserProvider>
      )}

      {openApps.TextFolder && (
        <TextFolder id={id} key={`TextFolder-${openApps.TextFolder}`} />
      )}

      {children}
    </StyledDesktop>
  );
};

export default Desktop;
