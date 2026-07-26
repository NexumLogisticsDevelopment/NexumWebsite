import type { ReactNode } from 'react';
import { IconTile } from '../core/IconTile';
import styles from './ServiceCard.module.css';

interface ServiceCardProps {
  photo: string;
  tag: string;
  title: string;
  text: string;
  icon: ReactNode;
}

export function ServiceCard({ photo, tag, title, text, icon }: ServiceCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.media}>
        <img src={photo} alt={title} loading="lazy" className={styles.photo} />
        <div className={styles.fade} />
      </div>
      <div className={styles.body}>
        <IconTile icon={icon} variant="accent" size={52} radius={13} />
        <div>
          <span className={styles.tag}>{tag}</span>
          <h4 className={styles.title}>{title}</h4>
          <p className={styles.text}>{text}</p>
        </div>
      </div>
    </div>
  );
}
