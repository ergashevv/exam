import React from 'react'
import TutorialLayout from '@/components/TutorialLayout'
import { translations, Locale } from '@/lib/translations'

export default async function CSSTablesPage({
  params,
}: {
  params: { locale: Locale } | Promise<{ locale: Locale }>
}) {
  const resolvedParams = params instanceof Promise ? await params : params
  const locale = resolvedParams?.locale || 'uz'
  const t = translations[locale] || translations.uz

  const content = {
    uz: {
      title: 'CSS Tables',
      whatIs: `CSS jadvallarni bezash, chegaralar qo'shish, ranglar, hover effektlari va responsive dizayn uchun ishlatiladi.`,
      howToUse: `border-collapse, border-spacing, nth-child selektorlari, hover effektlari, striped jadvallar yaratish.`,
      whenToUse: `Jadvallarni chiroyli ko'rinishga keltirish, ma'lumotlarni o'qish qulayligini yaxshilash, dizayn yaratishda ishlatiladi.`,
    },
    ru: {
      title: 'CSS Таблицы',
      whatIs: `CSS используется для оформления таблиц, добавления границ, цветов, эффектов наведения и адаптивного дизайна.`,
      howToUse: `border-collapse, border-spacing, селекторы nth-child, эффекты наведения, создание полосатых таблиц.`,
      whenToUse: `Используется для придания таблицам красивого вида, улучшения читаемости данных, создания дизайна.`,
    },
  }

  const c = content[locale] || content.uz

  return (
    <TutorialLayout
      locale={locale}
      translations={t}
      title={c.title}
      prevTopic={{ slug: 'css-links', title: t.css.links }}
      nextTopic={{ slug: 'css-lists', title: t.css.lists }}
    >
      <h2>{t.common.whatIs}</h2>
      <p>{c.whatIs}</p>

      <h2>{t.common.howToUse}</h2>
      <p>{c.howToUse}</p>

      <div className="example-box">
        <h4>{t.common.codeExample}</h4>
        <pre>
          <code>{locale === 'uz' 
            ? `/* Combine borders */
table {
  border-collapse: collapse;
  width: 100%;
}

/* Rows */
th, td {
  border: 1px solid #ddd;
  padding: 12px;
  text-align: left;
}

/* Header */
th {
  background-color: #667eea;
  color: white;
}

/* Striped table (zebra) */
tr:nth-child(even) {
  background-color: #f2f2f2;
}

/* Hover effect */
tr:hover {
  background-color: #e8eaf6;
}

/* Responsive table */
@media (max-width: 600px) {
  table {
    display: block;
    overflow-x: auto;
  }
}`
            : `/* Объединение границ */
table {
  border-collapse: collapse;
  width: 100%;
}

/* Строки */
th, td {
  border: 1px solid #ddd;
  padding: 12px;
  text-align: left;
}

/* Заголовок */
th {
  background-color: #667eea;
  color: white;
}

/* Полосатая таблица (zebra) */
tr:nth-child(even) {
  background-color: #f2f2f2;
}

/* Эффект наведения */
tr:hover {
  background-color: #e8eaf6;
}

/* Адаптивная таблица */
@media (max-width: 600px) {
  table {
    display: block;
    overflow-x: auto;
  }
}`}</code>
        </pre>
      </div>

      <div className="result-box">
        <h4>{t.common.result}</h4>
        <table
          style={{
            width: '100%',
            borderCollapse: 'collapse',
            marginTop: '10px',
          }}
        >
          <thead>
            <tr style={{ background: '#667eea', color: 'white' }}>
              <th style={{ padding: '12px', border: '1px solid #ddd' }}>Ism</th>
              <th style={{ padding: '12px', border: '1px solid #ddd' }}>Familiya</th>
              <th style={{ padding: '12px', border: '1px solid #ddd' }}>Yosh</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ background: '#f2f2f2' }}>
              <td style={{ padding: '12px', border: '1px solid #ddd' }}>Ali</td>
              <td style={{ padding: '12px', border: '1px solid #ddd' }}>Valiyev</td>
              <td style={{ padding: '12px', border: '1px solid #ddd' }}>25</td>
            </tr>
            <tr>
              <td style={{ padding: '12px', border: '1px solid #ddd' }}>Vali</td>
              <td style={{ padding: '12px', border: '1px solid #ddd' }}>Aliyev</td>
              <td style={{ padding: '12px', border: '1px solid #ddd' }}>30</td>
            </tr>
            <tr style={{ background: '#f2f2f2' }}>
              <td style={{ padding: '12px', border: '1px solid #ddd' }}>Hasan</td>
              <td style={{ padding: '12px', border: '1px solid #ddd' }}>Karimov</td>
              <td style={{ padding: '12px', border: '1px solid #ddd' }}>28</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>{t.common.whenToUse}</h2>
      <p>{c.whenToUse}</p>
    </TutorialLayout>
  )
}

