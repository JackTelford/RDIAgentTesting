import React, { useState, useEffect, useRef } from "react";
import { ComponentProcessProps } from "components/system/Apps/RenderComponent";
import {
  ChatContainer,
  ChatHeader,
  MessagesContainer,
  Message,
  InputContainer,
  ExitButton,
  IconContainer,
  ChatIcon,
} from "./StyledRDIChat";
import { USERS, useUser } from "./UserContext";

const RDIChat: React.FC<ComponentProcessProps> = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<string[]>([]);
  const [selectedUser, setSelectedUser] = useState(USERS[1]); // Default to first user after RDI-Applicant
  const [isOpen, setIsOpen] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  const { currentUser } = useUser();

  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(`Current User: ${currentUser}`);
    console.log(`Selected User: ${selectedUser}`);
    console.log(`Message: ${message}`);
    setMessages((prevMessages) => [
      ...prevMessages,
      `${currentUser} to ${selectedUser}: ${message}`,
    ]);
    setMessage("");
  };

  useEffect(() => {
    if (isOpen && typeof window !== "undefined" && formRef.current) {
      const form = formRef.current;
      const initialX = (window.innerWidth - form.offsetWidth) / 2;
      const initialY = (window.innerHeight - form.offsetHeight) / 2;
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

  return (
    <div>
      <IconContainer onDoubleClick={handleIconDoubleClick}>
        <ChatIcon src="/System/Icons/16x16/chat.png" alt="RDIChat" />
        <span>RDIChat</span>
      </IconContainer>
      {isOpen && (
        <ChatContainer
          ref={formRef}
          style={{
            left: `${position.x}px`,
            top: `${position.y}px`,
          }}
        >
          <ChatHeader onMouseDown={handleMouseDown}>
            <ExitButton onClick={handleCloseForm}>X</ExitButton>
            <h2>RDIChat</h2>
          </ChatHeader>
          <MessagesContainer>
            {messages.map((msg, index) => (
              <Message key={index}>{msg}</Message>
            ))}
          </MessagesContainer>
          <form onSubmit={handleSubmit}>
            <InputContainer>
              <select
                value={selectedUser}
                onChange={(e) => {
                  console.log("User selected", e.target.value);
                  setSelectedUser(e.target.value);
                }}
                required
              >
                {USERS.filter((user) => user !== currentUser).map((user) => (
                  <option key={user} value={user}>
                    {user}
                  </option>
                ))}
              </select>
              <input
                type="text"
                value={message}
                onChange={(e) => {
                  console.log("Message input changed", e.target.value);
                  setMessage(e.target.value);
                }}
                placeholder="Type your message..."
                required
              />
              <button type="submit">Send</button>
            </InputContainer>
          </form>
        </ChatContainer>
      )}
    </div>
  );
};

export default RDIChat;
