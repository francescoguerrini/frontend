import Steps from "./Steps";
import TableActions from "../table/TableActions";
import DettagliPratica from "./DettagliPratica";
import StoricoFile from "./StoricoFile";
import Storico from "./Storico";
import Commenti from "./Commenti";
import TabStoricoRichieste from "./TabStoricoRichieste";

const GestioneReportPage = () => {
  return (
    <div className="h-full w-full rounded-md custom-grid">
      <div className="grid-item-1">
        <DettagliPratica />
      </div>
      <div className="grid-item-3">
        <Commenti />
      </div>

      <div className="grid-item-5">
        <Steps />
      </div>
      <div className="grid-item-6">
        <TableActions top={false} vertical={true} />
      </div>

      <div className="grid-item-2">
        <StoricoFile />
      </div>
      <div className="grid-item-7">
        <TabStoricoRichieste />
      </div>
      <div className="grid-item-4">
        <Storico />
      </div>
    </div>
  );
};

export default GestioneReportPage;
