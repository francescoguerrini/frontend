import PropTypes from "prop-types";
const TextArea = ({ id, placeholder, value, onChange, className }) => {
  return (
    <textarea
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`resize-none shadow-sm w-full h-full sm:text-sm rounded ${className}`}
    />
  );
};

TextArea.propTypes = {
  id: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  className: PropTypes.string,
};

TextArea.defaultProps = {
  placeholder: "",
  className: "",
};

export default TextArea;
