import type { ReactNode } from 'react';
import { button, buttonDanger, buttonSecondary } from './Button.css';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'danger';
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

export function Button({ children, variant = 'primary', onClick, type = 'button' }: ButtonProps) {
  const variantClass = {
    primary: button,
    secondary: `${button} ${buttonSecondary}`,
    danger: `${button} ${buttonDanger}`,
  }[variant];

  return (
    <button type={type} className={variantClass} onClick={onClick}>
      {children}
    </button>
  );
}
