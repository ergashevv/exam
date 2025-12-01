import React from 'react'
import TutorialLayout from '@/components/TutorialLayout'
import { translations, Locale } from '@/lib/translations'

export default function CSSBackgroundsPage({
  params,
}: {
  params: { locale: Locale }
}) {
  const locale = params?.locale || 'uz'
  const t = translations[locale] || translations.uz

  const content = {
    uz: {
      title: 'CSS Fonlar',
      whatIs: `CSS fonlar elementning fonini boshqarish uchun ishlatiladi. Rang, rasm, takrorlash, pozitsiya va boshqa xususiyatlar mavjud.`,
      howToUse: `background-color, background-image, background-repeat, background-position, background-size va background-attachment xususiyatlari ishlatiladi.`,
      whenToUse: `Fonlar dizayn yaratish, rasm fonlari qo'shish, gradientlar yaratish uchun ishlatiladi.`,
    },
    ru: {
      title: 'CSS Фоны',
      whatIs: `CSS фоны используются для управления фоном элемента. Существуют свойства для цвета, изображения, повторения, позиции и другие.`,
      howToUse: `Используются свойства background-color, background-image, background-repeat, background-position, background-size и background-attachment.`,
      whenToUse: `Фоны используются для создания дизайна, добавления фоновых изображений, создания градиентов.`,
    },
  }

  const c = content[locale] || content.uz

  return (
    <TutorialLayout
      locale={locale}
      translations={t}
      title={c.title}
      prevTopic={{ slug: 'css-colors', title: t.css.colors }}
      nextTopic={{ slug: 'css-borders', title: t.css.borders }}
    >
      <h2>{t.common.whatIs}</h2>
      <p>{c.whatIs}</p>

      <h2>{t.common.howToUse}</h2>
      <p>{c.howToUse}</p>

      <div className="example-box">
        <h4>{t.common.codeExample}</h4>
        <pre>
          <code>{`/* Oddiy fon rangi */
background-color: #3498db;

/* Rasm fon */
background-image: url('/images/bg.jpg');
background-size: cover;
background-position: center;
background-repeat: no-repeat;

/* Qisqa yozuv */
background: #3498db url('/images/bg.jpg') center/cover no-repeat;

/* Gradient */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* Radial gradient */
background: radial-gradient(circle, #667eea, #764ba2);

/* Bir nechta fon */
background-image: 
  url('/images/pattern.png'),
  linear-gradient(135deg, #667eea, #764ba2);

/* Misol */
.hero {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  background-size: cover;
  height: 500px;
}`}</code>
        </pre>
      </div>

      <div className="result-box">
        <h4>{t.common.result}</h4>
        <div
          style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            padding: '40px',
            borderRadius: '8px',
            color: 'white',
            textAlign: 'center',
            marginTop: '10px',
          }}
        >
          <h3 style={{ margin: 0 }}>Gradient fon</h3>
          <p>Bu gradient fon misoli</p>
        </div>
        <div
          style={{
            background: 'radial-gradient(circle, #667eea, #764ba2)',
            padding: '40px',
            borderRadius: '8px',
            color: 'white',
            textAlign: 'center',
            marginTop: '15px',
          }}
        >
          <h3 style={{ margin: 0 }}>Radial gradient</h3>
        </div>
      </div>

      <h2>{t.common.whenToUse}</h2>
      <p>{c.whenToUse}</p>

      <h3>Fon xususiyatlari:</h3>
      <ul>
        <li>
          <strong>background-color</strong> - fon rangi
        </li>
        <li>
          <strong>background-image</strong> - fon rasmi
        </li>
        <li>
          <strong>background-repeat</strong> - takrorlash (repeat, no-repeat, repeat-x, repeat-y)
        </li>
        <li>
          <strong>background-position</strong> - pozitsiya (center, top, bottom, left, right)
        </li>
        <li>
          <strong>background-size</strong> - o'lcham (cover, contain, 100% 100%)
        </li>
        <li>
          <strong>background-attachment</strong> - birikish (fixed, scroll)
        </li>
      </ul>
    </TutorialLayout>
  )
}

