import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "利用規約 - dooodle",
  description: "dooodleアプリの利用規約をご確認いただけます。",
  robots: "index, follow",
};

export default function TermsPage() {
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
          <h2 className="text-3xl font-bold text-gray-900 mb-2">利用規約</h2>
          <p className="text-gray-600 mb-8">最終更新日：2025年9月11日</p>
          
          <div className="prose prose-gray max-w-none">
            <div className="space-y-8">
              
              <section>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">第1条（適用）</h3>
                <div className="text-gray-700 space-y-3">
                  <p>本利用規約（以下「本規約」といいます）は、筒井健登（以下「開発者」といいます）が提供するモバイルアプリケーション「dooodle」（以下「本アプリ」といいます）の利用に関する条件を定めるものです。</p>
                  <p>本アプリを利用するユーザー（以下「ユーザー」といいます）は、本規約に同意した上で本アプリを利用するものとします。</p>
                  <p>本規約に同意いただけない場合は、本アプリのご利用をお控えください。</p>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">第2条（利用資格・年齢制限）</h3>
                <div className="text-gray-700 space-y-3">
                  <p>本アプリは12歳以上の方にご利用いただけます。</p>
                  <p>12歳以上18歳未満のユーザーは、保護者の同意の下で本アプリを利用するものとします。</p>
                  <p>開発者は、ユーザーが前項の条件を満たしているかについて確認する義務を負いません。</p>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">第3条（アカウント登録）</h3>
                <div className="text-gray-700 space-y-3">
                  <p>ユーザーは、開発者所定の方法によりアカウント登録を行うものとします。</p>
                  <p>ユーザーは、登録時に正確かつ最新の情報を提供するものとします。</p>
                  <p>開発者は、以下のいずれかに該当する場合、登録を拒否することがあります：</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>登録申請において虚偽の情報を提供した場合</li>
                    <li>過去に本規約違反により利用停止処分を受けた場合</li>
                    <li>その他、開発者が不適当と判断した場合</li>
                  </ul>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">第4条（アカウントの管理）</h3>
                <div className="text-gray-700 space-y-3">
                  <p>ユーザーは、自己の責任においてアカウント情報を適切に管理するものとします。</p>
                  <p>アカウント情報の第三者による不正使用について、開発者は一切の責任を負いません。</p>
                  <p>アカウント情報の不正使用を発見した場合は、直ちに開発者にご連絡ください。</p>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">第5条（サービス内容）</h3>
                <div className="text-gray-700 space-y-3">
                  <p>本アプリは、友達同士で絵を描いて共有するソーシャルネットワーキングサービスです。</p>
                  <p>本アプリの主な機能は以下の通りです：</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>絵の作成・編集機能（PencilKit使用）</li>
                    <li>友達との絵の共有機能</li>
                    <li>友達の絵をウィジェットで表示する機能</li>
                    <li>友達の招待・検索機能</li>
                  </ul>
                  <p>本アプリでは、友達として承認されたユーザー間でのみ絵の共有が行われます。</p>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">第6条（友達機能）</h3>
                <div className="text-gray-700 space-y-3">
                  <p>ユーザーは以下の方法で他のユーザーに友達リクエストを送信できます：</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>招待リンクを通じた招待</li>
                    <li>ユーザー検索機能による検索（相手が許可している場合）</li>
                  </ul>
                  <p>友達関係は、リクエストを受けた側が承認することで成立します。</p>
                  <p>ユーザーは設定により、検索による友達リクエストの受信を拒否することができます。</p>
                  <p>ユーザーはいつでも友達関係を解除することができます。</p>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">第7条（コンテンツの投稿）</h3>
                <div className="text-gray-700 space-y-3">
                  <p>ユーザーは本アプリを通じて以下のコンテンツを投稿することができます：</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>自ら作成した絵画・イラスト</li>
                    <li>既存作品の二次創作（個人利用の範囲内）</li>
                  </ul>
                  <p>投稿されたコンテンツは友達として承認されたユーザーのみが閲覧できます。</p>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">第8条（禁止事項）</h3>
                <div className="text-gray-700 space-y-3">
                  <p>ユーザーは、本アプリの利用において以下の行為を行ってはなりません：</p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">法令・公序良俗違反</h4>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>法令、規制、または公序良俗に違反する行為</li>
                        <li>犯罪行為に関連する行為</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">不適切なコンテンツの投稿</h4>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>過度に暴力的、残虐な表現を含むコンテンツ</li>
                        <li>性的な表現を含むコンテンツ（軽度な水着等を除く）</li>
                        <li>差別的表現、ヘイトスピーチを含むコンテンツ</li>
                        <li>他者を誹謗中傷、脅迫する内容</li>
                        <li>自殺、自傷行為を助長する内容</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">権利侵害</h4>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>他者の著作権、商標権、肖像権等の知的財産権を侵害する行為</li>
                        <li>個人情報や機密情報を無断で投稿する行為</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">システム・運営妨害</h4>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>本アプリのシステムを不正に操作する行為</li>
                        <li>サーバーやネットワークの機能を妨害する行為</li>
                        <li>不正アクセスを試みる行為</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">なりすまし・詐欺行為</h4>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>他者になりすます行為</li>
                        <li>虚偽の情報を故意に流布する行為</li>
                        <li>詐欺的行為</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">商業利用・営利行為</h4>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>本アプリを商業目的で利用する行為（開発者が許可した場合を除く）</li>
                        <li>スパム行為、無差別な宣伝・勧誘行為</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">その他</h4>
                      <ul className="list-disc pl-6">
                        <li>その他、開発者が不適切と判断する行為</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">第9条（コンテンツの権利関係）</h3>
                <div className="text-gray-700 space-y-3">
                  <p>ユーザーが投稿したコンテンツの著作権は、原則としてユーザーに帰属します。</p>
                  <p>ユーザーは、投稿したコンテンツについて、開発者が以下の目的で利用することを許諾するものとします：</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>本アプリの運営・改善</li>
                    <li>技術的な処理（表示、バックアップ等）</li>
                    <li>利用規約違反の調査</li>
                  </ul>
                  <p>開発者は、ユーザーが投稿したコンテンツを営利目的で利用することはありません。</p>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">第21条（連絡先・お問い合わせ）</h3>
                <div className="text-gray-700 space-y-3">
                  <p>本規約に関するお問い合わせ、異議申し立て、その他のご連絡は、以下までお願いします：</p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p><strong>開発者:</strong> 筒井健登</p>
                    <p><strong>メールアドレス:</strong> kentoapplication@gmail.com</p>
                    <p><strong>X:</strong> @lucppy777</p>
                  </div>
                </div>
              </section>

              <section>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-purple-900 mb-2">重要な情報</h3>
                  <div className="text-purple-800 text-sm space-y-2">
                    <p>• Apple App Store: 本アプリは Apple App Store から配信され、Apple の App Store Review Guidelines に従います</p>
                    <p>• 制定日: 2025年9月11日</p>
                    <p>• 最終更新: 2025年9月11日</p>
                    <p>• バージョン: 1.0</p>
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
