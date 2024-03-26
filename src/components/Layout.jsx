import { useLocation } from "react-router-dom"; // Importa useLocation da React Router
import PropTypes from "prop-types"; // Importa PropTypes
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  const location = useLocation(); // Ottieni il percorso corrente

  // Controlla se il percorso corrente corrisponde a una delle pagine che richiedono la sidebar nascosta
  const hideSidebarPages = [
    "/login/",
    "/password-dimenticata",
    "/password-aggiornata",
    "/reimposta-password",
  ];
  const shouldHideSidebar = hideSidebarPages.includes(location.pathname);

  return (
    <div className="flex h-screen w-screen">
      {/* Se non è una delle pagine che richiedono la sidebar nascosta, renderizza la sidebar */}
      {!shouldHideSidebar && (
        <div className="w-1/6 transition-all lg:flex lg:flex-grow lg:items-center lg:justify-center border-r lg:w-44 xl:w-52">
          <Sidebar />
        </div>
      )}
      <div className="flex flex-grow flex-col w-screen overflow-y-scroll mb-2">
        {children}
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
