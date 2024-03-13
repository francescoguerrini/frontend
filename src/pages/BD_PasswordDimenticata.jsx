import { useState, useEffect } from "react";
import BaseInput from "../components/product_form/BaseInput_2";
import PageTitle from "../components/PageTitle";
import useAxiosCall from "../hooks/useAxiosCall";

const PASSWORD_RESET_URL = "http://localhost:8000/api/password-reset/";

const BD_PasswordDimenticata = () => {
  const [credential, setCredential] = useState("");
  const { responseMessage, makeApiCall } = useAxiosCall();

  const handleCredentialChange = (e) => {
    setCredential(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({ credenziali: credential });
    const payload = { credenziali: credential };
    await makeApiCall(PASSWORD_RESET_URL, payload);
    console.log("Risposta del server handle:", responseMessage);
    setCredential("");
  };

  useEffect(() => {
    console.log("Risposta del server effect:", responseMessage);
  }, [responseMessage]);

  return (
    <div className="containerl">
      <div className="h-full w-full flex flex-col gap-3">
        <PageTitle title="Recupera la tua Password" />
        <form
          onSubmit={handleSubmit}
          className="bg-black/5 rounded-md h-full flex justify-evenly items-center"
        >
          <div onSubmit={handleSubmit} className="flex flex-col w-1/2 gap-8">
            <div className="text-2xl">Password dimenticata?</div>
            <div className="text-sm text-slate-800 w-[85%]">
              * Inserisci l&apos;email o il tuo nome utente. Invieremo un codice
              OTP all&apos;indirizzo email associato al tuo account con cui
              potrai reimpostare la pasword.
            </div>
          </div>
          <div className="w-[42%] flex flex-col gap-8">
            <div className="">
              <BaseInput
                label="Inserisci le tue credenziali"
                type="text"
                placeholder=""
                value={credential}
                onChange={handleCredentialChange}
                name=""
              />
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-rose-700 text-white px-8 py-1 rounded-md "
              >
                Invia
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BD_PasswordDimenticata;
