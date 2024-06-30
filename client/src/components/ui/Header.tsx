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
import Link from "next/link";

const Header = () => {
  const { isOpen, setIsOpen } = useNavContex();

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="w-full fixed flex z-[99] items-center justify-between px-0 pr-10 md:px-5 md:py-2 text-white">
        <div>
          <Link href={"/"}>
          <Image
            className="w-[150px] mt-3 "
            src={logo}
            height={200}
            width={200}
            alt="No Image"
            />
            </Link>
        </div>
        <div className="md:flex gap-10 items-center justify-center md:text-2xl mr-10 font-medium font-sans  hidden  text-black dark:text-white ">
          <Link href={"/service"}>
            <span className="tracking-tighter hover:cursor-pointer hover:text-[#b0aa94]">
              Services
            </span>
          </Link>
          <Link href={"/feactures"}>
            <span className="tracking-tighter hover:cursor-pointer hover:text-[#b0aa94]">
              Features
            </span>
          </Link>
          <Link href={"/about"}>
            <span className="tracking-tighter dark:text-white  hover:cursor-pointer hover:text-[#b0aa94]">
              About Us
            </span>
          </Link>
          <div className="relative">
            {buttons.map((button, idx) => (
              <Link href={"/card"}>
                <ButtonsCard key={idx}>{button.component}</ButtonsCard>
              </Link>
            ))}
          </div>
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
