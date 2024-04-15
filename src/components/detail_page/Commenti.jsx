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
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
    },
    {
      autore: giulia,
      data: "12/02/2024",
      ora: "14:03",
      text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium",
    },
    {
      autore: deborah,
      data: "12/02/2024",
      ora: "14:35",
      text: "qui dolorem ipsum quia dolor sit amet",
    },
    {
      autore: giulia,
      data: "12/02/2024",
      ora: "15:12",
      text: "sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam",
    },
    {
      autore: deborah,
      data: "12/02/2024",
      ora: "17:09",
      text: `ex ea commodi consequatur?`,
    },
    {
      autore: giulia,
      data: "12/02/2024",
      ora: "14:03",
      text: "vel illum qui dolorem eum fugiat quo voluptas",
    },
    {
      autore: deborah,
      data: "12/02/2024",
      ora: "14:35",
      text: "illo inventore veritatis et quasi architecto",
    },
    {
      autore: giulia,
      data: "12/02/2024",
      ora: "15:12",
      text: "adipisci velit, sed quia non numquam",
    },
    {
      autore: deborah,
      data: "12/02/2024",
      ora: "17:09",
      text: `unde omnis iste natus error sit voluptatem accusantium doloremque laudantium...`,
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
      <div className="flex items-center justify-center p-2 gap-1 md:gap-2 text-tiny w-full h-1/5">
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
