import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";

function TeamSection() {
  const membreEquipe = [
    {
      name: "Diana Haq",
      role: "Présidente",
      image: "/Membre photo 2024-2025/Diana.webp",
      linkedin: "https://www.linkedin.com/in/diana-haq/"
    },
    {
      name: "Flora H.-L",
      role: "Vice-Présidente Éxécutive",
      image: "/Membre photo 2024-2025/Flora.webp",
      linkedin: "https://www.linkedin.com/in/flora-h-l-01697a26b/"
    },
    {
      name: "Ibrahim Achahab",
      role: "Vice-Président Affaires Externes",
      image: "/Membre photo 2024-2025/Ibrahim.webp",
      linkedin: "https://www.linkedin.com/in/ibrahim-achabab-62266a2a0/"
    },
    {
      name: "Arianne Ly",
      role: "Vice-Présidente Évenements",
      image: "/Membre photo 2024-2025/Araianne.webp",
      linkedin: "https://www.linkedin.com/in/arianne-ly/"
    },
    {
      name: "Tamia Bomboh",
      role: "Vice-Présidente commandites",
      image: "/Membre photo 2024-2025/Tamia.webp",
      linkedin: "https://www.linkedin.com/in/tamia-bomboh-2a071b28a/"
    },
    {
      name: "Malik Hareb",
      role: "Trésorier",
      image: "/Membre photo 2024-2025/Malik.webp",
      linkedin: "https://www.linkedin.com/in/malikhar/"
    },
    {
      name: "Lola Marchand",
      role: "Vice-Présidente affaires internes",
      image: "/Membre photo 2024-2025/Lola.webp",
      linkedin: "https://www.linkedin.com/in/lola-concetta-marchand-612433289/"
    },
    {
      name: "Taoudi Bensouda",
      role: "Responsable Tehno & Innovation",
      image: "/Membre photo 2024-2025/Taoudi.webp",
      linkedin: "https://www.linkedin.com/in/taoudi-bensouda/"
    },
    {
      name: "Myriam Iben Chekroun",
      role: "Responsable Communication",
      image: "/Membre photo 2024-2025/Myriam.webp",
      linkedin: "https://www.linkedin.com/in/miryam-iben-chekroun-382724336/"
    },
    {
      name: "Nour Eltaani",
      role: "Vice-Présidente Communication",
      image: "/Photo_evenement/Udem_Entreprend/YZA04245.webp",
      linkedin: "https://www.linkedin.com/in/nour-eltaani-95bb761a7/"
    }
  ];

  const [currentMemberIndex, setCurrentMemberIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMemberIndex((prev) => (prev + 1) % membreEquipe.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [membreEquipe.length]);

  const currentMember = membreEquipe[currentMemberIndex];

  return (
    <div id="equipe" className="grid grid-cols-1 lg:grid-cols-2 items-center p-5 shadow-lg gap-10 bg-[#0c0c1e] mt-15 relative z-10">
      <div className="md:text-left md:ml-20 text-center">
        <h1 className="text-3xl font-semibold text-blue-300 mb-6 max-w-xl">
          Une équipe engagée pour stimuler l'entrepreneuriat étudiant
        </h1>
        <p className="mb-6 text-base leading-relaxed">
          Notre équipe est composée d’étudiants passionnés qui accompagnent et inspirent la relève entrepreneuriale.
        </p>
        <Link
          to="/equipePage"
          className="relative inline-block px-6 py-2 rounded-full text-white font-medium
            border border-white/30 bg-white/10 backdrop-blur-md
            hover:bg-gradient-to-r hover:from-blue-400 hover:to-violet-500
            hover:text-white transition-all duration-300
            hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] hover:scale-105"
        >
          Voir les membres
        </Link>
      </div>
      <div className="p-4 items-center text-center justify-center relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentMember.name}
            style={{ willChange: "opacity, transform" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-[400px] min-w-[300px] mx-auto"
          >
            <img
              src={currentMember.image}
              alt={currentMember.name}
              className="w-full max-h-[500px] min-h-[500px] h-auto rounded-xl object-cover mt-4"
            />
            <h2 className="text-lg font-semibold">{currentMember.name}</h2>
            <p className="text-sm mb-2">{currentMember.role}</p>
            <a
              href={currentMember.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400"
            >
              LinkedIn
            </a>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default TeamSection;
