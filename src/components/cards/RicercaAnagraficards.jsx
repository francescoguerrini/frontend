import PropTypes from "prop-types"; // Importa PropTypes
import { Card, CardHeader, CardBody, Divider, Image } from "@nextui-org/react";
import mappa from "../../assets/maps2.png";

function RicercaAnagrafiCard({
  denominazione,
  ragione_sociale,
  partita_iva,
  codice_fiscale,
  n_rea,
  indirizzo,
  citta,
  id_soggetto,
}) {
  const address = `https://www.google.com/maps/search/?api=1&query=${indirizzo}${citta}`;
  return (
    <Card className="max-w-[400px]">
      <CardHeader className="flex gap-3">
        <div className="flex flex-col">
          <p className="text-md">{denominazione}</p>{" "}
          {/* Utilizza i dati passati tramite props */}
          <p className="text-tiny text-default-500">{ragione_sociale}</p>
          <a href={address} target="blank">
            <p className="text-tiny text-blue-600 underline cursor-pointer">
              {indirizzo} - {citta}
            </p>
          </a>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <div className="flex justify-between">
          <div>
            <p className="text-[.7rem]">ID soggetto : {id_soggetto}</p>
            <p className="text-[.7rem]">Partita iva : {partita_iva}</p>
            <p className="text-[.7rem]">Codice fiscale : {codice_fiscale}</p>
            <p className="text-[.7rem]">N_REA : {n_rea}</p>
          </div>
          <div className="flex justify-center items-center w-1/2">
            <a href={address} target="blank">
              <Image src={mappa} width={110} />
            </a>
          </div>
        </div>
      </CardBody>
      <Divider />
    </Card>
  );
}

// Definisci i PropTypes per il componente
RicercaAnagrafiCard.propTypes = {
  denominazione: PropTypes.string,
  ragione_sociale: PropTypes.string,
  partita_iva: PropTypes.string,
  codice_fiscale: PropTypes.string,
  n_rea: PropTypes.string,
  id_soggetto: PropTypes.string,
  indirizzo: PropTypes.string,
  citta: PropTypes.string,
};

export default RicercaAnagrafiCard;
