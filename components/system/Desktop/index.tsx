// path: components/system/Desktop/index.tsx

import React, { FC, useRef } from "react";
import StyledDesktop from "components/system/Desktop/StyledDesktop";
import useWallpaper from "components/system/Desktop/Wallpapers/useWallpaper";
import FileManager from "components/system/Files/FileManager";
import { DESKTOP_PATH } from "utils/constants";
import Email from "../../apps/Email"; // Correct import path for Email component

// Define the props for the Desktop component to include id
interface DesktopProps {
  id: string;
  children?: React.ReactNode;
}

// Ensure the Desktop component expects an id prop
const Desktop: FC<DesktopProps> = ({ children, id }) => {
  const desktopRef = useRef<HTMLElement | null>(null);

  useWallpaper(desktopRef);

  return (
    <StyledDesktop ref={desktopRef}>
      {/* Pass the id prop to Email component */}
      <Email id={id} />
      <FileManager
        url={DESKTOP_PATH}
        view="icon"
        allowMovingDraggableEntries
        hideLoading
        hideScrolling
        isDesktop
        loadIconsImmediately
      />
      {children}
    </StyledDesktop>
  );
};

export default Desktop;
