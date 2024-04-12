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

export default function AssegnaTag({ content }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const tags = [
    { label: "tag1", value: "tag1" },
    { label: "tag2", value: "tag2" },
    { label: "tag3", value: "tag3" },
    { label: "tag4", value: "tag4" },
    { label: "tag5", value: "tag5" },
  ];
  const [values, setValues] = useState(new Set([]));
  const [confirmation, setConfirmation] = useState(true);

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
          <ModalHeader>Assegna Tag</ModalHeader>
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
              <div>Tag attuali</div>
              <div className="border flex flex-wrap gap-x-1 text-slate-700 text-sm">
                tag0
              </div>
            </div>
            <Select
              selectionMode="multiple"
              placeholder="Scegli nuovo livello priorità"
              selectedKeys={values}
              className="max-w-xs"
              onSelectionChange={setValues}
            >
              {tags.map((tag) => (
                <SelectItem key={tag.value} value={tag.value}>
                  {tag.label}
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
                  <p>Vuoi assegnare i seguenti tag:</p>
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

AssegnaTag.propTypes = {
  content: ContentShape,
};
