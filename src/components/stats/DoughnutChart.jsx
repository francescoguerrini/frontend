import { Chart as ChartJS, ArcElement } from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";
import PERFORMANCE_OPERATORE from "./data";
import PropTypes from "prop-types";

ChartJS.register(ArcElement);

const DoughnutChart = ({ height, width }) => {
  return (
    <div className="max-w-[98%] h-[98%] flex items-center justify-center">
      <Doughnut
        height={height}
        width={width}
        data={{
          labels: PERFORMANCE_OPERATORE.map((data) => data.nome),
          datasets: [
            {
              label: "Assegnate",
              data: PERFORMANCE_OPERATORE.map((data) => data.praticheAssegnate),
              backgroundColor: [
                "rgba(43, 63, 229, 0.8)",
                "rgba(113, 222, 229, 0.8)",
                "rgba(12, 135, 135, 0.8)",
                "rgba(112, 111, 33, 0.8)",
              ],
            },
          ],
        }}
      />
    </div>
  );
};

DoughnutChart.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
};

export default DoughnutChart;
