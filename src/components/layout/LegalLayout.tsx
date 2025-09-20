import { LegalHeader } from './LegalHeader';

interface LegalLayoutProps {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}

export function LegalLayout({ title, lastUpdated, children }: LegalLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <LegalHeader title={title} />
      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">{title}</h2>
          <p className="text-gray-600 mb-8">最終更新日：{lastUpdated}</p>
          <div className="prose prose-gray max-w-none">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}
