import clsx from 'clsx';
import type { ButtonProps } from './types';
import './button.scss';

function Button({ children, onClick, isActive, variant }: ButtonProps) {
  return (
    <button
      className={clsx(
        'button', 
        isActive && 'active',
        variant === 'reset' && 'button__reset',
        variant === 'primary' && 'button__primary',
        variant === 'secondary' && 'button__secondary'
      )}
      onClick={onClick}
    >
      {children}
    </button> 
  );
}

export default Button;
