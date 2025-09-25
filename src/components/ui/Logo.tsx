import { Flex, Heading } from '@chakra-ui/react';

export function Logo({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  const textSizes = {
    sm: 'lg',
    md: 'xl',
    lg: '2xl'
  } as const;

  return (
    <Flex align="center" gap={3}>
      <Heading as="h1" size={textSizes[size]} fontWeight="bold">
        DOOODLE
      </Heading>
    </Flex>
  );
}
