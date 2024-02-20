import { Chart as ChartJS, BarElement } from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import PERFORMANCE_OPERATORE from "./data";
import PropTypes from "prop-types";

ChartJS.register(BarElement);

const BarChart2 = ({ height, width }) => {
  return (
    <div className="w-[98%]  h-[98%]">
      <Bar
        height={height}
        width={width}
        data={{
          labels: PERFORMANCE_OPERATORE.map((data) => data.nome),
          datasets: [
            {
              label: "Assegnate",
              data: PERFORMANCE_OPERATORE.map((data) => data.praticheAssegnate),
              backgroundColor: "rgba(113, 222, 229, 0.8)",
            },
            {
              label: "Consegnate",
              data: PERFORMANCE_OPERATORE.map(
                (data) => data.praticheConsegnate
              ),
              backgroundColor: "#6ba4ff",
            },
          ],
        }}
        options={{
          maintainAspectRatio: false, // Imposta questa opzione su false
          responsive: true, // Assicura che il grafico sia responsive
          indexAxis: "y",
        }}
      />
    </div>
  );
};

BarChart2.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
};

export default BarChart2;
