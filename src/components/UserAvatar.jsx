import { Avatar, Link } from "@nextui-org/react";
import anon_user from "../assets/anon_user.png";

export default function App() {
  return (
    <div className="h-full w-full flex text-white items-center py-2">
      <div className="flex gap-2 px-1 text-black">
        <Link href="/profilo" className="cursor-pointer">
          <Avatar src={anon_user} isBordered="true" />
        </Link>
        <div className="text-[0.7rem] flex items-center">
          <div>Mario Rossi</div>
        </div>
      </div>
    </div>
  );
}
