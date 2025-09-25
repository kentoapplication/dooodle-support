import type { Metadata } from "next";
import { Box, Heading, Text, VStack, List, ListItem, Link } from '@chakra-ui/react';
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
            <List.Root pl={0} gap={2}>
              <ListItem><Text as="strong">個人情報:</Text> 生存する個人に関する情報であって、特定の個人を識別することができるもの</ListItem>
              <ListItem><Text as="strong">個人データ:</Text> 個人情報データベース等を構成する個人情報</ListItem>
              <ListItem><Text as="strong">保有個人データ:</Text> 開発者が開示、内容の訂正等の権限を有する個人データ</ListItem>
              <ListItem><Text as="strong">利用者情報:</Text> 個人情報に該当するか否かを問わず、ユーザーに関連する情報</ListItem>
              <ListItem><Text as="strong">デバイス情報:</Text> スマートフォン等の端末に関する情報</ListItem>
            </List.Root>
          </VStack>
        </Box>

        <Box as="section">
          <Heading as="h3" fontSize="xl" fontWeight="semibold" color="gray.900" mb={4}>
            第3条（個人情報取扱事業者）
          </Heading>
          <VStack align="stretch" gap={3} color="gray.700">
            <Text>個人情報取扱事業者の名称等:</Text>
            <List.Root pl={6} gap={1}>
              <ListItem>氏名: 筒井健登</ListItem>
              <ListItem>連絡先: kentoapplication@gmail.com</ListItem>
            </List.Root>
          </VStack>
        </Box>

        <Box as="section">
          <Heading as="h3" fontSize="xl" fontWeight="semibold" color="gray.900" mb={4}>
            第4条（収集する情報）
          </Heading>
          <VStack align="stretch" gap={3} color="gray.700">
            <Text>開発者は、以下の情報を収集いたします：</Text>

            <Box>
              <Text fontWeight="semibold" mb={2}>4.1 ユーザーが提供する情報</Text>
              <Box pl={4}>
                <Text fontWeight="semibold" mb={1}>アカウント情報</Text>
                <List.Root pl={6} gap={1}>
                  <ListItem>ユーザー名（表示名）</ListItem>
                  <ListItem>ユーザーID（一意識別子）</ListItem>
                  <ListItem>メールアドレス</ListItem>
                  <ListItem>パスワード（暗号化して保存）</ListItem>
                </List.Root>

                <Text fontWeight="semibold" mb={1} mt={3}>コンテンツ情報</Text>
                <List.Root pl={6} gap={1}>
                  <ListItem>ユーザーが作成した絵画・イラスト（画像データ）</ListItem>
                  <ListItem>投稿に付随するメタデータ（作成日時等）</ListItem>
                </List.Root>

                <Text fontWeight="semibold" mb={1} mt={3}>コミュニケーション情報</Text>
                <List.Root pl={6} gap={1}>
                  <ListItem>友達リクエストの送受信情報</ListItem>
                  <ListItem>リアクション情報</ListItem>
                  <ListItem>友達関係データ</ListItem>
                </List.Root>
              </Box>
            </Box>

            <Box>
              <Text fontWeight="semibold" mb={2}>4.2 自動的に収集される情報</Text>
              <Box pl={4}>
                <Text fontWeight="semibold" mb={1}>デバイス・技術情報</Text>
                <List.Root pl={6} gap={1}>
                  <ListItem>デバイスの種類・モデル</ListItem>
                  <ListItem>オペレーティングシステムの種類・バージョン</ListItem>
                  <ListItem>アプリのバージョン</ListItem>
                  <ListItem>端末の一意識別子</ListItem>
                  <ListItem>IPアドレス</ListItem>
                  <ListItem>タイムゾーン設定</ListItem>
                </List.Root>

                <Text fontWeight="semibold" mb={1} mt={3}>利用状況情報</Text>
                <List.Root pl={6} gap={1}>
                  <ListItem>アプリの起動・利用時間</ListItem>
                  <ListItem>機能の利用状況・頻度</ListItem>
                  <ListItem>操作ログ・クリック情報</ListItem>
                  <ListItem>エラー・クラッシュ情報</ListItem>
                  <ListItem>パフォーマンス関連データ</ListItem>
                </List.Root>

                <Text fontWeight="semibold" mb={1} mt={3}>Apple固有の情報（iOSの場合）</Text>
                <List.Root pl={6} gap={1}>
                  <ListItem>Apple Push Notification Service（APNs）トークン</ListItem>
                  <ListItem>WidgetKit関連データ</ListItem>
                  <ListItem>PencilKit利用データ</ListItem>
                </List.Root>
              </Box>
            </Box>

            <Box>
              <Text fontWeight="semibold" mb={2}>4.3 第三者から取得する情報</Text>
              <List.Root pl={6} gap={1}>
                <ListItem>Firebase Analyticsからの統計情報</ListItem>
                <ListItem>Apple App Storeからの配信関連情報</ListItem>
              </List.Root>
            </Box>
          </VStack>
        </Box>

        <Box as="section">
          <Heading as="h3" fontSize="xl" fontWeight="semibold" color="gray.900" mb={4}>
            第5条（個人情報の利用目的）
          </Heading>
          <VStack align="stretch" gap={3} color="gray.700">
            <Text>収集した個人情報は、以下の目的で利用いたします：</Text>

            <Box>
              <Text fontWeight="semibold" mb={2}>5.1 サービス提供目的</Text>
              <List.Root pl={6} gap={1}>
                <ListItem>ユーザーアカウントの作成・管理・認証</ListItem>
                <ListItem>絵の作成・保存・表示機能の提供</ListItem>
                <ListItem>友達機能（検索・リクエスト・承認）の提供</ListItem>
                <ListItem>リアクション機能の提供</ListItem>
                <ListItem>ウィジェット機能の提供（友達の絵のランダム表示）</ListItem>
                <ListItem>プッシュ通知機能の提供</ListItem>
              </List.Root>
            </Box>

            <Box>
              <Text fontWeight="semibold" mb={2}>5.2 サービス改善・運営目的</Text>
              <List.Root pl={6} gap={1}>
                <ListItem>サービスの品質向上・機能改善</ListItem>
                <ListItem>新機能の開発・テスト</ListItem>
                <ListItem>システムの安定稼働・パフォーマンス向上</ListItem>
                <ListItem>バグ修正・エラー対応</ListItem>
                <ListItem>利用状況の統計分析（個人を特定できない形で処理）</ListItem>
              </List.Root>
            </Box>

            <Box>
              <Text fontWeight="semibold" mb={2}>5.3 安全・セキュリティ目的</Text>
              <List.Root pl={6} gap={1}>
                <ListItem>不正アクセス・不正利用の防止・検知</ListItem>
                <ListItem>アカウントのセキュリティ確保</ListItem>
                <ListItem>規約違反行為の調査・対応</ListItem>
                <ListItem>法令遵守・法的対応</ListItem>
              </List.Root>
            </Box>

            <Box>
              <Text fontWeight="semibold" mb={2}>5.4 コミュニケーション目的</Text>
              <List.Root pl={6} gap={1}>
                <ListItem>重要なお知らせ・システム通知の配信</ListItem>
                <ListItem>アップデート情報の提供</ListItem>
                <ListItem>お問い合わせへの対応</ListItem>
              </List.Root>
            </Box>

            <Box>
              <Text fontWeight="semibold" mb={2}>5.5 将来実装予定機能の目的</Text>
              <List.Root pl={6} gap={1}>
                <ListItem>広告配信サービスの提供（実装時に別途通知）</ListItem>
                <ListItem>有料機能の提供（実装時に別途通知）</ListItem>
              </List.Root>
            </Box>
          </VStack>
        </Box>

        <Box as="section">
          <Heading as="h3" fontSize="xl" fontWeight="semibold" color="gray.900" mb={4}>
            第6条（個人情報の第三者提供）
          </Heading>
          <VStack align="stretch" gap={3} color="gray.700">
            <Box>
              <Text fontWeight="semibold" mb={2}>6.1 第三者提供の原則</Text>
              <Text mb={2}>開発者は、以下の場合を除き、ユーザーの個人情報を第三者に提供いたしません：</Text>
              <List.Root pl={6} gap={1}>
                <ListItem>ユーザーの同意がある場合</ListItem>
                <ListItem>法令に基づく場合</ListItem>
                <ListItem>人の生命、身体または財産の保護のために必要がある場合</ListItem>
                <ListItem>公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合</ListItem>
                <ListItem>国の機関等への協力が必要な場合</ListItem>
              </List.Root>
            </Box>

            <Box>
              <Text fontWeight="semibold" mb={2}>6.2 業務委託に伴う提供</Text>
              <Text mb={2}>開発者は、業務委託に伴い以下の委託先に個人情報を提供する場合があります：</Text>

              <Box mb={3}>
                <Text fontWeight="semibold">Google LLC（Firebase サービス）</Text>
                <List.Root pl={6} gap={1}>
                  <ListItem>提供目的: ユーザー認証、データベース、ストレージ、分析機能の提供</ListItem>
                  <ListItem>提供する情報: アカウント情報、コンテンツ情報、利用状況情報</ListItem>
                  <ListItem>所在地: アメリカ合衆国</ListItem>
                  <ListItem>保護措置: 適切なデータ処理契約（DPA）を締結</ListItem>
                </List.Root>
              </Box>

              <Box>
                <Text fontWeight="semibold">Apple Inc.</Text>
                <List.Root pl={6} gap={1}>
                  <ListItem>提供目的: アプリ配信、プッシュ通知、決済処理</ListItem>
                  <ListItem>提供する情報: デバイス情報、通知用トークン</ListItem>
                  <ListItem>所在地: アメリカ合衆国</ListItem>
                  <ListItem>保護措置: Apple Developer Agreement に基づく適切な保護措置</ListItem>
                </List.Root>
              </Box>
            </Box>

            <Box>
              <Text fontWeight="semibold" mb={2}>6.3 外国にある第三者への提供</Text>
              <Text mb={2}>個人情報の外国への移転について：</Text>
              <List.Root pl={6} gap={1}>
                <ListItem>移転先国: アメリカ合衆国、その他Googleが指定する国・地域</ListItem>
                <ListItem>当該国の個人情報保護制度: 米国にはCCPA、州法等の保護規制が存在</ListItem>
                <ListItem>保護措置: 標準契約条項（SCC）、認証制度への参加等</ListItem>
              </List.Root>
            </Box>
          </VStack>
        </Box>

        <Box as="section">
          <Heading as="h3" fontSize="xl" fontWeight="semibold" color="gray.900" mb={4}>
            第7条（個人情報の国際移転・越境データ処理）
          </Heading>
          <VStack align="stretch" gap={3} color="gray.700">
            <Box>
              <Text fontWeight="semibold" mb={2}>7.1 データ保存場所</Text>
              <Text>ユーザーのデータは、主にGoogle Cloud Platform上のサーバー（アメリカ合衆国およびその他の国・地域）に保存されます。</Text>
            </Box>

            <Box>
              <Text fontWeight="semibold" mb={2}>7.2 GDPR域内ユーザーへの配慮</Text>
              <Text mb={2}>EU域内のユーザーについては、GDPRに基づく適切な保護措置を講じています：</Text>
              <List.Root pl={6} gap={1}>
                <ListItem>適切性決定またはSCCに基づく移転</ListItem>
                <ListItem>データ処理の透明性確保</ListItem>
                <ListItem>個人データ保護の技術的・組織的措置</ListItem>
              </List.Root>
            </Box>

            <Box>
              <Text fontWeight="semibold" mb={2}>7.3 データローカライゼーション</Text>
              <Text>特定の国・地域の法令でデータローカライゼーションが要求される場合は、該当する法令に従います。</Text>
            </Box>
          </VStack>
        </Box>

        <Box as="section">
          <Heading as="h3" fontSize="xl" fontWeight="semibold" color="gray.900" mb={4}>
            第8条（保有個人データの開示等）
          </Heading>
          <VStack align="stretch" gap={3} color="gray.700">
            <Box>
              <Text fontWeight="semibold" mb={2}>8.1 ユーザーの権利</Text>
              <Text mb={2}>保有個人データに関して、ユーザーは以下の権利を有します：</Text>

              <Box mb={3}>
                <Text fontWeight="semibold" mb={1}>基本的権利</Text>
                <List.Root pl={6} gap={1}>
                  <ListItem>利用目的の通知請求権: 個人情報の利用目的の通知を求める権利</ListItem>
                  <ListItem>開示請求権: 保有個人データの開示を求める権利</ListItem>
                  <ListItem>訂正・追加・削除請求権: 内容に誤りがある場合の訂正等を求める権利</ListItem>
                  <ListItem>利用停止・消去請求権: 不適切な取扱いがあった場合の利用停止等を求める権利</ListItem>
                  <ListItem>第三者提供停止請求権: 第三者提供の停止を求める権利</ListItem>
                </List.Root>
              </Box>

              <Box>
                <Text fontWeight="semibold" mb={1}>GDPR適用時の追加権利（EU域内ユーザー）</Text>
                <List.Root pl={6} gap={1}>
                  <ListItem>アクセス権: 個人データ処理の詳細情報へのアクセス権</ListItem>
                  <ListItem>修正権: 不正確な個人データの修正を求める権利</ListItem>
                  <ListItem>消去権（忘れられる権利）: 個人データの削除を求める権利</ListItem>
                  <ListItem>処理制限権: 特定の条件下での処理制限を求める権利</ListItem>
                  <ListItem>データポータビリティ権: 構造化された形でのデータ提供を求める権利</ListItem>
                  <ListItem>異議申立権: 自動処理による決定への異議申立権</ListItem>
                </List.Root>
              </Box>
            </Box>

            <Box>
              <Text fontWeight="semibold" mb={2}>8.2 権利行使の方法</Text>
              <Text mb={2}>権利行使をご希望の場合は、以下の方法でご連絡ください：</Text>
              <List.Root pl={6} gap={1}>
                <ListItem>開発者: 筒井健登</ListItem>
                <ListItem>メールアドレス: kentoapplication@gmail.com</ListItem>
                <ListItem>X: @lucppy777</ListItem>
              </List.Root>
            </Box>

            <Box>
              <Text fontWeight="semibold" mb={2}>8.3 本人確認</Text>
              <Text>権利行使の際は、なりすまし防止のため適切な本人確認を行います。</Text>
            </Box>

            <Box>
              <Text fontWeight="semibold" mb={2}>8.4 手数料</Text>
              <Text>利用目的の通知および開示請求については、手数料（1件につき500円）をいただく場合があります。</Text>
            </Box>

            <Box>
              <Text fontWeight="semibold" mb={2}>8.5 対応期間</Text>
              <Text>原則として請求受領から30日以内（複雑な場合は最大60日）に対応いたします。</Text>
            </Box>
          </VStack>
        </Box>

        <Box as="section">
          <Heading as="h3" fontSize="xl" fontWeight="semibold" color="gray.900" mb={4}>
            第9条（個人情報の安全管理措置）
          </Heading>
          <VStack align="stretch" gap={3} color="gray.700">
            <Text>開発者は、個人情報の漏洩・滅失・毀損等を防止するため、以下のセキュリティ対策を実施しています：</Text>

            <Box>
              <Text fontWeight="semibold" mb={2}>9.1 技術的安全管理措置</Text>
              <List.Root pl={6} gap={1}>
                <ListItem>通信暗号化: SSL/TLS暗号化通信の使用</ListItem>
                <ListItem>データ暗号化: 保存データの暗号化</ListItem>
                <ListItem>アクセス制御: ユーザー認証・権限管理システム</ListItem>
                <ListItem>ログ監視: アクセスログの記録・監視</ListItem>
                <ListItem>脆弱性対策: 定期的なセキュリティ評価・パッチ適用</ListItem>
              </List.Root>
            </Box>

            <Box>
              <Text fontWeight="semibold" mb={2}>9.2 物理的安全管理措置</Text>
              <List.Root pl={6} gap={1}>
                <ListItem>データセンターの物理的セキュリティ（Firebase基盤）</ListItem>
                <ListItem>サーバールームへの入退室管理</ListItem>
              </List.Root>
            </Box>

            <Box>
              <Text fontWeight="semibold" mb={2}>9.3 人的安全管理措置</Text>
              <List.Root pl={6} gap={1}>
                <ListItem>従業員への個人情報保護教育</ListItem>
                <ListItem>秘密保持義務の徹底</ListItem>
                <ListItem>アクセス権限の最小権限原則</ListItem>
              </List.Root>
            </Box>

            <Box>
              <Text fontWeight="semibold" mb={2}>9.4 組織的安全管理措置</Text>
              <List.Root pl={6} gap={1}>
                <ListItem>個人情報保護管理体制の構築</ListItem>
                <ListItem>個人情報取扱規程の策定・運用</ListItem>
                <ListItem>インシデント対応体制の整備</ListItem>
              </List.Root>
            </Box>
          </VStack>
        </Box>

        <Box as="section">
          <Heading as="h3" fontSize="xl" fontWeight="semibold" color="gray.900" mb={4}>
            第10条（個人情報の保存期間）
          </Heading>
          <VStack align="stretch" gap={3} color="gray.700">
            <Box>
              <Text fontWeight="semibold" mb={2}>10.1 基本的な保存期間</Text>
              <List.Root pl={6} gap={1}>
                <ListItem>アカウント情報: アカウント存続期間中</ListItem>
                <ListItem>コンテンツ情報: アカウント削除後30日以内に削除</ListItem>
                <ListItem>利用状況情報: 最大24ヶ月間</ListItem>
                <ListItem>バックアップデータ: 最大12ヶ月間</ListItem>
              </List.Root>
            </Box>

            <Box>
              <Text fontWeight="semibold" mb={2}>10.2 法定保存期間</Text>
              <Text>法令により保存が義務付けられている情報は、該当法令で定められた期間保存します。</Text>
            </Box>

            <Box>
              <Text fontWeight="semibold" mb={2}>10.3 アカウント削除時の処理</Text>
              <Text mb={2}>ユーザーがアカウントを削除した場合：</Text>
              <List.Root pl={6} gap={1}>
                <ListItem>個人を特定できる情報は30日以内に削除</ListItem>
                <ListItem>統計情報として匿名化処理されたデータは保持する場合があります</ListItem>
                <ListItem>不正利用防止のため最小限の情報を保持する場合があります</ListItem>
              </List.Root>
            </Box>
          </VStack>
        </Box>

        <Box as="section">
          <Heading as="h3" fontSize="xl" fontWeight="semibold" color="gray.900" mb={4}>
            第11条（Cookie・類似技術）
          </Heading>
          <VStack align="stretch" gap={3} color="gray.700">
            <Box>
              <Text fontWeight="semibold" mb={2}>11.1 使用する技術</Text>
              <Text mb={2}>本アプリでは以下の技術を使用する場合があります：</Text>
              <List.Root pl={6} gap={1}>
                <ListItem>ローカルストレージ: アプリ設定・一時データの保存</ListItem>
                <ListItem>デバイスID: サービス提供のための端末識別</ListItem>
                <ListItem>分析ツール: Firebase Analytics等</ListItem>
              </List.Root>
            </Box>

            <Box>
              <Text fontWeight="semibold" mb={2}>11.2 利用目的</Text>
              <List.Root pl={6} gap={1}>
                <ListItem>ユーザー体験の向上</ListItem>
                <ListItem>アプリの利用状況分析</ListItem>
                <ListItem>技術的機能の提供</ListItem>
              </List.Root>
            </Box>

            <Box>
              <Text fontWeight="semibold" mb={2}>11.3 第三者による情報収集</Text>
              <Text>Firebase等の第三者サービスが独自に情報収集を行う場合があります。詳細は各サービスのプライバシーポリシーをご確認ください。</Text>
            </Box>
          </VStack>
        </Box>

        <Box as="section">
          <Heading as="h3" fontSize="xl" fontWeight="semibold" color="gray.900" mb={4}>
            第12条（児童のプライバシー保護）
          </Heading>
          <VStack align="stretch" gap={3} color="gray.700">
            <Box>
              <Text fontWeight="semibold" mb={2}>12.1 年齢制限</Text>
              <Text>本アプリは12歳以上の方を対象としています。</Text>
            </Box>

            <Box>
              <Text fontWeight="semibold" mb={2}>12.2 児童の個人情報保護</Text>
              <List.Root pl={6} gap={1}>
                <ListItem>12歳未満のユーザーから意図的に個人情報を収集することはありません</ListItem>
                <ListItem>12歳未満の利用が判明した場合は、直ちにアカウント削除および情報削除を行います</ListItem>
                <ListItem>保護者の方からの削除要請があった場合は速やかに対応します</ListItem>
              </List.Root>
            </Box>

            <Box>
              <Text fontWeight="semibold" mb={2}>12.3 COPPA対応</Text>
              <Text>米国児童オンラインプライバシー保護法（COPPA）に準拠し、13歳未満の児童の保護を行います。</Text>
            </Box>
          </VStack>
        </Box>

        <Box as="section">
          <Heading as="h3" fontSize="xl" fontWeight="semibold" color="gray.900" mb={4}>
            第13条（アプリの権限・機能）
          </Heading>
          <VStack align="stretch" gap={3} color="gray.700">
            <Box>
              <Text fontWeight="semibold" mb={2}>13.1 要求する権限</Text>
              <Text mb={2}>本アプリでは以下の権限を要求する場合があります：</Text>

              <Box mb={3}>
                <Text fontWeight="semibold" mb={1}>必須権限</Text>
                <List.Root pl={6} gap={1}>
                  <ListItem>インターネットアクセス: サービス利用のための通信</ListItem>
                  <ListItem>ネットワーク状態: 接続状況の確認</ListItem>
                </List.Root>
              </Box>

              <Box>
                <Text fontWeight="semibold" mb={1}>オプション権限</Text>
                <List.Root pl={6} gap={1}>
                  <ListItem>通知権限: プッシュ通知の配信</ListItem>
                  <ListItem>カメラ権限: 写真撮影機能使用時（将来実装予定）</ListItem>
                  <ListItem>写真ライブラリ: 画像選択時（将来実装予定）</ListItem>
                </List.Root>
              </Box>
            </Box>

            <Box>
              <Text fontWeight="semibold" mb={2}>13.2 権限の管理</Text>
              <Text>ユーザーはいつでもデバイス設定から権限の変更・取り消しが可能です。</Text>
            </Box>

            <Box>
              <Text fontWeight="semibold" mb={2}>13.3 ウィジェット機能</Text>
              <List.Root pl={6} gap={1}>
                <ListItem>iOS WidgetKit を使用してホーム画面に友達の絵を表示</ListItem>
                <ListItem>表示される絵はランダムに選択され、定期的に更新</ListItem>
                <ListItem>ウィジェット表示のためにアプリグループ領域にデータを一時保存</ListItem>
              </List.Root>
            </Box>
          </VStack>
        </Box>

        <Box as="section">
          <Heading as="h3" fontSize="xl" fontWeight="semibold" color="gray.900" mb={4}>
            第14条（第三者サービス・外部リンク）
          </Heading>
          <VStack align="stretch" gap={3} color="gray.700">
            <Box>
              <Text fontWeight="semibold" mb={2}>14.1 利用する第三者サービス</Text>

              <Box mb={3}>
                <Text fontWeight="semibold" mb={1}>Firebase（Google LLC）</Text>
                <List.Root pl={6} gap={1}>
                  <ListItem>サービス内容: ユーザー認証、データベース、ストレージ、分析</ListItem>
                  <ListItem>プライバシーポリシー: <Link href="https://firebase.google.com/support/privacy" color="blue.600">https://firebase.google.com/support/privacy</Link></ListItem>
                  <ListItem>データ処理契約: Google Cloud Data Processing Addendum</ListItem>
                </List.Root>
              </Box>

              <Box>
                <Text fontWeight="semibold" mb={1}>Apple サービス</Text>
                <List.Root pl={6} gap={1}>
                  <ListItem>サービス内容: App Store、Push Notification、WidgetKit</ListItem>
                  <ListItem>プライバシーポリシー: <Link href="https://www.apple.com/privacy/" color="blue.600">https://www.apple.com/privacy/</Link></ListItem>
                </List.Root>
              </Box>
            </Box>

            <Box>
              <Text fontWeight="semibold" mb={2}>14.2 外部リンク</Text>
              <Text>本アプリから外部サイトへのリンクがある場合、リンク先サイトのプライバシーポリシーは開発者の管理下にありません。</Text>
            </Box>
          </VStack>
        </Box>

        <Box as="section">
          <Heading as="h3" fontSize="xl" fontWeight="semibold" color="gray.900" mb={4}>
            第15条（データ侵害・セキュリティインシデント）
          </Heading>
          <VStack align="stretch" gap={3} color="gray.700">
            <Box>
              <Text fontWeight="semibold" mb={2}>15.1 インシデント発生時の対応</Text>
              <Text mb={2}>個人情報の漏洩等が発生した場合：</Text>
              <List.Root pl={6} gap={1}>
                <ListItem>速やかに事実関係を調査</ListItem>
                <ListItem>必要に応じて関係当局への報告</ListItem>
                <ListItem>ユーザーへの適切な通知</ListItem>
                <ListItem>再発防止策の実施</ListItem>
              </List.Root>
            </Box>

            <Box>
              <Text fontWeight="semibold" mb={2}>15.2 通知方法</Text>
              <Text>重大なセキュリティインシデントについては、アプリ内通知、メール、公式ウェブサイトにて告知します。</Text>
            </Box>
          </VStack>
        </Box>

        <Box as="section">
          <Heading as="h3" fontSize="xl" fontWeight="semibold" color="gray.900" mb={4}>
            第16条（プライバシーポリシーの変更）
          </Heading>
          <VStack align="stretch" gap={3} color="gray.700">
            <Box>
              <Text fontWeight="semibold" mb={2}>16.1 変更の手続き</Text>
              <Text mb={2}>開発者は必要に応じて本ポリシーを変更することがあります：</Text>

              <Box mb={3}>
                <Text fontWeight="semibold" mb={1}>軽微な変更</Text>
                <List.Root pl={6} gap={1}>
                  <ListItem>誤字脱字の修正</ListItem>
                  <ListItem>連絡先の変更</ListItem>
                  <ListItem>法令改正に伴う軽微な修正</ListItem>
                </List.Root>
              </Box>

              <Box>
                <Text fontWeight="semibold" mb={1}>重要な変更</Text>
                <List.Root pl={6} gap={1}>
                  <ListItem>利用目的の大幅な変更</ListItem>
                  <ListItem>第三者提供先の変更</ListItem>
                  <ListItem>ユーザーの権利に大きな影響を与える変更</ListItem>
                </List.Root>
              </Box>
            </Box>

            <Box>
              <Text fontWeight="semibold" mb={2}>16.2 変更通知の方法</Text>
              <List.Root pl={6} gap={1}>
                <ListItem>軽微な変更: 本ポリシー上での表示</ListItem>
                <ListItem>重要な変更: アプリ内通知、メール通知、30日前の事前告知</ListItem>
              </List.Root>
            </Box>

            <Box>
              <Text fontWeight="semibold" mb={2}>16.3 変更への同意</Text>
              <Text>変更後の継続利用は新ポリシーへの同意とみなします。同意できない場合は利用を中止してください。</Text>
            </Box>
          </VStack>
        </Box>

        <Box as="section">
          <Heading as="h3" fontSize="xl" fontWeight="semibold" color="gray.900" mb={4}>
            第17条（お問い合わせ・苦情処理）
          </Heading>
          <VStack align="stretch" gap={3} color="gray.700">
            <Box>
              <Text fontWeight="semibold" mb={2}>17.1 連絡先</Text>
              <Text mb={2}>本ポリシーに関するお問い合わせは以下まで：</Text>
              <List.Root pl={6} gap={1}>
                <ListItem>開発者: 筒井健登</ListItem>
                <ListItem>メールアドレス: kentoapplication@gmail.com</ListItem>
                <ListItem>X: @lucppy777</ListItem>
              </List.Root>
            </Box>

            <Box>
              <Text fontWeight="semibold" mb={2}>17.2 苦情処理</Text>
              <Text mb={2}>個人情報の取扱いに関する苦情がある場合：</Text>
              <List.Root pl={6} gap={1}>
                <ListItem>まず開発者へ直接ご相談ください</ListItem>
                <ListItem>解決しない場合は個人情報保護委員会等の監督機関にご相談いただけます</ListItem>
              </List.Root>
              <Box mt={2}>
                <Text fontWeight="semibold" mb={1}>個人情報保護委員会:</Text>
                <List.Root pl={6} gap={1}>
                  <ListItem>電話: 03-6457-9849</ListItem>
                  <ListItem>ウェブサイト: <Link href="https://www.ppc.go.jp/" color="blue.600">https://www.ppc.go.jp/</Link></ListItem>
                </List.Root>
              </Box>
            </Box>

            <Box>
              <Text fontWeight="semibold" mb={2}>17.3 対応期間</Text>
              <Text>お問い合わせには原則として7営業日以内に回答いたします。</Text>
            </Box>
          </VStack>
        </Box>

        <Box as="section">
          <Heading as="h3" fontSize="xl" fontWeight="semibold" color="gray.900" mb={4}>
            第18条（準拠法・管轄）
          </Heading>
          <VStack align="stretch" gap={3} color="gray.700">
            <List.Root pl={0} gap={1}>
              <ListItem>本ポリシーは日本法に準拠して解釈されます。</ListItem>
              <ListItem>本ポリシーに関する紛争については、東京地方裁判所を専属的合意管轄裁判所とします。</ListItem>
            </List.Root>
          </VStack>
        </Box>

        <Box as="section">
          <Heading as="h3" fontSize="xl" fontWeight="semibold" color="gray.900" mb={4}>
            第19条（その他）
          </Heading>
          <VStack align="stretch" gap={3} color="gray.700">
            <Box>
              <Text fontWeight="semibold" mb={2}>19.1 言語</Text>
              <Text>本ポリシーは日本語で作成されており、他言語版との齟齬がある場合は日本語版が優先されます。</Text>
            </Box>

            <Box>
              <Text fontWeight="semibold" mb={2}>19.2 一部無効</Text>
              <Text>本ポリシーの一部が無効と判断された場合でも、他の部分の有効性には影響しません。</Text>
            </Box>

            <Box>
              <Text fontWeight="semibold" mb={2}>19.3 利用規約との関係</Text>
              <Text>本ポリシーは利用規約と合わせてお読みください。</Text>
            </Box>
          </VStack>
        </Box>

        <Box as="section" bg="gray.50" p={6} borderRadius="md">
          <Heading as="h3" fontSize="xl" fontWeight="semibold" color="gray.900" mb={4}>
            重要な情報・リンク
          </Heading>
          <VStack align="stretch" gap={2} color="gray.700">
            <Text>Firebase プライバシーポリシー: <Link href="https://firebase.google.com/support/privacy" color="blue.600">https://firebase.google.com/support/privacy</Link></Text>
            <Text>Apple プライバシーポリシー: <Link href="https://www.apple.com/privacy/" color="blue.600">https://www.apple.com/privacy/</Link></Text>
            <Text>個人情報保護委員会: <Link href="https://www.ppc.go.jp/" color="blue.600">https://www.ppc.go.jp/</Link></Text>
            <Text>開発者プライバシーポリシー最新版: <Link href="https://docs.google.com/document/d/e/2PACX-1vRJqyxWBgScBCbUav4Ljw44abdlJKkmxABvLmQexyKij2WohUH0-5RyTHw6gs6mkMxnvMA79M4irlqe/pub" color="blue.600">Google Docs版</Link></Text>
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
