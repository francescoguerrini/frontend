import DatePickerInput from "../product_form/DatePickerInput";
import BaseInput from "../product_form/BaseInput";
import MultiSelectInput from "../product_form/MultiSelectInput";
import { product_options } from "../consts/product_form";

const OperazioniForm = () => {
  return (
    <form
      action=""
      className="h-full flex flex-col items-center justify-evenly bg-seventh p-4 lg:p-8 rounded-md"
    >
      <div className="flex flex-col md:flex-row gap-4 lg:gap-12 ">
        <div>
          <div className="title">Richiesta</div>
          <div className="mb-2">
            <MultiSelectInput
              label="Seleziona il Prodotto"
              item_list={product_options}
              selection_mode="single"
            />
          </div>
          <div className="flex flex-col gap-2 lg:gap-4">
            <div>
              <BaseInput label="Denominazione Richiesta" />
            </div>
            <div>
              <BaseInput label="Codice Fiscale Richiesta" />
            </div>
          </div>
        </div>
        <div>
          <div className="title">Evasione</div>
          <div className="flex flex-col gap-2 lg:gap-3">
            <DatePickerInput label="Dal" />
            <DatePickerInput label="Al" />
          </div>
        </div>
      </div>
      <div className="w-full flex gap-4 items-center justify-end pr-8">
        <button className="bg-rose-600 text-white py-1 px-2 rounded-md border border-rose-600 hover:border-rose-600 hover:bg-gradient-to-tl from-rose-300 to rose-800">
          Cancella
        </button>
        <button className="bg-rose-600 text-white py-1 px-2 rounded-md border border-rose-600 hover:border-rose-600 hover:bg-gradient-to-tl from-rose-300 to rose-800">
          Invia
        </button>
      </div>
    </form>
  );
};

export default OperazioniForm;
