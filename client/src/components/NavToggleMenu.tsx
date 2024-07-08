"use client";
import { useNavContext } from "@/context/NavButton";
import Link from "next/link";
import React from "react";
import { ButtonsCard } from "./ui/tailwindcss-buttons";
import { buttons } from "@/lib/buttonAnimation";
import { ModeToggle } from "./ui/darkMode";

const NavToggleMenu = () => {
  const { isOpen } = useNavContext();
  return (
    <>
      {isOpen && (
        <div className=" w-full bg-black absolute  z-[40] top-24 left-0 block md:hidden">
          <Link href={"/get-touch"}>
            <div className="w-full bg-[#29231f] h-20 flex items-center justify-center mb-2">
              {buttons.map((button, idx) => (
                <ButtonsCard key={idx}>
                  {button.name === "Border Magic" && button.component}
                </ButtonsCard>
              ))}
            </div>
          </Link>
          <div className="w-full bg-[#29231f] h-20 flex relative z-40 items-center justify-center mb-2">
            <Link href={"/service"}>
              <h1 className="tracking-tighter dark:text-white text-black text-xl font-bold">
                Service
              </h1>
            </Link>
          </div>

          <div className="w-full bg-[#29231f] relative z-40 h-20 flex items-center justify-center mb-2">
            <Link href={"about"}>
              <h1 className="tracking-tighter dark:text-white text-black text-xl font-bold">
                About Us
              </h1>
            </Link>
          </div>
          <div className="w-full relative z-40  bg-[#29231f] h-20 flex items-center justify-center mb-2">
            <ModeToggle />
          </div>
        </div>
      )}
    </>
  );
};

export default NavToggleMenu;
