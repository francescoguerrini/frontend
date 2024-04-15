import Steps from "./Steps";
import TableActions from "../table/TableActions";
import DettagliPratica from "./DettagliPratica";
import StoricoFile from "./StoricoFile";
import Storico from "./Storico";
import Commenti from "./Commenti";
import TabStoricoRichieste from "./TabStoricoRichieste";

const GestioneReportPage = () => {
  return (
    <div className="h-full w-full rounded-md grid gap-1 grid-cols-3 grid-rows-8 lg:grid-cols-7 lg:grid-rows-8 xl:grid-cols-10 xl:grid-rows-10">
      <div className="row-span-3 lg:row-span-4 lg:col-span-2 xl:row-span-2 xl:col-span-6">
        <DettagliPratica />
      </div>
      <div className="row-span-4 lg:col-start-3 lg:col-span-2 xl:row-start-3 xl:row-span-8">
        <Commenti />
      </div>

      <div className="row-span-7 lg:row-span-8 lg:col-span-2 lg:col-start-5 xl:col-span-2 xl:col-start-7 xl:row-span-10">
        <Steps />
      </div>
      <div className="col-span-3 lg:row-span-8 lg:col-start-7 xl:col-start-9 xl:row-span-10">
        <TableActions top={false} vertical={true} />
      </div>

      <div className="row-span-4 row-start-4 lg:row-start-5 lg:col-span-2 xl:row-start-3 xl:row-span-8">
        <StoricoFile />
      </div>
      <div className="h-full row-span-3 lg:row-span-4 row-start-5 lg:col-start-3 lg:col-span-2 xl:col-start-5 xl:row-start-3 xl:row-span-8 bg-seventh xl:hidden">
        <TabStoricoRichieste />
      </div>
      <div className="hidden h-full row-span-3 row-start-5 lg:col-start-3 lg:col-span-2 xl:col-start-5 xl:row-start-3 xl:row-span-8 bg-seventh xl:flex">
        <Storico />
      </div>
    </div>
  );
};

export default GestioneReportPage;
