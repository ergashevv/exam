import React from 'react'
import TutorialLayout from '@/components/TutorialLayout'
import { translations, Locale } from '@/lib/translations'

export default async function CSSHeightWidthPage({
  params,
}: {
  params: { locale: Locale } | Promise<{ locale: Locale }>
}) {
  const resolvedParams = params instanceof Promise ? await params : params
  const locale = resolvedParams?.locale || 'uz'
  const t = translations[locale] || translations.uz

  const content = {
    uz: {
      title: 'CSS Height, Width va Max-width',
      whatIs: `CSS height va width elementning o'lchamini belgilaydi. max-width maksimal kenglikni cheklaydi, bu responsive dizayn uchun muhimdir.`,
      howToUse: `width: 300px;, height: 200px;, max-width: 100%;, min-height: 100vh; va boshqa birliklar (px, %, em, rem, vw, vh) ishlatiladi.`,
      whenToUse: `O'lchamlar layout yaratish, responsive dizayn, elementlarni to'g'ri joylashtirish uchun ishlatiladi.`,
    },
    ru: {
      title: 'CSS Высота, Ширина и Max-width',
      whatIs: `CSS height и width определяют размер элемента. max-width ограничивает максимальную ширину, что важно для адаптивного дизайна.`,
      howToUse: `width: 300px;, height: 200px;, max-width: 100%;, min-height: 100vh; и другие единицы (px, %, em, rem, vw, vh).`,
      whenToUse: `Размеры используются для создания макета, адаптивного дизайна, правильного размещения элементов.`,
    },
  }

  const c = content[locale] || content.uz

  return (
    <TutorialLayout
      locale={locale}
      translations={t}
      title={c.title}
      prevTopic={{ slug: 'css-padding', title: t.css.padding }}
      nextTopic={{ slug: 'css-outline', title: t.css.outline }}
    >
      <h2>{t.common.whatIs}</h2>
      <p>{c.whatIs}</p>

      <h2>{t.common.howToUse}</h2>
      <p>{c.howToUse}</p>

      <div className="example-box">
        <h4>{t.common.codeExample}</h4>
        <pre>
          <code>{locale === 'uz' 
            ? `/* Simple sizes */
width: 300px;
height: 200px;

/* Percentage */
width: 50%;
height: 100%;

/* Max and Min */
max-width: 1200px;
min-width: 300px;
max-height: 500px;
min-height: 200px;

/* Viewport units */
width: 100vw; /* Viewport width */
height: 100vh; /* Viewport height */

/* Responsive design */
.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}

/* Auto */
width: auto; /* Fit content */
height: auto;`
            : `/* Простые размеры */
width: 300px;
height: 200px;

/* Процент */
width: 50%;
height: 100%;

/* Max и Min */
max-width: 1200px;
min-width: 300px;
max-height: 500px;
min-height: 200px;

/* Единицы viewport */
width: 100vw; /* Ширина viewport */
height: 100vh; /* Высота viewport */

/* Адаптивный дизайн */
.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}

/* Auto */
width: auto; /* По содержимому */
height: auto;`}</code>
        </pre>
      </div>

      <div className="result-box">
        <h4>{t.common.result}</h4>
        <div style={{ display: 'grid', gap: '15px', marginTop: '10px' }}>
          <div
            style={{
              background: '#667eea',
              color: 'white',
              width: '300px',
              height: '100px',
              padding: '15px',
            }}
          >
            Width: 300px, Height: 100px
          </div>
          <div
            style={{
              background: '#764ba2',
              color: 'white',
              width: '50%',
              padding: '15px',
            }}
          >
            Width: 50%
          </div>
          <div
            style={{
              background: '#3498db',
              color: 'white',
              width: '100%',
              maxWidth: '600px',
              padding: '15px',
            }}
          >
            Width: 100%, Max-width: 600px
          </div>
        </div>
      </div>

      <h2>{t.common.whenToUse}</h2>
      <p>{c.whenToUse}</p>

      <h3>O'lcham birliklari:</h3>
      <ul>
        <li>
          <strong>px</strong> - piksel (sabit)
        </li>
        <li>
          <strong>%</strong> - foiz (ota elementga nisbatan)
        </li>
        <li>
          <strong>em</strong> - font o'lchamiga nisbatan
        </li>
        <li>
          <strong>rem</strong> - root font o'lchamiga nisbatan
        </li>
        <li>
          <strong>vw</strong> - viewport kengligi (1vw = 1% viewport kengligi)
        </li>
        <li>
          <strong>vh</strong> - viewport balandligi (1vh = 1% viewport balandligi)
        </li>
      </ul>
    </TutorialLayout>
  )
}

