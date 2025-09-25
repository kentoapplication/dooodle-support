import { Box } from '@chakra-ui/react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className }: CardProps) {
  return (
    <Box
      bg="white"
      borderRadius="2xl"
      boxShadow="sm"
      className={className}
    >
      {children}
    </Box>
  );
}
