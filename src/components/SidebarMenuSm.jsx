import { useState } from "react";
import { Link } from "react-router-dom";
import { Tooltip } from "@nextui-org/react";
import {
  FiCalendar,
  FiPaperclip,
  FiAirplay,
  FiArrowRightCircle,
  FiFilePlus,
  FiBarChart,
  FiList,
  FiCloudLightning,
  FiZoomIn,
} from "react-icons/fi";
import UserTooltip from "./UserTooltip";
import ToggleLogSm from "./ToggleLogSm";
import linksData from "./consts/MenuItems.json";

const SidebarMenuSm = () => {
  const iconMap = {
    FiCalendar,
    FiPaperclip,
    FiAirplay,
    FiArrowRightCircle,
    FiFilePlus,
    FiBarChart,
    FiList,
    FiCloudLightning,
    FiZoomIn,
  };
  const [voiceActiveSm, setVoiceActiveSm] = useState("");
  return (
    <div className="flex flex-col text-xl items-center gap-10 transition-all duration-250">
      <div className="hover:scale-105 transition-all duration-500">
        <UserTooltip />
      </div>
      <div className="flex flex-col gap-3">
        {linksData.map((link, index) => {
          const Icon = iconMap[link.icon];
          return (
            <button
              key={index}
              onClick={() => setVoiceActiveSm(link.target)}
              className="lg:w-36"
            >
              <Tooltip
                content={link.text}
                placement="right"
                className="bg-seventh text-[#0b1a2e] lg:hidden"
              >
                <Link
                  to={link.target}
                  className={`flex items-center justify-center lg:justify-start lg:pl-2 bg-[#efefef] rounded-lg text-slate-900 p-1 lg:p-0 hover:scale-110 lg:hover:scale-105 transition-all duration-500 ${
                    voiceActiveSm === link.target
                      ? "bg-sky-200 shadow-lg scale-110 lg:scale-100 hover:scale-125 lg:hover:scale-100"
                      : ""
                  }`}
                >
                  {Icon && <Icon className="" />}
                  <span className="hidden lg:flex lg:text-[.7rem] lg:pl-2">
                    {link.text}
                  </span>
                </Link>
              </Tooltip>
            </button>
          );
        })}
      </div>
      <div>
        <ToggleLogSm />
      </div>
    </div>
  );
};

export default SidebarMenuSm;
