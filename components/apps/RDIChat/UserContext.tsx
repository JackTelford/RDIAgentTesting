import React, { createContext, useContext, useState, ReactNode } from "react";

export const USERS = [
  "RDI-Applicant",
  "RDIUSER1",
  "RDIUSER2",
  "RDIUSER3",
  "RDIUSER4",
  "RDIUSER5",
];

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
