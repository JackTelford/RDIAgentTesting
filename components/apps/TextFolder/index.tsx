import React, { useEffect, useRef, useState } from "react";
import { useMenu, MenuProvider } from "contexts/menu";
import {
  FolderContainer,
  FileContainer,
  ExitButton,
  FolderHeader,
  IconContainer,
  RDIIconContainer,
  DesktopIconContainer,
  PicturesIconContainer,
  DownloadsIconContainer,
  NewFolder,
  NewFolderIconContainer,
  BackButton,
} from "./StyledTextFolder";

interface TextFolderProps {
  id: string;
}

const TextFolder: React.FC<TextFolderProps> = ({ id }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [currentView, setCurrentView] = useState("main"); // State to manage current view
  const [isPositioned, setIsPositioned] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const formRef = useRef<HTMLDivElement>(null);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const { setMenu } = useMenu();

  const handleIconDoubleClick = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const handleCloseForm = () => {
    setIsOpen(false);
    setIsPositioned(false);
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target !== e.currentTarget) return;

    const form = formRef.current;
    if (form) {
      const rect = form.getBoundingClientRect();
      const initialOffset = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
      setOffset(initialOffset);
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    }
  };

  const handleMouseMove = (e: MouseEvent) => {
    const newPosition = {
      x: e.clientX - offset.x,
      y: e.clientY - offset.y,
    };
    setPosition(newPosition);
  };

  const handleMouseUp = () => {
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };

  const handleFolderClick = (view: string) => {
    setCurrentView(view);
  };

  const handleBackClick = () => {
    setCurrentView("main");
  };

  useEffect(() => {
    const form = formRef.current;
    if (form) {
      form.style.left = `${position.x}px`;
      form.style.top = `${position.y}px`;
    }
  }, [position]);

  useEffect(() => {
    if (isOpen && typeof window !== "undefined" && formRef.current) {
      const form = formRef.current;
      const initialX = (window.innerWidth - form.offsetWidth) / 2;
      const initialY = (window.innerHeight - form.offsetHeight) / 2;
      setPosition({ x: initialX, y: initialY });
      form.style.left = `${initialX}px`;
      form.style.top = `${initialY}px`;
      setIsPositioned(true);
    }
  }, [isOpen]);

  useEffect(() => {
    const textArea = textAreaRef.current;
    if (textArea) {
      textArea.style.height = "auto";
      textArea.style.height = `${textArea.scrollHeight}px`;
    }
  }, [currentView]);

  const handleContextMenu = (event: React.MouseEvent) => {
    event.preventDefault();
    setMenu({
      items: [
        { label: "Copy", action: handleCopy },
        { label: "Paste", action: handlePaste },
      ],
      x: event.clientX,
      y: event.clientY,
    });
  };

  const handleCopy = () => {
    if (textAreaRef.current) {
      const start = textAreaRef.current.selectionStart;
      const end = textAreaRef.current.selectionEnd;
      const selectedText = textAreaRef.current.value.substring(start, end);
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

  const handlePaste = () => {
    if (textAreaRef.current) {
      navigator.clipboard.readText().then((text) => {
        if (textAreaRef.current) {
          textAreaRef.current.value = text;
        }
        setMenu({ items: [], x: 0, y: 0 });
      });
    }
  };

  return (
    <div onContextMenu={handleContextMenu}>
      <div>
        <IconContainer onDoubleClick={handleIconDoubleClick}></IconContainer>
        <span>My Documents</span>
      </div>
      {isOpen && (
        <FolderContainer
          ref={formRef}
          style={{
            visibility: isPositioned ? "visible" : "hidden",
            left: `${position.x}px`,
            top: `${position.y}px`,
          }}
        >
          <FolderHeader onMouseDown={handleMouseDown}>
            <h2>{currentView === "main" ? "My Documents" : currentView}</h2>
            <ExitButton onClick={handleCloseForm}>X</ExitButton>
          </FolderHeader>
          <FileContainer>
            {currentView === "main" && (
              <>
                <NewFolderIconContainer
                  onDoubleClick={() => handleFolderClick("Letter.doc")}
                >
                  <RDIIconContainer />
                  <span>Letter.doc</span>
                </NewFolderIconContainer>
                <NewFolderIconContainer
                  onDoubleClick={() => handleFolderClick("Desktop")}
                >
                  <DesktopIconContainer />
                  <span>Desktop</span>
                </NewFolderIconContainer>
                <NewFolderIconContainer
                  onDoubleClick={() => handleFolderClick("Pictures")}
                >
                  <PicturesIconContainer />
                  <span>Pictures</span>
                </NewFolderIconContainer>
                <NewFolderIconContainer
                  onDoubleClick={() => handleFolderClick("Downloads")}
                >
                  <DownloadsIconContainer />
                  <span>Downloads</span>
                </NewFolderIconContainer>
              </>
            )}
            {currentView !== "main" && (
              <>
                <BackButton onClick={handleBackClick}>Back</BackButton>
                <NewFolder>
                  <textarea
                    ref={textAreaRef}
                    readOnly
                    value={
                      currentView === "Letter.doc"
                        ? `From: jtelford@rdiCorp.com
To: Andy@rdiCorp.com
Cc: Mike@rdiCorp.com
Subject: Update on Software Development Progress

Hi Andy,

I hope this email finds you well.

I wanted to provide you with a quick update on the current progress of our software development project. Over the past few weeks, our team has been working diligently to meet our milestones, and I am pleased to report that we are on track to meet our upcoming deadlines.

Here are some key updates:
1. **Feature Development**: The development team has successfully implemented the core functionalities of the application. We are currently in the testing phase to ensure everything operates smoothly.
2. **Bug Fixes**: Our QA team has identified and resolved several critical bugs. The system's stability has significantly improved, and we are working on fine-tuning the performance.
3. **User Interface**: The UI/UX team has completed the initial design and is now working on enhancing the user experience based on the feedback received during our last review meeting.

Moving forward, we have a few action items to focus on:
- **Final Testing**: Continue rigorous testing to identify any remaining issues and ensure the application is ready for deployment.
- **Documentation**: Finalize the user documentation and training materials for our internal teams and end-users.
- **Deployment Plan**: Prepare for the deployment phase, including setting up the necessary infrastructure and ensuring all dependencies are in place.

If you have any questions or need further details on any specific aspects, please feel free to reach out.

Best regards,
RDI Corporation
jtelford@rdiCorp.com
                    `
                        : currentView === "Desktop"
                          ? "This is my second folder"
                          : currentView === "Pictures"
                            ? "This is my third folder"
                            : "This is my fourth folder"
                    }
                    onContextMenu={handleContextMenu}
                  ></textarea>
                </NewFolder>
              </>
            )}
          </FileContainer>
        </FolderContainer>
      )}
    </div>
  );
};

export default TextFolder;
