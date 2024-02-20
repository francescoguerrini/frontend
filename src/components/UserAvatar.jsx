import { Avatar, Link } from "@nextui-org/react";
import anon_user from "../assets/anon_user.png";

export default function App() {
  return (
    <div className="flex flex-col text-white items-center w-[100%] gap-4">
      <div className="flex gap-2 px-1 text-black">
        <Link href="/profilo" className="cursor-pointer">
          <Avatar src={anon_user} isBordered="true" />
        </Link>
        <div className="px-1 text-[0.7rem]">
          <div>Mario Rossi</div>
          <div className="text-black">@mrossi91</div>
        </div>
      </div>
    </div>
  );
}
