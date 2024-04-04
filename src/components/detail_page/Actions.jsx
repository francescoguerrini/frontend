import { Tooltip } from "@nextui-org/react";
import UserAvatar from "../UserAvatar";
import {
  FiEdit,
  FiLayers,
  FiRepeat,
  FiUploadCloud,
  FiDownloadCloud,
} from "react-icons/fi";

const Actions = () => {
  const buttons = [
    { icon: FiDownloadCloud, text: "Scarica File" },
    { icon: FiUploadCloud, text: "Upload File" },
    { icon: FiEdit, text: "Modifica" },
    { icon: FiLayers, text: "Documenti" },
    { icon: FiRepeat, text: "Riassegna" },
  ];

  return (
    <div className="p-1 h-full bg-seventh flex gap-12  xl:flex-col justify-between xl:justify-evenly">
      <div className="flex items-center justify-center gap-4 xl:flex-col xl:items-start">
        <div>Operatore 1</div>
        <div>Operatore 2</div>
      </div>

      <div className="h-full w-full  flex xl:flex-col gap-6 items-center xl:items-start xl:pl-2 bg-seventh rounded-md py-1">
        {buttons.map((Icon, index) => (
          <div key={index} className="xl:flex xl:gap-3 xl:items-center">
            <Tooltip
              content={Icon.text}
              placement="right"
              className="xl:hidden"
            >
              <button className="text-white bg-sky-600 rounded-lg p-[5px] lg:p-[10px] hover:scale-105 transition-all duration-300">
                <Icon.icon />
              </button>
            </Tooltip>
            <span className="hidden xl:flex">{Icon.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Actions;
