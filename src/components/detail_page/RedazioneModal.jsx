import TextArea from "./TextArea";
import Frasario from "./Frasario";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
  Image,
} from "@nextui-org/react";
import report1 from "../../assets/report1.png";
import report2 from "../../assets/report2.png";
import report3 from "../../assets/report3.png";
import report4 from "../../assets/report4.png";

export default function RedazioneModal() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <button
        onClick={onOpen}
        className="bg-sky-700 text-white hover:bg-white hover:text-sky-700 p-1 rounded border hover:border-sky-700"
      >
        Redazione
      </button>
      <Modal
        backdrop="blur"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        size=""
        className="absolute right-0 drop-shadow-l rounded-lg"
      >
        <ModalContent className="h-[99%] min-w-[96%]">
          {(onClose) => (
            <div className="rounded-lg h-full">
              <ModalHeader className="flex text-sm font-normal justify-between items-center">
                <div>
                  <p>
                    <span className="text-slate-600">Dettaglio Pratica :</span>
                    <span className="font-semibold"> N*143335</span>
                  </p>
                </div>
                <div className="w-[40%] flex justify-evenly p-3">
                  <div className="bg-rose-700 text-white rounded-md px-2 py-1 hover:text-rose-700 hover:bg-white border border-rose-700 transition-all duration-300">
                    Salva
                  </div>
                  <div className="bg-rose-700 text-white rounded-md px-2 py-1 hover:text-rose-700 hover:bg-white border border-rose-700 transition-all duration-300">
                    Salva e torna all'elenco
                  </div>
                  <div className="bg-rose-700 text-white rounded-md px-2 py-1 hover:text-rose-700 hover:bg-white border border-rose-700 transition-all duration-300">
                    Concludi ed evadi
                  </div>
                </div>
              </ModalHeader>
              <ModalBody>
                <div className="h-full w-full flex flex-col gap-2 bg-slate-50 rounded">
                  <div className="flex gap-3">
                    <div className="w-1/3">
                      <div className="my-2">Anterpima Report</div>
                      <div className="bg-white border overflow-y-scroll max-h-[27rem]">
                        <Image src={report1} width={500} />
                        <Image src={report2} width={500} />
                        <Image src={report3} width={500} />
                        <Image src={report4} width={500} />
                      </div>
                    </div>
                    <div className="w-1/3 flex flex-col px-1 gap-2 max-h-[27rem]">
                      <div className="my-2">Redazione</div>
                      <div>
                        <TextArea
                          id=""
                          placeholder="Score"
                          value=""
                          onChange=""
                          className="h-12 border"
                        />
                      </div>
                      <div>
                        <TextArea
                          id=""
                          placeholder="Valore Affidabilità"
                          value=""
                          onChange=""
                          className="h-12 border"
                        />
                      </div>
                      <div>
                        <TextArea
                          id=""
                          placeholder="Credit Limit"
                          value=""
                          onChange=""
                          className="h-12 border"
                        />
                      </div>
                      <div>
                        <TextArea
                          id=""
                          placeholder="Stato Attività"
                          value=""
                          onChange=""
                          className="h-12 border"
                        />
                      </div>
                      <div>
                        <TextArea
                          id=""
                          placeholder="Credit Rating"
                          value=""
                          onChange=""
                          className="h-12 border"
                        />
                      </div>
                      <div>
                        <TextArea
                          id=""
                          placeholder="Solvibilità"
                          value=""
                          onChange=""
                          className="h-12 border"
                        />
                      </div>
                      <div>
                        <TextArea
                          id=""
                          placeholder="Liquidità"
                          value=""
                          onChange=""
                          className="h-12 border"
                        />
                      </div>
                    </div>
                    <div className="w-1/3">
                      <div className="my-2">Frasario</div>
                      <div className="max-h-[27rem]">
                        <Frasario />
                      </div>
                    </div>
                  </div>
                </div>
              </ModalBody>
            </div>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
