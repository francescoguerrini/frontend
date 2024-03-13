import { Link } from "react-router-dom";
// import ComingSoon from "../components/ComingSoon";

const Calendario = () => {
  return (
    <div className="containerl">
      <div className="flex gap-12">
        <div className="bg-rose-700 rounded-xl px-2 py-1 text-white">
          <Link to="/password-dimenticata">
            <button>Password Dimenticata</button>
          </Link>
        </div>
        <div className="bg-rose-700 rounded-xl px-2 py-1 text-white">
          <Link to="/reimposta-password">
            <button>Reimposta Password</button>
          </Link>
        </div>
        <div className="bg-rose-700 rounded-xl px-2 py-1 text-white">
          <Link to="/password-aggiornata">
            <button>Password Aggiornata</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Calendario;
