import { useState, useEffect, useRef } from "react";
import { Popover, PopoverTrigger, PopoverContent } from "@nextui-org/react";
import { FiSettings, FiUser } from "react-icons/fi";
import { events } from "../consts/mockDatas";

const Stepper = () => {
  const [currentStep, setCurrentStep] = useState(8);
  const [completed, setCompleted] = useState(false);
  const currentStepRef = useRef(null);

  useEffect(() => {
    if (currentStepRef.current) {
      currentStepRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [currentStep]);

  return (
    <div className="h-full flex flex-col bg-seventh items-center text-slate-600 rounded-md overflow-auto gap-4">
      <div className="">
        {events.map((event, i) => (
          <div
            key={i}
            ref={i === currentStep - 1 ? currentStepRef : null}
            className={`flex flex-col items-center text-slate-600 `}
          >
            <div className="flex gap-1 items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center border border-slate-400 mt-1 ${
                  currentStep === i + 1 && "bg-sky-600 text-white"
                } ${
                  (i + 1 < currentStep || completed) &&
                  "bg-emerald-600 text-white text-[.7rem]"
                } `}
              >
                {i + 1}
              </div>
              <div className="flex flex-col w-36">
                {i % 2 === 0 ? (
                  <div className="text-[.6rem] flex gap-1 items-center">
                    <FiUser />
                    Manuale
                  </div>
                ) : (
                  <div className="text-[.6rem] flex gap-1 items-center">
                    <FiSettings />
                    Automatico
                  </div>
                )}
                <div className="text-[.7rem]">
                  <Popover placement="top" className="max-w-[60%]">
                    <PopoverTrigger>
                      <button>{event.step}</button>
                    </PopoverTrigger>
                    <PopoverContent className="transition-all duration-300">
                      <div className="text-tiny">{event.descrizione}</div>
                    </PopoverContent>
                  </Popover>
                </div>
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
      <div className="w-full text-tiny grid grid-cols-2 xl:flex items-center justify-evenly mb-4 gap-[.1rem]">
        <button
          className={` ${
            completed
              ? "bg-rose-100 text-rose-700 line-through"
              : "bg-rose-700 text-white rounded py-1 border border-rose-700 hover:bg-rose-50 hover:text-rose-700 transition-all duration-300"
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
          className={`bg-emerald-600 text-white rounded py-1 border border-emerald-600 ${
            !completed ? "hover:bg-emerald-50 hover:text-emerald-600" : ""
          } transition-all duration-300`}
          onClick={() => {
            currentStep === events.length
              ? setCompleted(true)
              : setCurrentStep((prev) => prev + 1);
          }}
        >
          {completed ? "Completato!" : "Successivo"}
        </button>
        <button className="bg-sky-700 text-white rounded py-1 border border-sky-700 hover:bg-sky-50 hover:text-sky-700 transition-all duration-300">
          Ev. Parziale
        </button>
      </div>
    </div>
  );
};

export default Stepper;
