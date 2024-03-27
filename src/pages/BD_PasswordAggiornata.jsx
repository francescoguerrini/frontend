import { Link } from "react-router-dom";
import PageTitle from "../components/PageTitle";

const BD_PasswordAggiornata = () => {
  return (
    <div className="containerl">
      <div className="h-full w-full flex flex-col gap-3">
        <PageTitle title="Aggiornamento Completato" />
        <div className="bg-black/5 rounded-md h-full flex justify-center items-center">
          <div className="py-2 flex flex-col gap-8 w-1/2">
            <div className="text-2xl">
              La tua password è stata modificata con successo!
            </div>
            <div>
              Torna al{" "}
              <span className="text-sky-600">
                {" "}
                <Link to="/login">Login</Link>{" "}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BD_PasswordAggiornata;
