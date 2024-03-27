import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importa useNavigate da React Router

import axios from "axios";

const useLinkCheck = () => {
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Ottieni la funzione navigate da React Router

  const handleLinkClick = async (url) => {
    try {
      const response = await axios.post("/check_link/", { url });
      if (response.data === true) {
        navigate(url); // Naviga all'URL del link se la risposta è true
      } else {
        setError("Il link non è valido");
      }
    } catch (error) {
      console.error("Errore durante la richiesta al backend:", error);
      setError("Errore durante la richiesta al backend");
    }
  };

  return { handleLinkClick, error };
};

export default useLinkCheck;
