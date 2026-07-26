import styles from './SectionHeading.module.css';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  text?: string;
  align?: 'left' | 'center';
  inverse?: boolean;
}

export function SectionHeading({ eyebrow, title, text, align = 'left', inverse = false }: SectionHeadingProps) {
  const classes = [styles.heading, align === 'center' ? styles.centered : '', inverse ? styles.inverse : '']
    .filter(Boolean)
    .join(' ');
  return (
    <div className={classes}>
      {eyebrow && (
        <span className={styles.eyebrow}>
          <span className={styles.eyebrowBar} />
          {eyebrow}
        </span>
      )}
      <h2 className={styles.title}>{title}</h2>
      {text && <p className={styles.text}>{text}</p>}
    </div>
  );
}
