"use client";

// Menu items:
// - Menu
// - Events
// - Shop

import { useState } from "react";

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex flex-col justify-center items-center gap-2 rounded-md py-3 transition-all duration-500 ease-out border-black border-[1px] z-50 ${
          isOpen ? "px-2" : "px-3"
        }  hover:border-slate-400 `}
      >
        <span
          className={`bg-slate-200 block transition-all duration-300 ease-out h-0.5 w-8 rounded-sm ${
            isOpen ? "rotate-45 translate-y-3 w-10" : ""
          }`}
        ></span>
        <span
          className={`bg-slate-200 block transition-all duration-150 ease-out 
                    h-0.5 w-8 rounded-sm my-0.5 ${
                      isOpen ? "opacity-0" : "opacity-100"
                    }`}
        ></span>
        <span
          className={`bg-slate-200 block transition-all duration-300 ease-out 
                    h-0.5 w-8 rounded-sm ${
                      isOpen ? "-rotate-45 -translate-y-3 w-10" : ""
                    }`}
        ></span>
      </button>
    </>
  );
}
