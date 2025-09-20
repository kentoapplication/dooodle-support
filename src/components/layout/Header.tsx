import { Logo } from '../ui/Logo';

export function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <Logo size="lg" />
          <nav className="hidden md:flex space-x-6">
            <a 
              href="#features" 
              className="text-gray-600 hover:text-purple-600 transition-colors"
            >
              機能
            </a>
            <a 
              href="#download" 
              className="text-gray-600 hover:text-purple-600 transition-colors"
            >
              ダウンロード
            </a>
            <a 
              href="#support" 
              className="text-gray-600 hover:text-purple-600 transition-colors"
            >
              サポート
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
