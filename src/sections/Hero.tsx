import { Button } from '../components/core/Button';
import { Badge } from '../components/core/Badge';
import { Icon } from '../components/core/Icon';
import { IMAGES } from '../content/images';
import { CONTACT, waLink } from '../content/contact';
import styles from './Hero.module.css';

const CHIPS = ['Transporte terrestre nacional', 'Cobertura nacional', 'Seguridad, puntualidad y control'];

export function Hero() {
  return (
    <>
      <section
        id="inicio"
        className={styles.hero}
        style={{
          backgroundImage: `linear-gradient(100deg, rgba(8,22,37,.94) 20%, rgba(8,22,37,.72) 55%, rgba(8,22,37,.42) 100%), url('${IMAGES.heroBackground}')`,
        }}
      >
        <div className={`container ${styles.inner}`}>
          <span className={styles.eyebrow}>Transporte terrestre nacional · Desde Manzanillo</span>
          <h1 className={styles.title}>
            Logística que genera <span className={styles.highlight}>resultados.</span>
          </h1>
          <p className={styles.lead}>
            Tu aliado estratégico en transporte terrestre. Movemos contenedores, caja sobredimensionada, bolsas y
            rollo desde el puerto de Manzanillo hacia los principales corredores industriales de México, con
            seguridad, puntualidad y control total.
          </p>
          <div className={styles.ctas}>
            <Button href={waLink()} icon={<Icon name="whatsapp" />}>
              Solicita tu cotización
            </Button>
            <Button variant="outline" href="#servicios">
              Conoce nuestros servicios
            </Button>
          </div>
          <div className={styles.chips}>
            {CHIPS.map((chip) => (
              <Badge key={chip} variant="on-dark">
                {chip}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      <div className={styles.strip}>
        <div className={`container ${styles.stripInner}`}>
          <div>
            Origen: <b className={styles.stripAccent}>{CONTACT.origin}</b>
          </div>
          <div>
            Cobertura: <b className={styles.stripAccent}>{CONTACT.coverage}</b>
          </div>
          <div>
            <b className={styles.stripAccent}>{CONTACT.email}</b>
          </div>
          <div>
            <b className={styles.stripAccent}>{CONTACT.phoneDisplay}</b>
          </div>
        </div>
      </div>
    </>
  );
}
