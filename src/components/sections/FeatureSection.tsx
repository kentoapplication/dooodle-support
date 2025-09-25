import { Box, Container, Grid, Heading, Text } from '@chakra-ui/react';
import { Card } from '../ui/Card';
import { Section } from '../ui/Section';

export function FeatureSection() {
  const features = [
    {
      icon: '🎨',
      title: '簡単お絵描き',
      description: 'Apple Pencilにも対応。思いついたアイデアをサクッと描いて友達に共有できます。'
    },
    {
      icon: '👥',
      title: '友達と共有',
      description: '描いた絵を友達に送信。みんなで楽しく絵を描いて、創作の輪を広げましょう。'
    },
    {
      icon: '📱',
      title: 'ウィジェット',
      description: 'ホーム画面に友達の絵がランダム表示。いつでも友達の作品を楽しめます。'
    }
  ];

  return (
    <Section id="features" background="white">
      <Container maxW="6xl">
        <Heading
          as="h3"
          fontSize="3xl"
          fontWeight="bold"
          textAlign="center"
          mb={12}
          color="gray.900"
        >
          主な機能
        </Heading>
        <Grid templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }} gap={8}>
          {features.map((feature, index) => (
            <Card key={index}>
              <Box p={8} textAlign="center">
                <Text fontSize="4xl" mb={4}>{feature.icon}</Text>
                <Heading
                  as="h4"
                  fontSize="xl"
                  fontWeight="semibold"
                  mb={4}
                  color="gray.900"
                >
                  {feature.title}
                </Heading>
                <Text color="gray.600">
                  {feature.description}
                </Text>
              </Box>
            </Card>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}
