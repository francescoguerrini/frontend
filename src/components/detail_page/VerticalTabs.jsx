import { useState } from "react";
import GestioneReportPage from "./GestioneReportPage";
import Redazione from "./Redazione";
import Tab3 from "./Tab3";

const VerticalTabs = () => {
  const tabs = [
    {
      title: "Richiesta",
      content: <GestioneReportPage />,
    },
    { title: "Redazione", content: <Redazione /> },
    { title: "Pratiche", content: <Tab3 /> },
  ];
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="h-full w-full flex">
      <div className="flex flex-col">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => handleTabClick(index)}
            className={`p-1 text-tiny focus:outline-none transform rotate-270 origin-center rounded-md ${
              activeTab === index
                ? "bg-rose-600 text-white"
                : "bg-gray-200 text-gray-700"
            } hover:bg-rose-500 hover:text-white transition-all duration-300`}
            style={{
              writingMode: "vertical-rl",
              margin: "5px 7px",
              transform: "scale(-1)",
            }}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className="h-full w-[96%]">{tabs[activeTab].content}</div>
    </div>
  );
};

export default VerticalTabs;
