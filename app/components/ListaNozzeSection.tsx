import Image from "next/image";
import Link from "next/link";
import listaNozzeImage from "../img/ListaNozze.jpg";
import listaNozzeMobileImage from "../img/ListaNozzeMobile.jpg";
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
      className="relative w-full min-h-screen flex items-center justify-center bg-stone-900 pt-2 pb-80 md:py-20 px-6 md:px-12 overflow-hidden"
    >
      {/* ========================================== */}
      {/* STRUTTURA DEGLI SFONDI */}

      {/* Sfondo MOBILE */}
      <div className="absolute inset-0 z-10 opacity-85 pointer-events-none block md:hidden">
        <Image
          src={listaNozzeMobileImage}
          alt="Lista Nozze Background Mobile"
          fill
          className="object-cover object-center select-none"
          priority
        />
      </div>

      {/* Sfondo DESKTOP */}
      <div className="absolute inset-0 z-10 opacity-85 pointer-events-none hidden md:block">
        <Image
          src={listaNozzeImage}
          alt="Lista Nozze Background"
          fill
          className="object-cover object-center select-none"
          priority
        />
      </div>

      <div className="absolute inset-0 z-20 bg-black/20 pointer-events-none" />
      {/* ========================================== */}

      {/* CONTENITORE CENTRALE */}
      <div className="relative z-30 w-full max-w-3xl mx-auto flex flex-col items-center gap-33 md:gap-10 lg:gap-12 text-stone-50 drop-shadow-md">
        {/* TITOLI */}
        <div className="text-center space-y-2">
          <h2
            className="text-[64px] sm:text-8xl md:text-[120px] lg:text-[140px] leading-none font-normal"
            style={{ fontFamily: "var(--font-hello-santuy)" }}
          >
            Lista nozze
          </h2>
          <h3 className="font-['Cochin'] text-2xl sm:text-4xl md:text-5xl font-bold tracking-wide text-stone-200 text-center">
            Sastesitour
          </h3>
        </div>

        {/* CONTENITORE INFO */}
        <div className="w-full flex flex-col items-center gap-6 md:gap-8 font-['DM_Sans'] text-base md:text-2xl font-light">
          {/* BLOCCO 1: INDIRIZZO */}
          <div className="flex flex-row items-center justify-center gap-4 max-w-xl mx-auto text-center">
            <div className="w-4.5 h-6 md:w-5 md:h-5 relative shrink-0">
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

          <hr className="hidden md:block w-24 border-stone-50/20" />

          {/* BLOCCO 2+3: TELEFONO + EMAIL raggruppati su mobile */}
          <div className="flex flex-col items-center gap-1 md:contents">
            {/* TELEFONO */}
            <Link
              href="tel:0105303608"
              className="flex flex-row items-center justify-center gap-4 hover:text-stone-300 transition-colors max-w-xl"
            >
              <div className="w-4.25 h-6 md:w-5 md:h-5 relative shrink-0">
                <Image src={phoneIcon} alt="" fill className="object-contain" />
              </div>
              <p>
                <span className="font-bold">Telefono: </span>
                <span className="text-stone-200">0105303608</span>
              </p>
            </Link>

            <hr className="hidden md:block w-24 border-stone-50/20" />

            {/* EMAIL */}
            <Link
              href="mailto:agenzia@sastesitour.it"
              className="flex flex-row items-center justify-center gap-4 hover:text-stone-300 transition-colors max-w-xl"
            >
              <div className="w-6 h-4 md:w-6 md:h-5 relative shrink-0">
                <Image src={mailIcon} alt="" fill className="object-contain" />
              </div>
              <p>
                <span className="font-bold">Email: </span>
                <span className="text-stone-200 underline decoration-stone-400">
                  agenzia@sastesitour.it
                </span>
              </p>
            </Link>
          </div>

          <hr className="hidden md:block w-24 border-stone-50/20" />

          {/* BLOCCO 4: LINK + CREDENZIALI raggruppati su mobile */}
          <div className="w-full max-w-xl flex flex-col items-center gap-1 md:gap-6">
            {/* Link Esterno */}
            <Link
              href="https://ferrerocontegno.amoore.it"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center justify-center gap-4 hover:underline break-all font-medium"
            >
              <div className="w-6 h-5.75 md:w-5 md:h-5 relative shrink-0">
                <Image src={linkIcon} alt="" fill className="object-contain" />
              </div>
              <span>https://ferrerocontegno.amoore.it</span>
            </Link>

            {/* Credenziali */}
            <div className="w-full flex flex-col items-center gap-1 md:gap-4 text-base md:text-lg">
              {/* Username */}
              <div className="flex flex-row items-center justify-center gap-4">
                <div className="w-6 h-6 relative shrink-0">
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
              <div className="flex flex-row items-center justify-center gap-4">
                <div className="w-6 h-6 relative shrink-0">
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
