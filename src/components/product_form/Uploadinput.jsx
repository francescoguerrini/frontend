import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
// import axios from "axios";
import { FaTelegram } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
const Uploadinput = ({ selectedProduct }) => {
  // const apiTarget = "http://127.0.0.1:8000/upload/servizi-speciali/";
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [success, setSuccess] = useState(false);

  const onDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles.length === 0) {
      alert("Seleziona almeno un file valido.");
      return;
    }

    setSelectedFiles(acceptedFiles);
    setSuccess(false);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept:
      ".xls; .xlsx, .doc, .docx, .odt, .csv, .txt, .pdf, .rtf, .tsv, .xml, .ofx, .qif, .html", // Accetta solo file Excel con estensione .xlsx
    multiple: true, // Permette la selezione di più file
  });

  return (
    <div className="flex flex-col justify-start max-h-24 max-w-1/2 ">
      <p className="label">Upload file</p>
      <div
        {...getRootProps()}
        className="flex flex-col gap-8 bg-white text-slate-950 shadow-sm rounded"
      >
        <div className="flex items-center justify-center text-center border p-2 rounded text-[.7rem] h-10">
          <input
            {...getInputProps()}
            id="upload-file-input"
            label=""
            className=""
          />
          {isDragActive ? (
            <p>Rilascia i file qui ...</p>
          ) : (
            <p>Trascina qui i tuoi file o premi sull&apos; area per trovarli</p>
          )}
        </div>
      </div>
      <div>
        {selectedFiles.length > 0 && (
          <div className="text-[.7rem]">
            <p>File selezionati:</p>
            <ul className="list-disc pl-3">
              {selectedFiles.map((file, index) => (
                <li key={index}>{file.name}</li>
              ))}
            </ul>
          </div>
        )}
        {success && (
          <div className="text-lg text-emerald-600 flex items-center gap-2 justify-start">
            <FaTelegram />
            <p className="text-[.9rem]">Inviato con successo!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Uploadinput;
