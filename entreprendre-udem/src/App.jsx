import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home.jsx';
import BenevolePage from './Formulaire.jsx';
import ScrollToTop from './ScrollTop.jsx';
import EvenementsPage from './EvenementsPage.jsx';
import { Suspense, lazy } from "react";

const EquipePage = lazy(() => import("./EquipePage"));

function App() {
  return (
    <Router>
      <ScrollToTop /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/equipePage"
          element={
            <Suspense
              fallback={
                <div className="w-full h-screen flex justify-center items-center bg-gradient-to-b from-[#0c0c1e] to-[#121232]">
                  <div className="text-blue-400 text-xl animate-pulse">
                    Chargement
                  </div>
                </div>
              }
            >
              <EquipePage key={Date.now()} />
            </Suspense>
          }
        />
        <Route path="/benevole" element={<BenevolePage />} />
        <Route path="/evenements" element={<EvenementsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
