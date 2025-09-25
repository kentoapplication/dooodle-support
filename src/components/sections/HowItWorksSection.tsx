import {
  Box,
  Container,
  Grid,
  Heading,
  Text,
  Circle
} from '@chakra-ui/react';
import { Card } from '../ui/Card';
import { Section } from '../ui/Section';

export function HowItWorksSection() {
  const steps = [
    {
      number: '1',
      title: '絵を描く',
      description: 'アプリを開いて思いついたものを自由に描きましょう。'
    },
    {
      number: '2',
      title: '友達を追加',
      description: 'ユーザーIDで検索したり、招待リンクを共有して友達を追加します。'
    },
    {
      number: '3',
      title: 'ウィジェット設置',
      description: 'ホーム画面にウィジェットを追加して、友達のdooodleを楽しみましょう。'
    }
  ];

  return (
    <Section background="gray">
      <Container maxW="6xl">
        <Heading
          as="h3"
          fontSize="3xl"
          fontWeight="bold"
          textAlign="center"
          mb={12}
          color="gray.900"
        >
          使い方
        </Heading>
        <Grid templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }} gap={8}>
          {steps.map((step, index) => (
            <Card key={index}>
              <Box p={8} textAlign="center">
                <Circle
                  size="16"
                  bgGradient="linear(to-r, purple.400, pink.400)"
                  color="white"
                  fontSize="2xl"
                  fontWeight="bold"
                  mb={6}
                  mx="auto"
                >
                  {step.number}
                </Circle>
                <Heading
                  as="h4"
                  fontSize="xl"
                  fontWeight="semibold"
                  mb={3}
                  color="gray.900"
                >
                  {step.title}
                </Heading>
                <Text color="gray.600">
                  {step.description}
                </Text>
              </Box>
            </Card>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}
