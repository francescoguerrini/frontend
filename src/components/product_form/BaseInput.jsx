import PropTypes from "prop-types";

const BaseInput = ({ label, placeholder, value, onChange, name }) => {
  return (
    <div className="flex flex-col">
      <label className="label block text-gray-700">{label}</label>
      <input
        className="shadow appearance-none border rounded w-full py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline pl-2 "
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
      />
    </div>
  );
};

BaseInput.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string, // Definisci la prop come stringa
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default BaseInput;
