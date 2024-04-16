import TooltipAvatar from "../TooltipAvatar";
import giulia from "../../assets/giulia_eredia.jpg"; // Immagine di default
import deborah from "../../assets/deborah.jpg"; // Immagine di default
import axactor from "../../assets/axactor.jpeg"; // Immagine di default

const DettagliPratica = () => {
  const cliente = "axactor";
  const infos = [
    { text: "Nominativo", content: "Gennaro DeLuca" },
    { text: "Codice Fiscale", content: "GNNDL23C21H143L" },
    { text: "Numero Posizioni", content: "11" },
    { text: "Responsabile", content: "Augusto Paleari" },
    { text: "Assegnatario", content: "Valentina Guanziroli" },
    { text: "Note", content: "Niente da mostrare" },
    { text: "Cose", content: "Alcune" },
    { text: "Data Richiesta", content: "21/03/24" },
    { text: "Data Scadenza", content: "04/04/2" },
  ];
  return (
    <div className="h-full w-full flex flex-col justify-evenly bg-seventh overflow-auto">
      <div className="flex justify-between">
        <div className="report-title">Pratica: 11422</div>
        <div className="flex items-center justify-center pr-8">
          <div>
            <TooltipAvatar
              src={deborah}
              size="sm"
              color="success"
              tooltipContent={`Responsabile: user`}
              tooltipPlacement="bottom"
            />
          </div>
          <div>
            <TooltipAvatar
              src={giulia}
              size="sm"
              color="primary"
              tooltipContent={`Incaricato: user`}
              tooltipPlacement="bottom"
            />
          </div>
          <div>
            <TooltipAvatar
              src={axactor}
              size="sm"
              color="danger"
              tooltipContent={`Cliente: ${cliente}`}
              tooltipPlacement="bottom"
            />
          </div>
        </div>
      </div>

      <div className="text-sm bg-seventh rounded-md flex flex-col justify-evenly md:grid md:grid-cols-3 md:grid-flow-row">
        {infos.map((info, index) => (
          <div
            key={index}
            className={`${
              index % 2 === 0 ? "bg-sky-100" : ""
            } flex justify-between items-center p-[2px] text-[.5rem] md:text-tiny`}
          >
            <div className="font-bold w-1/2"> {info.text}: </div>
            <div className="font-normal w-1/2">{info.content}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DettagliPratica;
