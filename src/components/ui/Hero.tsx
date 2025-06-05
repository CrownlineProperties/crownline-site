import React from 'react';
import clsx from 'clsx';
import Button from './Button';

interface ButtonOption {
  text: string;
  href: string;
  variant?: 'primary' | 'secondary' | 'outline';
  onClick?: () => void;
}

interface HeroProps {
  title: string;
  subtitle?: string;
  backgroundImage: string;
  buttons?: ButtonOption[];
  overlay?: boolean;
  centered?: boolean;
  fullHeight?: boolean;
  className?: string;
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  backgroundImage,
  buttons = [],
  overlay = true,
  centered = true,
  fullHeight = false,
  className = '',
}) => {
  return (
    <div
      className={clsx(
        'relative bg-cover bg-center bg-no-repeat pt-24 md:pt-28',
        fullHeight ? 'h-screen' : 'min-h-[60vh]',
        className
      )}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {overlay && (
        <div className="absolute inset-0 bg-navy bg-opacity-50"></div>
      )}
      <div className="container-custom relative z-10 h-full flex items-center">
        <div
          className={clsx(
            'max-w-3xl py-16 text-white',
            centered ? 'mx-auto text-center' : 'text-left'
          )}
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg md:text-xl opacity-90 mb-8">
              {subtitle}
            </p>
          )}
          {buttons.length > 0 && (
            <div className={clsx('flex flex-wrap gap-4', centered ? 'justify-center' : 'justify-start')}>
              {buttons.map((button, index) => (
                <Button
                  key={index}
                  href={button.href}
                  variant={button.variant || 'primary'}
                  onClick={button.onClick}
                >
                  {button.text}
                </Button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;