import React from "react";
import agreement from "../../public/agreement-H5blIncG.gif";
import heart from "../../public/volunteering-5xjfgQ50.gif";
import people from "../../public/social-care-C68-NkF0.gif";
import mail from "../../public/mail-qd_slbDQ.gif";
import dots from "../../public/dots3-aa2olS2o.png";
import { MdMessage } from "react-icons/md";
import Image from "next/image";
import { MoveUpRight } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

const Footer = () => {
  const data = [
    {
      img: people,
      sideHead: "Simplicity",
      desc: "Things being made beautifully simple are at the heart of everything we do.",
    },
    {
      img: heart,
      sideHead: "Social Good",
      desc: "We believe in making things better for everyone, even if just by a little bit!",
    },
    {
      img: agreement,
      sideHead: "Trust",
      desc: "Things being made beautifully simple are at the heart of everything we do.",
    },
    {
      img: mail,
      sideHead: "Contact",
      desc: "gurupatle39@gmail.com",
    },
  ];
  return (
    <div className="w-full h-full  relative md:px-16 md:py-10 pb-10  text-black dark:text-white bg-white dark:bg-black">
      <div className="overflow-hidden w-full h-full  absolute top-0 left-0">
        <div className="md:w-[500px] md:h-[500px] w-64 h-64  opacity-50 border-2 border-white absolute md:-top-[30%] md:-left-[10%]  -top-[15%] -left-[15%] rounded-full"></div>
      </div>
      <div className="absolute w-[300px] h-[300px] overflow-hidden rounded-full right-0 top-1/2 flex justify-center items-center opacity-50 ">
        <Image className="" src={dots} content="cover" alt="no" />
      </div>
      <div className="w-full h-full ">
        <h1 className="md:text-5xl text-2xl font-bold md:w-1/2 w-full mt-10  leading-relaxed  ">
          The principles that keep us honest and responsible
        </h1>
        <div className="w-full  flex flex-col md:flex-row gap-10 md:gap-0 mt-10 md:mt-0   justify-center md:justify-between md:items-start items-center md:pt-16 min-h-[50%] ">
          {data.map((data, idx) => (
            <div key={idx} className="md:w-[25%] w-full  flex flex-col   gap-7">
              <div className="flex gap-4 items-center  md:flex-row ">
                <Image
                  src={data.img}
                  width={50}
                  height={50}
                  alt="no"
                  className="rounded-3xl"
                />
                <h1 className="text-2xl font-bold ">{data.sideHead}</h1>
              </div>
              <div>
                <h1 className="md:w-[95%] w-full ">
                  {data.desc.includes("gmail") ? (
                    <a
                      href={`mailto:${data.desc}`}
                      className="text-center flex  items-center gap-3"
                    >
                      Contact Us <MoveUpRight />{" "}
                    </a>
                  ) : (
                    data.desc
                  )}
                </h1>
              </div>
            </div>
          ))}
        </div>
        <div
          className="w-full flex-col md:flex-row bg-red-800  dark:border-white border-[1px] border-black md:min-h-[20%] py-5 md:py-0 
         rounded-xl flex items-center justify-evenly gap-2 md:px-10 px-2 md:my-10 my-10"
        >
          <h1 className="text-nowrap font-bold md:text-4xl text-1xl">
            We are eagerly awaiting your response.
          </h1>
          <Link href={"/get-touch"}>
            <Button>Get Start</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
