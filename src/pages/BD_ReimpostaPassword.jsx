import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAxiosCall from "../hooks/useAxiosCall";
import PageTitle from "../components/PageTitle";
import BaseInput from "../components/product_form/BaseInput_2";

const PASSWORD_RESET_URL = "http://localhost:8000/api/password-reset/";

const BD_ReimpostaPassword = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [otpToken, setOtpToken] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { responseMessage, makeApiCall } = useAxiosCall();
  const navigate = useNavigate();

  const handleUserChange = (e) => {
    setUser(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleOtpTokenChange = (e) => {
    setOtpToken(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      user,
      password,
      confirm_password: confirmPassword,
      otp_token: otpToken,
    };
    console.log(payload);

    await makeApiCall(PASSWORD_RESET_URL, payload);
    if (responseMessage) {
      setErrorMessage(responseMessage);
    }
    setUser("");
    setPassword("");
    setConfirmPassword("");
    setOtpToken("");
  };

  useEffect(() => {
    if (responseMessage === 200) {
      navigate("/password-aggiornata");
    } else {
      if (responseMessage && responseMessage !== 200) {
        setErrorMessage(responseMessage);
      }
    }
  }, [responseMessage, navigate]);

  return (
    <div className="containerl">
      <div className="h-full w-full flex flex-col gap-3">
        <PageTitle title="Reimposta Password" />
        <form
          onSubmit={handleSubmit}
          className="bg-black/5 rounded-md h-full justify-evenly items-center flex flex-col"
        >
          <div className="text-2xl">Crea una nuova password</div>
          <div className="py-2 flex flex-col gap-6 w-1/2">
            <div>
              <BaseInput
                label="Inserisci il nome utente"
                value={user}
                onChange={handleUserChange}
              />
            </div>
            <div>
              <BaseInput
                label="Inserisci la nuova password"
                type="password"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
            <div>
              <BaseInput
                label="Conferma la nuova password"
                type="password"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
              />
            </div>
            <div>
              <BaseInput
                label="Inserisci il codice OTP ricevuto via email"
                value={otpToken}
                onChange={handleOtpTokenChange}
              />
            </div>
            {errorMessage && <div className="text-red-500">{errorMessage}</div>}
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-rose-700 text-white px-8 py-1 rounded-md hover:bg-white hover:text-rose-700"
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

export default BD_ReimpostaPassword;
