import React from 'react'
import TutorialLayout from '@/components/TutorialLayout'
import { translations, Locale } from '@/lib/translations'

export default async function CSSOutlinePage({
  params,
}: {
  params: { locale: Locale } | Promise<{ locale: Locale }>
}) {
  const resolvedParams = params instanceof Promise ? await params : params
  const locale = resolvedParams?.locale || 'uz'
  const t = translations[locale] || translations.uz

  const content = {
    uz: {
      title: 'CSS Outline',
      whatIs: `Outline chegara (border) ga o'xshash, lekin element o'lchamiga ta'sir qilmaydi. Fokus ko'rsatish uchun ishlatiladi.`,
      howToUse: `outline: 2px solid red; yoki outline-width, outline-color, outline-style alohida xususiyatlar ishlatiladi.`,
      whenToUse: `Outline fokus ko'rsatish, accessibility yaxshilash, debug qilishda ishlatiladi.`,
    },
    ru: {
      title: 'CSS Outline',
      whatIs: `Outline похож на границу (border), но не влияет на размер элемента. Используется для показа фокуса.`,
      howToUse: `outline: 2px solid red; или отдельные свойства outline-width, outline-color, outline-style.`,
      whenToUse: `Outline используется для показа фокуса, улучшения доступности, отладки.`,
    },
  }

  const c = content[locale] || content.uz

  return (
    <TutorialLayout
      locale={locale}
      translations={t}
      title={c.title}
      prevTopic={{ slug: 'css-height-width', title: t.css.heightWidth }}
      nextTopic={{ slug: 'css-links', title: t.css.links }}
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
outline: 2px solid red;

/* Separate properties */
outline-width: 2px;
outline-color: red;
outline-style: solid;

/* No outline */
outline: none;

/* For focus */
input:focus {
  outline: 2px solid #667eea;
}

/* Outline offset */
outline: 2px solid red;
outline-offset: 5px; /* Distance from border */`
            : `/* Краткая запись */
outline: 2px solid red;

/* Отдельные свойства */
outline-width: 2px;
outline-color: red;
outline-style: solid;

/* Без outline */
outline: none;

/* Для фокуса */
input:focus {
  outline: 2px solid #667eea;
}

/* Offset outline */
outline: 2px solid red;
outline-offset: 5px; /* Расстояние от границы */`}</code>
        </pre>
      </div>

      <div className="result-box">
        <h4>{t.common.result}</h4>
        <div style={{ display: 'grid', gap: '15px', marginTop: '10px' }}>
          <input
            type="text"
            placeholder={locale === 'uz' ? 'Fokus qiling' : 'Сфокусируйтесь'}
            style={{
              padding: '10px',
              border: '1px solid #ddd',
              outline: '2px solid #667eea',
            }}
          />
          <div
            style={{
              padding: '15px',
              border: '2px solid #333',
              outline: '3px dashed red',
              outlineOffset: '5px',
            }}
          >
            {locale === 'uz' ? 'Outline offset misoli' : 'Пример offset outline'}
          </div>
        </div>
      </div>

      <h2>{t.common.whenToUse}</h2>
      <p>{c.whenToUse}</p>

      <div className="info-box">
        <strong>{locale === 'uz' ? 'Border vs Outline:' : 'Border vs Outline:'}</strong> {locale === 'uz' 
          ? 'Border element o\'lchamiga ta\'sir qiladi, outline esa qilmaydi. Outline fokus ko\'rsatish uchun qulay.'
          : 'Border влияет на размер элемента, outline - нет. Outline удобен для показа фокуса.'}
      </div>
    </TutorialLayout>
  )
}

