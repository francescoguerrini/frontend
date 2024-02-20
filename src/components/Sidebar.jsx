import { Image, Link } from "@nextui-org/react";
import SidebarMenuSm from "./SidebarMenuSm";
// import SidebarMenu from "./SidebarMenu";
import logo from "../assets/BD_logo.png";

const Sidebar = () => {
  return (
    <div className="h-screen w-full flex flex-col">
      <div className="flex items-center justify-center my-4">
        <Link href="/">
          <Image
            width={70}
            alt="NextUI hero Image"
            src={logo}
            className="rounded-md bg-white custom-shadow"
          />
        </Link>
      </div>
      <div className="flex-grow flex flex-col items-center">
        <SidebarMenuSm />
      </div>
      {/* <div className="flex flex-col flex-grow gap-12 items-center justify-center">
        <SidebarMenu />
      </div> */}
    </div>
  );
};

export default Sidebar;
