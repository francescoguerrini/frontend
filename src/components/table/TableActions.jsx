import {
  FiAperture,
  FiCodepen,
  FiCpu,
  FiFrown,
  FiHeart,
  FiTrash2,
  FiTruck,
  FiUmbrella,
  FiVideo,
} from "react-icons/fi";
import ActionModal from "./ActionModal";

const actions = [
  { event: "open", icon: FiAperture },
  { event: "something", icon: FiCodepen },
  { event: "explode", icon: FiCpu },
  { event: "eh?", icon: FiFrown },
  { event: "tvb", icon: FiHeart },
  { event: "schifo", icon: FiTrash2 },
  { event: "vattene", icon: FiTruck },
  { event: "piove", icon: FiUmbrella },
  { event: "vedo", icon: FiVideo },
];

const TableActions = () => {
  return (
    <div className="w-full">
      <div className="flex items-center justify-center gap-3">
        {actions.map((action, index) => (
          <ActionModal key={index} content={action} />
        ))}
      </div>
    </div>
  );
};

export default TableActions;
