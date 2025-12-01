import React from 'react'
import TutorialLayout from '@/components/TutorialLayout'
import { translations, Locale } from '@/lib/translations'

export default async function CSSPositionPage({
  params,
}: {
  params: { locale: Locale } | Promise<{ locale: Locale }>
}) {
  const resolvedParams = params instanceof Promise ? await params : params
  const locale = resolvedParams?.locale || 'uz'
  const t = translations[locale] || translations.uz

  const content = {
    uz: {
      title: 'CSS Position Property',
      whatIs: `Position xususiyati elementning joylashuvini boshqaradi. Static, relative, absolute, fixed va sticky qiymatlari mavjud.`,
      howToUse: `position: static;, position: relative;, position: absolute;, position: fixed;, position: sticky; va top, right, bottom, left xususiyatlari ishlatiladi.`,
      whenToUse: `Elementlarni aniq joylashtirish, overlay yaratish, sticky header, fixed navigation, modal oynalar uchun ishlatiladi.`,
    },
    ru: {
      title: 'CSS Свойство position',
      whatIs: `Свойство position управляет расположением элемента. Существуют значения static, relative, absolute, fixed и sticky.`,
      howToUse: `Используются position: static;, position: relative;, position: absolute;, position: fixed;, position: sticky; и свойства top, right, bottom, left.`,
      whenToUse: `Используется для точного размещения элементов, создания overlay, sticky header, fixed navigation, модальных окон.`,
    },
  }

  const c = content[locale] || content.uz

  return (
    <TutorialLayout
      locale={locale}
      translations={t}
      title={c.title}
      prevTopic={{ slug: 'css-display', title: t.css.display }}
      nextTopic={{ slug: 'css-z-index', title: t.css.zIndex }}
    >
      <h2>{t.common.whatIs}</h2>
      <p>{c.whatIs}</p>

      <h2>{t.common.howToUse}</h2>
      <p>{c.howToUse}</p>

      <div className="example-box">
        <h4>{t.common.codeExample}</h4>
        <pre>
          <code>{`/* Static (default) */
position: static;

/* Relative */
position: relative;
top: 20px;
left: 30px;

/* Absolute */
position: absolute;
top: 0;
right: 0;

/* Fixed */
position: fixed;
top: 0;
left: 0;
width: 100%;

/* Sticky */
position: sticky;
top: 0;

/* Misol - Fixed header */
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
}

/* Misol - Absolute positioning */
.parent {
  position: relative;
}

.child {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}`}</code>
        </pre>
      </div>

      <div className="result-box">
        <h4>{t.common.result}</h4>
        <div
          style={{
            position: 'relative',
            height: '200px',
            border: '2px solid #ddd',
            marginTop: '10px',
            padding: '20px',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: '10px',
              right: '10px',
              background: '#667eea',
              color: 'white',
              padding: '10px',
              borderRadius: '4px',
            }}
          >
            Absolute positioned
          </div>
          <div
            style={{
              position: 'relative',
              top: '50px',
              left: '20px',
              background: '#764ba2',
              color: 'white',
              padding: '10px',
              borderRadius: '4px',
            }}
          >
            Relative positioned
          </div>
        </div>
      </div>

      <h2>{t.common.whenToUse}</h2>
      <p>{c.whenToUse}</p>

      <h3>Position turlari:</h3>
      <ul>
        <li>
          <strong>static</strong> - default, normal oqim
        </li>
        <li>
          <strong>relative</strong> - o'z o'rniga nisbatan
        </li>
        <li>
          <strong>absolute</strong> - eng yaqin positioned ota elementga nisbatan
        </li>
        <li>
          <strong>fixed</strong> - viewport'ga nisbatan, scroll qilganda ham joyida
        </li>
        <li>
          <strong>sticky</strong> - scroll qilganda yopishib qoladi
        </li>
      </ul>
    </TutorialLayout>
  )
}

