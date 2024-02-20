import {
  Modal,
  ModalContent,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { FiSearch } from "react-icons/fi";
import { Document, Page } from "react-pdf"; // Importa la libreria react-pdf per visualizzare il PDF
import { useState } from "react";
import dummy from "./dummy.pdf";

export default function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [inputPageNumber, setInputPageNumber] = useState(1); // Aggiungi uno stato per il numero di pagina inserito dall'utente

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  // Funzione per gestire il cambiamento del numero di pagina inserito dall'utente
  const handlePageNumberChange = (e) => {
    setInputPageNumber(parseInt(e.target.value)); // Converte il valore in un numero intero e lo imposta nello stato
  };

  // Funzione per impostare la pagina desiderata quando l'utente conferma l'input
  const goToPage = () => {
    if (inputPageNumber > 0 && inputPageNumber <= numPages) {
      setPageNumber(inputPageNumber);
    }
  };

  return (
    <>
      <button
        onClick={onOpen}
        className="text-white bg-sky-600 rounded-lg p-[5px] lg:p-[10px] hover:scale-105 transition-all duration-300"
      >
        <FiSearch />
      </button>
      <Modal isOpen={isOpen} onClose={onClose} className="h-[99%] min-w-[96%]">
        <ModalContent className="p-2">
          <Document
            file={dummy} // Inserisci il percorso del tuo file PDF
            onLoadSuccess={onDocumentLoadSuccess}
          >
            <Page pageNumber={pageNumber} />
          </Document>
          <div className="flex justify-center mt-4">
            <input
              type="number"
              min="1"
              max={numPages || ""}
              value={inputPageNumber}
              onChange={handlePageNumberChange}
              className="w-16 p-1 text-center border rounded"
            />
            <button
              onClick={goToPage}
              className="ml-2 p-1 bg-sky-600 text-white rounded hover:scale-105 transition-all duration-300"
            >
              Go
            </button>
          </div>
          <p className="text-center mt-2">
            Page {pageNumber} of {numPages}
          </p>
          <ModalFooter>
            <Button color="danger" variant="light" onPress={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
