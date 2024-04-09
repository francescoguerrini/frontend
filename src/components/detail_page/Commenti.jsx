import { useState } from "react";
import { Avatar } from "@nextui-org/react";
import TextArea from "./TextArea";
import deborah from "../../assets/deborah.jpg";
import giulia from "../../assets/giulia_eredia.jpg";

const Commenti = () => {
  const [nuovaNota, setNuovaNota] = useState("");
  const [messaggi, setMessaggi] = useState([
    {
      autore: deborah,
      data: "12/02/2024",
      ora: "13:58",
      text: "Ho visto che hai fatto pochi straordinari questa settimana",
    },
    {
      autore: giulia,
      data: "12/02/2024",
      ora: "14:03",
      text: "Ma Deb... sono a 6 ore, è solo mercoledì",
    },
    {
      autore: deborah,
      data: "12/02/2024",
      ora: "14:35",
      text: "Se non hai voglia di fare un ca@@o vai alle poste",
    },
    {
      autore: giulia,
      data: "12/02/2024",
      ora: "15:12",
      text: "Non so inviare il CV",
    },
    {
      autore: deborah,
      data: "12/02/2024",
      ora: "17:09",
      text: `Chiedi a Augusto, ha elaborato un metodo che sfrutta l'intelligenza artificiale...`,
    },
  ]);

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
    <div className="h-full overflow-auto bg-seventh flex flex-col justify-between ">
      <div className="report-title">Note</div>
      <div className="flex flex-col lg:max-h-96">
        {messaggi.map((mex, index) => (
          <div
            key={index}
            className="border border-slate-300 rounded p-1 bg-slate-100 flex"
          >
            <div className="flex flex-col justify-between pb-[.2rem] border-r">
              <div>
                <Avatar size="sm" src={mex.autore} />
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
      <div className="my-1 flex flex-col items-end justify-end">
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
