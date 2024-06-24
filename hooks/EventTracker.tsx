import { useEffect, useRef } from "react";

interface EventOptions {
  logToConsole?: boolean;
}

export const logEvent = (
  eventDescription: string,
  options?: EventOptions
): void => {
  if (options?.logToConsole && eventDescription) {
    console.log(eventDescription);
  }
};

export const useFolderTracker = (
  folderName: string,
  options?: EventOptions
): void => {
  const prevFolderName = useRef<string | null>(null);
  const accessedFolders = useRef<Set<string>>(new Set());
  const hasMounted = useRef(false);

  useEffect(() => {
    if (hasMounted.current) {
      if (
        folderName &&
        (folderName !== prevFolderName.current || folderName === "/")
      ) {
        if (!accessedFolders.current.has(folderName)) {
          logEvent(`Folder opened ${folderName}`, options);
          accessedFolders.current.add(folderName);
        }
        prevFolderName.current = folderName;
      }
    } else {
      hasMounted.current = true;
    }
  }, [folderName, options]);
};

export const useMouseClickTracker = (options?: EventOptions): void => {
  const eventLoggerRef = useRef<(event: MouseEvent) => void>();

  if (!eventLoggerRef.current) {
    eventLoggerRef.current = (event: MouseEvent): void => {
      const { clientX, clientY, button, detail, target } = event;
      const targetElement =
        target instanceof HTMLElement ? target.tagName : "Unknown";

      /*    logEvent(
        `Mouse clicked at (${clientX}, ${clientY}), Button: ${button}, Click Count: ${detail}, Target Element: ${targetElement}`,
        options
      );*/
    };
  }

  useEffect(() => {
    if (eventLoggerRef.current) {
      const handleClick = eventLoggerRef.current;
      document.addEventListener("click", handleClick);
      return () => document.removeEventListener("click", handleClick);
    }
    return () => {};
  }, []);
};

export const useClipboardEventTracker = (options?: EventOptions): void => {
  useEffect(() => {
    const handleCut = () => logEvent("File cut", options);
    const handleCopy = () => logEvent("File copied", options);
    const handlePaste = () => logEvent("File pasted", options);
    const handleDelete = () => logEvent("File deleted", options);

    const handleKeydown = (event: KeyboardEvent) => {
      if (event.key === "Delete") {
        handleDelete();
      } else if (event.ctrlKey && event.key.toLowerCase() === "c") {
        handleCopy();
      } else if (event.ctrlKey && event.key.toLowerCase() === "x") {
        handleCut();
      } else if (event.ctrlKey && event.key.toLowerCase() === "v") {
        handlePaste();
      }
    };

    const handleContextMenuClick = (event: MouseEvent) => {
      const path = event.composedPath() as HTMLElement[];
      path.forEach((element) => {
        if (
          element instanceof HTMLElement &&
          element.classList.contains("context-menu-item")
        ) {
          const menuItem = element.textContent?.toLowerCase();
          if (menuItem?.includes("cut")) {
            handleCut();
          } else if (menuItem?.includes("copy")) {
            handleCopy();
          } else if (menuItem?.includes("paste")) {
            handlePaste();
          } else if (menuItem?.includes("delete")) {
            handleDelete();
          }
        }
      });
    };

    const handleRightClick = (event: MouseEvent) => {
      event.preventDefault();
      logEvent("Right click", options);
    };

    const handleDragStart = (_event: DragEvent) => {
      logEvent("File drag started", options);
    };

    const handleDragOver = (_event: DragEvent) => {
      logEvent("File dragged over", options);
    };

    document.addEventListener("cut", handleCut);
    document.addEventListener("copy", handleCopy);
    document.addEventListener("paste", handlePaste);
    document.addEventListener("keydown", handleKeydown);
    document.addEventListener("click", handleContextMenuClick);
    document.addEventListener("contextmenu", handleRightClick);
    document.addEventListener("dragstart", handleDragStart);
    document.addEventListener("dragover", handleDragOver);

    return () => {
      document.removeEventListener("cut", handleCut);
      document.removeEventListener("copy", handleCopy);
      document.removeEventListener("paste", handlePaste);
      document.removeEventListener("keydown", handleKeydown);
      document.removeEventListener("click", handleContextMenuClick);
      document.removeEventListener("contextmenu", handleRightClick);
      document.removeEventListener("dragstart", handleDragStart);
      document.removeEventListener("dragover", handleDragOver);
    };
  }, [options]);
};
// Path: hooks/EventTracker.tsx
