import React from "react";
import NavToggleMenu from "@/components/NavToggleMenu";
import ServicePageSessction from "@/components/ServicePageSessction";
import dynamic from "next/dynamic";
const WaveButton = dynamic(() => import("@/components/service/WaveButton"));

const page = () => {
  return (
    <main className="w-full h-screen bg-white dark:bg-zinc-900 relative ">
      <div className="w-full absolute top-10">
        <NavToggleMenu />
      </div>
      <div className="fixed bottom-0 right-0 z-10">
        <WaveButton />
      </div>
      <div className="w-full h-full  relative top-24 ">
        <ServicePageSessction />
      </div>
    </main>
  );
};

export default page;
