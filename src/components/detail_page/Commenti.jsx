import { Avatar } from "@nextui-org/react";
import TextArea from "./TextArea";
import deborah from "../../assets/deborah.jpg";
import giulia from "../../assets/giulia_eredia.jpg";

const Commenti = () => {
  const messaggi = [
    {
      autore: deborah,
      data: "12/02/2024",
      ora: "13:58",
      text: "Il cliente ha richiesto evasione urgente.",
    },
    {
      autore: giulia,
      data: "12/02/2024",
      ora: "14:03",
      text: "Aggiorno lo stato.",
    },
    {
      autore: deborah,
      data: "12/02/2024",
      ora: "14:35",
      text: "A che punto siamo?",
    },
    {
      autore: giulia,
      data: "12/02/2024",
      ora: "15:12",
      text: "In lavorazione",
    },
    {
      autore: deborah,
      data: "12/02/2024",
      ora: "17:09",
      text: `Ho visto il risultato! brava!`,
    },
  ];
  return (
    <div className="h-full overflow-auto">
      <div className="font-semibold pb-3">Note</div>
      <div className="flex flex-col md:max-h-40 lg:max-h-96">
        <div>
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
        <div className="h-full my-1 flex flex-col items-end justify-end">
          <TextArea
            id="1"
            placeholder="Rispondi"
            value=""
            onChange=""
            className="border p-[.2rem]"
          />
          <div className="">
            <button className="bg-rose-700 text-[.5rem] text-white rounded p-[.2rem]">
              Aggiungi Nota
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Commenti;
