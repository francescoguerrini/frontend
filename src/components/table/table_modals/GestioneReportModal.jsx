import PropTypes from "prop-types";
import {
  Modal,
  ModalContent,
  ModalBody,
  useDisclosure,
  Tooltip,
} from "@nextui-org/react";
import VerticalTabs from "../../detail_page/VerticalTabs";

export default function GestioneReportModal({ content }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleOpen = () => {
    onOpen();
  };

  return (
    <>
      <Tooltip content={content.event}>
        <button
          onClick={handleOpen}
          className="p-[.2rem] lg:p-[.3rem] bg-sky-500 hover:bg-sky-400 text-white rounded-full"
        >
          {<content.icon />}
        </button>
      </Tooltip>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size="full"
        classNames={{
          body: "h-[100vh]",
          closeButton:
            "bg-seventh text-slate-800 text-xl hover:bg-rose-700 hover:text-white border border-slate-800 rounded-full active:bg-white/10",
        }}
        scrollBehavior="outside"
      >
        <ModalContent>
          {() => (
            <>
              <ModalBody>
                <VerticalTabs />
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
const ContentShape = PropTypes.shape({
  event: PropTypes.string,
  icon: PropTypes.elementType,
});

GestioneReportModal.propTypes = {
  content: ContentShape,
};
