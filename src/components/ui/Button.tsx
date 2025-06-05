import React from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  disabled?: boolean;
}

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  href,
  type = 'button',
  onClick,
  disabled = false,
  ...props
}: ButtonProps) => {
  const baseClasses = clsx(
    'inline-flex items-center justify-center rounded-property font-semibold transition duration-300',
    {
      'bg-gold text-navy hover:bg-opacity-90': variant === 'primary',
      'bg-navy text-white hover:bg-opacity-90': variant === 'secondary',
      'border-2 border-navy text-navy hover:bg-navy hover:text-white': variant === 'outline',
      'px-4 py-2 text-sm': size === 'sm',
      'px-6 py-3': size === 'md',
      'px-8 py-4 text-lg': size === 'lg',
      'opacity-50 cursor-not-allowed': disabled,
    },
    className
  );

  if (href && href !== '#' && !onClick) {
    const isExternal = href.startsWith('http');
    if (isExternal) {
      return (
        <a
          href={href}
          className={baseClasses}
          target="_blank"
          rel="noopener noreferrer"
          {...props}
        >
          {children}
        </a>
      );
    }
    return (
      <Link to={href} className={baseClasses} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={baseClasses}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;