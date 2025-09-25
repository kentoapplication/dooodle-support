import {
  Box,
  Container,
  Grid,
  VStack,
  Heading,
  Text,
  Link,
  Flex,
  Separator
} from '@chakra-ui/react';

export function Footer() {
  return (
    <Box as="footer" bg="gray.900" color="white" py={12} px={4}>
      <Container maxW="6xl">
        <Grid templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }} gap={8}>
          <VStack align="flex-start" gap={4}>
            <Flex align="center" gap={3}>
              <Heading as="h6" size="xl" fontWeight="bold">
                DOOODLE
              </Heading>
            </Flex>
            <Text color="gray.400" fontSize="sm">
              友達と絵を共有する新感覚アプリ
            </Text>
          </VStack>

          <VStack align="flex-start" gap={4}>
            <Heading as="h6" fontWeight="semibold">
              リンク
            </Heading>
            <VStack align="flex-start" gap={2} fontSize="sm">
              <Link
                href="#features"
                color="gray.400"
                _hover={{ color: 'white' }}
                transition="colors 0.2s"
              >
                機能
              </Link>
              <Link
                href="#download"
                color="gray.400"
                _hover={{ color: 'white' }}
                transition="colors 0.2s"
              >
                ダウンロード
              </Link>
              <Link
                href="#support"
                color="gray.400"
                _hover={{ color: 'white' }}
                transition="colors 0.2s"
              >
                サポート
              </Link>
            </VStack>
          </VStack>

          <VStack align="flex-start" gap={4}>
            <Heading as="h6" fontWeight="semibold">
              法的情報
            </Heading>
            <VStack align="flex-start" gap={2} fontSize="sm">
              <Link
                href="/privacy"
                color="gray.400"
                _hover={{ color: 'white' }}
                transition="colors 0.2s"
              >
                プライバシーポリシー
              </Link>
              <Link
                href="/terms"
                color="gray.400"
                _hover={{ color: 'white' }}
                transition="colors 0.2s"
              >
                利用規約
              </Link>
            </VStack>
          </VStack>
        </Grid>

        <Box mt={8} pt={8}>
          <Separator borderColor="gray.800" mb={8} />
          <Text textAlign="center" fontSize="sm" color="gray.400">
            &copy; 2025 筒井健登. All rights reserved.
          </Text>
        </Box>
      </Container>
    </Box>
  );
}
