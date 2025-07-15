import React, { Suspense, lazy } from "react";
import EventSection from "./home/EventSection";
import Header from "./home/header";
import Footer from "./home/footer";
import StarsCanvas from "./home/StarsCanvas";

const HeroSection = lazy(() => import("./home/HeroSection"));
const AboutSection = lazy(() => import("./home/AboutSection"));
const CommunitySection = lazy(() => import("./home/CommunitySection"));
const TeamSection = lazy(() => import("./home/TeamSection"));
const PartnerSection = lazy(() => import("./home/PartnerSection"));
const BenevoleSection = lazy(() => import("./home/BenevoleSection"));

function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-gradient-to-b from-[#0c0c1e] to-[#121232] text-white font-sans w-full">
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
        <StarsCanvas />
        <HeroSection />
        <CommunitySection />
        <AboutSection />
        <TeamSection />
        <EventSection />
        <PartnerSection />
        <BenevoleSection />
        <Footer />
      </Suspense>
    </div>
  );
}

export default Home;
