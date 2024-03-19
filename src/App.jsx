import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Layout from "./components/Layout";
import BD_Dashboard from "./pages/BD_Dashboard";
import ProfiloUtente from "./pages/BD_ProfiloUtente";
import BD_ListaLavorazioni from "./pages/BD_ListaLavorazioni";
import BD_DettaglioPratica from "./pages/BD_DettaglioPratica";
import BD_DettaglioPraticheMultiple from "./pages/BD_DettaglioPraticheMultiple";
import BD_PasswordDimenticata from "./pages/BD_PasswordDimenticata";
import BD_ReimpostaPassword from "./pages/BD_ReimpostaPassword";
import BD_PasswordAggiornata from "./pages/BD_PasswordAggiornata";
import Calendario from "./pages/Calendario";
import ServiziSpeciali from "./pages/ServiziSpeciali";
import BD_ArchivioOperazioni from "./pages/BD_ArchivioOperazioni";
import BD_Statistiche from "./pages/BD_Statistiche";
import BD_RichiestaServizio from "./pages/BD_RichiestaServizio";
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
            <Route path="/login" element={<LoginPage />} />
            <Route
              path="/password-dimenticata"
              element={<BD_PasswordDimenticata />}
            />
            <Route
              path="/reimposta-password"
              element={<BD_ReimpostaPassword />}
            />
            <Route
              path="/password-aggiornata"
              element={<BD_PasswordAggiornata />}
            />
            <Route path="/logout" element={<LogoutPage />} />
          </Routes>
          {userInfo ? (
            <>
              <Routes>
                <Route path="/" element={<BD_Dashboard />} />
                <Route path="/profilo" element={<ProfiloUtente />} />
                <Route
                  path="/lista-lavorazioni"
                  element={<BD_ListaLavorazioni />}
                />
                <Route
                  path="/dettaglio-pratiche"
                  element={<BD_DettaglioPratica />}
                />
                <Route
                  path="/multiple"
                  element={<BD_DettaglioPraticheMultiple />}
                />
                <Route path="/calendario" element={<Calendario />} />
                <Route
                  path="/richiesta-servizio"
                  element={<BD_RichiestaServizio />}
                />
                <Route path="/servizi-speciali" element={<ServiziSpeciali />} />
                <Route
                  path="/archivio-operazioni"
                  element={<BD_ArchivioOperazioni />}
                />
                <Route path="/statistiche" element={<BD_Statistiche />} />
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
