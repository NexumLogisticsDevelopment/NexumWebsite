import { SectionHeading } from '../components/sections/SectionHeading';
import { FeatureCard } from '../components/cards/FeatureCard';
import { IconTile } from '../components/core/IconTile';
import { Icon } from '../components/core/Icon';
import { IMAGES } from '../content/images';
import { FEATURES } from '../content/site';
import { CONTACT } from '../content/contact';
import styles from './About.module.css';

export function About() {
  return (
    <section id="nosotros" className="section-pad">
      <div className={`container ${styles.grid}`}>
        <div className={`${styles.media} reveal`}>
          <img
            src={IMAGES.aboutTruck}
            alt="Camión de NEXUM en carretera"
            loading="lazy"
            className={styles.photo}
          />
          <div className={styles.floatCard}>
            <IconTile icon={<Icon name="anchor" size={20} />} variant="tint" size={44} />
            <div>
              <b className={styles.floatTitle}>{CONTACT.origin}</b>
              <span className={styles.floatSub}>Nuestro punto de partida</span>
            </div>
          </div>
        </div>

        <div className="reveal">
          <SectionHeading eyebrow="¿Quiénes somos?" title="Experiencia que respalda cada operación" />
          <p className={styles.paragraph}>
            En <strong>NEXUM Logistic Solutions</strong> somos una empresa especializada en transporte terrestre
            nacional, comprometida con ofrecer soluciones logísticas seguras, eficientes y confiables.
          </p>
          <p className={styles.paragraph}>
            Nuestro equipo cuenta con experiencia en operaciones de importación, exportación y coordinación
            logística, entendiendo las necesidades de cada cliente.
          </p>
          <div className={styles.features}>
            {FEATURES.map((f) => (
              <FeatureCard key={f.title} icon={<Icon name={f.icon} size={20} />} title={f.title} text={f.text} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
