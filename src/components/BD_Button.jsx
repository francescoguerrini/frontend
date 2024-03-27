// eslint-disable-next-line react/prop-types
const BD_Button = ({ text, is_full, onClick }) => {
  const commonClasses =
    "px-2 py-1 border rounded-lg transition-all duration-300 text-tiny";

  // Classi specifiche in base al valore di is_full
  const specificClasses = is_full
    ? "bg-rose-700 text-white hover:bg-white hover:text-rose-700"
    : "bg-white text-rose-700 hover:bg-rose-700 hover:text-white border-rose-700";

  // Combinazione delle classi comuni e specifiche
  const combinedClasses = `${commonClasses} ${specificClasses}`;
  return (
    <div className="">
      <button className={combinedClasses} onClick={onClick}>
        {text}
      </button>
    </div>
  );
};

export default BD_Button;
