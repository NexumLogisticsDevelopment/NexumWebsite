import type { ReactNode } from 'react';
import { IconTile } from '../core/IconTile';
import styles from './CargoTypeCard.module.css';

interface CargoTypeCardProps {
  icon: ReactNode;
  title: string;
  text: string;
}

export function CargoTypeCard({ icon, title, text }: CargoTypeCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.tile}>
        <IconTile icon={icon} variant="glass" size={50} />
      </div>
      <h4 className={styles.title}>{title}</h4>
      <p className={styles.text}>{text}</p>
    </div>
  );
}
