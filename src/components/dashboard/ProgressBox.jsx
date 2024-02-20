import { Progress } from "@nextui-org/react";
import PropTypes from "prop-types";

const ProgressBox = () => {
  return (
    <div className="flex flex-col gap-3 px-2 drop-shadow-lg">
      <Progress
        label="Assegnate"
        value={70}
        classNames={{
          indicator: "bg-gradient-to-l from-sky-300 to-sky-500",
          label: "tracking-wider font-small text-slate-800",
        }}
        color="secondary"
      />
      <Progress
        label="Evase"
        value={35}
        classNames={{
          indicator: "bg-gradient-to-l from-sky-300 to-sky-500",
          label: "tracking-wider font-small text-slate-800",
        }}
      />
    </div>
  );
};

ProgressBox.propTypes = {
  label: PropTypes.string,
  value: PropTypes.number,
};

export default ProgressBox;
