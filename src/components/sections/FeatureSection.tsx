import { Card } from '../ui/Card';
import { Section } from '../ui/Section';

export function FeatureSection() {
  const features = [
    {
      icon: '🎨',
      title: '簡単お絵描き',
      description: 'Apple Pencilにも対応。思いついたアイデアをサクッと描いて友達に共有できます。'
    },
    {
      icon: '👥',
      title: '友達と共有',
      description: '描いた絵を友達に送信。みんなで楽しく絵を描いて、創作の輪を広げましょう。'
    },
    {
      icon: '📱',
      title: 'ウィジェット',
      description: 'ホーム画面に友達の絵がランダム表示。いつでも友達の作品を楽しめます。'
    }
  ];

  return (
    <Section id="features" background="white">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">
          主な機能
        </h3>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="p-8 text-center">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h4 className="text-xl font-semibold mb-4 text-gray-900">
                {feature.title}
              </h4>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}
