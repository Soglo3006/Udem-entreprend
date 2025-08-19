import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home.jsx';
import BenevolePage from './Formulaire.jsx';
import ScrollToTop from './ScrollTop.jsx';
import { Suspense, lazy } from "react";
import { Toaster } from 'react-hot-toast'; 


const EquipePage = lazy(() => import("./EquipePage"));
const EvenementsPage = lazy(() => import("./EvenementsPage"));
const EvenementDetail = lazy(() => import("./EvenementDetail"));

function App() {
  const fallbackLoader = (
    <div className="w-full h-screen flex justify-center items-center bg-gradient-to-b from-[#0c0c1e] to-[#121232]">
      <div className="text-blue-400 text-xl animate-pulse">
        Chargement
      </div>
    </div>
  );

  return (
    <Router>
      <ScrollToTop /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/equipePage"
          element={
            <Suspense
              fallback={fallbackLoader}
            >
              <EquipePage key={Date.now()} />
            </Suspense>
          }
        />
        <Route path="/benevole" element={<BenevolePage />} />
        <Route path="/evenements" 
        element={
            <Suspense
              fallback={fallbackLoader}
            >
              <EvenementsPage key={Date.now()} />
            </Suspense>
          }
          />
        <Route path="/evenements/:eventId" 
        element={
            <Suspense
              fallback={fallbackLoader}
            >
              <EvenementDetail key={Date.now()} />
            </Suspense>
          }
          />
      </Routes>
      <Toaster position="bottom-center" reverseOrder={false} />
    </Router>
  );
}

export default App;
