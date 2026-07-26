import { SectionHeading } from '../components/sections/SectionHeading';
import { MissionCard } from '../components/cards/MissionCard';
import { Badge } from '../components/core/Badge';
import { Icon } from '../components/core/Icon';
import { IMAGES } from '../content/images';
import { APPROACH_CHIPS } from '../content/site';
import styles from './MissionVision.module.css';

export function MissionVision() {
  return (
    <section
      className={styles.section}
      style={{
        backgroundImage: `linear-gradient(120deg, rgba(8,22,37,.93), rgba(11,31,59,.88)), url('${IMAGES.missionVisionBackground}')`,
      }}
    >
      <div className="container">
        <SectionHeading
          eyebrow="Nuestra razón de ser"
          title="Conectamos lo que importa. Movemos tu negocio hacia adelante."
          align="center"
          inverse
        />
        <div className={`${styles.cards} reveal`}>
          <MissionCard
            icon={<Icon name="bullseye" size={26} />}
            title="Misión"
            text="Ser el aliado logístico que impulsa el crecimiento de nuestros clientes, con innovación, eficiencia y un enfoque humano."
          />
          <MissionCard
            icon={<Icon name="eye" size={26} />}
            title="Visión"
            text="Ser reconocidos como la empresa logística de transporte terrestre más confiable y eficiente de México."
          />
        </div>
        <div className={`${styles.quote} reveal`}>
          <p className={styles.quoteText}>
            &ldquo;No solo transportamos mercancía, transportamos confianza y construimos futuro.&rdquo;
          </p>
        </div>
        <div className={`${styles.chips} reveal`}>
          {APPROACH_CHIPS.map((chip) => (
            <Badge key={chip.label} variant="on-dark" icon={<Icon name={chip.icon} size={15} />}>
              {chip.label}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
}
