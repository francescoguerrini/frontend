import { Image } from "@nextui-org/react";
import comingsoon from "../assets/ComingSoon.svg";

export default function ComingSoon() {
  return (
    <div className="h-full w-full flex items-center justify-center">
      <Image width={210} alt="NextUI hero Image" src={comingsoon} />
    </div>
  );
}
