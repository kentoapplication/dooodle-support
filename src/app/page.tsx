import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "dooodle - 友達と絵を共有するアプリ",
  description: "dooodleは友達同士で落書きを描いて共有できるソーシャルアプリです。ウィジェットで友達の絵をリアルタイムに楽しめます。",
  keywords: "dooodle, 絵, お絵描き, SNS, ウィジェット, 友達, 共有, アプリ",
  openGraph: {
    title: "dooodle - 友達と絵を共有するアプリ",
    description: "友達同士で落書きを描いて共有。ウィジェットで友達の絵をリアルタイムチェック！",
    type: "website",
  }
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50">
      {/* ヘッダー */}
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-xl flex items-center justify-center">
                <span className="text-white text-2xl">🎨</span>
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                dooodle
              </h1>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#features" className="text-gray-600 hover:text-purple-600 transition-colors">
                機能
              </a>
              <a href="#download" className="text-gray-600 hover:text-purple-600 transition-colors">
                ダウンロード
              </a>
              <a href="#support" className="text-gray-600 hover:text-purple-600 transition-colors">
                サポート
              </a>
            </nav>
          </div>
        </div>
      </header>

      <main>
        {/* ヒーローセクション */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              友達と絵を共有する
              <br />
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                新感覚アプリ
              </span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              dooodleは、手軽な落書きを友達と共有できるお絵描きアプリです。
              あなたの退屈やひらめきをクリエイティブに発散し、友達とシェアしよう。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://apps.apple.com/app/dooodle"
                className="bg-black text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-800 transition-colors flex items-center space-x-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>📱</span>
                <span>App Storeでダウンロード</span>
              </a>
            </div>
          </div>
        </section>

        {/* 機能紹介セクション */}
        <section id="features" className="py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-3xl font-bold text-center mb-16 text-gray-900">
              dooodleの特徴
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center p-6 rounded-2xl bg-purple-50 hover:bg-purple-100 transition-colors">
                <div className="text-4xl mb-4">🎨</div>
                <h4 className="text-xl font-semibold mb-3 text-gray-900">
                  直感的なお絵描き
                </h4>
                <p className="text-gray-600">
                  指やApple Pencilで手軽に落書き。PencilKitによる滑らかな描画体験を提供します。
                </p>
              </div>
              <div className="text-center p-6 rounded-2xl bg-pink-50 hover:bg-pink-100 transition-colors">
                <div className="text-4xl mb-4">👥</div>
                <h4 className="text-xl font-semibold mb-3 text-gray-900">
                  友達とつながる
                </h4>
                <p className="text-gray-600">
                  ユーザーID検索やリンク共有で友達を追加。プライベートな空間で安心して共有できます。
                </p>
              </div>
              <div className="text-center p-6 rounded-2xl bg-yellow-50 hover:bg-yellow-100 transition-colors">
                <div className="text-4xl mb-4">📱</div>
                <h4 className="text-xl font-semibold mb-3 text-gray-900">
                  ウィジェット機能
                </h4>
                <p className="text-gray-600">
                  ホーム画面のウィジェットに友達のdooodleがランダムに表示。いつでも友達の作品をチェック！
                </p>
              </div>
              <div className="text-center p-6 rounded-2xl bg-green-50 hover:bg-green-100 transition-colors">
                <div className="text-4xl mb-4">⚡</div>
                <h4 className="text-xl font-semibold mb-3 text-gray-900">
                  リアルタイム更新
                </h4>
                <p className="text-gray-600">
                  友達が新しいdooodleを投稿すると、ウィジェットが自動的に更新されます。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 使い方セクション */}
        <section className="py-20 px-4 bg-gradient-to-br from-purple-50 to-pink-50">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-3xl font-bold text-center mb-16 text-gray-900">
              使い方はとても簡単
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4 mx-auto">
                  1
                </div>
                <h4 className="text-xl font-semibold mb-3 text-gray-900">
                  dooodleを描く
                </h4>
                <p className="text-gray-600">
                  アプリを開いて、指やApple Pencilで自由に落書きを描きましょう。
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4 mx-auto">
                  2
                </div>
                <h4 className="text-xl font-semibold mb-3 text-gray-900">
                  友達を追加
                </h4>
                <p className="text-gray-600">
                  ユーザーIDで検索したり、招待リンクを共有して友達を追加します。
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4 mx-auto">
                  3
                </div>
                <h4 className="text-xl font-semibold mb-3 text-gray-900">
                  ウィジェット設置
                </h4>
                <p className="text-gray-600">
                  ホーム画面にウィジェットを追加して、友達のdooodleを楽しみましょう。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ダウンロードセクション */}
        <section id="download" className="py-20 px-4 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-6 text-gray-900">
              今すぐダウンロード
            </h3>
            <p className="text-xl text-gray-600 mb-8">
              iOS 15.0以降のiPhoneでご利用いただけます
            </p>
            <a
              href="https://apps.apple.com/app/dooodle"
              className="inline-flex items-center bg-black text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-800 transition-colors text-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="mr-2">📱</span>
              App Storeでダウンロード
            </a>
          </div>
        </section>

        {/* サポートセクション */}
        <section id="support" className="py-20 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">
              サポート・お問い合わせ
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-sm">
                <h4 className="text-xl font-semibold mb-4 text-gray-900">
                  よくある質問
                </h4>
                <div className="space-y-4">
                  <details className="group">
                    <summary className="cursor-pointer text-purple-600 font-medium group-open:text-purple-800">
                      ウィジェットが更新されません
                    </summary>
                    <p className="mt-2 text-gray-600 text-sm">
                      iOS設定でウィジェットの更新が有効になっているかご確認ください。また、友達が新しいdooodleを投稿していることも確認してください。
                    </p>
                  </details>
                  <details className="group">
                    <summary className="cursor-pointer text-purple-600 font-medium group-open:text-purple-800">
                      友達を追加できません
                    </summary>
                    <p className="mt-2 text-gray-600 text-sm">
                      相手が友達検索を許可しているかご確認ください。また、正確なユーザーIDを入力していることも確認してください。
                    </p>
                  </details>
                  <details className="group">
                    <summary className="cursor-pointer text-purple-600 font-medium group-open:text-purple-800">
                      描いた絵が保存されません
                    </summary>
                    <p className="mt-2 text-gray-600 text-sm">
                      ネットワーク接続が安定していることを確認してください。また、アプリを最新版に更新していることもご確認ください。
                    </p>
                  </details>
                </div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm">
                <h4 className="text-xl font-semibold mb-4 text-gray-900">
                  お問い合わせ
                </h4>
                <p className="text-gray-600 mb-6">
                  ご不明な点やご要望がございましたら、下記フォームからお気軽にお問い合わせください。
                </p>
                <a
                  href="https://forms.gle/YOUR_GOOGLE_FORM_ID"
                  className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  お問い合わせフォーム
                </a>
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h5 className="font-semibold mb-2 text-gray-900">開発者情報</h5>
                  <p className="text-sm text-gray-600 mb-1">
                    開発者: 筒井健登
                  </p>
                  <p className="text-sm text-gray-600 mb-1">
                    メール: kentoapplication@gmail.com
                  </p>
                  <p className="text-sm text-gray-600">
                    X (Twitter): @lucppy777
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* フッター */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg flex items-center justify-center">
                  <span className="text-white text-lg">🎨</span>
                </div>
                <h6 className="text-xl font-bold">dooodle</h6>
              </div>
              <p className="text-gray-400 text-sm">
                友達と絵を共有する新感覚アプリ
              </p>
            </div>
            <div>
              <h6 className="font-semibold mb-4">リンク</h6>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#features" className="text-gray-400 hover:text-white transition-colors">
                    機能
                  </a>
                </li>
                <li>
                  <a href="#download" className="text-gray-400 hover:text-white transition-colors">
                    ダウンロード
                  </a>
                </li>
                <li>
                  <a href="#support" className="text-gray-400 hover:text-white transition-colors">
                    サポート
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h6 className="font-semibold mb-4">法的情報</h6>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="/dooodle-support/privacy" className="text-gray-400 hover:text-white transition-colors">
                    プライバシーポリシー
                  </a>
                </li>
                <li>
                  <a href="/dooodle-support/terms" className="text-gray-400 hover:text-white transition-colors">
                    利用規約
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2025 筒井健登. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
