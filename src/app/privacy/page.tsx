import type { Metadata } from "next";
import { Box, Heading, Text, VStack, List, ListItem } from '@chakra-ui/react';
import { LegalLayout } from '../../components/layout/LegalLayout';

export const metadata: Metadata = {
  title: "プライバシーポリシー - dooodle",
  description: "dooodleアプリのプライバシーポリシーをご確認いただけます。個人情報の取り扱いについて詳しく説明しています。",
  robots: "index, follow",
};

export default function PrivacyPage() {
  return (
    <LegalLayout title="プライバシーポリシー" lastUpdated="2025年9月11日">
      <VStack align="stretch" gap={8}>
        <Box as="section">
          <Heading as="h3" fontSize="xl" fontWeight="semibold" color="gray.900" mb={4}>
            第1条（はじめに）
          </Heading>
          <VStack align="stretch" gap={3} color="gray.700">
            <Text>筒井健登（以下「開発者」といいます）は、モバイルアプリケーション「dooodle」（以下「本アプリ」といいます）における個人情報およびプライバシーの保護を重要な責務と考えています。</Text>
            <Text>本プライバシーポリシー（以下「本ポリシー」といいます）は、本アプリを利用するユーザー（以下「ユーザー」といいます）の個人情報等の取扱いについて定めるものです。</Text>
            <Text>本ポリシーは、個人情報の保護に関する法律（個人情報保護法）、電気通信事業法、その他関連する法令およびガイドラインに基づいて策定されています。</Text>
            <Text>ユーザーは、本ポリシーの内容を確認し、同意した上で本アプリをご利用ください。</Text>
          </VStack>
        </Box>

        <Box as="section">
          <Heading as="h3" fontSize="xl" fontWeight="semibold" color="gray.900" mb={4}>
            第2条（定義・用語の説明）
          </Heading>
          <VStack align="stretch" gap={3} color="gray.700">
            <List.Root pl={6} gap={2}>
              <ListItem><Text as="strong">個人情報:</Text> 生存する個人に関する情報であって、特定の個人を識別することができるもの</ListItem>
              <ListItem><Text as="strong">個人データ:</Text> 個人情報データベース等を構成する個人情報</ListItem>
              <ListItem><Text as="strong">保有個人データ:</Text> 開発者が開示、訂正等の権限を有する個人データ</ListItem>
              <ListItem><Text as="strong">本アプリ:</Text> dooodle（iOS向けモバイルアプリケーション）</ListItem>
              <ListItem><Text as="strong">本サービス:</Text> 本アプリによって提供される一切のサービス</ListItem>
              <ListItem><Text as="strong">ユーザー:</Text> 本アプリを利用する個人</ListItem>
              <ListItem><Text as="strong">コンテンツ:</Text> ユーザーが本アプリ内で作成・投稿する絵画、画像、テキスト等</ListItem>
              <ListItem><Text as="strong">個人情報:</Text> 個人情報保護法に定める個人情報</ListItem>
              <ListItem><Text as="strong">知的財産権:</Text> 著作権、特許権、実用新案権、商標権その他の知的財産権</ListItem>
            </List.Root>
          </VStack>
        </Box>

        <Box as="section">
          <Heading as="h3" fontSize="xl" fontWeight="semibold" color="gray.900" mb={4}>
            第3条（収集する情報）
          </Heading>
          <VStack align="stretch" gap={3} color="gray.700">
            <Text>開発者は、以下の情報を収集する場合があります：</Text>
            <List.Root pl={6} gap={1}>
              <ListItem>アカウント情報（ユーザーID、アイコン等）</ListItem>
              <ListItem>作成した絵画データ</ListItem>
              <ListItem>アプリの利用状況（Firebase Analytics）</ListItem>
              <ListItem>デバイス情報（OS、機種等の技術情報）</ListItem>
              <ListItem>クラッシュレポート（アプリの安定性向上のため）</ListItem>
            </List.Root>
          </VStack>
        </Box>

        <Box as="section">
          <Heading as="h3" fontSize="xl" fontWeight="semibold" color="gray.900" mb={4}>
            第4条（情報の利用目的）
          </Heading>
          <VStack align="stretch" gap={3} color="gray.700">
            <Text>収集した情報は以下の目的で利用します：</Text>
            <List.Root pl={6} gap={1}>
              <ListItem>アプリの提供・運営</ListItem>
              <ListItem>ユーザーサポートの提供</ListItem>
              <ListItem>アプリの改善・新機能開発</ListItem>
              <ListItem>技術的問題の解決</ListItem>
              <ListItem>利用規約違反の調査</ListItem>
            </List.Root>
          </VStack>
        </Box>

        <Box as="section">
          <Heading as="h3" fontSize="xl" fontWeight="semibold" color="gray.900" mb={4}>
            第5条（第三者提供）
          </Heading>
          <VStack align="stretch" gap={3} color="gray.700">
            <Text>開発者は、法令に基づく場合を除き、ユーザーの同意なく個人情報を第三者に提供することはありません。</Text>
            <Text>ただし、以下の第三者サービスを利用しており、これらのサービスに情報が送信される場合があります：</Text>
            <List.Root pl={6} gap={1}>
              <ListItem>Firebase（Google LLC）- 認証、データベース、分析</ListItem>
              <ListItem>Apple サービス - プッシュ通知、アプリ配信</ListItem>
            </List.Root>
          </VStack>
        </Box>

        <Box as="section">
          <Heading as="h3" fontSize="xl" fontWeight="semibold" color="gray.900" mb={4}>
            第6条（ユーザーの権利）
          </Heading>
          <VStack align="stretch" gap={3} color="gray.700">
            <Text>ユーザーは以下の権利を有します：</Text>
            <List.Root pl={6} gap={1}>
              <ListItem>個人情報の開示請求</ListItem>
              <ListItem>個人情報の訂正・削除請求</ListItem>
              <ListItem>個人情報の利用停止請求</ListItem>
              <ListItem>アカウントの削除</ListItem>
            </List.Root>
            <Text>これらの権利を行使したい場合は、後述のお問い合わせ先までご連絡ください。</Text>
          </VStack>
        </Box>

        <Box as="section">
          <Heading as="h3" fontSize="xl" fontWeight="semibold" color="gray.900" mb={4}>
            第7条（お問い合わせ）
          </Heading>
          <VStack align="stretch" gap={3} color="gray.700">
            <Text>本ポリシーに関するお問い合わせは以下までお願いします：</Text>
            <Box bg="gray.50" p={4} borderRadius="lg">
              <Text><Text as="strong">開発者:</Text> 筒井健登</Text>
              <Text><Text as="strong">メールアドレス:</Text> kentoapplication@gmail.com</Text>
              <Text><Text as="strong">X:</Text> @lucppy777</Text>
            </Box>
          </VStack>
        </Box>

        <Box mt={12} pt={8}>
          <Box borderTopWidth="1px" borderColor="gray.200" pt={8}>
            <VStack align="flex-start" gap={1} fontSize="sm" color="gray.600">
              <Text><Text as="strong">制定日:</Text> 2025年9月11日</Text>
              <Text><Text as="strong">最終更新:</Text> 2025年9月11日</Text>
              <Text><Text as="strong">バージョン:</Text> 1.0</Text>
            </VStack>
          </Box>
        </Box>
      </VStack>
    </LegalLayout>
  );
}
