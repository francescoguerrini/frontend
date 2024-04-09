import PropTypes from "prop-types";
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

const TableActions = ({ top }) => {
  return (
    <div className="w-full">
      <div
        className={` ${
          top
            ? "flex gap-1 lg:gap-3 items-center justify-centermb-1 lg:mb-0"
            : "xl:flex items-center justify-center gap-[.1rem]"
        }`}
      >
        {actions.map((action, index) => (
          <ActionModal key={index} content={action} />
        ))}
      </div>
    </div>
  );
};
TableActions.PropTypes = {
  top: PropTypes.bool,
};

export default TableActions;
