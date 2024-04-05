import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Layout from "./components/Layout";
import Dashboard from "./pages/BD_Dashboard";
import ProfiloUtente from "./pages/BD_ProfiloUtente";
import ListaLavorazioni from "./pages/BD_ListaLavorazioni";
import Richieste from "./pages/BD_Richieste";
import GestioneReport2 from "./pages/BD_GestioneReport2";
import DettaglioPraticheMultiple from "./pages/BD_DettaglioPraticheMultiple";
import PasswordDimenticata from "./pages/BD_PasswordDimenticata";
import ReimpostaPassword from "./pages/BD_ReimpostaPassword";
import PasswordAggiornata from "./pages/BD_PasswordAggiornata";
import ServiziSpeciali from "./pages/BD_RichiestaMassivi";
import ArchivioOperazioni from "./pages/BD_ArchivioOperazioni";
import Statistiche from "./pages/BD_Statistiche";
import Monitoraggio from "./pages/BD_Monitoraggio";
import RichiestaServizio from "./pages/BD_RichiestaReport";
import RicercaAnagrafica from "./pages/BD_RicercaAnagrafica";
import Calendario from "./pages/Calendario";
import LoginPage from "./pages/BD_LoginPage";
import LogoutPage from "./pages/BD_LogoutPage";

function App() {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  return (
    <main className="custom-gradient h-full">
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route
              path="/password-dimenticata"
              element={<PasswordDimenticata />}
            />
            <Route path="/reimposta-password" element={<ReimpostaPassword />} />
            <Route
              path="/password-aggiornata"
              element={<PasswordAggiornata />}
            />
            <Route path="/logout" element={<LogoutPage />} />
          </Routes>
          {userInfo ? (
            <>
              <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/profilo" element={<ProfiloUtente />} />
                <Route path="/richieste" element={<ListaLavorazioni />} />
                <Route path="/richieste-2" element={<Richieste />} />
                <Route path="/gestione-report" element={<GestioneReport2 />} />
                <Route
                  path="/multiple"
                  element={<DettaglioPraticheMultiple />}
                />
                <Route path="/calendario" element={<Calendario />} />
                <Route
                  path="/richiesta-report"
                  element={<RichiestaServizio />}
                />
                <Route
                  path="/ricerca-anagrafica"
                  element={<RicercaAnagrafica />}
                />
                <Route path="/servizi-speciali" element={<ServiziSpeciali />} />
                <Route
                  path="/archivio-operazioni"
                  element={<ArchivioOperazioni />}
                />
                <Route path="/monitoraggio" element={<Monitoraggio />} />
                <Route path="/statistiche" element={<Statistiche />} />
              </Routes>
            </>
          ) : (
            ""
          )}
        </Layout>
      </Router>
    </main>
  );
}

export default App;
