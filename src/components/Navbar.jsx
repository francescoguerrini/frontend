import NavCard from "./NavCard";

const Navbar = () => {
  const test = [
    { value: "10", text: "15", label: "Giorno" },
    { value: "45", text: "48", label: "Settimana" },
    { value: "154", text: "164", label: "Mese" },
    { value: "495", text: "522", label: "Anno" },
  ];
  return (
    <div className="flex xl:mx-[3%] gap-2 sm:gap-4 grid-cols-2 sm:grid-cols-4 md:flex items-center justify-between mb-5">
      {test.map((x) => (
        <NavCard
          key={x.index}
          value={x.value}
          text={x.text}
          label={x.label}
          maxValue={x.text}
        />
      ))}
    </div>
  );
};

export default Navbar;
