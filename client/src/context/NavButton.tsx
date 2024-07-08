"use client";
import { createContext, ReactNode, useContext, useState } from "react";
interface ChildrenProps {
  children: ReactNode;
}
export interface NavConteProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
export const NavContext = createContext<NavConteProps | null>(null);

export const ContexProvider = ({ children }: ChildrenProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <NavContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </NavContext.Provider>
  );
};

export const useNavContext = (): NavConteProps => {
  const context = useContext(NavContext);
  
  if (!context) {
    throw new Error("useNavContext must be used within a ContextProvider");
  }
  
  return context;
};
