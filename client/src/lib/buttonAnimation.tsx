import { FaWhatsapp } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
export const buttons = [
  {
    name: "Border Magic",
    description: "Border Magic button for your website",
    showDot: false,
    component: (
      <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-xl tracking-tighter font- text-white text-center backdrop-blur-3xl">
          Let&apos;s-Build
        </span>
      </button>
    ),
  },
  {
    name: "Border Magic1",
    description: "Border Magic button for your website",
    showDot: false,
    component: (
      <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 ">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 md:px-7 px-5 py-1  md:text-xl  font- text-white text-center backdrop-blur-3xl">
          <div className="flex items-center gap-2">
          <FaWhatsapp />
          <span>Text Us</span>
          </div>
        </span>
      </button>
    ),
  },
  {
    name: "Border Magic2",
    description: "Border Magic button for your website",
    showDot: false,
    component: (
      <button className="relative inline-flex h-12 overflow-hidden rounded-full md:p-[1px] focus:outline-black focus:ring-2 focus:ring-black focus:ring-offset-2 focus:ring-offset-black">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-white slate-950 md:px-7 px-5 py-1  md:text-xl  font- text-black text-center backdrop-blur-3xl">
          <div className="flex items-center gap-2">
          <IoIosCall />
          <span>Call Us</span>
          </div>
        </span>
      </button>
    ),
  },
];

