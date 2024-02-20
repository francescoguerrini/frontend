import { useState } from "react";
import { BsCaretDownFill, BsCaretUpFill } from "react-icons/bs";
import PropTypes from "prop-types";

const CalendarCard = () => {
  const eventi = [
    {
      titolo: "Riunione Produzione",
      orario: "Oggi, 14:00",
      partecipanti: [
        "Deborah Repossi",
        "Giulia Eredia",
        "Valentina Guanziroli",
        "Augusto Paleari",
        "Rosita Cecchetelli",
      ],
    },
    {
      titolo: "Smart Working",
      orario: "Domani, Tutto il giorno",
      partecipanti: [],
    },
    {
      titolo: "Riunione Produzione",
      orario: "Giovedì, 15:00",
      partecipanti: [
        "Chiara Carrara",
        "Susanna Dossi",
        "Pietro Qualcosa",
        "L'altro Nuovo",
        "Rosita Cecchetelli",
      ],
    },
    {
      titolo: "Smart Working",
      orario: "Venerdì, Tutto il giorno",
      partecipanti: [],
    },
  ];

  const [aperti, setAperti] = useState(eventi.map(() => false));

  const toggleApertura = (index) => {
    const nuoviAperti = [...aperti];
    nuoviAperti[index] = !nuoviAperti[index];
    setAperti(nuoviAperti);
  };

  return (
    <div className="bg-seventh h-full rounded-md p-1 flex flex-col justify-center gap-1">
      {eventi.map((e, index) => (
        <div className="flex flex-col" key={index}>
          <div className="py-1 flex justify-between border hover:bg-sky-100 px-2 text-slate-900 items-center rounded">
            <div className="text-sm">
              <span className="font-semibold">{e.titolo}</span>
              <span className="text-[.8rem]"> - {e.orario}</span>
            </div>

            <div>
              {aperti[index] ? (
                <BsCaretUpFill
                  className="cursor-pointer"
                  onClick={() => toggleApertura(index)}
                />
              ) : (
                <BsCaretDownFill
                  className="cursor-pointer"
                  onClick={() => toggleApertura(index)}
                />
              )}
            </div>
          </div>
          <div
            className={`p-1 transition-all duration-300 ${
              aperti[index]
                ? "max-h-96 opacity-100 bg-sky-100"
                : "max-h-0 opacity-0 overflow-hidden"
            }`}
          >
            {e.partecipanti.length > 0 ? (
              <p>
                Partecipanti:{" "}
                <span className="text-tiny">{e.partecipanti.join(", ")}</span>
              </p>
            ) : (
              <p>Solo tu</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

CalendarCard.propTypes = {
  eventi: PropTypes.arrayOf(
    PropTypes.shape({
      titolo: PropTypes.string,
      orario: PropTypes.string,
      partecipanti: PropTypes.arrayOf(PropTypes.string),
    })
  ),
};

export default CalendarCard;
