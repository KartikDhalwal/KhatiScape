import Link from 'next/link';
import { ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  href?: string;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
};

export default function Button({
  children,
  variant = 'primary',
  href,
  className = '',
  onClick,
  type = 'button',
}: ButtonProps) {
  const baseClasses = 'px-6 py-3 rounded-md font-medium transition duration-300 flex items-center justify-center';
  
  const variantClasses = {
    primary: 'bg-amber-600 text-white hover:bg-amber-700',
    secondary: 'bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-800',
    outline: 'bg-transparent border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white',
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} onClick={onClick} type={type}>
      {children}
    </button>
  );
}