export interface AlbumImage {
  file: string; // file name inside public/assets/portfolio-works/artworks
  alt: string;
}

export interface Album {
  id: string;
  title: string;
  description: string;
  images: AlbumImage[];
  spotifyAlbumId?: string;
}

export type VideoMode = "controls" | "loop";

export interface Video {
  id: string;
  file: string; // file name served by /api/video?pathname=
  title: string;
  description: string;
  mode: VideoMode;
}

export const albums: Album[] = [
  {
    id: "kobe-section",
    title: "KOBE - BRUKLYN & Teo Mp",
    description:
      "Design inspired by the “Virgen Inmaculada Concepción de Quito” and “El Panecillo” place",
    images: [{ file: "bruklyn-idea_4.png", alt: "KOBE album cover artwork" }],
    spotifyAlbumId: "7qTmZkKR5iilhQkjado98c",
  },
  {
    id: "musica-casa-section",
    title: "MÚSICA HECHA EN CASA - Lil Otack",
    description:
      "Design inspired by the “Virgen Inmaculada Concepción de Quito” and “El Panecillo” place",
    images: [
      { file: "musica_en_casa_alter_4.png", alt: "Música hecha en casa cover artwork" },
      { file: "back_cover_musica_en_casa.png", alt: "Música hecha en casa back cover" },
    ],
    spotifyAlbumId: "5x7sU2jdwMTI2ZvnU1sw4Q",
  },
  {
    id: "av-real-audiencia-section",
    title: "AV. REAL AUDIENCIA - Dis Pater & La Real Audiencia Prod",
    description:
      "Getting closer to surrealism using “Av. Real Audiencia” and ecuadorian references",
    images: [
      { file: "real_audiencia_mixtapeWNAMEVII.png", alt: "Av. Real Audiencia mixtape artwork" },
      { file: "real_audiencia_mixtapeiX.png", alt: "Av. Real Audiencia mixtape artwork, variant 2" },
      { file: "real_audiencia_mixtapev.png", alt: "Av. Real Audiencia mixtape artwork, variant 3" },
      { file: "contraportada.nuevocambio.png", alt: "Av. Real Audiencia back cover" },
    ],
  },
];

export const reels: Video[] = [
  {
    id: "enzocerobulto-section",
    file: "enzo_reel_var_2.mp4",
    title: "Enzocerobulto DE VUELTA SOLO WORLD TOUR 2026 - ECUADOR",
    description:
      "Promotional reel for Enzocerbulto World Tour on his first time on Quito, Ecuador",
    mode: "controls",
  },
  {
    id: "av-real-audiencia-visual-section",
    file: "real_audicencia_visualizer.mp4",
    title: "AV. REAL AUDIENCIA VISUAL",
    description: "Visual for Dis Pater for his album “AV.REAL AUDIENCIA”",
    mode: "loop",
  },
  {
    id: "maquina-camaleon-section",
    file: "MAQUINA CAMALEÓN.mp4",
    title: "Máquina Camaleón Bio Reel",
    description:
      "Biographic reel based on “La Máquina Camaleón” recorded and edited in Ecuador",
    mode: "controls",
  },
];

export const visuals: string[] = [
  "VHS GLITCH 3 RAINBOW LINES_1.mp4",
  "visual_ego_1.mp4",
  "visual_ego_2.mp4",
];