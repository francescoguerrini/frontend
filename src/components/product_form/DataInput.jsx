import { useState } from "react";
import PropTypes from "prop-types";

const DataInput = ({ placeholder, value, onChange, name }) => {
  const [codiceFiscale, setCodiceFiscale] = useState("");
  const [error, setError] = useState("");

  const validateCodiceFiscale = (value) => {
    const cfRegex = /^[A-Z]{6}\d{2}[A-Z]\d{2}[A-Z]\d{3}[A-Z]$/i;
    if (cfRegex.test(value)) {
      setError("");
      return true;
    } else {
      setError("Codice Fiscale non valido.");
      return false;
    }
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setCodiceFiscale(value.toUpperCase());
    if (value) {
      validateCodiceFiscale(value);
    } else {
      setError("");
    }
  };

  return (
    <div className="flex flex-col">
      <label htmlFor="codiceFiscale" className="label block text-gray-700">
        Codice Fiscale
      </label>
      <input
        id="codiceFiscale"
        className="shadow appearance-none border rounded w-full py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline pl-2"
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
        maxLength="16"
      />
      {error && <p className="text-rose-700 text-xs italic">{error}</p>}
    </div>
  );
};

// label, placeholder, value, onChange, name

DataInput.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  name: PropTypes.string,
};

export default DataInput;
