import { useState } from "react";
import axios from "axios";

const useEngineCall = (url, entry) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [response, setResponse] = useState(null);

  const callApi = async (url, entry) => {
    setIsLoading(true);
    setError(null);
    setResponse(null);

    const payload = {
      parameters: {
        denominazione: entry,
      },
      function_name: "RicercaAnagrafica",
      email: "rafael.marchioli@businessdefence.it",
      send_email_notification: true,
    };

    try {
      const response = await axios.post(url, payload);
      setResponse(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, error, response, callApi };
};

export default useEngineCall;
