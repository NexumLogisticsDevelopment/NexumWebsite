import type { ReactNode } from 'react';
import { IconTile } from '../core/IconTile';
import styles from './ValueCard.module.css';

interface ValueCardProps {
  number: string;
  icon: ReactNode;
  title: string;
  text: string;
}

export function ValueCard({ number, icon, title, text }: ValueCardProps) {
  return (
    <div className={styles.card}>
      <span className={styles.number}>{number}</span>
      <div className={styles.tile}>
        <IconTile icon={icon} variant="tint" size={50} />
      </div>
      <h4 className={styles.title}>{title}</h4>
      <p className={styles.text}>{text}</p>
    </div>
  );
}
