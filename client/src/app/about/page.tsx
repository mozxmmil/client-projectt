import AboutMainSection from "@/components/about/AboutMainSessction";
import AboutUsSection from "@/components/about/AboutUsSessction";
import NavToggleMenu from "@/components/NavToggleMenu";
import React from "react";

const page = () => {
  return (
    <div className="w-full h-screen bg-white dark:bg-zinc-900 relative ">
      <div className="w-full absolute top-10">
        <NavToggleMenu />
      </div>
      <div className="w-full h-1/2 bg-white dark:bg-zinc-900">
        <AboutUsSection/>
      </div>
      <div className="w-full h-screen bg-white dark:bg-zinc-900 ">
      <AboutMainSection/>
      </div>
    </div>
  );
};

export default page;
