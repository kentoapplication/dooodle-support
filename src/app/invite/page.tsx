import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "dooodleに招待されました！ - dooodle",
  description: "友達があなたをdooodleに招待しています。App Storeからダウンロードして一緒に絵を描きましょう！",
  robots: "index, follow",
  // Smart App Banner（iOSで自動的にアプリインストールバナーを表示）
  other: {
    "apple-itunes-app": "app-id=6745752847", // 実際のApp Store IDに置き換え
  },
  openGraph: {
    title: "dooodleに招待されました！🎨",
    description: "友達があなたをdooodleに招待しています。App Storeからダウンロードして一緒に絵を描きましょう！",
    type: "website",
    locale: "ja_JP",
  },
};

export default function InvitePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* メインコンテンツ */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm p-8">
          {/* 招待メッセージ */}
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-4xl">🎉</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              dooodleに招待されました！
            </h2>
            <p className="text-xl text-gray-600 mb-6">
              友達があなたをdooodleに招待しています
            </p>
          </div>

          {/* アプリ紹介セクション */}
          <div className="space-y-8">
            <section>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">✨ dooodleとは？</h3>
              <div className="text-gray-700 space-y-3">
                <p>dooodleは友達同士で絵を描いて共有できる新感覚のソーシャルアプリです。</p>
                <p>Apple PencilやiPhoneの指で自由に絵を描き、友達と楽しく共有できます。</p>
              </div>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">🚀 主な機能</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mt-1">
                      <span className="text-sm">✏️</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">自由なお絵描き</h4>
                      <p className="text-sm text-gray-600">PencilKitで本格的な絵が描けます</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mt-1">
                      <span className="text-sm">📱</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">ウィジェット表示</h4>
                      <p className="text-sm text-gray-600">友達の絵がホーム画面に表示</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mt-1">
                      <span className="text-sm">👥</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">友達と共有</h4>
                      <p className="text-sm text-gray-600">描いた絵を友達と楽しく共有</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-pink-100 rounded-lg flex items-center justify-center mt-1">
                      <span className="text-sm">⚡</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">リアルタイム更新</h4>
                      <p className="text-sm text-gray-600">友達の絵がすぐに反映されます</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">📱 ダウンロード</h3>
              <div className="text-center">
                <p className="text-gray-600 mb-6">iOS 15.0以降のiPhoneでご利用いただけます</p>
                <a
                  href="https://apps.apple.com/app/dooodle/idYOUR_APP_ID"
                  className="inline-flex items-center bg-black text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-800 transition-colors text-lg shadow-lg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="mr-3">📱</span>
                  App Store でダウンロード
                </a>
                <p className="text-sm text-gray-500 mt-4">
                  iOSデバイスで開くと上部にダウンロードバナーが自動表示されます
                </p>
              </div>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">🎯 使い方</h3>
              <div className="text-gray-700 space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold mt-1">
                    1
                  </div>
                  <p><strong>アプリをダウンロード</strong> - 上記のApp Storeリンクからインストール</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-pink-500 rounded-full flex items-center justify-center text-white text-sm font-bold mt-1">
                    2
                  </div>
                  <p><strong>アカウント作成</strong> - 簡単な登録でアカウントを作成</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center text-white text-sm font-bold mt-1">
                    3
                  </div>
                  <p><strong>友達を追加</strong> - 招待してくれた友達を追加して絵を楽しもう！</p>
                </div>
              </div>
            </section>

            {/* 特別メッセージ */}
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg border-l-4 border-purple-500">
              <h4 className="font-semibold text-purple-900 mb-2">🎨 あなたを待っています！</h4>
              <p className="text-purple-800">
                友達があなたとdooodleを一緒に楽しみたがっています。ぜひアプリをダウンロードして、楽しい絵描き体験を始めましょう！
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
