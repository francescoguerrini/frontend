import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import axios from "axios";
import { FaTelegram } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
const Upload = ({ selectedProduct }) => {
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

  const handleSubmit = async () => {
    if (selectedFiles.length === 0) {
      alert("Nessun file selezionato.");
      return;
    }

    const apiTarget = "http://127.0.0.1:8000/upload/servizi-speciali/";

    const formData = new FormData();
    selectedFiles.forEach((file) => {
      formData.append("files", file);
    });
    if (selectedProduct) {
      formData.append("selectedProduct", selectedProduct);
    }

    try {
      const response = await axios.post(apiTarget, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setSelectedFiles([]);
      setSuccess(true);
    } catch (error) {
      console.log(error);
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept:
      ".xls; .xlsx, .doc, .docx, .odt, .csv, .txt, .pdf, .rtf, .tsv, .xml, .ofx, .qif, .html", // Accetta solo file Excel con estensione .xlsx
    multiple: true, // Permette la selezione di più file
  });

  return (
    <div className="flex flex-col gap-8 h-full justify-start mx-4">
      <div
        {...getRootProps()}
        className="flex flex-col gap-8 bg-sky-100 text-slate-900 shadow-md hover:drop-shadow-xl rounded-xl"
      >
        <div className="flex items-center justify-center text-center border px-4 py-28 rounded-xl">
          <input {...getInputProps()} id="upload-file-input" label="" />
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
      <div className="flex justify-end ">
        <button
          onClick={handleSubmit}
          className={`w-1/3 flex items-center justify-center px-3 py-1 rounded-md border-2 ${
            selectedProduct
              ? "hover:bg-rose-100 hover:text-rose-800 border-rose-700 bg-rose-700 text-white transition-all duration-300"
              : "bg-gray-400 text-gray-600 border-gray-400 cursor-not-allowed"
          }`}
          disabled={!selectedProduct}
        >
          Invia
        </button>
      </div>
    </div>
  );
};

export default Upload;
