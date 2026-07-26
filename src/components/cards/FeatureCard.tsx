import type { ReactNode } from 'react';
import { IconTile } from '../core/IconTile';
import styles from './FeatureCard.module.css';

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  text: string;
}

export function FeatureCard({ icon, title, text }: FeatureCardProps) {
  return (
    <div className={styles.card}>
      <IconTile icon={icon} variant="navy" size={46} radius={12} />
      <div>
        <h4 className={styles.title}>{title}</h4>
        <p className={styles.text}>{text}</p>
      </div>
    </div>
  );
}
