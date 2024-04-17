import PropTypes from "prop-types";

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

const BoxPraticheSelezionate = ({ content = lista }) => {
  return (
    <div className="border flex flex-wrap gap-x-1 text-slate-600 text-sm p-1 rounded overflow-auto max-h-16">
      <p>
        {typeof content === "string"
          ? content
          : content.map((x, index) => <span key={index}>{x}, </span>)}{" "}
      </p>
    </div>
  );
};

BoxPraticheSelezionate.propTypes = {
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
};

export default BoxPraticheSelezionate;
