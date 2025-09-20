import { Button } from '../ui/Button';
import { Section } from '../ui/Section';

export function HeroSection() {
  return (
    <Section>
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-5xl font-bold text-gray-900 mb-6">
          友達と絵を共有する
          <br />
          <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            新感覚アプリ
          </span>
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          落書きを描いて友達と共有。ウィジェットで友達の作品をリアルタイムにチェック！
        </p>
        <Button
          href="https://apps.apple.com/app/dooodle"
          target="_blank"
          rel="noopener noreferrer"
          size="lg"
          className="mr-4"
        >
          <span className="mr-2">📱</span>
          App Storeでダウンロード
        </Button>
      </div>
    </Section>
  );
}
