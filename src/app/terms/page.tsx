import type { Metadata } from "next";
import { Box, Heading, Text, VStack, List, ListItem, Link } from '@chakra-ui/react';
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
            <Text>アカウント情報の第三者による不正使用について、開発者は一切の責任を負いません。</Text>
            <Text>アカウント情報の不正使用を発見した場合は、直ちに開発者にご連絡ください。</Text>
          </VStack>
        </Box>

        <Box as="section">
          <Heading as="h3" fontSize="xl" fontWeight="semibold" color="gray.900" mb={4}>
            第5条（サービス内容）
          </Heading>
          <VStack align="stretch" gap={3} color="gray.700">
            <Text>本アプリは、友達同士で絵を描いて共有するソーシャルネットワーキングサービスです。</Text>
            <Text>本アプリの主な機能は以下の通りです：</Text>
            <List.Root pl={6} gap={1}>
              <ListItem>絵の作成・編集機能（PencilKit使用）</ListItem>
              <ListItem>友達との絵の共有機能</ListItem>
              <ListItem>友達の絵をウィジェットで表示する機能</ListItem>
              <ListItem>友達の招待・検索機能</ListItem>
            </List.Root>
            <Text>本アプリでは、友達として承認されたユーザー間でのみ絵の共有が行われます。</Text>
          </VStack>
        </Box>

        <Box as="section">
          <Heading as="h3" fontSize="xl" fontWeight="semibold" color="gray.900" mb={4}>
            第6条（友達機能）
          </Heading>
          <VStack align="stretch" gap={3} color="gray.700">
            <Text>ユーザーは以下の方法で他のユーザーに友達リクエストを送信できます：</Text>
            <List.Root pl={6} gap={1}>
              <ListItem>招待リンクを通じた招待</ListItem>
              <ListItem>ユーザー検索機能による検索（相手が許可している場合）</ListItem>
            </List.Root>
            <Text>友達関係は、リクエストを受けた側が承認することで成立します。</Text>
            <Text>ユーザーは設定により、検索による友達リクエストの受信を拒否することができます。</Text>
            <Text>ユーザーはいつでも友達関係を解除することができます。</Text>
          </VStack>
        </Box>

        <Box as="section">
          <Heading as="h3" fontSize="xl" fontWeight="semibold" color="gray.900" mb={4}>
            第7条（コンテンツの投稿）
          </Heading>
          <VStack align="stretch" gap={3} color="gray.700">
            <Text>ユーザーは本アプリを通じて以下のコンテンツを投稿することができます：</Text>
            <List.Root pl={6} gap={1}>
              <ListItem>自ら作成した絵画・イラスト</ListItem>
              <ListItem>既存作品の二次創作（個人利用の範囲内）</ListItem>
            </List.Root>
            <Text>投稿されたコンテンツは友達として承認されたユーザーのみが閲覧できます。</Text>
          </VStack>
        </Box>

        <Box as="section">
          <Heading as="h3" fontSize="xl" fontWeight="semibold" color="gray.900" mb={4}>
            第8条（禁止事項）
          </Heading>
          <VStack align="stretch" gap={3} color="gray.700">
            <Text>ユーザーは、本アプリの利用において以下の行為を行ってはなりません：</Text>

            <Box>
              <Text fontWeight="semibold" mb={2}>法令・公序良俗違反</Text>
              <List.Root pl={6} gap={1}>
                <ListItem>法令、規制、または公序良俗に違反する行為</ListItem>
                <ListItem>犯罪行為に関連する行為</ListItem>
              </List.Root>
            </Box>

            <Box>
              <Text fontWeight="semibold" mb={2}>不適切なコンテンツの投稿</Text>
              <List.Root pl={6} gap={1}>
                <ListItem>過度に暴力的、残虐な表現を含むコンテンツ</ListItem>
                <ListItem>性的な表現を含むコンテンツ（軽度な水着等を除く）</ListItem>
                <ListItem>差別的表現、ヘイトスピーチを含むコンテンツ</ListItem>
                <ListItem>他者を誹謗中傷、脅迫する内容</ListItem>
                <ListItem>自殺、自傷行為を助長する内容</ListItem>
              </List.Root>
            </Box>

            <Box>
              <Text fontWeight="semibold" mb={2}>権利侵害</Text>
              <List.Root pl={6} gap={1}>
                <ListItem>他者の著作権、商標権、肖像権等の知的財産権を侵害する行為</ListItem>
                <ListItem>個人情報や機密情報を無断で投稿する行為</ListItem>
              </List.Root>
            </Box>

            <Box>
              <Text fontWeight="semibold" mb={2}>システム・運営妨害</Text>
              <List.Root pl={6} gap={1}>
                <ListItem>本アプリのシステムを不正に操作する行為</ListItem>
                <ListItem>サーバーやネットワークの機能を妨害する行為</ListItem>
                <ListItem>不正アクセスを試みる行為</ListItem>
              </List.Root>
            </Box>

            <Box>
              <Text fontWeight="semibold" mb={2}>なりすまし・詐欺行為</Text>
              <List.Root pl={6} gap={1}>
                <ListItem>他者になりすます行為</ListItem>
                <ListItem>虚偽の情報を故意に流布する行為</ListItem>
                <ListItem>詐欺的行為</ListItem>
              </List.Root>
            </Box>

            <Box>
              <Text fontWeight="semibold" mb={2}>商業利用・営利行為</Text>
              <List.Root pl={6} gap={1}>
                <ListItem>本アプリを商業目的で利用する行為（開発者が許可した場合を除く）</ListItem>
                <ListItem>スパム行為、無差別な宣伝・勧誘行為</ListItem>
              </List.Root>
            </Box>

            <Box>
              <Text fontWeight="semibold" mb={2}>その他</Text>
              <List.Root pl={6} gap={1}>
                <ListItem>その他、開発者が不適切と判断する行為</ListItem>
              </List.Root>
            </Box>
          </VStack>
        </Box>

        <Box as="section">
          <Heading as="h3" fontSize="xl" fontWeight="semibold" color="gray.900" mb={4}>
            第9条（コンテンツの権利関係）
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
            第10条（プライバシー・データの取扱い）
          </Heading>
          <VStack align="stretch" gap={3} color="gray.700">
            <Text>開発者は、ユーザーの個人情報を適切に管理し、別途定めるプライバシーポリシーに従って取り扱います。</Text>
            <Text>開発者は、サービス改善のため以下のデータを収集・分析することがあります：</Text>
            <List.Root pl={6} gap={1}>
              <ListItem>アプリのインストール数</ListItem>
              <ListItem>アカウント登録数</ListItem>
              <ListItem>ログイン状況</ListItem>
              <ListItem>一般的な利用統計情報</ListItem>
            </List.Root>
            <Text>前項のデータは統計的に処理され、個人を特定できない形で利用されます。</Text>
          </VStack>
        </Box>

        <Box as="section">
          <Heading as="h3" fontSize="xl" fontWeight="semibold" color="gray.900" mb={4}>
            第11条（利用制限・アカウント停止）
          </Heading>
          <VStack align="stretch" gap={3} color="gray.700">
            <Text>開発者は、ユーザーが以下のいずれかに該当する場合、事前の通知なく本アプリの利用を制限し、またはアカウントを停止することができます：</Text>
            <List.Root pl={6} gap={1}>
              <ListItem>本規約に違反した場合</ListItem>
              <ListItem>登録情報に虚偽があることが判明した場合</ListItem>
              <ListItem>長期間本アプリを利用していない場合</ListItem>
              <ListItem>その他、開発者が本アプリの利用を不適当と判断した場合</ListItem>
            </List.Root>
            <Text>前項により利用制限またはアカウント停止となった場合でも、開発者は一切の責任を負いません。</Text>
          </VStack>
        </Box>

        <Box as="section">
          <Heading as="h3" fontSize="xl" fontWeight="semibold" color="gray.900" mb={4}>
            第12条（コンテンツの削除）
          </Heading>
          <VStack align="stretch" gap={3} color="gray.700">
            <Text>開発者は、投稿されたコンテンツが本規約に違反すると判断した場合、事前の通知なくこれを削除することができます。</Text>
            <Text>開発者は、システム障害やその他の事情により、ユーザーのコンテンツが失われる可能性があることを告知し、ユーザーはこれを承諾するものとします。</Text>
            <Text>開発者は、コンテンツの削除や消失について、一切の責任を負いません。</Text>
          </VStack>
        </Box>

        <Box as="section">
          <Heading as="h3" fontSize="xl" fontWeight="semibold" color="gray.900" mb={4}>
            第13条（サービスの変更・終了）
          </Heading>
          <VStack align="stretch" gap={3} color="gray.700">
            <Text>開発者は、事前の通知により本アプリの内容を変更、追加、または廃止することができます。</Text>
            <Text>開発者は、以下の場合には本アプリの提供を一時停止または終了することができます：</Text>
            <List.Root pl={6} gap={1}>
              <ListItem>システムメンテナンスを行う場合</ListItem>
              <ListItem>不可抗力により提供が困難になった場合</ListItem>
              <ListItem>Apple または Google がプラットフォームでの配信を停止した場合</ListItem>
              <ListItem>その他、開発者が必要と判断した場合</ListItem>
            </List.Root>
            <Text fontWeight="semibold" mb={2}>サービス終了時の手続き:</Text>
            <List.Root pl={6} gap={1}>
              <ListItem>サービス終了の場合は、少なくとも3ヶ月前に通知いたします</ListItem>
              <ListItem>ユーザーはデータのエクスポート機能（提供される場合）を利用してデータを保存できます</ListItem>
              <ListItem>有料サービス利用者には適切な措置を講じます</ListItem>
            </List.Root>
            <Text>サービスの変更・終了により生じた損害について、開発者は一切の責任を負いません。</Text>
          </VStack>
        </Box>

        <Box as="section">
          <Heading as="h3" fontSize="xl" fontWeight="semibold" color="gray.900" mb={4}>
            第14条（将来の機能追加について）
          </Heading>
          <VStack align="stretch" gap={3} color="gray.700">
            <Text>開発者は、将来的に以下の機能を追加する可能性があります：</Text>
            <List.Root pl={6} gap={1}>
              <ListItem>有料プレミアム機能</ListItem>
              <ListItem>広告表示機能</ListItem>
              <ListItem>AIを活用した機能</ListItem>
              <ListItem>その他のサービス向上のための機能</ListItem>
            </List.Root>
            <Text>これらの機能を追加する際は、事前に通知し、必要に応じて本規約を改定します。</Text>
          </VStack>
        </Box>

        <Box as="section">
          <Heading as="h3" fontSize="xl" fontWeight="semibold" color="gray.900" mb={4}>
            第15条（免責事項・責任制限）
          </Heading>
          <VStack align="stretch" gap={3} color="gray.700">
            <Text fontWeight="semibold" mb={2}>サービスの保証:</Text>
            <Text>開発者は、本アプリの完全性、正確性、安全性、継続性について保証しません。</Text>

            <Text fontWeight="semibold" mb={2}>第三者サービス:</Text>
            <Text>Firebase、Apple、Google等の第三者サービスに起因する障害やデータ損失について、開発者は責任を負いません。</Text>

            <Text fontWeight="semibold" mb={2}>一般的免責:</Text>
            <Text>開発者は、本アプリの利用により生じたいかなる損害についても、開発者に故意または重過失がある場合を除き、一切の責任を負いません。</Text>

            <Text fontWeight="semibold" mb={2}>責任制限:</Text>
            <Text>開発者の責任が認められる場合でも、損害賠償額は当該ユーザーが開発者に支払った金額（無料ユーザーの場合は0円）を上限とします。</Text>

            <Text fontWeight="semibold" mb={2}>ユーザー間トラブル:</Text>
            <Text>ユーザー同士のトラブルについて、開発者は一切の責任を負いません。</Text>

            <Text fontWeight="semibold" mb={2}>消費者契約法との関係:</Text>
            <Text>本条の規定は、消費者契約法その他の強行規定の適用を排除するものではありません。</Text>
          </VStack>
        </Box>

        <Box as="section">
          <Heading as="h3" fontSize="xl" fontWeight="semibold" color="gray.900" mb={4}>
            第16条（規約の変更）
          </Heading>
          <VStack align="stretch" gap={3} color="gray.700">
            <Text>開発者は、以下の場合にはユーザーの同意なく本規約を変更することができます：</Text>
            <List.Root pl={6} gap={1}>
              <ListItem>変更がユーザーの一般の利益に適合する場合</ListItem>
              <ListItem>変更が本アプリ利用契約の目的に反せず、変更の必要性や内容が合理的である場合</ListItem>
              <ListItem>法令の改正により変更が必要な場合</ListItem>
            </List.Root>

            <Text fontWeight="semibold" mb={2}>変更通知の方法:</Text>
            <List.Root pl={6} gap={1}>
              <ListItem>軽微な変更：効力発生日の7日前までに本アプリ内または開発者ウェブサイトにて通知</ListItem>
              <ListItem>重要な変更：効力発生日の30日前までに通知し、必要に応じてアプリ内で同意を求める場合があります</ListItem>
            </List.Root>

            <Text>変更後の規約に同意できない場合は、本アプリの利用を中止してください。継続利用は新規約への同意とみなします。</Text>
          </VStack>
        </Box>

        <Box as="section">
          <Heading as="h3" fontSize="xl" fontWeight="semibold" color="gray.900" mb={4}>
            第17条（紛争解決・準拠法・管轄裁判所）
          </Heading>
          <VStack align="stretch" gap={3} color="gray.700">
            <Text fontWeight="semibold" mb={2}>協議による解決:</Text>
            <Text>本規約に関する紛争が生じた場合、当事者は誠実に協議により解決を図るものとします。</Text>

            <Text fontWeight="semibold" mb={2}>仲裁手続き:</Text>
            <List.Root pl={6} gap={1}>
              <ListItem>協議により解決しない場合、当事者の合意により仲裁手続きによる解決を選択することができます</ListItem>
              <ListItem>仲裁は日本商事仲裁協会の商事仲裁規則に従って行われるものとします</ListItem>
            </List.Root>

            <Text fontWeight="semibold" mb={2}>準拠法:</Text>
            <Text>本規約は日本法に準拠し、日本法に従って解釈されるものとします。</Text>

            <Text fontWeight="semibold" mb={2}>管轄裁判所:</Text>
            <Text>本アプリに関する紛争については、東京地方裁判所を第一審の専属的合意管轄裁判所とします。</Text>
          </VStack>
        </Box>

        <Box as="section">
          <Heading as="h3" fontSize="xl" fontWeight="semibold" color="gray.900" mb={4}>
            第18条（分離可能性・存続条項）
          </Heading>
          <VStack align="stretch" gap={3} color="gray.700">
            <Text fontWeight="semibold" mb={2}>分離可能性:</Text>
            <Text>本規約の一部が無効または執行不能と判断された場合でも、本規約の他の部分の有効性には影響しません。</Text>

            <Text fontWeight="semibold" mb={2}>存続条項:</Text>
            <Text>本規約終了後も、以下の条項は効力を維持します：</Text>
            <List.Root pl={6} gap={1}>
              <ListItem>第9条（コンテンツの権利関係）</ListItem>
              <ListItem>第15条（免責事項・責任制限）</ListItem>
              <ListItem>第17条（紛争解決・準拠法・管轄裁判所）</ListItem>
            </List.Root>
          </VStack>
        </Box>

        <Box as="section">
          <Heading as="h3" fontSize="xl" fontWeight="semibold" color="gray.900" mb={4}>
            第19条（言語・翻訳）
          </Heading>
          <VStack align="stretch" gap={3} color="gray.700">
            <Text>本規約は日本語で作成されており、日本語版が正式版となります。</Text>
            <Text>他言語版が提供されている場合でも、齟齬がある場合は日本語版が優先されます。</Text>
          </VStack>
        </Box>

        <Box as="section">
          <Heading as="h3" fontSize="xl" fontWeight="semibold" color="gray.900" mb={4}>
            第20条（連絡・通知方法）
          </Heading>
          <VStack align="stretch" gap={3} color="gray.700">
            <Text fontWeight="semibold" mb={2}>開発者からユーザーへの通知:</Text>
            <List.Root pl={6} gap={1}>
              <ListItem>アプリ内通知</ListItem>
              <ListItem>登録されたメールアドレスへの送信</ListItem>
              <ListItem>プッシュ通知</ListItem>
              <ListItem>開発者ウェブサイトでの掲載</ListItem>
            </List.Root>

            <Text fontWeight="semibold" mb={2}>ユーザーから開発者への連絡:</Text>
            <Text>以下の連絡先をご利用ください</Text>
          </VStack>
        </Box>

        <Box as="section">
          <Heading as="h3" fontSize="xl" fontWeight="semibold" color="gray.900" mb={4}>
            第21条（連絡先・お問い合わせ）
          </Heading>
          <VStack align="stretch" gap={3} color="gray.700">
            <Text>本規約に関するお問い合わせ、異議申し立て、その他のご連絡は、以下までお願いします：</Text>
            <List.Root pl={6} gap={1}>
              <ListItem>開発者: 筒井健登</ListItem>
              <ListItem>メールアドレス: kentoapplication@gmail.com</ListItem>
              <ListItem>X: @lucppy777</ListItem>
            </List.Root>
          </VStack>
        </Box>

        <Box as="section" bg="gray.50" p={6} borderRadius="md">
          <Heading as="h3" fontSize="xl" fontWeight="semibold" color="gray.900" mb={4}>
            重要な情報
          </Heading>
          <VStack align="stretch" gap={2} color="gray.700">
            <Text>Apple App Store: 本アプリは Apple App Store から配信され、Apple の App Store Review Guidelines に従います</Text>
            <Text>利用規約の最新版: <Link href="https://docs.google.com/document/d/e/2PACX-1vThtJllAlityWV1r1-SmPEE1CGwGRfCziYqNfIpzqT5cNYEgeJWiBIBJGHjSxqlSo56aZ5qIpCsYAPg/pub" color="blue.600">Google Docs版</Link>で最新版をご確認いただけます</Text>
            <Text>緊急連絡先: セキュリティに関する緊急事態は kentoapplication@gmail.com までご連絡ください</Text>
          </VStack>
        </Box>

        <Box as="section" textAlign="center" pt={6} borderTop="1px" borderColor="gray.200">
          <VStack gap={1} color="gray.600">
            <Text fontWeight="semibold">制定日: 2025年9月11日</Text>
            <Text fontWeight="semibold">最終更新: 2025年9月11日</Text>
            <Text fontWeight="semibold">バージョン: 1.0</Text>
          </VStack>
        </Box>
      </VStack>
    </LegalLayout>
  );
}
