import { Logo } from '../ui/Logo';

interface LegalHeaderProps {
  title: string;
}

export function LegalHeader({ title }: LegalHeaderProps) {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-4xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <Logo />
          <a
            href="/"
            className="text-purple-600 hover:text-purple-700 font-medium transition-colors"
          >
            ← ホームに戻る
          </a>
        </div>
      </div>
    </header>
  );
}
