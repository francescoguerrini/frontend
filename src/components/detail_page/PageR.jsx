import { useState } from "react";
import TextArea from "./TextArea";
import Actions from "./Actions";
import Frasario from "./Frasario";

const PageR = () => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div className="h-full flex flex-col gap-2">
      <div className="h-1/6 bg-seventh shadow-md flex md:flex-col items-center rounded-md">
        <Actions />
      </div>
      <div className="h-full w-full flex flex-col lg:flex-row gap-2">
        <div className="h-full flex items-center justify-center rounded shadow-md flex-grow">
          <TextArea
            id="myTextarea"
            placeholder="Redazione veloce..."
            value={value}
            onChange={handleChange}
            className="text-slate-800 shadow-xl" // Puoi personalizzare ulteriormente qui
          />
        </div>
        <div className="h-1/2 md:h-full w-full lg:w-1/2 bg-seventh rounded p-1">
          <Frasario />
        </div>
      </div>

      <div className="h-10 bg-white rounded flex items-center justify-end p-4 shadow-md">
        <button className="bg-rose-700 text-white hover:bg-white hover:text-rose-700 p-1 rounded border hover:border-rose-700">
          Procedi
        </button>
      </div>
    </div>
  );
};

export default PageR;
