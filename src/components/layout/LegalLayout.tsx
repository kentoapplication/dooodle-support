import { Box, Container, Heading, Text, VStack } from '@chakra-ui/react';
import { LegalHeader } from './LegalHeader';

interface LegalLayoutProps {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}

export function LegalLayout({ title, lastUpdated, children }: LegalLayoutProps) {
  return (
    <Box minH="100vh" bg="gray.50">
      <LegalHeader title={title} />
      <Container as="main" maxW="4xl" py={8}>
        <Box bg="white" borderRadius="lg" boxShadow="sm" p={8}>
          <VStack align="stretch" gap={8}>
            <Box>
              <Heading as="h2" fontSize="3xl" fontWeight="bold" color="gray.900" mb={2}>
                {title}
              </Heading>
              <Text color="gray.600">最終更新日：{lastUpdated}</Text>
            </Box>
            <Box>
              {children}
            </Box>
          </VStack>
        </Box>
      </Container>
    </Box>
  );
}
