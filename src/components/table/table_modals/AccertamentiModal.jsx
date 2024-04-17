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
import BoxPraticheSelezionate from "./BoxPraticheSelezionate";

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
  const lista = [
    "Mario Rossi",
    "Ettore Ponti",
    "Ludovico Ariosto",
    "Torquato Tasso",
    "Felice Lope De Vega",
    "Marzio Della Valle",
    "Mario Maria MArconi",
    "Ugo Tognazzi",
    "SenGiorgio Acremano",
    "Mirko Fusetti",
    "Gennaro Brambilla",
    "Stefano Stefanini",
    "Farinata Degli Uberti",
    "Piero Della Francesca",
    "Mauro Mariotti",
    "Ernesto Che Guevara",
    "Pierfilippo Arminio",
  ];

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
          <ModalHeader>Accertamenti</ModalHeader>
          <ModalBody>
            <div>
              <div className="text-sm">Pratiche Selezionate</div>
              <BoxPraticheSelezionate content={lista} />
            </div>
            <Select
              selectionMode="multiple"
              placeholder="Seleziona il prodotto"
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
                    da eseguire su{" "}
                    <span className="text-amber-600">{lista.length} </span>
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
      </Modal>{" "}
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
