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
} from "react-icons/fi";
import AssegnazioneModal from "./table_modals/AssegnazioneModal";
import AccertamentiModal from "./table_modals/AccertamentiModal";
import CambioStatoModal from "./table_modals/CambioStatoModal";
import CambioPriorita from "./table_modals/CambioPrioritaModal";
import AssegnaTagModal from "./table_modals/AssegnaTagModal";
import CambiaNomeFileModal from "./table_modals/CambioNomeFileModal";
import VediRichiesteCollegateModal from "./table_modals/VediRichiesteCollegateModal";
import AggiungiNotaModal from "./table_modals/AggiungiNotaModal";

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
const aggiungiNota = { event: "Aggiungi Nota", icon: FiMusic };

const TableActions = ({ top }) => {
  return (
    <div
      className={` ${
        top
          ? "flex gap-1 items-center"
          : "flex flex-wrap gap-[.1rem] items-center justify-center"
      }`}
    >
      <AssegnazioneModal content={assegnazione} />
      <AccertamentiModal content={accertamenti} />
      <CambioStatoModal content={cambiaStato} />
      <CambioPriorita content={cambioPriorita} />
      <AssegnaTagModal content={assegnaTag} />
      <CambiaNomeFileModal content={cambiaNomeFile} />
      <AggiungiNotaModal content={richiesteCollegate} />
      <VediRichiesteCollegateModal content={aggiungiNota} />
    </div>
  );
};
TableActions.propTypes = {
  top: PropTypes.bool,
};

export default TableActions;
