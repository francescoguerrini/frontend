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
    <div className="h-full flex flex-col overflow-auto bg-seventh">
      <div className="report-title">Storico/log</div>
      <div className="flex flex-col gap-1 md:max-h-40 lg:max-h-80">
        {messaggi.map((mex, index) => (
          <div key={index} className="rounded p-1  flex text-sm border-b">
            <div className="evento-[.6rem] p-1 flex flex-col justify-between">
              <div className="text-[.6rem]">
                {mex.data} <span>{mex.ora}</span>
              </div>
              <div className="text-[.6rem]">
                <span className="font-bold">{mex.autore} : </span> {mex.evento}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Storico;
