import { image } from "framer-motion/client";

export const evenementsData = [
  {
    id: "Altitude",
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
    id: "PU",
    titre: "Poly X Udem",
    date: "31 janvier 2025",
    imagePrincipale: "/evenement/Poly X Udem/Innovation.webp",
    imageEventCard: "/evenement/Poly X Udem/Innovation.png",
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
        nom: "porpolys",
        logo: "/Partenaires/propolys.webp",
        lien:
          "https://www.rbcroyalbank.com/fr/modes-dacces/banque-en-direct/index.html"
      }
    ],
    video: null,
    galerie: [
      "/evenement/Innovation/photo_evenement/1744070003754.webp",
      "/evenement/Innovation/photo_evenement/YZA04099.webp",
      "/evenement/Innovation/photo_evenement/YZA04184.webp"
    ],
    lieu: "Pavillon Jean-Coutu",
    path: "/evenements/innovation",
    invite: []
  },
  {
    id: "Meet1_2023",
    titre: "Meet1entrepreneur - 2è édition",
    date: "6 octobre 2023",
    imagePrincipale: null,
    imageEventCard: null,
    description: "",
    resume: "Une édition spéciale de Meet1entrepreneur pour échanger avec des entrepreneurs inspirants à l'UdeM.",
    partenaires: [],
    video: null,
    galerie: [],
    lieu: "Université de Montréal",
    path: "/evenements/meet1-2023",
    invite: []
  },
  {
    id: "Tournee_2023",
    titre: "Tournée entrepreneuriale",
    date: "31 mars 2023",
    imagePrincipale: null,
    imageEventCard: null,
    description: "",
    resume: "Découverte du monde entrepreneurial au cœur de l'UdeM, avec des visites, des échanges et des rencontres.",
    partenaires: [],
    video: null,
    galerie: [],
    lieu: "3200 Jean-Brillant, Université de Montréal",
    path: "/evenements/tournee-2023",
    invite: []
  },
  {
    id: "Meet1_femmes_2023",
    titre: "Meet1entrepreneur: édition femmes d’influence",
    date: "18 mars 2023",
    imagePrincipale: null,
    imageEventCard: null,
    description: "",
    resume: "Édition spéciale dédiée aux femmes d’influence dans l’entrepreneuriat.",
    partenaires: [],
    video: null,
    galerie: [],
    lieu: "Université de Montréal",
    path: "/evenements/meet1-femmes-2023",
    invite: []
  },
  {
    id: "Marche_Noel_2022",
    titre: "Marché de Noël",
    date: "30 novembre 2022",
    imagePrincipale: null,
    imageEventCard: null,
    description: "",
    resume: "Marché festif organisé par UdeM Entreprend au pavillon Jean-Brillant.",
    partenaires: [],
    video: null,
    galerie: [],
    lieu: "Pavillon Jean-Brillant, Université de Montréal",
    path: "/evenements/marche-noel-2022",
    invite: []
  },
  {
    id: "Foire_2022",
    titre: "Foire entrepreneuriale",
    date: "16 novembre 2022",
    imagePrincipale: null,
    imageEventCard: null,
    description: "",
    resume: "Venez rencontrer les organismes entrepreneuriaux de l'UdeM lors de cette foire organisée par Millénium Québecor.",
    partenaires: [],
    video: null,
    galerie: [],
    lieu: "Université de Montréal",
    path: "/evenements/foire-2022",
    invite: []
  },
  {
    id: "Mouvement_2022",
    titre: "Entrepreneuriat UdeM - Joins le mouvement!",
    date: "6 octobre 2022",
    imagePrincipale: null,
    imageEventCard: null,
    description: "",
    resume: "Soirée de lancement de la communauté entrepreneuriale de l’UdeM.",
    partenaires: [],
    video: null,
    galerie: [],
    lieu: "Université de Montréal",
    path: "/evenements/mouvement-2022",
    invite: []
  },
  {
    id: "Mouvement_2022_2",
    titre: "Entrepreneuriat UdeM - Joins le mouvement!",
    date: "5 octobre 2022",
    imagePrincipale: null,
    imageEventCard: null,
    description: "",
    resume: "Lancement de l’initiative entrepreneuriale sur un autre campus de l’UdeM.",
    partenaires: [],
    video: null,
    galerie: [],
    lieu: "Université de Montréal",
    path: "/evenements/mouvement-2022-2",
    invite: []
  },
  {
    id: "Meet1_2022",
    titre: "MEET1ENTREPRENEUR",
    date: "15 septembre 2022",
    imagePrincipale: null,
    imageEventCard: null,
    description: "",
    resume: "Rencontres avec des entrepreneurs dans un cadre dynamique au campus MIL.",
    partenaires: [],
    video: null,
    galerie: [],
    lieu: "Campus MIL, Université de Montréal",
    path: "/evenements/meet1-2022",
    invite: []
  }
];
