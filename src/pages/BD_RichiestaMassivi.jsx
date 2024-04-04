import SSpeciali from "../components/servizi_speciali/SSpeciali";
import PageTitle from "../components/PageTitle";

const ServiziSpeciali = () => {
  return (
    <div className="flex flex-col items-center justify-center containerl">
      <div className="w-[100%]">
        <PageTitle title="Richiesta Massivi" />
      </div>

      <SSpeciali />
    </div>
  );
};

export default ServiziSpeciali;
