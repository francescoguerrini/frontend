import BD_Button from "../components/BD_Button";
import MyForm from "../components/product_form/MyForm";
import PageTitle from "../components/PageTitle";

const Form = () => {
  return (
    <div className="containerl h-full flex flex-col gap-2">
      <PageTitle title="Richiesta Servizio" />
      <div className="bg-seventh rounded-md h-1/3 w-full flex gap-4 p-3">
        <div className="flex-grow flex flex-col gap-2 border-r">
          <div className="text-[.6rem]">
            Informazioni per il recupero del credito
          </div>
          <div className="text-xl">DETECT PLUS</div>
          <div className="text-[.6rem]">
            IL REPORT AGGREGA INFORMAZIONI SU PERSONE FISICHE PROVENIENTI DA
            DIVERSE FONTI PUBBLICHE E L&apost; ELENCO DELLE RECENSIONI STAMPA AI
            FINI DELL&apost; ANTIRICICLAGGIO REPERITE SUL SOGGETTO
          </div>
          <div className="w-full flex justify-end pr-1">
            <BD_Button text="Richiedi Supporto" is_full={false} />
          </div>
        </div>
        <div className="w-1/2 flex flex-col lg:pt-4 ">
          <div className="flex-grow flex flex-col lg:flex-row gap-4 text-[.6rem] h-1/2 font-bold">
            <div className="flex flex-col">
              <div>TEMPO EVASIONE</div>
              <div className="text-rose-700">2 GG</div>
            </div>
            <div>
              <div className="flex flex-col">REPORT PDF DIMOSTRATIVO</div>
              <div className="text-rose-700">SCARICA(PDF)</div>
            </div>
            <div>
              <div className="flex flex-col">SCHEDA TECNICA</div>
              <div className="text-rose-700">SCARICA(PDF)</div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-seventh rounded-md flex-grow p-6 h-full overflow-y-scroll">
        <MyForm width="1/2" />
      </div>
    </div>
  );
};

export default Form;
