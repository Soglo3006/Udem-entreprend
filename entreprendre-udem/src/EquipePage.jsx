import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from "./home/header";
import Footer from "./home/footer";

function EquipePage(){
    const teamData = {
        '2022-2023':[
            {
            name:"Prince Kabamba",
            role:"Président ",
            image:"/Membre photo 2022-2023/Prince.webp",
            linkedin:"https://www.linkedin.com/in/prince-kabamba-777878180/"
            },
            {
            name:"Eben Kabamba",
            role:"Vice-Président",
            image:"/Membre photo 2022-2023/Eben.webp",
            linkedin:"https://www.linkedin.com/in/eben-kabamba-6991921ba/"
            },
            {
            name:"Stacy Casimir",
            role:"Vice-Présidente Évenement",
            image:"/Membre photo 2022-2023/Stacy.webp",
            linkedin:"https://www.linkedin.com/in/stacy-casimir-14b01414a/"
            },
            {
            name:"Basile Flammang-Rigot",
            role:"Vice-Président Affaires Externes",
            image:"/Membre photo 2022-2023/Basile.webp",
            linkedin:"https://www.linkedin.com/in/basile-flammang-rigot/"
            },
            {
            name:"Jeremy Guillon",
            role:"Vice-Président Partenariat",
            image:"/Membre photo 2022-2023/Jeremy.webp",
            linkedin:"https://www.linkedin.com/in/jeremy-guillon/"
            },
            {
            name:"Sol'Abraham Castaneda Ouellet",
            role:"Vice-Président Affaires Internes",
            image:"/Membre photo 2022-2023/Sol'Abraham.webp",
            linkedin:"https://www.linkedin.com/in/sol-abraham-castaneda-ouellet-81714b6b/"
            },
            {
            name:"Safiya Elmoukhtafi",
            role:"Vice-Présidente Communication",
            image:"/Membre photo 2022-2023/Safiya.webp",
            linkedin:"https://www.linkedin.com/in/safiya-elmoukhtafi-7a72a9234/"
            },
            {
            name:"Raksha Gopalakrishnan",
            role:"Vice-Président Recrutement",
            image:"/Membre photo 2022-2023/Raksha.webp",
            linkedin:"https://www.linkedin.com/in/raksha-gopalakrishnan/"
            },
            {
            name:"Salma Zerouali",
            role:"Trésorière",
            image:"/Membre photo 2022-2023/Salma.webp",
            linkedin:"https://www.linkedin.com/in/salma-zerouali/"
            },
            
        ],
        '2023-2024':[
          {
                name:"Prince Kabamba",
                role:"Président",
                image:"/Membre photo 2023-2024/Prince.webp",
                linkedin:"https://www.linkedin.com/in/prince-kabamba-777878180/"
            },
            {
                name:"Eben Kabamba",
                role:"Vice-President Exécutif",
                image:"/Membre photo 2023-2024/Eben.webp",
                linkedin:"https://www.linkedin.com/in/eben-kabamba-6991921ba/"
            },
            {
                name:"Yves Monka",
                role:"Vice-Président Affaires Externes",
                image:"/Membre photo 2023-2024/Yves.webp",
                linkedin:"https://www.linkedin.com/in/yves-cyriaque-monka-264773270/"
            },
            {
                name:"Angavai Kankathara",
                role:"Vice-Présidente Évenement",
                image:"/Membre photo 2023-2024/Angavai.webp",
                linkedin:"https://www.linkedin.com/in/angavai-k-b39a5b280/"
            },
            {
            name:"Amelie Ng",
            role:"Vice-Présidente Recrutement",
            image:"/Membre photo 2023-2024/Amelie.webp",
            linkedin:"https://www.linkedin.com/in/amelie-ng/"
            },
            {
                name:"Emelie Ng",
                role:"Vice-Présidente Affaires Internes",
                image:"/Membre photo 2023-2024/Emelie.webp",
                linkedin:"https://www.linkedin.com/in/emelie-ng/"
            },
            {
                name:"Diana Haq",
                role:"Vice-Présidente Communication",
                image:"/Membre photo 2024-2025/Diana.webp",
                linkedin: "https://www.linkedin.com/in/diana-haq/"
            },
            {
                name:"Lina Mihoubi",
                role:"Vice-Présidente Partenariats",
                image:"/Membre photo 2023-2024/Lina.webp",
                linkedin:"https://www.linkedin.com/in/lina-mihoubi-34b97b290/"
            },
            {
                name:"Mary Li",
                role:"Trésorier",
                image:"/Membre photo 2023-2024/Mary.webp",
                linkedin:"https://www.linkedin.com/in/mary-ng/"
            }
            
        ],
        '2024-2025':[
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
            name: "Lola Marchand",
            role: "Vice-Présidente affaires internes",
            image: "/Membre photo 2024-2025/Lola.webp",
            linkedin: "https://www.linkedin.com/in/lola-concetta-marchand-612433289/"
            },
            {
            name: "Taoudi Bensouda",
            role: "Vice-President Tehno & Innovation",
            image: "/Membre photo 2024-2025/Taoudi.webp",
            linkedin: "https://www.linkedin.com/in/taoudi-bensouda/"
            },
            {
            name: "Nour Eltaani",
            role: "Vice-Présidente Communication",
            image: "/Photo_evenement/Udem_Entreprend/YZA04245.webp",
            linkedin: "https://www.linkedin.com/in/nour-eltaani-95bb761a7/"
            },
            {
            name: "Malik Hareb",
            role: "Trésorier",
            image: "/Membre photo 2024-2025/Malik.webp",
            linkedin: "https://www.linkedin.com/in/malikhar/"
            },
            {
            name: "Myriam Iben Chekroun",
            role: "Responsable Communication",
            image: "/Membre photo 2024-2025/Myriam.webp",
            linkedin: "https://www.linkedin.com/in/miryam-iben-chekroun-382724336/"
            }
        ]
    }

  const [selectedYear, setSelectedYear] = useState("2024-2025");
  const members = teamData[selectedYear];

return (
  <div className="min-h-screen bg-gradient-to-b from-[#0c0c1e] to-[#121232] text-white font-sans relative overflow-hidden">
    <Header />
    <div className="relative z-10 py-16 max-w-7xl mx-auto px-6">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-10 tracking-wide text-blue-300 animate-pulse">
        L'équipe de UdeM Entreprend
      </h1>
      <div className="flex justify-center mb-10">
        <select
          name="annee"
          id="annee"
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
          className="bg-white text-gray-900 border border-blue-500 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {Object.keys(teamData).map((year) => (
            <option key={year} value={year}>{year}</option>
          ))}
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
        {members.map((member, index) => (
          <div
            key={index}
            className="group relative  flex flex-col items-center hover:scale-105 transition duration-300"
          >
            <div className="absolute w-32 h-32 bg-blue-500 blur-2xl opacity-20 group-hover:opacity-40 transition duration-300"></div>
            <img
              src={member.image}
              alt={member.name}
              className="w-[300px] h-[400px] object-cover mb-4 relative z-10 rounded-2xl"
            />
            <h2 className="text-xl font-semibold text-blue-300">{member.name}</h2>
            <p className="text-gray-300 mb-2">{member.role}</p>
            <a
              href={member.linkedin}
              target='_blank'
              rel='noopener noreferrer'
              className="text-blue-400 hover:underline mb-2"
            >
              LinkedIn
            </a>
          </div>
        ))}
      </div>
    </div>
    <Footer />
  </div>
);
}

export default EquipePage;