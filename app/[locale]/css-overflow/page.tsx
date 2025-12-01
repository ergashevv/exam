import React from 'react'
import TutorialLayout from '@/components/TutorialLayout'
import { translations, Locale } from '@/lib/translations'

export default async function CSSOverflowPage({
  params,
}: {
  params: { locale: Locale } | Promise<{ locale: Locale }>
}) {
  const resolvedParams = params instanceof Promise ? await params : params
  const locale = resolvedParams?.locale || 'uz'
  const t = translations[locale] || translations.uz

  const content = {
    uz: {
      title: 'CSS Overflow Property',
      whatIs: `Overflow xususiyati elementning o'lchamidan katta bo'lgan kontentni qanday boshqarishni belgilaydi. Visible, hidden, scroll, auto qiymatlari mavjud.`,
      howToUse: `overflow: visible;, overflow: hidden;, overflow: scroll;, overflow: auto; yoki overflow-x va overflow-y alohida ishlatiladi.`,
      whenToUse: `Kontentni cheklash, scroll qo'shish, overflow'ni yashirish, responsive dizayn uchun ishlatiladi.`,
    },
    ru: {
      title: 'CSS Overflow Property',
      whatIs: `Свойство overflow определяет, как управлять контентом, превышающим размер элемента. Существуют значения visible, hidden, scroll, auto.`,
      howToUse: `Используются overflow: visible;, overflow: hidden;, overflow: scroll;, overflow: auto; или отдельно overflow-x и overflow-y.`,
      whenToUse: `Используется для ограничения контента, добавления прокрутки, скрытия переполнения, адаптивного дизайна.`,
    },
  }

  const c = content[locale] || content.uz

  return (
    <TutorialLayout
      locale={locale}
      translations={t}
      title={c.title}
      prevTopic={{ slug: 'css-z-index', title: t.css.zIndex }}
      nextTopic={{ slug: 'css-float', title: t.css.float }}
    >
      <h2>{t.common.whatIs}</h2>
      <p>{c.whatIs}</p>

      <h2>{t.common.howToUse}</h2>
      <p>{c.howToUse}</p>

      <div className="example-box">
        <h4>{t.common.codeExample}</h4>
        <pre>
          <code>{locale === 'uz' 
            ? `/* Visible (default) */
overflow: visible; /* Content overflows */

/* Hidden */
overflow: hidden; /* Overflow hidden */

/* Scroll */
overflow: scroll; /* Always show scroll */

/* Auto */
overflow: auto; /* Scroll when needed */

/* Separate axes */
overflow-x: hidden; /* Horizontal */
overflow-y: scroll; /* Vertical */

/* Text overflow */
text-overflow: ellipsis; /* Shows ... */
white-space: nowrap; /* No line break */

/* Example */
.container {
  width: 300px;
  height: 200px;
  overflow: auto;
  border: 1px solid #ddd;
}`
            : `/* Visible (по умолчанию) */
overflow: visible; /* Контент переполняется */

/* Hidden */
overflow: hidden; /* Переполнение скрыто */

/* Scroll */
overflow: scroll; /* Всегда показывать прокрутку */

/* Auto */
overflow: auto; /* Прокрутка при необходимости */

/* Отдельные оси */
overflow-x: hidden; /* Горизонтальная */
overflow-y: scroll; /* Вертикальная */

/* Переполнение текста */
text-overflow: ellipsis; /* Показывает ... */
white-space: nowrap; /* Без переноса строки */

/* Пример */
.container {
  width: 300px;
  height: 200px;
  overflow: auto;
  border: 1px solid #ddd;
}`}</code>
        </pre>
      </div>

      <div className="result-box">
        <h4>{t.common.result}</h4>
        <div style={{ display: 'grid', gap: '15px', marginTop: '10px' }}>
          <div
            style={{
              width: '200px',
              height: '100px',
              border: '2px solid #667eea',
              overflow: 'hidden',
              padding: '10px',
            }}
          >
            <p>Bu kontent element o'lchamidan katta. Overflow: hidden bilan
            tashqariga chiqgan qism yashiriladi.</p>
          </div>
          <div
            style={{
              width: '200px',
              height: '100px',
              border: '2px solid #764ba2',
              overflow: 'auto',
              padding: '10px',
            }}
          >
            <p>Bu kontent element o'lchamidan katta. Overflow: auto bilan
            scroll qo'shiladi kerak bo'lganda.</p>
          </div>
        </div>
      </div>

      <h2>{t.common.whenToUse}</h2>
      <p>{c.whenToUse}</p>

      <h3>Overflow qiymatlari:</h3>
      <ul>
        <li>
          <strong>visible</strong> - kontent tashqariga chiqadi (default)
        </li>
        <li>
          <strong>hidden</strong> - tashqariga chiqgan qism yashiriladi
        </li>
        <li>
          <strong>scroll</strong> - har doim scroll ko'rsatiladi
        </li>
        <li>
          <strong>auto</strong> - kerak bo'lganda scroll qo'shiladi
        </li>
      </ul>
    </TutorialLayout>
  )
}

