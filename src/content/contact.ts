/**
 * Single source of truth for every contact channel on the site.
 * Changing the WhatsApp number or email here updates the whole site.
 */
export const CONTACT = {
  /** International format, digits only — used to build wa.me links. */
  whatsappNumber: '523143384050',
  phoneDisplay: '314 338 4050',
  email: 'ventas@nexumlogisticmx.com',
  location: 'Manzanillo, Colima, México',
  origin: 'Manzanillo, Colima',
  coverage: 'Principales corredores industriales de México',
} as const;

export const DEFAULT_WA_MESSAGE =
  'Hola NEXUM, me gustaría solicitar una cotización de transporte.';

/** Builds a wa.me link with a prefilled message. */
export function waLink(message: string = DEFAULT_WA_MESSAGE): string {
  return `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function mailtoLink(): string {
  return `mailto:${CONTACT.email}`;
}
