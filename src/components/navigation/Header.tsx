import { useState } from 'react';
import { Button } from '../core/Button';
import { Icon } from '../core/Icon';
import { useScrolled } from '../../hooks/useScrolled';
import { IMAGES } from '../../content/images';
import { NAV_LINKS } from '../../content/site';
import { waLink } from '../../content/contact';
import styles from './Header.module.css';

export function Header() {
  const scrolled = useScrolled(10);
  const [open, setOpen] = useState(false);

  return (
    <header className={`${styles.header} ${scrolled || open ? styles.scrolled : ''}`}>
      <div className={`container ${styles.bar}`}>
        <a href="#inicio" aria-label="NEXUM Logistic Solutions" className={styles.logoLink}>
          <img src={IMAGES.logoWhite} alt="NEXUM Logistic Solutions" className={styles.logo} />
        </a>

        <nav className={styles.navDesktop} aria-label="Navegación principal">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} className={styles.navLink}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className={styles.actions}>
          <span className={styles.ctaDesktop}>
            <Button size="sm" href={waLink()} icon={<Icon name="whatsapp" />}>
              Cotiza ahora
            </Button>
          </span>
          <button
            type="button"
            className={styles.toggle}
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <Icon name={open ? 'xmark' : 'bars'} size={22} />
          </button>
        </div>
      </div>

      {open && (
        <nav className={styles.navMobile} aria-label="Navegación móvil">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} className={styles.navMobileLink} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <div className={styles.navMobileCta}>
            <Button size="sm" href={waLink()} icon={<Icon name="whatsapp" />} onClick={() => setOpen(false)}>
              Cotiza ahora
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
}
