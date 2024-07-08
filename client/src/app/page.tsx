"use client";
import { motion } from "framer-motion";
import React, { use, useEffect, useMemo, useRef } from "react";
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
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import dynamic from "next/dynamic";
const ContactCard = dynamic(() => import("@/components/ContactCard"));
const Footer = dynamic(() => import("@/components/Footer"));
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

function AuroraBackgroundDemo() {
  const animation = useRef<HTMLDivElement>(null);
  const h1 = useRef<HTMLDivElement>(null);
  const h2 = useRef<HTMLDivElement>(null);
  const h3 = useRef<HTMLDivElement>(null);
  const h4 = useRef<HTMLDivElement>(null);
  const h5 = useRef<HTMLDivElement>(null);
  const h6 = useRef<HTMLDivElement>(null);
  const h7 = useRef<HTMLDivElement>(null);
  const h8 = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: animation.current,
          start: "30% 70%",
          end: "70% 80%",
          scrub: true,
        },
      });
      tl.to(h1.current, {
        width: "30%",
      });
      tl.to(h2.current, {
        width: "100%",
      });
      tl.to(h3.current, {
        width: "100%",
      });
      tl.to(h4.current, {
        width: "100%",
      });
      tl.to(h5.current, {
        width: "100%",
      });
      tl.to(h6.current, {
        width: "100%",
      });
      tl.to(h7.current, {
        width: "100%",
      });
      tl.to(h8.current, {
        width: "100%",
      });
    },
    { scope: animation }
  );

  const { theme, setTheme } = useTheme();
  useEffect(() => {}, [setTheme]);
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
      <div className="relative max-w-full h-screen ">
        <AuroraBackground className="">
          <motion.div className="relative h-full w-full flex flex-col md:gap-4 md:items-center md:justify-center  md:flex-row  ">
            <div className="  md:pl-10  md:text-7xl relative font-bold dark:text-white  h-full w-full md:w-[50%]  ">
              <div className="md:h-[25rem] h-full  overflow-hidden w-full flex  justify-center items-center mt-20 md:mt-15 ">
                <div className="md:text-7xl  text-[9vw] md:pl-4 pl-2 font-[Product Sans]  mx-auto text-neutral-600 dark:text-neutral-400 ">
                  <div className="flex  overflow-hidden ">
                    <div className="text-orange-500">Build</div>
                    <FlipWords words={word} /> <br />
                  </div>
                  <div className="flex flex-wrap items-start   w-full ">
                    <h1 className="text-black dark:text-white w-full  tracking-tight">
                      Ideas into Digital Excellence
                    </h1>
                  </div>
                  <div className="md:text-base text-sm font-serif mt-5  flex flex-col items-end md:items-start pr-2 text-black dark:text-white ">
                    <h1>Build beyond limits</h1>
                    <h1>Visualize perfection</h1>
                    <h1>Art meets technology</h1>
                  </div>
                </div>
              </div>
              <div className="md:ml-44 md:pl-14  flex md:gap-7 gap-3 absolute top-[100%] md:top-[70%] md:left-[40%] w-full items-center justify-start md:items-start md:justify-start ">
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
              className={` md:text-7xl overflow-hidden relative  font-bold dark:text-white  h-full w-full md:w-[50%] ${
                theme === "dark" ? "bg-gradient-to-l from-[#42e92541]" : ""
              } ${
                theme === "system" ? "bg-gradient-to-l from-[#42e92541]" : ""
              } ${
                theme === "light"
                  ? "bg-gradient-to-l from-indigo-500 absolute"
                  : ""
              }  `}
            >
              <div className="absolute   -top-[110vh] h-[200vh] w-[150vw] bg-gradient-to-farthest farthest-side from-purple-300 to-purple-900 rounded-full">
                <div
                  className={`absolute top-[40%] left-[15%] w-[55vw] h-[85vh] -rotate-[45deg] bg-[#ffffff1b] ${
                    theme === "light" && "bg-[#ffffff77]"
                  }`}
                ></div>
              </div>
              <div className="md:h-[85vh] h-full   overflow-hidden  relative top-7  right-2 ">
                <motion.div
                  initial={{ y: 70, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="absolute"
                >
                  <Image
                    className="bg-none bg-transparent  scale-x-[-1]"
                    src={girlimage}
                    width={1000}
                    height={1000}
                    alt="no"
                    loading="eager"
                  />
                </motion.div>
              </div>
              <Image
                className="absolute w-[60px] h-[60px] top-[20%] right-[10%] animate-upanddown md:h-[100px] md:w-[100px]   "
                src={illusion1}
                alt="no"
                loading="eager"
              />
              <Image
                className="absolute  top-[14%] left-[20%] animate-middle w-[60px] h-[60px] md:h-[100px] md:w-[100px]"
                src={illusion2}
                height={100}
                width={100}
                alt="no"
                loading="eager"
              />
              <Image
                className="absolute  top-[70%] left-[20%] animate-down w-[60px] h-[60px] md:h-[100px] md:w-[100px]  "
                src={illusion3}
                height={100}
                width={100}
                alt="no"
                loading="eager"
              />
            </div>
          </motion.div>
        </AuroraBackground>
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
              <Link href={"feature"}>
                <h1 className="tracking-tighter dark:text-white text-black text-xl font-bold">
                  Feature
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
        <div className="SecondPage relative w-full h-[60%] bg-white  dark:bg-zinc-800 border-none pt-4 ">
          <div className="w-full relative h-fullbg-white dark:bg-zinc-800 ">
            <div className="absolute z-[1]  h-full w-10 md:left-16 left-3 bg-custom-gradient-lightl dark:bg-custom-gradient-darkl"></div>
            <div className="absolute z-[1] h-full w-10 md:right-16 right-3 bg-custom-gradient-light dark:bg-custom-gradient-dark"></div>
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
        <div
          ref={animation}
          className=" second w-full md:h-[90vh] bg-white dark:bg-zinc-800 "
        >
          <div className="w-full bg-white dark:bg-zinc-800 h-full dark:text-white text-black overflow-hidden ">
            <div className="w-full h-full font-[Anton Sc] relative font-bold    flex  flex-col md:flex-col    gap-5   ">
              <div className=" h-full w-full flex  flex-col md:flex-col   overflow-hidden   gap-5  text-black dark:text-white pb-5 md:pb-0  top-0  absolute left-0 ">
                <h1
                  ref={h1}
                  className="w-[0%]  md:text-7xl text-3xl text-nowrap overflow-hidden opacity-100 "
                >
                  VFX
                </h1>
                <h1
                  ref={h2}
                  className="w-[0%] md:text-7xl text-3xl  text-nowrap overflow-hidden opacity-100"
                >
                  CGI
                </h1>
                <h1
                  ref={h3}
                  className="w-[0%]  md:text-7xl text-3xl text-nowrap overflow-hidden opacity-100"
                >
                  3D Modeling
                </h1>
                <h1
                  ref={h4}
                  className="w-[0%]  md:text-7xl text-3xl text-nowrap overflow-hidden opacity-100"
                >
                  Video Editing{" "}
                </h1>
                <h1
                  ref={h5}
                  className="w-[0%]  md:text-7xl text-3xl text-nowrap overflow-hidden opacity-100"
                >
                  Logo Creation
                </h1>
                <h1
                  ref={h6}
                  className="w-[0%] md:text-7xl text-3xl  text-nowrap overflow-hidden opacity-100"
                >
                  Graphic Design
                </h1>
                <h1
                  ref={h7}
                  className="w-[0%]  md:text-7xl text-3xl text-nowrap overflow-hidden opacity-100"
                >
                  Web Development
                </h1>
                <h1
                  ref={h8}
                  className="w-[0%]  md:text-7xl text-3xl text-nowrap overflow-hidden opacity-100]"
                >
                  Social Media Manage{" "}
                </h1>
              </div>
              <h1 className="opacity-10 md:text-7xl text-3xl">VFX</h1>
              <h1 className="opacity-10 md:text-7xl text-3xl">CGI</h1>
              <h1 className="opacity-10 md:text-7xl text-3xl">3D Modeling</h1>
              <h1 className="opacity-10 md:text-7xl text-3xl">
                Video Editing{" "}
              </h1>
              <h1 className="opacity-10 md:text-7xl text-3xl">Logo Creation</h1>
              <h1 className="opacity-10 md:text-7xl text-3xl">
                Graphic Design
              </h1>
              <h1 className="opacity-10 md:text-7xl text-3xl">
                Web Development
              </h1>
              <h1 className="opacity-10 md:text-7xl text-3xl">
                Social Media Manage{" "}
              </h1>
              <hr className="mt-4" />
            </div>
          </div>
        </div>
        <div className="min-h-[80vh] w-full dark:bg-zinc-800 bg-white flex justify-center pt-5 md:pt-10">
          <div className="md:w-1/2 w-full h-fit   md:px-10 px-5 md:py-10 py-2 dark:text-white text-black">
            <h1 className="text-4xl text-center font-bold font-mono ">
              Have Questions? Contact Us
            </h1>
            <ContactCard />
          </div>
        </div>
        <div className="footer w-full h-screen ">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default AuroraBackgroundDemo;
