import React from 'react'
import TutorialLayout from '@/components/TutorialLayout'
import { translations, Locale } from '@/lib/translations'

export default function HTMLListsPage({
  params,
}: {
  params: { locale: Locale }
}) {
  const locale = params?.locale || 'uz'
  const t = translations[locale] || translations.uz

  const content = {
    uz: {
      title: "HTML Ro'yxatlar",
      whatIs: `HTML ro'yxatlar ma'lumotlarni tartibli yoki tartibsiz shaklda ko'rsatish uchun ishlatiladi. Ikki xil turi mavjud: tartibli (<ol>) va tartibsiz (<ul>).`,
      howToUse: `Tartibsiz ro'yxat <ul> tegi bilan, tartibli ro'yxat <ol> tegi bilan yaratiladi. Har bir element <li> tegi bilan belgilanadi.`,
      whenToUse: `Ro'yxatlar navigatsiya, menyu, ma'lumotlarni tartibga solish uchun ishlatiladi.`,
    },
    ru: {
      title: 'HTML Списки',
      whatIs: `HTML списки используются для отображения данных в упорядоченном или неупорядоченном виде. Существует два типа: упорядоченные (<ol>) и неупорядоченные (<ul>).`,
      howToUse: `Неупорядоченный список создается с помощью тега <ul>, упорядоченный - с помощью <ol>. Каждый элемент обозначается тегом <li>.`,
      whenToUse: `Списки используются для навигации, меню, упорядочивания информации.`,
    },
  }

  const c = content[locale]

  return (
    <TutorialLayout
      locale={locale}
      translations={t}
      title={c.title}
      prevTopic={{ slug: 'html-tables', title: t.html.tables }}
      nextTopic={{ slug: 'html-block-inline', title: t.html.blockInline }}
    >
      <h2>{t.common.whatIs}</h2>
      <p>{c.whatIs}</p>

      <h2>{t.common.howToUse}</h2>
      <p>{c.howToUse}</p>

      <div className="example-box">
        <h4>{t.common.codeExample}</h4>
        <pre>
          <code>{`<!-- Tartibsiz ro'yxat (bullet points) -->
<ul>
  <li>Birinchi element</li>
  <li>Ikkinchi element</li>
  <li>Uchinchi element</li>
</ul>

<!-- Tartibli ro'yxat (raqamlar) -->
<ol>
  <li>Birinchi qadam</li>
  <li>Ikkinchi qadam</li>
  <li>Uchinchi qadam</li>
</ol>

<!-- Ichki ro'yxatlar (nested) -->
<ul>
  <li>Fruits
    <ul>
      <li>Olma</li>
      <li>Banan</li>
    </ul>
  </li>
  <li>Vegetables
    <ul>
      <li>Sabzi</li>
      <li>Kartoshka</li>
    </ul>
  </li>
</ul>

<!-- Tavsif ro'yxati (description list) -->
<dl>
  <dt>HTML</dt>
  <dd>HyperText Markup Language</dd>
  <dt>CSS</dt>
  <dd>Cascading Style Sheets</dd>
</dl>`}</code>
        </pre>
      </div>

      <div className="result-box">
        <h4>{t.common.result}</h4>
        <div style={{ marginBottom: '20px' }}>
          <strong>Tartibsiz ro'yxat:</strong>
          <ul style={{ marginTop: '10px' }}>
            <li>Birinchi element</li>
            <li>Ikkinchi element</li>
            <li>Uchinchi element</li>
          </ul>
        </div>
        <div style={{ marginBottom: '20px' }}>
          <strong>Tartibli ro'yxat:</strong>
          <ol style={{ marginTop: '10px' }}>
            <li>Birinchi qadam</li>
            <li>Ikkinchi qadam</li>
            <li>Uchinchi qadam</li>
          </ol>
        </div>
        <div>
          <strong>Tavsif ro'yxati:</strong>
          <dl style={{ marginTop: '10px' }}>
            <dt style={{ fontWeight: 'bold' }}>HTML</dt>
            <dd style={{ marginLeft: '20px', marginBottom: '10px' }}>
              HyperText Markup Language
            </dd>
            <dt style={{ fontWeight: 'bold' }}>CSS</dt>
            <dd style={{ marginLeft: '20px' }}>
              Cascading Style Sheets
            </dd>
          </dl>
        </div>
      </div>

      <h2>{t.common.whenToUse}</h2>
      <p>{c.whenToUse}</p>

      <h3>Ro'yxat turlari:</h3>
      <ul>
        <li>
          <strong>&lt;ul&gt;</strong> - tartibsiz ro'yxat (bullet points)
        </li>
        <li>
          <strong>&lt;ol&gt;</strong> - tartibli ro'yxat (raqamlar, harflar)
        </li>
        <li>
          <strong>&lt;dl&gt;</strong> - tavsif ro'yxati (description list)
        </li>
      </ul>
    </TutorialLayout>
  )
}

