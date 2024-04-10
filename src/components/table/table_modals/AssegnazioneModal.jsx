import PropTypes from "prop-types";
import { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Checkbox,
  Select,
  SelectItem,
  Tooltip,
} from "@nextui-org/react";

export default function ActionModal({ content }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedResponsabile, setSelectedResponsabile] = useState("");
  const [selectedAssegnatario, setSelectedAssegnatario] = useState("");

  const [confirmation, setConfirmation] = useState(true);
  const operatori = [
    { label: "Deborah Repossi", value: "Deborah Repossi", code: "001" },
    { label: "Giulia Eredia", value: "Giulia Eredia", code: "002" },
    { label: "Augusto Paleari", value: "Augusto Paleari", code: "003" },
    {
      label: "Valentina Guanziroli",
      value: "Valentina Guanziroli",
      code: "004",
    },
  ];

  return (
    <>
      <Tooltip content={content.event}>
        <button
          onClick={onOpen}
          className="p-[.15rem] lg:p-[.4rem] bg-sky-500 hover:bg-sky-400 text-white rounded-full"
        >
          {<content.icon />}
        </button>
      </Tooltip>

      <Modal isOpen={isOpen} onClose={onClose} placement="top-center">
        <ModalContent>
          <ModalHeader>Riassegna</ModalHeader>
          <ModalBody>
            <Select
              label="Scegli un nuovo responsabile"
              className="max-w-xs"
              onSelectionChange={setSelectedResponsabile}
            >
              {operatori.map((operatore) => (
                <SelectItem key={operatore.value} value={operatore.value}>
                  {operatore.label}
                </SelectItem>
              ))}
            </Select>
            <Select
              label="Scegli un nuovo assegnatario"
              className="max-w-xs"
              onSelectionChange={setSelectedAssegnatario}
            >
              {operatori.map((operatore) => (
                <SelectItem key={operatore.value} value={operatore.value}>
                  {operatore.label}
                </SelectItem>
              ))}
            </Select>
            <div className="flex py-2 px-1 justify-between">
              {selectedResponsabile || selectedAssegnatario ? (
                <Checkbox
                  onValueChange={() => setConfirmation(!confirmation)}
                  classNames={{
                    label: "text-small",
                  }}
                >
                  <div
                    className={`${
                      selectedResponsabile ? "text-tiny" : "hidden"
                    }`}
                  >
                    Hai scelto:
                    <span className="font-bold"> {selectedResponsabile} </span>
                    nel ruolo di
                    <span className="text-rose-600"> Responsabile.</span>
                  </div>
                  <div
                    className={`${
                      selectedAssegnatario ? "text-tiny" : "hidden"
                    }`}
                  >
                    Hai scelto:
                    <span className="font-bold"> {selectedAssegnatario} </span>
                    nel ruolo di
                    <span className="text-amber-600"> Assegnatario.</span>
                  </div>
                </Checkbox>
              ) : (
                <p className="text-sm">Nessun operatore selezionato</p>
              )}
            </div>
          </ModalBody>
          <ModalFooter>
            <Button color="danger" variant="flat" size="sm" onClick={onClose}>
              Chiudi
            </Button>
            <Button
              color="primary"
              size="sm"
              onClick={onClose}
              isDisabled={confirmation}
            >
              Procedi
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

const ContentShape = PropTypes.shape({
  event: PropTypes.string,
  icon: PropTypes.elementType,
});

ActionModal.propTypes = {
  content: ContentShape,
};
