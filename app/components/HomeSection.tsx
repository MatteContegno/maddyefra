import Image from "next/image";
import homeImage from "@/app/img/Home.jpeg";
import titleSvg from "@/app/img/Title.svg";

export default function HomeSection() {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-between items-center bg-stone-900 text-stone-50 overflow-hidden pb-12 md:pb-16">
      {/* 1. IMMAGINE DI SFONDO */}
      <Image
        src={homeImage}
        alt="Sfondo Matrimonio"
        fill
        className="object-cover object-center opacity-90 select-none"
        priority
      />

      {/* Overlay scuro per migliorare la leggibilità */}
      <div className="absolute inset-0 bg-black/20 pointer-events-none" />

      {/* 2. CONTENUTO CENTRALE */}
      {/* py-20 garantisce che ci sia spazio dall'alto dello schermo prima del titolo */}
      <div className="relative z-10 flex-1 w-full max-w-11/12 mx-auto px-6 flex flex-col items-center text-center pt-56 pb-4">
        {/* IL TITOLO (Ingrandito rispetto a prima) */}
        {/* Ho aumentato drasticamente i max-w per renderlo molto più grande su tutti gli schermi */}
        <div className="w-full max-w-md sm:max-w-xl md:max-w-3xl lg:max-w-4xl h-auto transition-all duration-300">
          <Image
            src={titleSvg}
            alt="Nome degli Sposi"
            priority
            className="w-full h-auto"
          />
        </div>

        {/* LA DATA (Mantiene il suo gap naturale dal titolo grazie a mt-12) */}
        <div className="mt-12 font-['Cochin'] serif tracking-wide leading-relaxed max-w-2xl px-2">
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

        {/* BADGE RSVP (Scollegato dal flusso!) */}
        {/* mt-auto fa sì che questo div consumi tutto lo spazio verticale residuo, 
            spingendo il badge sul fondo della schermata, ben distante dalla data */}
        <div className="mt-auto pt-16 flex justify-center items-center">
          {/* Cerchio Esterno */}
          <div className="w-32 h-32 md:w-36 md:h-36 rounded-full border border-stone-50 flex justify-center items-center p-2 animate-fade-in hover:scale-105 transition-transform duration-300">
            {/* Cerchio Interno */}
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
