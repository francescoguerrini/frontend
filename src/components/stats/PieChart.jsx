import { Chart as ChartJS } from "chart.js";
// è possibile importare anche Tooltip, Legend
import { Pie } from "react-chartjs-2";
import "chart.js/auto";

// Registra il componente LineChart come plugin di Chart.js
ChartJS.register({
  id: "pie-chart",
  beforeInit: function () {
    // chart, args, options possono essere specificat nelle props
    // Aggiunge il plugin nel ciclo di vita 'beforeInit'
    // In questo caso, non c'è bisogno di fare nulla di specifico
  },
});

const PieChart = () => {
  const data = {
    labels: ["Lun", "Mar", "Mer", "Gio", "Ven", "Sab", "Dom"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 7, 3, 5, 2, 0, 0],
        backgroundColor: [
          "rgba(255, 99, 132, 0.3)",
          "rgba(54, 162, 235, 0.3)",
          "rgba(255, 206, 86, 0.3)",
          "rgba(75, 192, 192, 0.3)",
          "rgba(153, 102, 255, 0.3)",
          "rgba(255, 159, 64, 0.3)",
          "rgba(79, 245, 111, 0.3)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(79, 245, 111, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <Pie data={data} />
    </div>
  );
};

export default PieChart;
