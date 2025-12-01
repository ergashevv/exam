import React from 'react'
import TutorialLayout from '@/components/TutorialLayout'
import { translations, Locale } from '@/lib/translations'

export default async function HTMLListsPage({
  params,
}: {
  params: { locale: Locale } | Promise<{ locale: Locale }>
}) {
  const resolvedParams = params instanceof Promise ? await params : params
  const locale = resolvedParams?.locale || 'uz'
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

  const c = content[locale] || content.uz

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
          <code>{locale === 'uz' 
            ? `<!-- Tartibsiz ro'yxat (bullet points) -->
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
</dl>`
            : `<!-- Неупорядоченный список (маркеры) -->
<ul>
  <li>Первый элемент</li>
  <li>Второй элемент</li>
  <li>Третий элемент</li>
</ul>

<!-- Упорядоченный список (номера) -->
<ol>
  <li>Первый шаг</li>
  <li>Второй шаг</li>
  <li>Третий шаг</li>
</ol>

<!-- Вложенные списки -->
<ul>
  <li>Фрукты
    <ul>
      <li>Яблоко</li>
      <li>Банан</li>
    </ul>
  </li>
  <li>Овощи
    <ul>
      <li>Морковь</li>
      <li>Картофель</li>
    </ul>
  </li>
</ul>

<!-- Список описаний -->
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
          <strong>{locale === 'uz' ? 'Tartibsiz ro\'yxat:' : 'Неупорядоченный список:'}</strong>
          <ul style={{ marginTop: '10px' }}>
            <li>{locale === 'uz' ? 'Birinchi element' : 'Первый элемент'}</li>
            <li>{locale === 'uz' ? 'Ikkinchi element' : 'Второй элемент'}</li>
            <li>{locale === 'uz' ? 'Uchinchi element' : 'Третий элемент'}</li>
          </ul>
        </div>
        <div style={{ marginBottom: '20px' }}>
          <strong>{locale === 'uz' ? 'Tartibli ro\'yxat:' : 'Упорядоченный список:'}</strong>
          <ol style={{ marginTop: '10px' }}>
            <li>{locale === 'uz' ? 'Birinchi qadam' : 'Первый шаг'}</li>
            <li>{locale === 'uz' ? 'Ikkinchi qadam' : 'Второй шаг'}</li>
            <li>{locale === 'uz' ? 'Uchinchi qadam' : 'Третий шаг'}</li>
          </ol>
        </div>
        <div>
          <strong>{locale === 'uz' ? 'Tavsif ro\'yxati:' : 'Список описаний:'}</strong>
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

      <h3>{locale === 'uz' ? 'Ro\'yxat turlari:' : 'Типы списков:'}</h3>
      <ul>
        <li>
          <strong>&lt;ul&gt;</strong> - {locale === 'uz' ? 'tartibsiz ro\'yxat (bullet points)' : 'неупорядоченный список (маркеры)'}
        </li>
        <li>
          <strong>&lt;ol&gt;</strong> - {locale === 'uz' ? 'tartibli ro\'yxat (raqamlar, harflar)' : 'упорядоченный список (номера, буквы)'}
        </li>
        <li>
          <strong>&lt;dl&gt;</strong> - {locale === 'uz' ? 'tavsif ro\'yxati (description list)' : 'список описаний (description list)'}
        </li>
      </ul>
    </TutorialLayout>
  )
}

