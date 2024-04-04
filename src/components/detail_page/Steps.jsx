import { useState } from "react";
import { FiSettings } from "react-icons/fi";

const Stepper = () => {
  const events = [
    "Registrazione richiesta",
    "Assegnato a te",
    "Chiamata Cerved",
    "Redazione 1",
    "Verifica Manuale",
    "Evasione",
  ];
  const [currentStep, setCurrentStep] = useState(6);
  const [completed, setCompleted] = useState(false);

  return (
    <div className="h-full flex flex-col bg-seventh xl:flex-col items-center text-slate-600 rounded-md p-1 pt-3">
      <div className="h-[90%] overflow-auto">
        {events.map((event, i) => (
          <div key={i} className={`flex flex-col items-center text-slate-500 `}>
            <div className="flex gap-1 items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center border mt-1 ${
                  currentStep === i + 1 && "bg-sky-600 text-white"
                } ${
                  (i + 1 < currentStep || completed) &&
                  "bg-green-600 text-white text-[.7rem]"
                } `}
              >
                {i + 1}
              </div>
              <div className="flex flex-col w-36">
                <div className="text-[.6rem] flex gap-1 items-center">
                  <FiSettings />
                  Automatico
                </div>
                <div className="text-[.7rem]">{event}</div>
              </div>
            </div>
            {i < events.length - 1 && (
              <div className="relative w-full h-8 lg:h-10 mb-1">
                <div className="h-full w-[1px] bg-slate-500 mt-1 absolute left-[1.1rem] md:left-[1.2rem] lg:left-[19px]"></div>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="w-full h-[10%] text-tiny flex items-center justify-evenly">
        <button
          className={` ${
            completed
              ? "bg-white text-rose-700 line-through"
              : "bg-rose-700 text-white rounded py-1 px-2 border border-rose-700 hover:bg-white hover:text-rose-700 transition-all duration-300"
          }`}
          onClick={() => {
            !completed && setCurrentStep((prev) => prev - 1);
          }}
          disabled={completed}
        >
          Precedente
        </button>
        <button
          disabled={completed}
          className={`bg-emerald-700 text-white rounded py-1 px-2 border border-emerald-700 ${
            !completed ? "hover:bg-white hover:text-emerald-700" : ""
          } transition-all duration-300`}
          onClick={() => {
            currentStep === events.length
              ? setCompleted(true)
              : setCurrentStep((prev) => prev + 1);
          }}
        >
          {completed ? "Completato!" : "Successivo"}
        </button>
      </div>
    </div>
  );
};

export default Stepper;
