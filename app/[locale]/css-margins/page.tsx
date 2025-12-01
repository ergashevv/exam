import React from 'react'
import TutorialLayout from '@/components/TutorialLayout'
import { translations, Locale } from '@/lib/translations'

export default function CSSMarginsPage({
  params,
}: {
  params: { locale: Locale }
}) {
  const locale = params?.locale || 'uz'
  const t = translations[locale] || translations.uz

  const content = {
    uz: {
      title: 'CSS Margin',
      whatIs: `Margin elementning tashqi bo'shlig'ini boshqaradi. U elementlar orasidagi masofani belgilaydi.`,
      howToUse: `margin: 20px; (barcha tomonlar), margin: 10px 20px; (yuqori/pastki, chap/o'ng), margin-top, margin-right, margin-bottom, margin-left.`,
      whenToUse: `Margin elementlar orasidagi masofani yaratish, layout dizaynida, elementlarni joylashtirishda ishlatiladi.`,
    },
    ru: {
      title: 'CSS Margin',
      whatIs: `Margin управляет внешним пространством элемента. Определяет расстояние между элементами.`,
      howToUse: `margin: 20px; (все стороны), margin: 10px 20px; (верх/низ, лево/право), margin-top, margin-right, margin-bottom, margin-left.`,
      whenToUse: `Margin используется для создания расстояния между элементами, в дизайне макета, размещении элементов.`,
    },
  }

  const c = content[locale]

  return (
    <TutorialLayout
      locale={locale}
      translations={t}
      title={c.title}
      prevTopic={{ slug: 'css-borders', title: t.css.borders }}
      nextTopic={{ slug: 'css-padding', title: t.css.padding }}
    >
      <h2>{t.common.whatIs}</h2>
      <p>{c.whatIs}</p>

      <h2>{t.common.howToUse}</h2>
      <p>{c.howToUse}</p>

      <div className="example-box">
        <h4>{t.common.codeExample}</h4>
        <pre>
          <code>{`/* Barcha tomonlar */
margin: 20px;

/* Yuqori/pastki, chap/o'ng */
margin: 10px 20px;

/* Yuqori, chap/o'ng, pastki */
margin: 10px 20px 30px;

/* Yuqori, o'ng, pastki, chap */
margin: 10px 20px 30px 40px;

/* Alohida tomonlar */
margin-top: 20px;
margin-right: 15px;
margin-bottom: 10px;
margin-left: 5px;

/* Auto - markazga joylashtirish */
margin: 0 auto; /* Gorizontal markaz */

/* Manfiy margin */
margin-top: -10px; /* Elementlarni bir-biriga yaqinlashtiradi */`}</code>
        </pre>
      </div>

      <div className="result-box">
        <h4>{t.common.result}</h4>
        <div style={{ border: '1px solid #ddd', padding: '20px' }}>
          <div
            style={{
              background: '#667eea',
              color: 'white',
              padding: '15px',
              margin: '20px',
            }}
          >
            Margin: 20px (barcha tomonlar)
          </div>
          <div
            style={{
              background: '#764ba2',
              color: 'white',
              padding: '15px',
              margin: '10px 30px',
            }}
          >
            Margin: 10px 30px (yuqori/pastki, chap/o'ng)
          </div>
          <div
            style={{
              background: '#3498db',
              color: 'white',
              padding: '15px',
              margin: '0 auto',
              maxWidth: '300px',
            }}
          >
            Margin: 0 auto (markazga)
          </div>
        </div>
      </div>

      <h2>{t.common.whenToUse}</h2>
      <p>{c.whenToUse}</p>

      <div className="info-box">
        <strong>Margin vs Padding:</strong> Margin - tashqi bo'shlik (elementlar
        orasi), Padding - ichki bo'shlik (kontent va chegara orasi).
      </div>
    </TutorialLayout>
  )
}

