import { Tooltip } from "@nextui-org/react";
import {
  FiEdit,
  FiLayers,
  FiRepeat,
  FiUploadCloud,
  FiDownloadCloud,
} from "react-icons/fi";
import RichiesteCollegate from "./RichiesteCollegate";

const Actions = () => {
  const buttons = [
    { icon: FiDownloadCloud, text: "Scarica File" },
    { icon: FiUploadCloud, text: "Upload File" },
    { icon: FiEdit, text: "Modifica" },
    { icon: FiLayers, text: "Documenti" },
    { icon: FiRepeat, text: "Riassegna" },
  ];

  return (
    <div className="p-3 h-full bg-seventh flex xl:flex-col xl:justify-evenly">
      <div className="hidden xl:flex xl:h-1/3 xl:border-b">
        <RichiesteCollegate />
      </div>

      <div className="h-full w-full flex bg-seventh rounded-md gap-6 items-center justify-center lg:flex-col xl:items-start">
        {buttons.map((Icon, index) => (
          <div
            key={index}
            className="xl:flex xl:gap-3 xl:items-center xl:border"
          >
            <Tooltip
              content={Icon.text}
              placement="right"
              className="xl:hidden"
            >
              <button className="text-white bg-sky-600 rounded-lg p-[5px] md:p-[10px] hover:scale-105 transition-all duration-300">
                <Icon.icon />
              </button>
            </Tooltip>
            <span className="text-sm hidden xl:flex">{Icon.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Actions;
