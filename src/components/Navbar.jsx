import NavCard from "./NavCard";

const Navbar = () => {
  const test = [
    { value: "10", text: "15", label: "Lavorati oggi" },
    { value: "45", text: "48", label: "Questa settimana" },
    { value: "154", text: "164", label: "Questo mese" },
    { value: "495", text: "522", label: "Quest'anno" },
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
