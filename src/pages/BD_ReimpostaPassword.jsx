import PageTitle from "../components/PageTitle";
// import { useState } from "react";
import BaseInput from "../components/product_form/BaseInput_2";

const BD_ReimpostaPassword = () => {
  return (
    <div className="containerl">
      <div className="h-full w-full flex flex-col gap-3">
        <PageTitle title="Reimposta Password" />
        <div className="bg-black/5 rounded-md h-full justify-evenly items-center flex flex-col">
          <div className="text-2xl">Crea una nuova password</div>
          <div className="py-2 flex flex-col gap-6 w-1/2">
            <div>
              <BaseInput label="Inserisci la nuova password" />
            </div>
            <div>
              <BaseInput label="Conferma la nuova password" />
            </div>
            <div>
              <BaseInput label="Inserisci il codice OTP ricevuto via email" />
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-rose-700 text-white px-8 py-1 rounded-md hover:bg-white hover:text-rose-700"
              >
                Invia
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BD_ReimpostaPassword;
