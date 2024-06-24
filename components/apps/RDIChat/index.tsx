import React, { useEffect, useRef, useState } from "react";
import { ComponentProcessProps } from "components/system/Apps/RenderComponent";
import {
  BackButton,
  BackButtonContainer,
  ChatContainer,
  ChatHeader,
  ExitButton,
  IconContainer,
  InputContainer,
  Message,
  MessagesContainer,
  UserItem,
  UserListContainer,
} from "./StyledRDIChat";
import { userAvatars, USERS, useUser } from "./UserContext";
import { UserAvatar } from "../Email/StyledEmail";

const RDIChat: React.FC<ComponentProcessProps> = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<{ user: string; text: string }[]>(
    []
  );
  const [selectedUser, setSelectedUser] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(true);
  const [isPositioned, setIsPositioned] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);
  const { currentUser } = useUser();
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const [showNotification, setShowNotification] = useState(true);
  const [notifications, setNotifications] = useState<{
    [user: string]: boolean;
  }>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedUser) return;
    console.log(`Selected User ${selectedUser}`);
    console.log(`Message ${message}`);
    setMessages((prevMessages) => [
      ...prevMessages,
      {
        user: selectedUser,
        text: `${currentUser} to ${selectedUser}: ${message}`,
      },
    ]);
    setMessage("");
    setNotifications((prevNotifications) => ({
      ...prevNotifications,
      [selectedUser]: true,
    }));
  };

  const handleIconDoubleClick = () => {
    setIsOpen((prevIsOpen) => {
      return !prevIsOpen;
    });
  };

  const handleCloseForm = () => {
    setIsOpen(false);
    setIsPositioned(false);
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

  const handleBackClick = () => {
    if (selectedUser) {
      setNotifications((prevNotifications) => ({
        ...prevNotifications,
        [selectedUser]: false,
      }));
    }
    setShowNotification(false);
    setSelectedUser(null);
  };

  const getLastMessageForUser = (user: string) => {
    return messages
      .slice()
      .reverse()
      .find((msg) => msg.user === user);
  };

  // click and drag function
  useEffect(() => {
    const form = formRef.current;
    if (form) {
      form.style.left = `${position.x}px`;
      form.style.top = `${position.y}px`;
    }
  }, [position]);

  // center the form when it is first opened
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

  // simulate incoming messages
  useEffect(() => {
    if (isOpen) {
      const timeoutId1 = setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { user: "Asako Satoshi", text: "Please send me the SalesReport URL" },
        ]);
        setNotifications((prevNotifications) => ({
          ...prevNotifications,
          "Asako Satoshi": true,
        }));
      }, 1000);

      const timeoutId2 = setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          {
            user: "Dominic Gonzalez",
            text: "Please send me the RDI sales summary",
          },
        ]);
        setNotifications((prevNotifications) => ({
          ...prevNotifications,
          "Dominic Gonzalez": true,
        }));
      }, 3000);

      return () => {
        clearTimeout(timeoutId1);
        clearTimeout(timeoutId2);
      };
    } else {
      return undefined;
    }
  }, [isOpen]);

  return (
    <div>
      <IconContainer onDoubleClick={handleIconDoubleClick}></IconContainer>
      {isOpen && (
        <ChatContainer
          ref={formRef}
          style={{
            visibility: isPositioned ? "visible" : "hidden",
            left: `${position.x}px`,
            top: `${position.y}px`,
          }}
        >
          <ChatHeader onMouseDown={handleMouseDown}>
            <UserAvatar src={userAvatars["RDI-Applicant"]} alt="User Avatar" />
            <h4>Logged in as RDI-Applicant</h4>
            <h4>
              {selectedUser ? `Chatting with ${selectedUser}` : "RDIChat"}
            </h4>
            <ExitButton onClick={handleCloseForm}>X</ExitButton>
          </ChatHeader>
          {selectedUser && (
            <BackButtonContainer>
              <BackButton onClick={handleBackClick}>Back</BackButton>
            </BackButtonContainer>
          )}
          {selectedUser ? (
            <>
              <MessagesContainer>
                {messages
                  .filter((msg) => msg.user === selectedUser)
                  .map((msg, index) => (
                    <Message key={index}>{msg.text}</Message>
                  ))}
              </MessagesContainer>
              <form onSubmit={handleSubmit}>
                <InputContainer>
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type your message..."
                    required
                  />
                  <button type="submit">Send</button>
                </InputContainer>
              </form>
            </>
          ) : (
            <UserListContainer>
              {USERS.filter((user) => user !== currentUser).map((user) => (
                <UserItem
                  key={user}
                  onClick={() => {
                    setSelectedUser(user);
                    setNotifications((prevNotifications) => ({
                      ...prevNotifications,
                      [user]: false,
                    }));
                  }}
                >
                  <img
                    src={userAvatars[user as keyof typeof userAvatars]}
                    alt={`${user}'s avatar`}
                  />
                  <div className="user-details">
                    <span className="user-name">
                      {user}
                      {notifications[user] && (
                        <div className="notification-dot">!</div>
                      )}
                    </span>
                    <small>
                      {getLastMessageForUser(user)?.text || "No messages yet"}
                    </small>
                  </div>
                </UserItem>
              ))}
            </UserListContainer>
          )}
        </ChatContainer>
      )}
    </div>
  );
};

export default RDIChat;

// path: components/apps/RDIChat/index.tsx
