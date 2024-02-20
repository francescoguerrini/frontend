import React from "react";
import {
  CircularProgress,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Chip,
} from "@nextui-org/react";
import PropTypes from "prop-types";

const NavCard = ({ value, text, label, maxValue }) => {
  return (
    <Card className="bg-gradient-to-b from-sky-200/90 via-zinc-400 to-slate-600 shadow-2xl border border-stone-400 w-36 hover:scale-105">
      <CardHeader>
        <div className="text-sky-950 text-sm">{label}</div>
      </CardHeader>
      <CardBody className="items-center py-0">
        <CircularProgress
          classNames={{
            svg: "w-14 h-14 drop-shadow-md",
            indicator: "stroke-white",
            track: "stroke-white/10",
            value: "text-md font-semibold text-white",
          }}
          value={value}
          strokeWidth={4}
          formatOptions={{}}
          showValueLabel={true}
          maxValue={maxValue} // Aggiungiamo il prop maxValue
        />
      </CardBody>
      <CardFooter className="justify-center items-center">
        <Chip
          classNames={{
            base: "border-1 border-white/30",
            content: "text-white text-small font-semibold",
          }}
          variant="bordered"
        >
          / {text}
        </Chip>
      </CardFooter>
    </Card>
  );
};

NavCard.propTypes = {
  value: PropTypes.number,
  text: PropTypes.string,
  label: PropTypes.string,
  maxValue: PropTypes.number, // Aggiungiamo la prop maxValue
};

export default NavCard;
