import Select from "react-select";
import { products } from "../consts/products";
import PropTypes from "prop-types";

export default function SelectWithSearch({ onProductSelect, onSetNote }) {
  const options = products.map((product) => ({
    value: product.value,
    label: product.label,
    note: product.note,
  }));

  const handleSelectChange = (selectedOption) => {
    onProductSelect(selectedOption.value);
    onSetNote(selectedOption.note); // Imposta la nota associata
  };

  return (
    <div className="w-full">
      <Select
        options={options}
        placeholder="Scegli un prodotto"
        onChange={handleSelectChange}
      />
    </div>
  );
}

SelectWithSearch.propTypes = {
  onProductSelect: PropTypes.func,
  onSetNote: PropTypes.func,
};
