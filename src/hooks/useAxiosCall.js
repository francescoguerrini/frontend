import { useState } from "react";
import axios from "axios";

const useAxiosCall = () => {
  const [responseMessage, setResponseMessage] = useState({
    status: null,
    message: null,
  });

  const makeApiCall = async (url, formData) => {
    try {
      const response = await axios.post(url, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      // Imposta status e message
      setResponseMessage({
        status: response.status,
        message: response.data.message,
      });
      console.log(responseMessage);
    } catch (error) {
      // Gestione errori
      console.error("Errore nella chiamata API:", error.message);
      // Imposta responseMessage come oggetto con status e message dell'errore
      setResponseMessage({
        status: error.response.status,
        message: error.response.data.message,
      });
      console.log(responseMessage, "qui");
    }
  };

  return { responseMessage, makeApiCall };
};

export default useAxiosCall;
