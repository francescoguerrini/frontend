import { useState } from "react";
import PropTypes from "prop-types";
import BaseInput from "./BaseInput_2";
import testForm from "./testForm2";
import MultiSelectInput from "./MultiSelectInput";
import { province } from "../consts/product_form";

const MyForm = ({ width = "2/3" }) => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    // Per i checkbox, usa 'checked' invece di 'value'
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormData({});
  };

  const form = testForm;

  return (
    <div className={`p-1 w-full h-full mb-4 w-${width}`}>
      <form className="h-full flex flex-col gap-1" onSubmit={handleSubmit}>
        <div className="h-full w-full grid grid-cols-2 gap-x-6">
          {/* Assicurati che ogni componente di input abbia un 'name' e passa handleChange come 'onChange' */}
          {form.map((field, index) => (
            <BaseInput
              key={index}
              label={field.label}
              type={field.type}
              name={field.name}
              value={formData[field.name] || ""}
              onChange={handleChange}
            />
          ))}
          <MultiSelectInput
            selection_mode="single"
            item_list={province}
            label="Provincia"
          />
        </div>
        <div className="flex my-2">
          <button
            type="submit"
            className="bg-rose-700 text-white px-4 py-1 rounded-md"
          >
            Invia
          </button>
        </div>
      </form>
    </div>
  );
};

MyForm.propTypes = {
  width: PropTypes.string,
};

export default MyForm;
