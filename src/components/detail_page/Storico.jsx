const Storico = () => {
  const messaggi = [
    {
      autore: "Giulia",
      data: "12/02/2024",
      ora: "11:14",
      evento: "Ha assegnato questa pratica a se stessa.",
    },
    {
      autore: "Augusto",
      data: "12/02/2024",
      ora: "11:24",
      evento: "Step 2 - Chiamata Cerved .",
    },
    {
      autore: "Valentina",
      data: "12/02/2024",
      ora: "12:44",
      evento: "Chiamata Cerved completata. I dati sono ora disponibili",
    },
    {
      autore: "Giulia",
      data: "12/02/2024",
      ora: "15:06",
      evento: "Ha completato lo step di lavorazione manuale",
    },
    {
      autore: "Giulia",
      data: "12/02/2024",
      ora: "17:01",
      evento: `Evasione avvenuta con successo`,
    },
  ];
  return (
    <div className="h-full flex flex-col overflow-auto bg-seventh px-1">
      <div className="hidden report-title xl:flex">Storico/log</div>
      <div className="h-full flex flex-col xl:justify-center">
        {messaggi.map((mex, index) => (
          <div
            key={index}
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
