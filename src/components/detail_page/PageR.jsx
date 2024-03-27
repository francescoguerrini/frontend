import Actions from "./Actions";
import Commenti from "./Commenti";
import Storico from "./Storico";
import RedazioneModal from "./RedazioneModal";

const PageR = () => {
  return (
    <div className="h-full flex flex-col gap-2">
      <div className="h-1/6 bg-seventh shadow-md flex md:flex-col items-center rounded-md">
        <Actions />
      </div>
      <div className="h-full w-full flex flex-col lg:flex-row gap-2">
        <div className="h-1/2 md:h-full w-full lg:w-1/2 bg-seventh rounded p-1">
          <Storico />
        </div>
        <div className="h-1/2 md:h-full w-full lg:w-1/2 bg-seventh rounded p-1">
          <Commenti />
        </div>
      </div>

      <div className="h-10 bg-white rounded flex items-center justify-between p-4 shadow-md">
        <RedazioneModal />
        <button className="bg-rose-700 text-white hover:bg-white hover:text-rose-700 p-1 rounded border hover:border-rose-700">
          Procedi
        </button>
      </div>
    </div>
  );
};

export default PageR;
