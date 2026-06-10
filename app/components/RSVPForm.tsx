"use client";

import { useState } from "react";
import Image from "next/image";
import bgFormImage from "@/app/img/Bgform.png";
import arrowIcon from "@/app/img/arrow.svg";

export default function RSVPForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nomeAndCognome: "",
    dietaryPreference: "",
    allergies: "",
    notes: "",
    sleepingPreference: "",
  });

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
  };

  const handleRestart = () => {
    setCurrentStep(0);
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

  // Wrapper comune per le pagine (Risolve h-147.75 e w-448 di Figma)
  const FormContainer = ({ children }: { children: React.ReactNode }) => (
    <div className="w-full max-w-2xl min-h-125 md:min-h-137.5 p-6 md:p-10 bg-black/60 rounded-[30px] md:rounded-[40px] flex flex-col justify-between items-center backdrop-blur-md border border-white/10 text-stone-50 transition-all">
      {/* Icona/Logo Decorativo Superiore */}
      <div className="flex flex-col items-center gap-6 w-full">
        <div className="w-16 h-10 relative opacity-80 flex justify-center gap-1">
          <div className="w-8 h-8 bg-stone-50 rounded-sm rotate-45" />
          <div className="w-8 h-8 bg-stone-50 rounded-sm rotate-45 -ml-4" />
        </div>
        {children}
      </div>
    </div>
  );

  const renderPreviewPage = () => (
    <FormContainer>
      <div className="flex-1 flex flex-col justify-center items-center gap-4 py-8">
        <h2 className="text-3xl md:text-4xl font-light text-center font-['DM_Sans']">
          Conferma la tua presenza
        </h2>
        <p className="text-stone-300 text-sm md:text-base text-center max-w-sm font-['DM_Sans']">
          Aiutaci a organizzare al meglio questa giornata speciale rispondendo a
          pochissime domande.
        </p>
      </div>
      <button
        onClick={handleNext}
        className="w-full sm:w-auto px-8 py-3 bg-stone-50 rounded-full text-stone-700 text-xl font-medium font-['DM_Sans'] hover:bg-stone-100 transition-colors cursor-pointer shadow-lg"
      >
        Compila modulo
      </button>
    </FormContainer>
  );

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="w-full flex flex-col items-center gap-6 font-['DM_Sans'] py-4">
            <div className="text-center space-y-1">
              <label className="block text-2xl md:text-3xl font-medium">
                Nome e cognome
              </label>
              <span className="block text-stone-300 text-sm font-light">
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
              className="w-full max-w-md h-12 px-5 bg-white/10 rounded-full border border-stone-300/50 text-stone-50 text-lg md:text-xl font-light backdrop-blur-xl focus:outline-none focus:ring-2 focus:ring-stone-50 transition-all text-center"
            />
          </div>
        );
      case 2:
      case 3: {
        const isStep2 = currentStep === 2;
        const currentSelection = isStep2
          ? formData.dietaryPreference
          : formData.allergies;
        const setSelection = (val: string) =>
          setFormData(
            isStep2
              ? { ...formData, dietaryPreference: val }
              : { ...formData, allergies: val },
          );

        return (
          <div className="w-full flex flex-col items-center gap-6 font-['DM_Sans'] py-4">
            <div className="text-center space-y-1">
              <h3 className="text-2xl md:text-3xl font-medium">
                {isStep2 ? "Abitudine alimentare" : "Allergie o Intolleranze"}
              </h3>
              <span className="block text-stone-300 text-sm font-light">
                *Seleziona una delle opzioni
              </span>
            </div>
            {/* Griglia responsive per i bottoni: 1 colonna su mobile, 2 su desktop */}
            <div className="w-full max-w-md grid grid-cols-1 sm:grid-cols-2 gap-3">
              {["Onnivoro", "Vegetariano", "Vegano", "Nessuna / Altro"].map(
                (option) => {
                  const isSelected = currentSelection === option;
                  return (
                    <button
                      key={option}
                      onClick={() => setSelection(option)}
                      className={`h-12 px-4 rounded-full border flex items-center justify-center gap-3 transition-all ${
                        isSelected
                          ? "bg-stone-50 border-stone-50 text-stone-900 font-medium"
                          : "bg-white/5 border-stone-50/30 text-stone-50 hover:bg-white/10"
                      }`}
                    >
                      <div
                        className={`w-3 h-3 rounded-full border ${isSelected ? "bg-stone-900 border-stone-900" : "border-stone-50/50"}`}
                      />
                      <span className="text-base md:text-lg font-light">
                        {option}
                      </span>
                    </button>
                  );
                },
              )}
            </div>
          </div>
        );
      }
      case 4:
        return (
          <div className="w-full flex flex-col items-center gap-6 font-['DM_Sans'] py-4">
            <div className="text-center space-y-1">
              <h3 className="text-2xl md:text-3xl font-medium">
                Note particolari
              </h3>
              <span className="block text-stone-300 text-sm font-light">
                *Solo se necessario, non sentirti obbligato!
              </span>
            </div>
            <textarea
              placeholder="Aggiungi note particolari (es. intolleranze specifiche, allergie gravi...)"
              value={formData.notes}
              onChange={(e) =>
                setFormData({ ...formData, notes: e.target.value })
              }
              className="w-full max-w-md h-32 md:h-40 p-4 bg-white/5 border border-stone-50/30 rounded-2xl text-stone-50 text-base md:text-lg font-light backdrop-blur-xl focus:outline-none focus:ring-2 focus:ring-stone-50 resize-none transition-all"
            />
          </div>
        );
      case 5:
        return (
          <div className="w-full flex flex-col items-center gap-6 font-['DM_Sans'] py-4">
            <div className="text-center space-y-2 max-w-md">
              <h3 className="text-2xl md:text-3xl font-medium">
                Ti vuoi fermare a dormire?
              </h3>
              <p className="text-stone-300 text-xs md:text-sm font-light leading-relaxed">
                *Ti consigliamo di sì, la festa non finisce! Posti letto in casa
                da campo, spazio per tende/camper.
              </p>
            </div>
            <div className="w-full max-w-md flex flex-col sm:flex-row gap-3">
              {["Si mi fermo", "Torno a casa"].map((option) => {
                const isSelected = formData.sleepingPreference === option;
                return (
                  <button
                    key={option}
                    onClick={() =>
                      setFormData({ ...formData, sleepingPreference: option })
                    }
                    className={`flex-1 h-12 px-4 rounded-full border flex items-center justify-center gap-3 transition-all ${
                      isSelected
                        ? "bg-stone-50 border-stone-50 text-stone-900 font-medium"
                        : "bg-white/5 border-stone-50/30 text-stone-50 hover:bg-white/10"
                    }`}
                  >
                    <div
                      className={`w-3 h-3 rounded-full border ${isSelected ? "bg-stone-900 border-stone-900" : "border-stone-50/50"}`}
                    />
                    <span className="text-base md:text-lg font-light">
                      {option}
                    </span>
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

  const renderFormPage = () => (
    <FormContainer>
      {/* Contenuto dinamico dello step */}
      <div className="w-full flex-1 flex flex-col justify-center">
        {renderStepContent()}
      </div>

      {/* Barra di Navigazione Inferiore */}
      <div className="w-full flex items-center justify-between pt-6 border-t border-white/10 mt-4">
        {/* Bottone Indietro */}
        <button
          onClick={handlePrev}
          className="w-12 h-12 rounded-full border border-stone-50/30 flex justify-center items-center hover:bg-white/10 transition-colors cursor-pointer"
          aria-label="Precedente"
        >
          <Image src={arrowIcon} alt="Indietro" width={20} height={20} />
        </button>

        {/* Indicatori di Progresso (Pallini) */}
        <div className="flex items-center gap-2">
          {Array.from({ length: totalSteps }).map((_, index) => (
            <div
              key={index}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                index < currentStep ? "bg-stone-50 scale-110" : "bg-stone-50/20"
              }`}
            />
          ))}
        </div>

        {/* Bottone Avanti / Invia */}
        {currentStep === totalSteps ? (
          <button
            onClick={handleSubmit}
            className="px-6 h-12 bg-stone-50 rounded-full text-stone-700 font-medium text-base hover:bg-stone-100 transition-colors cursor-pointer shadow-md"
          >
            Invia modulo
          </button>
        ) : (
          <button
            onClick={handleNext}
            className="w-12 h-12 rounded-full border border-stone-50/30 flex justify-center items-center hover:bg-white/10 transition-colors transform rotate-180 cursor-pointer"
            aria-label="Successivo"
          >
            <Image src={arrowIcon} alt="Avanti" width={20} height={20} />
          </button>
        )}
      </div>
    </FormContainer>
  );

  const renderSuccessPage = () => (
    <FormContainer>
      <div className="flex-1 flex flex-col justify-center items-center gap-4 py-8">
        <div className="w-16 h-16 bg-stone-50/10 rounded-full border border-stone-50 flex items-center justify-center text-3xl mb-2">
          🎉
        </div>
        <h2 className="text-2xl md:text-3xl font-light text-center font-['DM_Sans']">
          Grazie mille!
        </h2>
        <p className="text-stone-300 text-sm md:text-base text-center max-w-sm font-['DM_Sans']">
          Il tuo modulo è stato inviato correttamente. Ci vediamo alla festa!
        </p>
      </div>
      <button
        onClick={handleRestart}
        className="w-full sm:w-auto px-6 py-2.5 bg-transparent border border-stone-50 rounded-full text-stone-50 text-base font-normal font-['DM_Sans'] hover:bg-white/10 transition-colors cursor-pointer"
      >
        Invia un altro modulo
      </button>
    </FormContainer>
  );

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center p-4 md:p-8 overflow-hidden bg-stone-900">
      <Image
        src={bgFormImage}
        alt="Form Background"
        fill
        className="object-cover object-center -z-10 select-none opacity-40"
        priority
      />
      {isSubmitted
        ? renderSuccessPage()
        : currentStep === 0
          ? renderPreviewPage()
          : renderFormPage()}
    </section>
  );
}
