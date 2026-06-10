"use client"; // Ricordati di includerlo se usi window.open al click

import Image from "next/image";
import locationImage from "@/app/img/Location.svg";

export default function BenvenutoSection() {
  const openMaps = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <section
      id="benvenuto"
      // min-h-screen garantisce che copra tutta l'altezza, py-16 dà respiro sopra e sotto
      className="w-full min-h-screen px-6 py-16 md:p-16 flex flex-col justify-center items-center bg-stone-50"
    >
      {/* Il layout diventa colonna su mobile (flex-col) e riga su desktop (md:flex-row) */}
      <div className="w-full max-w-7xl flex flex-col md:flex-row justify-between items-stretch gap-12 lg:gap-20">
        {/* CONTENITORE IMMAGINE: proporzionato e fluido */}
        <div className="w-full md:flex-1 min-h-75 md:min-h-125 relative rounded-2xl overflow-hidden">
          <Image
            src={locationImage}
            alt="Benvenuto"
            fill
            className="object-cover"
            priority // Carica l'immagine più velocemente essendo a inizio pagina
          />
        </div>

        {/* CONTENITORE TESTI */}
        <div className="w-full md:flex-1 flex flex-col justify-between items-start gap-8">
          {/* TITOLO: Responsive (piccolo su mobile, gigante su desktop) */}
          <h1
            className="text-7xl sm:text-8xl md:text-[120px] lg:text-[160px] leading-none text-stone-700"
            style={{ fontFamily: "var(--font-hello-santuy)" }}
          >
            Benvenuto
          </h1>

          {/* INTRODUZIONE */}
          <div className="text-stone-700 text-xl md:text-2xl font-['DM_Sans'] space-y-4">
            <p className="font-bold">
              Ciao! Se sei qui è perché saremmo felici di condividere con te
              questa giornata speciale (e tutte quelle che seguiranno).
            </p>
            <p className="font-normal">
              Qui sotto potete trovare la risposta a tutti i vostri dubbi (e
              qualche domanda per voi!)
            </p>
            <p className="font-bold text-red-800 dark:text-stone-700 pt-2">
              RSVP entro il 31/08/2026
            </p>
          </div>

          {/* SEZIONE DETTAGLI CON LINEA TRATTEGGIATA PERFETTA */}
          <div className="w-full pl-10 relative flex flex-col gap-12 font-['DM_Sans'] text-stone-700 text-xl md:text-2xl">
            {/* CHIESA */}
            {/* Abbiamo aggiunto h-full alla linea interna per farla arrivare esattamente all'inizio del blocco successivo */}
            <div className="flex flex-col items-start gap-4 relative">
              {/* 1. La Linea Tratteggiata Verticale */}
              {/* Ora è dentro il primo blocco, parte da sotto il primo pallino (top-7) e scende fino in fondo (h-[calc(100%+3rem)]) per raggiungere il secondo */}
              <div className="absolute -left-7.5 top-10 -bottom-12 border-l-2 border-dashed border-stone-400" />

              {/* 2. Ellisse Superiore */}
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

            {/* RICEVIMENTO */}
            <div className="flex flex-col items-start gap-4 relative">
              {/* 3. Ellisse Inferiore */}
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
      </div>
    </section>
  );
}
