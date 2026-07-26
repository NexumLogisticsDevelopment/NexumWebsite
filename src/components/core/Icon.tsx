import type { CSSProperties } from 'react';

const PATHS = {
  anchor:
    '<circle cx="12" cy="5" r="2"/><line x1="12" y1="7" x2="12" y2="19"/><line x1="6" y1="10" x2="18" y2="10"/><path d="M5,14a7,7 0 0 0 14,0"/>',
  'arrow-right': '<line x1="5" y1="12" x2="19" y2="12"/><polyline points="13,6 19,12 13,18"/>',
  'arrow-right-long': '<line x1="3" y1="12" x2="21" y2="12"/><polyline points="15,6 21,12 15,18"/>',
  'arrow-trend-up': '<polyline points="3,17 9,11 13,15 21,5"/><polyline points="14,5 21,5 21,12"/>',
  'arrow-up': '<line x1="12" y1="19" x2="12" y2="5"/><polyline points="6,11 12,5 18,11"/>',
  'arrows-spin':
    '<path d="M4,12a8,8 0 0 1 14.5,-4.5"/><polyline points="18,3 18.5,7.5 14,7"/><path d="M20,12a8,8 0 0 1-14.5,4.5"/><polyline points="6,21 5.5,16.5 10,17"/>',
  bars: '<line x1="4" y1="7" x2="20" y2="7"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="17" x2="20" y2="17"/>',
  box: '<path d="M3,8 12,3.5 21,8 21,17 12,20.5 3,17z"/><line x1="12" y1="20.5" x2="12" y2="11"/><path d="M3,8 12,11.5 21,8"/>',
  bullseye:
    '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.4" fill="currentColor" stroke="none"/>',
  'chevron-down': '<polyline points="6,9 12,15 18,9"/>',
  'circle-notch':
    '<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.4" fill="currentColor" stroke="none"/>',
  clock: '<circle cx="12" cy="12" r="9"/><polyline points="12,7 12,12 15.5,14"/>',
  comments: '<path d="M4,5h16a1,1 0 0 1 1,1v10a1,1 0 0 1-1,1H9l-4.5,4v-4H4a1,1 0 0 1-1-1V6a1,1 0 0 1 1-1z"/>',
  display:
    '<rect x="3" y="4.5" width="18" height="12" rx="1.5"/><line x1="8" y1="20" x2="16" y2="20"/><line x1="12" y1="16.5" x2="12" y2="20"/>',
  envelope: '<rect x="3" y="5" width="18" height="14" rx="2"/><polyline points="3,7 12,13.5 21,7"/>',
  expand:
    '<path d="M8,3H5a2,2 0 0 0-2,2v3"/><path d="M16,3h3a2,2 0 0 1 2,2v3"/><path d="M21,16v3a2,2 0 0 1-2,2h-3"/><path d="M8,21H5a2,2 0 0 1-2-2v-3"/>',
  eye: '<path d="M1,12s4,-7 11,-7 11,7 11,7 -4,7-11,7 -11,-7 -11,-7z"/><circle cx="12" cy="12" r="3"/>',
  gears:
    '<circle cx="12" cy="12" r="3.2"/><line x1="12" y1="2.5" x2="12" y2="5.2"/><line x1="12" y1="18.8" x2="12" y2="21.5"/><line x1="2.5" y1="12" x2="5.2" y2="12"/><line x1="18.8" y1="12" x2="21.5" y2="12"/><line x1="5.4" y1="5.4" x2="7.3" y2="7.3"/><line x1="16.7" y1="16.7" x2="18.6" y2="18.6"/><line x1="18.6" y1="5.4" x2="16.7" y2="7.3"/><line x1="7.3" y1="16.7" x2="5.4" y2="18.6"/>',
  globe: '<circle cx="12" cy="12" r="9"/><ellipse cx="12" cy="12" rx="4" ry="9"/><line x1="3" y1="12" x2="21" y2="12"/>',
  handshake:
    '<path d="M2,11l5,-4 4,3 -3,3z"/><path d="M22,11l-5,-4 -4,3 3,3z"/><path d="M11,10l-3,3a1.6,1.6 0 0 0 2.2,2.2"/><path d="M13,10l3,3a1.6,1.6 0 0 1-2.2,2.2"/><path d="M9.2,12.2l1,1a1.6,1.6 0 0 0 2.2,0l0,0a1.6,1.6 0 0 0 2.2,0l1,-1"/>',
  headset:
    '<path d="M4,15v-3a8,8 0 0 1 16,0v3"/><rect x="2" y="14" width="4.5" height="6.5" rx="2"/><rect x="17.5" y="14" width="4.5" height="6.5" rx="2"/>',
  lightbulb:
    '<path d="M12,3a6,6 0 0 0-6,6c0,2.8 1.7,4 2.6,5.6.5,.9.4,2.4.4,2.4h6s-.1,-1.5.4,-2.4c.9,-1.6 2.6,-2.8 2.6,-5.6a6,6 0 0 0-6,-6z"/><line x1="9.7" y1="20" x2="14.3" y2="20"/><line x1="10.3" y1="22.5" x2="13.7" y2="22.5"/>',
  'location-dot':
    '<path d="M12,22s7.5,-8.4 7.5,-13a7.5,7.5 0 0 0-15,0c0,4.6 7.5,13 7.5,13z"/><circle cx="12" cy="9" r="2.6"/>',
  'map-location-dot':
    '<path d="M12,21.5s6.8,-7.6 6.8,-11.8a6.8,6.8 0 0 0-13.6,0c0,4.2 6.8,11.8 6.8,11.8z"/><circle cx="12" cy="9.7" r="2.3"/><path d="M4,19l3,-1 M20,19l-3,-1" opacity="0.55"/>',
  phone:
    '<path d="M21,16.4v3a2,2 0 0 1-2.2,2 19,19 0 0 1-8.3,-3 19,19 0 0 1-5.9,-5.9 19,19 0 0 1-3,-8.3A2,2 0 0 1,3.6,2h3a2,2 0 0 1 2,1.7c.1,.9 .3,1.8 .6,2.7a2,2 0 0 1-.5,2.1L7.4,9.8a15.5,15.5 0 0 0 5.8,5.8l1.3-1.3a2,2 0 0 1 2.1-.5c.9,.3 1.8,.5 2.7,.6a2,2 0 0 1 1.7,2.1z"/>',
  pallet:
    '<line x1="2" y1="8.5" x2="22" y2="8.5"/><line x1="2" y1="11.5" x2="22" y2="11.5"/><rect x="4" y="11.5" width="3.2" height="6" rx="0.6"/><rect x="10.4" y="11.5" width="3.2" height="6" rx="0.6"/><rect x="16.8" y="11.5" width="3.2" height="6" rx="0.6"/>',
  'boxes-stacked':
    '<rect x="3" y="12.5" width="7.5" height="7.5" rx="0.8"/><rect x="13.5" y="12.5" width="7.5" height="7.5" rx="0.8"/><rect x="8.25" y="4" width="7.5" height="7.5" rx="0.8"/>',
  'quote-left':
    '<path d="M9.5,7H5.5a2,2 0 0 0-2,2v3.5a2,2 0 0 0 2,2h1v2.7l-3,3.3"/><path d="M19,7h-4a2,2 0 0 0-2,2v3.5a2,2 0 0 0 2,2h1v2.7l-3,3.3"/>',
  route:
    '<circle cx="6" cy="18.5" r="2.3"/><circle cx="18" cy="5.5" r="2.3"/><path d="M8,17.5c5,0 3,-11 8,-11.3"/>',
  sack: '<path d="M9,8V6.6a3,3 0 0 1 6,0V8"/><path d="M6.3,8h11.4l1.3,11.2a2,2 0 0 1-2,2.3H7a2,2 0 0 1-2,-2.3z"/>',
  'shield-halved':
    '<path d="M12,2.2 20,5.5v6c0,5-3.4,8.3-8,10.3 -4.6,-2-8,-5.3-8,-10.3v-6z"/><line x1="12" y1="2.2" x2="12" y2="21.8"/><path d="M12,4.2 18.3,6.7v4.8c0,4 -2.7,6.7 -6.3,8.2z" fill="currentColor" fill-opacity="0.14" stroke="none"/>',
  star: '<polygon points="12,2.5 14.8,8.9 21.8,9.6 16.5,14.3 18,21.2 12,17.6 6,21.2 7.5,14.3 2.2,9.6 9.2,8.9"/>',
  truck:
    '<rect x="1" y="6.5" width="14" height="10" rx="1"/><path d="M15,10h4l4,3.5v3h-8z"/><circle cx="6" cy="18.5" r="2.2"/><circle cx="17.5" cy="18.5" r="2.2"/>',
  'truck-fast':
    '<rect x="2.5" y="6.5" width="13" height="10" rx="1"/><path d="M15.5,10h4l4,3.5v3h-8z"/><circle cx="7" cy="18.5" r="2.2"/><circle cx="18" cy="18.5" r="2.2"/>',
  'truck-field':
    '<rect x="1" y="9.5" width="8" height="7" rx="0.8"/><rect x="9.5" y="6.5" width="8" height="10" rx="0.8"/><path d="M17.5,10h3.5l2,3.5v3h-5.5z"/><circle cx="5" cy="18.5" r="2" /><circle cx="13.5" cy="18.5" r="2.2"/><circle cx="20" cy="18.5" r="2"/>',
  'truck-monster':
    '<rect x="2" y="7.5" width="13" height="8" rx="1"/><path d="M15,10.5h4l3,3v2h-7z"/><circle cx="6.5" cy="19" r="3"/><circle cx="17.5" cy="19" r="3"/>',
  'truck-ramp-box':
    '<path d="M2,19 13,19 13,9 5,9z"/><rect x="13" y="12" width="7" height="7" rx="0.8"/><line x1="2" y1="19" x2="21" y2="19"/><circle cx="6" cy="20.5" r="1.6"/><circle cx="17" cy="20.5" r="1.6"/>',
  users:
    '<circle cx="9" cy="8" r="3.2"/><path d="M3.5,20v-1.2a5.5,5.5 0 0 1 11,0V20"/><circle cx="17.5" cy="9" r="2.5"/><path d="M15.5,20v-1a4.5,4.5 0 0 1 6.5,-4"/>',
  whatsapp:
    '<path d="M12,2.2A9.8,9.8 0 0 0,3.4,17L2,22l5.2,-1.4A9.8,9.8 0 1,0,12,2.2z" fill="currentColor" stroke="none"/><path d="M8.4,7.6c.3,-.6.5,-.6.8,-.6h.6c.2,0 .5,0 .7,.5s.8,2 .9,2.1 0,.3 0,.5c-.1,.2-.2,.3-.4,.5s-.3,.4-.1,.7c.2,.3,.9,1.5,2,2.4 1.4,1.2 2.3,1.6 2.6,1.8s.5,.1.7,-.1.8,-.9,1,-1.2 .4,-.2.7,-.1 1.9,.9 2.2,1.1 .5,.3.6,.4c0,.2 0,1-.4,1.9s-2.1,1.7-2.9,1.7c-.8,0-1.7,-.1-4.5,-1.7-3.4,-1.9-5.5,-5.4-5.7,-5.7s-1.4,-1.9-1.4,-3.6c0,-1.7.9,-2.6 1.2,-2.9z" fill="#ffffff" stroke="none"/>',
  xmark: '<line x1="6" y1="6" x2="18" y2="18"/><line x1="6" y1="18" x2="18" y2="6"/>',
} as const;

export type IconName = keyof typeof PATHS;

export const ICON_NAMES = Object.keys(PATHS) as IconName[];

interface IconProps {
  name: IconName;
  size?: number | string;
  style?: CSSProperties;
  className?: string;
}

export function Icon({ name, size = '1em', style, className }: IconProps) {
  const inner = PATHS[name];
  if (!inner) return null;
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      width={size}
      height={size}
      className={className}
      style={{ display: 'block', flexShrink: 0, ...style }}
      aria-hidden="true"
      dangerouslySetInnerHTML={{ __html: inner }}
    />
  );
}
