import React, { useState, useCallback, useEffect, useRef } from "react";
import { ComponentProcessProps } from "components/system/Apps/RenderComponent";
import { useMenu, MenuProvider } from "contexts/menu";
import {
  EmailContainer,
  IconContainer,
  DropArea,
  Toolbar,
  AttachmentList,
  UserAvatar,
  ExitButton,
  EmailHeader,
  StyledInput,
  SubmitButton,
  EmailBody,
  StyledBodyInput,
} from "./StyledEmail";

import { userAvatars } from "./UserContext";

const Email: React.FC<ComponentProcessProps> = () => {
  const [email, setEmail] = useState("");
  const [cc, setCc] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [attachments, setAttachments] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isPositioned, setIsPositioned] = useState(false);
  const { setMenu } = useMenu();
  const [emailSent, setEmailSent] = useState(false);
  const [message, setMessage] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [lastFocusedElement, setLastFocusedElement] =
    useState<HTMLElement | null>(null);
  const textAreaRefs = {
    email: useRef<HTMLInputElement>(null),
    cc: useRef<HTMLInputElement>(null),
    subject: useRef<HTMLInputElement>(null),
    body: useRef<HTMLTextAreaElement>(null),
  };

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      if (!isValidEmail(email)) {
        setEmailError("Please enter a valid email address.");
        return;
      }
      setEmailError("");
      const emailDetails = {
        to: email,
        cc: cc,
        subject: subject,
        body: body,
        attachments: attachments,
      };
      console.log("Details of Email sent:", emailDetails);
      if (window.parent) {
        window.parent.postMessage(
          {
            event: "emailSent",
            details: emailDetails,
          },
          "*"
        );
      }
      setEmail("");
      setCc("");
      setSubject("");
      setBody("");
      setAttachments([]);
      setEmailSent(true);
      setTimeout(() => {
        setEmailSent(false);
      }, 2000);
    },
    [email, cc, subject, body, attachments]
  );

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

  const handleIconDoubleClick = () => {
    setIsOpen(true);
  };

  const handleCloseForm = () => {
    setIsOpen(false);
    setIsPositioned(false);
    setEmail("");
    setCc("");
    setSubject("");
    setBody("");
    setAttachments([]);
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

  useEffect(() => {
    const form = formRef.current;
    if (form) {
      form.style.left = `${position.x}px`;
      form.style.top = `${position.y}px`;
    }
  }, [position]);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFiles: string[] = [];
    if (e.dataTransfer.items) {
      for (let i = 0; i < e.dataTransfer.items.length; i++) {
        const item = e.dataTransfer.items[i];
        if (item.kind === "file") {
          const file = item.getAsFile();
          if (file) {
            droppedFiles.push(file.name);
          }
        } else if (item.kind === "string") {
          item.getAsString((data) => {
            if (data.startsWith("[")) {
              droppedFiles.push(data);
              setAttachments((prev) => [
                ...new Set([...prev, ...droppedFiles]),
              ]);
            }
          });
        }
      }
    } else {
      const files = Array.from(e.dataTransfer.files).map((file) => file.name);
      droppedFiles.push(...files);
    }

    if (droppedFiles.length > 0) {
      setAttachments((prev) => [...new Set([...prev, ...droppedFiles])]);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const fileInputRef = useRef<HTMLInputElement>(null);
  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []).map((file) => file.name);
    setAttachments((prev) => [...new Set([...prev, ...files])]);
  };

  const handleAttachButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  // Copy paste logic
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [emailError, setEmailError] = useState("");
  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    if (!isValidEmail(value)) {
      setIsEmailValid(false);
    } else {
      setEmailError("");
      setIsEmailValid(true);
    }
  };
  const handleCcChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCc(e.target.value);
  };
  const handleSubjectChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSubject(e.target.value);
  };
  const handleBodyChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setBody(e.target.value);
  };

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
            switch (lastFocusedElement.id) {
              case "To":
                setEmail(newValue);
                break;
              case "Cc":
                setCc(newValue);
                break;
              case "Subject":
                setSubject(newValue);
                break;
              case "Body":
                setBody(newValue);
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
  // copy and paste logic end
  return (
    <div>
      <IconContainer onDoubleClick={handleIconDoubleClick}></IconContainer>
      {isOpen && (
        <EmailContainer
          ref={formRef}
          style={{
            visibility: isPositioned ? "visible" : "hidden",
            left: `${position.x}px`,
            top: `${position.y}px`,
          }}
          onContextMenu={handleContextMenu}
        >
          <EmailHeader onMouseDown={handleMouseDown}>
            <h2>Email</h2>
            <ExitButton onClick={handleCloseForm}>X</ExitButton>
          </EmailHeader>
          <Toolbar className="toolbar">
            <UserAvatar src={userAvatars["RDI-Applicant"]} alt="User Avatar" />
            <button
              type="button"
              className="toolbar-button"
              onClick={handleAttachButtonClick}
            >
              Attach files
            </button>
            <input
              type="file"
              ref={fileInputRef}
              style={{ display: "none" }}
              onChange={handleFileInputChange}
              multiple
            />
          </Toolbar>
          <EmailBody
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            onDragLeave={handleDragLeave}
          >
            <DropArea $isDragging={isDragging} />
            {emailSent && <h3 style={{ color: "green" }}>Email Sent</h3>}
            <form onSubmit={handleSubmit}>
              <StyledInput
                id={"To"}
                type="text"
                placeholder="To"
                value={email}
                onChange={handleEmailChange}
                required
                ref={textAreaRefs.email}
                onFocus={(e) => {
                  setLastFocusedElement(e.target);
                }}
                onContextMenu={handleContextMenu}
              />
              {emailError && <p style={{ color: "red" }}>{emailError}</p>}
              <StyledInput
                id={"Cc"}
                type="text"
                placeholder="Cc"
                value={cc}
                onChange={handleCcChange}
                ref={textAreaRefs.cc}
                onFocus={(e) => {
                  setLastFocusedElement(e.target);
                }}
                onContextMenu={handleContextMenu}
              />
              <StyledInput
                id={"Subject"}
                type="text"
                placeholder="Subject"
                value={subject}
                onChange={handleSubjectChange}
                required
                ref={textAreaRefs.subject}
                onFocus={(e) => {
                  setLastFocusedElement(e.target);
                }}
                onContextMenu={handleContextMenu}
              />
              <StyledBodyInput
                id={"Body"}
                placeholder="Body"
                value={body}
                onChange={handleBodyChange}
                required
                ref={textAreaRefs.body}
                onFocus={(e) => {
                  setLastFocusedElement(e.target);
                }}
                onContextMenu={handleContextMenu}
              />
              <AttachmentList>
                <strong>Attachments:</strong>
                <ul>
                  {attachments.map((attachment, index) => (
                    <li key={index}>{attachment}</li>
                  ))}
                </ul>
              </AttachmentList>
              <SubmitButton type="submit">Send</SubmitButton>
            </form>
          </EmailBody>
        </EmailContainer>
      )}
    </div>
  );
};
export default Email;
