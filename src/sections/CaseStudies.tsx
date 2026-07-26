import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { CASE_STUDIES } from '../content/site';
import styles from './CaseStudies.module.css';

export function CaseStudies() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selected, setSelected] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((i: number) => emblaApi?.scrollTo(i), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    emblaApi.on('select', onSelect);
    onSelect();
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi]);

  return (
    <div className={styles.band}>
      <div className="container">
        <div className={styles.head}>
          <div>
            <span className={styles.eyebrow}>Trabajo realizado</span>
            <h3 className={styles.title}>Casos de éxito en movimiento</h3>
          </div>
          <div className={styles.navBtns}>
            <button type="button" className={styles.navBtn} aria-label="Anterior" onClick={scrollPrev}>
              ‹
            </button>
            <button type="button" className={styles.navBtn} aria-label="Siguiente" onClick={scrollNext}>
              ›
            </button>
          </div>
        </div>

        <div className={styles.viewport} ref={emblaRef}>
          <div className={styles.track}>
            {CASE_STUDIES.map((c) => (
              <div key={c.title} className={styles.slide}>
                <div className={styles.media}>
                  <img src={c.photo} alt={c.photoAlt} loading="lazy" className={styles.photo} />
                </div>
                <div>
                  <span className={styles.tag}>{c.tag}</span>
                  <h4 className={styles.slideTitle}>{c.title}</h4>
                  <p className={styles.text}>{c.text}</p>
                  <div className={styles.route}>{c.route}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.dots}>
          {CASE_STUDIES.map((c, i) => (
            <button
              key={c.title}
              type="button"
              className={`${styles.dot} ${i === selected ? styles.dotActive : ''}`}
              aria-label={`Ir al caso ${i + 1}`}
              onClick={() => scrollTo(i)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
