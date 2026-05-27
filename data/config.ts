export type Stat = {
  value: string;
  label: string;
  detail: string;
};

export type MediaAsset = {
  src: string;
  alt: string;
  caption?: string;
};

export type PersonCard = {
  name: string;
  role: string;
  image: string;
  logo?: string;
  note: string;
};

export type VideoItem = {
  title: string;
  category: string;
  src: string;
  thumbnail: string;
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
};

export type City = {
  slug: string;
  name: string;
  editions: string;
  participants: string;
  heroImage: string;
  mapPosition: {
    x: number;
    y: number;
    side?: "top" | "bottom" | "left" | "right";
  };
  description: string;
  stats: Stat[];
  gallery: MediaAsset[];
  testimonials: Testimonial[];
};

const galleryPhotos = [
  "/gallery/gallery-1.jpeg",
  "/gallery/gallery-2.jpeg",
  "/gallery/gallery-3.jpeg",
  "/gallery/gallery-4.jpeg",
  "/gallery/gallery-5.jpeg"
] as const;

const pressVisuals = {
  parisien: "/presse/presse-parisien.png",
  elle: "/presse/presse-elle.png",
  coolmag: "/presse/presse-coolmag.png",
  nova: "/presse/presse-nova.png"
} as const;

const premiumVisuals = {
  heroPoster: "/gallery/gallery-2.jpeg",
  concept: "/gallery/gallery-3.jpeg",
  genesis: "/gallery/gallery-1.jpeg",
  contact: "/gallery/gallery-4.jpeg",
  press: "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1200&q=80",
  cityNight: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80",
  popUp: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80",
  weekend: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=900&q=80"
} as const;

export const pressKit = {
  eventName: "La Bringue.",
  tagline: "La fête version meufs",
  badge: "La plus grosse soirée réservée aux femmes — Depuis 2019",
  description:
    "La Bringue c'est la soirée pensée pour les femmes et par les femmes : un moment entre filles dans un espace safe pour danser, chanter, s'amuser et rencontrer d'autres Bringueuses !",
  heroVideo: {
    src: "/videos/hero-video.mp4",
    poster: premiumVisuals.heroPoster
  },
  heroStats: [
    { value: "+125K", label: "abonnés", detail: "Sur les réseaux sociaux" },
    { value: "+24K", label: "tickets", detail: "Vendus en 2025" },
    { value: "+200", label: "Bringues", detail: "Prévues en 2025" }
  ],
  pressLabel: "Dossier La Bringue",
  ctas: {
    primary: "Voir le concept",
    secondary: "Télécharger le dossier",
    contact: "Accueillir La Bringue",
    cityBack: "Retour press kit",
    cityNumbers: "Voir les chiffres",
    cityContact: "Nous contacter"
  },
  sectionCopy: {
    stats: {
      eyebrow: "Chiffres clés",
      title: "La Bringue en quelques chiffres.",
      kicker:
        "Une communauté installée, un rythme d'événements ambitieux et une position forte: numéro 1 des soirées réservées aux femmes."
    },
    artists: {
      eyebrow: "Formats",
      title: "Des Bringues pour danser, s'amuser et bien plus.",
      kicker:
        "La Bringue peut vivre en club, en pop-up, en soirée à thème ou en week-end inaugurable à l'étranger.",
      artistsTitle: "Déroulé d'une Bringue classique",
      collaborationsTitle: "Idées d'activations"
    },
    videos: {
      eyebrow: "Presse",
      title: "On en parle dans la presse.",
      kicker:
        "Le concept a déjà été raconté par Coolmag, Elle, Le Parisien et Radio Nova autour de sa promesse safe place."
    },
    gallery: {
      eyebrow: "Immersion",
      title: "Nos Bringueuses en images.",
      kicker:
        "Dancefloor, rencontres & good vibes — l'ambiance La Bringue en images."
    },
    cities: {
      eyebrow: "Villes",
      title: "Les villes où nous sommes implantées.",
      kicker:
        "La Bringue est née à Paris et s'est développée dans plusieurs villes françaises, jusqu'à Bruxelles."
    },
    testimonials: {
      eyebrow: "Le mot des Bringueuses",
      title: "Elles parlent de safe place, de liberté et d'amitiés."
    },
    cityPage: {
      eyebrow: "Ville implantée",
      ctaEyebrow: "Accueillir La Bringue",
      ctaPrefix: "Développer La Bringue à"
    }
  },
  stats: [
    { value: "+130K", label: "abonnés réseaux sociaux", detail: "Communauté cumulée sur les réseaux sociaux." },
    { value: "+5000", label: "clientes", detail: "Clientes ayant participé à une Bringue." },
    { value: "+200", label: "soirées en 2025", detail: "Soirées organisées en 2025." },
    { value: "N°1", label: "girls only party", detail: "Référence des soirées réservées aux femmes." }
  ],
  concept: {
    eyebrow: "Introduction",
    title: "Une soirée 100% meufs, fun et safe.",
    body: [
      "Tout a commencé il y a plus de 5 ans dans un petit bar parisien. Une cinquantaine de meufs, de la musique, et une seule envie : danser et se lâcher loin du regard des hommes.",
      "Aujourd'hui, La Bringue s'étend à travers toute l'Europe. La mission reste la même : proposer des soirées en non-mixité, dans des espaces safe, pour faire la fête librement et rencontrer d'autres Bringueuses."
    ],
    quote: "La Bringue, c'est bien plus qu'une soirée — c'est une communauté fondée sur la sororité et la bienveillance, où chaque meuf est libre d'être elle-même.",
    image: premiumVisuals.concept
  },
  genesis: {
    eyebrow: "Expérience",
    title: "Comment se passe une Bringue classique ?",
    body: [
      "Quand → Les Bringues ont lieu principalement le week-end et les jeudis.",
      "Comment → La communication et la billetterie sont gérées par La Bringue, en collaboration avec les établissements.",
      "Qui → On fait appel à nos propres DJs, une photographe et une vidéaste. Une membre de notre équipe est présente à chaque soirée.",
      "Quoi → Selon les soirées et les thèmes, on peut ajouter des animations : danseuses, showcases, stands et bien plus."
    ],
    quote: "Un format encadré, festif et rassurant pour les établissements comme pour les participantes.",
    image: premiumVisuals.genesis
  },
  artists: [
    {
      name: "Week-end",
      role: "Temps fort",
      image: galleryPhotos[2],
      note: "Les week-ends rassemblent le plus de Bringueuses et concentrent l'énergie du concept."
    },
    {
      name: "1 ou 2 DJ",
      role: "Programmation",
      image: galleryPhotos[1],
      note: "Une sélection musicale adaptée à la ville, à la salle et à la communauté attendue."
    },
    {
      name: "Photo & video",
      role: "Contenu",
      image: galleryPhotos[0],
      note: "Une photographe et une vidéaste documentent chaque édition pour nourrir les réseaux et la presse."
    },
    {
      name: "Animations",
      role: "Expérience",
      image: galleryPhotos[3],
      note: "Danseuses, cracheuses de feu, groupes de danse ou acrobates selon le thème de la soirée."
    }
  ],
  collaborations: [
    {
      name: "Performances",
      role: "Pendant les soirées",
      image: "/vision/vision1.png",
      note: "Laisser la place à des performances pour créer un vrai temps fort scénique."
    },
    {
      name: "Soirées à thème",
      role: "College party",
      image: "/vision/vision2.png",
      note: "Imaginer des concepts visuels forts et facilement identifiables par la communauté."
    },
    {
      name: "Pop-up corners",
      role: "Boutiques & business",
      image: "/vision/vision3.png",
      note: "Mettre en avant des boutiques et petits business tenus par des femmes."
    },
    {
      name: "Week-end à l'étranger",
      role: "Expansion",
      image: "/vision/vision4.png",
      note: "Partir un week-end à l'étranger pour inaugurer une nouvelle ville."
    }
  ],
  videos: [
    { title: "Cool Mag Paris", category: "2020", src: "https://coolmagazine.fr/immersion-a-la-bringue-la-soiree-100-meufs-de-_clarification/", thumbnail: "" },
    { title: "Madmoizelle", category: "2021", src: "https://www.madmoizelle.com/jai-teste-la-bringue-une-soiree-100-entre-filles-et-cetait-ouf-1204798", thumbnail: "" },
    { title: "Le Parisien", category: "2021", src: "https://youtu.be/oAPed6EdnB8?si=VGcHZvQzRWQhDJTa", thumbnail: "" },
    { title: "Bondy Blog", category: "2023", src: "https://www.bondyblog.fr/societe/la-bringue-faire-la-fete-entre-femmes/", thumbnail: "" },
    { title: "Mouv'", category: "2023", src: "https://www.radiofrance.fr/mouv/podcasts/reporterter/la-bringue-des-soirees-pour-faire-la-fete-entre-femmes-3869950", thumbnail: "" },
    { title: "20 Minutes", category: "2023", src: "https://www.20minutes.fr/societe/4041987-20230621-paris-securite-liberte-sororite-comme-devise-soirees-bringue-reservees-exclusivement-femmes", thumbnail: "" },
    { title: "M6 Info", category: "2024", src: "https://youtu.be/ydS4rtR4xSk?si=VR25jshjyQtihCN-", thumbnail: "" },
    { title: "Elle", category: "2024", src: "https://www.elle.fr/Societe/News/Sans-hommes-la-fete-est-plus-folle-Reportage-au-coeur-d-une-soiree-reservee-aux-femmes-a-Marseille", thumbnail: "" },
    { title: "Ouest France", category: "2025", src: "https://www.ouest-france.fr/bretagne/rennes-35000/a-rennes-ces-soirees-100-pourcent-feminines-seduisent-les-participantes-cest-agreable-de-danser-sans-etre-derangee-edf19b42-d1c4-11f0-a0f2-b2a4fbd1e8d9", thumbnail: "" },
    { title: "Le Monde", category: "2025", src: "https://www.lemonde.fr/series-d-ete/article/2025/08/05/quel-plaisir-de-ne-pas-etre-percue-comme-un-morceau-de-viande-entre-femmes-des-soirees-plus-liberees_6626644_3451060.html", thumbnail: "" },
    { title: "Virgule", category: "2025", src: "https://www.virgule.lu/luxembourg/la-bringue-un-concept-de-soirees-100-feminines-qui-cartonne-en-france-arrive-au-luxembourg/91163068.html", thumbnail: "" },
    { title: "Libération", category: "2025", src: "https://www.liberation.fr/lifestyle/ce-lacher-prise-je-navais-jamais-vu-ca-avant-les-soirees-en-non-mixite-une-bulle-de-liberte-20250308_5NXGSXMFLJC7NAZJVOVEZPSSPI/", thumbnail: "" },
    { title: "France Inter", category: "2025", src: "https://www.radiofrance.fr/franceinter/podcasts/zoom-zoom-zen/zoom-zoom-zen-du-lundi-25-aout-2025-3194169", thumbnail: "" }
  ],
  gallery: [
    { src: galleryPhotos[0], alt: "Bringueuses sur le dancefloor", caption: "Dancefloor" },
    { src: galleryPhotos[1], alt: "DJ La Bringue sous les néons", caption: "DJ booth" },
    { src: galleryPhotos[2], alt: "Groupe de Bringueuses en soirée", caption: "Communauté" },
    { src: galleryPhotos[3], alt: "Performance micro La Bringue", caption: "Live moment" },
    { src: galleryPhotos[4], alt: "Ambiance La Bringue entre copines", caption: "Safe place" }
  ],
  cities: [
    {
      slug: "paris",
      name: "Paris",
      editions: "2019",
      participants: "ville fondatrice",
      heroImage: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1600&q=80",
      mapPosition: { x: 49, y: 34, side: "right" },
      description: "Paris est la ville fondatrice de La Bringue, née dans un petit bar avec une cinquantaine de filles.",
      stats: [
        { value: "2019", label: "implantation", detail: "Année de la première Bringue à Paris." },
        { value: "500", label: "participantes / soirée", detail: "Nombre moyen de participantes par soirée." },
        { value: "100+", label: "soirées", detail: "Éditions organisées à Paris." }
      ],
      gallery: [
        { src: galleryPhotos[0], alt: "Photos La Bringue Paris" },
        { src: galleryPhotos[1], alt: "DJ booth La Bringue Paris" },
        { src: galleryPhotos[2], alt: "Bringueuses à Paris" },
        { src: galleryPhotos[3], alt: "Performance La Bringue Paris" },
        { src: galleryPhotos[4], alt: "Ambiance La Bringue Paris" }
      ],
      testimonials: [
        {
          quote: "Pour moi La Bringue c'est la soirée parfaite en tant que personne anxieuse, je ne me suis jamais sentie en danger là-bas.",
          name: "Meije",
          role: "Bringueuse",
          company: "Paris"
        }
      ]
    },
    {
      slug: "lille",
      name: "Lille",
      editions: "2022",
      participants: "ville implantée",
      heroImage: "https://images.unsplash.com/photo-1569937703691-095c119cdbc3?auto=format&fit=crop&w=1600&q=80",
      mapPosition: { x: 50, y: 20, side: "right" },
      description: "Lille fait partie des premières villes où La Bringue s'est développée hors Paris.",
      stats: [
        { value: "2022", label: "implantation", detail: "Année de la première Bringue à Lille." },
        { value: "250", label: "participantes / soirée", detail: "Nombre moyen de participantes par soirée." },
        { value: "30+", label: "soirées", detail: "Éditions organisées à Lille." }
      ],
      gallery: [
        { src: "/villes/PHOTOS%20VILLE%20/LILLE/boucherie-bringue-2.jpg", alt: "La Bringue Lille" },
        { src: "/villes/PHOTOS%20VILLE%20/LILLE/boucherie-bringue-10.jpg", alt: "La Bringue Lille" },
        { src: "/villes/PHOTOS%20VILLE%20/LILLE/boucherie-bringue-16.jpg", alt: "La Bringue Lille" },
        { src: "/villes/PHOTOS%20VILLE%20/LILLE/boucherie-bringue-22.jpg", alt: "La Bringue Lille" },
        { src: "/villes/PHOTOS%20VILLE%20/LILLE/boucherie-bringue-24.jpg", alt: "La Bringue Lille" },
        { src: "/villes/PHOTOS%20VILLE%20/LILLE/boucherie-bringue-32.jpg", alt: "La Bringue Lille" }
      ],
      testimonials: [
        {
          quote: "La Bringue m'a apporté un endroit safe et m'a permis de me faire des amies.",
          name: "Saya",
          role: "Bringueuse",
          company: "Lille"
        }
      ]
    },
    {
      slug: "marseille",
      name: "Marseille",
      editions: "2022",
      participants: "ville implantée",
      heroImage: "https://images.unsplash.com/photo-1559113202-c916c0f3994e?auto=format&fit=crop&w=1600&q=80",
      mapPosition: { x: 57, y: 66, side: "right" },
      description: "Marseille accueille La Bringue depuis 2022, avec une communauté fidèle et festive.",
      stats: [
        { value: "2022", label: "implantation", detail: "Année de la première Bringue à Marseille." },
        { value: "200", label: "participantes / soirée", detail: "Nombre moyen de participantes par soirée." },
        { value: "30+", label: "soirées", detail: "Éditions organisées à Marseille." }
      ],
      gallery: [
        { src: "/villes/PHOTOS%20VILLE%20/MARSEILLE%20/Bringue-4mai-r%C3%A9form%C3%A9s-003.jpg", alt: "La Bringue Marseille" },
        { src: "/villes/PHOTOS%20VILLE%20/MARSEILLE%20/Bringue-4mai-r%C3%A9form%C3%A9s-011.jpg", alt: "La Bringue Marseille" },
        { src: "/villes/PHOTOS%20VILLE%20/MARSEILLE%20/Bringue-4mai-r%C3%A9form%C3%A9s-014.jpg", alt: "La Bringue Marseille" },
        { src: "/villes/PHOTOS%20VILLE%20/MARSEILLE%20/Bringue-4mai-r%C3%A9form%C3%A9s-020.jpg", alt: "La Bringue Marseille" },
        { src: "/villes/PHOTOS%20VILLE%20/MARSEILLE%20/Bringue-4mai-r%C3%A9form%C3%A9s-024.jpg", alt: "La Bringue Marseille" },
        { src: "/villes/PHOTOS%20VILLE%20/MARSEILLE%20/Bringue-4mai-r%C3%A9form%C3%A9s-026.jpg", alt: "La Bringue Marseille" }
      ],
      testimonials: [
        {
          quote: "J'ai participé à La Bringue deux fois sur Marseille. Les filles présentes étaient adorables.",
          name: "Camille",
          role: "Bringueuse",
          company: "Marseille"
        }
      ]
    },
    {
      slug: "toulouse",
      name: "Toulouse",
      editions: "2022",
      participants: "ville implantée",
      heroImage: "https://images.unsplash.com/photo-1579818276695-8a36530eb0b1?auto=format&fit=crop&w=1600&q=80",
      mapPosition: { x: 43, y: 68, side: "left" },
      description: "Toulouse rejoint La Bringue en 2022.",
      stats: [
        { value: "2022", label: "implantation", detail: "Année de la première Bringue à Toulouse." },
        { value: "250", label: "participantes / soirée", detail: "Nombre moyen de participantes par soirée." },
        { value: "40+", label: "soirées", detail: "Éditions organisées à Toulouse." }
      ],
      gallery: [
        { src: "/villes/PHOTOS%20VILLE%20/TOULOUSE/IMG_5319.jpeg", alt: "La Bringue Toulouse" },
        { src: "/villes/PHOTOS%20VILLE%20/TOULOUSE/IMG_5382.jpeg", alt: "La Bringue Toulouse" },
        { src: "/villes/PHOTOS%20VILLE%20/TOULOUSE/IMG_5420.jpeg", alt: "La Bringue Toulouse" },
        { src: "/villes/PHOTOS%20VILLE%20/TOULOUSE/IMG_5467.jpeg", alt: "La Bringue Toulouse" },
        { src: "/villes/PHOTOS%20VILLE%20/TOULOUSE/IMG_5492.jpeg", alt: "La Bringue Toulouse" },
        { src: "/villes/PHOTOS%20VILLE%20/TOULOUSE/IMG_5502.jpeg", alt: "La Bringue Toulouse" }
      ],
      testimonials: [
        {
          quote: "Les filles qui sont ultra bienveillantes: une safe place en fait.",
          name: "Meije",
          role: "Bringueuse",
          company: "Toulouse"
        }
      ]
    },
    {
      slug: "lyon",
      name: "Lyon",
      editions: "2022",
      participants: "ville implantée",
      heroImage: "https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?auto=format&fit=crop&w=1600&q=80",
      mapPosition: { x: 56, y: 50, side: "right" },
      description: "Lyon fait partie des villes où La Bringue a confirmé son potentiel national.",
      stats: [
        { value: "2022", label: "implantation", detail: "Année de la première Bringue à Lyon." },
        { value: "250", label: "participantes / soirée", detail: "Nombre moyen de participantes par soirée." },
        { value: "40+", label: "soirées", detail: "Éditions organisées à Lyon." }
      ],
      gallery: [
        { src: "/villes/PHOTOS%20VILLE%20/LYON/DSC03524.jpg", alt: "La Bringue Lyon" },
        { src: "/villes/PHOTOS%20VILLE%20/LYON/DSC03695.jpg", alt: "La Bringue Lyon" },
        { src: "/villes/PHOTOS%20VILLE%20/LYON/AFROBRINGUE%20(132%20sur%2050).jpg", alt: "La Bringue Lyon" },
        { src: "/villes/PHOTOS%20VILLE%20/LYON/AFROBRINGUE%20(142%20sur%2050).jpg", alt: "La Bringue Lyon" },
        { src: "/villes/PHOTOS%20VILLE%20/LYON/AFROBRINGUE%20(61%20sur%20153).jpg", alt: "La Bringue Lyon" }
      ],
      testimonials: [
        {
          quote: "La musique était top et je me suis sentie à l'aise pour communiquer.",
          name: "Camille",
          role: "Bringueuse",
          company: "Lyon"
        }
      ]
    },
    {
      slug: "bordeaux",
      name: "Bordeaux",
      editions: "2023",
      participants: "ville implantée",
      heroImage: "https://images.unsplash.com/photo-1585061528750-3baca2cb6a10?auto=format&fit=crop&w=1600&q=80",
      mapPosition: { x: 39, y: 55, side: "left" },
      description: "Bordeaux rejoint La Bringue en 2023.",
      stats: [
        { value: "2023", label: "implantation", detail: "Année de la première Bringue à Bordeaux." },
        { value: "200", label: "participantes / soirée", detail: "Nombre moyen de participantes par soirée." },
        { value: "25+", label: "soirées", detail: "Éditions organisées à Bordeaux." }
      ],
      gallery: [
        { src: "/villes/PHOTOS%20VILLE%20/BORDEAUX/IMG_0017.jpeg", alt: "La Bringue Bordeaux" },
        { src: "/villes/PHOTOS%20VILLE%20/BORDEAUX/IMG_0107.jpeg", alt: "La Bringue Bordeaux" },
        { src: "/villes/PHOTOS%20VILLE%20/BORDEAUX/IMG_0133.jpeg", alt: "La Bringue Bordeaux" },
        { src: "/villes/PHOTOS%20VILLE%20/BORDEAUX/IMG_0153.jpeg", alt: "La Bringue Bordeaux" },
        { src: "/villes/PHOTOS%20VILLE%20/BORDEAUX/IMG_0239.jpeg", alt: "La Bringue Bordeaux" },
        { src: "/villes/PHOTOS%20VILLE%20/BORDEAUX/IMG_0274.jpeg", alt: "La Bringue Bordeaux" }
      ],
      testimonials: [
        {
          quote: "Je cherchais un lieu safe dans lequel m'épanouir et me sentir à ma place.",
          name: "Saya",
          role: "Bringueuse",
          company: "Bordeaux"
        }
      ]
    },
    {
      slug: "montpellier",
      name: "Montpellier",
      editions: "2023",
      participants: "ville implantée",
      heroImage: "https://images.unsplash.com/photo-1585849834908-3481231155e8?auto=format&fit=crop&w=1600&q=80",
      mapPosition: { x: 51, y: 69, side: "bottom" },
      description: "Montpellier s'ajoute à la carte La Bringue en 2023.",
      stats: [
        { value: "2023", label: "implantation", detail: "Année de la première Bringue à Montpellier." },
        { value: "200", label: "participantes / soirée", detail: "Nombre moyen de participantes par soirée." },
        { value: "20+", label: "soirées", detail: "Éditions organisées à Montpellier." }
      ],
      gallery: [
        { src: "/villes/PHOTOS%20VILLE%20/MONTPELLIER/DSC00093.jpg", alt: "La Bringue Montpellier" },
        { src: "/villes/PHOTOS%20VILLE%20/MONTPELLIER/DSC00149.jpg", alt: "La Bringue Montpellier" },
        { src: "/villes/PHOTOS%20VILLE%20/MONTPELLIER/DSC00223.jpg", alt: "La Bringue Montpellier" },
        { src: "/villes/PHOTOS%20VILLE%20/MONTPELLIER/DSC00313.jpg", alt: "La Bringue Montpellier" },
        { src: "/villes/PHOTOS%20VILLE%20/MONTPELLIER/DSC00392.jpg", alt: "La Bringue Montpellier" },
        { src: "/villes/PHOTOS%20VILLE%20/MONTPELLIER/DSC00523.jpg", alt: "La Bringue Montpellier" }
      ],
      testimonials: [
        {
          quote: "Une initiative top, je me suis sentie totalement à l'aise.",
          name: "Camille",
          role: "Bringueuse",
          company: "Montpellier"
        }
      ]
    },
    {
      slug: "barcelone",
      name: "Barcelone",
      editions: "2023",
      participants: "week-end",
      heroImage: "https://images.unsplash.com/photo-1583422409516-2895a77efded?auto=format&fit=crop&w=1600&q=80",
      mapPosition: { x: 47, y: 85, side: "right" },
      description: "Barcelone incarne le potentiel week-end à l'étranger du concept La Bringue.",
      stats: [
        { value: "2023", label: "implantation", detail: "Année de la première Bringue à Barcelone." },
        { value: "250", label: "participantes / soirée", detail: "Nombre moyen de participantes par soirée." },
        { value: "1", label: "soirée", detail: "Week-end d'inauguration à l'étranger." }
      ],
      gallery: [
        { src: "/villes/PHOTOS%20VILLE%20/BARCELONE/DSC04862.jpg", alt: "La Bringue Barcelone" },
        { src: "/villes/PHOTOS%20VILLE%20/BARCELONE/DSC05077.jpg", alt: "La Bringue Barcelone" },
        { src: "/villes/PHOTOS%20VILLE%20/BARCELONE/DSC05237.jpg", alt: "La Bringue Barcelone" },
        { src: "/villes/PHOTOS%20VILLE%20/BARCELONE/DSC05318.jpg", alt: "La Bringue Barcelone" },
        { src: "/villes/PHOTOS%20VILLE%20/BARCELONE/DSC05381.jpg", alt: "La Bringue Barcelone" },
        { src: "/villes/PHOTOS%20VILLE%20/BARCELONE/DSC05388.jpg", alt: "La Bringue Barcelone" }
      ],
      testimonials: [
        {
          quote: "La Bringue, c'est la soirée parfaite pour communiquer avec les filles.",
          name: "Meije",
          role: "Bringueuse",
          company: "Barcelone"
        }
      ]
    },
    {
      slug: "nantes",
      name: "Nantes",
      editions: "2023",
      participants: "ville implantée",
      heroImage: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?auto=format&fit=crop&w=1600&q=80",
      mapPosition: { x: 34, y: 40, side: "left" },
      description: "Nantes rejoint La Bringue en 2023.",
      stats: [
        { value: "2023", label: "implantation", detail: "Année de la première Bringue à Nantes." },
        { value: "150", label: "participantes / soirée", detail: "Nombre moyen de participantes par soirée." },
        { value: "15+", label: "soirées", detail: "Éditions organisées à Nantes." }
      ],
      gallery: [
        { src: galleryPhotos[2], alt: "Photos La Bringue Nantes" },
        { src: galleryPhotos[1], alt: "Promesse Nantes" }
      ],
      testimonials: [
        {
          quote: "La Bringue m'a apporté un lieu safe et plus encore, elle m'a permis de me faire des amies.",
          name: "Saya",
          role: "Bringueuse",
          company: "Nantes"
        }
      ]
    },
    {
      slug: "grenoble",
      name: "Grenoble",
      editions: "2023",
      participants: "ville implantée",
      heroImage: "https://images.unsplash.com/photo-1549480017-d76466a4b7e8?auto=format&fit=crop&w=1600&q=80",
      mapPosition: { x: 59, y: 56, side: "right" },
      description: "Grenoble rejoint le réseau La Bringue en 2023.",
      stats: [
        { value: "2023", label: "implantation", detail: "Année de la première Bringue à Grenoble." },
        { value: "150", label: "participantes / soirée", detail: "Nombre moyen de participantes par soirée." },
        { value: "15+", label: "soirées", detail: "Éditions organisées à Grenoble." }
      ],
      gallery: [
        { src: "/villes/PHOTOS%20VILLE%20/GRENOBLE/_O6A4914-.jpg", alt: "La Bringue Grenoble" },
        { src: "/villes/PHOTOS%20VILLE%20/GRENOBLE/_O6A4954-.jpg", alt: "La Bringue Grenoble" },
        { src: "/villes/PHOTOS%20VILLE%20/GRENOBLE/_O6A4957.jpg", alt: "La Bringue Grenoble" },
        { src: "/villes/PHOTOS%20VILLE%20/GRENOBLE/_O6A4971-.jpg", alt: "La Bringue Grenoble" },
        { src: "/villes/PHOTOS%20VILLE%20/GRENOBLE/_O6A4981-.jpg", alt: "La Bringue Grenoble" },
        { src: "/villes/PHOTOS%20VILLE%20/GRENOBLE/_O6A4984-.jpg", alt: "La Bringue Grenoble" }
      ],
      testimonials: [
        {
          quote: "Je ne me suis jamais sentie en danger là-bas, au contraire, toujours à l'aise.",
          name: "Meije",
          role: "Bringueuse",
          company: "Grenoble"
        }
      ]
    },
    {
      slug: "bruxelles",
      name: "Bruxelles",
      editions: "2024",
      participants: "Belgique",
      heroImage: "https://images.unsplash.com/photo-1491557345352-5929e343eb89?auto=format&fit=crop&w=1600&q=80",
      mapPosition: { x: 53, y: 10, side: "right" },
      description: "Bruxelles marque l'extension du concept jusqu'en Belgique.",
      stats: [
        { value: "2024", label: "implantation", detail: "Année de la première Bringue à Bruxelles." },
        { value: "250", label: "participantes / soirée", detail: "Nombre moyen de participantes par soirée." },
        { value: "15+", label: "soirées", detail: "Éditions organisées à Bruxelles." }
      ],
      gallery: [
        { src: "/villes/PHOTOS%20VILLE%20/BRUXELLES/DSC05778.jpg", alt: "La Bringue Bruxelles" },
        { src: "/villes/PHOTOS%20VILLE%20/BRUXELLES/DSC05975.jpg", alt: "La Bringue Bruxelles" },
        { src: "/villes/PHOTOS%20VILLE%20/BRUXELLES/DSC06026.jpg", alt: "La Bringue Bruxelles" },
        { src: "/villes/PHOTOS%20VILLE%20/BRUXELLES/DSC06062.jpg", alt: "La Bringue Bruxelles" },
        { src: "/villes/PHOTOS%20VILLE%20/BRUXELLES/DSC06119.jpg", alt: "La Bringue Bruxelles" },
        { src: "/villes/PHOTOS%20VILLE%20/BRUXELLES/DSC06181.jpg", alt: "La Bringue Bruxelles" }
      ],
      testimonials: [
        {
          quote: "La Bringue, c'est une safe place en fait.",
          name: "Meije",
          role: "Bringueuse",
          company: "Bruxelles"
        }
      ]
    },
    {
      slug: "cannes",
      name: "Cannes",
      editions: "2024",
      participants: "ville implantée",
      heroImage: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=1600&q=80",
      mapPosition: { x: 61, y: 68, side: "right" },
      description: "Cannes rejoint La Bringue en 2024.",
      stats: [
        { value: "2024", label: "implantation", detail: "Année de la première Bringue à Cannes." },
        { value: "150", label: "participantes / soirée", detail: "Nombre moyen de participantes par soirée." },
        { value: "3", label: "soirées", detail: "Éditions organisées à Cannes." }
      ],
      gallery: [
        { src: "/villes/PHOTOS%20VILLE%20/CANNES/DSC07498.jpg", alt: "La Bringue Cannes" },
        { src: "/villes/PHOTOS%20VILLE%20/CANNES/DSC07542.jpg", alt: "La Bringue Cannes" },
        { src: "/villes/PHOTOS%20VILLE%20/CANNES/DSC07571.jpg", alt: "La Bringue Cannes" },
        { src: "/villes/PHOTOS%20VILLE%20/CANNES/DSC07580.jpg", alt: "La Bringue Cannes" },
        { src: "/villes/PHOTOS%20VILLE%20/CANNES/DSC07639.jpg", alt: "La Bringue Cannes" },
        { src: "/villes/PHOTOS%20VILLE%20/CANNES/DSC07676.jpg", alt: "La Bringue Cannes" }
      ],
      testimonials: [
        {
          quote: "Les filles présentes étaient adorables.",
          name: "Camille",
          role: "Bringueuse",
          company: "Cannes"
        }
      ]
    },
    {
      slug: "caen",
      name: "Caen",
      editions: "2025",
      participants: "ville implantée",
      heroImage: "https://images.unsplash.com/photo-1568684411959-0a5b0b0b0b0b?auto=format&fit=crop&w=1600&q=80",
      mapPosition: { x: 42, y: 27, side: "left" },
      description: "Caen rejoint La Bringue en 2025.",
      stats: [
        { value: "2025", label: "implantation", detail: "Année de la première Bringue à Caen." },
        { value: "200", label: "participantes / soirée", detail: "Nombre moyen de participantes par soirée." },
        { value: "8", label: "soirées", detail: "Éditions organisées à Caen." }
      ],
      gallery: [
        { src: "/villes/PHOTOS%20VILLE%20/CAEN/_DSF6902.jpg", alt: "La Bringue Caen" },
        { src: "/villes/PHOTOS%20VILLE%20/CAEN/_DSF6922.jpg", alt: "La Bringue Caen" },
        { src: "/villes/PHOTOS%20VILLE%20/CAEN/_DSF6933.jpg", alt: "La Bringue Caen" },
        { src: "/villes/PHOTOS%20VILLE%20/CAEN/_DSF6967.jpg", alt: "La Bringue Caen" },
        { src: "/villes/PHOTOS%20VILLE%20/CAEN/_DSF6969.jpg", alt: "La Bringue Caen" },
        { src: "/villes/PHOTOS%20VILLE%20/CAEN/_DSF7017.jpg", alt: "La Bringue Caen" }
      ],
      testimonials: [
        {
          quote: "La Bringue, c'est la soirée parfaite entre copines dans un espace safe.",
          name: "Saya",
          role: "Bringueuse",
          company: "Caen"
        }
      ]
    },
    {
      slug: "limoges",
      name: "Limoges",
      editions: "2025",
      participants: "ville implantée",
      heroImage: "https://images.unsplash.com/photo-1567521464027-f127ff144326?auto=format&fit=crop&w=1600&q=80",
      mapPosition: { x: 46, y: 56, side: "left" },
      description: "Limoges rejoint La Bringue en 2025.",
      stats: [
        { value: "2025", label: "implantation", detail: "Année de la première Bringue à Limoges." },
        { value: "100", label: "participantes / soirée", detail: "Nombre moyen de participantes par soirée." },
        { value: "2", label: "soirées", detail: "Éditions organisées à Limoges." }
      ],
      gallery: [
        { src: "/villes/PHOTOS%20VILLE%20/LIMOGE%20-%20ANGERS%20-%20ANNECY/064LABRINGUEPARTY.jpg", alt: "La Bringue Limoges" },
        { src: "/villes/PHOTOS%20VILLE%20/LIMOGE%20-%20ANGERS%20-%20ANNECY/114LABRINGUEPARTY.jpg", alt: "La Bringue Limoges" }
      ],
      testimonials: [
        {
          quote: "Une soirée 100% meufs dans un espace safe, exactement ce dont j'avais besoin.",
          name: "Camille",
          role: "Bringueuse",
          company: "Limoges"
        }
      ]
    },
    {
      slug: "metz",
      name: "Metz",
      editions: "2025",
      participants: "ville implantée",
      heroImage: "https://images.unsplash.com/photo-1570077156714-cbb73a5b7b9f?auto=format&fit=crop&w=1600&q=80",
      mapPosition: { x: 63, y: 26, side: "right" },
      description: "Metz rejoint La Bringue en 2025.",
      stats: [
        { value: "2025", label: "implantation", detail: "Année de la première Bringue à Metz." },
        { value: "300", label: "participantes / soirée", detail: "Nombre moyen de participantes par soirée." },
        { value: "12", label: "soirées", detail: "Éditions organisées à Metz." }
      ],
      gallery: [
        { src: "/villes/PHOTOS%20VILLE%20/METZ/DSCF0779.PNG", alt: "La Bringue Metz" },
        { src: "/villes/PHOTOS%20VILLE%20/METZ/DSCF0845.PNG", alt: "La Bringue Metz" },
        { src: "/villes/PHOTOS%20VILLE%20/METZ/DSCF0853.PNG", alt: "La Bringue Metz" },
        { src: "/villes/PHOTOS%20VILLE%20/METZ/DSCF0883.PNG", alt: "La Bringue Metz" },
        { src: "/villes/PHOTOS%20VILLE%20/METZ/DSCF0892.PNG", alt: "La Bringue Metz" },
        { src: "/villes/PHOTOS%20VILLE%20/METZ/DSCF0900.PNG", alt: "La Bringue Metz" }
      ],
      testimonials: [
        {
          quote: "Je me suis sentie libre et à l'aise dès le premier soir.",
          name: "Meije",
          role: "Bringueuse",
          company: "Metz"
        }
      ]
    },
    {
      slug: "angers",
      name: "Angers",
      editions: "2025",
      participants: "ville implantée",
      heroImage: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1600&q=80",
      mapPosition: { x: 41, y: 44, side: "left" },
      description: "Angers rejoint La Bringue en 2025.",
      stats: [
        { value: "2025", label: "implantation", detail: "Année de la première Bringue à Angers." },
        { value: "130", label: "participantes / soirée", detail: "Nombre moyen de participantes par soirée." },
        { value: "4", label: "soirées", detail: "Éditions organisées à Angers." }
      ],
      gallery: [
        { src: "/villes/PHOTOS%20VILLE%20/LIMOGE%20-%20ANGERS%20-%20ANNECY/064LABRINGUEPARTY.jpg", alt: "La Bringue Angers" },
        { src: "/villes/PHOTOS%20VILLE%20/LIMOGE%20-%20ANGERS%20-%20ANNECY/114LABRINGUEPARTY.jpg", alt: "La Bringue Angers" }
      ],
      testimonials: [
        {
          quote: "La Bringue m'a permis de me faire des amies dans un cadre bienveillant.",
          name: "Saya",
          role: "Bringueuse",
          company: "Angers"
        }
      ]
    },
    {
      slug: "strasbourg",
      name: "Strasbourg",
      editions: "2025",
      participants: "ville implantée",
      heroImage: "https://images.unsplash.com/photo-1559113513-d5d96c08f5e1?auto=format&fit=crop&w=1600&q=80",
      mapPosition: { x: 65, y: 33, side: "right" },
      description: "Strasbourg rejoint La Bringue en 2025.",
      stats: [
        { value: "2025", label: "implantation", detail: "Année de la première Bringue à Strasbourg." },
        { value: "250", label: "participantes / soirée", detail: "Nombre moyen de participantes par soirée." },
        { value: "8", label: "soirées", detail: "Éditions organisées à Strasbourg." }
      ],
      gallery: [
        { src: "/villes/PHOTOS%20VILLE%20/STRASBOURG/DSC06431.jpg", alt: "La Bringue Strasbourg" },
        { src: "/villes/PHOTOS%20VILLE%20/STRASBOURG/DSC06479.jpg", alt: "La Bringue Strasbourg" },
        { src: "/villes/PHOTOS%20VILLE%20/STRASBOURG/DSC06610.jpg", alt: "La Bringue Strasbourg" },
        { src: "/villes/PHOTOS%20VILLE%20/STRASBOURG/DSC06628.jpg", alt: "La Bringue Strasbourg" },
        { src: "/villes/PHOTOS%20VILLE%20/STRASBOURG/DSC06630.jpg", alt: "La Bringue Strasbourg" },
        { src: "/villes/PHOTOS%20VILLE%20/STRASBOURG/DSC06649.jpg", alt: "La Bringue Strasbourg" }
      ],
      testimonials: [
        {
          quote: "Un concept parfait pour se lâcher entre copines dans un espace safe.",
          name: "Camille",
          role: "Bringueuse",
          company: "Strasbourg"
        }
      ]
    },
    {
      slug: "nancy",
      name: "Nancy",
      editions: "2025",
      participants: "ville implantée",
      heroImage: "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?auto=format&fit=crop&w=1600&q=80",
      mapPosition: { x: 59, y: 31, side: "right" },
      description: "Nancy rejoint La Bringue en 2025.",
      stats: [
        { value: "2025", label: "implantation", detail: "Année de la première Bringue à Nancy." },
        { value: "200", label: "participantes / soirée", detail: "Nombre moyen de participantes par soirée." },
        { value: "8", label: "soirées", detail: "Éditions organisées à Nancy." }
      ],
      gallery: [
        { src: galleryPhotos[3], alt: "Photos La Bringue Nancy" },
        { src: galleryPhotos[0], alt: "Soirée La Bringue Nancy" }
      ],
      testimonials: [
        {
          quote: "Je ne me suis jamais sentie aussi libre sur une piste de danse.",
          name: "Meije",
          role: "Bringueuse",
          company: "Nancy"
        }
      ]
    },
    {
      slug: "brest",
      name: "Brest",
      editions: "2025",
      participants: "ville implantée",
      heroImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1600&q=80",
      mapPosition: { x: 27, y: 31, side: "left" },
      description: "Brest rejoint La Bringue en 2025.",
      stats: [
        { value: "2025", label: "implantation", detail: "Année de la première Bringue à Brest." },
        { value: "120", label: "participantes / soirée", detail: "Nombre moyen de participantes par soirée." },
        { value: "1", label: "soirée", detail: "Édition organisée à Brest." }
      ],
      gallery: [
        { src: "/villes/PHOTOS%20VILLE%20/BREST%20-%20LORIENT/HDR_2182.jpg", alt: "La Bringue Brest" },
        { src: "/villes/PHOTOS%20VILLE%20/BREST%20-%20LORIENT/HDR_2235.jpg", alt: "La Bringue Brest" },
        { src: "/villes/PHOTOS%20VILLE%20/BREST%20-%20LORIENT/HDR_2291.jpg", alt: "La Bringue Brest" },
        { src: "/villes/PHOTOS%20VILLE%20/BREST%20-%20LORIENT/HDR_2395.jpg", alt: "La Bringue Brest" },
        { src: "/villes/PHOTOS%20VILLE%20/BREST%20-%20LORIENT/HDR_2470.jpg", alt: "La Bringue Brest" },
        { src: "/villes/PHOTOS%20VILLE%20/BREST%20-%20LORIENT/HDR_2618.jpg", alt: "La Bringue Brest" }
      ],
      testimonials: [
        {
          quote: "La Bringue à Brest, c'était une première soirée 100% safe et inoubliable.",
          name: "Saya",
          role: "Bringueuse",
          company: "Brest"
        }
      ]
    },
    {
      slug: "luxembourg",
      name: "Luxembourg",
      editions: "2025",
      participants: "Luxembourg",
      heroImage: "https://images.unsplash.com/photo-1565787908064-24bf92e7b72d?auto=format&fit=crop&w=1600&q=80",
      mapPosition: { x: 60, y: 18, side: "right" },
      description: "Luxembourg marque une nouvelle étape internationale pour La Bringue.",
      stats: [
        { value: "2025", label: "implantation", detail: "Année de la première Bringue à Luxembourg." },
        { value: "150", label: "participantes / soirée", detail: "Nombre moyen de participantes par soirée." },
        { value: "3", label: "soirées", detail: "Éditions organisées à Luxembourg." }
      ],
      gallery: [
        { src: galleryPhotos[4], alt: "Photos La Bringue Luxembourg" },
        { src: galleryPhotos[2], alt: "Soirée La Bringue Luxembourg" }
      ],
      testimonials: [
        {
          quote: "La Bringue s'exporte et c'est exactement ce dont on avait besoin ici.",
          name: "Camille",
          role: "Bringueuse",
          company: "Luxembourg"
        }
      ]
    },
    {
      slug: "la-reunion",
      name: "La Réunion",
      editions: "2026",
      participants: "La Réunion",
      heroImage: "https://images.unsplash.com/photo-1548625149-720754983425?auto=format&fit=crop&w=1600&q=80",
      mapPosition: { x: 83, y: 88, side: "left" },
      description: "La Réunion marque l'extension de La Bringue dans les DOM-TOM.",
      stats: [
        { value: "2026", label: "implantation", detail: "Année de la première Bringue à La Réunion." },
        { value: "200", label: "participantes / soirée", detail: "Nombre moyen de participantes par soirée." },
        { value: "2", label: "soirées", detail: "Éditions organisées à La Réunion." }
      ],
      gallery: [
        { src: "/villes/PHOTOS%20VILLE%20/LA%20R%C3%A9UNION/C96A4031.jpg", alt: "La Bringue La Réunion" },
        { src: "/villes/PHOTOS%20VILLE%20/LA%20R%C3%A9UNION/C96A4213.jpg", alt: "La Bringue La Réunion" },
        { src: "/villes/PHOTOS%20VILLE%20/LA%20R%C3%A9UNION/C96A4246.jpg", alt: "La Bringue La Réunion" },
        { src: "/villes/PHOTOS%20VILLE%20/LA%20R%C3%A9UNION/C96A4249.jpg", alt: "La Bringue La Réunion" },
        { src: "/villes/PHOTOS%20VILLE%20/LA%20R%C3%A9UNION/C96A4269.jpg", alt: "La Bringue La Réunion" }
      ],
      testimonials: [
        {
          quote: "La Bringue débarque à La Réunion et c'est une révolution pour les meufs d'ici.",
          name: "Meije",
          role: "Bringueuse",
          company: "La Réunion"
        }
      ]
    },
    {
      slug: "lorient",
      name: "Lorient",
      editions: "2026",
      participants: "ville implantée",
      heroImage: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=1600&q=80",
      mapPosition: { x: 31, y: 37, side: "left" },
      description: "Lorient rejoint La Bringue en 2026.",
      stats: [
        { value: "2026", label: "implantation", detail: "Année de la première Bringue à Lorient." },
        { value: "150", label: "participantes / soirée", detail: "Nombre moyen de participantes par soirée." },
        { value: "2", label: "soirées", detail: "Éditions organisées à Lorient." }
      ],
      gallery: [
        { src: "/villes/PHOTOS%20VILLE%20/BREST%20-%20LORIENT/HDR_2635.jpg", alt: "La Bringue Lorient" },
        { src: "/villes/PHOTOS%20VILLE%20/BREST%20-%20LORIENT/HDR_2701.jpg", alt: "La Bringue Lorient" },
        { src: "/villes/PHOTOS%20VILLE%20/BREST%20-%20LORIENT/HDR_2723.jpg", alt: "La Bringue Lorient" },
        { src: "/villes/PHOTOS%20VILLE%20/BREST%20-%20LORIENT/HDR_2799.jpg", alt: "La Bringue Lorient" },
        { src: "/villes/PHOTOS%20VILLE%20/BREST%20-%20LORIENT/HDR_2946.jpg", alt: "La Bringue Lorient" },
        { src: "/villes/PHOTOS%20VILLE%20/BREST%20-%20LORIENT/HDR_2949.jpg", alt: "La Bringue Lorient" }
      ],
      testimonials: [
        {
          quote: "Une soirée safe et festive, exactement ce qu'il manquait à Lorient.",
          name: "Saya",
          role: "Bringueuse",
          company: "Lorient"
        }
      ]
    },
    {
      slug: "annecy",
      name: "Annecy",
      editions: "2026",
      participants: "ville implantée",
      heroImage: "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?auto=format&fit=crop&w=1600&q=80",
      mapPosition: { x: 64, y: 52, side: "right" },
      description: "Annecy rejoint La Bringue en 2026.",
      stats: [
        { value: "2026", label: "implantation", detail: "Année de la première Bringue à Annecy." },
        { value: "150", label: "participantes / soirée", detail: "Nombre moyen de participantes par soirée." },
        { value: "1", label: "soirée", detail: "Édition organisée à Annecy." }
      ],
      gallery: [
        { src: "/villes/PHOTOS%20VILLE%20/LIMOGE%20-%20ANGERS%20-%20ANNECY/064LABRINGUEPARTY.jpg", alt: "La Bringue Annecy" },
        { src: "/villes/PHOTOS%20VILLE%20/LIMOGE%20-%20ANGERS%20-%20ANNECY/114LABRINGUEPARTY.jpg", alt: "La Bringue Annecy" }
      ],
      testimonials: [
        {
          quote: "La Bringue à Annecy, c'est une safe place dans un cadre magnifique.",
          name: "Camille",
          role: "Bringueuse",
          company: "Annecy"
        }
      ]
    }
  ],
  testimonials: [
    {
      quote:
        "En tant que jeune femme trans et handi, je cherchais un lieu safe dans lequel m'épanouir et me sentir à ma place. La Bringue me l'a apporté et plus encore elle m'a permis de me faire des amies.",
      name: "Saya",
      role: "Bringueuse",
      company: "La Bringue"
    },
    {
      quote:
        "J'ai participé à La Bringue deux fois sur Marseille. Les filles présentes étaient adorables. La musique était top et je n'ai pas pu profiter à fond de la soirée.",
      name: "Camille",
      role: "Bringueuse",
      company: "Marseille"
    },
    {
      quote:
        "Pour moi La Bringue c'est la soirée parfaite en tant que personne anxieuse. Je ne me suis jamais sentie en danger, au contraire, toujours à l'aise pour communiquer avec les filles.",
      name: "Meije",
      role: "Bringueuse",
      company: "La Bringue"
    }
  ],
  venues: [
    { name: "La Place des Canailles", logo: "" },
    { name: "Faranight Clubbing", logo: "" },
    { name: "Manray Bar & Food", logo: "" },
    { name: "L'Apostrophe", logo: "" },
    { name: "La Voûte de l'Embuscade", logo: "" },
    { name: "La Traverse de Balkis", logo: "" },
    { name: "Les Réformés Rooftop", logo: "" }
  ],
  contact: {
    title: "Contactez-nous.",
    body: "N'hésitez pas à nous contacter pour accueillir La Bringue dans votre établissement.",
    eyebrow: "Équipe La Bringue",
    heading: "Contact",
    image: premiumVisuals.contact,
    email: "clarisse@bringue.co",
    secondaryEmail: "laurianne@bringue.co",
    phone: "",
    instagram: "@labringue",
    tiktok: "https://www.tiktok.com/@la.bringue",
    formFields: ["Nom", "Établissement", "Email", "Message"],
    people: [
      {
        name: "Laurianne",
        role: "Gérante",
        email: "laurianne@bringue.co",
        image: "/contact/laurianne.png"
      }
    ]
  }
} as const;
