import { cn } from "@/utils/cn";
import video from "../../../public/video.jpg";
import graphicDesign from "../../../public/graphic desgn.jpg";
import vfx from "../../../public/vfx.jpg";
import webdev from "../../../public/web dev.jpg";
import logo from "../../../public/LogoDesign.jpg";
import model from "../../../public/premium_photo-1668004508880-8f81d9552dce.avif";
import cgi from "../../../public/cgi.jpg";

import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import { FaCheckCircle } from "react-icons/fa";
import Image from "next/image";

 function Card() {
  return (
    <BentoGrid className="w-full  mx-auto">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          className={"md:col-span-3"}
        />
      ))}
    </BentoGrid>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl justify-center bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
    <Image src={video} alt="no"  loading="lazy" />
  </div>
);
const Skeleton1 = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
    <Image src={graphicDesign} alt="no" loading="lazy" />
  </div>
);
const Skeleton2 = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
    <Image src={vfx} alt="no" loading="lazy" />
  </div>
);
const Skeleton3 = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
    <Image src={webdev} alt="no" loading="lazy" />
  </div>
);
const Skeleton4 = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
    <Image src={logo} alt="no" loading="lazy"/>
  </div>
);
const Skeleton5 = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
    <Image src={model} alt="no" loading="lazy" />
  </div>
);
const Skeleton6 = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
    <Image src={cgi} alt="no" loading="lazy" />
  </div>
);
const items = [
  {
    title: "video Editing ",
    description:
      "Transform raw footage into captivating stories with our expert video editing services.",
    header: <Skeleton />,
    icon: <FaCheckCircle className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Graphic Design",
    description:
      "Elevate your brand with stunning visuals through our professional graphic design services.",
    header: <Skeleton1 />,
    icon: <FaCheckCircle className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "VFX",
    description:
      "Transform your ideas into captivating visual effects with our expert VFX services.",
    header: <Skeleton2 />,
    icon: <FaCheckCircle className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Web Development",
    description:
      "Build dynamic and responsive websites with our expert web development services.",
    header: <Skeleton3 />,
    icon: <FaCheckCircle className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Logo Creation",
    description:
      "Create a unique and memorable logo with our professional logo creation services.",
    header: <Skeleton4 />,
    icon: <FaCheckCircle className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "3D Modeling",
    description:
      "Transform your concepts into stunning 3D models with our expert 3D modeling services.",
    header: <Skeleton5 />,
    icon: <FaCheckCircle className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "CGI",
    description:
      "Bring your imagination to life with our cutting-edge CGI solutions.",
    header: <Skeleton6 />,
    icon: <FaCheckCircle className="h-4 w-4 text-neutral-500" />,
  },
];

export default Card