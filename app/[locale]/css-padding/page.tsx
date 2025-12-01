import TutorialLayout from '@/components/TutorialLayout'
import { translations, Locale } from '@/lib/translations'

export default function CSSPaddingPage({
  params,
}: {
  params: { locale: Locale }
}) {
  const locale = params?.locale || 'uz'
  const t = translations[locale] || translations.uz

  const content = {
    uz: {
      title: 'CSS Padding',
      whatIs: `Padding elementning ichki bo'shlig'ini boshqaradi. U kontent va chegara orasidagi masofani belgilaydi.`,
      howToUse: `padding: 20px; (barcha tomonlar), padding: 10px 20px; (yuqori/pastki, chap/o'ng), padding-top, padding-right, padding-bottom, padding-left.`,
      whenToUse: `Padding kontent atrofidagi bo'shlikni yaratish, o'qish qulayligini yaxshilash, dizayn yaratishda ishlatiladi.`,
    },
    ru: {
      title: 'CSS Padding',
      whatIs: `Padding управляет внутренним пространством элемента. Определяет расстояние между контентом и границей.`,
      howToUse: `padding: 20px; (все стороны), padding: 10px 20px; (верх/низ, лево/право), padding-top, padding-right, padding-bottom, padding-left.`,
      whenToUse: `Padding используется для создания пространства вокруг контента, улучшения читаемости, создания дизайна.`,
    },
  }

  const c = content[locale]

  return (
    <TutorialLayout
      locale={locale}
      translations={t}
      title={c.title}
      prevTopic={{ slug: 'css-margins', title: t.css.margins }}
      nextTopic={{ slug: 'css-height-width', title: t.css.heightWidth }}
    >
      <h2>{t.common.whatIs}</h2>
      <p>{c.whatIs}</p>

      <h2>{t.common.howToUse}</h2>
      <p>{c.howToUse}</p>

      <div className="example-box">
        <h4>{t.common.codeExample}</h4>
        <pre>
          <code>{`/* Barcha tomonlar */
padding: 20px;

/* Yuqori/pastki, chap/o'ng */
padding: 10px 20px;

/* Yuqori, chap/o'ng, pastki */
padding: 10px 20px 30px;

/* Yuqori, o'ng, pastki, chap */
padding: 10px 20px 30px 40px;

/* Alohida tomonlar */
padding-top: 20px;
padding-right: 15px;
padding-bottom: 10px;
padding-left: 5px;

/* Box-sizing bilan */
box-sizing: border-box; /* Padding o'lchamga kiritiladi */`}</code>
        </pre>
      </div>

      <div className="result-box">
        <h4>{t.common.result}</h4>
        <div style={{ display: 'grid', gap: '15px', marginTop: '10px' }}>
          <div
            style={{
              background: '#667eea',
              color: 'white',
              padding: '20px',
              border: '2px solid #333',
            }}
          >
            Padding: 20px (barcha tomonlar)
          </div>
          <div
            style={{
              background: '#764ba2',
              color: 'white',
              padding: '10px 30px',
              border: '2px solid #333',
            }}
          >
            Padding: 10px 30px (yuqori/pastki, chap/o'ng)
          </div>
          <div
            style={{
              background: '#3498db',
              color: 'white',
              padding: '5px 10px 15px 20px',
              border: '2px solid #333',
            }}
          >
            Padding: 5px 10px 15px 20px (yuqori, o'ng, pastki, chap)
          </div>
        </div>
      </div>

      <h2>{t.common.whenToUse}</h2>
      <p>{c.whenToUse}</p>

      <div className="info-box">
        <strong>Box-sizing:</strong> <code>box-sizing: border-box;</code>{' '}
        qo'shganda, padding va border elementning umumiy o'lchamiga kiritiladi.
        Bu layout hisob-kitoblarini osonlashtiradi.
      </div>
    </TutorialLayout>
  )
}

