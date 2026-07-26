import { Icon } from '../core/Icon';
import { useScrolled } from '../../hooks/useScrolled';
import { waLink } from '../../content/contact';
import styles from './FloatingButtons.module.css';

export function WhatsAppFloat() {
  return (
    <a
      href={waLink()}
      target="_blank"
      rel="noopener"
      aria-label="Escríbenos por WhatsApp"
      className={styles.whatsapp}
    >
      <Icon name="whatsapp" size={26} />
    </a>
  );
}

export function BackToTop() {
  const visible = useScrolled(600);
  return (
    <button
      type="button"
      aria-label="Volver arriba"
      className={`${styles.backToTop} ${visible ? styles.visible : ''}`}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <Icon name="arrow-up" size={18} />
    </button>
  );
}
