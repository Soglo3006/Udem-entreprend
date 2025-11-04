import React, { useState } from "react";
import Header from "./home/header";
import Footer from "./home/footer";
import EventCard from "./EventCard";
import { evenementsData } from "./data/EvenementData";
import StarsCanvas from "./home/StarsCanvas";
import Feedback from "./home/BoutonFeedback";

function EvenementsPage() {
  const [categorie, setCategorie] = useState("ancien");

  const evenementsAffiches =
    categorie === "avenir" ? evenementsData.aVenir : evenementsData.ancien;

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0c0c1e] to-[#121232] text-white font-sans relative overflow-hidden">
      <Header />
      <StarsCanvas nombreEtoile={300} />
      <div className="relative z-10 py-12 mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl text-center mb-10 font-extrabold bg-gradient-to-b from-blue-200 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(59,130,246,0.6)]">
          Nos Événements
        </h1>
        <div className="flex justify-center mb-10">
        <div className="flex space-x-3 border-[2px] border-blue-400/50 rounded-xl px-2 py-1 bg-transparent backdrop-blur-sm select-none">
          <label className="radio flex flex-grow items-center justify-center rounded-lg cursor-pointer">
            <input
              type="radio"
              name="categorie"
              value="avenir"
              checked={categorie === "avenir"}
              onChange={() => setCategorie("avenir")}
              className="peer hidden"
            />
            <span
              className="tracking-widest text-sm sm:text-base text-gray-300 
              px-4 py-2 rounded-lg transition-all duration-300 ease-in-out
              peer-hover:text-white peer-hover:shadow-[0_0_20px_rgba(59,130,246,0.6)] 
              peer-hover:bg-blue-500/20
              peer-checked:bg-gradient-to-r peer-checked:from-blue-500 peer-checked:to-cyan-400
              peer-checked:text-white peer-checked:shadow-[0_0_25px_rgba(59,130,246,0.8)] peer-checked:scale-105"
            >
              À venir
            </span>
          </label>
          <label className="radio flex flex-grow items-center justify-center rounded-lg cursor-pointer">
            <input
              type="radio"
              name="categorie"
              value="ancien"
              checked={categorie === "ancien"}
              onChange={() => setCategorie("ancien")}
              className="peer hidden"
            />
            <span
              className="tracking-widest text-sm sm:text-base text-gray-300 
              px-4 py-2 rounded-lg transition-all duration-300 ease-in-out
              peer-hover:text-white peer-hover:shadow-[0_0_20px_rgba(59,130,246,0.6)] 
              peer-hover:bg-blue-500/20
              peer-checked:bg-gradient-to-r peer-checked:from-blue-500 peer-checked:to-cyan-400
              peer-checked:text-white peer-checked:shadow-[0_0_25px_rgba(59,130,246,0.8)] peer-checked:scale-105"
            >
              Passés
            </span>
          </label>
        </div>
      </div>
        <div className="flex justify-center px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 px-4 gap-6 sm:gap-8 lg:gap-10">
            {evenementsAffiches.map((evenement) => (
              <EventCard
                key={evenement.id}
                title={evenement.titre}
                image={evenement.imageEventCard}
                date={evenement.date}
                path={evenement.path}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
      <Feedback />
    </div>
  );
}

export default EvenementsPage;
