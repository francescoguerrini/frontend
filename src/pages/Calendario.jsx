import ComingSoon from "../components/ComingSoon";
import calendario from "../assets/calendario.png";

const Calendario = () => {
  return (
    <div className="containerl">
      <div className="h-full w-full flex justify-center items-center">
        <ComingSoon image_src={calendario} width="720" />
      </div>
    </div>
  );
};

export default Calendario;
