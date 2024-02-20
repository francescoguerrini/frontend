import { FiFile, FiDownload } from "react-icons/fi";

const StoricoFile = () => {
  const files = [
    "MarioRossi.docx",
    "MarioRossiAnagrafica.docx",
    "MarioRossiCatasto.docx",
    "MarioRossiSocial.docx",
  ];
  return (
    <div className="p-2">
      <div className="title">Storico dei File</div>
      <div className="flex flex-col gap-1">
        {files.map((file, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center gap-1 text-tiny lg:text-sm">
              <FiFile />-<span>{file}</span>
            </div>
            <button className="bg-sky-600 text-white p-1 rounded hover:scale-105 transition-all duration-300">
              <FiDownload />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StoricoFile;
