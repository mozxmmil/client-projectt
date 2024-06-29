import React from "react";

interface SidebarProps {
  isOpen: boolean;
}
const Slider = ({ isOpen }: SidebarProps) => {
  return (
    isOpen && (
        <div className=" w-full  ">
         <div className="bg-black w-full h-screen">

         </div>
        </div>
    )
  )
};

export default Slider;
