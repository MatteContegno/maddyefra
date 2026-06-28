"use client";

import Image from "next/image";
import locationImage from "@/app/img/Location.jpg";

export default function BenvenutoSection() {
  const openMaps = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <section
      id="benvenuto"
      className="w-full min-h-screen px-6 py-16 md:p-16 flex flex-col justify-center items-center bg-stone-50"
    >
      {/* Su mobile: flex-col con order. Su desktop: flex-row a due colonne */}
      <div className="w-full max-w-11/12 flex flex-col md:flex-row justify-between items-stretch gap-12 lg:gap-20">
        {/* IMMAGINE — mobile: order-2, desktop: colonna sinistra */}
        <div className="order-2 md:order-none w-full md:flex-1 min-h-[329px] md:min-h-125 relative rounded-2xl overflow-hidden">
          <Image
            src={locationImage}
            alt="Location del matrimonio"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* COLONNA DESTRA (desktop) / BLOCCO TITOLO+TESTO (mobile: order-1) */}
        <div className="order-1 md:order-none w-full md:flex-1 flex flex-col justify-between items-center md:items-start gap-8">
          {/* TITOLO */}
          <h1
            className="text-[64px] md:text-[120px] lg:text-[160px] leading-none text-stone-700 text-center md:text-left w-full"
            style={{ fontFamily: "var(--font-hello-santuy)" }}
          >
            Ciao
          </h1>

          {/* INTRODUZIONE */}
          <div className="text-stone-700 text-base md:text-2xl font-['DM_Sans'] space-y-4 text-center md:text-left">
            <p className="font-bold">
              Se sei qui è perché saremmo felici di condividere con te questa
              giornata speciale (e tutte quelle che seguiranno).
            </p>
            <p className="font-normal">
              Qui sotto potete trovare la risposta a tutti i vostri dubbi (e
              qualche domanda per voi!)
            </p>
            <p className="font-bold text-red-800 dark:text-stone-700 pt-2">
              RSVP entro il 31/08/2026
            </p>
          </div>

          {/* LUOGHI DESKTOP ONLY — con linea tratteggiata e pallini, invariato */}
          <div className="hidden md:flex w-full pl-10 relative flex-col gap-12 font-['DM_Sans'] text-stone-700 text-2xl">
            {/* CHIESA — desktop */}
            <div className="flex flex-col items-start gap-4 relative">
              <div className="absolute -left-7.5 top-10 -bottom-12 border-l-2 border-dashed border-stone-400" />
              <div className="absolute -left-9.75 top-2.5 w-5 h-5 bg-stone-800 rounded-full" />
              <div className="flex flex-col items-start gap-3">
                <p>
                  La cerimonia si svolgerà presso <br />
                  <span className="font-bold">
                    Chiesa dei Santi Quirico e Giulitta - Via San Quirico, 151
                    (GE)
                  </span>
                </p>
                <button
                  onClick={() => openMaps("URL_MAPS_0")}
                  className="px-6 py-2 rounded-full border border-stone-700 text-stone-700 font-medium text-lg hover:bg-stone-700 hover:text-white transition-all cursor-pointer"
                >
                  Apri in Maps
                </button>
              </div>
            </div>

            {/* RICEVIMENTO — desktop */}
            <div className="flex flex-col items-start gap-4 relative">
              <div className="absolute -left-9.75 top-2.5 w-5 h-5 bg-stone-800 rounded-full" />
              <div className="flex flex-col items-start gap-3">
                <p>
                  Seguiranno i festeggiamenti presso <br />
                  <span className="font-bold">
                    Frazione Pratolungo 106, località Chiesa, Gavi (AL)
                  </span>
                </p>
                <button
                  onClick={() => openMaps("URL_MAPS_1")}
                  className="px-6 py-2 rounded-full border border-stone-700 text-stone-700 font-medium text-lg hover:bg-stone-700 hover:text-white transition-all cursor-pointer"
                >
                  Apri in Maps
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* LUOGHI MOBILE ONLY — order-3, centrato, senza decorazioni */}
        <div className="order-3 md:hidden w-full flex flex-col items-center gap-8 font-['DM_Sans'] text-stone-700 text-base">
          {/* CHIESA — mobile */}
          <div className="flex flex-col items-center gap-3 text-center">
            <p>
              La cerimonia si svolgerà presso{" "}
              <span className="font-bold">
                Chiesa dei Santi Quirico e Giulitta - Via San Quirico, 151 (GE)
              </span>
            </p>
            <button
              onClick={() => openMaps("URL_MAPS_0")}
              className="px-6 py-2 rounded-full border border-stone-700 text-stone-700 font-medium text-base hover:bg-stone-700 hover:text-white transition-all cursor-pointer"
            >
              Apri in Maps
            </button>
          </div>

          {/* RICEVIMENTO — mobile */}
          <div className="flex flex-col items-center gap-3 text-center">
            <p>
              Seguiranno i festeggiamenti presso{" "}
              <span className="font-bold">
                Frazione Pratolungo 106, località Chiesa, Gavi (AL)
              </span>
            </p>
            <button
              onClick={() => openMaps("URL_MAPS_1")}
              className="px-6 py-2 rounded-full border border-stone-700 text-stone-700 font-medium text-base hover:bg-stone-700 hover:text-white transition-all cursor-pointer"
            >
              Apri in Maps
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
