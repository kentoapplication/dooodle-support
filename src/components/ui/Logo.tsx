import { Flex, Heading, Link } from '@chakra-ui/react';

export function Logo({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  const textSizes = {
    sm: 'lg',
    md: 'xl',
    lg: '2xl'
  } as const;

  return (
    <Flex align="center" gap={3}>
      <Heading as="h1" size={textSizes[size]} fontWeight="bold">
        <Link href='/' textDecoration={"none"}>
          DOOODLE
        </Link>
      </Heading>
    </Flex>
  );
}
