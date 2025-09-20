import { Button } from '../ui/Button';
import { Section } from '../ui/Section';

export function DownloadSection() {
  return (
    <Section id="download" background="white">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-3xl font-bold mb-6 text-gray-900">
          今すぐダウンロード
        </h3>
        <p className="text-xl text-gray-600 mb-8">
          iOS 15.0以降のiPhoneでご利用いただけます
        </p>
        <Button
          href="https://apps.apple.com/app/dooodle"
          target="_blank"
          rel="noopener noreferrer"
          size="lg"
        >
          <span className="mr-2">📱</span>
          App Storeでダウンロード
        </Button>
      </div>
    </Section>
  );
}
