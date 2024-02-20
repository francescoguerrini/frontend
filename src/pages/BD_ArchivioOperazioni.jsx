import OperazioniForm from "../components/archivio_operazioni/OperazioniForm";

const ArchivioOperazioni = () => {
  return (
    <div className="containerl">
      <div className="h-full w-full flex flex-col gap-3">
        <div className="bg-black/5 p-1 rounded-md title shadow-md">
          Archivio Operazioni - Ricerca
        </div>
        <div className="bg-black/5 rounded-md h-full flex justify-center">
          <div className="h-full py-2 flex flex-col gap-3">
            <OperazioniForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArchivioOperazioni;
