import { Chart as ChartJS } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import revenue from "./revenueData.json";

// Registra il componente LineChart come plugin di Chart.js
ChartJS.register({
  id: "line-chart",
  beforeInit: function () {
    // chart, args, options possono essere specificat nelle props
    // Aggiunge il plugin nel ciclo di vita 'beforeInit'
    // In questo caso, non c'è bisogno di fare nulla di specifico
  },
});

const LineChart = () => {
  return (
    <div className="aspect-auto">
      <Line
        data={{
          labels: revenue.map((data) => data.label),
          datasets: [
            {
              label: "2023",
              data: revenue.map((data) => data.revenue),
              backgroundColor: "#064FF0",
              borderColor: "#064FF0",
            },
            {
              label: "2024",
              data: revenue.map((data) => data.cost),
              backgroundColor: "#ED1C24",
              borderColor: "#ED1C24",
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

export default LineChart;
