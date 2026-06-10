import Image from "next/image";
import bgCateringImage from "@/app/img/Bgcatering.svg";
import RSVPForm from "./RSVPForm";

export default function RSVPSection() {
  return (
    <section
      id="rsvp-section"
      className="relative w-full min-h-screen flex flex-col justify-between items-center bg-stone-900 py-16 px-6 md:p-16 overflow-hidden"
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
      <div className="absolute inset-0 bg-black/20 pointer-events-none" />

      {/* 2. CONTENITORE CONTENUTI (Z-10 per stare sopra lo sfondo) */}
      <div className="relative z-10 w-full max-w-7xl flex flex-col justify-between items-start gap-12 flex-1">
        {/* BLOCCO TESTI: Si adatta e riduce i font su mobile */}
        <div className="w-full flex flex-col justify-start items-start gap-4 md:gap-6">
          <h2
            className="text-7xl sm:text-8xl md:text-[120px] lg:text-[160px] text-stone-50 leading-none select-none"
            style={{ fontFamily: "var(--font-hello-santuy)" }}
          >
            Rsvp
          </h2>
          <p className="w-full text-stone-100 text-xl sm:text-2xl md:text-3xl font-bold font-['DM_Sans'] tracking-wide max-w-2xl leading-tight">
            Mettetevi comodi, ma prima raggiungeteci!
          </p>
        </div>

        {/* IL FORM MULTI-STEP */}
        {/* Lo centriamo orizzontalmente all'interno dello spazio rimanente */}
        <div className="w-full flex justify-center items-center mt-4 md:mt-0">
          <RSVPForm />
        </div>
      </div>
    </section>
  );
}
