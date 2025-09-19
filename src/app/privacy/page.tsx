import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "プライバシーポリシー - dooodle",
  description: "dooodleアプリのプライバシーポリシーをご確認いただけます。個人情報の取り扱いについて詳しく説明しています。",
  robots: "index, follow",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* ヘッダー */}
      <header className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg flex items-center justify-center">
                <span className="text-white text-lg">🎨</span>
              </div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                dooodle
              </h1>
            </div>
            <a
              href="/dooodle-support"
              className="text-purple-600 hover:text-purple-700 font-medium transition-colors"
            >
              ← ホームに戻る
            </a>
          </div>
        </div>
      </header>

      {/* メインコンテンツ */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">プライバシーポリシー</h2>
          <p className="text-gray-600 mb-8">最終更新日：2025年9月11日</p>
          
          <div className="prose prose-gray max-w-none">
            <div className="space-y-8">
              
              <section>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">第1条（はじめに）</h3>
                <div className="text-gray-700 space-y-3">
                  <p>筒井健登（以下「開発者」といいます）は、モバイルアプリケーション「dooodle」（以下「本アプリ」といいます）における個人情報およびプライバシーの保護を重要な責務と考えています。</p>
                  <p>本プライバシーポリシー（以下「本ポリシー」といいます）は、本アプリを利用するユーザー（以下「ユーザー」といいます）の個人情報等の取扱いについて定めるものです。</p>
                  <p>本ポリシーは、個人情報の保護に関する法律（個人情報保護法）、電気通信事業法、その他関連する法令およびガイドラインに基づいて策定されています。</p>
                  <p>ユーザーは、本ポリシーの内容を確認し、同意した上で本アプリをご利用ください。</p>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">第2条（定義・用語の説明）</h3>
                <div className="text-gray-700 space-y-3">
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>個人情報:</strong> 生存する個人に関する情報であって、特定の個人を識別することができるもの</li>
                    <li><strong>個人データ:</strong> 個人情報データベース等を構成する個人情報</li>
                    <li><strong>保有個人データ:</strong> 開発者が開示、内容の訂正等の権限を有する個人データ</li>
                    <li><strong>利用者情報:</strong> 個人情報に該当するか否かを問わず、ユーザーに関連する情報</li>
                    <li><strong>デバイス情報:</strong> スマートフォン等の端末に関する情報</li>
                  </ul>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">第3条（個人情報取扱事業者）</h3>
                <div className="text-gray-700">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p><strong>氏名:</strong> 筒井健登</p>
                    <p><strong>連絡先:</strong> kentoapplication@gmail.com</p>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">第4条（収集する情報）</h3>
                <div className="text-gray-700 space-y-4">
                  <p>開発者は、以下の情報を収集いたします：</p>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">4.1 ユーザーが提供する情報</h4>
                    
                    <div className="space-y-3">
                      <div>
                        <h5 className="font-medium text-gray-900">アカウント情報</h5>
                        <ul className="list-disc pl-6 space-y-1 text-sm">
                          <li>ユーザー名（表示名）</li>
                          <li>ユーザーID（一意識別子）</li>
                          <li>メールアドレス</li>
                          <li>パスワード（暗号化して保存）</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h5 className="font-medium text-gray-900">コンテンツ情報</h5>
                        <ul className="list-disc pl-6 space-y-1 text-sm">
                          <li>ユーザーが作成した絵画・イラスト（画像データ）</li>
                          <li>投稿に付随するメタデータ（作成日時等）</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h5 className="font-medium text-gray-900">コミュニケーション情報</h5>
                        <ul className="list-disc pl-6 space-y-1 text-sm">
                          <li>友達リクエストの送受信情報</li>
                          <li>リアクション情報</li>
                          <li>友達関係データ</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">4.2 自動的に収集される情報</h4>
                    
                    <div className="space-y-3">
                      <div>
                        <h5 className="font-medium text-gray-900">デバイス・技術情報</h5>
                        <ul className="list-disc pl-6 space-y-1 text-sm">
                          <li>デバイスの種類・モデル</li>
                          <li>オペレーティングシステムの種類・バージョン</li>
                          <li>アプリのバージョン</li>
                          <li>端末の一意識別子</li>
                          <li>IPアドレス</li>
                          <li>タイムゾーン設定</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h5 className="font-medium text-gray-900">利用状況情報</h5>
                        <ul className="list-disc pl-6 space-y-1 text-sm">
                          <li>アプリの起動・利用時間</li>
                          <li>機能の利用状況・頻度</li>
                          <li>操作ログ・クリック情報</li>
                          <li>エラー・クラッシュ情報</li>
                          <li>パフォーマンス関連データ</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h5 className="font-medium text-gray-900">Apple固有の情報（iOSの場合）</h5>
                        <ul className="list-disc pl-6 space-y-1 text-sm">
                          <li>Apple Push Notification Service（APNs）トークン</li>
                          <li>WidgetKit関連データ</li>
                          <li>PencilKit利用データ</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">4.3 第三者から取得する情報</h4>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Firebase Analyticsからの統計情報</li>
                      <li>Apple App Storeからの配信関連情報</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">第5条（個人情報の利用目的）</h3>
                <div className="text-gray-700 space-y-4">
                  <p>収集した個人情報は、以下の目的で利用いたします：</p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">5.1 サービス提供目的</h4>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>ユーザーアカウントの作成・管理・認証</li>
                        <li>絵の作成・保存・表示機能の提供</li>
                        <li>友達機能（検索・リクエスト・承認）の提供</li>
                        <li>リアクション機能の提供</li>
                        <li>ウィジェット機能の提供（友達の絵のランダム表示）</li>
                        <li>プッシュ通知機能の提供</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">5.2 サービス改善・運営目的</h4>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>サービスの品質向上・機能改善</li>
                        <li>新機能の開発・テスト</li>
                        <li>システムの安定稼働・パフォーマンス向上</li>
                        <li>バグ修正・エラー対応</li>
                        <li>利用状況の統計分析（個人を特定できない形で処理）</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">5.3 安全・セキュリティ目的</h4>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>不正アクセス・不正利用の防止・検知</li>
                        <li>アカウントのセキュリティ確保</li>
                        <li>規約違反行為の調査・対応</li>
                        <li>法令遵守・法的対応</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">5.4 コミュニケーション目的</h4>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>重要なお知らせ・システム通知の配信</li>
                        <li>アップデート情報の提供</li>
                        <li>お問い合わせへの対応</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">5.5 将来実装予定機能の目的</h4>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>広告配信サービスの提供（実装時に別途通知）</li>
                        <li>有料機能の提供（実装時に別途通知）</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">第6条（個人情報の第三者提供）</h3>
                <div className="text-gray-700 space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">6.1 第三者提供の原則</h4>
                    <p>開発者は、以下の場合を除き、ユーザーの個人情報を第三者に提供いたしません：</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>ユーザーの同意がある場合</li>
                      <li>法令に基づく場合</li>
                      <li>人の生命、身体または財産の保護のために必要がある場合</li>
                      <li>公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合</li>
                      <li>国の機関等への協力が必要な場合</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">6.2 業務委託に伴う提供</h4>
                    <p>開発者は、業務委託に伴い以下の委託先に個人情報を提供する場合があります：</p>
                    
                    <div className="space-y-3">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h5 className="font-medium text-gray-900">Google LLC（Firebase サービス）</h5>
                        <ul className="text-sm space-y-1 mt-2">
                          <li><strong>提供目的:</strong> ユーザー認証、データベース、ストレージ、分析機能の提供</li>
                          <li><strong>提供する情報:</strong> アカウント情報、コンテンツ情報、利用状況情報</li>
                          <li><strong>所在地:</strong> アメリカ合衆国</li>
                          <li><strong>保護措置:</strong> 適切なデータ処理契約（DPA）を締結</li>
                        </ul>
                      </div>

                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h5 className="font-medium text-gray-900">Apple Inc.</h5>
                        <ul className="text-sm space-y-1 mt-2">
                          <li><strong>提供目的:</strong> アプリ配信、プッシュ通知、決済処理</li>
                          <li><strong>提供する情報:</strong> デバイス情報、通知用トークン</li>
                          <li><strong>所在地:</strong> アメリカ合衆国</li>
                          <li><strong>保護措置:</strong> Apple Developer Agreement に基づく適切な保護措置</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">6.3 外国にある第三者への提供</h4>
                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <p className="font-medium text-yellow-900 mb-2">個人情報の外国への移転について：</p>
                      <ul className="text-sm text-yellow-800 space-y-1">
                        <li><strong>移転先国:</strong> アメリカ合衆国、その他Googleが指定する国・地域</li>
                        <li><strong>当該国の個人情報保護制度:</strong> 米国にはCCPA、州法等の保護規制が存在</li>
                        <li><strong>保護措置:</strong> 標準契約条項（SCC）、認証制度への参加等</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">第8条（保有個人データの開示等）</h3>
                <div className="text-gray-700 space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">8.1 ユーザーの権利</h4>
                    <p>保有個人データに関して、ユーザーは以下の権利を有します：</p>
                    
                    <div className="space-y-3">
                      <div>
                        <h5 className="font-medium text-gray-900">基本的権利</h5>
                        <ul className="list-disc pl-6 space-y-1 text-sm">
                          <li>利用目的の通知請求権: 個人情報の利用目的の通知を求める権利</li>
                          <li>開示請求権: 保有個人データの開示を求める権利</li>
                          <li>訂正・追加・削除請求権: 内容に誤りがある場合の訂正等を求める権利</li>
                          <li>利用停止・消去請求権: 不適切な取扱いがあった場合の利用停止等を求める権利</li>
                          <li>第三者提供停止請求権: 第三者提供の停止を求める権利</li>
                        </ul>
                      </div>

                      <div>
                        <h5 className="font-medium text-gray-900">GDPR適用時の追加権利（EU域内ユーザー）</h5>
                        <ul className="list-disc pl-6 space-y-1 text-sm">
                          <li>アクセス権: 個人データ処理の詳細情報へのアクセス権</li>
                          <li>修正権: 不正確な個人データの修正を求める権利</li>
                          <li>消去権（忘れられる権利）: 個人データの削除を求める権利</li>
                          <li>処理制限権: 特定の条件下での処理制限を求める権利</li>
                          <li>データポータビリティ権: 構造化された形でのデータ提供を求める権利</li>
                          <li>異議申立権: 自動処理による決定への異議申立権</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">8.2 権利行使の方法</h4>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="mb-2">権利行使をご希望の場合は、以下の方法でご連絡ください：</p>
                      <p><strong>開発者:</strong> 筒井健登</p>
                      <p><strong>メールアドレス:</strong> kentoapplication@gmail.com</p>
                      <p><strong>X:</strong> @lucppy777</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">8.3 本人確認</h4>
                    <p>権利行使の際は、なりすまし防止のため適切な本人確認を行います。</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">8.4 手数料</h4>
                    <p>利用目的の通知および開示請求については、手数料（1件につき500円）をいただく場合があります。</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">8.5 対応期間</h4>
                    <p>原則として請求受領から30日以内（複雑な場合は最大60日）に対応いたします。</p>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">第13条（アプリの権限・機能）</h3>
                <div className="text-gray-700 space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">13.1 要求する権限</h4>
                    <p>本アプリでは以下の権限を要求する場合があります：</p>
                    
                    <div className="space-y-3">
                      <div>
                        <h5 className="font-medium text-gray-900">必須権限</h5>
                        <ul className="list-disc pl-6 space-y-1 text-sm">
                          <li>インターネットアクセス: サービス利用のための通信</li>
                          <li>ネットワーク状態: 接続状況の確認</li>
                        </ul>
                      </div>

                      <div>
                        <h5 className="font-medium text-gray-900">オプション権限</h5>
                        <ul className="list-disc pl-6 space-y-1 text-sm">
                          <li>通知権限: プッシュ通知の配信</li>
                          <li>カメラ権限: 写真撮影機能使用時（将来実装予定）</li>
                          <li>写真ライブラリ: 画像選択時（将来実装予定）</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">13.2 権限の管理</h4>
                    <p>ユーザーはいつでもデバイス設定から権限の変更・取り消しが可能です。</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">13.3 ウィジェット機能</h4>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <ul className="text-sm text-blue-800 space-y-1">
                        <li>• iOS WidgetKit を使用してホーム画面に友達の絵を表示</li>
                        <li>• 表示される絵はランダムに選択され、定期的に更新</li>
                        <li>• ウィジェット表示のためにアプリグループ領域にデータを一時保存</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">第14条（第三者サービス・外部リンク）</h3>
                <div className="text-gray-700 space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">14.1 利用する第三者サービス</h4>
                    
                    <div className="space-y-3">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h5 className="font-medium text-gray-900">Firebase（Google LLC）</h5>
                        <ul className="text-sm space-y-1 mt-2">
                          <li><strong>サービス内容:</strong> ユーザー認証、データベース、ストレージ、分析</li>
                          <li><strong>プライバシーポリシー:</strong> <a href="https://firebase.google.com/support/privacy" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://firebase.google.com/support/privacy</a></li>
                          <li><strong>データ処理契約:</strong> Google Cloud Data Processing Addendum</li>
                        </ul>
                      </div>

                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h5 className="font-medium text-gray-900">Apple サービス</h5>
                        <ul className="text-sm space-y-1 mt-2">
                          <li><strong>サービス内容:</strong> App Store、Push Notification、WidgetKit</li>
                          <li><strong>プライバシーポリシー:</strong> <a href="https://www.apple.com/privacy/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://www.apple.com/privacy/</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">14.2 外部リンク</h4>
                    <p>本アプリから外部サイトへのリンクがある場合、リンク先サイトのプライバシーポリシーは開発者の管理下にありません。</p>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">第17条（お問い合わせ・苦情処理）</h3>
                <div className="text-gray-700 space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">17.1 連絡先</h4>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="mb-2">本ポリシーに関するお問い合わせは以下まで：</p>
                      <p><strong>開発者:</strong> 筒井健登</p>
                      <p><strong>メールアドレス:</strong> kentoapplication@gmail.com</p>
                      <p><strong>X:</strong> @lucppy777</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">17.2 苦情処理</h4>
                    <div className="space-y-3">
                      <p>個人情報の取扱いに関する苦情がある場合：</p>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>まず開発者へ直接ご相談ください</li>
                        <li>解決しない場合は個人情報保護委員会等の監督機関にご相談いただけます</li>
                      </ul>
                      
                      <div className="bg-red-50 p-4 rounded-lg">
                        <h6 className="font-medium text-red-900 mb-2">個人情報保護委員会:</h6>
                        <p className="text-sm text-red-800"><strong>電話:</strong> 03-6457-9849</p>
                        <p className="text-sm text-red-800"><strong>ウェブサイト:</strong> <a href="https://www.ppc.go.jp/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://www.ppc.go.jp/</a></p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">17.3 対応期間</h4>
                    <p>お問い合わせには原則として7営業日以内に回答いたします。</p>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">第18条（準拠法・管轄）</h3>
                <div className="text-gray-700 space-y-3">
                  <p>本ポリシーは日本法に準拠して解釈されます。</p>
                  <p>本ポリシーに関する紛争については、東京地方裁判所を専属的合意管轄裁判所とします。</p>
                </div>
              </section>

              <section>
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-purple-900 mb-4">重要な情報・リンク</h3>
                  <div className="text-purple-800 text-sm space-y-2">
                    <p>• <strong>Firebase プライバシーポリシー:</strong> <a href="https://firebase.google.com/support/privacy" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://firebase.google.com/support/privacy</a></p>
                    <p>• <strong>Apple プライバシーポリシー:</strong> <a href="https://www.apple.com/privacy/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://www.apple.com/privacy/</a></p>
                    <p>• <strong>個人情報保護委員会:</strong> <a href="https://www.ppc.go.jp/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://www.ppc.go.jp/</a></p>
                    <p>• <strong>制定日:</strong> 2025年9月11日</p>
                    <p>• <strong>最終更新:</strong> 2025年9月11日</p>
                    <p>• <strong>バージョン:</strong> 1.0</p>
                  </div>
                </div>
              </section>

            </div>
          </div>
        </div>
      </main>

      {/* フッター */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg flex items-center justify-center">
              <span className="text-white">🎨</span>
            </div>
            <h6 className="text-lg font-bold">dooodle</h6>
          </div>
          <p className="text-gray-400 text-sm">
            &copy; 2025 筒井健登. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
