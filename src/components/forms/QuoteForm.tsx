import { useState } from 'react';
import { Button } from '../core/Button';
import { Icon } from '../core/Icon';
import { CONTACT } from '../../content/contact';
import { CARGO_OPTIONS } from '../../content/site';
import styles from './QuoteForm.module.css';

interface QuoteFormValues {
  name: string;
  company: string;
  phone: string;
  cargo: string;
  ruta: string;
  msg: string;
}

const INITIAL: QuoteFormValues = {
  name: '',
  company: '',
  phone: '',
  cargo: CARGO_OPTIONS[0],
  ruta: '',
  msg: '',
};

export function QuoteForm() {
  const [values, setValues] = useState<QuoteFormValues>(INITIAL);

  const set =
    (key: keyof QuoteFormValues) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setValues((v) => ({ ...v, [key]: e.target.value }));

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!values.name.trim()) return;
    const lines = ['Hola NEXUM, me gustaría solicitar una cotización.', `Nombre: ${values.name}`];
    if (values.company) lines.push(`Empresa: ${values.company}`);
    if (values.phone) lines.push(`Teléfono: ${values.phone}`);
    lines.push(`Tipo de carga: ${values.cargo}`);
    if (values.ruta) lines.push(`Ruta: ${values.ruta}`);
    if (values.msg) lines.push(`Mensaje: ${values.msg}`);
    window.open(
      `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(lines.join('\n'))}`,
      '_blank',
    );
  }

  return (
    <form onSubmit={submit} className={styles.form}>
      <h3 className={styles.title}>Solicita tu cotización</h3>
      <p className={styles.subtitle}>Completa el formulario y lo enviaremos directo a nuestro WhatsApp.</p>

      <label className={styles.label} htmlFor="qf-name">
        Nombre completo
      </label>
      <input
        id="qf-name"
        className={styles.field}
        required
        placeholder="Tu nombre"
        value={values.name}
        onChange={set('name')}
      />

      <div className={styles.row}>
        <div>
          <label className={styles.label} htmlFor="qf-company">
            Empresa
          </label>
          <input
            id="qf-company"
            className={styles.field}
            placeholder="Nombre de tu empresa"
            value={values.company}
            onChange={set('company')}
          />
        </div>
        <div>
          <label className={styles.label} htmlFor="qf-phone">
            Teléfono
          </label>
          <input
            id="qf-phone"
            className={styles.field}
            placeholder="Tu número de contacto"
            value={values.phone}
            onChange={set('phone')}
          />
        </div>
      </div>

      <div className={styles.row}>
        <div>
          <label className={styles.label} htmlFor="qf-cargo">
            Tipo de carga
          </label>
          <select id="qf-cargo" className={styles.field} value={values.cargo} onChange={set('cargo')}>
            {CARGO_OPTIONS.map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
        </div>
        <div>
          <label className={styles.label} htmlFor="qf-ruta">
            Ruta (origen - destino)
          </label>
          <input
            id="qf-ruta"
            className={styles.field}
            placeholder="Ej. Manzanillo - Guadalajara"
            value={values.ruta}
            onChange={set('ruta')}
          />
        </div>
      </div>

      <label className={styles.label} htmlFor="qf-msg">
        Mensaje
      </label>
      <textarea
        id="qf-msg"
        className={`${styles.field} ${styles.textarea}`}
        placeholder="Cuéntanos más sobre tu operación..."
        value={values.msg}
        onChange={set('msg')}
      />

      <div className={styles.submit}>
        <Button type="submit" style={{ width: '100%' }} icon={<Icon name="whatsapp" />}>
          Enviar cotización por WhatsApp
        </Button>
      </div>
      <p className={styles.note}>
        También puedes escribirnos directo a{' '}
        <a href={`mailto:${CONTACT.email}`} className={styles.mail}>
          {CONTACT.email}
        </a>
      </p>
    </form>
  );
}
