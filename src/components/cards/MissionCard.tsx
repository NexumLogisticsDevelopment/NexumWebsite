import type { ReactNode } from 'react';
import styles from './MissionCard.module.css';

interface MissionCardProps {
  icon: ReactNode;
  title: string;
  text: string;
}

export function MissionCard({ icon, title, text }: MissionCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.icon}>{icon}</div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.text}>{text}</p>
    </div>
  );
}
