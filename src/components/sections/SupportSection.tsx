import {
  Box,
  Container,
  Grid,
  Heading,
  Text,
  VStack,
  Accordion,
  Link,
  Separator
} from '@chakra-ui/react';
import { Card } from '../ui/Card';
import { Section } from '../ui/Section';

export function SupportSection() {
  const faqs = [
    {
      question: 'ウィジェットが更新されません',
      answer: 'iOS設定でウィジェットの更新が有効になっているかご確認ください。また、友達が新しいdooodleを投稿していることも確認してください。'
    },
    {
      question: '友達を追加できません',
      answer: '相手が友達検索を許可しているかご確認ください。また、正確なユーザーIDを入力していることも確認してください。'
    },
    {
      question: '描いた絵が保存されません',
      answer: 'ネットワーク接続が安定していることを確認してください。また、アプリを最新版に更新していることもご確認ください。'
    }
  ];

  return (
    <Section id="support" background="gray">
      <Container maxW="4xl">
        <Heading
          as="h3"
          fontSize="3xl"
          fontWeight="bold"
          textAlign="center"
          mb={12}
          color="gray.900"
        >
          サポート・お問い合わせ
        </Heading>
        <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={8}>
          <Card>
            <Box p={8}>
              <Heading
                as="h4"
                fontSize="xl"
                fontWeight="semibold"
                mb={4}
                color="gray.900"
              >
                よくある質問
              </Heading>
              <Accordion.Root multiple collapsible>
                {faqs.map((faq, index) => (
                  <Accordion.Item
                    key={index}
                    value={`faq-${index}`}
                    borderWidth="0"
                  >
                    <Accordion.ItemTrigger
                      px={0}
                      color="purple.600"
                      fontWeight="medium"
                      _hover={{ bg: 'transparent' }}
                      _expanded={{ color: 'purple.800' }}
                    >
                      <Box flex="1" textAlign="left">
                        {faq.question}
                      </Box>
                      <Accordion.ItemIndicator />
                    </Accordion.ItemTrigger>
                    <Accordion.ItemContent>
                      <Accordion.ItemBody px={0} pb={4}>
                        <Text color="gray.600" fontSize="sm">
                          {faq.answer}
                        </Text>
                      </Accordion.ItemBody>
                    </Accordion.ItemContent>
                  </Accordion.Item>
                ))}
              </Accordion.Root>
            </Box>
          </Card>

          <Card>
            <Box p={8}>
              <Heading
                as="h4"
                fontSize="xl"
                fontWeight="semibold"
                mb={4}
                color="gray.900"
              >
                お問い合わせ
              </Heading>
              <Text color="gray.600" mb={6}>
                ご不明な点やご要望がございましたら、下記フォームからお気軽にお問い合わせください。
              </Text>
              <Link
                href="https://forms.gle/9uvw6wjUHberEJ6fA"
                display="inline-block"
                bg="purple.600"
                color="white"
                px={6}
                py={3}
                borderRadius="lg"
                fontWeight="semibold"
                _hover={{ bg: 'purple.700' }}
                transition="background-color 0.2s"
                target="_blank"
                rel="noopener noreferrer"
                textDecoration="none !important"
              >
                お問い合わせフォーム
              </Link>
              <Box mt={6} pt={6}>
                <Separator borderColor="gray.200" mb={6} />
                <VStack align="flex-start" gap={2}>
                  <Heading as="h5" fontWeight="semibold" color="gray.900">
                    開発者情報
                  </Heading>
                  <Text fontSize="sm" color="gray.600">
                    開発者: 筒井健登
                  </Text>
                  <Text fontSize="sm" color="gray.600">
                    メール: kentoapplication@gmail.com
                  </Text>
                  <Text fontSize="sm" color="gray.600">
                    X (Twitter): @lucppy777
                  </Text>
                </VStack>
              </Box>
            </Box>
          </Card>
        </Grid>
      </Container>
    </Section>
  );
}
