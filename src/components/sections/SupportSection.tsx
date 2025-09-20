import { Card } from '../ui/Card';
import { Section } from '../ui/Section';

export function SupportSection() {
  const faqs = [
    {
      question: 'ウィジェットが更新されません',
      answer: 'iOS設定でウィジェットの更新が有効になっているかご確認ください。また、友達が新しいdooodleを投稿していることも確認してください。'
    },
    {
      question: '友達を追加できません',
      answer: '相手が友達検索を許可しているかご確認ください。また、正確なユーザーIDを入力していることも確認してください。'
    },
    {
      question: '描いた絵が保存されません',
      answer: 'ネットワーク接続が安定していることを確認してください。また、アプリを最新版に更新していることもご確認ください。'
    }
  ];

  return (
    <Section id="support" background="gray">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">
          サポート・お問い合わせ
        </h3>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-8">
            <h4 className="text-xl font-semibold mb-4 text-gray-900">
              よくある質問
            </h4>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <details key={index} className="group">
                  <summary className="cursor-pointer text-purple-600 font-medium group-open:text-purple-800">
                    {faq.question}
                  </summary>
                  <p className="mt-2 text-gray-600 text-sm">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </Card>

          <Card className="p-8">
            <h4 className="text-xl font-semibold mb-4 text-gray-900">
              お問い合わせ
            </h4>
            <p className="text-gray-600 mb-6">
              ご不明な点やご要望がございましたら、下記フォームからお気軽にお問い合わせください。
            </p>
            <a
              href="https://forms.gle/9uvw6wjUHberEJ6fA"
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
          </Card>
        </div>
      </div>
    </Section>
  );
}
