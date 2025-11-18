import type { ReactNode } from 'react';
import { button } from './Button.css';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'danger';
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

export function Button({ children, variant = 'primary', onClick, type = 'button' }: ButtonProps) {
  return (
    <button type={type} className={button({ variant })} onClick={onClick}>
      {children}
    </button>
  );
}
