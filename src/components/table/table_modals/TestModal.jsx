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

export default function AccertamentiModal({ content }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const animals = [
    { label: "Catasto", value: "catasto" },
    { label: "Domicilio", value: "domicilio" },
    { label: "Relazioni Bancarie", value: "relbancarie" },
    { label: "Patrimonio", value: "patrimonio" },
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
      <div className="flex w-full max-w-xs flex-col gap-2">
        <Modal isOpen={isOpen} onClose={onClose} placement="top-center">
          <ModalContent>
            <ModalHeader>Accertamenti</ModalHeader>
            <ModalBody>
              <div>
                <div>Pratiche</div>
                <div className="border flex flex-wrap gap-x-1 text-slate-700 text-sm">
                  <div>Mario Rossi</div>
                  <div>Luca Bianchi</div>
                  <div>Gianni Verdi</div>
                  <div>Peppe Neri</div>
                  <div>Mimmo Azzurri</div>
                  <div>Ettore Viola</div>
                </div>
              </div>
              <Select
                label="Favorite Animal"
                selectionMode="multiple"
                placeholder="Select an animal"
                selectedKeys={values}
                className="max-w-xs"
                onSelectionChange={setValues}
              >
                {animals.map((animal) => (
                  <SelectItem key={animal.value} value={animal.value}>
                    {animal.label}
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
                    <p>Hai scelto i seguenti accertamenti:</p>
                    <p className="text-rose-600">
                      {Array.from(values).join(", ")}
                    </p>{" "}
                    <p>
                      da eseguire su <span className="text-amber-600">6</span>{" "}
                      pratiche
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
      </div>
    </>
  );
}
const ContentShape = PropTypes.shape({
  event: PropTypes.string,
  icon: PropTypes.elementType,
});

AccertamentiModal.propTypes = {
  content: ContentShape,
};
