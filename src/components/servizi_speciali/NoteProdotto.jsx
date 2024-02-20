import { FaUserSecret } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
const NoteProdotto = ({ nota }) => {
  return (
    <div className="flex gap-3 items-center">
      <div className="font-bold text-5xl text-slate-900">
        <FaUserSecret />
      </div>
      <div className="rounded pl-1">
        <div>Note</div>
        <div className="text-[.6rem]">{nota}</div>
      </div>
    </div>
  );
};

export default NoteProdotto;
