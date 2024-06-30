"use client";
import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { useNavContex } from "@/context/NavButton";
import { buttons } from "@/lib/buttonAnimation";
import { ButtonsCard } from "@/components/ui/tailwindcss-buttons";
import { ModeToggle } from "@/components/ui/darkMode";

function AuroraBackgroundDemo() {
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
          className="relative h-full w-full flex flex-col gap-4 items-center justify-center px-4 md:flex-row pt-24"
        >
          <div className="text-3xl md:text-7xl font-bold dark:text-white text-center h-full border-2 w-[95%] md:w-1/2 ">
          </div>
          <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4 border-2 h-full w-[95%] md:w-1/2"></div>
        </motion.div>
      </AuroraBackground>
      {isOpen && (
        <div className="h-screen w-full bg-black absolute top-24 left-0 block md:hidden">
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
