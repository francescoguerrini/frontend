import { useEffect, useRef } from "react";
import { messaggi } from "../consts/mockDatas";

const Storico = () => {
  const inputRef = useRef(null);
  useEffect(() => {
    // Scrolla alla fine della lista dei messaggi quando cambia la nuovaNota
    if (inputRef.current) {
      inputRef.current.scrollIntoView({ behavior: "auto", block: "end" });
    }
  }, [inputRef]);

  return (
    <div className="h-full w-full flex flex-col overflow-auto bg-seventh justify-between">
      {/* <div className="report-title">Storico/log</div> */}
      <div className="h-full flex flex-col">
        {messaggi.map((mex, index) => (
          <div
            key={index}
            ref={index === messaggi.length - 1 ? inputRef : null}
            className={`rounded px-[.2rem] flex text-sm border-b ${
              index % 2 === 0 ? "bg-sky-100" : ""
            }`}
          >
            <div className="flex flex-col justify-between">
              <div className="text-[.6rem]">
                <span className="text-slate-700">
                  {mex.data} {mex.ora}
                </span>
                <span className="font-bold"> {mex.autore} : </span>
              </div>
              <div className="text-[.6rem]">{mex.evento}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Storico;
