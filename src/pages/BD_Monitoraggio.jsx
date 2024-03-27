import { Image } from "@nextui-org/react";
import PageTitle from "../components/PageTitle";
import monitoraggio1 from "../assets/monitoraggio1.png";
import monitoraggio2 from "../assets/monitoraggio2.png";

const Monitoraggio = () => {
  return (
    <div className="containerl">
      <PageTitle title="Monitoraggio" />
      <div className="h-full w-full flex flex-col gap-1 items-center ">
        <Image src={monitoraggio1} width={720} className="rounded-none" />
        <Image src={monitoraggio2} width={720} className="rounded-none" />
      </div>
    </div>
  );
};

export default Monitoraggio;
