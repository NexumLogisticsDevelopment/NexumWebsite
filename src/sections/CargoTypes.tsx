import { SectionHeading } from '../components/sections/SectionHeading';
import { CargoTypeCard } from '../components/cards/CargoTypeCard';
import { Icon } from '../components/core/Icon';
import { CARGO_TYPES } from '../content/site';
import { waLink } from '../content/contact';
import styles from './CargoTypes.module.css';

export function CargoTypes() {
  return (
    <section id="tipos-de-carga" className={styles.section}>
      <div className="container">
        <SectionHeading
          eyebrow="Sin importar el tipo de carga"
          title="Transportamos cualquier tipo de carga"
          text="Adaptamos la unidad, el equipo y la ruta a lo que tu operación necesita mover."
          align="center"
          inverse
        />
        <div className={`${styles.grid} reveal`}>
          {CARGO_TYPES.map((ct) => (
            <CargoTypeCard key={ct.title} icon={<Icon name={ct.icon} size={20} />} title={ct.title} text={ct.text} />
          ))}
        </div>
        <div className={styles.footNote}>
          ¿Tu carga no está en la lista?{' '}
          <a
            href={waLink('Hola NEXUM, tengo una carga especial que necesito mover.')}
            target="_blank"
            rel="noopener"
            className={styles.footLink}
          >
            Cuéntanos qué necesitas mover
          </a>{' '}
          y te decimos cómo lo resolvemos.
        </div>
      </div>
    </section>
  );
}
