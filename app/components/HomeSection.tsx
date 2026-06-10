import Image from "next/image";
import homeImage from "@/app/img/home.svg";
import titleSvg from "@/app/img/Title.svg";

export default function HomeSection() {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-between items-center bg-stone-900 text-stone-50 overflow-hidden">
      {/* 1. IMMAGINE DI SFONDO */}
      <Image
        src={homeImage}
        alt="Sfondo Matrimonio"
        fill
        className="object-cover object-center opacity-90 select-none"
        priority
      />

      {/* Overlay scuro opzionale per migliorare la leggibilità dei testi bianchi sulla foto */}
      <div className="absolute inset-0 bg-black/20 pointer-events-none" />

      {/* 2. CONTENUTO CENTRALE (Titolo + Data + RSVP) */}
      {/* Usiamo z-10 per stare sopra lo sfondo e flex-col per impilare tutto verticalmente */}
      <div className="relative z-10 flex-1 w-full max-w-4xl mx-auto px-6 flex flex-col justify-center items-center text-center gap-12 md:gap-16">
        {/* IL TITOLO (Immagine vettoriale responsive) */}
        <div className="w-full max-w-70 sm:max-w-112.5 md:max-w-150 lg:max-w-175 h-auto transition-all">
          <Image
            src={titleSvg}
            alt="Nome degli Sposi"
            priority
            className="w-full h-auto"
          />
        </div>

        {/* LA DATA (Fluida, si adatta e va a capo con grazia su mobile) */}
        <div className="font-['Cochin'] serif tracking-wide leading-relaxed max-w-2xl px-2">
          <div className="flex flex-wrap justify-center items-center gap-x-3 gap-y-1 text-xl sm:text-2xl md:text-3xl font-medium">
            <span>sabato</span>
            <span className="text-2xl md:text-4xl font-light text-stone-300 select-none">
              ·
            </span>
            <span className="font-bold text-2xl sm:text-3xl md:text-5xl">
              26 settembre 2026
            </span>
            <span className="text-2xl md:text-4xl font-light text-stone-300 select-none">
              ·
            </span>
            <span>10:30</span>
          </div>
        </div>

        {/* BADGE RSVP (Un cerchio perfetto, senza posizionamenti assoluti sul testo) */}
        <div className="mt-4 md:mt-8 flex justify-center items-center">
          {/* Cerchio Esterno */}
          <div className="w-36 h-36 md:w-44 md:h-44 rounded-full border border-stone-50/60 flex justify-center items-center p-2 animate-fade-in">
            {/* Cerchio Interno che contiene il testo centrato nativamente */}
            <div className="w-full h-full rounded-full border border-stone-50 flex flex-col justify-center items-center p-4">
              <span className="font-['Cochin'] text-xs md:text-sm tracking-widest uppercase opacity-80 mb-1">
                RSVP entro il
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
