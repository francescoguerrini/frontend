const DettagliPratica = () => {
  return (
    <div className="h-full p-2 flex flex-col justify-evenly">
      <div className="title">Pratica: 11422</div>
      <div className="text-sm bg-seventh rounded-md flex flex-col justify-evenly">
        <div className="flex justify-between items-center p-[2px]">
          Nominativo:
          <div className="font-normal text-tiny">Gennaro DeLuca</div>
        </div>
        <div className="bg-sky-100 flex justify-between items-center p-[2px]">
          Codice Fiscale:
          <div className="font-normal text-tiny ">GNNDL23C21H143L</div>
        </div>
        <div className="bg-sky-100 flex justify-between items-center p-[2px]">
          Note:
          <div className="font-normal text-tiny">Niente da mostrare</div>
        </div>
        <div className="flex justify-between items-center p-[2px]">
          Data richiesta:
          <div className="font-normal text-tiny">21/03/24</div>
        </div>
        <div className="bg-sky-100 flex justify-between items-center p-[2px]">
          Data scadenza:
          <div className="font-normal text-tiny">04/04/24</div>
        </div>
      </div>
    </div>
  );
};

export default DettagliPratica;
