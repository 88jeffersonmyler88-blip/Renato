import { GalleryItem, ProductItem, ReviewItem, TintLevel } from '../types';

export const STORE_INFO = {
  name: "PeliCar",
  brandName: "PeliCar",
  logoUrl: "/assets/aistudio/Logo_PeliCar_com_Mascote_e_Tagline_d4745c1d.png",
  subtitle: "Películas de Controle Solar",
  category: "Insuflador de vidros em Itajaí, Santa Catarina",
  rating: 5.0,
  reviewCount: "30",
  instagramUrl: "https://instagram.com/Pelicarrenato",
  instagramHandle: "@Pelicarrenato",
  address: "R. Pedro Cristiano de Miranda, 761 - Sl 02 - São Vicente, Itajaí - SC, 88309-430 (Anexo ao Posto Thiavan)",
  phone: "(47) 98467-5758",
  phoneRaw: "5547984675758",
  whatsappUrl: "https://wa.me/5547984675758?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20PeliCar%20e%20gostaria%20de%20um%20or%C3%A7amento%20para%20pel%C3%ADculas%20de%20controle%20solar.",
  hours: [
    { day: "Segunda-feira", hours: "08:00 – 18:00" },
    { day: "Terça-feira", hours: "08:00 – 18:00" },
    { day: "Quarta-feira", hours: "08:00 – 18:00" },
    { day: "Quinta-feira", hours: "08:00 – 18:00" },
    { day: "Sexta-feira", hours: "08:00 – 18:00" },
    { day: "Sábado", hours: "08:00 – 12:00 (Com Agendamento)" },
    { day: "Domingo", hours: "Fechado" },
  ],
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=R.+Pedro+Cristiano+de+Miranda,+761+-+Sl+02+-+S%C3%A3o+Vicente,+Itaja%C3%AD+-+SC,+88309-430",
  wazeUrl: "https://waze.com/ul?q=R.+Pedro+Cristiano+de+Miranda,+761,+Itaja%C3%AD+-+SC",
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.5562095324734!2d-48.6854181!3d-26.8997232!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94d8cb8452ef8ecf%3A0x6b6c0e5a953e37ad!2sR.%20Pedro%20Cristiano%20de%20Miranda%2C%20761%20-%20S%C3%A3o%20Vicente%2C%20Itaja%C3%AD%20-%20SC%2C%2088309-430!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
};

export const INITIAL_PRODUCTS: ProductItem[] = [
  {
    id: "diamond-hd",
    name: "Diamond HD",
    tagline: "Nano Ceramic & Nano Carbon IR95+",
    category: "Nano Ceramic",
    imageUrl: "/assets/aistudio/WhatsApp_Image_2026-11-11_at_17.11.47_90de2f02.jpeg",
    irRejection: "IR 95+",
    uvProtection: "99% UV",
    durability: "Garantia Permanente",
    highlights: ["Nano Ceramic & Nano Carbon", "Poliéster Tripla Camada", "Melhor Visão Noturna"]
  },
  {
    id: "vision-black-clear",
    name: "Vision Black Clear",
    tagline: "Nano Ceramic IR80+",
    category: "Nano Ceramic",
    imageUrl: "/assets/aistudio/WhatsApp_Image_2026-11-11_at_17.11.46__2__de7a6aa8.jpeg",
    irRejection: "IR 80+",
    uvProtection: "99% UV",
    durability: "Garantia Permanente",
    highlights: ["Nano Ceramic", "Poliéster Dupla Camada", "Alta Visibilidade"]
  },
  {
    id: "nri",
    name: "NRi",
    tagline: "Nano Carbon IR60+",
    category: "Nano Carbon",
    imageUrl: "/assets/aistudio/WhatsApp_Image_2026-11-11_at_17.11.46__1__01e32fcd.jpeg",
    irRejection: "IR 60+",
    uvProtection: "99% UV",
    durability: "Garantia de 3 Anos",
    highlights: ["Nano Carbon", "Conforto Térmico", "Alta Privacidade"]
  },
  {
    id: "nr",
    name: "NR",
    tagline: "Chip Dyed IR12+",
    category: "Chip Dyed",
    imageUrl: "/assets/aistudio/WhatsApp_Image_2026-11-11_at_17.11.46_80f18ce0.jpeg",
    irRejection: "IR 12+",
    uvProtection: "Proteção UV",
    durability: "Garantia de 1 Ano",
    highlights: ["Chip Dyed", "Mais Privacidade", "Custo-Benefício"]
  }
];

export const INITIAL_GALLERY: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Ford Ranger",
    category: "suvs",
    vehicleOrPlace: "Ford Ranger · Estúdio PeliCar",
    filmType: "Película de Controle Solar",
    imageUrl: "/assets/aistudio/vdsvsdvsdv_eab31c25.jpeg",
    date: "Itajaí · SC",
    badge: "Picape"
  },
  {
    id: "gal-2",
    title: "Mitsubishi Triton",
    category: "suvs",
    vehicleOrPlace: "Mitsubishi Triton · Fachada",
    filmType: "Película de Controle Solar",
    imageUrl: "/assets/aistudio/vsdvdsvsdv_ddf404a4.jpeg",
    date: "Itajaí · SC",
    badge: "Picape"
  },
  {
    id: "gal-3",
    title: "GWM Haval H6",
    category: "suvs",
    vehicleOrPlace: "GWM Haval H6 · Box Climatizado",
    filmType: "Película de Controle Solar",
    imageUrl: "/assets/aistudio/vsdvs_c7675fa5.jpeg",
    date: "Itajaí · SC",
    badge: "SUV"
  },
  {
    id: "gal-4",
    title: "SUV Preto · Linha NRi",
    category: "suvs",
    vehicleOrPlace: "SUV · Box Climatizado",
    filmType: "RSWF NRi",
    imageUrl: "/assets/aistudio/vdsvvsdvsd_a2ee9b2f.jpeg",
    date: "Itajaí · SC",
    badge: "SUV"
  },
  {
    id: "gal-5",
    title: "Audi Q3",
    category: "suvs",
    vehicleOrPlace: "Audi Q3 · Box Climatizado",
    filmType: "Película de Controle Solar",
    imageUrl: "/assets/aistudio/sdvvdsvsd_f36a8e48.jpeg",
    date: "Itajaí · SC",
    badge: "SUV Premium"
  },
  {
    id: "gal-8",
    title: "GWM Haval H6",
    category: "suvs",
    vehicleOrPlace: "GWM Haval H6 · Fachada Noturna",
    filmType: "Película de Controle Solar",
    imageUrl: "/assets/aistudio/WhatsApp_Image_2026-11-13_at_08.11.33_be98e390.jpeg",
    date: "Itajaí · SC",
    badge: "SUV"
  },
  {
    id: "gal-9",
    title: "BMW Série 3",
    category: "sedans",
    vehicleOrPlace: "BMW Série 3 · Box Climatizado",
    filmType: "Película de Controle Solar",
    imageUrl: "/assets/aistudio/WhatsApp_Image_2026-11-11_at_17.43.59_3b4eca90.jpeg",
    date: "Itajaí · SC",
    badge: "Sedan"
  },
  {
    id: "gal-10",
    title: "Chevrolet Tracker",
    category: "suvs",
    vehicleOrPlace: "Chevrolet Tracker · Estúdio PeliCar",
    filmType: "Película de Controle Solar",
    imageUrl: "/assets/aistudio/WhatsApp_Image_2026-11-11_at_17.44.30_7a9bbd00.jpeg",
    date: "Itajaí · SC",
    badge: "SUV"
  }
];

export const GOOGLE_REVIEWS: ReviewItem[] = [
  {
    id: "rev-1",
    author: "Rodrigo Mendonça",
    rating: 5,
    timeAgo: "há 2 dias",
    vehicle: "Porsche Macan GTS",
    comment: "Melhor loja de películas de Itajaí e região! Coloquei a Nano Cerâmica e a diferença de temperatura dentro do carro sob o sol do meio-dia é absurda. Acabamento perfeito, sem nenhuma bolha ou marca.",
    service: "Nano Cerâmica Completa"
  },
  {
    id: "rev-2",
    author: "Camila Bittencourt",
    rating: 5,
    timeAgo: "há 1 semana",
    vehicle: "Toyota Hilux SRX",
    comment: "Atendimento impecável! O pessoal da Pelicar entende muito de controle solar. Explicaram cada porcentagem de transparência e o resultado na minha camionete ficou lindo e muito confortável.",
    service: "Película Carbon + Parabrisa Térmico"
  },
  {
    id: "rev-3",
    author: "Marcio L. Silveira",
    rating: 5,
    timeAgo: "há 2 semanas",
    vehicle: "BMW 320i",
    comment: "Excelente profissionalismo. Já fiz 3 carros com eles na São Vicente em Itajaí. Preço justo, qualidade de material de primeira linha e agilidade na entrega. 5 estrelas mais que merecidas!",
    service: "Anti-vandalismo PS8 + G20"
  },
  {
    id: "rev-4",
    author: "Juliana Vargas Fontes",
    rating: 5,
    timeAgo: "há 3 semanas",
    vehicle: "Jeep Compass Longitude",
    comment: "Fizemos a aplicação da Nano Cerâmica térmica no parabrisa e laterais. Parou de queimar o braço no volante e o ar-condicionado agora gela super rápido no calor de Itajaí. Recomendo de olhos fechados!",
    service: "Nano Cerâmica Térmica Parabrisa + G20"
  }
];

export const TINT_LEVELS: TintLevel[] = [
  {
    grade: "G70",
    vlt: 70,
    label: "Transparente Térmica",
    irRejection: 95,
    uvProtection: 99.9,
    privacy: "Visual Cristalino (Permitido Parabrisa)",
    recommendedFor: "Para-brisas e quem não quer escurecer, mas quer bloquear 95% do calor solar.",
    darknessValue: 0.15
  },
  {
    grade: "G50",
    vlt: 50,
    label: "Fumê Suave",
    irRejection: 88,
    uvProtection: 99.5,
    privacy: "Leve atenuação de luminosidade",
    recommendedFor: "Condução noturna suave e elegância discreta com alta clareza óptica.",
    darknessValue: 0.35
  },
  {
    grade: "G35",
    vlt: 35,
    label: "Médio Equilibrado",
    irRejection: 92,
    uvProtection: 99.9,
    privacy: "Privacidade moderada de fora para dentro",
    recommendedFor: "O equilíbrio perfeito entre privacidade diurna e boa visibilidade noturna.",
    darknessValue: 0.55
  },
  {
    grade: "G20",
    vlt: 20,
    label: "Padrão Escuro (Mais Vendido)",
    irRejection: 96,
    uvProtection: 99.9,
    privacy: "Alta privacidade",
    recommendedFor: "A escolha mais procurada: visual imponente, escuro de fora e nítido por dentro.",
    darknessValue: 0.75
  },
  {
    grade: "G5",
    vlt: 5,
    label: "Ultra Escuro (Privacidade Total)",
    irRejection: 98,
    uvProtection: 99.9,
    privacy: "Total (Quem está fora não enxerga o interior)",
    recommendedFor: "Quem busca o visual 'blackout', proteção máxima contra olhares e sol intenso.",
    darknessValue: 0.92
  }
];
