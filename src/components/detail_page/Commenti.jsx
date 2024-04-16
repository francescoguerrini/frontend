import { useState, useEffect, useRef } from "react";
import { Avatar } from "@nextui-org/react";
import { note } from "../consts/mockDatas";
import TextArea from "./TextArea";
import deborah from "../../assets/deborah.jpg";
import giulia from "../../assets/giulia_eredia.jpg";

const Commenti = () => {
  const [nuovaNota, setNuovaNota] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    // Scrolla alla fine della lista dei messaggi quando cambia la nuovaNota
    if (inputRef.current) {
      inputRef.current.scrollIntoView({ behavior: "auto", block: "end" });
    }
  }, [inputRef]);

  const [messaggi, setMessaggi] = useState(note);

  const aggiungiNota = () => {
    if (nuovaNota.trim() === "") return;
    const nuovaData = new Date().toLocaleDateString();
    const nuovaOra = new Date().toLocaleTimeString();
    const nuovaNotaObj = {
      autore: deborah, // L'autore potrebbe essere lo user corrente
      data: nuovaData,
      ora: nuovaOra,
      text: nuovaNota,
    };
    setMessaggi([...messaggi, nuovaNotaObj]);
    setNuovaNota("");
  };

  return (
    <div className="h-full flex flex-col overflow-auto bg-seventh justify-between ">
      <div className="report-title">Note</div>
      <div className="flex flex-col gap-1 p-1">
        {messaggi.map((mex, index) => (
          <div
            key={index}
            className="border border-slate-300 rounded p-1 bg-slate-100 flex"
          >
            <div className="flex flex-col justify-between pb-[.2rem] border-r">
              <div>
                {" "}
                {mex.autore === "deborah" ? (
                  <Avatar size="sm" src={deborah} />
                ) : (
                  <Avatar size="sm" src={giulia} />
                )}
              </div>
            </div>
            <div className="text-[.6rem] p-1 flex flex-col justify-between">
              <div>
                {mex.data} <span className="font-bold">{mex.ora}</span>
              </div>
              <div>{mex.text}</div>
            </div>
          </div>
        ))}
      </div>
      <div
        ref={inputRef}
        className="flex items-center justify-center p-2 gap-1 md:gap-2 text-tiny w-full h-1/5"
      >
        <TextArea
          id="1"
          placeholder="Rispondi"
          value={nuovaNota}
          onChange={(e) => setNuovaNota(e.target.value)}
          className="border p-[.2rem]"
        />
        <div className="">
          <button
            onClick={aggiungiNota}
            className="bg-rose-700 text-tiny text-white rounded p-[.2rem]"
          >
            Aggiungi Nota
          </button>
        </div>
      </div>
    </div>
  );
};

export default Commenti;
