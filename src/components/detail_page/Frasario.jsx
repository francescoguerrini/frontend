import { FiCopy } from "react-icons/fi";
import TextArea from "./TextArea";
import { Tooltip } from "@nextui-org/react";

const Frasario = () => {
  const suggerimenti = [
    "ATTENZIONE! il Codice fiscale inserito in fase di richiesta risulta NON VALIDO, nel corso degli accertamenti è emerso il seguente CF VALIDO: XXXXXXXXXXXXXXX, sul quale sono proseguiti gli approfondimenti investigativi.",
    "Dalle ricerche svolte è emerso che l'ultima residenza anagrafica conosciuta è in: XXX XXXXXXXXX XXXXXXX XXXXXXXX (XX)",
    "Le indagini esperite ci hanno consentito di accertare che il soggetto risulterebbe essere: LAVORATORE SUBORDINATO FULL TIME A TEMPO INDETERMINATO",
    "Dalle indagini svolte è emerso che l'azienda è tuttora operante nel settore indicato. Estese le ricerche all'indirizzo della sede legale, abbiamo appreso che ivi dispone di locali adibiti allo scopo. A suo nome si rileva l'utenza telefonica XXXXXXXXXXX, attiva. L'iniziativa è inoltre raggiungibile al sito web XXXXXXXXXXXXXX.",
    "Durante gli approfondimenti condotti non sono emerse informazioni circa la presenza di gravami sugli emolumenti derivanti da pensione/stipendio.",
    "Dalle indagini svolte è eStando a quanto appreso, si tratterebbe di posizione chiusa in seguito a criticità.merso che la società risulta censita, senza alcun rapporto in essere, presso l'istituto di credito XXXXXXXXXXXXXXXXXXX.",
  ];
  return (
    <div className="h-full">
      <TextArea
        placeholder="Cerca..."
        className="max-h-10 border shadow-sm p-[.4rem]"
      />
      <div className="flex flex-col gap-1 md:max-h-40 lg:max-h-96 overflow-auto">
        {suggerimenti.map((sugg, index) => (
          <div
            key={index}
            className="border border-slate-300 rounded p-1 bg-slate-100 text-[.7rem] lg:text-tiny flex"
          >
            {sugg}
            <Tooltip content="copia negli appunti">
              <span className="text-rose-900">
                <button className="p-[3px] rounded" alt="copy">
                  <FiCopy />
                </button>
              </span>
            </Tooltip>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Frasario;
