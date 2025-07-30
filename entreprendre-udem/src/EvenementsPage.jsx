import React from "react";
import Header from "./home/header";
import Footer from "./home/footer";
import EventCard from "./EventCard";
import { evenementsData } from "./data/EvenementData";
import StarsCanvas from "./home/StarsCanvas";

function EvenementsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0c0c1e] to-[#121232] text-white font-sans relative overflow-hidden">
      <Header />
      <StarsCanvas nombreEtoile={300} />
      <div className="relative z-10 py-12 mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl text-center mb-10 font-extrabold bg-gradient-to-b from-blue-200 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(59,130,246,0.6)]">
          Nos Événements
        </h1>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 max-w-[1400px] w-full">
            {evenementsData.map((evenement) => (
              <EventCard
                key={evenement.id}
                title={evenement.titre}
                description={evenement.description}
                image={evenement.imageEventCard}
                date={evenement.date}
                path={evenement.path}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default EvenementsPage;
