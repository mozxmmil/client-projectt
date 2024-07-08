import ContactCard from "@/components/ContactCard";
import NavToggleMenu from "@/components/NavToggleMenu";
import React from "react";

const page = () => {
  return (
    <div className="w-full h-screen relative bg-white dark:bg-zinc-900">
      <div className="w-full absolute top-5">
        <NavToggleMenu />
      </div>
      <div className="w-full h-full bg-white dark:bg-zinc-900 relative top-24 pt-5 flex justify-center items-center flex-col gap-4">
        <h1 className="text-2xl text-center ">Contact Us</h1>
        <div className="w-full md:w-1/2 ">
          <ContactCard />
        </div>
      </div>
    </div>
  );
};

export default page;
