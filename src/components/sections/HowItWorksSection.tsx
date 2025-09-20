import { Card } from '../ui/Card';
import { Section } from '../ui/Section';

export function HowItWorksSection() {
  const steps = [
    {
      number: '1',
      title: '絵を描く',
      description: 'アプリを開いて思いついたものを自由に描きましょう。'
    },
    {
      number: '2',
      title: '友達を追加',
      description: 'ユーザーIDで検索したり、招待リンクを共有して友達を追加します。'
    },
    {
      number: '3',
      title: 'ウィジェット設置',
      description: 'ホーム画面にウィジェットを追加して、友達のdooodleを楽しみましょう。'
    }
  ];

  return (
    <Section background="gray">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">
          使い方
        </h3>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-6 mx-auto">
                {step.number}
              </div>
              <h4 className="text-xl font-semibold mb-3 text-gray-900">
                {step.title}
              </h4>
              <p className="text-gray-600">
                {step.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}
