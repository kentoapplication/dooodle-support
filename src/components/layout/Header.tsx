import { Box, Container, Flex, Link, HStack } from '@chakra-ui/react';
import { Logo } from '../ui/Logo';

export function Header() {
  return (
    <Box as="header" bg="white" boxShadow="sm">
      <Container maxW="6xl" py={6}>
        <Flex align="center" justify="space-between">
          <Logo size="lg" />
          <HStack
            as="nav"
            gap={6}
            display={{ base: 'none', md: 'flex' }}
          >
            <Link
              href="#features"
              color="gray.600"
              _hover={{ color: 'purple.600' }}
              transition="colors 0.2s"
            >
              機能
            </Link>
            <Link
              href="#download"
              color="gray.600"
              _hover={{ color: 'purple.600' }}
              transition="colors 0.2s"
            >
              ダウンロード
            </Link>
            <Link
              href="#support"
              color="gray.600"
              _hover={{ color: 'purple.600' }}
              transition="colors 0.2s"
            >
              サポート
            </Link>
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
}
