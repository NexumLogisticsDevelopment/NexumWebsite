import { SectionHeading } from '../components/sections/SectionHeading';
import { ProcessStep } from '../components/sections/ProcessStep';
import { Icon } from '../components/core/Icon';
import { IMAGES } from '../content/images';
import { PROCESS_STEPS, ADDED_VALUE } from '../content/site';
import styles from './Process.module.css';

export function Process() {
  return (
    <section id="proceso" className="section-pad">
      <div className="container">
        <SectionHeading
          eyebrow="Nuestro valor agregado"
          title="Soluciones logísticas integrales que generan resultados"
          text="Combinamos tecnología, procesos y talento para diseñar soluciones a la medida."
          align="center"
        />

        <div className={`${styles.band} reveal`}>
          <img
            src={IMAGES.processBand}
            alt="Terminal logística en operación"
            loading="lazy"
            className={styles.bandPhoto}
          />
          <div className={styles.bandCaption}>
            Cadena de suministro en movimiento, desde el puerto hasta tu destino.
          </div>
        </div>

        <div className={`${styles.steps} reveal`}>
          {PROCESS_STEPS.map((p) => (
            <ProcessStep key={p.n} number={p.n} title={p.title} text={p.text} />
          ))}
        </div>

        <div className={`${styles.addedValue} reveal`}>
          {ADDED_VALUE.map((av) => (
            <div key={av.title} className={styles.avCard}>
              <span className={styles.avIcon}>
                <Icon name={av.icon} size={22} />
              </span>
              <h4 className={styles.avTitle}>{av.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
