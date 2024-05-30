import React, { useState, useCallback, useEffect, useRef } from "react";
import { ComponentProcessProps } from "components/system/Apps/RenderComponent";
import { EmailForm, IconContainer, EmailIcon, DropArea } from "./StyledEmail";
import useFileDrop from "components/system/Files/FileManager/useFileDrop";

const Email: React.FC<ComponentProcessProps> = ({ id }) => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [attachments, setAttachments] = useState<File[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const onFilesDropped = (files: FileList) => {
    const newFiles = Array.from(files);
    setAttachments((prevFiles) => [...prevFiles, ...newFiles]);
  };

  const { onDragOver, onDrop, onDragLeave } = useFileDrop({
    id,
    onFilesDropped,
    onDragLeave: () => setIsDragging(false),
    onDragOver: (e) => {
      e.preventDefault();
      setIsDragging(true);
    },
  });

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      alert(
        `Email sent to: ${email}\nSubject: ${subject}\nBody: ${body}\nAttachments: ${attachments.map((file) => file.name).join(", ")}`
      );
      setEmail("");
      setSubject("");
      setBody("");
      setAttachments([]);
    },
    [email, subject, body, attachments]
  );

  useEffect(() => {
    const form = formRef.current;
    const handleEnterKey = (e: KeyboardEvent) => {
      if (e.key === "Enter") {
        handleSubmit(e as unknown as React.FormEvent);
      }
    };

    form?.addEventListener("keydown", handleEnterKey);
    return () => {
      form?.removeEventListener("keydown", handleEnterKey);
    };
  }, [handleSubmit]);

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

  const handleDragStart = (e: React.DragEvent) => {
    e.dataTransfer.setData("text/plain", id);
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

  return (
    <div onDragOver={onDragOver} onDrop={onDrop} onDragLeave={onDragLeave}>
      <IconContainer
        draggable
        onDoubleClick={handleIconDoubleClick}
        onDragStart={handleDragStart}
      >
        <EmailIcon src="/System/Icons/16x16/outlookemail.png" alt="Email" />
        <span>Email</span>
      </IconContainer>
      {isOpen && (
        <DropArea $isDragging={isDragging}>
          <EmailForm
            ref={formRef}
            onSubmit={handleSubmit}
            onDrop={(e) => {
              e.preventDefault();
              setIsDragging(false);
              if (e.dataTransfer.files.length > 0) {
                onFilesDropped(e.dataTransfer.files);
              }
            }}
            onDragOver={(e) => e.preventDefault()}
            onDragLeave={(e) => {
              e.preventDefault();
              setIsDragging(false);
            }}
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
              <input
                ref={fileInputRef}
                type="file"
                style={{ display: "none" }}
                multiple
                onChange={(e) => {
                  if (e.target.files) {
                    onFilesDropped(e.target.files);
                  }
                }}
              />
              <button
                className="submit-button"
                type="button"
                onClick={() => fileInputRef.current?.click()}
              >
                Attach Files
              </button>
            </div>
            <ul>
              {attachments.map((file, index) => (
                <li key={index}>{file.name}</li>
              ))}
            </ul>
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
