import { Box, Container, Flex, Link } from '@chakra-ui/react';
import { Logo } from '../ui/Logo';

interface LegalHeaderProps {
  title: string;
}

export function LegalHeader({ title }: LegalHeaderProps) {
  return (
    <Box as="header" bg="white" boxShadow="sm">
      <Container maxW="4xl" py={6}>
        <Flex align="center" justify="space-between">
          <Logo />
          <Link
            href="/"
            color="purple.600"
            _hover={{ color: 'purple.700' }}
            fontWeight="medium"
            transition="colors 0.2s"
          >
            ← ホームに戻る
          </Link>
        </Flex>
      </Container>
    </Box>
  );
}
