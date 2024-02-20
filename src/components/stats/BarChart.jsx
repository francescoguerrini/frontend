import { Chart as ChartJS, BarElement } from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import PERFORMANCE_OPERATORE from "./data";
import PropTypes from "prop-types";

ChartJS.register(BarElement);

const BarChart = ({ height, width }) => {
  return (
    <div className="w-[98%] h-[98%] flex items-center justify-center">
      <Bar
        height={height}
        width={width}
        data={{
          labels: PERFORMANCE_OPERATORE.map((data) => data.nome),
          datasets: [
            {
              label: "Assegnate",
              data: PERFORMANCE_OPERATORE.map((data) => data.praticheAssegnate),
            },
            {
              label: "Evase",
              data: PERFORMANCE_OPERATORE.map(
                (data) => data.praticheConsegnate
              ),
            },
          ],
        }}
        options={{
          maintainAspectRatio: false, // Imposta questa opzione su false
          responsive: true, // Assicura che il grafico sia responsive
        }}
      />
    </div>
  );
};

BarChart.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
  PERFORMANCE_OPERATORE: PropTypes.array, // Aggiunta della validazione per PERFORMANCE_OPERATORE
};

export default BarChart;
