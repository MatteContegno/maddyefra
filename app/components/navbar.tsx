"use client";

import Image from "next/image";
import logo from "../img/logo.svg";

export default function Navbar() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed top-16 left-0 right-0 mx-6 z-50">
      <div className="w-full h-20 px-9 py-3.5 bg-black/40 rounded-[40px] backdrop-blur-[5px] flex flex-col justify-start items-start gap-2">
        <div className="w-full flex justify-between items-center">
          <button
            onClick={() => scrollToSection("home")}
            className="cursor-pointer w-20 h-14 relative overflow-hidden"
          >
            <Image src={logo} alt="Logo" width={56} height={48} />
          </button>
          <div className="w-96 flex justify-start items-center gap-9">
            <button
              onClick={() => scrollToSection("location")}
              className="justify-start text-stone-50 text-2xl font-normal font-['DM_Sans'] hover:opacity-70 transition-opacity"
            >
              Benvenuto
            </button>
            <button
              onClick={() => scrollToSection("rsvp")}
              className="justify-start text-stone-50 text-2xl font-normal font-['DM_Sans'] hover:opacity-70 transition-opacity"
            >
              Rsvp
            </button>
            <button
              onClick={() => scrollToSection("listanozze")}
              className="justify-start text-stone-50 text-2xl font-normal font-['DM_Sans'] hover:opacity-70 transition-opacity"
            >
              Lista nozze
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
