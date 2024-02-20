import LineChart from "../components/stats/LineChart";
import BarChart from "../components/stats/BarChart";
import BarChart2 from "../components/stats/BarChart2";
import DoughnutChart from "../components/stats/DoughnutChart";
import DoughnutChart2 from "../components/stats/DoughnutChart2";
import PieChart from "../components/stats/PieChart";

const BD_Dashboard = () => {
  return (
    <div className="containerl flex flex-col h-full gap-2 ">
      <div className="bg-black/5 p-1 rounded-md title shadow-md">
        Statistiche
      </div>
      <div className="flex flex-col bg-seventh rounded-md p-2 w-full shadow-md">
        <div className="flex justify-between">
          <div>label</div>
          <div>select</div>
        </div>
        <div className="">
          <LineChart />
        </div>
      </div>
      <div className="flex flex-col gap-2 h-full mb-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full gap-2 flex-grow">
          <div className="bg-seventh rounded-md row-span-4 md:row-span-3 min-h-72 shadow-md">
            <BarChart />
          </div>
          <div className="bg-seventh rounded-md row-span-4 md:row-span-3 min-h-72 shadow-md">
            <DoughnutChart />
          </div>
          <div className="bg-seventh rounded-md row-span-4 md:row-span-3 min-h-72 shadow-md">
            <BarChart />
          </div>
          <div className="bg-seventh rounded-md row-span-4 md:row-span-3 min-h-72 shadow-md p-8">
            <DoughnutChart2 />
          </div>
          <div className="bg-seventh rounded-md row-span-4 md:row-span-3 min-h-72 shadow-md p-8">
            <BarChart2 />
          </div>
          <div className="bg-seventh rounded-md row-span-4 md:row-span-3 min-h-72 shadow-md p-8">
            <PieChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BD_Dashboard;
