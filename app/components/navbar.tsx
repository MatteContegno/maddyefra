"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import logo from "../img/logo.svg";

// Aggiungiamo "hero" agli ID tracciabili, impostandolo come stato iniziale
type SectionId = "hero" | "location" | "rsvp-section" | "lista-nozze";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState<SectionId>("hero");

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    // Includiamo "hero" all'inizio dell'array di controllo
    const sections: SectionId[] = [
      "hero",
      "location",
      "rsvp-section",
      "lista-nozze",
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      // Se siamo vicini all'inizio assoluto della pagina, forza la sezione su "hero"
      if (window.scrollY < 50) {
        setActiveSection("hero");
        return;
      }

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;

          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getMobileNavbarStyles = () => {
    switch (activeSection) {
      // Quando siamo nella hero, lo sfondo della barra è identico a quando siamo su location,
      // ma nessuno dei tre pulsanti di testo riceve la classe attiva (rimangono tutti non selezionati)
      case "hero":
        return {
          container: "bg-[#45492d]/30 text-[#45492D]",
          btnLocation:
            "text-[#45492D] px-4 h-12 flex items-center justify-center",
          btnRsvp: "text-[#45492D]",
          btnListaNozze: "text-[#45492D]",
        };
      case "location":
        return {
          container: "bg-[#45492d]/30 text-[#45492D]",
          btnLocation: "h-12 px-4 bg-[#45492D] text-[#FFFEF4] rounded-2xl",
          btnRsvp: "text-[#45492D]",
          btnListaNozze: "text-[#45492D]",
        };
      case "rsvp-section":
        return {
          container: "bg-[#FFFEF4]/30 text-white/50",
          btnLocation: "text-[#FFFEF4]/50",
          btnRsvp: "h-12 px-4 bg-[#FFFEF4] text-[#45492D] rounded-2xl",
          btnListaNozze: "text-[#FFFEF4]/50",
        };
      case "lista-nozze":
        return {
          container: "bg-black/40 text-white/50",
          btnLocation: "text-[#FFFEF4]/50",
          btnRsvp: "text-[#FFFEF4]/50",
          btnListaNozze: "h-12 px-4 bg-[#45492D] text-[#FFFEF4] rounded-2xl",
        };
    }
  };

  const currentMobileStyle = getMobileNavbarStyles();

  return (
    <>
      {/* ========================================== */}
      {/* 1. VERSIONE MOBILE: BOTTOM BAR              */}
      {/* ========================================== */}
      <div
        className={`fixed bottom-4 left-0 right-0 mx-4 z-50 md:hidden p-1 backdrop-blur-md rounded-2xl flex items-center justify-center transition-all duration-300 ${currentMobileStyle.container}`}
      >
        <div className="w-full flex items-center justify-between px-2">
          <div className="flex items-center gap-2 w-full justify-around">
            {/* LOGO */}
            <button
              onClick={() => scrollToSection("home")}
              className="h-12 px-2 flex items-center justify-center cursor-pointer"
            >
              <div className="w-[35px] h-[22px] relative">
                <Image src={logo} alt="Logo" fill className="object-contain" />
              </div>
            </button>

            {/* VOCI DI NAVIGAZIONE */}
            <button
              onClick={() => scrollToSection("location")}
              className={`text-base font-normal font-['DM_Sans'] transition-all duration-300 flex items-center justify-center whitespace-nowrap ${currentMobileStyle.btnLocation}`}
            >
              Benvenuto
            </button>

            <button
              onClick={() => scrollToSection("rsvp-section")}
              className={`text-base font-normal font-['DM_Sans'] transition-all duration-300 flex items-center justify-center whitespace-nowrap ${currentMobileStyle.btnRsvp}`}
            >
              Rsvp
            </button>

            <button
              onClick={() => scrollToSection("lista-nozze")}
              className={`text-base font-normal font-['DM_Sans'] transition-all duration-300 flex items-center justify-center whitespace-nowrap ${currentMobileStyle.btnListaNozze}`}
            >
              Lista nozze
            </button>
          </div>
        </div>
      </div>

      {/* ========================================== */}
      {/* 2. VERSIONE DESKTOP: NAVBAR IN ALTO         */}
      {/* ========================================== */}
      <div className="fixed top-16 left-0 right-0 mx-6 z-50 hidden md:block">
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
                Ciao
              </button>
              <button
                onClick={() => scrollToSection("rsvp-section")}
                className="justify-start text-stone-50 text-2xl font-normal font-['DM_Sans'] hover:opacity-70 transition-opacity"
              >
                Rsvp
              </button>
              <button
                onClick={() => scrollToSection("lista-nozze")}
                className="justify-start text-stone-50 text-2xl font-normal font-['DM_Sans'] hover:opacity-70 transition-opacity"
              >
                Lista nozze
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
