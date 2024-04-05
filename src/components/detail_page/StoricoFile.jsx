import { FiDownload, FiUpload } from "react-icons/fi";

const StoricoFile = () => {
  const files = [
    "RispostaCerved.docx",
    "GNNDL23C21H143L.docx",
    "GennaroDeLucaCatasto.docx",
    "SGRGennaro.docx",
  ];
  return (
    <div className="h-full flex flex-col overflow-auto bg-seventh justify-between">
      <div className="report-title">Storico dei File</div>

      <div className="flex flex-col gap-1 items-start p-1">
        {files.map((file, index) => (
          <div key={index} className="flex gap-2">
            <button className="bg-sky-600 text-white p-1 rounded hover:scale-105 transition-all duration-300">
              <FiDownload />
            </button>
            <div className="flex items-center gap-1 text-tiny lg:text-sm">
              -<span>{file}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="flex lg:flex-row gap-1 md:gap-2 text-tiny p-1 w-full">
        <button className="bg-rose-700 text-white p-1 rounded w-1/3 flex flex-col md:flex-row gap-2 items-center justify-center">
          <FiDownload /> Primo
        </button>
        <button className="bg-rose-700 text-white p-1 rounded w-1/3 flex flex-col md:flex-row gap-2 items-center justify-center">
          <FiDownload /> Ultimo
        </button>
        <button className="bg-rose-700 text-white p-1 rounded w-1/3 flex flex-col md:flex-row gap-2 items-center justify-center">
          <FiUpload /> Upload
        </button>
      </div>
    </div>
  );
};

export default StoricoFile;
