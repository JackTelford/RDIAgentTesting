import React, { FC, useRef, useState } from "react";
import StyledDesktop from "components/system/Desktop/StyledDesktop";
import useWallpaper from "components/system/Desktop/Wallpapers/useWallpaper";
import FileManager from "components/system/Files/FileManager";
import { DESKTOP_PATH } from "utils/constants";
import Email from "../../apps/Email";
import RDIChat from "../../apps/RDIChat";
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
  }>({
    email: false,
    RDIChat: false,
  });

  useWallpaper(desktopRef);

  const [selectedIcon, setSelectedIcon] = useState<string | null>(null);

  const handleFileOpen = (file: string) => {
    setSelectedIcon(file);
    switch (file) {
      case "Email.url":
        setOpenApps((prev) => ({ ...prev, email: !prev.email }));
        break;
      case "RDIChat.url":
        setOpenApps((prev) => ({ ...prev, RDIChat: !prev.RDIChat }));
        break;
      default:
        break;
    }
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
      default:
        break;
    }
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
                selectedIcon === "Email.url" ? "lightblue" : "transparent",
            },
            iconProps: {
              "aria-label": "Email",
              title: "Opens Email Application",
              alt: "Email",
              src: "/System/Icons/16x16/outlookemail.png",
              srcSet:
                "/System/Icons/48x48/outlookemail.png, /System/Icons/96x96/outlookemail.png 2x, /System/Icons/144x144/outlookemail.png 3x",
            },
          },
          {
            "data-file": "RDIChat.url",
            style: {
              gridColumnStart: 2,
              gridRowStart: 3,
              backgroundColor:
                selectedIcon === "RDIChat.url" ? "lightblue" : "transparent",
            }, // Adjust as needed
            iconProps: {
              "aria-label": "RDIChat",
              title: "Opens RDIChat Application",
              alt: "RDIChat",
              src: "/System/Icons/16x16/chat.png",
              srcSet:
                "/System/Icons/48x48/chat.png, /System/Icons/96x96/chat.png 2x, /System/Icons/144x144/chat.png 3x",
            },
          },
        ]}
        onFileOpen={handleFileOpen}
        onFileDoubleClick={handleFileDoubleClick}
      />
      {openApps.email && <Email id={id} key={`email-${openApps.email}`} />}

      {openApps.RDIChat && (
        <UserProvider>
          <RDIChat id={id} key={`RDIChat-${openApps.RDIChat}`} />
        </UserProvider>
      )}

      {children}
    </StyledDesktop>
  );
};

export default Desktop;

// path: components/system/Desktop/index.tsx
