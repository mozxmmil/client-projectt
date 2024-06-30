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
    <div className="relative w-full h-screen text-2xl font-bold text-black dark:text-white ">
      <div className="absolute  right-0 z-[9999]" onClick={handleToggle}>
        {toggle ? (
          <div className="">
            <CiMenuBurger />
          </div>
        ) : (
          <div className="">
            <X />
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuToggle;
