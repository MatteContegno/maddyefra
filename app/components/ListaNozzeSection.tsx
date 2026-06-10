import Image from "next/image";
import listaNozeImage from "../img/rsvp.svg";
import indirizzoIcon from "../img/Indirizzo.svg";
import phoneIcon from "../img/Phone.svg";
import mailIcon from "../img/mail.svg";
import linkIcon from "../img/link.svg";
import usernameIcon from "../img/username.svg";
import pwdIcon from "../img/pwd.svg";

export default function ListaNozzeSection() {
  return (
    <section
      id="lista-nozze"
      className="relative w-full min-h-screen flex items-center justify-center bg-stone-900 py-20 px-6 md:px-12 overflow-hidden"
    >
      {/* 1. IMMAGINE DI SFONDO */}
      <Image
        src={listaNozeImage}
        alt="Lista Nozze Background"
        fill
        className="object-cover object-center select-none opacity-85"
        priority
      />
      {/* Overlay per garantire che il testo bianco sia leggibile su qualsiasi foto */}
      <div className="absolute inset-0 bg-black/30 pointer-events-none" />

      {/* 2. CONTENITORE CENTRALE RESPONSIVE */}
      <div className="relative z-10 w-full max-w-3xl mx-auto flex flex-col items-center gap-10 md:gap-12 text-stone-50 drop-shadow-md">
        {/* TITOLI */}
        <div className="text-center space-y-2">
          <h2
            className="text-7xl sm:text-8xl md:text-[120px] lg:text-[140px] leading-none font-normal"
            style={{ fontFamily: "var(--font-hello-santuy)" }}
          >
            Lista nozze
          </h2>
          <h3 className="font-['Cochin'] text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide text-stone-200">
            Sastesitour
          </h3>
        </div>

        {/* CONTENITORE INFO (Organizzato in blocchi logici puliti) */}
        <div className="w-full flex flex-col gap-6 md:gap-8 font-['DM_Sans'] text-lg sm:text-xl md:text-2xl font-light">
          {/* BLOCCO 1: INDIRIZZO */}
          <div className="flex items-start justify-center gap-4 text-center max-w-xl mx-auto">
            <div className="shrink-0 w-5 h-5 mt-1.5 relative">
              <Image
                src={indirizzoIcon}
                alt=""
                fill
                className="object-contain"
              />
            </div>
            <p>
              <span className="font-bold">Indirizzo: </span>
              <span className="text-stone-200">
                Via Fieschi 119R 16121 (Genova, Ge)
              </span>
            </p>
          </div>

          <hr className="w-24 mx-auto border-stone-50/20" />

          {/* BLOCCO 2: CONTATTI DIRETTI */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12">
            {/* Telefono */}
            <a
              href="tel:0105303608"
              className="flex items-center gap-3 hover:text-stone-300 transition-colors"
            >
              <div className="w-5 h-5 relative">
                <Image src={phoneIcon} alt="" fill className="object-contain" />
              </div>
              <p>
                <span className="font-bold">Telefono: </span>
                <span className="text-stone-200">0105303608</span>
              </p>
            </a>

            {/* Email */}
            <a
              href="mailto:agenzia@sastesitour.it"
              className="flex items-center gap-3 hover:text-stone-300 transition-colors"
            >
              <div className="w-6 h-5 relative">
                <Image src={mailIcon} alt="" fill className="object-contain" />
              </div>
              <p>
                <span className="font-bold">Email: </span>
                <span className="text-stone-200 underline decoration-stone-400">
                  agenzia@sastesitour.it
                </span>
              </p>
            </a>
          </div>

          <hr className="w-24 mx-auto border-stone-50/20" />

          {/* BLOCCO 3: ACCESSO SITO AGENZIA (Card evidenziata) */}
          <div className="w-full max-w-xl mx-auto bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 flex flex-col gap-4 border border-white/10">
            {/* Link al sito */}
            <a
              href="https://ferrerocontegno.amoore.it"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 text-center text-amber-200 hover:underline break-all font-medium"
            >
              <div className="w-5 h-5 shrink-0 relative">
                <Image src={linkIcon} alt="" fill className="object-contain" />
              </div>
              <span>https://ferrerocontegno.amoore.it</span>
            </a>

            {/* Credenziali affiancate */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-base md:text-lg border-t border-white/5">
              {/* Username */}
              <div className="flex items-center gap-3 justify-center sm:justify-start">
                <div className="w-5 h-5 relative shrink-0">
                  <Image
                    src={usernameIcon}
                    alt=""
                    fill
                    className="object-contain"
                  />
                </div>
                <p>
                  <span className="opacity-80">User: </span>
                  <span className="font-mono font-bold tracking-wider select-all bg-white/5 px-2 py-0.5 rounded">
                    guest13306
                  </span>
                </p>
              </div>

              {/* Password */}
              <div className="flex items-center gap-3 justify-center sm:justify-start">
                <div className="w-5 h-5 relative shrink-0">
                  <Image src={pwdIcon} alt="" fill className="object-contain" />
                </div>
                <p>
                  <span className="opacity-80">Password: </span>
                  <span className="font-mono font-bold tracking-wider select-all bg-white/5 px-2 py-0.5 rounded">
                    331d58
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
