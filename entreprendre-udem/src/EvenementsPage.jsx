import React from "react";
import { Link } from "react-router-dom";
import Header from "./home/header";
import Footer from "./home/footer";
import EventCard from "./EventCard";
import { evenementsData }  from "./data/EvenementData";

function EvenementsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0c0c1e] to-[#121232] text-white font-sans relative overflow-hidden">
    <Header />
    <div className="relative z-10 py-16 max-w-7xl mx-auto px-6">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-10 tracking-wide text-blue-300 animate-pulse">
        Nos Événements
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
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
    <Footer />
  </div>
  );
}

export default EvenementsPage;
