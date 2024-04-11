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
import ActionModal from "./table_modals/ActionModal";
import AssegnazioneModal from "./table_modals/AssegnazioneModal";
import AccertamentiModal from "./table_modals/AccertamentiModal";

const actions = [
  { event: "Cambia Stato", icon: FiCircle },
  { event: "Cambia Nome File", icon: FiFileText },
  { event: "Cambia Priorità", icon: FiAlertTriangle },
  { event: "Aggiungi Nota", icon: FiMusic },
  { event: "Assegna Tag", icon: FiLink },
  { event: "Visualizza Richieste Collegate", icon: FiLayers },
];
const assegnazione = { event: "Riassegna", icon: FiShuffle };
const accertamenti = { event: "Accertamenti", icon: FiZoomIn };
// const test = { event: "Test", icon: FiMeh };

const TableActions = ({ top }) => {
  return (
    <div className="">
      <div
        className={` ${
          top
            ? "flex gap-1 lg:gap-3 items-center justify-center mb-1 lg:mb-0"
            : "lg:flex lg:items-center gap-[.1rem]"
        }`}
      >
        <AssegnazioneModal content={assegnazione} />
        <AccertamentiModal content={accertamenti} />
        {actions.map((action, index) => (
          <ActionModal key={index} content={action} />
        ))}
        {/* <TestModal content={accertamenti} /> */}
      </div>
    </div>
  );
};
TableActions.propTypes = {
  top: PropTypes.bool,
};

export default TableActions;
