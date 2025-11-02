import React from "react";
import EventCard from "../EventCard";
import { evenementsData } from "../data/EvenementData";

function EventSection() {
  const prochainEvenement = evenementsData.aVenir?.[0];

  return (
    <div id="evenements" className="p-15 items-center text-center justify-center flex flex-col">
      <h1 className="text-4xl md:text-4xl text-center mb-4 font-extrabold bg-gradient-to-b from-blue-200 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(59,130,246,0.6)]">
        Nos Évenements
      </h1>
      <p className="text-white mb-6">
        Découvrez les événements à venir organisés par UdeM Entreprend.
      </p>
      {
        prochainEvenement ? (
          <EventCard
            title={prochainEvenement.titre}
            description={prochainEvenement.description}
            image={prochainEvenement.imageEventCard}
            date={prochainEvenement.date}
            path={prochainEvenement.path}
          />
        ) : (<EventCard
        title="À venir"
        description="Aucun événement n'est prévu pour le moment. Revenez bientôt pour découvrir nos prochaines activités !"
        image={null}
      />
      )}
      <a href="evenements"
        className="relative inline-block px-6 py-2 rounded-full text-white font-medium
              border border-white/30 bg-white/10 backdrop-blur-md
              hover:bg-gradient-to-r hover:from-blue-400
              hover:text-white transition-all duration-300
              hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] hover:scale-105"
      >
        Voir les événements
      </a>
    </div>
  );
}

export default EventSection;
