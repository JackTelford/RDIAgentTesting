import React, { useState, useCallback, useEffect, useRef } from "react";
import { ComponentProcessProps } from "components/system/Apps/RenderComponent";
import { EmailForm, IconContainer, EmailIcon, DropArea } from "./StyledEmail";
import useFileDrop from "components/system/Files/FileManager/useFileDrop";

const Email: React.FC<ComponentProcessProps> = ({ id }) => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [attachments, setAttachments] = useState<File[]>([]); // State to store attached files
  const [isOpen, setIsOpen] = useState(false); // State to manage form visibility
  const [isDragging, setIsDragging] = useState(false); // State to manage drag-over event
  const formRef = useRef<HTMLFormElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const onFilesDropped = (files: FileList) => {
    console.log("Files dropped in component:", files); // Debug log
    const newFiles = Array.from(files);
    setAttachments((prevFiles) => [...prevFiles, ...newFiles]);
  };

  const { onDragOver, onDrop, onDragLeave } = useFileDrop({
    id,
    onFilesDropped,
    onDragLeave: () => setIsDragging(false), // Reset drag state on drag leave
    onDragOver: (e) => {
      e.preventDefault();
      setIsDragging(true); // Set drag state on drag over
    },
  });

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      alert(
        `Email sent to: ${email}\nSubject: ${subject}\nBody: ${body}\nAttachments: ${attachments
          .map((file) => file.name)
          .join(", ")}`
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

  const handleIconDoubleClick = () => {
    setIsOpen(true); // Show the email form on double-click
  };

  const handleDragStart = (e: React.DragEvent) => {
    e.dataTransfer.setData("text/plain", id);
  };

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
              setIsDragging(false); // Reset drag state on drop
              if (e.dataTransfer.files.length > 0) {
                onFilesDropped(e.dataTransfer.files);
              } else {
                console.log("No files found in dataTransfer"); // Debug log
              }
            }}
            onDragOver={(e) => e.preventDefault()} // To allow drop event
            onDragLeave={(e) => {
              e.preventDefault();
              setIsDragging(false); // Reset drag state on drag leave
            }}
          >
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
            <button type="submit">Send</button>
          </EmailForm>
        </DropArea>
      )}
    </div>
  );
};

export default Email;
