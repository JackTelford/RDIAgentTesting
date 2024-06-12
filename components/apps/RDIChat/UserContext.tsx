import React, { createContext, useContext, useState, ReactNode } from "react";

export const USERS = [
  "RDI-Applicant",
  "Asako Satoshi",
  "Lily Wang",
  "Madison Byers",
  "Dominic Gonzalez",
  "Simone Khan",
];

export const userAvatars: { [key in (typeof USERS)[number]]: string } = {
  "RDI-Applicant": "System/Icons/avatars/rdi.png",
  "Asako Satoshi": "System/Icons/avatars/Asako Satoshi.png",
  "Lily Wang": "System/Icons/avatars/Lily Wang.png",
  "Madison Byers": "System/Icons/avatars/Madison Byers.png",
  "Dominic Gonzalez": "System/Icons/avatars/Dominic Gonzalez.png",
  "Simone Khan": "System/Icons/avatars/Simone Khan.png",
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
