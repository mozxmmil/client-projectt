"use client"
import { createContext, ReactNode, useContext, useState } from "react";
interface ChildrenProps {
  children: ReactNode;
}
export interface NavConteProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
export const NavContex = createContext<NavConteProps | null>(null);

export const ContexProvider = ({ children }: ChildrenProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <NavContex.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </NavContex.Provider>
  );
};

export const useNavContex = () => {
  const contex = useContext(NavContex);
  if (!contex)
    throw new Error("UseNavContex must be Used within a ContexProvider");
  return contex;
};
