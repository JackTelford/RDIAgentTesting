import React, { useState, useCallback, useEffect, useRef } from "react";
import { ComponentProcessProps } from "components/system/Apps/RenderComponent";
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
  StyledTextarea,
  SubmitButton,
  EmailBody,
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

  const [emailSent, setEmailSent] = useState(false);

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      const emailDetails = {
        to: email,
        cc: cc,
        subject: subject,
        body: body,
        attachments: attachments,
      };
      /*      console.log("Email sent", emailDetails);*/

      // Send message to parent window
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
    if (e.target !== e.currentTarget) return; // Only handle dragging if clicking on the header

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
            droppedFiles.push(file.name); // Use file.name to get only the file name
            console.log("File dropped:", file.name);
          }
        } else if (item.kind === "string") {
          item.getAsString((data) => {
            if (data.startsWith("[")) {
              console.log("String dropped:", data);
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

  // Attach button Logic
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
  // Attach button Logic

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
            <form onSubmit={handleSubmit}>
              <StyledInput
                type="email"
                placeholder="To"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <StyledInput
                type="text"
                placeholder="Cc"
                value={cc}
                onChange={(e) => setCc(e.target.value)}
              />
              <StyledInput
                type="text"
                placeholder="Subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
              />
              <StyledTextarea
                placeholder="Body"
                value={body}
                onChange={(e) => setBody(e.target.value)}
                rows={10}
                required
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
              {emailSent && <p style={{ color: "red" }}>Email Sent</p>}
            </form>
          </EmailBody>
        </EmailContainer>
      )}
    </div>
  );
};

export default Email;
