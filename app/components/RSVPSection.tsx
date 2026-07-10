"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import bgCateringImage from "@/app/img/Bgcatering.svg";
import RSVPForm from "./RSVPForm";

export default function RSVPSection() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  useEffect(() => {
    if (isFormOpen) {
      const previousOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = previousOverflow;
      };
    }
  }, [isFormOpen]);

  return (
    <section
      id="rsvp-section"
      className="relative w-full min-h-screen flex flex-col justify-start items-center bg-stone-900 py-16 px-6 md:p-16 overflow-hidden"
    >
      {/* 1. IMMAGINE DI SFONDO */}
      <Image
        src={bgCateringImage}
        alt="Catering Background"
        fill
        className="object-cover object-center select-none opacity-10 md:opacity-40"
        priority
      />
      {/* Overlay per migliorare il contrasto */}
      {/* Mobile: overlay verde scuro forte per avvicinarsi al colore pieno del Figma (#45492D) */}
      {/* Desktop: overlay originale invariato */}
      <div className="absolute inset-0 bg-[#45492D]/90 md:bg-black/10 pointer-events-none" />

      {/* 2. CONTENITORE CONTENUTI */}
      <div className="relative z-10 w-full max-w-11/12 flex flex-col justify-start items-start gap-12 md:gap-10 flex-1">
        {/* BLOCCO TESTI */}
        <div className="w-full flex flex-col justify-start items-start">
          <h2
            className="text-7xl sm:text-8xl md:text-[120px] lg:text-[160px] text-stone-50 leading-none select-none"
            style={{ fontFamily: "var(--font-hello-santuy)" }}
          >
            Rsvp
          </h2>

          <div className="w-full font-['DM_Sans'] tracking-wide leading-tight space-y-2 mt-6 md:mt-6">
            <p className="text-stone-100 text-lg sm:text-xl md:text-2xl font-bold">
              Mettetevi comodi, ma prima raggiungeteci!
            </p>
            <p className="text-stone-100/85 text-base sm:text-lg font-light italic">
              (Per favore, ricordati di indossare un dettaglio verde o
              arancione)
            </p>
          </div>

          {/* BOTTONE "Compila modulo" — solo mobile, fedele al Figma */}
          <button
            type="button"
            onClick={() => setIsFormOpen(true)}
            className="md:hidden mt-8 h-12 px-4 py-2 bg-[#FFFEF4] rounded-full flex justify-center items-center gap-4 self-center"
          >
            <span className="text-[#45492D] text-base font-['DM_Sans'] font-medium">
              Compila modulo
            </span>
          </button>
        </div>

        {/* IL FORM MULTI-STEP — DESKTOP: sempre visibile inline, invariato */}
        <div className="hidden md:flex w-full flex-1 h-full justify-center items-center">
          <RSVPForm />
        </div>
      </div>

      {/* IL FORM MULTI-STEP — MOBILE: a comparsa come bottom sheet, non raggiungibile da scroll */}
      {isFormOpen && (
        <div className="md:hidden fixed inset-0 z-50 flex items-end justify-center bg-black/40">
          <div className="relative w-full h-[85vh]">
            <RSVPForm onClose={() => setIsFormOpen(false)} />
          </div>
        </div>
      )}
    </section>
  );
}
