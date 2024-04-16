import { useEffect, useRef } from "react";
import { FiDownload, FiUpload } from "react-icons/fi";

const StoricoFile = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    // Scrolla alla fine della lista dei messaggi quando cambia la nuovaNota
    if (inputRef.current) {
      inputRef.current.scrollIntoView({ behavior: "auto", block: "end" });
    }
  }, [inputRef]);

  const files = [
    "RispostaCerved.docx",
    "GNNDL23C21H143L.docx",
    "GennaroDeLucaCatasto.docx",
    "SGRGennaro.docx",
    "GNNDL23C21H143L.docx",
    "GennaroDeLucaCatasto.docx",
    "SGRGennaro.docx",
    "GNNDL23C21H143L.docx",
    "GennaroDeLucaCatasto.docx",
    "SGRGennaro.docx",
    "GNNDL23C21H143L.docx",
    "GennaroDeLucaCatasto.docx",
    "SGRGennaro.docx",
    "GNNDL23C21H143L.docx",
    "GennaroDeLucaCatasto.docx",
    "SGRGennaro.docx",
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
            <div className="flex items-center gap-1 text-[.6rem] lg:text-tiny">
              -<span>{file}</span>
            </div>
          </div>
        ))}
      </div>
      <div
        ref={inputRef}
        className="flex items-center justify-center p-2 gap-1 md:gap-2 text-tiny w-full h-1/5"
      >
        <button className="bg-sky-200 p-1 rounded w-1/3 flex flex-col md:flex-row gap-2 items-center justify-center hover:bg-sky-700 hover:text-white transition-all duration-250">
          <FiDownload /> Primo
        </button>
        <button className="bg-sky-200 p-1 rounded w-1/3 flex flex-col md:flex-row gap-2 items-center justify-center hover:bg-sky-700 hover:text-white transition-all duration-250">
          <FiDownload /> Ultimo
        </button>
        <button className="bg-sky-200 p-1 rounded w-1/3 flex flex-col md:flex-row gap-2 items-center justify-center hover:bg-sky-700 hover:text-white transition-all duration-250">
          <FiUpload /> Upload
        </button>
      </div>
    </div>
  );
};

export default StoricoFile;
