import { Chart as ChartJS, ArcElement } from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";
import PERFORMANCE_OPERATORE from "./data";
import PropTypes from "prop-types";

ChartJS.register(ArcElement);

const DoughnutChart2 = ({ height, width }) => {
  return (
    <div className="max-w-[98%]  h-[98%] flex items-center justify-center">
      <Doughnut
        height={height}
        width={width}
        data={{
          labels: PERFORMANCE_OPERATORE.map((data) => data.nome),
          datasets: [
            {
              label: "Totali",
              data: PERFORMANCE_OPERATORE.map((data) => data.praticheAssegnate),
              backgroundColor: ["#0764f5", "#88b3f7", "#679ef5", "#4689f2"],
            },
          ],
        }}
      />
    </div>
  );
};

DoughnutChart2.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
};

export default DoughnutChart2;
