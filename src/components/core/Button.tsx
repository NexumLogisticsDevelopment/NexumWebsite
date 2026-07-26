import type { CSSProperties, ReactNode } from 'react';
import styles from './Button.module.css';

interface ButtonProps {
  variant?: 'primary' | 'outline' | 'outline-navy';
  size?: 'sm' | 'md';
  icon?: ReactNode;
  href?: string;
  onClick?: () => void;
  children?: ReactNode;
  style?: CSSProperties;
  type?: 'button' | 'submit';
}

const VARIANT_CLASS = {
  primary: styles.primary,
  outline: styles.outline,
  'outline-navy': styles.outlineNavy,
};

export function Button({
  variant = 'primary',
  size = 'md',
  icon,
  href,
  onClick,
  children,
  style,
  type = 'button',
}: ButtonProps) {
  const className = [styles.button, VARIANT_CLASS[variant], size === 'sm' ? styles.sm : '']
    .filter(Boolean)
    .join(' ');
  const content = (
    <>
      {icon}
      {children}
    </>
  );
  return href ? (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel="noopener"
      className={className}
      style={style}
      onClick={onClick}
    >
      {content}
    </a>
  ) : (
    <button type={type} className={className} style={style} onClick={onClick}>
      {content}
    </button>
  );
}
