import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useSelector } from "react-redux";
import Layout from "./components/Layout";
import BD_Dashboard from "./pages/BD_Dashboard";
import ProfiloUtente from "./pages/BD_ProfiloUtente";
import Operazioni from "./pages/Operazioni";
import BD_DettaglioPratica from "./pages/BD_DettaglioPratica";
import Calendario from "./pages/Calendario";
import ServiziSpeciali from "./pages/ServiziSpeciali";
import BD_ArchivioOperazioni from "./pages/BD_ArchivioOperazioni";
import BD_Statistiche from "./pages/BD_Statistiche";
import Form from "./pages/Form";
import LoginPage from "./pages/LoginPage";
import LogoutPage from "./pages/LogoutPage";

function App() {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  return (
    <main className="custom-gradient h-full">
      <Router>
        <Layout>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
          </Routes>
          {userInfo ? (
            <>
              <Routes>
                <Route path="/" element={<BD_Dashboard />} />
                <Route path="/profilo" element={<ProfiloUtente />} />
                <Route path="/messaggi" element={<BD_Dashboard />} />
                <Route path="/operazioni" element={<Operazioni />} />
                <Route path="/dettaglio" element={<BD_DettaglioPratica />} />
                <Route path="/calendario" element={<Calendario />} />
                <Route path="/form" element={<Form />} />
                <Route path="/speciali" element={<ServiziSpeciali />} />
                <Route path="/archivio" element={<BD_ArchivioOperazioni />} />
                <Route path="/statistiche" element={<BD_Statistiche />} />
                <Route path="/logout" element={<LogoutPage />} />
              </Routes>
            </>
          ) : (
            <Navigate to="/login" />
          )}
        </Layout>
      </Router>
    </main>
  );
}

export default App;
