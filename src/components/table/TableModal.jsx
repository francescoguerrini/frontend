import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  Button,
  useDisclosure,
  Avatar,
} from "@nextui-org/react";

import {
  FiEye,
  FiArrowDownCircle,
  FiCoffee,
  FiCopy,
  FiEdit,
  FiSave,
  FiShield,
  FiUser,
  FiSettings,
  FiFileText,
} from "react-icons/fi";

export default function TableModal() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <button
        onClick={onOpen}
        className="flex items-center justify-center z-50"
      >
        <FiEye />
      </button>
      <Modal
        backdrop="blur"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        size=""
        className="absolute right-0 drop-shadow-l rounded-lg overflow-scroll"
      >
        <ModalContent className="h-[99%] min-w-[96%]">
          {(onClose) => (
            <div className="rounded-lg ">
              <ModalHeader className="flex flex-col text-sm">
                <p>
                  <span className="text-slate-600">Dettaglio Pratica :</span>
                  <span className="font-semibold"> N*143335</span>
                </p>
              </ModalHeader>
              <ModalBody>
                <div className="grid grid-cols-4 gap-1 text-tiny">
                  <div className="bg-seventh col-span-3 flex flex-col gap-1">
                    <div className="card4 text-slate-700 flex items-center">
                      <div className="w-1/3">
                        <p>
                          Dati da segnalare:{" "}
                          <span className="text-slate-900">123 dato </span>
                        </p>
                        <p>
                          Dati da segnalare:{" "}
                          <span className="text-slate-900">123 dato </span>
                        </p>
                        <p>
                          Dati da segnalare:{" "}
                          <span className="text-slate-900">123 dato </span>
                        </p>
                      </div>
                      <div className="w-1/3">
                        <p>
                          Dati da segnalare:{" "}
                          <span className="text-slate-900">123 dato </span>
                        </p>
                        <p>
                          Dati da segnalare:{" "}
                          <span className="text-slate-900">123 dato </span>
                        </p>
                        <p>
                          Dati da segnalare:{" "}
                          <span className="text-slate-900">123 dato </span>
                        </p>
                      </div>
                      <div className="w-1/3">
                        <p>
                          Dati da segnalare:{" "}
                          <span className="text-slate-900">123 dato </span>
                        </p>
                        <p>
                          Dati da segnalare:{" "}
                          <span className="text-slate-900">123 dato </span>
                        </p>
                        <p>
                          Dati da segnalare:{" "}
                          <span className="text-slate-900">123 dato </span>
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-1">
                      <div className="card1 w-1/2 flex justify-center items-center">
                        <div className="bg-white h-[100%] w-[80%] rounded-lg p-1">
                          <div>Storico file inerenti alla pratica in corso</div>
                          <div className="p-3 bg-white flex gap-1 items-center">
                            <FiFileText /> <div>- mariorossi.xls</div>{" "}
                            <div className="text-[0.6rem]">
                              <FiArrowDownCircle />
                            </div>
                          </div>
                          <div className="p-3 bg-white flex gap-1 items-center">
                            <FiFileText /> <div>- mariorossi.xls</div>{" "}
                            <div className="text-[0.6rem]">
                              <FiArrowDownCircle />
                            </div>
                          </div>
                          <div className="p-3 bg-white flex gap-1 items-center">
                            <FiFileText /> <div>- mariorossi.xls</div>{" "}
                            <div className="text-[0.6rem]">
                              <FiArrowDownCircle />
                            </div>
                          </div>
                          <div className="p-3 bg-white flex gap-1 items-center">
                            <FiFileText /> <div>- mariorossi.xls</div>{" "}
                            <div className="text-[0.6rem]">
                              <FiArrowDownCircle />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card1 w-1/2 flex justify-center items-center">
                        <div className="bg-slate-100 h-[100%] w-[80%] rounded-lg p-1">
                          <div>history</div>
                          <div className="p-3">
                            <div>
                              <div className="flex gap-3 items-center">
                                <Avatar className="w-6 h-6 text-tiny" />{" "}
                                <div>
                                  <div>Ha preso in carico la richiesta</div>
                                  <div className="text-[0.5rem]">
                                    01.01.2012 ore 11.05
                                  </div>
                                </div>
                              </div>
                              <div className="flex gap-3 items-center">
                                <Avatar className="w-6 h-6 text-tiny" />{" "}
                                <div>
                                  <div>Ha completato lo step precedente</div>
                                  <div className="text-[0.5rem]">
                                    01.01.2012 ore 11.05
                                  </div>
                                </div>
                              </div>
                              <div className="flex gap-3 items-center">
                                <Avatar className="w-6 h-6 text-tiny" />{" "}
                                <div>
                                  <div>Ti ha assegnato questa richiesta</div>
                                  <div className="text-[0.5rem]">
                                    01.01.2012 ore 11.05
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card4">
                      <div className="flex gap-3 items-center border-b">
                        <Avatar className="w-6 h-6 text-tiny" />{" "}
                        <div>
                          <div>
                            lorem ipsum dolor sit amet rosarum lupe ibit astra
                            sortem ipso loco augusta cerimonia est
                          </div>
                          <div className="text-[0.5rem]">
                            01.01.2012 ore 11.05
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-3 items-center">
                        <Avatar className="w-6 h-6 text-tiny" />{" "}
                        <div>
                          <div>Prova ad attaccare la spina</div>
                          <div className="text-[0.5rem]">
                            01.01.2012 ore 11.06
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1 ">
                    <div className="h-1/6 flex flex-col items-center text-slate-800 justify-evenly">
                      <div className="w-full flex items-center justify-center">
                        <div className="grid grid-cols-3 xl:grid-cols-6 gap-3 xl:gap-5">
                          <div className="bg-third text-white p-2 rounded-full cursor-pointer hover:scale-110">
                            <FiCoffee />
                          </div>
                          <div className="bg-third text-white p-2 rounded-full cursor-pointer hover:scale-110">
                            <FiCopy />
                          </div>
                          <div className="bg-third text-white p-2 rounded-full cursor-pointer hover:scale-110">
                            <FiSave />
                          </div>
                          <div className="bg-third text-white p-2 rounded-full cursor-pointer hover:scale-110">
                            <FiShield />
                          </div>
                          <div className="bg-third text-white p-2 rounded-full cursor-pointer hover:scale-110">
                            <FiEdit />
                          </div>
                          <div className="bg-third text-white p-2 rounded-full cursor-pointer hover:scale-110">
                            <FiArrowDownCircle />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="h-4/6 p-1 bg-slate-100 flex flex-col gap-2">
                      <div>Steps</div>
                      <div className="flex flex-col gap-1">
                        <div className="flex gap-1 items-center px-2 border rounded-lg">
                          <div className="w-1/6">
                            <FiSettings />
                          </div>
                          <div className="flex flex-col ">
                            <div>1.Creazione Pratica</div>
                            <div className="text-[0.6rem]">
                              01.01.2024 ore 12.21
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-1 items-center px-2 border rounded-lg">
                          <div className="w-1/6">
                            <FiSettings />
                          </div>
                          <div className="flex flex-col ">
                            <div>2.Ricezione Richiesta in entrata</div>
                            <div className="text-[0.6rem]">
                              01.01.2024 ore 12.21
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-1 items-center border rounded-lg px-2">
                          <div className="w-1/6">
                            <FiUser />
                          </div>
                          <div className="flex flex-col ">
                            <div>3.Verifica dati</div>
                            <div className="text-[0.6rem]">
                              01.01.2024 ore 12.21
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-1 items-center px-2 border rounded-lg">
                          <div className="w-1/6">
                            <FiSettings />
                          </div>
                          <div className="flex flex-col ">
                            <div>4.Chiamata Catasto Cerved</div>
                            <div className="text-[0.6rem]">
                              01.01.2024 ore 12.21
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="h-1/6 p-1 flex items-center justify-center">
                      <div className="bg-white rounded-xl p-1 flex gap-1 lg:gap-5 xl:gap-12">
                        <Button
                          variant="light"
                          onPress={onClose}
                          className=" bg-rose-700 text-white hover:text-slate-900"
                        >
                          Chiudi
                        </Button>
                        <Button color="primary" onPress={onClose}>
                          Conferma
                        </Button>
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
