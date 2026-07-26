import { Icon } from '../core/Icon';
import type { IconName } from '../core/Icon';
import { IMAGES } from '../../content/images';
import { NAV_LINKS } from '../../content/site';
import { CONTACT, waLink, mailtoLink } from '../../content/contact';
import styles from './Footer.module.css';

const SOCIAL: { icon: IconName; href: string; label: string }[] = [
  { icon: 'envelope', href: mailtoLink(), label: 'Correo' },
  { icon: 'whatsapp', href: waLink(), label: 'WhatsApp' },
  { icon: 'phone', href: `tel:+${CONTACT.whatsappNumber}`, label: 'Teléfono' },
];

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          <div>
            <img src={IMAGES.logoWhite} alt="NEXUM Logistic Solutions" className={styles.logo} loading="lazy" />
            <p className={styles.about}>
              Tu aliado estratégico en transporte terrestre nacional. Conectamos el puerto de Manzanillo con los
              principales corredores industriales de México.
            </p>
            <div className={styles.social}>
              {SOCIAL.map((s) => (
                <a key={s.icon} href={s.href} aria-label={s.label} className={styles.socialLink}>
                  <Icon name={s.icon} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h5 className={styles.colTitle}>Navegación</h5>
            <ul className={styles.list}>
              {NAV_LINKS.map((l) => (
                <li key={l.href} className={styles.listItem}>
                  <a href={l.href} className={styles.link}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className={styles.colTitle}>Contacto</h5>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                <Icon name="envelope" style={{ display: 'inline-block', verticalAlign: '-2px' }} /> {CONTACT.email}
              </li>
              <li className={styles.listItem}>
                <Icon name="phone" style={{ display: 'inline-block', verticalAlign: '-2px' }} />{' '}
                {CONTACT.phoneDisplay}
              </li>
              <li className={styles.listItem}>
                <Icon name="location-dot" style={{ display: 'inline-block', verticalAlign: '-2px' }} />{' '}
                {CONTACT.location}
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <span>© {new Date().getFullYear()} NEXUM Logistic Solutions. Todos los derechos reservados.</span>
          <span>Más que transporte, somos tu aliado estratégico.</span>
        </div>
      </div>
    </footer>
  );
}
