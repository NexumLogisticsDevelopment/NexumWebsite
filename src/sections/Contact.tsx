import { QuoteForm } from '../components/forms/QuoteForm';
import { IconTile } from '../components/core/IconTile';
import { Icon } from '../components/core/Icon';
import { IMAGES } from '../content/images';
import { CONTACT_LINKS } from '../content/site';
import styles from './Contact.module.css';

export function Contact() {
  return (
    <section
      id="contacto"
      className={styles.section}
      style={{
        backgroundImage: `linear-gradient(100deg, rgba(8,22,37,.97) 30%, rgba(8,22,37,.82) 65%, rgba(8,22,37,.55) 100%), url('${IMAGES.ctaBackground}')`,
      }}
    >
      <div className={`container ${styles.grid}`}>
        <div className="reveal">
          <span className={styles.eyebrow}>Estamos listos para</span>
          <h2 className={styles.title}>Impulsar tu operación.</h2>
          <p className={styles.lead}>Conecta con nuestro equipo y recibe una solución a la medida de tu negocio.</p>
          <div className={styles.links}>
            {CONTACT_LINKS.map((cl) => {
              const inner = (
                <>
                  <IconTile icon={<Icon name={cl.icon} size={18} />} variant="glass" size={48} radius={12} />
                  <div>
                    {cl.main}
                    <small className={styles.linkSub}>{cl.sub}</small>
                  </div>
                </>
              );
              return cl.href ? (
                <a key={cl.icon} href={cl.href} className={styles.link}>
                  {inner}
                </a>
              ) : (
                <div key={cl.icon} className={styles.link}>
                  {inner}
                </div>
              );
            })}
          </div>
        </div>

        <div className={`${styles.photoCol} reveal`}>
          <div className={styles.photoWrap}>
            <img
              src={IMAGES.teamPortrait}
              alt="Equipo NEXUM"
              loading="lazy"
              className={styles.photo}
            />
            <div className={styles.photoBadge}>
              <span className={styles.photoBadgeDot} />
              <span className={styles.photoBadgeText}>Equipo de ventas NEXUM</span>
            </div>
          </div>
          <p className={styles.photoQuote}>
            &ldquo;Detrás de cada envío hay una persona real, lista para resolver tu operación.&rdquo;
          </p>
        </div>

        <div className={`${styles.formCol} reveal`}>
          <div className={styles.formWrap}>
            <QuoteForm />
          </div>
        </div>
      </div>
    </section>
  );
}
