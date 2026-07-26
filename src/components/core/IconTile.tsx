import type { ReactNode } from 'react';
import styles from './IconTile.module.css';

const SIZES = { sm: 44, md: 50, lg: 52 } as const;

interface IconTileProps {
  icon: ReactNode;
  variant?: 'tint' | 'navy' | 'accent' | 'glass';
  size?: keyof typeof SIZES | number;
  radius?: number;
}

const VARIANT_CLASS = {
  tint: styles.tint,
  navy: styles.navy,
  accent: styles.accent,
  glass: styles.glass,
};

export function IconTile({ icon, variant = 'tint', size = 'md', radius = 12 }: IconTileProps) {
  const px = typeof size === 'number' ? size : SIZES[size];
  return (
    <div
      className={`${styles.tile} ${VARIANT_CLASS[variant]}`}
      style={{
        width: px,
        height: px,
        minWidth: px,
        borderRadius: radius,
        fontSize: Math.round(px * 0.4),
      }}
    >
      {icon}
    </div>
  );
}
