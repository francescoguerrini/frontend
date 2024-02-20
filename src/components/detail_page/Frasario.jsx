import { FiCopy } from "react-icons/fi";

const Frasario = () => {
  const suggerimenti = [
    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperi",
    "Lorem ipsum ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo invenSed ut perspiciatis unde omnis iste natus, totam rem aperiam eaque ipsa, quae ab illo inven",
    "Sed ut perspiciatis error sit voluptatem accusantium doloremque laudantium, totam rem, quae ab illo invenSed ut natus error sit voluptatem laudantium, totam rem ipsa, quae ab illo inven",
    "Lorem ipsum ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque error sit voluptatem accusantium doloremque laudantium",
    "Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit, amet, consectetur, adipisci velit, sed quia non",
    "Lorem ipsum ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque Sed ut perspiciatis",
    "Sed ut perspiciatis error sit voluptatem perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque Sed ut perspiciatis",
  ];
  return (
    <div className="h-full overflow-auto">
      <div className="font-semibold">Frasario</div>
      <div className="flex flex-col gap-1 md:max-h-40 lg:max-h-96">
        {suggerimenti.map((sugg, index) => (
          <div
            key={index}
            className="border border-slate-300 rounded p-1 bg-slate-100 text-[.7rem] lg:text-tiny flex"
          >
            {sugg}
            <span className="text-rose-900">
              <button className="p-[3px] rounded hover:bg-slate-600 hover:text-white">
                <FiCopy />
              </button>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Frasario;
