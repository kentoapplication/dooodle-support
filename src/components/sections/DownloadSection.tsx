import { Box, Container, Heading, Text, Flex } from '@chakra-ui/react';
import { Button } from '../ui/Button';
import { Section } from '../ui/Section';

export function DownloadSection() {
  return (
    <Section id="download" background="white">
      <Container maxW="4xl">
        <Box textAlign="center">
          <Heading
            as="h3"
            fontSize="3xl"
            fontWeight="bold"
            mb={6}
            color="gray.900"
          >
            今すぐダウンロード
          </Heading>
          <Text fontSize="xl" color="gray.600" mb={8}>
            iOS 18.2以降のiPhoneでご利用いただけます
          </Text>
          <Button
            href="https://apps.apple.com/app/dooodle"
            target="_blank"
            rel="noopener noreferrer"
            size="lg"
          >
            <Flex align="center" gap={2}>
              <Text>📱</Text>
              <Text>App Storeでダウンロード</Text>
            </Flex>
          </Button>
        </Box>
      </Container>
    </Section>
  );
}
