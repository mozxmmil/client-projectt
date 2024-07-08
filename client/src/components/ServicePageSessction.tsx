import React from "react";
import dynamic from "next/dynamic";
const Card = dynamic(()=>import("./service/Card"))


const ServicePageSessction = () => {
  return (
    <div className="w-full h-full pt-10">
      <div className="first w-full  min-h-[100px]">
        <h1 className="text-center w-full md:text-7xl text-4xl mb-5 font-bold font-serif">
          Our Professional Services
        </h1>
        <section className=" pt-5">
          <div className="card">
            <Card/>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ServicePageSessction;
