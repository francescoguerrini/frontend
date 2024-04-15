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
          className="p-[.15rem] lg:p-[.4rem] bg-sky-500 hover:bg-sky-400 text-white rounded-full"
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
