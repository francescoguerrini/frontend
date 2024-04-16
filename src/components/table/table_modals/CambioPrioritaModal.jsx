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

export default function CambioPriorita({ content }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const states = [
    { label: "Normale", value: "normale" },
    { label: "Urgente", value: "urgente" },
  ];
  const [values, setValues] = useState(new Set([]));
  const [confirmation, setConfirmation] = useState(true);

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
      <Modal isOpen={isOpen} onClose={onClose} placement="top-center">
        <ModalContent>
          <ModalHeader>Cambia Priorità</ModalHeader>
          <ModalBody>
            <div>
              <div>Pratiche Selezionate</div>
              <div className="border flex flex-wrap gap-x-1 text-slate-700 text-sm">
                <div>Mario Rossi</div>
                <div>Luca Bianchi</div>
                <div>Gianni Verdi</div>
                <div>Peppe Neri</div>
              </div>
            </div>
            <div>
              <div>Livello Priorità Attuale</div>
              <div className="border flex flex-wrap gap-x-1 text-slate-700 text-sm">
                Urgente
              </div>
            </div>
            <Select
              label="Scegli nuovo livello priorità"
              className="max-w-xs"
              onSelectionChange={setValues}
            >
              {states.map((stato) => (
                <SelectItem key={stato.value} value={stato.value}>
                  {stato.label}
                </SelectItem>
              ))}
            </Select>
            <Checkbox
              onValueChange={() => setConfirmation(!confirmation)}
              classNames={{
                label: "text-small",
              }}
            >
              <div className="flex flex-col">
                <p className="text-small text-default-500">
                  <p>Vuoi cambiare la priorità delle pratiche in:</p>
                  <p className="text-rose-600">
                    {Array.from(values).join(", ")}
                  </p>
                </p>
              </div>
            </Checkbox>
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

CambioPriorita.propTypes = {
  content: ContentShape,
};
