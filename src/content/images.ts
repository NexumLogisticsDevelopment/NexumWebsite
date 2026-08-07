/**
 * Centralized image map (SRS §1.5): every visual asset the site uses is
 * referenced from here. Swapping a photo = changing one line.
 * Files live in /public and are served from the site root.
 */
export const IMAGES = {
  logoWhite: '/logo/nexum-logo-white.png',

  heroBackground: '/photos/hero-highway-sunset.jpg',
  aboutTruck: '/photos/manzanillo-landscape.jpg',
  missionVisionBackground: '/photos/mission-vision-bg.jpg',
  coveragePort: '/photos/manzanillo-port.jpg',
  processBand: '/photos/process-band-terminal.jpg',
  ctaBackground: '/photos/cta-bg.jpg',
  teamPortrait: '/photos/team-portrait-laptop.jpg',
  
  //Trabajo realizado
  cargaSobredimensionada: '/photos/carga-sobredimensionada.jpg',
  cargaEnPlataforma: '/photos/carga-plataforma.jpg',
  movimientoLaminaAcero: '/photos/movimiento-lamina-acero.jpg',
  cargaGranel: '/photos/carga-granel.jpg',
  cargaTuberia: '/photos/carga-tuberia.jpg',


  stripPortDusk: '/photos/strip-port-dusk.jpg',
} as const;

export type ImageKey = keyof typeof IMAGES;
