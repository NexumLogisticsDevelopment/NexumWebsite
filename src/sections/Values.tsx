import { SectionHeading } from '../components/sections/SectionHeading';
import { ValueCard } from '../components/cards/ValueCard';
import { Icon } from '../components/core/Icon';
import { VALUES } from '../content/site';
import styles from './Values.module.css';

export function Values() {
  return (
    <section id="por-que-elegirnos" className="section-pad bg-light">
      <div className="container">
        <SectionHeading
          eyebrow="Nuestros valores"
          title="Los valores que nos mueven"
          text="En NEXUM Logistic Solutions nuestros valores guían cada decisión y se reflejan en cada kilómetro recorrido."
          align="center"
        />
        <div className={`${styles.grid} reveal`}>
          {VALUES.map((v) => (
            <ValueCard
              key={v.num}
              number={v.num}
              icon={<Icon name={v.icon} size={20} />}
              title={v.title}
              text={v.text}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
