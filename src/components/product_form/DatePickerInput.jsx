import { useState } from "react";
import DatePicker from "react-datepicker";
import { FiCalendar } from "react-icons/fi";
import "react-datepicker/dist/react-datepicker.css";
import PropTypes from "prop-types";

function MyDatePicker({ label = "Data di Nascita" }) {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div>
      <div className="flex">
        <span>
          <FiCalendar />
        </span>{" "}
        <span className="label pl-1">{label}</span>
      </div>
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="dd/MM/yyyy" // Formato completo della data
        showYearDropdown // Mostra un menu a discesa per gli anni
        scrollableYearDropdown // Rendi il menu a discesa degli anni scorrevole
        yearDropdownItemNumber={70} // Imposta il numero di anni visualizzati nel menu a discesa
        className="p-1 border rounded-md shadow-md"
      />
    </div>
  );
}
MyDatePicker.propTypes = {
  label: PropTypes.string,
};

export default MyDatePicker;
