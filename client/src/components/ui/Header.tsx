"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "../../../public/adarhs.png.png";
import { Button } from "./button";
import { ButtonsCard } from "./tailwindcss-buttons";
import { buttons } from "@/lib/buttonAnimation";
import { ModeToggle } from "./darkMode";
import MenuToggle from "@/components/MenuToggle";
import Slider from "../Slider";
import { useNavContex } from "@/context/NavButton";

const Header = () => {
  const { isOpen, setIsOpen } = useNavContex();
  
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="w-full fixed flex z-[99] items-center justify-between px-0 pr-10 md:px-5 md:py-2 text-white">
        <div>
          <Image
            className="w-[150px] mt-3 "
            src={logo}
            height={200}
            width={200}
            alt="No Image"
          />
        </div>
        <div className="md:flex gap-10 items-center justify-center md:text-2xl mr-10 font-medium font-sans hover:cursor-pointer hidden  text-black dark:text-white">
          <span className="tracking-tighter">Services</span>
          <span>Features</span>
          <h1 className="tracking-tighter dark:text-white text-black">
            About Us
          </h1>

          {buttons.map((button, idx) => (
            <ButtonsCard key={idx}>{button.component}</ButtonsCard>
          ))}
          <ModeToggle />
        </div>
        <div className="block md:hidden  bg-white  relative">
          <div className="absolute z-[999999]">
            <MenuToggle onclick={handleClick} />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
