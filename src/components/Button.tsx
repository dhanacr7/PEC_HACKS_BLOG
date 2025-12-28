import { ButtonHTMLAttributes, ReactNode, useRef } from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: ReactNode;
}

const Button = ({ variant = 'primary', children, className, onClick, ...props }: ButtonProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = buttonRef.current;
    if (button) {
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const ripple = document.createElement('span');
      ripple.className = 'ripple';
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;
      ripple.style.width = ripple.style.height = `${Math.max(rect.width, rect.height)}px`;
      ripple.style.marginLeft = `-${Math.max(rect.width, rect.height) / 2}px`;
      ripple.style.marginTop = `-${Math.max(rect.width, rect.height) / 2}px`;

      button.appendChild(ripple);

      setTimeout(() => ripple.remove(), 600);
    }

    onClick?.(e);
  };

  return (
    <button
      ref={buttonRef}
      onClick={handleClick}
      className={cn(
        variant === 'primary' ? 'btn-primary' : 'btn-secondary',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
