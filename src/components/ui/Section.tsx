import { Box } from '@chakra-ui/react';

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  background?: 'default' | 'gray' | 'white';
}

export function Section({
  children,
  id,
  background = 'default'
}: SectionProps) {
  const backgroundColors = {
    default: 'transparent',
    gray: 'gray.50',
    white: 'white'
  };

  return (
    <Box
      as="section"
      id={id}
      py={20}
      px={4}
      bg={backgroundColors[background]}
    >
      {children}
    </Box>
  );
}
