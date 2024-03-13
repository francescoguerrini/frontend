import Sidebar from "./Sidebar";

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  return (
    <div className="flex h-screen w-screen">
      <div className="w-1/6 transition-all lg:flex lg:flex-grow lg:items-center lg:justify-center border-r lg:w-44 xl:w-52">
        <Sidebar />
      </div>
      <div className="flex flex-grow flex-col w-screen overflow-y-scroll mb-2">
        {children}
      </div>
    </div>
  );
};

export default Layout;
