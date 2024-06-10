import React, { useState, useCallback, useEffect, useRef } from "react";
import { ComponentProcessProps } from "components/system/Apps/RenderComponent";
import { EmailForm, IconContainer, EmailIcon, DropArea } from "./StyledEmail";

const Email: React.FC<ComponentProcessProps> = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [attachments, setAttachments] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      alert(
        `Email sent to: ${email}\nSubject: ${subject}\nBody: ${body}\nAttachments: ${attachments.join(", ")}`
      );
      setEmail("");
      setSubject("");
      setBody("");
      setAttachments([]);
    },
    [email, subject, body, attachments]
  );

  useEffect(() => {
    if (isOpen && typeof window !== "undefined" && formRef.current) {
      const form = formRef.current;
      const initialX = (window.innerWidth - form.offsetWidth) / 2 - 1000;
      const initialY = (window.innerHeight - form.offsetHeight) / 2 - 500;
      setPosition({ x: initialX, y: initialY });
      form.style.left = `${initialX}px`;
      form.style.top = `${initialY}px`;
    }
  }, [isOpen]);

  const handleIconDoubleClick = () => {
    setIsOpen(true);
  };

  const handleCloseForm = () => {
    setIsOpen(false);
  };

  const handleMouseDown = (
    e: React.MouseEvent<HTMLFormElement, MouseEvent>
  ) => {
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
      x: e.clientX - offset.x - 900,
      y: e.clientY - offset.y - 500,
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

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

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
            console.log("File dropped:", file.name);
          }
        } else if (item.kind === "string") {
          item.getAsString((data) => {
            if (data.startsWith("[")) {
              console.log("String dropped:", data);
              droppedFiles.push(data);
              setAttachments((prev) => [...prev, ...droppedFiles]);
              updateAttachments(droppedFiles);
            }
          });
        }
      }
    } else {
      const files = Array.from(e.dataTransfer.files).map((file) => file.name);
      droppedFiles.push(...files);
      updateAttachments(droppedFiles);
    }
  };

  const updateAttachments = (droppedFiles: string[]) => {
    setAttachments((prev) => [...prev, ...droppedFiles]);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  return (
    <div>
      <IconContainer onDoubleClick={handleIconDoubleClick}>
        <EmailIcon src="/System/Icons/16x16/outlookemail.png" alt="Email" />
        <span>Email</span>
      </IconContainer>
      {isOpen && (
        <DropArea
          $isDragging={isDragging}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          onDragLeave={handleDragLeave}
        >
          <EmailForm
            ref={formRef}
            onSubmit={handleSubmit}
            style={{
              position: "absolute",
              cursor: "move",
              left: `${position.x}px`,
              top: `${position.y}px`,
            }}
            onMouseDown={handleMouseDown}
          >
            <button className="exit-button" onClick={handleCloseForm}>
              X
            </button>
            <h2>Send Email</h2>
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
            />
            <textarea
              placeholder="Body"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              rows={10}
              required
            />
            <div>
              <strong>Attachments:</strong>
              <ul>
                {attachments.map((attachment, index) => (
                  <li key={index}>{attachment}</li>
                ))}
              </ul>
            </div>
            <button className="submit-button" type="submit">
              Send
            </button>
          </EmailForm>
        </DropArea>
      )}
    </div>
  );
};

export default Email;

// path components/apps/Email/index.ts
