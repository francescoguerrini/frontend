import PreviewModal from "./PreviewModal";
import { Tooltip } from "@nextui-org/react";
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
    <div className="w-full h-full flex justify-evenly items-center bg-seventh rounded-md py-1">
      {buttons.map((Icon, index) => (
        <Tooltip content={Icon.text} key={index} placement="bottom">
          <button className="text-white bg-sky-600 rounded-lg p-[5px] lg:p-[10px] hover:scale-105 transition-all duration-300">
            <Icon.icon />
          </button>
        </Tooltip>
      ))}{" "}
      <Tooltip content="Preview" placement="bottom">
        <div>
          <PreviewModal />
        </div>
      </Tooltip>
    </div>
  );
};

export default Actions;
