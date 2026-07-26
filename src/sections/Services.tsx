import { SectionHeading } from '../components/sections/SectionHeading';
import { ServiceCard } from '../components/cards/ServiceCard';
import { Icon } from '../components/core/Icon';
import { SERVICES } from '../content/site';
import styles from './Services.module.css';

export function Services() {
  return (
    <section id="servicios" className="section-pad">
      <div className="container">
        <SectionHeading
          eyebrow="Nuestros servicios"
          title="Soluciones de transporte a la medida de tu operación"
          text="Ofrecemos soluciones logísticas integrales para movimientos nacionales, adaptadas a tus necesidades."
        />
        <div className={`${styles.grid} reveal`}>
          {SERVICES.map((s) => (
            <ServiceCard
              key={s.title}
              photo={s.photo}
              tag={s.tag}
              title={s.title}
              text={s.text}
              icon={<Icon name={s.icon} size={20} />}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
