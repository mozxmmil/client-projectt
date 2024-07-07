import Image from "next/image";
import React from "react";

interface Card {
  src: string;
}
const Slidercard: React.FC<Card> = ({ src }) => {
  return (
    <div className="min-w-[120px] relative min-h-[192px] drop-shadow-2xl bg-white dark:bg-zinc-700 rounded-xl flex justify-center items-center bg-none	">
      <Image
        width={100}
        height={100}
        src={src}
        loading="eager"
        
        alt="not"
        className="absolute bg-none	  "
      />
    </div>
  );
};

export default Slidercard;
