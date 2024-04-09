import {
  Modal,
  ModalContent,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { FiRefreshCw } from "react-icons/fi";
import GenericSelectInput from "./GenericSelectInput";

const BasicModal = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const operatori = [
    { value: "001", label: "Augusto" },
    { value: "002", label: "Giulia" },
    { value: "003", label: "Deborah" },
    { value: "004", label: "Valentina" },
  ];

  return (
    <>
      <div className="flex items-center justify-center">
        <button onClick={onOpen}>
          <FiRefreshCw />
        </button>
      </div>

      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        isDismissable={false}
        isKeyboardDismissDisabled={true}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody>
                <p>
                  Vuoi assegnare questa richiesta ad un nuovo{" "}
                  <span className="text-rose-700">Responsabile?</span>{" "}
                </p>
                <GenericSelectInput item_list={operatori} label="operatori" />
                <p>
                  Vuoi assegnare questa richiesta ad un altro{" "}
                  <span className="text-sky-700">Operatore?</span>{" "}
                </p>
                <GenericSelectInput item_list={operatori} label="operatori" />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Chiudi
                </Button>
                <Button color="primary" onPress={onClose}>
                  Riassegna
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default BasicModal;
