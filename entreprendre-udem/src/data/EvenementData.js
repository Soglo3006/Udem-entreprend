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
  imagePrincipale: "evenement/M1E/M1E_3E/M1E_3E.jpg",
  imageEventCard: "evenement/M1E/M1E_3E/M1E_3E.jpg",
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
      description: "👨‍💼 Adam Rahmouni El Idrissi est le cofondateur de growsurely.com, une agence spécialisée dans l'accompagnement des entreprises B2B générant 100 000 $ par mois et plus. Grâce à des campagnes de marketing sortant, il aide ces entreprises à croître de manière stable et prévisible.",
      image: "/evenement/M1E/M1E_3E/Adam_REI.png"
    },
    {
      nom: "Tayssa Waldron",
      description: "👩‍💼 Tayssa Waldron est une auteure et entrepreneure sociale. Fondatrice de la plateforme Déclic du fric, elle milite pour des finances plus inclusives en combinant psychologie sociale, innovation comportementale et éducation financière. Elle est également à la tête de l'agence Déclic Lab, spécialisée dans le développement de services financiers innovants.",
      image: "/evenement/M1E/M1E_3E/Tayssa.png"
    },
    {
      nom: "Alain Déom",
      description: "👨‍💼 Alain Déom est président d'une firme de génie-conseil. Expert en structures complexes, il se distingue par son leadership stratégique et sa capacité à diriger des projets d’envergure au Québec et à l’international. Il valorise une approche orientée client et sécurité, tout en introduisant des solutions innovantes dans le secteur.",
      image: "/evenement/M1E/M1E_3E/Alain.png"
    },
    {
      nom: "Antho Tran",
      description: "👨‍💼 Créateur de contenu depuis plus de 12 ans, Antho Tran est cofondateur du Gala InfluenceCréation, de l’Association des créateurs du Québec et du média Dix4 Info. Il joue un rôle clé dans la structuration et la valorisation de l’industrie de la création numérique au Québec.",
      image: "/evenement/M1E/M1E_3E/Antho.png"
    },
    {
      nom: "Anne France Goldwater",
      description: "👩‍💼 Anne-France Goldwater est avocate et cofondatrice du cabinet Goldwater, Dubé. Elle a marqué le droit canadien par ses plaidoyers en faveur des droits des conjoints de fait, des couples de même sexe, des enfants, et même des animaux. Son cabinet est reconnu pour son engagement dans les causes sociales et juridiques majeures du pays.",
      image: "/evenement/M1E/M1E_3E/Anne.png"
    },
    {
      nom: "Renée Joseph",
      description: "👩‍💼 Renée Joseph est comédienne, animatrice et journaliste culturelle. Active sur Natyf TV et forte de son expérience chez MAtv et Radio-Canada, elle incarne une voix dynamique et charismatique de la scène culturelle québécoise, avec des racines haïtienne et camerounaise.",
      image: "/evenement/M1E/M1E_3E/Renée-Joseph.jpg"
    }
  ]
},
  {
  id: "meet1-femmes-2024",
  titre: "Meet1entrepreneur: édition femmes d’influence",
  date: "9 mars 2024",
  imagePrincipale: "evenement/M1E/M1E_femme_2024/M1E_femme_2024.png",
  imageEventCard: "evenement/M1E/M1E_femme_2024/M1E_femme_2024.png",
  description : "",
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
  invite: [
    {
      nom: "Madwa-Nika Cadet",
      description: "✨ Madwa-Nika Cadet représente la circonscription de Bourassa-Sauvé à l’Assemblée nationale du Québec depuis octobre 2022. Elle est porte-parole de l’opposition officielle pour plusieurs dossiers majeurs, et possède une solide formation en droit, en administration des affaires et en politiques publiques. Elle a exercé comme avocate en droit commercial et travaillé comme analyste juridique au sein du Groupe de la Banque mondiale. Très engagée socialement, elle siège sur plusieurs conseils d’administration et est une figure montante en politique québécoise.",
      image: "/evenement/M1E/M1E_femme_2024/Madwa.jpg"
    },
    {
      nom: "Krystina Abboud",
      description: "✨ Krystina commence sa carrière dans les agences publicitaires au Moyen-Orient avant de s’installer à Montréal pour poursuivre ses études au HEC. Elle fonde Squalls, une agence spécialisée dans la stratégie marketing axée sur les pratiques ESG. Elle valorise les entreprises responsables et accompagne des projets de grande envergure avec une forte sensibilité au développement durable.",
      image: "/evenement/M1E/M1E_femme_2024/Krystina.png"
    },
    {
      nom: "Audrey-Camille Nkambou",
      description: "✨ Originaire du Cameroun, Audrey-Camille Nkambou est une opticienne propriétaire qui s’est illustrée en devenant la première femme noire à ouvrir une clinique d’optométrie au Québec. En moins d’un an, elle ouvre deux succursales à Brossard et Longueuil. Elle incarne une relève entrepreneuriale dynamique, passionnée par la santé oculaire, la mode et l’engagement communautaire.",
      image: "/evenement/M1E/M1E_femme_2024/Audrey.png"
    },
    {
      nom: "Jessica Frédérique",
      description: "✨ Jessica F est une visionnaire de l’événementiel et des relations publiques. Elle fonde Cachet Communications après plus de 10 ans d’expérience dans des domaines variés, allant des mariages au marketing pharmaceutique. Elle allie son savoir-faire à une volonté affirmée d’apporter plus de diversité et d’inclusion dans son secteur.",
      image: "/evenement/M1E/M1E_femme_2024/Jessica.png"
    },
    {
      nom: "Nada Zogheib",
      description: "✨ Nada Zogheib est directrice des programmes économiques au RFAQ et ancienne directrice générale du CEuMONTRÉAL. Avec plus de 25 ans d’expérience en ventes, coaching, formation et fidélisation client, elle accompagne les entreprises innovantes en technologie. Son parcours comprend également des collaborations avec plusieurs incubateurs et une implication active dans des comités consultatifs et conseils d’administration.",
      image: "/evenement/M1E/M1E_femme_2024/Nada_Zogheib.jpg"
    },
    {
      nom: "Eléonore Di Nicola",
      description: "✨ Eléonore, franco-italienne, œuvre à la TCRI où elle élabore des stratégies inclusives en emploi pour les personnes immigrantes. En 2023, elle fonde @inter_bridges, une plateforme dédiée aux étudiants internationaux. Elle travaille aussi avec des consulats pour promouvoir la culture et bâtir des ponts entre communautés. Dynamique et passionnée, elle est fréquemment invitée à intervenir sur les questions d’inclusion, de diversité et de culture.",
      image: "/evenement/M1E/M1E_femme_2024/Eléonore.jpg"
    },
    {
      nom: "Isabelle Le Ber",
      description: "✨ Isabelle Le Ber est la première femme PDG de l'École d’Entrepreneurship de Beauce (EEB), où elle œuvre depuis 2017. Avec une formation en enseignement et des certifications en coaching et management, elle met son énergie au service du leadership féminin et de l’entrepreneuriat. Elle est également entrepreneure et figure influente dans le développement des leaders au Québec.",
      image: "/evenement/M1E/M1E_femme_2024/Isabelle-Le-Ber.jpg"
    }
  ]
},
  {
  "id": "meet1-2023",
  "titre": "Meet1entrepreneur - 2è édition",
  "date": "6 octobre 2023",
  "imagePrincipale": "evenement/M1E/M1E_2E/M1E_2E.jpg",
  "imageEventCard": "evenement/M1E/M1E_2E/M1E_2E.jpg",
  "description": "",
  "resume": "Une édition spéciale de Meet1entrepreneur pour échanger avec des entrepreneurs inspirants à l'UdeM.",
  "partenaires": [],
  "video": null,
  "galerie": [],
  "lieu": "Campus MIL",
  "path": "/evenements/meet1-2023",
  "invite": [
    {
      "nom": "Brice Salmon",
      "description": "PDG et co-fondateur du Baltic Club inc., une marque montréalaise de style de vie. Depuis 2015, il développe avec Mélanie Ouellette une entreprise devenue leader canadien dans son secteur, fabriquant bougies, papeterie et autres essentiels du quotidien, aujourd’hui distribués dans des milliers de points de vente à travers l’Amérique du Nord.",
      "image": "/evenement/M1E/M1E_2E/Brice.png"
    },
    {
      "nom": "Corinne Chrétien",
      "description": "Coach et consultante depuis 2016, Corinne accompagne des dirigeant·e·s et entrepreneur·e·s dans le développement du leadership conscient. Elle travaille avec des PME, grandes entreprises et organisations publiques, en mettant de l’avant une approche humaine et transformationnelle, avec pour mission de contribuer à un monde plus humain.",
      "image": "/evenement/M1E/M1E_2E/Corinne-Chrétien.jpg"
    },
    {
      "nom": "Valentin Kravtchenko",
      "description": "Entrepreneur social et expert en communication numérique, Valentin a fondé Grey-box pour offrir un accès WiFi à des ressources éducatives gratuites dans les régions reculées. Il allie créativité, technologie et engagement communautaire, tout en étant un acteur actif de MTL NewTech. Il aime détourner le growth hacking pour des causes positives.",
      "image": "/evenement/M1E/M1E_2E/Valentin.png"
    },
    {
      "nom": "Suzanne Donofrio",
      "description": "Entrepreneure et gestionnaire aguerrie, Suzanne a fondé une entreprise de franchises comptant plus de 65 affiliés. Spécialiste en service à la clientèle, vente et transformation organisationnelle, elle est aujourd’hui formatrice chez Solutions & Co, où elle aide les organisations à atteindre des standards élevés de service et d’expérience-client.",
      "image": "/evenement/M1E/M1E_2E/Suzanne-Donofrio.jpg"
    },
    {
      "nom": "Annie Darveau",
      "description": "Coordonnatrice principale à l’entrepreneuriat à Millénium Québecor (UdeM), Annie possède une maîtrise en psychologie et un 2e cycle en gestion. Forte d’une carrière hybride entre le conseil, la formation et la gestion, elle accompagne avec passion les étudiant·e·s et institutions dans le développement de l’entrepreneuriat.",
      "image": "/evenement/M1E/M1E_2E/Annie-Darveau.jpg"
    },
    {
      "nom": "Eddy Dureuil",
      "description": "Entrepreneur engagé en développement durable, Eddy a fondé la première laverie écologique en Guyane, Cyclo’Com en Martinique, puis Solutions Ecotime Inc. au Canada. Il conçoit des projets innovants autour de la mobilité douce et de la gestion de l’eau, avec une forte volonté d’avoir un impact social et environnemental positif.",
      "image": "/evenement/M1E/M1E_2E/Eddy.png"
    }
  ]
}
,
  {
  id: "meet1-femmes-2023",
  titre: "Meet1entrepreneur: édition femmes d’influence",
  date: "18 mars 2023",
  imagePrincipale: "evenement/M1E/M1E_femme/M1E_femme.jpg",
  imageEventCard: "evenement/M1E/M1E_femme/M1E_femme.jpg",
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
  invite: [
    {
      nom: "Genevieve Desautels",
      description: "Geneviève Desautels, MBA, CRHA, MCC, œuvre depuis plus de 27 ans dans le domaine des ressources humaines. Après 16 ans dans les PME et grandes entreprises, elle fonde sa propre pratique en 2010 pour se consacrer au développement de leadership authentique. Auteure, coach exécutive, conférencière et entrepreneure, elle a notamment été PDG d’Illuxi et cofondatrice d’Amplio Stratégies. Depuis 2022, elle est directrice générale d’Éduc’alcool.",
      image: "/evenement/M1E/M1E_femme/Geneviève_Desautels.jpg"
    },
    {
      nom: "Caterina Milioto",
      description: "Caterina Milioto est ingénieure et PDG du Groupe Intervia. Avec plus de 20 ans d’expérience en transport et mobilité urbaine, elle se démarque par son leadership, son implication sociale et ses projets d’envergure comme le tunnel Louis-Hippolyte-La Fontaine. Lauréate PDG de l’année 2022 par Les Affaires, elle est aussi active dans plusieurs associations professionnelles et œuvre à l’international.",
      image: "/evenement/M1E/M1E_femme/Caterina_Milioto.jpg"
    },
    {
      nom: "Farnel Fleurant",
      description: "Farnel Fleurant, diplômée de l’Université d’Ottawa, a travaillé plus de 15 ans en marketing avant de fonder Workind, une plateforme de bien-être au travail. Son entreprise propose une approche flexible et personnalisée pour améliorer la qualité de vie des employés. Farnel est aussi cofondatrice du Mouvement Ensemble Inc, promouvant la diversité dans le monde des affaires.",
      image: "/evenement/M1E/M1E_femme/Farnel_Fleurant.jpg"
    },
    {
      nom: "Silvia Costantini",
      description: "Silvia Costantini est consule générale d’Italie à Montréal depuis 2019 et représente également l’Italie auprès de l’OACI. Diplomate de carrière, elle a exercé dans plusieurs pays (Chine, Tunisie, Inde) et au sein de l’Union européenne. Polyglotte et titulaire de plusieurs diplômes en relations internationales, elle est reconnue pour sa rigueur diplomatique et son engagement multilatéral.",
      image: "/evenement/M1E/M1E_femme/Silvia_Costantini.jpg"
    },
    {
      nom: "Awa Diarra",
      description: "Fondatrice et PDG de Snack Simple et TAsti, Awa Diarra œuvre depuis plus de 8 ans dans l’agroalimentaire. Ses produits, distribués dans plus de 5 pays et 2000 points de vente, incarnent une vision moderne et inclusive de l’alimentation. Elle est un modèle d’entrepreneuriat audacieux et exportable à l’international.",
      image: "/evenement/M1E/M1E_femme/Awa diarra.jpg"
    },
    {
      nom: "Isabelle Pelletier",
      description: "Vice-présidente de l’AEM depuis 2022, Isabelle Pelletier possède une solide expérience en communications, ayant travaillé sur des projets majeurs comme le 375e de Montréal. Elle est aussi enseignante en relations publiques à l’Université de Montréal et co-directrice générale de la Coalition maritime canadienne, où elle milite pour des politiques publiques favorables aux employeurs maritimes.",
      image: "/evenement/M1E/M1E_femme/Isabelle-Pelletier.jpg"
    }
  ]
}
,
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
  imagePrincipale: "evenement/M1E/M1E_2022/M1E_2022.jpg",
  imageEventCard: "evenement/M1E/M1E_2022/M1E_2022.jpg",
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
    description: "Fasciné par le monde des affaires et des affaires publiques, Pierre s'est investi de la mission d'aider et de donner une voix aux jeunes gens d'affaires du Québec. PDG du Regroupement des jeunes chambres de commerce du Québec, il agit notamment à titre de représentant patronal au sein de la Commission des partenaires du marché du travail. Avant de se joindre au RJCCQ, Pierre a exercé différentes fonctions en développement des affaires, gestion, ou encore à titre de conseiller en relations intergouvernementales. Il détient une maîtrise de droit international de l'Université de Cergy ainsi qu'une maîtrise en économie et politique internationale de l'Université Laval.",
    image: "/evenement/M1E/M1E_2022/Pierre.jpg"
  },
  {
    nom: "Nada Zogheib",
    description: "Nada Zogheib possède plus de 15 ans d'expérience en vente, en gestion de services à la clientèle, en formation et en stratégies de fidélisation de la clientèle dans les entreprises en technologie de l'information. Elle a également été chargée de mettre en place un département de service à la clientèle et de formation chez KMtechnologies (Montréal). Depuis octobre 2019, elle est directrice générale du CeuMONTRÉAL, le Centre d'entrepreneuriat de l'Université de Montréal, un organisme à but non lucratif qui a pour mission de développer une culture entrepreneuriale et d'innovation à l'Université de Montréal.",
    image: "/evenement/M1E/M1E_2022/Nada_Zogheib.jpg"
  },
  {
    nom: "Adriano D'angelo",
    description: "Directeur de comptes entreprise chez RBC Banque Royale, Adriano D'Angelo se spécialise dans la gestion des besoins bancaires et financiers à l'entreprise. Il peut recommander les meilleures solutions adaptées pour votre entreprise, parmi un vaste éventail d'options, pour vous permettre de vous concentrer sur l'essentiel: l'exploitation de votre entreprise. Expert en solutions bancaires pour entreprises, il saura vous guider à travers vos projets présents et futurs.",
    image: "/evenement/M1E/M1E_2022/Adriano.jpg"
  },
  {
    nom: "Tynnie Judith",
    description: "Conseillère en services bancaires chez RBC, Tynnie Judith se spécialise dans l'accompagnement à l'aboutissement de vos projets. Généraliste, elle peut vous apporter son soutien dans les 4 grands domaines de la Banque soit les Comptes Bancaires, le Crédit, les Investissements et la Gestion du Risques. Forte d'une expérience dans les services financiers et de la gestion clientèle, elle sera en mesure de vous conseiller sur les produits adéquats à la réalisation de vos objectifs.",
    image: "/evenement/M1E/M1E_2022/Tynnie.png"
  },
  {
    nom: "Omar Malle Gueye",
    description: "",
    image: "/evenement/M1E/M1E_2022/Omar.jpg"
  },
  {
    nom: "Gabrielle Labbé",
    description: "",
    image: "/evenement/M1E/M1E_2022/Gabrielle.jpg"
  },
  {
    nom: "Mathieu Morin-Lamy",
    description: "",
    image: "/evenement/M1E/M1E_2022/Mathieu-Morin-Lamy.jpg"
  }]
}
];
