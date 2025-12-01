import React from 'react'
import TutorialLayout from '@/components/TutorialLayout'
import { translations, Locale } from '@/lib/translations'

export default async function CSSBordersPage({
  params,
}: {
  params: { locale: Locale } | Promise<{ locale: Locale }>
}) {
  const resolvedParams = params instanceof Promise ? await params : params
  const locale = resolvedParams?.locale || 'uz'
  const t = translations[locale] || translations.uz

  const content = {
    uz: {
      title: 'CSS Borders',
      whatIs: `CSS chegaralar elementning atrofidagi chiziqlarni boshqarish uchun ishlatiladi. Kenglik, rang, uslub va burchak radiusini o'zgartirish mumkin.`,
      howToUse: `border-width, border-color, border-style xususiyatlari yoki qisqa yozuv border: 2px solid #333; ishlatiladi.`,
      whenToUse: `Chegaralar elementlarni ajratish, dizayn yaratish, fokus ko'rsatish uchun ishlatiladi.`,
    },
    ru: {
      title: 'CSS Границы',
      whatIs: `CSS границы используются для управления линиями вокруг элемента. Можно изменять ширину, цвет, стиль и радиус углов.`,
      howToUse: `Используются свойства border-width, border-color, border-style или краткая запись border: 2px solid #333;.`,
      whenToUse: `Границы используются для разделения элементов, создания дизайна, показа фокуса.`,
    },
  }

  const c = content[locale] || content.uz

  return (
    <TutorialLayout
      locale={locale}
      translations={t}
      title={c.title}
      prevTopic={{ slug: 'css-backgrounds', title: t.css.backgrounds }}
      nextTopic={{ slug: 'css-margins', title: t.css.margins }}
    >
      <h2>{t.common.whatIs}</h2>
      <p>{c.whatIs}</p>

      <h2>{t.common.howToUse}</h2>
      <p>{c.howToUse}</p>

      <div className="example-box">
        <h4>{t.common.codeExample}</h4>
        <pre>
          <code>{locale === 'uz' 
            ? `/* Shorthand */
border: 2px solid #333;

/* Separate sides */
border-top: 2px solid red;
border-right: 1px dashed blue;
border-bottom: 3px dotted green;
border-left: 1px double orange;

/* Separate properties */
border-width: 2px;
border-color: #333;
border-style: solid;

/* Border radius */
border-radius: 8px;
border-radius: 50%; /* Circle */

/* Different corners */
border-radius: 10px 20px 30px 40px;

/* Border styles */
border: 2px solid;    /* Solid */
border: 2px dashed;   /* Dashed */
border: 2px dotted;   /* Dotted */
border: 2px double;   /* Double */
border: 2px groove;   /* Groove */
border: 2px ridge;    /* Ridge */
border: none;         /* None */`
            : `/* Краткая запись */
border: 2px solid #333;

/* Отдельные стороны */
border-top: 2px solid red;
border-right: 1px dashed blue;
border-bottom: 3px dotted green;
border-left: 1px double orange;

/* Отдельные свойства */
border-width: 2px;
border-color: #333;
border-style: solid;

/* Радиус границы */
border-radius: 8px;
border-radius: 50%; /* Круг */

/* Разные углы */
border-radius: 10px 20px 30px 40px;

/* Стили границы */
border: 2px solid;    /* Сплошная */
border: 2px dashed;   /* Пунктирная */
border: 2px dotted;   /* Точечная */
border: 2px double;   /* Двойная */
border: 2px groove;   /* Вдавленная */
border: 2px ridge;    /* Выпуклая */
border: none;         /* Нет */`}</code>
        </pre>
      </div>

      <div className="result-box">
        <h4>{t.common.result}</h4>
        <div style={{ display: 'grid', gap: '15px', marginTop: '10px' }}>
          <div
            style={{
              border: '2px solid #333',
              padding: '15px',
              borderRadius: '8px',
            }}
          >
            Qattiq chegara, yumaloq burchaklar
          </div>
          <div
            style={{
              border: '2px dashed #667eea',
              padding: '15px',
            }}
          >
            Chiziqli chegara
          </div>
          <div
            style={{
              border: '2px dotted #764ba2',
              padding: '15px',
            }}
          >
            Nuqtali chegara
          </div>
          <div
            style={{
              border: '3px solid #333',
              borderRadius: '50%',
              width: '100px',
              height: '100px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            Doira
          </div>
        </div>
      </div>

      <h2>{t.common.whenToUse}</h2>
      <p>{c.whenToUse}</p>

      <h3>Chegara uslublari:</h3>
      <ul>
        <li>
          <strong>solid</strong> - qattiq chiziq
        </li>
        <li>
          <strong>dashed</strong> - chiziqli
        </li>
        <li>
          <strong>dotted</strong> - nuqtali
        </li>
        <li>
          <strong>double</strong> - ikkilangan
        </li>
        <li>
          <strong>groove</strong> - o'yiq
        </li>
        <li>
          <strong>ridge</strong> - qavariq
        </li>
        <li>
          <strong>none</strong> - yo'q
        </li>
      </ul>
    </TutorialLayout>
  )
}

