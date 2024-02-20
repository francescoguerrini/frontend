import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
} from "@nextui-org/react";
import { FiBell } from "react-icons/fi";

export default function NotificationModal() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <button
        onClick={onOpen}
        className="bg-fourth text-white p-2 rounded-full hover:scale-110 transition-all duration-300"
      >
        <FiBell />
      </button>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Modifica Informazioni
              </ModalHeader>
              <ModalBody>
                <div className="flex flex-col gap-3">
                  <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                    <Input type="email" label="Nome" size="sm" />
                    <Input
                      size="sm"
                      type="email"
                      label="Nome"
                      placeholder="Inserisci il tuo nome"
                    />
                  </div>
                  <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                    <Input type="email" label="Azienda" size="sm" />
                    <Input
                      size="sm"
                      type="email"
                      label="Azienda"
                      placeholder="Inserisci il nome dell'azienda"
                    />
                  </div>
                  <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                    <Input type="email" label="Codice" size="sm" />
                    <Input
                      size="sm"
                      type="email"
                      label="Codice"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button
                  variant="flat"
                  onPress={onClose}
                  className="text-white bg-rose-700"
                >
                  Chiudi
                </Button>
                <Button color="primary" onPress={onClose}>
                  Conferma
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
