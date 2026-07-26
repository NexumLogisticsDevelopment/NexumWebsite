import { SectionHeading } from '../components/sections/SectionHeading';
import { IconTile } from '../components/core/IconTile';
import { Icon } from '../components/core/Icon';
import { Badge } from '../components/core/Badge';
import { IMAGES } from '../content/images';
import { COVERAGE_ITEMS, DESTINATIONS } from '../content/site';
import styles from './Coverage.module.css';

export function Coverage() {
  return (
    <section id="cobertura" className="section-pad bg-light">
      <div className="container">
        <div className={styles.grid}>
          <div className="reveal">
            <SectionHeading eyebrow="Expertos en Manzanillo" title="Manzanillo es nuestro punto de partida" />
            <p className={styles.paragraph}>
              En NEXUM Logistic Solutions contamos con experiencia en la coordinación de operaciones logísticas
              desde <strong>Manzanillo, el principal puerto comercial de México.</strong>
            </p>
            <div className={styles.items}>
              {COVERAGE_ITEMS.map((ci) => (
                <div key={ci.title} className={styles.item}>
                  <IconTile icon={<Icon name={ci.icon} size={18} />} variant="tint" size={44} />
                  <div>
                    <h4 className={styles.itemTitle}>{ci.title}</h4>
                    <p className={styles.itemText}>{ci.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal">
            <img
              src={IMAGES.coveragePort}
              alt="Puerto de Manzanillo"
              loading="lazy"
              className={styles.photo}
            />
            <div className={styles.photoCaption}>
              <b className={styles.captionAccent}>Manzanillo, Colima:</b> el puerto más importante de México en
              carga contenerizada.
            </div>
          </div>
        </div>

        <div className={`${styles.routes} reveal`}>
          <div className={styles.routesTitle}>
            RUTAS DESDE MANZANILLO HACIA LOS PRINCIPALES DESTINOS DE MÉXICO
          </div>
          <div className={styles.routesBadges}>
            <Badge variant="on-dark-solid">Manzanillo</Badge>
            {DESTINATIONS.map((d) => (
              <Badge key={d} variant="on-light">
                {d}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
