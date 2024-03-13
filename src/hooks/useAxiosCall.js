import { useState } from "react";

import axios from "axios";

const useAxiosCall = () => {
  const [responseMessage, setResponseMessage] = useState(null);

  const makeApiCall = async (url, formData) => {
    console.log("formData :", formData);
    try {
      const response = await axios.post(url, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      setResponseMessage(response.status); // Adatta questa parte in base alla struttura del tuo oggetto di risposta
    } catch (error) {
      // Puoi gestire gli errori qui
      console.error("Errore nella chiamata API:", error);
      setResponseMessage("Errore nella chiamata API");
    }
  };

  return { responseMessage, makeApiCall };
};

export default useAxiosCall;
