"use client";
import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { useNavContex } from "@/context/NavButton";
import { buttons, buttons1 } from "@/lib/buttonAnimation";
import { ButtonsCard } from "@/components/ui/tailwindcss-buttons";
import { ModeToggle } from "@/components/ui/darkMode";
import { FlipWords } from "@/components/ui/flip-words";
import Link from "next/link";
function AuroraBackgroundDemo() {
  const word = ["better", "cute", "beautiful", "modern"];
  const { isOpen } = useNavContex();
  return (
    <div className="relative w-full ">
      <AuroraBackground className="">
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative h-full w-full flex flex-col gap-4 items-center justify-center px-4 md:flex-row "
        >
          <div className=" md:text-7xl  font-bold dark:text-white  h-full w-full md:w-[90%]  ">
            <div className="h-[25rem]  flex justify-center items-center mt-20 md:mt-15">
              <div className="md:text-7xl text-6xl mx-auto font-[Lato] text-neutral-600 dark:text-neutral-400 ">
                <div className="flex ">
                  <div className="text-orange-600">Build</div>
                  <FlipWords words={word} /> <br />
                </div>
                <div className="flex flex-wrap items-start  w-full ">
                  <h1 className="text-black dark:text-white w-full  tracking-tight">
                    Ideas into Digital Excellence
                  </h1>
                </div>
              </div>
            </div>
            <div className="md:ml-44 md:pl-14">
              {buttons1.map((button, idx) => (
                <Link href={"/work"}>
                  <ButtonsCard key={idx}>{button.component}</ButtonsCard>
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      </AuroraBackground>
      {isOpen && (
        <div className="h-screen w-full bg-black absolute  top-24 left-0 block md:hidden">
          <div className="w-full bg-[#29231f] h-20 flex items-center justify-center mb-2">
            {buttons.map((button, idx) => (
              <ButtonsCard key={idx}>{button.component}</ButtonsCard>
            ))}
          </div>
          <div className="w-full bg-[#29231f] h-20 flex items-center justify-center mb-2">
            <h1 className="tracking-tighter dark:text-white text-black text-xl font-bold">
              Service
            </h1>
          </div>
          <div className="w-full bg-[#29231f] h-20 flex items-center justify-center mb-2">
            <h1 className="tracking-tighter dark:text-white text-black text-xl font-bold">
              Feactures
            </h1>
          </div>
          <div className="w-full bg-[#29231f] h-20 flex items-center justify-center mb-2">
            <h1 className="tracking-tighter dark:text-white text-black text-xl font-bold">
              About Us
            </h1>
          </div>
          <div className="w-full bg-[#29231f] h-20 flex items-center justify-center mb-2">
            <ModeToggle />
          </div>
        </div>
      )}
    </div>
  );
}

export default AuroraBackgroundDemo;
