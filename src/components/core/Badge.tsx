import type { CSSProperties, ReactNode } from 'react';
import styles from './Badge.module.css';

interface BadgeProps {
  variant?: 'on-dark' | 'on-dark-solid' | 'on-light' | 'tinted';
  icon?: ReactNode;
  children?: ReactNode;
  style?: CSSProperties;
}

const VARIANT_CLASS = {
  'on-dark': styles.onDark,
  'on-dark-solid': styles.onDarkSolid,
  'on-light': styles.onLight,
  tinted: styles.tinted,
};

export function Badge({ variant = 'on-light', icon, children, style }: BadgeProps) {
  return (
    <span className={`${styles.badge} ${VARIANT_CLASS[variant]}`} style={style}>
      {icon && <span className={styles.icon}>{icon}</span>}
      {children}
    </span>
  );
}
