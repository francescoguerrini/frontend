import Steps from "./Steps";
import DettagliPratica from "./DettagliPratica";
import StoricoFile from "./StoricoFile";

const PageL = () => {
  return (
    <div className="h-full w-full flex flex-row-reverse gap-1">
      <div className="flex-grow flex flex-col gap-2">
        <div className="h-1/2 bg-seventh rounded-md">
          <DettagliPratica />
        </div>
        <div className="h-1/2 bg-seventh rounded-md">
          <StoricoFile />
        </div>
      </div>
      <div className="w-[40%] md:w-[47%] max-h-96 xl:w-[37%] md:max-h-full pl-1">
        <Steps />
      </div>
    </div>
  );
};

export default PageL;
