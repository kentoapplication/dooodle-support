type ButtonVariant = 'primary' | 'secondary' | 'outline';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  target?: string;
  rel?: string;
  className?: string;
  onClick?: () => void;
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  target,
  rel,
  className = '',
  onClick
}: ButtonProps) {
  const baseClasses = 'inline-flex items-center font-semibold rounded-xl transition-colors';

  const variantClasses = {
    primary: 'bg-black text-white hover:bg-gray-800',
    secondary: 'bg-purple-600 text-white hover:bg-purple-700',
    outline: 'border border-purple-600 text-purple-600 hover:bg-purple-50'
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={classes}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
