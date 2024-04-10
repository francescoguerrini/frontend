import { useState } from "react";

const FilterSelector = ({ onFilterChange }) => {
  const options = [
    { label: "all", value: "Tutti" },
    { label: "name", value: "Operatore" },
    { label: "team", value: "Responsabile" },
    { label: "role", value: "Cliente" },
    { label: "email", value: "Prodotto" },
  ];
  const [active, setActive] = useState("");

  const handleFilterOption = (label) => {
    setActive(label);
    onFilterChange(label);
  };

  return (
    <div className="w-full flex items-center gap-1">
      Criterio di ricerca
      {options.map((option, index) => (
        <button
          key={index}
          onClick={() => handleFilterOption(option.label)} // Passa una funzione di callback
          className={`text-slate-900 text-[.7rem] p-[.1rem] rounded-lg  cursor-pointer hover:bg-slate-300 ${
            active === option.label ? "bg-sky-200" : "bg-slate-200"
          }`}
        >
          {option.value}
        </button>
      ))}
    </div>
  );
};

export default FilterSelector;
