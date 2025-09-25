import { Button as ChakraButton, Link } from '@chakra-ui/react';

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
  className,
  onClick
}: ButtonProps) {
  const variantStyles = {
    primary: {
      bg: 'black',
      color: 'white',
      _hover: { bg: 'gray.800' }
    },
    secondary: {
      bg: 'purple.600',
      color: 'white',
      _hover: { bg: 'purple.700' }
    },
    outline: {
      bg: 'transparent',
      color: 'purple.600',
      border: '1px solid',
      borderColor: 'purple.600',
      _hover: { bg: 'purple.50' }
    }
  };

  const sizeStyles = {
    sm: { px: 4, py: 2, fontSize: 'sm' },
    md: { px: 6, py: 3, fontSize: 'md' },
    lg: { px: 8, py: 4, fontSize: 'lg' }
  };

  const buttonProps = {
    display: 'inline-flex',
    alignItems: 'center',
    fontWeight: 'semibold',
    borderRadius: 'xl',
    transition: 'all 0.2s',
    className,
    onClick,
    ...variantStyles[variant],
    ...sizeStyles[size]
  };

  if (href) {
    return (
      <Link
        href={href}
        target={target}
        rel={rel}
        textDecoration="none !important"
        _hover={{ textDecoration: 'none' }}
      >
        <ChakraButton as="span" {...buttonProps}>
          {children}
        </ChakraButton>
      </Link>
    );
  }

  return (
    <ChakraButton {...buttonProps}>
      {children}
    </ChakraButton>
  );
}
