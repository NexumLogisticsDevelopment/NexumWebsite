import styles from './ProcessStep.module.css';

interface ProcessStepProps {
  number: number;
  title: string;
  text: string;
}

export function ProcessStep({ number, title, text }: ProcessStepProps) {
  return (
    <div className={styles.step}>
      <div className={styles.circle}>{number}</div>
      <h4 className={styles.title}>{title}</h4>
      <p className={styles.text}>{text}</p>
    </div>
  );
}
