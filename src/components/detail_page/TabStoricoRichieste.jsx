import { useState } from "react";
import Storico from "./Storico";
import RichiesteCollegate from "./RichiesteCollegate";

export default function TabStoricoRichieste() {
  const [leftActive, setLeftActive] = useState(false);
  const toggleActive = () => setLeftActive(!leftActive);

  return (
    <div className="h-full w-full flex flex-col overflow-auto">
      <button
        onClick={() => toggleActive()}
        className="w-full bg-seventh flex gap-1 font-semibold pt-3 px-1 mb-2 text-tiny"
      >
        <span
          className={`transition-all duration-300 p-[.3rem] ${
            leftActive ? "text-slate-500" : " bg-slate-300 rounded-md"
          }`}
        >
          Storico
        </span>{" "}
        <span
          className={`transition-all duration-300 p-[.3rem] ${
            leftActive ? "bg-slate-300 rounded-md" : "text-slate-500"
          }`}
        >
          Richieste Collegate
        </span>
      </button>
      <div className="px-1 flex">
        {leftActive ? (
          <div className="">
            <RichiesteCollegate />
          </div>
        ) : (
          <div className="">
            <Storico />
          </div>
        )}
      </div>
    </div>
  );
}
