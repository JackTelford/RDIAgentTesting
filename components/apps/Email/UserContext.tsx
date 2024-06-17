import React, { createContext, useContext, useState, ReactNode } from "react";

export const USERS = [
  "RDI-Applicant",
  "RDIUSER1",
  "RDIUSER2",
  "RDIUSER3",
  "RDIUSER4",
  "RDIUSER5",
];

// Add this at the top of your RDIChat.url file or in a separate constants file
export const userAvatars: { [key in (typeof USERS)[number]]: string } = {
  "RDI-Applicant": "System/Icons/avatars/rdi.png",
  RDIUSER1: "System/Icons/avatars/agent1.png",
  RDIUSER2: "System/Icons/avatars/agent2.png",
  RDIUSER3: "System/Icons/avatars/agent3.png",
  RDIUSER4: "System/Icons/avatars/agent4.png",
  RDIUSER5: "System/Icons/avatars/agent5.png",
};

type UserContextType = {
  currentUser: string;
  setCurrentUser: React.Dispatch<React.SetStateAction<string>>;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(USERS[0]);

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
