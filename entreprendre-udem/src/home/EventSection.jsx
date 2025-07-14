import React from "react";
import EventCard from "../EventCard";

function EventSection() {
  return (
    <div
      id="evenements"
      className="p-15 items-center text-center justify-center flex flex-col"
    >
      <h1 className="text-4xl md:text-4xl font-bold text-center mb-4 tracking-wide text-blue-400 animate-pulse">
        Nos Évenements
      </h1>
      <p className="text-white mb-6">
        Découvrez les événements à venir organisés par UdeM Entreprend.
      </p>

      <EventCard
        title="À venir"
        description="Aucun événement n'est prévu pour le moment. Revenez bientôt pour découvrir nos prochaines activités !"
      />

      <a
        href="evenements"
        className="relative inline-block px-6 py-2 rounded-full text-white font-medium
              border border-white/30 bg-white/10 backdrop-blur-md
              hover:bg-gradient-to-r hover:from-blue-400 hover:to-violet-500
              hover:text-white transition-all duration-300
              hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] hover:scale-105"
      >
        Voir les événements
      </a>
    </div>
  );
}

export default EventSection;
