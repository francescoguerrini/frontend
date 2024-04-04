const DettagliPratica = () => {
  const infos = [
    { text: "Nominativo", content: "Gennaro DeLuca" },
    { text: "Codice Fiscale", content: "GNNDL23C21H143L" },
    { text: "Numero Posizioni", content: "11" },
    { text: "Responsabile", content: "Augusto Paleari" },
    { text: "Note", content: "Niente da mostrare" },
    { text: "Assegnatario", content: "Valentina Guanziroli" },
    { text: "Data Richiesta", content: "21/03/24" },
    { text: "Data Scadenza", content: "04/04/2" },
    { text: "Cose", content: "Alcune" },
  ];
  return (
    <div className="h-full w-full flex flex-col justify-evenly bg-seventh overflow-auto">
      <div className="report-title">Pratica: 11422</div>
      <div className="text-sm bg-seventh rounded-md flex flex-col justify-evenly xl:grid xl:grid-cols-3">
        {infos.map((info, index) => (
          <div
            key={index}
            className={`${
              index % 2 === 0 ? "bg-slate-200" : ""
            } flex flex-col lg:flex-row justify-between items-center p-[2px] text-[.5rem] lg:text-tiny`}
          >
            <div className="font-bold w-1/2"> {info.text}: </div>
            <div className="font-normal text-tiny w-1/2">{info.content}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DettagliPratica;
