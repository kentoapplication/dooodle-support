import { Box, Container, Heading, Text, Flex } from '@chakra-ui/react';
import { Button } from '../ui/Button';
import { Section } from '../ui/Section';

export function HeroSection() {
  return (
    <Section>
      <Container maxW="6xl">
        <Box textAlign="center">
          <Heading
            as="h2"
            fontSize="5xl"
            fontWeight="bold"
            color="gray.900"
            mb={6}
          >
            友達と絵を共有する
            <br />
            <Text
              as="span"
              bgGradient="linear(to-r, purple.600, pink.600)"
              bgClip="text"
            >
              新感覚アプリ
            </Text>
          </Heading>
          <Text fontSize="xl" color="gray.600" mb={8}>
            落書きを描いて友達と共有。ウィジェットで友達の作品をリアルタイムにチェック！
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
