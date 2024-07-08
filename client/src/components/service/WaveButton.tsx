import Link from "next/link";
import React from "react";

const WaveButton = () => {
  return (
    <div className="flex justify-center items-center fixed md:right-4 md:bottom-4 right-8 bottom-10">
      <Link href={"/get-touch"}>
        <div className="md:h-[10vw] md:w-[10vw] h-[20vw] w-[20vw] relative flex items-center justify-center rounded-full bg-red-500 z-20 ">
          <button className="absolute px-3 md:text-2xl">Build</button>
        </div>
      </Link>
      <div className="cir1 h-[30vw] w-[30vw] border-[1px] dark:border-white border-black  rounded-full absolute animate-wave"></div>
      <div className=" cir2 h-[30vw] w-[30vw] border-[1px]  dark:border-white border-black rounded-full absolute animate-wave1"></div>
      <div className=" cir3 h-[30vw] w-[30vw] border-[1px] dark:border-white border-black  rounded-full absolute animate-wave2"></div>
    </div>
  );
};

export default WaveButton;
