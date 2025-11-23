import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Linkedin } from 'lucide-react';
import Button from '@mui/joy/Button';

function TeamSection() {
  const membreEquipe = [
    {
      name: "Guillaume Collin",
      role: "Président",
      image: "/Membre photo 2025-2026/Guillaume.jpg",
      linkedin: "https://www.linkedin.com/in/guillaume-collin-474101237/"
    },
    {
      name: "Myriam Huot",
      role: "Vice-Présidente Éxécutive",
      image: "/Membre photo 2025-2026/Myriam_Huot.jpg",
      linkedin: "https://www.linkedin.com/in/myriam-huot-633857314//"
    },
    {
      name: "Émile Villeneuve",
      role: "Vice-Président Affaires Externes",
      image: "/Membre photo 2025-2026/Emile.jpg",
      linkedin: "https://www.linkedin.com/in/%C3%A9mile-villeneuve-625549290/"
    },
    {
      name: "Alice De Coninck",
      role: "Vice-Présidente Évenements",
      image: "/Membre photo 2025-2026/Alice.jpg",
      linkedin: "https://www.linkedin.com/in/alice-de-coninck-359552264/"
    },
    {
      name: "Kenneth Ouedraogo",
      role: "Vice-Présidente partenariat",
      image: "/Membre photo 2025-2026/Kenneth.jpg",
      linkedin: "https://www.linkedin.com/in/kenneth-ouedraogo-9216352b4/"
    },
    {
      name: "Taoudi Bensouda",
      role: "Vice-Président Finance",
      image: "/Membre photo 2025-2026/Bensouda.jpg",
      linkedin: "https://www.linkedin.com/in/taoudi-bensouda/"
    },
    {
      name: "Dildora Umarova",
      role: "Vice-Présidente affaires internes",
      image: "/Membre photo 2025-2026/Dora.jpg",
      linkedin: "https://www.linkedin.com/in/dildora-umarova-200bb420a/"
    },
    {
      name: "Alexandre Booh Louha",
      role: "Vice-Président Tech",
      image: "/Membre photo 2025-2026/Alex.jpg",
      linkedin: "https://www.linkedin.com/in/alexandre-booh-louha/"
    },
    {
      name: "Myriam Iben Chekroun",
      role: "Vice-Présidente Communication",
      image: "/Membre photo 2024-2025/Myriam.webp",
      linkedin: "https://www.linkedin.com/in/miryam-iben-chekroun-382724336/"
    },
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
      <div className="lg:text-left lg:ml-20 text-center">
        <h1 className="sm:text-5xl text-4xl font-extrabold bg-gradient-to-b from-blue-200 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(59,130,246,0.6)] mb-6 lg:max-w-3xl ">
          Une équipe engagée pour stimuler l'entrepreneuriat étudiant
        </h1>
        <p className="mb-6 leading-relaxed text-lg">
          Notre équipe est composée d’étudiants passionnés qui accompagnent et inspirent la relève entrepreneuriale.
        </p>
        <Link
          to="/equipePage"
          className="relative inline-block px-6 py-2 rounded-full text-white font-medium
            border border-white/30 bg-white/10 backdrop-blur-md
            hover:bg-gradient-to-r hover:from-blue-400
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
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="w-full max-w-[350px] min-w-[250px] mx-auto"
          >
            <img
              src={currentMember.image}
              alt={currentMember.name}
              className="w-full aspect-[2/3] rounded-xl object-cover mt-4"
              loading="lazy"
            />
            <h2 className="text-lg font-semibold">{currentMember.name}</h2>
            <p className="text-sm mb-2">{currentMember.role}</p>
            <Button variant="outlined" size="sm" endDecorator={<Linkedin strokeWidth={0.5} size={16}/>}
            sx={{
              borderRadius: "9999px",     
              px: 4,                           
              py: 1,                           
              minWidth: 'fit-content',
              color: "white",
              border: "2px solid rgba(255,255,255,0.3)",
              backgroundColor: "rgba(255,255,255,0.1)",
              backdropFilter: "blur(6px)",
              transition: "all 0.3s ease",
              alignItems: "center",
              "&:hover": {
                backgroundColor: "rgba(255,255,255,0.1)",
                transform: "scale(1.05)",
                boxShadow: "0 0 25px rgba(59,130,246,0.5)"
              }
            }}>
            <a
              href={currentMember.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="font-light text-blue-400 text-sm"
            >
              LinkedIn
            </a>
            </Button>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default TeamSection;
