import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from "./home/header";
import Footer from "./home/footer";
import StarsCanvas from "./home/StarsCanvas";
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Linkedin } from 'lucide-react';
import Button from "@mui/joy/Button";

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
                name:"Flora H.-L",
                role:"Vice-Président Affaires Externes",
                image:"/Membre photo 2024-2025/Flora.webp",
                linkedin: "https://www.linkedin.com/in/flora-h-l-01697a26b/"
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
  <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#0c0c1e] to-[#121232] text-white font-sans w-screen max-w-full  ">
    <Header />
    <StarsCanvas nombreEtoile={600}/>
    <div className="relative z-10 py-16 max-w-7xl mx-auto px-6">
      <h1 className="text-4xl md:text-5xl text-center mb-10 font-extrabold bg-gradient-to-b from-blue-200 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(59,130,246,0.6)]">
        L'équipe de UdeM Entreprend
      </h1>
      <div className="flex justify-center mb-10">
        <FormControl variant="filled" 
      sx={{ m: 1, minWidth: 120, backgroundColor: "white" }}
      className="">
        <InputLabel id="annee">Année</InputLabel>
        <Select
          labelId="annee"
          id="annee"
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
          MenuProps={{ disableScrollLock: true }} 
        >
          {Object.keys(teamData).map((year) => (
          <MenuItem key={year} value={year}>{year}</MenuItem>
          ))}
        </Select>
      </FormControl>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 justify-items-center">
        {members.map((member, index) => (
          <Card
            key={index}
            className="group flex flex-col items-center transition duration-1500 hover:scale-105 transform justify-center "
            sx={{ backgroundColor: "transparent", boxShadow: "none" , width:300,
            }} 
          >
            <div className="absolute w-32 h-32 bg-blue-500 blur-2xl opacity-20 group-hover:opacity-40 transition duration-300"></div>
            <img
              src={member.image}
              alt={member.name}
              className="w-[300px] h-[400px] object-cover mb-4 relative z-10 rounded-2xl"
            />
            <CardContent
            sx={{ borderTop: "2px solid #3b82f6", mt: 1 }}
            className="text-center w-full"
            >
              <Typography gutterBottom variant="h5"
              className="text-xl font-semibold text-blue-300"
              >
                {member.name}
              </Typography>
              <Typography variant="body2"
              className="text-gray-300 mb-2">
                {member.role}
              </Typography>
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
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="font-light text-blue-400 text-sm"
              >
                LinkedIn
              </a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
    <Footer />
  </div>
);
}

export default EquipePage;