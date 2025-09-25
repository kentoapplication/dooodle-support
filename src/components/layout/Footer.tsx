import { Logo } from '../ui/Logo';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <h6 className="text-xl font-bold">DOOODLE</h6>
            </div>
            <p className="text-gray-400 text-sm">
              友達と絵を共有する新感覚アプリ
            </p>
          </div>
          <div>
            <h6 className="font-semibold mb-4">リンク</h6>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#features"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  機能
                </a>
              </li>
              <li>
                <a
                  href="#download"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  ダウンロード
                </a>
              </li>
              <li>
                <a
                  href="#support"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  サポート
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h6 className="font-semibold mb-4">法的情報</h6>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="/privacy"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  プライバシーポリシー
                </a>
              </li>
              <li>
                <a
                  href="/terms"
                  className="text-gray-400 hover:text-white transition-colors"
                >
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
  );
}
