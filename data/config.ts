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
  tagline: "100% meufs. 100% fun. 100% safe.",
  badge: "Girls only party - Safe place - France, Belgique & Luxembourg",
  description:
    "La Bringue rassemble les Bringueuses dans des lieux safe pour danser, s'amuser, se lâcher entre copines et se faire de nouvelles amies.",
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
    { value: "+125K", label: "abonnés réseaux", detail: "Communauté cumulée sur les réseaux sociaux." },
    { value: "+5000", label: "clientes", detail: "Clientes ayant participé à une Bringue." },
    { value: "+200", label: "soirées 2025", detail: "Soirées organisées en 2025." },
    { value: "N°1", label: "girls only party", detail: "Référence des soirées réservées aux femmes." }
  ],
  concept: {
    eyebrow: "Introduction",
    title: "Une soirée 100% meufs, fun et safe.",
    body: [
      "La première Bringue date d'il y a plus de 5 ans. Dans un petit bar parisien, une cinquantaine de filles se retrouvent pour danser, s'amuser et se lâcher entre copines.",
      "Aujourd'hui, La Bringue étend son concept et s'exporte dans de nombreuses villes jusqu'en Belgique. Le but: rassembler encore plus de Bringueuses et leur proposer des lieux safe où faire la fête et se faire de nouvelles amies."
    ],
    quote: "Participer à La Bringue, c'est entrer dans une soirée 100% meufs, 100% fun, 100% safe.",
    image: premiumVisuals.concept
  },
  genesis: {
    eyebrow: "Expérience",
    title: "Comment se passe une Bringue classique ?",
    body: [
      "Les Bringues ne sont pas limitées à un jour de la semaine, mais c'est le week-end que nous rassemblons le plus de Bringueuses.",
      "Nous faisons appel à 1 ou 2 DJ ainsi qu'à une photographe et une vidéaste.",
      "En fonction des soirées, nous ajoutons parfois des animations : danseuses, cracheuses de feu, groupes de danse ou acrobates.",
      "Nous gérons la billetterie via Dice.",
      "Une membre de notre équipe est toujours présente lors des soirées."
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
    {
      title: "Coolmag",
      category: "09/2020",
      src: "https://assets.mixkit.co/videos/preview/mixkit-friends-dancing-at-a-nightclub-4281-large.mp4",
      thumbnail: pressVisuals.coolmag
    },
    {
      title: "Elle",
      category: "07/2021",
      src: "https://assets.mixkit.co/videos/preview/mixkit-young-women-dancing-at-a-party-4523-large.mp4",
      thumbnail: pressVisuals.elle
    },
    {
      title: "Le Parisien",
      category: "12/2021",
      src: "https://assets.mixkit.co/videos/preview/mixkit-dj-playing-music-at-a-club-3534-large.mp4",
      thumbnail: pressVisuals.parisien
    },
    {
      title: "Radio Nova",
      category: "02/2022",
      src: "https://assets.mixkit.co/videos/preview/mixkit-dj-playing-music-at-a-club-3534-large.mp4",
      thumbnail: pressVisuals.nova
    }
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
      editions: "mars 2019",
      participants: "ville fondatrice",
      heroImage: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1600&q=80",
      mapPosition: { x: 49, y: 34, side: "right" },
      description: "Paris est la ville fondatrice de La Bringue, née dans un petit bar avec une cinquantaine de filles.",
      stats: [
        { value: "2019", label: "implantation", detail: "Année de la première Bringue à Paris." },
        { value: "+2000", label: "bringueuses", detail: "Clientes ayant participé à une Bringue Paris." },
        { value: "+8", label: "soirées", detail: "Éditions organisées à Paris." }
      ],
      gallery: [
        { src: galleryPhotos[0], alt: "Photos La Bringue Paris" },
        { src: galleryPhotos[2], alt: "Bringueuses à Paris" }
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
      editions: "mai 2022",
      participants: "ville implantée",
      heroImage: "https://images.unsplash.com/photo-1569937703691-095c119cdbc3?auto=format&fit=crop&w=1600&q=80",
      mapPosition: { x: 50, y: 20, side: "right" },
      description: "Lille fait partie des premières villes où La Bringue s'est développée hors Paris.",
      stats: [
        { value: "2022", label: "implantation", detail: "Année de la première Bringue à Lille." },
        { value: "+500", label: "bringueuses", detail: "Clientes ayant participé à une Bringue Lille." },
        { value: "+3", label: "soirées", detail: "Éditions organisées à Lille." }
      ],
      gallery: [
        { src: galleryPhotos[2], alt: "Photos La Bringue Lille" },
        { src: galleryPhotos[1], alt: "DJ booth La Bringue Lille" }
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
      editions: "juillet 2022",
      participants: "ville implantée",
      heroImage: "https://images.unsplash.com/photo-1559113202-c916c0f3994e?auto=format&fit=crop&w=1600&q=80",
      mapPosition: { x: 57, y: 66, side: "right" },
      description: "Marseille accueille La Bringue depuis juillet 2022, avec une communauté fidèle et festive.",
      stats: [
        { value: "2022", label: "implantation", detail: "Année de la première Bringue à Marseille." },
        { value: "+400", label: "bringueuses", detail: "Clientes ayant participé à une Bringue Marseille." },
        { value: "+2", label: "soirées", detail: "Éditions organisées à Marseille." }
      ],
      gallery: [
        { src: galleryPhotos[0], alt: "Photos La Bringue Marseille" },
        { src: galleryPhotos[3], alt: "Performance La Bringue Marseille" }
      ],
      testimonials: [
        {
          quote: "J'ai participé à La Bringue deux fois sur Marseille. Les filles présentes étaient adorables et je n'ai pas pu profiter à fond de la soirée.",
          name: "Camille",
          role: "Bringueuse",
          company: "Marseille"
        }
      ]
    },
    {
      slug: "toulouse",
      name: "Toulouse",
      editions: "août 2022",
      participants: "ville implantée",
      heroImage: "https://images.unsplash.com/photo-1579818276695-8a36530eb0b1?auto=format&fit=crop&w=1600&q=80",
      mapPosition: { x: 43, y: 68, side: "left" },
      description: "Toulouse rejoint la timeline La Bringue en août 2022.",
      stats: [
        { value: "2022", label: "implantation", detail: "Année de la première Bringue à Toulouse." },
        { value: "+400", label: "bringueuses", detail: "Clientes ayant participé à une Bringue Toulouse." },
        { value: "+2", label: "soirées", detail: "Éditions organisées à Toulouse." }
      ],
      gallery: [
        { src: galleryPhotos[2], alt: "Photos La Bringue Toulouse" },
        { src: galleryPhotos[0], alt: "Dancefloor La Bringue Toulouse" }
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
      editions: "novembre 2022",
      participants: "ville implantée",
      heroImage: "https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?auto=format&fit=crop&w=1600&q=80",
      mapPosition: { x: 56, y: 50, side: "right" },
      description: "Lyon fait partie des villes où La Bringue a confirmé son potentiel national.",
      stats: [
        { value: "2022", label: "implantation", detail: "Année de la première Bringue à Lyon." },
        { value: "+300", label: "bringueuses", detail: "Clientes ayant participé à une Bringue Lyon." },
        { value: "+2", label: "soirées", detail: "Éditions organisées à Lyon." }
      ],
      gallery: [
        { src: galleryPhotos[1], alt: "Bringue classique Lyon" },
        { src: galleryPhotos[2], alt: "Photos La Bringue Lyon" }
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
      editions: "février 2023",
      participants: "ville implantée",
      heroImage: "https://images.unsplash.com/photo-1585061528750-3baca2cb6a10?auto=format&fit=crop&w=1600&q=80",
      mapPosition: { x: 39, y: 55, side: "left" },
      description: "Bordeaux rejoint La Bringue en février 2023.",
      stats: [
        { value: "2023", label: "implantation", detail: "Année de la première Bringue à Bordeaux." },
        { value: "+250", label: "bringueuses", detail: "Clientes ayant participé à une Bringue Bordeaux." },
        { value: "+1", label: "soirée", detail: "Édition organisée à Bordeaux." }
      ],
      gallery: [
        { src: galleryPhotos[3], alt: "Photos La Bringue Bordeaux" },
        { src: galleryPhotos[0], alt: "Promesse La Bringue Bordeaux" }
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
      editions: "mars 2023",
      participants: "ville implantée",
      heroImage: "https://images.unsplash.com/photo-1585849834908-3481231155e8?auto=format&fit=crop&w=1600&q=80",
      mapPosition: { x: 51, y: 69, side: "bottom" },
      description: "Montpellier s'ajoute à la carte La Bringue en mars 2023.",
      stats: [
        { value: "2023", label: "implantation", detail: "Année de la première Bringue à Montpellier." },
        { value: "+200", label: "bringueuses", detail: "Clientes ayant participé à une Bringue Montpellier." },
        { value: "+1", label: "soirée", detail: "Édition organisée à Montpellier." }
      ],
      gallery: [
        { src: galleryPhotos[0], alt: "Formats La Bringue Montpellier" },
        { src: galleryPhotos[2], alt: "Photos La Bringue Montpellier" }
      ],
      testimonials: [
        {
          quote: "J'ai grandi tatouée et danse avec plaisir parce que c'est top comme initiative.",
          name: "Camille",
          role: "Bringueuse",
          company: "Montpellier"
        }
      ]
    },
    {
      slug: "barcelone",
      name: "Barcelone",
      editions: "avril 2023",
      participants: "week-end",
      heroImage: "https://images.unsplash.com/photo-1583422409516-2895a77efded?auto=format&fit=crop&w=1600&q=80",
      mapPosition: { x: 47, y: 85, side: "right" },
      description: "Barcelone incarne le potentiel week-end à l'étranger du concept La Bringue.",
      stats: [
        { value: "2023", label: "implantation", detail: "Année de la première Bringue à Barcelone." },
        { value: "+150", label: "bringueuses", detail: "Clientes ayant participé au week-end Barcelone." },
        { value: "+1", label: "soirée", detail: "Week-end d'inauguration à l'étranger." }
      ],
      gallery: [
        { src: galleryPhotos[2], alt: "Week-end Barcelone La Bringue" },
        { src: galleryPhotos[1], alt: "Photos La Bringue Barcelone" }
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
      slug: "grenoble",
      name: "Grenoble",
      editions: "septembre 2023",
      participants: "ville implantée",
      heroImage: "https://images.unsplash.com/photo-1549480017-d76466a4b7e8?auto=format&fit=crop&w=1600&q=80",
      mapPosition: { x: 59, y: 56, side: "right" },
      description: "Grenoble rejoint le réseau La Bringue en septembre 2023.",
      stats: [
        { value: "2023", label: "implantation", detail: "Année de la première Bringue à Grenoble." },
        { value: "+200", label: "bringueuses", detail: "Clientes ayant participé à une Bringue Grenoble." },
        { value: "+1", label: "soirée", detail: "Édition organisée à Grenoble." }
      ],
      gallery: [
        { src: galleryPhotos[1], alt: "Déroulé Grenoble" },
        { src: galleryPhotos[3], alt: "Photos La Bringue Grenoble" }
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
      editions: "janvier 2024",
      participants: "Belgique",
      heroImage: "https://images.unsplash.com/photo-1491557345352-5929e343eb89?auto=format&fit=crop&w=1600&q=80",
      mapPosition: { x: 53, y: 10, side: "right" },
      description: "Bruxelles marque l'extension du concept jusqu'en Belgique.",
      stats: [
        { value: "2024", label: "implantation", detail: "Année de la première Bringue à Bruxelles." },
        { value: "+200", label: "bringueuses", detail: "Clientes ayant participé à une Bringue Bruxelles." },
        { value: "+1", label: "soirée", detail: "Première édition en Belgique." }
      ],
      gallery: [
        { src: galleryPhotos[3], alt: "Photos La Bringue Bruxelles" },
        { src: galleryPhotos[0], alt: "Dancefloor La Bringue Bruxelles" }
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
      slug: "nantes",
      name: "Nantes",
      editions: "avril 2024",
      participants: "ville implantée",
      heroImage: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?auto=format&fit=crop&w=1600&q=80",
      mapPosition: { x: 35, y: 42, side: "left" },
      description: "Nantes rejoint La Bringue en avril 2024.",
      stats: [
        { value: "2024", label: "implantation", detail: "Année de la première Bringue à Nantes." },
        { value: "+150", label: "bringueuses", detail: "Clientes ayant participé à une Bringue Nantes." },
        { value: "+1", label: "soirée", detail: "Édition organisée à Nantes." }
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
      slug: "cannes",
      name: "Cannes",
      editions: "mai 2024",
      participants: "ville implantée",
      heroImage: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=1600&q=80",
      mapPosition: { x: 61, y: 68, side: "right" },
      description: "Cannes est l'une des dernières implantations visibles dans le dossier, avec encore plus à venir.",
      stats: [
        { value: "2024", label: "implantation", detail: "Année de la première Bringue à Cannes." },
        { value: "+150", label: "bringueuses", detail: "Clientes ayant participé à une Bringue Cannes." },
        { value: "+1", label: "soirée", detail: "Édition organisée à Cannes." }
      ],
      gallery: [
        { src: galleryPhotos[0], alt: "Photos La Bringue Cannes" },
        { src: galleryPhotos[3], alt: "Formats Cannes" }
      ],
      testimonials: [
        {
          quote: "Les filles présentes étaient adorables.",
          name: "Camille",
          role: "Bringueuse",
          company: "Cannes"
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
        name: "Clarisse",
        role: "Créatrice",
        email: "clarisse@bringue.co",
        image: "/contact/clarisse.png"
      },
      {
        name: "Laurianne",
        role: "Gérante",
        email: "laurianne@bringue.co",
        image: "/contact/laurianne.png"
      }
    ]
  }
} as const;
