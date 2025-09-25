import type { Metadata } from "next";
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  Grid,
  Flex,
  Circle,
  Link,
  Image
} from '@chakra-ui/react';
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

export const metadata: Metadata = {
  title: "DOOODLEに招待されました！ - DOOODLE",
  description: "友達があなたをDOOODLEに招待しています。App Storeからダウンロードして一緒に絵を描きましょう！",
  robots: "index, follow",
  other: {
    "apple-itunes-app": "app-id=6745752847",
  },
  openGraph: {
    title: "DOOODLEに招待されました！🎨",
    description: "友達があなたをDOOODLEに招待しています。App Storeからダウンロードして一緒に絵を描きましょう！",
    type: "website",
    locale: "ja_JP",
  },
};

export default function InvitePage() {
  return (
    <Box minH="100vh" bg="gray.50">
      <Header />

      <Container as="main" maxW="4xl" py={8}>
        <Box bg="white" borderRadius="lg" boxShadow="sm" p={8}>
          {/* 招待メッセージ */}
          <VStack gap={8} mb={8}>
            <Box textAlign="center">
              <Image
                src="/icon.png"
                alt="dooodle アイコン"
                width="20"
                height="20"
                borderRadius="2xl"
                boxShadow="2xl"
                mb={4}
                mx="auto"
                objectFit="cover"
                bg="white"
              />
              <Heading as="h2" fontSize="3xl" fontWeight="bold" color="gray.900" mb={4}>
                DOOODLEに招待されました！
              </Heading>
              <Text fontSize="xl" color="gray.600" mb={6}>
                友達があなたをDOOODLEに招待しています
              </Text>
            </Box>

            {/* アプリ紹介セクション */}
            <VStack align="stretch" gap={8} width="full">
              <Box as="section">
                <Heading as="h3" fontSize="xl" fontWeight="semibold" color="gray.900" mb={4}>
                  ✨ DOOODLEとは？
                </Heading>
                <VStack align="stretch" gap={3} color="gray.700">
                  <Text>DOOODLEは友達同士で絵を描いて共有できる新感覚のソーシャルアプリです。</Text>
                  <Text>Apple PencilやiPhoneの指で自由に絵を描き、友達と楽しく共有できます。</Text>
                </VStack>
              </Box>

              <Box as="section">
                <Heading as="h3" fontSize="xl" fontWeight="semibold" color="gray.900" mb={4}>
                  🚀 主な機能
                </Heading>
                <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={6}>
                  <VStack align="stretch" gap={4}>
                    <Flex align="flex-start" gap={3}>
                      <Circle size="8" bg="blue.100" mt={1}>
                        <Text fontSize="sm">✏️</Text>
                      </Circle>
                      <Box>
                        <Heading as="h4" fontSize="md" fontWeight="semibold" color="gray.900">
                          自由なお絵描き
                        </Heading>
                        <Text fontSize="sm" color="gray.600">
                          PencilKitで本格的な絵が描けます
                        </Text>
                      </Box>
                    </Flex>
                    <Flex align="flex-start" gap={3}>
                      <Circle size="8" bg="green.100" mt={1}>
                        <Text fontSize="sm">📱</Text>
                      </Circle>
                      <Box>
                        <Heading as="h4" fontSize="md" fontWeight="semibold" color="gray.900">
                          ウィジェット表示
                        </Heading>
                        <Text fontSize="sm" color="gray.600">
                          友達の絵がホーム画面に表示
                        </Text>
                      </Box>
                    </Flex>
                  </VStack>
                  <VStack align="stretch" gap={4}>
                    <Flex align="flex-start" gap={3}>
                      <Circle size="8" bg="purple.100" mt={1}>
                        <Text fontSize="sm">👥</Text>
                      </Circle>
                      <Box>
                        <Heading as="h4" fontSize="md" fontWeight="semibold" color="gray.900">
                          友達と共有
                        </Heading>
                        <Text fontSize="sm" color="gray.600">
                          描いた絵を友達と楽しく共有
                        </Text>
                      </Box>
                    </Flex>
                    <Flex align="flex-start" gap={3}>
                      <Circle size="8" bg="pink.100" mt={1}>
                        <Text fontSize="sm">⚡</Text>
                      </Circle>
                      <Box>
                        <Heading as="h4" fontSize="md" fontWeight="semibold" color="gray.900">
                          リアルタイム更新
                        </Heading>
                        <Text fontSize="sm" color="gray.600">
                          友達の絵がすぐに反映されます
                        </Text>
                      </Box>
                    </Flex>
                  </VStack>
                </Grid>
              </Box>

              <Box as="section">
                <Heading as="h3" fontSize="xl" fontWeight="semibold" color="gray.900" mb={4}>
                  📱 ダウンロード
                </Heading>
                <Box textAlign="center">
                  <Text color="gray.600" mb={6}>
                    iOS 18.2以降のiPhoneでご利用いただけます
                  </Text>
                  <Link
                    href="https://apps.apple.com/app/dooodle/idYOUR_APP_ID"
                    target="_blank"
                    rel="noopener noreferrer"
                    textDecoration="none !important"
                    _hover={{ textDecoration: 'none' }}
                  >
                    <Flex
                      as="span"
                      align="center"
                      justify="center"
                      bg="black"
                      color="white"
                      px={8}
                      py={4}
                      borderRadius="xl"
                      fontWeight="semibold"
                      _hover={{ bg: 'gray.800' }}
                      transition="background-color 0.2s"
                      fontSize="lg"
                      boxShadow="lg"
                      display="inline-flex"
                    >
                      <Text mr={3}>📱</Text>
                      <Text>App Store でダウンロード</Text>
                    </Flex>
                  </Link>
                  <Text fontSize="sm" color="gray.500" mt={4}>
                    iOSデバイスで開くと上部にダウンロードバナーが自動表示されます
                  </Text>
                </Box>
              </Box>

              <Box as="section">
                <Heading as="h3" fontSize="xl" fontWeight="semibold" color="gray.900" mb={4}>
                  🎯 使い方
                </Heading>
                <VStack align="stretch" gap={3} color="gray.700">
                  <Flex align="flex-start" gap={3}>
                    <Circle size="6" bg="purple.500" color="white" fontSize="sm" fontWeight="bold" mt={1}>
                      1
                    </Circle>
                    <Text>
                      <Text as="strong">アプリをダウンロード</Text> - 上記のApp Storeリンクからインストール
                    </Text>
                  </Flex>
                  <Flex align="flex-start" gap={3}>
                    <Circle size="6" bg="pink.500" color="white" fontSize="sm" fontWeight="bold" mt={1}>
                      2
                    </Circle>
                    <Text>
                      <Text as="strong">アカウント作成</Text> - 簡単な登録でアカウントを作成
                    </Text>
                  </Flex>
                  <Flex align="flex-start" gap={3}>
                    <Circle size="6" bg="yellow.500" color="white" fontSize="sm" fontWeight="bold" mt={1}>
                      3
                    </Circle>
                    <Text>
                      <Text as="strong">友達を追加</Text> - 招待してくれた友達を追加して絵を楽しもう！
                    </Text>
                  </Flex>
                </VStack>
              </Box>

              {/* 特別メッセージ */}
              <Box
                bgGradient="linear(to-r, purple.50, pink.50)"
                p={6}
                borderRadius="lg"
                borderLeftWidth="4px"
                borderColor="purple.500"
              >
                <Heading as="h4" fontSize="md" fontWeight="semibold" color="purple.900" mb={2}>
                  🎨 あなたを待っています！
                </Heading>
                <Text color="purple.800">
                  友達があなたとdooodleを一緒に楽しみたがっています。ぜひアプリをダウンロードして、楽しい絵描き体験を始めましょう！
                </Text>
              </Box>
            </VStack>
          </VStack>
        </Box>
      </Container>
      <Footer />
    </Box>
  );
}
