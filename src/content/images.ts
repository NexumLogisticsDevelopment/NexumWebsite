/**
 * Centralized image map (SRS §1.5): every visual asset the site uses is
 * referenced from here. Swapping a photo = changing one line.
 * Files live in /public and are served from the site root.
 */
export const IMAGES = {
  logoWhite: '/logo/nexum-logo-white.png',

  heroBackground: '/photos/hero-highway-sunset.jpg',
  aboutTruck: '/photos/about-truck-highway.jpg',
  missionVisionBackground: '/photos/mission-vision-bg.jpg',
  coveragePort: '/photos/coverage-manzanillo-port.jpg',
  processBand: '/photos/process-band-terminal.jpg',
  ctaBackground: '/photos/cta-bg.jpg',
  teamPortrait: '/photos/team-portrait-laptop.jpg',

  serviceFull: '/photos/service-full-doble-remolque.jpg',
  serviceSencillo: '/photos/service-sencillo-contenedor.jpg',
  serviceCamioneta: '/photos/service-camioneta-3-5.jpg',
  serviceLowboy: '/photos/service-lowboy.jpg',

  stripPortDusk: '/photos/strip-port-dusk.jpg',
} as const;

export type ImageKey = keyof typeof IMAGES;
