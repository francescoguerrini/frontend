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
  Input,
  Tooltip,
} from "@nextui-org/react";

import { FiLink } from "react-icons/fi";

export default function AggiungiNotaModal({ content }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [value, setValue] = useState("");
  const [confirmation, setConfirmation] = useState(true);

  const handleClick = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <Tooltip content={content.event}>
        <button
          onClick={onOpen}
          className="p-[.2rem] lg:p-[.3rem] bg-sky-500 hover:bg-sky-400 text-white rounded-full"
        >
          {<content.icon />}
        </button>
      </Tooltip>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                {content.event}
              </ModalHeader>
              <ModalBody>
                <Input
                  endContent={
                    <FiLink className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  placeholder="Nuovo Nome"
                  type="text"
                  variant="bordered"
                />
                <Checkbox
                  onValueChange={() => setConfirmation(!confirmation)}
                  classNames={{
                    label: "text-small",
                  }}
                >
                  <div className="flex flex-col">
                    <p className="text-small text-default-500">
                      <p>Vuoi modificare il nome del file in:</p>
                      <p className="text-rose-600">{value}</p>
                    </p>
                  </div>
                </Checkbox>
              </ModalBody>
              <ModalFooter>
                <Button
                  color="danger"
                  variant="flat"
                  onPress={onClose}
                  size="sm"
                >
                  Close
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
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
const ContentShape = PropTypes.shape({
  // Definisci i tipi di dati per le varie chiavi dell'oggetto content
  // Esempio:
  event: PropTypes.string,
  icon: PropTypes.elementType,

  // Aggiungi altre chiavi e i rispettivi tipi di dati se necessario
});
AggiungiNotaModal.propTypes = {
  content: ContentShape,
};
