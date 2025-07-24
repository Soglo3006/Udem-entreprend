import { image } from "framer-motion/client";

export const evenementsData = [
  {
    id: "altitude",
    titre: "Altitude",
    date: "1 avril 2025",
    imagePrincipale: "/evenement/Altitude/Altitude.webp",
    imageEventCard: "/evenement/Altitude/Altitude.png",
    description: "",
    resume:
      "Altitude, c’est l’événement phare de l’entrepreneuriat à l’Université de Montréal. Pensé pour celles et ceux qui veulent passer de l’idée à l’action, Altitude rassemble des étudiant·e·s, jeunes entrepreneur·e·s et passionné·e·s de création autour d’une soirée dynamique, concrète et inspirante. Lors de l'événement, les participants ont plongé dans l’univers entrepreneurial à travers des conseils applicables, des outils concrets et des échanges stimulants. De plus, l’événement a aussi été marqué par la présence inspirante de Olivier Audet et Jean-François Latreille, venus partager leurs expériences et ouvrir le dialogue avec la relève.",
    partenaires: [
      {
        nom: "millenium",
        logo: "/Partenaires/millénium.webp",
        lien: "https://millenium.umontreal.ca/"
      }
    ],
    video: null,
    galerie: [
      "/evenement/Altitude/photo_evenement/1744070003754.webp",
      "/evenement/Altitude/photo_evenement/YZA04099.webp",
      "/evenement/Altitude/photo_evenement/YZA04184.webp"
    ],
    lieu: "Pavillon Jean-Coutu",
    path: "/evenements/altitude",
    invite: [
      {
        nom: "Olivier Audet",
        description:
          "Jeune entrepreneur passionné par la technologie, l’innovation et la stratégie d’affaires, Olivier Audet incarne la nouvelle génération de leaders engagés. Fondateur de Lostra, une firme de consultation en stratégie d’affaires, il milite activement pour la démocratisation de l’entrepreneuriat et l’accès à l’intelligence de marché pour les jeunes",
        image: "/evenement/Altitude/Oliver.png"
      },
      {
        nom: "Jean-Francois Latreille",
        description:
          "Jean-François Latreille est un professionnel du droit reconnu, mais également un entrepreneur aguerri. Son parcours atypique, à la croisée du monde juridique et des affaires, fait de lui un intervenant d’exception pour tous ceux qui souhaitent se lancer dans l’entrepreneuriat de manière réfléchie.",
        image: "/evenement/Altitude/JF.png"
      }
    ]
  },
  {
    id: "Poly-X-Udem",
    titre: "Poly-X-Udem",
    date: "31 janvier 2025",
    imagePrincipale: "/evenement/Poly X Udem/PU.jpg",
    imageEventCard: "/evenement/Poly X Udem/PU.jpg",
    description: "",
    resume:
      "L'événement Innovation est dédié à la découverte des nouvelles tendances et technologies qui transforment le monde des affaires. Des experts de divers secteurs partageront leurs idées et expériences pour inspirer la prochaine génération d'entrepreneurs.",
    partenaires: [
      {
        nom: "educalcool",
        logo: "/Partenaires/logo-edc.svg",
        lien: "https://www.educalcool.qc.ca/"
      },
      {
        nom: "millenium",
        logo: "/Partenaires/millénium.webp",
        lien: "https://millenium.umontreal.ca/"
      },
      {
        nom: "propolys",
        logo: "/Partenaires/propolys.webp",
        lien:
          "https://www.rbcroyalbank.com/fr/modes-dacces/banque-en-direct/index.html"
      }
    ],
    video: null,
    galerie: [
      "/evenement/Poly X Udem/photo_evenement/1744070003754.webp",
      "/evenement/Poly X Udem/photo_evenement/YZA04099.webp",
      "/evenement/Poly X Udem/photo_evenement/YZA04184.webp"
    ],
    lieu: "Pavillon Lassonde",
    path: "/evenements/Poly-X-Udem",
    invite: []
  },{
    id: "marche-noel-2024",
    titre: "marche-noel-2024",
    date: "26-27 novembre 2024",
    imagePrincipale: "evenement/MarcheFetes/Marche_Noel_2024.png",
    imageEventCard: "evenement/MarcheFetes/Marche_Noel_2024.png",
    description: "",
    resume: "Marché festif organisé par UdeM Entreprend au pavillon Jean-Brillant.",
    partenaires: [],
    video: null,
    galerie: [],
    lieu: "Pavillon Jean-Brillant",
    path: "/evenements/marche-noel-2024",
    invite: []
  },
  {
    id: "meet1-2024",
    titre: "Meet1entrepreneur - 3è édition",
    date: "7 novembre 2024",
    imagePrincipale: "evenement/M1E/M1E_3E.jpg",
    imageEventCard: "evenement/M1E/M1E_3E.jpg",
    description: "",
    resume: "Une édition spéciale de Meet1entrepreneur pour échanger avec des entrepreneurs inspirants à l'UdeM.",
    partenaires: [{
        nom: "millenium",
        logo: "/Partenaires/millénium.webp",
        lien: "https://millenium.umontreal.ca/"
      }],
    video: null,
    galerie: [],
    lieu: "Pavillon Campus Mil-Udem",
    path: "/evenements/meet1-2024",
    invite: [
      {
        nom: "Adam Rahmouni El Idrissi",
        description:"",
        image: "/evenement/Altitude/Oliver.png"
      },
      {
        nom: "Tayssa Waldron",
        description:"",
        image: "/evenement/Altitude/JF.png"
      },
      {
        nom: "Alain Déom",
        description:"",
        image: "/evenement/Altitude/JF.png"
      },
      {
        nom: "Antho Tran",
        description:"",
        image: "/evenement/Altitude/JF.png"
      },
      {
        nom: "Anne France Goldwater",
        description:"",
        image: "/evenement/Altitude/JF.png"
      }
    ]
  },
  {
    id: "meet1-femmes-2024",
    titre: "Meet1entrepreneur: édition femmes d’influence",
    date: "9 mars 2024",
    imagePrincipale: "evenement/M1E/M1E_femme_2024.png",
    imageEventCard: "evenement/M1E/M1E_femme_2024.png",
    description: "",
    resume: "Édition spéciale dédiée aux femmes d’influence dans l’entrepreneuriat.",
    partenaires: [{
        nom: "millenium",
        logo: "/Partenaires/millénium.webp",
        lien: "https://millenium.umontreal.ca/"
      }],
    video: null,
    galerie: [],
    lieu: "Université de Montréal",
    path: "/evenements/meet1-femmes-2024",
    invite: [{
        nom: "Madwa-Nika Cadet",
        description:"",
        image: "/evenement/Altitude/JF.png"
      },
      {
        nom: "Krystina Abboud",
        description:"",
        image: "/evenement/Altitude/JF.png"
      },
      {
        nom: "Audrey-Camille Nkambou",
        description:"",
        image: "/evenement/Altitude/JF.png"
      },
      {
        nom: "Jessica Frédérique",
        description:"",
        image: "/evenement/Altitude/JF.png"
      }]
  },
  {
    id: "meet1-2023",
    titre: "Meet1entrepreneur - 2è édition",
    date: "6 octobre 2023",
    imagePrincipale: "evenement/M1E/M1E_2E.jpg",
    imageEventCard: "evenement/M1E/M1E_2E.jpg",
    description: "",
    resume: "Une édition spéciale de Meet1entrepreneur pour échanger avec des entrepreneurs inspirants à l'UdeM.",
    partenaires: [],
    video: null,
    galerie: [],
    lieu: "Campus MIL",
    path: "/evenements/meet1-2023",
    invite: [{
        nom: "Brice Salmon",
        description:"",
        image: "/evenement/Altitude/JF.png"
      },
      {
        nom: "Corinne Chrétien",
        description:"",
        image: "/evenement/Altitude/JF.png"
      },
      {
        nom: "Valentin Kravtchenko",
        description:"",
        image: "/evenement/Altitude/JF.png"
      },
      {
        nom: "Eddy Dureuil",
        description:"",
        image: "/evenement/Altitude/JF.png"
      }]
  },
  {
    id: "meet1-femmes-2023",
    titre: "Meet1entrepreneur: édition femmes d’influence",
    date: "18 mars 2023",
    imagePrincipale: "evenement/M1E/M1E_femme.jpg",
    imageEventCard: "evenement/M1E/M1E_femme.jpg",
    description: "",
    resume: "Édition spéciale dédiée aux femmes d’influence dans l’entrepreneuriat.",
    partenaires: [{
        nom: "millenium",
        logo: "/Partenaires/millénium.webp",
        lien: "https://millenium.umontreal.ca/"
      }],
    video: null,
    galerie: [],
    lieu: "Université de Montréal",
    path: "/evenements/meet1-femmes-2023",
    invite: [{
        nom: "Genevieve Desautels",
        description:"",
        image: "/evenement/Altitude/JF.png"
      },
      {
        nom: "Caterina Milioto",
        description:"",
        image: "/evenement/Altitude/JF.png"
      },
      {
        nom: "Farnel Fleurant",
        description:"",
        image: "/evenement/Altitude/JF.png"
      },
      {
        nom: "Silvia Costantini",
        description:"",
        image: "/evenement/Altitude/JF.png"
      }]
  },
  {
    id: "marche-noel-2022",
    titre: "Marché de Noël",
    date: "30 novembre 2022",
    imagePrincipale: "evenement/MarcheFetes/Marche_Noel_2022.jpg",
    imageEventCard: "evenement/MarcheFetes/Marche_Noel_2022.jpg",
    description: "",
    resume: "Marché festif organisé par UdeM Entreprend au pavillon Jean-Brillant.",
    partenaires: [{
        nom: "millenium",
        logo: "/Partenaires/millénium.webp",
        lien: "https://millenium.umontreal.ca/"
      }],
    video: null,
    galerie: [],
    lieu: "Pavillon Jean-Brillant",
    path: "/evenements/marche-noel-2022",
    invite: []
  },
  {
    id: "meet1-2022",
    titre: "MEET1ENTREPRENEUR",
    date: "15 septembre 2022",
    imagePrincipale: "evenement/M1E/M1E_2022.jpg",
    imageEventCard: "evenement/M1E/M1E_2022.jpg",
    description: "",
    resume: "Rencontres avec des entrepreneurs dans un cadre dynamique au campus MIL.",
    partenaires: [{
        nom: "RBC",
        logo: "/Partenaires/RBC.svg",
        lien: "https://www.rbcroyalbank.com/fr/modes-dacces/banque-en-direct/index.html"
      }],
    video: null,
    galerie: [],
    lieu: "Campus MIL",
    path: "/evenements/meet1-2022",
    invite: [{
        nom: "Pierre Graff",
        description:"",
        image: "/evenement/Altitude/JF.png"
      },
      {
        nom: "Nada Zogheib",
        description:"",
        image: "/evenement/Altitude/JF.png"
      },
      {
        nom: "Adriano D'angelo",
        description:"",
        image: "/evenement/Altitude/JF.png"
      },
      {
        nom: "Tynnie Judith",
        description:"",
        image: "/evenement/Altitude/JF.png"
      },
    {
        nom: "Omar Malle Gueye",
        description:"",
        image: "/evenement/Altitude/JF.png"
      },
      {
        nom: "Gabrielle Labbé",
        description:"",
        image: "/evenement/Altitude/JF.png"
      },
      {
        nom: "Mathieu Morin-Lamy",
        description:"",
        image: "/evenement/Altitude/JF.png"
      }]
  }
];
