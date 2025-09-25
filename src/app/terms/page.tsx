import type { Metadata } from "next";
import { ChakraProvider, Box, Heading, Text, VStack, List, ListItem } from '@chakra-ui/react';
import { LegalLayout } from '../../components/layout/LegalLayout';

export const metadata: Metadata = {
  title: "利用規約 - dooodle",
  description: "dooodleアプリの利用規約をご確認いただけます。",
  robots: "index, follow",
};

export default function TermsPage() {
  return (
    <LegalLayout title="利用規約" lastUpdated="2025年9月11日">
      <VStack align="stretch" gap={8}>
        <Box as="section">
          <Heading as="h3" fontSize="xl" fontWeight="semibold" color="gray.900" mb={4}>
            第1条（適用）
          </Heading>
          <VStack align="stretch" gap={3} color="gray.700">
            <Text>本利用規約（以下「本規約」といいます）は、筒井健登（以下「開発者」といいます）が提供するモバイルアプリケーション「dooodle」（以下「本アプリ」といいます）の利用に関する条件を定めるものです。</Text>
            <Text>本アプリを利用するユーザー（以下「ユーザー」といいます）は、本規約に同意した上で本アプリを利用するものとします。</Text>
            <Text>本規約に同意いただけない場合は、本アプリのご利用をお控えください。</Text>
          </VStack>
        </Box>

        <Box as="section">
          <Heading as="h3" fontSize="xl" fontWeight="semibold" color="gray.900" mb={4}>
            第2条（利用資格・年齢制限）
          </Heading>
          <VStack align="stretch" gap={3} color="gray.700">
            <Text>本アプリは12歳以上の方にご利用いただけます。</Text>
            <Text>12歳以上18歳未満のユーザーは、保護者の同意の下で本アプリを利用するものとします。</Text>
            <Text>開発者は、ユーザーが前項の条件を満たしているかについて確認する義務を負いません。</Text>
          </VStack>
        </Box>

        <Box as="section">
          <Heading as="h3" fontSize="xl" fontWeight="semibold" color="gray.900" mb={4}>
            第3条（アカウント登録）
          </Heading>
          <VStack align="stretch" gap={3} color="gray.700">
            <Text>ユーザーは、開発者所定の方法によりアカウント登録を行うものとします。</Text>
            <Text>ユーザーは、登録時に正確かつ最新の情報を提供するものとします。</Text>
            <Text>開発者は、以下のいずれかに該当する場合、登録を拒否することがあります：</Text>
            <List.Root pl={6} gap={1}>
              <ListItem>登録申請において虚偽の情報を提供した場合</ListItem>
              <ListItem>過去に本規約違反により利用停止処分を受けた場合</ListItem>
              <ListItem>その他、開発者が不適当と判断した場合</ListItem>
            </List.Root>
          </VStack>
        </Box>

        <Box as="section">
          <Heading as="h3" fontSize="xl" fontWeight="semibold" color="gray.900" mb={4}>
            第4条（アカウントの管理）
          </Heading>
          <VStack align="stretch" gap={3} color="gray.700">
            <Text>ユーザーは、自己の責任においてアカウント情報を適切に管理するものとします。</Text>
            <Text>アカウント情報の第三者による不正使用について、開発者は責任を負いません。</Text>
            <Text>アカウント情報が第三者に使用された疑いがある場合は、直ちに開発者にご連絡ください。</Text>
          </VStack>
        </Box>

        <Box as="section">
          <Heading as="h3" fontSize="xl" fontWeight="semibold" color="gray.900" mb={4}>
            第5条（サービス内容）
          </Heading>
          <VStack align="stretch" gap={3} color="gray.700">
            <Text>本アプリは以下の機能を提供します：</Text>
            <List.Root pl={6} gap={1}>
              <ListItem>絵を描く機能</ListItem>
              <ListItem>友達との絵の共有機能</ListItem>
              <ListItem>ウィジェット表示機能</ListItem>
              <ListItem>その他開発者が定める機能</ListItem>
            </List.Root>
          </VStack>
        </Box>

        <Box as="section">
          <Heading as="h3" fontSize="xl" fontWeight="semibold" color="gray.900" mb={4}>
            第6条（禁止事項）
          </Heading>
          <VStack align="stretch" gap={3} color="gray.700">
            <Text>ユーザーは、本アプリの利用にあたり、以下の行為をしてはなりません。</Text>

            <VStack align="stretch" gap={4}>
              <Box>
                <Heading as="h4" fontSize="md" fontWeight="semibold" color="gray.900" mb={2}>
                  法令・公序良俗違反
                </Heading>
                <List.Root pl={6} gap={1}>
                  <ListItem>法令、規制、または公序良俗に違反する行為</ListItem>
                  <ListItem>犯罪行為に関連する行為</ListItem>
                </List.Root>
              </Box>

              <Box>
                <Heading as="h4" fontSize="md" fontWeight="semibold" color="gray.900" mb={2}>
                  不適切なコンテンツの投稿
                </Heading>
                <List.Root pl={6} gap={1}>
                  <ListItem>過度に暴力的、残虐な表現を含むコンテンツ</ListItem>
                  <ListItem>性的な表現を含むコンテンツ（軽度な水着等を除く）</ListItem>
                  <ListItem>差別的表現、ヘイトスピーチを含むコンテンツ</ListItem>
                  <ListItem>他者を誹謗中傷、脅迫する内容</ListItem>
                  <ListItem>自殺、自傷行為を助長する内容</ListItem>
                </List.Root>
              </Box>

              <Box>
                <Heading as="h4" fontSize="md" fontWeight="semibold" color="gray.900" mb={2}>
                  権利侵害
                </Heading>
                <List.Root pl={6} gap={1}>
                  <ListItem>他者の著作権、商標権、肖像権等の知的財産権を侵害する行為</ListItem>
                  <ListItem>個人情報や機密情報を無断で投稿する行為</ListItem>
                </List.Root>
              </Box>

              <Box>
                <Heading as="h4" fontSize="md" fontWeight="semibold" color="gray.900" mb={2}>
                  システム・運営妨害
                </Heading>
                <List.Root pl={6} gap={1}>
                  <ListItem>本アプリのシステムを不正に操作する行為</ListItem>
                  <ListItem>サーバーやネットワークの機能を妨害する行為</ListItem>
                  <ListItem>不正アクセスを試みる行為</ListItem>
                </List.Root>
              </Box>

              <Box>
                <Heading as="h4" fontSize="md" fontWeight="semibold" color="gray.900" mb={2}>
                  なりすまし・詐欺行為
                </Heading>
                <List.Root pl={6} gap={1}>
                  <ListItem>他者になりすます行為</ListItem>
                  <ListItem>虚偽の情報を故意に流布する行為</ListItem>
                  <ListItem>詐欺的行為</ListItem>
                </List.Root>
              </Box>

              <Box>
                <Heading as="h4" fontSize="md" fontWeight="semibold" color="gray.900" mb={2}>
                  商業利用・営利行為
                </Heading>
                <List.Root pl={6} gap={1}>
                  <ListItem>本アプリを商業目的で利用する行為（開発者が許可した場合を除く）</ListItem>
                  <ListItem>スパム行為、無差別な宣伝・勧誘行為</ListItem>
                </List.Root>
              </Box>

              <Box>
                <Heading as="h4" fontSize="md" fontWeight="semibold" color="gray.900" mb={2}>
                  その他
                </Heading>
                <List.Root pl={6}>
                  <ListItem>その他、開発者が不適切と判断する行為</ListItem>
                </List.Root>
              </Box>
            </VStack>
          </VStack>
        </Box>

        <Box as="section">
          <Heading as="h3" fontSize="xl" fontWeight="semibold" color="gray.900" mb={4}>
            第7条（コンテンツの権利関係）
          </Heading>
          <VStack align="stretch" gap={3} color="gray.700">
            <Text>ユーザーが投稿したコンテンツの著作権は、原則としてユーザーに帰属します。</Text>
            <Text>ユーザーは、投稿したコンテンツについて、開発者が以下の目的で利用することを許諾するものとします：</Text>
            <List.Root pl={6} gap={1}>
              <ListItem>本アプリの運営・改善</ListItem>
              <ListItem>技術的な処理（表示、バックアップ等）</ListItem>
              <ListItem>利用規約違反の調査</ListItem>
            </List.Root>
            <Text>開発者は、ユーザーが投稿したコンテンツを営利目的で利用することはありません。</Text>
          </VStack>
        </Box>

        <Box as="section">
          <Heading as="h3" fontSize="xl" fontWeight="semibold" color="gray.900" mb={4}>
            第8条（免責事項）
          </Heading>
          <VStack align="stretch" gap={3} color="gray.700">
            <Text>開発者は、本アプリに関して以下について保証いたしません：</Text>
            <List.Root pl={6} gap={1}>
              <ListItem>本アプリの完全性、正確性、安全性</ListItem>
              <ListItem>本アプリが中断なく利用できること</ListItem>
              <ListItem>本アプリの欠陥が修正されること</ListItem>
            </List.Root>
            <Text>開発者は、本アプリの利用により生じた損害について、開発者に故意または重過失がある場合を除き、一切責任を負いません。</Text>
          </VStack>
        </Box>

        <Box as="section">
          <Heading as="h3" fontSize="xl" fontWeight="semibold" color="gray.900" mb={4}>
            第9条（連絡先・お問い合わせ）
          </Heading>
          <VStack align="stretch" gap={3} color="gray.700">
            <Text>本規約に関するお問い合わせ、異議申し立て、その他のご連絡は、以下までお願いします：</Text>
            <Box bg="gray.50" p={4} borderRadius="lg">
              <Text><Text as="strong">開発者:</Text> 筒井健登</Text>
              <Text><Text as="strong">メールアドレス:</Text> kentoapplication@gmail.com</Text>
              <Text><Text as="strong">X:</Text> @lucppy777</Text>
            </Box>
          </VStack>
        </Box>

        <Box as="section">
          <Box bg="purple.50" p={4} borderRadius="lg">
            <Heading as="h3" fontSize="lg" fontWeight="semibold" color="purple.900" mb={2}>
              重要な情報
            </Heading>
            <VStack align="stretch" gap={2} color="purple.800" fontSize="sm">
              <Text>• Apple App Store: 本アプリは Apple App Store から配信され、Apple の App Store Review Guidelines に従います</Text>
              <Text>• 制定日: 2025年9月11日</Text>
              <Text>• 最終更新: 2025年9月11日</Text>
              <Text>• バージョン: 1.0</Text>
            </VStack>
          </Box>
        </Box>
      </VStack>
    </LegalLayout>
  );
}
