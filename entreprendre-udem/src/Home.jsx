import React, { Suspense, lazy, useState, useEffect } from "react";
import EventSection from "./home/EventSection";  
import Header from "./home/header";
import Footer from "./home/footer";
import StarsCanvas from "./home/StarsCanvas";
import HeroSection from "./home/HeroSection"; 
import Feedback from "./home/BoutonFeedback";

const AboutSection = lazy(() => import("./home/AboutSection"));
const CommunitySection = lazy(() => import("./home/CommunitySection"));
const TeamSection = lazy(() => import("./home/TeamSection"));
const PartnerSection = lazy(() => import("./home/PartnerSection"));
const BenevoleSection = lazy(() => import("./home/BenevoleSection"));

function Home() {
  const [nombreEtoile, setNombreEtoile] = useState(1500);

  useEffect(() => {
    function calculerEtoiles() {
      const largeur = window.innerWidth;
      const hauteur = window.innerHeight;
      const etoiles = Math.floor((largeur * hauteur) / 1500);
      setNombreEtoile(etoiles);
    }

    calculerEtoiles();
    window.addEventListener("resize", calculerEtoiles);
    return () => window.removeEventListener("resize", calculerEtoiles);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#0c0c1e] to-[#121232] text-white font-sans w-screen max-w-full ">
      <Suspense
        fallback={
          <div className="w-full h-screen flex justify-center items-center">
            <div className="text-blue-400 text-xl animate-pulse">
              Chargement
            </div>
          </div>
        }
      >
        <Header />
        <HeroSection />
        <CommunitySection />
        <AboutSection />
        <TeamSection />
        <EventSection />
        <PartnerSection />
        <BenevoleSection />
        <Footer />
      <StarsCanvas nombreEtoile={nombreEtoile}/>
      <Feedback />
      </Suspense>
    </div>
  );
}

export default Home;
