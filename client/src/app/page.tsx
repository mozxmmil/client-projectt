"use client";
import { motion } from "framer-motion";
import React, { useMemo } from "react";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { useNavContex } from "@/context/NavButton";
import { buttons } from "@/lib/buttonAnimation";
import { ButtonsCard } from "@/components/ui/tailwindcss-buttons";
import { ModeToggle } from "@/components/ui/darkMode";
import { FlipWords } from "@/components/ui/flip-words";
import { useTheme } from "next-themes";
import girlimage from "../../public//file.png";
import Image from "next/image";
import illusion1 from "../../public/illustration-pyramid-ugN7_bJb.webp";
import illusion2 from "../../public/illustration-cube-_jbGrS-l.webp";
import illusion3 from "../../public/illustration-ball-gSqc6R8V.webp";
import { Item1 } from "@/lib/sliderItem";
import Slidercard from "@/components/Slidercard";
function AuroraBackgroundDemo() {
  const { theme, setTheme } = useTheme();

  const word = ["better", "Creative", "beautiful", "modern"];
  const { isOpen } = useNavContex();
  const handleWhatsapp = (idx: number) => {
    if (idx === 1) {
      const url = `https://wa.me/${9329467716}`;
      window.open(url, "_blank");
    } else if (idx === 2) {
      console.log("first");
      window.location.href = `tel:${9329467716}`;
    }
  };
  return (
    <>
      <div className="relative w-full min-h-screen ">
        <AuroraBackground className="">
          <motion.div
            // initial={{ opacity: 0.0, y: 40 }}
            // whileInView={{ opacity: 1, y: 0 }}
            // transition={{
            //   delay: 0.3,
            //   duration: 0.8,
            //   ease: "easeInOut",
            // }}
            className="relative h-full w-full flex flex-col gap-4 items-center justify-center pl-4 md:flex-row "
          >
            <div className=" pl-10 md:text-7xl relative  font-bold dark:text-white  h-full w-full md:w-[50%]  ">
              <div className="h-[25rem]  flex justify-center items-center mt-20 md:mt-15">
                <div className="md:text-7xl text-[9vw] font-[Product Sans]  mx-auto text-neutral-600 dark:text-neutral-400 ">
                  <div className="flex ">
                    <div className="text-orange-600">Build</div>
                    <FlipWords words={word} /> <br />
                  </div>
                  <div className="flex flex-wrap items-start  w-full ">
                    <h1 className="text-black dark:text-white w-full  tracking-tight">
                      Ideas into Digital Excellence
                    </h1>
                  </div>
                  <div className="text-base font-serif  text-black dark:text-white ">
                    <h1>Build beyond limits</h1>
                    <h1>Visualize perfection</h1>
                    <h1>Art meets technology</h1>
                  </div>
                </div>
              </div>
              <div className="md:ml-44 md:pl-14 flex gap-7 absolute  top-[70%] left-[42%] w-full ">
                {buttons.map((button, idx) => (
                  <ButtonsCard key={idx}>
                    <div key={idx} onClick={() => handleWhatsapp(idx)}>
                      {(button.name === "Border Magic1" ||
                        button.name === "Border Magic2") &&
                        button.component}
                    </div>
                  </ButtonsCard>
                ))}
              </div>
            </div>
            <div
              className={`md:text-7xl overflow-hidden relative  font-bold dark:text-white  h-full w-full md:w-[50%] ${
                theme === "dark" ? "bg-gradient-to-l from-[#42e92541]" : ""
              } ${
                theme === "system" ? "bg-gradient-to-l from-[#42e92541]" : ""
              } ${
                theme === "light"
                  ? "bg-gradient-to-l from-indigo-500 absolute"
                  : ""
              }`}
            >
              <div className="absolute  -top-[110vh] h-[200vh] w-[150vw] bg-gradient-to-farthest farthest-side from-purple-300 to-purple-900 rounded-full">
                <div
                  className={`absolute top-[40%] left-[15%] w-[55vw] h-[85vh] -rotate-[45deg] bg-[#ffffff1b] ${
                    theme === "light" && "bg-[#ffffff77]"
                  }`}
                ></div>
              </div>
              <div className=" w-full h-[85vh]  overflow-hidden  relative top-7 right-2 ">
                <motion.div
                  initial={{ y: 70, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="absolute"
                >
                  <Image
                    className="bg-none bg-transparent   scale-x-[-1]"
                    src={girlimage}
                    width={1000}
                    height={1000}
                    alt="no"
                  />
                </motion.div>
              </div>
              <Image
                className="absolute  top-[20%] right-[10%] animate-upanddown   "
                src={illusion1}
                height={100}
                width={100}
                alt="no"
              />
              <Image
                className="absolute  top-[14%] left-[20%] animate-middle "
                src={illusion2}
                height={100}
                width={100}
                alt="no"
              />
              <Image
                className="absolute  top-[70%] left-[20%] animate-down  "
                src={illusion3}
                height={100}
                width={100}
                alt="no"
              />
            </div>
          </motion.div>
        </AuroraBackground>
        {isOpen && (
          <div className="h-screen w-full bg-black absolute  z-[999] top-24 left-0 block md:hidden">
            <div className="w-full bg-[#29231f] h-20 flex items-center justify-center mb-2">
              {buttons.map((button, idx) => (
                <ButtonsCard key={idx}>
                  {button.name === "Border Magic" && button.component}
                </ButtonsCard>
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
            <div className="w-full  bg-[#29231f] h-20 flex items-center justify-center mb-2">
              <ModeToggle />
            </div>
          </div>
        )}
        <div className="SecondPage relative w-full h-screen bg-gradient-to-t from-zinc-400 border-none flex justify-center items-center">
          <div className="w-full relative h-full bg-white dark:bg-zinc-800 rounded-t-[100px]">
            <div className="absolute z-[1]  min-h-[440px] w-6 left-16 bg-custom-gradient-lightl dark:bg-custom-gradient-darkl"></div>
            <div className="absolute z-[1]  min-h-[440px] w-6 right-16 bg-custom-gradient-light dark:bg-custom-gradient-dark"></div>
            <div className="slider relative borderim overflow-hidden min-h-[220px] w-[90%] mx-auto  flex items-center flex-col py-3  ">
              <motion.div
                initial={{ x: 0 }}
                animate={{ x: "-100%" }}
                transition={{
                  duration: 13,
                  repeat: Infinity,
                  ease: "linear",
                  repeatType: "loop",
                }}
                className="absolute flex gap-10 w-full right-0"
                // Ensures that the content stretches across twice the width for seamless scrolling
              >
                {[...Item1, ...Item1].map((image, inx) => (
                  <Slidercard src={image.url.src} key={inx} />
                ))}
              </motion.div>
            </div>
            <div className="slider relative  overflow-hidden min-h-[220px] w-[90%] mx-auto  flex items-center flex-col pt-3  ">
              <motion.div
                initial={{ x: 0 }}
                animate={{ x: "100%" }}
                transition={{
                  duration: 13,
                  repeat: Infinity,
                  ease: "linear",
                  repeatType: "loop",
                }}
                className="absolute flex gap-10 w-full -left-[140%]"
                // Ensures that the content stretches across twice the width for seamless scrolling
              >
                {[...Item1, ...Item1].map((image, inx) => (
                  <Slidercard src={image.url.src} key={inx} />
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AuroraBackgroundDemo;
