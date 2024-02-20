import WorkTable from "../components/dashboard/WorkTable";
import ProgressBox from "../components/dashboard/ProgressBox";
import TabsBox from "../components/dashboard/TabsBox";
import BarChart from "../components/stats/BarChart";
import CalendarCard from "../components/dashboard/CalendarCard";
import Navbar from "../components/Navbar";

const Dashboard = () => {
  const mycon = ">>";
  return (
    <div className="containerl h-full flex flex-col gap-2">
      <div className="">
        <Navbar />
      </div>
      <div className="h-full grid grid-cols-10 gap-2">
        <div className="bg-seventh shadow-md col-span-5 rounded-md min-h-72 flex flex-col gap-1 p-1">
          <div className="flex justify-between">
            <p className="label pl-2">Ultime lavorazioni</p>
            <p className="label px-2 cursor-pointer hover:text-[#E53E46]">
              {mycon} Vedi Tabella
            </p>
          </div>
          <WorkTable />
        </div>
        <div className=" shadow-md col-span-5 rounded-md h-full flex flex-col gap-1">
          <div className="h-1/2 bg-seventh rounded-md flex flex-col p-1">
            <div>
              <p className="label">Messaggi</p>
            </div>
            <TabsBox />
          </div>
          <div className="h-1/2 bg-seventh rounded-md flex flex-col p-1">
            <div>
              <p className="label">Stato pratiche</p>
            </div>
            <ProgressBox />
          </div>
        </div>
        <div className="bg-seventh shadow-md col-span-3 rounded-md h-full ">
          <BarChart />
        </div>
        <div className="shadow-md col-span-4 rounded-md h-full min-h-72 flex flex-col gap-1 bg-seventh py-1 overflow-auto">
          <div className="label pl-1">Prosssimi impegni</div>
          <CalendarCard />
        </div>
        <div className="bg-seventh shadow-md col-span-3 rounded-md h-full min-h-72">
          <BarChart />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
