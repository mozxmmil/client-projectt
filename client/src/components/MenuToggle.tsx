"use client";
import { ToggleLeft, X } from "lucide-react";
import React, { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";

interface Input {
  onclick?: () => void;
}

const MenuToggle: React.FC<Input> = ({ onclick }) => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
    if (onclick) {
      onclick();
    }
  };

  return (
    <div className="relative w-full h-screen">
      <div className="absolute top-0 right-0 z-[9999]" onClick={handleToggle}>
        {toggle ? (
          <div className="absolute z-[9999]">
            <CiMenuBurger />
          </div>
        ) : (
          <div className="absolute z-[9999] ">
            <X />
          </div>
        )}
      </div>
      
    </div>
  );
};

export default MenuToggle;
