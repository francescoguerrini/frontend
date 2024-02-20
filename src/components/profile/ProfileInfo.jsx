import { Badge } from "@nextui-org/react";
import { FiSettings, FiMessageSquare } from "react-icons/fi";
import Informations from "./Informations";
import NotificationModal from "./NotificationModal";

const ProfileInfo = () => {
  return (
    <div className="h-full flex lg:flex-col items-center justify-around lg:justify-evenly gap-3">
      <div>
        <Informations />
      </div>
      <div>
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-12">
          <Badge content="5" color="primary">
            <NotificationModal />{" "}
          </Badge>
          <button className="bg-fourth text-white p-2 rounded-full hover:scale-110 transition-all duration-300">
            <FiMessageSquare />
          </button>
          <button className="bg-fourth text-white p-2 rounded-full hover:scale-110 transition-all duration-300">
            <FiSettings />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
