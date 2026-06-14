import Image from "next/image";
import bgCateringImage from "@/app/img/Bgcatering.svg";
import RSVPForm from "./RSVPForm";

export default function RSVPSection() {
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
        className="object-cover object-center select-none opacity-40"
        priority
      />
      {/* Overlay per migliorare il contrasto */}
      <div className="absolute inset-0 bg-black/10 pointer-events-none" />

      {/* 2. CONTENITORE CONTENUTI */}
      {/* CORREZIONE: Cambiato in justify-start e aggiunto gap-8 (regolabile) per avvicinare i blocchi */}
      <div className="relative z-10 w-full max-w-11/12 flex flex-col justify-start items-start gap-8 md:gap-10 flex-1">
        {/* BLOCCO TESTI */}
        <div className="w-full flex flex-col justify-start items-start">
          <h2
            className="text-7xl sm:text-8xl md:text-[120px] lg:text-[160px] text-stone-50 leading-none select-none"
            style={{ fontFamily: "var(--font-hello-santuy)" }}
          >
            Rsvp
          </h2>

          <div className="w-full font-['DM_Sans'] tracking-wide leading-tight space-y-2 mt-4 md:mt-6">
            <p className="text-stone-100 text-lg sm:text-xl md:text-2xl font-bold">
              Mettetevi comodi, ma prima raggiungeteci!
            </p>
            <p className="text-stone-100/85 text-base sm:text-lg font-light italic">
              (Per favore, ricordati di indossare un dettaglio verde o
              arancione)
            </p>
          </div>
        </div>

        {/* IL FORM MULTI-STEP */}
        {/* Usando flex-1 e h-full qui dentro, si prenderà lo spazio rimanente in modo armonioso */}
        <div className="w-full flex-1 h-full flex justify-center items-center">
          <RSVPForm />
        </div>
      </div>
    </section>
  );
}
