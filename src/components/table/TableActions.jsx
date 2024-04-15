import PropTypes from "prop-types";
import {
  FiShuffle,
  FiCircle,
  FiFileText,
  FiAlertTriangle,
  FiMusic,
  FiLink,
  FiLayers,
  FiZoomIn,
  FiGrid,
} from "react-icons/fi";
import RichiesteCollegate from "../detail_page/RichiesteCollegate";
import AssegnazioneModal from "./table_modals/AssegnazioneModal";
import AccertamentiModal from "./table_modals/AccertamentiModal";
import CambioStatoModal from "./table_modals/CambioStatoModal";
import CambioPriorita from "./table_modals/CambioPrioritaModal";
import AssegnaTagModal from "./table_modals/AssegnaTagModal";
import CambiaNomeFileModal from "./table_modals/CambioNomeFileModal";
import VediRichiesteCollegateModal from "./table_modals/VediRichiesteCollegateModal";
import AggiungiNotaModal from "./table_modals/AggiungiNotaModal";
import GestioneReportModal from "./table_modals/GestioneReportModal";

const assegnazione = { event: "Riassegna", icon: FiShuffle };
const accertamenti = { event: "Accertamenti", icon: FiZoomIn };
const cambiaStato = { event: "Cambia Stato", icon: FiCircle };
const cambioPriorita = { event: "Cambia Priorità", icon: FiAlertTriangle };
const assegnaTag = { event: "Assegna Tag", icon: FiLink };
const cambiaNomeFile = { event: "Cambia Nome File", icon: FiFileText };
const richiesteCollegate = {
  event: "Visualizza Richieste Collegate",
  icon: FiLayers,
};
const gestioneReport = { event: "Vedi dettagli richiesta", icon: FiGrid };

const aggiungiNota = { event: "Aggiungi Nota", icon: FiMusic };

const TableActions = ({ top, vertical }) => {
  return (
    <div className="h-full w-full items-center justify-evenly">
      <div
        className={` flex  ${
          top
            ? " gap-1 items-center"
            : " gap-[.1rem] items-center justify-center flex-wrap"
        } ${
          vertical
            ? "w-full items-center justify-between lg:border-b lg:flex-wrap lg:gap-1 py-4 lg:py-8"
            : ""
        }`}
      >
        <div>
          <AssegnazioneModal content={assegnazione} />
        </div>
        <div>
          <AccertamentiModal content={accertamenti} />
        </div>
        <div>
          <CambioStatoModal content={cambiaStato} />
        </div>
        <div>
          <CambioPriorita content={cambioPriorita} />
        </div>

        <div className={`${top ? "hidden" : ""}`}>
          <CambiaNomeFileModal content={cambiaNomeFile} />
        </div>
        <div>
          <AggiungiNotaModal content={aggiungiNota} />
        </div>
        <div className={`${top ? "hidden" : ""}`}>
          <VediRichiesteCollegateModal content={richiesteCollegate} />
        </div>
        <div>
          <AssegnaTagModal content={assegnaTag} />
        </div>
        <div className={`${top ? "hidden" : ""}`}>
          <GestioneReportModal content={gestioneReport} />
        </div>
      </div>
      <div
        className={`${
          vertical
            ? "hidden lg:h-1/2 lg:flex lg:items-center lg:justify-center lg:p-1 lg:overflow-auto lg:flex-grow"
            : "hidden"
        }`}
      >
        <RichiesteCollegate />
      </div>
    </div>
  );
};
TableActions.propTypes = {
  top: PropTypes.bool,
  vertical: PropTypes.bool,
};

export default TableActions;
