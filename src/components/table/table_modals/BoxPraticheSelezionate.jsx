import PropTypes from "prop-types";
import { useSelector } from "react-redux";

const lista = [
  "Felice Lope De Vega",
  "Marzio Della Valle",
  "Mario Maria Marconi",
  "Ugo Tognazzi",
  "Sangiorgio Acremano",
  "Mirko Fusetti",
  "Gennaro Brambilla",
  "Stefano Stefanini",
  "Farinata Degli Uberti",
  "Piero Della Francesca",
  "Mauro Mariotti",
  "Ernesto Che Guevara",
  "Pierfilippo Arminio",
];

const BoxPraticheSelezionate = () => {
  const rows = useSelector((state) => state.selectedRows);
  // {Array.isArray(keys) &&
  //   keys.map((key, index) => <div key={index}> {key}</div>)}
  return (
    <div className="border flex flex-wrap gap-x-1 text-slate-600 text-sm p-1 rounded overflow-auto max-h-16">
      <div>Pratiche Selezionate</div>
      <p>
        {typeof rows === "string"
          ? rows
          : rows.map((row, index) => <span key={index}>{row}, </span>)}{" "}
      </p>
    </div>
  );
};

BoxPraticheSelezionate.propTypes = {
  practice_list: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.any),
  ]),
};

export default BoxPraticheSelezionate;
