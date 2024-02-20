import { useState } from "react";
import SelectWithSearch from "./SelectWithSearch";
import Upload from "./Upload";
import NoteProdotto from "./NoteProdotto";
import {
  FaCloudDownloadAlt,
  FaEdit,
  FaTelegram,
  FaCheckCircle,
} from "react-icons/fa";

const SSpeciali = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [note, setNote] = useState("");

  return (
    <div className="h-full w-full flex flex-col items-center text-[.5rem] lg:text-tiny">
      <div className="bg-black/5 p-2 rounded-md title shadow-md w-full text-slate-900">
        Servizi Speciali
      </div>
      <div className="flex flex-col h-full w-full items-center justify-center">
        <div className="w-full flex justify-start lg:w-full my-3">
          <SelectWithSearch
            onProductSelect={setSelectedProduct}
            onSetNote={setNote}
          />
        </div>
        <div className="flex-grow flex bg-seventh rounded-md lg:w-full">
          <div className="w-1/2 flex flex-col justify-evenly px-8 border-r border-black">
            <div className="flex gap-4 items-center">
              <div className="font-bold text-5xl text-slate-900">
                <FaCloudDownloadAlt />
              </div>
              <div>
                <div>Scarica il Tracciato</div>
                <div className="text-[.6rem]">
                  Effettua il download del file da utilizzare per inserire i
                  dati di input
                </div>
                <button className="rounded-md border-2 border-rose-700 text-rose-700 py-1 px-5 text-[.6rem] my-2 hover:bg-rose-700 hover:text-white">
                  SCARICA MODELLO
                </button>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <div className="font-bold text-5xl text-slate-900">
                <FaEdit />
              </div>
              <div>
                <div>Compila il File</div>
                <div className="text-[.6rem]">
                  Compila il tracciato con i dati di input in tuo possesso
                </div>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <div className="font-bold text-5xl text-slate-900">
                <FaTelegram />
              </div>
              <div>
                <div>Allega ed Invia</div>
                <div className="text-[.6rem]">
                  Puoi trascinare il file nel riquadro a lato oppure allegarlo
                  utilizzando il tasto SFOGLIA
                </div>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <div className="font-bold text-5xl text-slate-900">
                <FaCheckCircle />
              </div>
              <div>
                <div>Verifica il Caricamento</div>
                <div className="text-[.6rem]">
                  Controlla l&apos;esito di validazione del tuo file: se non ci
                  sono errori comparirà il messaggio di registrazione della
                  richiesta
                </div>
              </div>
            </div>
            <div className="">
              <NoteProdotto nota={note} />
            </div>
          </div>
          <div className="flex-grow">
            <div className="p-8 h-full">
              <Upload selectedProduct={selectedProduct} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SSpeciali;
