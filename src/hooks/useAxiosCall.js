import { useState } from "react";

import axios from "axios";

const useAxiosCall = () => {
  const [responseMessage, setResponseMessage] = useState(null);

  const makeApiCall = async (url, formData) => {
    try {
      const response = await axios.post(url, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      setResponseMessage(response.message); //
    } catch (error) {
      // Puoi gestire gli errori qui
      console.error("Errore nella chiamata API:", error.message);
      setResponseMessage(error.status);
      console.log(responseMessage, "qui");
    }
  };

  return { responseMessage, makeApiCall };
};

export default useAxiosCall;
