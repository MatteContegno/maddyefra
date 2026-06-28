import Image from "next/image";
import homeImage from "@/app/img/Home.jpeg";
import homeMobileImage from "@/app/img/HomeMobile.jpg";
import titleSvg from "@/app/img/Title.svg";
import titleMobileSvg from "@/app/img/TitleMobile.svg";

export default function HomeSection() {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-between items-center bg-stone-900 text-stone-50 overflow-hidden pb-12 md:pb-16">
      {/* 1. IMMAGINE DI SFONDO */}
      {/* Mobile: HomeMobile.jpg */}
      <Image
        src={homeMobileImage}
        alt="Sfondo Matrimonio"
        fill
        className="object-cover object-center opacity-90 select-none md:hidden"
        priority
      />
      {/* Desktop: Home.jpeg */}
      <Image
        src={homeImage}
        alt="Sfondo Matrimonio"
        fill
        className="object-cover object-center opacity-90 select-none hidden md:block"
        priority
      />

      {/* Overlay scuro per migliorare la leggibilità */}
      <div className="absolute inset-0 bg-black/20 pointer-events-none" />

      {/* 2. CONTENUTO CENTRALE */}
      <div className="relative z-10 flex-1 w-full max-w-11/12 mx-auto px-6 flex flex-col items-center text-center pt-16 md:pt-56 pb-4">
        {/* TITOLO MOBILE (TitleMobile.svg, visibile solo su mobile) */}
        <div className="block md:hidden w-full max-w-xs h-auto">
          <Image
            src={titleMobileSvg}
            alt="Nome degli Sposi"
            priority
            className="w-full h-auto"
          />
        </div>

        {/* TITOLO DESKTOP (Title.svg, visibile solo da md in su) */}
        <div className="hidden md:block w-full max-w-md sm:max-w-xl md:max-w-3xl lg:max-w-4xl h-auto transition-all duration-300">
          <Image
            src={titleSvg}
            alt="Nome degli Sposi"
            priority
            className="w-full h-auto"
          />
        </div>

        {/* LA DATA */}
        <div className="mt-12 font-['Cochin'] serif tracking-wide leading-relaxed w-full md:max-w-2xl px-2 text-right md:text-center">
          <div className="flex flex-col items-end md:flex-row md:flex-wrap md:justify-center md:items-center md:gap-x-3 md:gap-y-1 text-xl sm:text-2xl md:text-3xl font-medium">
            <span className="md:inline">sabato</span>
            <span className="hidden md:inline text-2xl md:text-4xl font-light text-stone-300 select-none">
              ·
            </span>
            <span className="font-bold text-2xl md:text-3xl md:text-5xl">
              26 settembre 2026
            </span>
            <span className="hidden md:inline text-2xl md:text-4xl font-light text-stone-300 select-none">
              ·
            </span>
            <span className="md:inline">10:30</span>
          </div>
        </div>

        {/* BADGE RSVP */}
        <div className="mt-auto pt-16 flex justify-center items-center">
          <div className="w-32 h-32 md:w-36 md:h-36 rounded-full border border-stone-50 flex justify-center items-center p-2 animate-fade-in hover:scale-105 transition-transform duration-300">
            <div className="w-full h-full rounded-full border border-stone-50/60 flex flex-col justify-center items-center p-2">
              <span className="font-['Cochin'] text-xl md:text-2xl tracking-wide font-bold">
                RSVP
              </span>
              <span className="font-['Cochin'] font-bold text-base md:text-xl tracking-tight">
                31/08/2026
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
