"use client";

import { useState } from "react";
import Image from "next/image";
import Bgform from "@/app/img/BgForm.jpeg";
import BgformMobile from "@/app/img/BgformMobile.jpg";
import logo from "../img/logo.svg";
import arrowIcon from "@/app/img/arrow.svg";

const GOOGLE_SHEET_WEBAPP_URL =
  "https://script.google.com/macros/s/AKfycby8SWjhUccr2ZdJWj2vdDP71PqCAIIzQ1tK2BkGzpTvCjTR33z6mp4UIRNH8UYuKuCQmQ/exec";

// 1. INTERFACCE PER I TIPI
interface FormDataProps {
  nomeAndCognome: string;
  dietaryPreference: string;
  allergies: string;
  notes: string;
  sleepingPreference: string;
}

interface StepContentProps {
  currentStep: number;
  formData: FormDataProps;
  setFormData: React.Dispatch<React.SetStateAction<FormDataProps>>;
}

interface RSVPFormProps {
  /** Chiude il bottom-sheet mobile. Non ha effetto su desktop (il pulsante X è nascosto md:hidden). */
  onClose?: () => void;
}

// 2. COMPONENTE FORM CONTAINER ESTRATTO ALL'ESTERNO (Risolve il problema del reset del DOM)
const FormContainer = ({
  children,
  onClose,
}: {
  children: React.ReactNode;
  onClose?: () => void;
}) => (
  <div className="relative w-full h-full p-5 pt-6 pb-6 md:p-10 rounded-t-[40px] rounded-b-none md:rounded-[40px] flex flex-col justify-between items-center text-stone-50 overflow-hidden border-0 md:border md:border-white/10 shadow-2xl transition-all duration-300">
    <Image
      src={Bgform}
      alt="Form Background"
      fill
      className="object-cover object-center -z-20 select-none hidden md:block"
      priority
    />
    <Image
      src={BgformMobile}
      alt="Form Background"
      fill
      className="object-cover object-center -z-20 select-none md:hidden"
      priority
    />

    {/* Overlay scuro — solo mobile, fedele al Figma (rgba(0,0,0,0.4)) */}
    <div className="absolute inset-0 bg-black/40 -z-10 md:hidden pointer-events-none" />

    {/* Bottone chiusura sheet — solo mobile */}
    {onClose && (
      <button
        type="button"
        onClick={onClose}
        aria-label="Chiudi"
        className="md:hidden absolute top-6 right-5 w-12 h-12 rounded-full border border-[#FFFEF4] flex items-center justify-center z-20"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 1L15 15M15 1L1 15"
            stroke="#FFFEF4"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </button>
    )}

    <div className="flex flex-col items-center gap-4 md:gap-6 w-full flex-1 relative z-10 overflow-y-auto no-scrollbar">
      <div className="w-21.25 h-13 md:w-16 md:h-16 relative opacity-90 flex justify-center items-center shrink-0">
        <Image
          src={logo}
          alt="Logo"
          width={64}
          height={64}
          className="w-full h-auto object-contain"
        />
      </div>
      <div className="w-full flex-1 flex flex-col justify-center items-center min-h-85 md:min-h-90">
        {children}
      </div>
    </div>
  </div>
);

// 3. COMPONENTE STEP CONTENT ESTRATTO ALL'ESTERNO
const StepContent = ({
  currentStep,
  formData,
  setFormData,
}: StepContentProps) => {
  switch (currentStep) {
    case 1:
      return (
        <div className="w-full flex flex-col items-center justify-center gap-4 font-['DM_Sans'] py-2">
          <div className="text-center space-y-1">
            <label className="block text-2xl font-bold md:text-2xl md:font-medium">
              Nome e cognome
            </label>
            <span className="block text-[#FFFEF4] text-base font-light md:text-stone-300 md:text-xs md:font-light">
              *Non accettiamo soprannomi :)
            </span>
          </div>
          <input
            type="text"
            placeholder="Mario Rossi"
            value={formData.nomeAndCognome}
            onChange={(e) =>
              setFormData({ ...formData, nomeAndCognome: e.target.value })
            }
            className="w-full max-w-md h-11 md:h-12 pl-5 pr-16 md:px-5 bg-white/5 md:bg-white/10 rounded-full border border-[#FFFEF4] md:border-stone-300/50 text-stone-50 text-base md:text-lg font-light backdrop-blur-[25px] md:backdrop-blur-xl focus:outline-none focus:ring-2 focus:ring-stone-50 transition-all text-left md:text-center"
          />
        </div>
      );
    case 2:
      return (
        <div className="w-full flex flex-col items-center justify-center gap-5 font-['DM_Sans'] py-2">
          <div className="text-center space-y-1">
            <h4 className="text-2xl font-bold md:text-2xl md:font-medium">
              Abitudine alimentare
            </h4>
            <span className="block text-[#FFFEF4] text-base font-light md:text-stone-300 md:text-xs md:font-light">
              *Seleziona una delle opzioni
            </span>
          </div>
          <div className="w-full max-w-3xl flex flex-col md:flex-row md:flex-wrap justify-center items-center gap-2 md:gap-3">
            {["Onnivoro", "Vegetariano", "Vegano", "Nessuna / Altro"].map(
              (option) => {
                const isSelected = formData.dietaryPreference === option;
                return (
                  <button
                    key={option}
                    type="button"
                    onClick={() =>
                      setFormData({ ...formData, dietaryPreference: option })
                    }
                    className={`w-full md:w-auto md:flex-1 md:sm:flex-initial h-11 px-5 rounded-full border flex items-center justify-center gap-2.5 transition-all whitespace-nowrap md:min-w-35 ${
                      isSelected
                        ? "bg-stone-50 border-stone-50 text-stone-900 font-medium"
                        : "bg-white/5 border-stone-50/30 text-stone-50 hover:bg-white/10"
                    }`}
                  >
                    <div
                      className={`w-2.5 h-2.5 rounded-full border shrink-0 ${isSelected ? "bg-stone-900 border-stone-900" : "border-stone-50/50"}`}
                    />
                    <span className="text-sm md:text-base font-light">
                      {option}
                    </span>
                  </button>
                );
              },
            )}
          </div>
        </div>
      );
    case 3: {
      const allergyOptions = [
        "Nessuna",
        "Glutine",
        "Crostacei",
        "Lattosio",
        "Frutta a guscio",
      ];
      return (
        <div className="w-full flex flex-col items-center justify-center gap-5 font-['DM_Sans'] py-2">
          <div className="text-center space-y-1">
            <h4 className="text-2xl font-bold md:text-2xl md:font-medium">
              Allergie o Intolleranze
            </h4>
            <span className="block text-[#FFFEF4] text-base font-light md:text-stone-300 md:text-xs md:font-light">
              *Seleziona la tua intolleranza principale
            </span>
          </div>
          <div className="w-full max-w-3xl md:max-w-5xl flex flex-col md:flex-row md:flex-nowrap justify-center items-center gap-2 md:gap-2">
            {allergyOptions.map((option) => {
              const isSelected = formData.allergies === option;
              return (
                <button
                  key={option}
                  type="button"
                  onClick={() =>
                    setFormData({ ...formData, allergies: option })
                  }
                  className={`w-full md:w-auto md:flex-1 md:min-w-0 h-11 px-5 md:px-4 rounded-full border flex items-center justify-center gap-2.5 transition-all whitespace-nowrap ${
                    isSelected
                      ? "bg-stone-50 border-stone-50 text-stone-900 font-medium"
                      : "bg-white/5 border-stone-50/30 text-stone-50 hover:bg-white/10"
                  }`}
                >
                  <div
                    className={`w-2.5 h-2.5 rounded-full border shrink-0 ${isSelected ? "bg-stone-900 border-stone-900" : "border-stone-50/50"}`}
                  />
                  <span className="text-sm md:text-base font-light">
                    {option}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      );
    }
    case 4:
      return (
        <div className="w-full flex flex-col items-center justify-center gap-4 font-['DM_Sans'] py-2 ">
          <div className="text-center space-y-1">
            <h4 className="text-2xl font-bold md:text-2xl md:font-medium">
              Note particolari
            </h4>
            <span className="block text-[#FFFEF4] text-base font-light md:text-stone-300 md:text-xs md:font-light">
              *Solo se necessario, non sentirti obbligato!
            </span>
          </div>
          <textarea
            placeholder="Aggiungi note particolari..."
            value={formData.notes}
            onChange={(e) =>
              setFormData({ ...formData, notes: e.target.value })
            }
            className="w-full max-w-md flex-1 md:h-28 pt-4 pb-15 px-4 md:p-4 bg-white/5 border border-[#FFFEF4] md:border-stone-50/30 rounded-[20px] md:rounded-2xl text-stone-50 text-base font-light backdrop-blur-[25px] md:backdrop-blur-xl focus:outline-none focus:ring-2 focus:ring-stone-50 resize-none transition-all"
          />
        </div>
      );
    case 5:
      return (
        <div className="w-full flex flex-col items-center justify-center gap-4 font-['DM_Sans'] py-2">
          <div className="text-center space-y-1 max-w-md">
            <h4 className="text-2xl font-bold md:text-2xl md:font-medium">
              Ti vuoi fermare a dormire?
            </h4>
            <p className="text-[#FFFEF4] text-base font-light md:text-stone-300 md:text-xs leading-relaxed">
              *Posti letto in casa da campo, spazio per tende/camper.
            </p>
          </div>
          <div className="w-full max-w-md flex flex-col md:flex-row justify-center gap-2 md:gap-3">
            {["Si mi fermo", "Torno a casa"].map((option) => {
              const isSelected = formData.sleepingPreference === option;
              return (
                <button
                  key={option}
                  type="button"
                  onClick={() =>
                    setFormData({ ...formData, sleepingPreference: option })
                  }
                  className={`w-full md:flex-1 h-11 px-4 rounded-full border flex items-center justify-center gap-3 transition-all whitespace-nowrap ${
                    isSelected
                      ? "bg-stone-50 border-stone-50 text-stone-900 font-medium"
                      : "bg-white/5 border-[#FFFEF4] md:border-stone-50/30 text-stone-50 hover:bg-white/10"
                  }`}
                >
                  <div
                    className={`w-2.5 h-2.5 rounded-full border shrink-0 ${isSelected ? "bg-stone-900 border-stone-900" : "border-stone-50/50"}`}
                  />
                  <span className="text-base font-light">{option}</span>
                </button>
              );
            })}
          </div>
        </div>
      );
    default:
      return null;
  }
};

// 4. COMPONENTE PRINCIPALE
export default function RSVPForm({ onClose }: RSVPFormProps) {
  // Su mobile il form viene aperto tramite il bottone "Compila modulo" già presente
  // in RSVPSection, quindi qui saltiamo direttamente allo Step 1 (niente doppia preview).
  // Su desktop (onClose assente, form inline) il comportamento resta invariato: parte dalla preview.
  const [currentStep, setCurrentStep] = useState(onClose ? 1 : 0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [formData, setFormData] = useState<FormDataProps>({
    nomeAndCognome: "",
    dietaryPreference: "",
    allergies: "",
    notes: "",
    sleepingPreference: "",
  });

  const handleSubmit = async () => {
    if (!formData.nomeAndCognome.trim()) {
      alert("Per favore, inserisci Nome e Cognome.");
      setCurrentStep(1);
      return;
    }

    setIsSending(true);
    try {
      await fetch(GOOGLE_SHEET_WEBAPP_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      setIsSubmitted(true);
    } catch (error) {
      console.error("Errore durante l'invio a Google Sheets:", error);
      alert("Si è verificato un errore. Riprova più tardi!");
    } finally {
      setIsSending(false);
    }
  };

  const handleRestart = () => {
    setCurrentStep(onClose ? 1 : 0);
    setIsSubmitted(false);
    setFormData({
      nomeAndCognome: "",
      dietaryPreference: "",
      allergies: "",
      notes: "",
      sleepingPreference: "",
    });
  };

  const totalSteps = 5;

  const handleNext = () => {
    if (currentStep === 0) {
      setCurrentStep(1);
    } else if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderPreviewPage = () => (
    <FormContainer onClose={onClose}>
      <div className="flex-1 flex flex-col justify-center items-center gap-4 py-6 relative z-10">
        <h3 className="text-2xl md:text-3xl font-light text-center font-['DM_Sans']">
          Conferma la tua presenza
        </h3>
        <p className="text-stone-300 text-sm md:text-base text-center max-w-sm font-['DM_Sans']">
          Aiutaci a organizzare al meglio questa giornata speciale rispondendo a
          pochissime domande.
        </p>
      </div>
      <button
        onClick={handleNext}
        className="w-full sm:w-auto px-8 py-3 bg-stone-50 rounded-full text-stone-700 text-lg font-medium font-['DM_Sans'] hover:bg-stone-100 transition-colors cursor-pointer shadow-lg mt-auto relative z-10"
      >
        Compila modulo
      </button>
    </FormContainer>
  );

  const renderFormPage = () => (
    <FormContainer onClose={onClose}>
      <div className="w-full flex-1 flex flex-col justify-center my-2 relative z-10">
        <StepContent
          currentStep={currentStep}
          formData={formData}
          setFormData={setFormData}
        />
      </div>

      <div className="w-full grid grid-cols-3 items-center pt-4 mt-auto relative z-10 shrink-0">
        <div className="flex justify-start">
          <button
            onClick={handlePrev}
            disabled={isSending}
            className={`w-12 h-12 md:w-10 md:h-10 rounded-full border border-stone-50/30 flex justify-center items-center hover:bg-white/10 disabled:opacity-50 transition-colors transform rotate-180 cursor-pointer ${
              currentStep === 1
                ? "invisible pointer-events-none md:visible md:pointer-events-auto"
                : ""
            }`}
            aria-label="Precedente"
          >
            <Image src={arrowIcon} alt="Indietro" width={18} height={18} />
          </button>
        </div>

        <div className="flex justify-center items-center gap-1.5">
          {Array.from({ length: totalSteps }).map((_, index) => (
            <div
              key={index}
              className={`w-2.5 h-2.5 md:w-2 md:h-2 rounded-full transition-all duration-300 ${
                index === currentStep - 1
                  ? "bg-stone-50 scale-110"
                  : "bg-stone-50/10 md:bg-stone-50/20"
              }`}
            />
          ))}
        </div>

        <div className="flex justify-end">
          {currentStep === totalSteps ? (
            <button
              onClick={handleSubmit}
              disabled={isSending}
              className="px-5 h-12 md:h-10 bg-stone-50 rounded-full text-stone-700 font-medium text-base md:text-sm hover:bg-stone-100 disabled:opacity-50 transition-colors cursor-pointer shadow-md flex items-center justify-center gap-2"
            >
              {isSending ? "Invio..." : "Invia"}
            </button>
          ) : (
            <button
              onClick={handleNext}
              className="w-12 h-12 md:w-10 md:h-10 rounded-full border border-stone-50/30 flex justify-center items-center hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Successivo"
            >
              <Image src={arrowIcon} alt="Avanti" width={18} height={18} />
            </button>
          )}
        </div>
      </div>
    </FormContainer>
  );

  const renderSuccessPage = () => (
    <FormContainer onClose={onClose}>
      <div className="flex-1 flex flex-col justify-center items-center gap-3 py-6 relative z-10">
        <h3 className="text-2xl font-bold md:text-2xl md:font-light text-center font-['DM_Sans'] max-w-md md:max-w-lg mx-auto">
          Grazie mille, il tuo modulo è stato inviato correttamente :)
        </h3>
      </div>
      <button
        onClick={handleRestart}
        className="w-full sm:w-auto flex items-center justify-center h-12 md:h-auto px-5 md:py-2 bg-[#FFFEF4] border border-[#FFFEF4] rounded-full text-[#45492D] text-base md:text-sm font-medium md:font-normal font-['DM_Sans'] hover:bg-stone-100 transition-colors cursor-pointer mt-auto relative z-10"
      >
        Invia nuovo modulo
      </button>
    </FormContainer>
  );

  return (
    <div className="w-full h-full flex justify-center items-center dynamic-form-block">
      {isSubmitted
        ? renderSuccessPage()
        : currentStep === 0
          ? renderPreviewPage()
          : renderFormPage()}
    </div>
  );
}
