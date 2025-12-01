import React from 'react'
import TutorialLayout from '@/components/TutorialLayout'
import { translations, Locale } from '@/lib/translations'

export default function CSSColorsPage({
  params,
}: {
  params: { locale: Locale }
}) {
  const locale = params?.locale || 'uz'
  const t = translations[locale] || translations.uz

  const content = {
    uz: {
      title: 'CSS Ranglar',
      whatIs: `CSS ranglar matn, fon va boshqa elementlarning rangini belgilash uchun ishlatiladi. Ranglar nom, hex, RGB, RGBA, HSL yoki HSLA formatida ko'rsatilishi mumkin.`,
      howToUse: `Ranglar color (matn rangi) va background-color (fon rangi) xususiyatlari yordamida belgilanadi.`,
      whenToUse: `Ranglar dizayn yaratishda, muhim ma'lumotlarni ajratib ko'rsatishda va foydalanuvchi e'tiborini jalb qilishda ishlatiladi.`,
    },
    ru: {
      title: 'CSS Цвета',
      whatIs: `CSS цвета используются для определения цвета текста, фона и других элементов. Цвета могут быть представлены в формате имени, hex, RGB, RGBA, HSL или HSLA.`,
      howToUse: `Цвета определяются с помощью свойств color (цвет текста) и background-color (цвет фона).`,
      whenToUse: `Цвета используются при создании дизайна, выделении важной информации и привлечении внимания пользователя.`,
    },
  }

  const c = content[locale]

  return (
    <TutorialLayout
      locale={locale}
      translations={t}
      title={c.title}
      prevTopic={{ slug: 'html-input-types', title: t.html.inputTypes }}
      nextTopic={{ slug: 'css-backgrounds', title: t.css.backgrounds }}
    >
      <h2>{t.common.whatIs}</h2>
      <p>{c.whatIs}</p>

      <h2>{t.common.howToUse}</h2>
      <p>{c.howToUse}</p>

      <div className="example-box">
        <h4>{t.common.codeExample}</h4>
        <pre>
          <code>{`/* Rang nomi */
color: red;
background-color: blue;

/* Hex kod */
color: #FF0000;
background-color: #0000FF;

/* RGB */
color: rgb(255, 0, 0);
background-color: rgb(0, 0, 255);

/* RGBA (alpha - shaffoflik) */
color: rgba(255, 0, 0, 0.5); /* 50% shaffof */

/* HSL */
color: hsl(0, 100%, 50%);
background-color: hsl(240, 100%, 50%);

/* HSLA */
color: hsla(0, 100%, 50%, 0.5);

/* Misol */
.text-red {
  color: #FF0000;
}

.bg-blue {
  background-color: #3498db;
}

.transparent {
  background-color: rgba(52, 152, 219, 0.3);
}`}</code>
        </pre>
      </div>

      <div className="result-box">
        <h4>{t.common.result}</h4>
        <div style={{ padding: '20px' }}>
          <p style={{ color: '#FF0000' }}>Qizil matn</p>
          <p style={{ background: '#3498db', color: 'white', padding: '10px' }}>
            Ko'k fon, oq matn
          </p>
          <p
            style={{
              background: 'rgba(52, 152, 219, 0.3)',
              padding: '10px',
              border: '1px solid #3498db',
            }}
          >
            Shaffof ko'k fon
          </p>
        </div>
      </div>

      <h2>{t.common.whenToUse}</h2>
      <p>{c.whenToUse}</p>

      <h3>Rang formatlari:</h3>
      <ul>
        <li>
          <strong>Rang nomi:</strong> red, blue, green - oson, lekin cheklangan
        </li>
        <li>
          <strong>Hex:</strong> #FF0000 - keng qo'llaniladi, aniq ranglar
        </li>
        <li>
          <strong>RGB:</strong> rgb(255,0,0) - qizil, yashil, ko'k qiymatlari
        </li>
        <li>
          <strong>RGBA:</strong> rgba(255,0,0,0.5) - RGB + shaffoflik (0-1)
        </li>
        <li>
          <strong>HSL:</strong> hsl(0,100%,50%) - hue, saturation, lightness
        </li>
        <li>
          <strong>HSLA:</strong> hsla(0,100%,50%,0.5) - HSL + shaffoflik
        </li>
      </ul>
    </TutorialLayout>
  )
}

