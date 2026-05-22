export const afrogrooversKit = {
  eventName: "AFROGROOVERS",
  tagline: "Sip & Groove. Afrobeat social experience.",
  badge: "GROOVE * AFROBEATS * LOVE",
  description:
    "Une experience afro premium, solaire et conviviale qui mixe musique, lifestyle, rencontres et outdoor summer vibes.",
  instagram: "https://www.instagram.com/afrogroovers/",
  logo: "/afrogroovers/logo/logo.jpeg",
  headerLogo: "/afrogroovers/logo/logo-main.png",
  baseline: "/afrogroovers/logo/baseline.jpeg",
  heroVideo: {
    src: "/afrogroovers/hero/hero-video.mp4",
    poster: "/afrogroovers/gallery/gallery-10.jpg"
  },
  stats: [
    { value: "+250", label: "Afrogroovers par event", detail: "Une communaute active rassemblee autour de chaque edition." },
    { value: "+20", label: "events prevus en 2026", detail: "Une programmation qui installe le concept dans la duree." },
    { value: "100%", label: "concept Afro Original", detail: "Afrobeats, highlife, amapiano, afro-house et groove culture." }
  ],
  concept: {
    eyebrow: "Concept",
    title: "Une parenthese afro chic, sociale et solaire.",
    body: [
      "AfroGroovers invite une communaute de fans d'Afrobeats dans une atmosphere elegante, cosy et relachee. Le format pense autant la musique que la rencontre: on vient groover, sip, networker et profiter d'un moment premium.",
      "Le voyage musical traverse les classiques intemporels de l'Afrobeats, les derniers tubes et les sous-genres qui font bouger la scene: highlife, afro-fusion, afropop, afro-house, afro-rave, afro-funk et afroswing."
    ],
    quote:
      "AfroGroovers transforme la soiree en experience sociale: chaleureuse, selective, musicale et profondement conviviale.",
    image: "/afrogroovers/gallery/gallery-1.jpg"
  },
  formats: [
    {
      name: "Outside",
      role: "Daytime format",
      note: "Une experience \"outside\" en rooftop ou open-air: cocktails, networking chic et groove afro.",
      image: "/afrogroovers/flyers/flyer3.jpg"
    },
    {
      name: "Party",
      role: "Night format",
      note: "Le format club AfroGroovers: dancefloor, DJ sets afrobeats, highlife et amapiano, avec une communaute qui vient vraiment groover.",
      image: "/afrogroovers/flyers/flyer2.jpg"
    }
  ],
  lineup: [
    {
      name: "DJ Megstar",
      role: "Afrobeats selector",
      image: "/afrogroovers/djs/gallery-4.jpg",
      note: "Une selection feel-good entre classiques, afropop et club edits."
    },
    {
      name: "DJ Phoenixa",
      role: "Groove architect",
      image: "/afrogroovers/djs/gallery-3.jpg",
      note: "Un set solaire qui connecte highlife, afro-house et afro-rave."
    }
  ],
  videos: [
    {
      category: "Arrival",
      title: "Le warm-up",
      description: "Les premiers verres, les retrouvailles et l'energie qui monte doucement.",
      src: "/afrogroovers/videos/video-1.mp4"
    },
    {
      category: "Dancefloor",
      title: "La connexion",
      description: "Un dancefloor ouvert, solaire et porte par les meilleurs sons afro.",
      src: "/afrogroovers/videos/video-2.mp4"
    },
    {
      category: "Social",
      title: "La communaute",
      description: "Des rencontres, du style et cette vibe chic qui rend le format unique.",
      src: "/afrogroovers/videos/video-3mp4.mp4"
    },
    {
      category: "Night",
      title: "Le peak time",
      description: "Le moment ou la soiree bascule en vraie experience collective.",
      src: "/afrogroovers/videos/video-4.mp4"
    }
  ],
  gallery: [
    { src: "/afrogroovers/gallery/gallery-10.jpg", alt: "AfroGroovers dancefloor moment" },
    { src: "/afrogroovers/gallery/gallery-9.jpg", alt: "AfroGroovers crowd energy" },
    { src: "/afrogroovers/gallery/gallery-8.jpg", alt: "AfroGroovers lifestyle portrait" },
    { src: "/afrogroovers/gallery/gallery-14.jpg", alt: "AfroGroovers sunset moment" },
    { src: "/afrogroovers/gallery/gallery-13.jpg", alt: "AfroGroovers crowd portrait" },
    { src: "/afrogroovers/gallery/gallery-12.jpg", alt: "AfroGroovers outdoor atmosphere" },
    { src: "/afrogroovers/gallery/gallery-11.jpg", alt: "AfroGroovers premium gathering" },
    { src: "/afrogroovers/gallery/gallery-2.jpg", alt: "AfroGroovers premium atmosphere" },
    { src: "/afrogroovers/gallery/gallery-1.jpg", alt: "AfroGroovers social moment" }
  ],
  contact: {
    eyebrow: "Contact",
    title: "Construire la prochaine experience AfroGroovers.",
    body:
      "Pour accueillir une edition, imaginer une collaboration ou connecter une marque a la communaute AfroGroovers.",
    email: "contact@chezceliaprod.fr",
    whatsapp: "+33652910427",
    people: [
      {
        name: "Celia",
        role: "Fondatrice",
        instagram: "@celia.sans.filtres",
        image: "/afrogroovers/contact/celia.png",
        href: "https://www.instagram.com/celia.sans.filtres/"
      },
      {
        name: "Stephane",
        role: "Fondateur",
        instagram: "@monsieur.guitoo",
        image: "/afrogroovers/contact/stephane.jpeg",
        href: "https://www.instagram.com/monsieur.guitoo?igsh=aWx2cGE5Mmc4dzBk"
      }
    ]
  }
} as const;
