import { useState } from "react";
import axios from "axios"; // Importa axios per effettuare le chiamate HTTP
import BD_Button from "../components/BD_Button";
import BaseInput from "../components/product_form/BaseInput_2";
import RicercaAnagrafiCard from "../components/cards/RicercaAnagraficards.jsx";
import PageTitle from "../components/PageTitle";
import MultiSelectInput from "../components/product_form/MultiSelectInput";
import { products } from "../components/consts/products";

const RicercaAnagrafica = () => {
  const [cardItems, setCardItems] = useState(null);
  const [entry, setEntry] = useState("");
  const backend_url = "http://192.168.1.181:1337/execute_now"; // URL del backend

  const handleInputChange = (event, name) => {
    setEntry({ ...entry, [name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    const payload = {
      parameters: { denominazione: entry.denominazione },
      function_name: "RicercaAnagrafica",
      email: "dev@businessdefence.it",
      send_email_notification: true,
    };
    console.log(payload);
    event.preventDefault(); // Previeni il comportamento predefinito del form
    try {
      const response = await axios.post(backend_url, payload);

      setCardItems(response.data); // Salva la risposta nell'array cardItems
    } catch (error) {
      console.error("Errore durante la chiamata:", error);
    }
    setEntry("");
    console.log("card items :", cardItems);
  };

  return (
    <div className="containerl h-full flex flex-col gap-2">
      <PageTitle title="Ricerca Anagrafica" />
      <div className="bg-seventh rounded-md h-1/3 w-full flex gap-4 p-3">
        <div className="flex-grow flex flex-col gap-2 border-r">
          <div className="text-[.6rem]">
            Informazioni per il recupero del credito
          </div>
          <div className="text-xl">RICERCA ANAGRAFICA</div>
          <div className="text-[.6rem]">
            IL REPORT AGGREGA INFORMAZIONI SU PERSONE FISICHE PROVENIENTI DA
            DIVERSE FONTI PUBBLICHE E L&apos; ELENCO DELLE RECENSIONI STAMPA AI
            FINI DELL&apos; ANTIRICICLAGGIO REPERITE SUL SOGGETTO
          </div>
          <div className="w-full flex justify-end pr-1">
            <BD_Button text="Richiedi Supporto" is_full={false} />
          </div>
        </div>
        <div className="w-1/2 flex flex-col lg:pt-4 ">
          <div className="flex-grow flex flex-col lg:flex-row gap-4 text-[.6rem] h-1/2 font-bold">
            <div className="flex flex-col">
              <div>TEMPO EVASIONE</div>
              <div className="text-rose-700">-</div>
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
        <form className="py-12 grid grid-cols-2 gap-4" onSubmit={handleSubmit}>
          <BaseInput
            label="Denominazione"
            placeholder=""
            value={entry.denominazione || ""}
            onChange={(event) => handleInputChange(event, "denominazione")}
          />
          <BaseInput
            label="Partita Iva"
            placeholder=""
            value={entry.partitaIva || ""}
            onChange={(event) => handleInputChange(event, "partitaIva")}
          />
          <BaseInput
            label="Codice Fiscale"
            placeholder=""
            value={entry.codiceFiscale || ""}
            onChange={(event) => handleInputChange(event, "codiceFiscale")}
          />
          <BaseInput
            label="CCIAA"
            placeholder=""
            value={entry.cciaa || ""}
            onChange={(event) => handleInputChange(event, "cciaa")}
          />
          <div className="py-3">
            <button
              className="bg-rose-700 px-3 py-1 text-white border border-rose-700 hover:bg-rose-50 hover:text-rose-700 rounded-md "
              type="submit"
            >
              Invia
            </button>
          </div>
        </form>
        {cardItems && (
          <div className="grid grid-cols-2 gap-2">
            {cardItems["companies"].map((item, index) => (
              <RicercaAnagrafiCard
                key={index}
                denominazione={item["dati_anagrafici"]["denominazione"]}
                partita_iva={item["dati_anagrafici"]["partita_iva"]}
                codice_fiscale={item["dati_anagrafici"]["codice_fiscale"]}
                id_soggetto={item["dati_anagrafici"]["id_soggetto"]}
                n_rea={item["dati_attivita"]["codice_rea"]}
                indirizzo={item["dati_anagrafici"]["indirizzo"]["descrizione"]}
                citta={
                  item["dati_anagrafici"]["indirizzo"]["descrizione_comune"]
                }
              />
            ))}
          </div>
        )}
        {cardItems && (
          <div className="mt-8 px-4">
            <div className="flex justify-between">
              <div className="min-w-72">
                <MultiSelectInput
                  selection_mode="single"
                  item_list={products}
                  label="Seleziona un prodotto"
                />
              </div>
              <div className="flex items-center">
                <button
                  type="submit"
                  className="bg-rose-700 rounded text-white border border-rose-700 hover:bg-white hover:text-rose-700 px-3 py-1 transition-all duration-300"
                >
                  Procedi
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RicercaAnagrafica;
