import PageL from "../components/detail_page/PageL";
import PageR from "../components/detail_page/PageR";

const Test = () => {
  return (
    <div className="h-full flex flex-col md:flex-row gap-2 mt-3 mx-1 lg:mx-6 ">
      <div className="h-full w-full rounded">
        <PageL />
      </div>
      <div className="h-full w-full rounded ">
        <PageR />
      </div>
    </div>
  );
};

export default Test;
