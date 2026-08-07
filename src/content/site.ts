import type { IconName } from '../components/core/Icon';
import { CONTACT } from './contact';
import { IMAGES } from './images';

/** All site copy lives here — components receive it via props. */

export interface CaseStudy {
  photo: string;
  photoAlt: string;
  tag: string;
  title: string;
  text: string;
  route: string;
}

/** Carousel photos are stand-ins from the existing library until real case photos exist. */
export const CASE_STUDIES: CaseStudy[] = [
  {
    photo: IMAGES.cargaEnPlataforma,
    photoAlt: 'Carga en plataforma',
    tag: 'Carga en Plataforma',
    title: 'Carga suelta y embalajes',
    text: 'Traslado seguro de cajas y embalajes en plataforma abierta, aplicando trincado y sujeción especializada para proteger la carga en todo el trayecto.',
    route: 'Manzanillo → Guadalajara',
  },
  {
    photo: IMAGES.cargaSobredimensionada,
    photoAlt: 'Plataforma lowboy con maquinaria',
    tag: 'Carga sobredimensionada',
    title: 'Traslado de maquinaria industrial',
    text: 'Transporte especializado en lowboy de equipo fuera de norma para la puesta en marcha de una planta manufacturera.',
    route: 'Manzanillo → Querétaro',
  },
  {
    photo: IMAGES.movimientoLaminaAcero,
    photoAlt: 'Movimiento de lamina de acero',
    tag: 'Rollos',
    title: 'Movimiento de lámina de acero',
    text: 'Traslado de rollo de acero para proveedores del sector automotriz con sujeción especializada.',
    route: 'Manzanillo → Guanajuato',
  },
  {
    photo: IMAGES.cargaGranel,
    photoAlt: 'Transporte de carga a granel',
    tag: 'Carga a granel / Big bags',
    title: 'Transporte Eficiente de Insumos a Granel⁠',
    text: 'Flete terrestre de sacos y Big Bags en plataforma, con amarre seguro para mantener la estabilidad del material durante todo el trayecto.',
    route: 'Manzanillo → Guanajuato',
  },
  {
    photo: IMAGES.cargaTuberia,
    photoAlt: 'Transporte de carga tuberia',
    tag: 'Tubería',
    title: 'Transporte Especializado de Carga Pesada⁠',
    text: 'Traslado seguro de tubería industrial de gran volumen para proyectos de infraestructura e industria en todo México.',
    route: 'Manzanillo → Veracruz',
  },
];

export interface IconItem {
  icon: IconName;
  title: string;
  text: string;
}

export const FEATURES: IconItem[] = [
  { icon: 'truck-fast', title: 'Transporte confiable', text: 'Movemos tu carga con seguridad y puntualidad.' },
  {
    icon: 'location-dot',
    title: 'Cobertura nacional',
    text: 'Conectamos los principales corredores industriales de México.',
  },
  { icon: 'headset', title: 'Atención personalizada', text: 'Un equipo cercano que se adapta a tu operación.' },
  {
    icon: 'display',
    title: 'Seguimiento en tiempo real',
    text: 'Información actualizada durante todo el trayecto.',
  },
];

export const APPROACH_CHIPS: { icon: IconName; label: string }[] = [
  { icon: 'star', label: 'Personas' },
  { icon: 'lightbulb', label: 'Innovación' },
  { icon: 'globe', label: 'Conexión' },
  { icon: 'bullseye', label: 'Propósito' },
];

export interface ValueItem extends IconItem {
  num: string;
}

export const VALUES: ValueItem[] = [
  {
    num: '01',
    icon: 'shield-halved',
    title: 'Integridad',
    text: 'Actuamos con honestidad y transparencia en cada operación.',
  },
  {
    num: '02',
    icon: 'handshake',
    title: 'Compromiso',
    text: 'Asumimos cada reto como propio para cumplir lo que prometemos.',
  },
  {
    num: '03',
    icon: 'bullseye',
    title: 'Enfoque al cliente',
    text: 'Ponemos a nuestros clientes al centro de todo lo que hacemos.',
  },
  {
    num: '04',
    icon: 'clock',
    title: 'Puntualidad',
    text: 'Respetamos el tiempo de nuestros clientes y cumplimos cada entrega.',
  },
  {
    num: '05',
    icon: 'users',
    title: 'Trabajo en equipo',
    text: 'Colaboramos para lograr soluciones eficientes y resultados sólidos.',
  },
  {
    num: '06',
    icon: 'arrow-trend-up',
    title: 'Mejora continua',
    text: 'Buscamos siempre innovar y optimizar nuestros procesos.',
  },
];

export interface ServiceItem {
  photo: string;
  tag: string;
  icon: IconName;
  title: string;
  text: string;
}

export const SERVICES: ServiceItem[] = [
  {
    photo: IMAGES.cargaEnPlataforma,
    tag: 'CARGA EN PLATAFORMA',
    icon: 'truck-field',
    title: 'Full',
    text: 'Transporte seguro y eficiente de distintos tipos de carga en plataforma abierta.',
  },
  {
    photo: IMAGES.cargaGranel,
    tag: 'CARGA A GRANEL',
    icon: 'truck',
    title: 'Sencillo',
    text: 'Soluciones flexibles para movimientos nacionales de carga general, adaptadas al volumen y las necesidades de cada cliente.',
  },
  {
    photo: IMAGES.movimientoLaminaAcero,
    tag: 'DISTRIBUCIÓN ÁGIL',
    icon: 'truck-ramp-box',
    title: 'DOBLE',
    text: 'Distribución urbana y regional para entregas ágiles y seguras, sin importar el tipo de carga.',
  },
  {
    photo: IMAGES.cargaSobredimensionada,
    tag: 'CARGA SOBREDIMENSIONADA',
    icon: 'truck-monster',
    title: 'Lowboy',
    text: 'Transporte especializado en lowboy para maquinaria y carga sobredimensionada que requiere manejo experto.',
  },
];

export const CARGO_TYPES: IconItem[] = [
  { icon: 'box', title: 'Carga contenerizada', text: 'Contenedores de 20’ y 40’, carga seca o refrigerada.' },
  { icon: 'circle-notch', title: 'Rollos', text: 'Alambrón, lámina, papel, cable y otros productos en rollo.' },
  { icon: 'pallet', title: 'Pallets y tarimas', text: 'Carga general paletizada, lista para maniobras ágiles.' },
  { icon: 'sack', title: 'Bolsas y big bags', text: 'Producto a granel: cemento, granos, resinas, fertilizantes.' },
  {
    icon: 'expand',
    title: 'Carga sobredimensionada',
    text: 'Estructuras fuera de norma que requieren permisos especiales.',
  },
  {
    icon: 'truck-monster',
    title: 'Maquinaria y equipo pesado',
    text: 'Transporte en lowboy para maquinaria industrial y agrícola.',
  },
];

export const COVERAGE_ITEMS: IconItem[] = [
  {
    icon: 'anchor',
    title: 'Experiencia portuaria',
    text: 'Coordinación eficiente de movimientos de importación y exportación.',
  },
  {
    icon: 'truck-fast',
    title: 'Transporte especializado',
    text: 'Experiencia en movimientos de carga contenerizada.',
  },
  {
    icon: 'map-location-dot',
    title: 'Conocimiento operativo',
    text: 'Familiaridad con terminales, patios y rutas de la región.',
  },
  { icon: 'headset', title: 'Atención personalizada', text: 'Seguimiento cercano durante toda la operación.' },
];

export const DESTINATIONS = [
  'Guadalajara',
  'Querétaro',
  'Bajío',
  'CDMX',
  'San Luis Potosí',
  'Saltillo',
  'Monterrey',
];

export interface ProcessStepItem {
  n: number;
  title: string;
  text: string;
}

export const PROCESS_STEPS: ProcessStepItem[] = [
  { n: 1, title: 'Entendemos', text: 'Escuchamos tus necesidades y objetivos.' },
  { n: 2, title: 'Analizamos', text: 'Evaluamos tu operación para identificar oportunidades.' },
  { n: 3, title: 'Diseñamos', text: 'Creamos la solución logística ideal para ti.' },
  { n: 4, title: 'Ejecutamos', text: 'Operamos con excelencia y total control.' },
  { n: 5, title: 'Mejoramos', text: 'Medimos resultados y buscamos mejorar continuamente.' },
];

export const ADDED_VALUE: { icon: IconName; title: string }[] = [
  { icon: 'bullseye', title: 'Enfoque en resultados' },
  { icon: 'gears', title: 'Procesos optimizados' },
  { icon: 'display', title: 'Tecnología y visibilidad' },
  { icon: 'shield-halved', title: 'Seguridad y cumplimiento' },
  { icon: 'arrows-spin', title: 'Flexibilidad y adaptabilidad' },
];

export const CONTACT_LINKS: { icon: IconName; main: string; sub: string; href?: string }[] = [
  { icon: 'envelope', main: CONTACT.email, sub: 'Realiza tus cotizaciones por correo', href: `mailto:${CONTACT.email}` },
  { icon: 'phone', main: CONTACT.phoneDisplay, sub: 'Llámanos o escríbenos por WhatsApp' },
  { icon: 'location-dot', main: CONTACT.origin, sub: 'Cobertura nacional' },
];

export const NAV_LINKS = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#cobertura', label: 'Cobertura' },
  { href: '#por-que-elegirnos', label: 'Por qué elegirnos' },
  { href: '#contacto', label: 'Contacto' },
];

export const CARGO_OPTIONS = [
  'Contenedor',
  'Caja sobredimensionada',
  'Bolsas',
  'Rollo',
  'Maquinaria (Lowboy)',
  'Otro',
];
