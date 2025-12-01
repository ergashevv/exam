import React from 'react'
import TutorialLayout from '@/components/TutorialLayout'
import { translations, Locale } from '@/lib/translations'

export default async function HTMLTablesPage({
  params,
}: {
  params: { locale: Locale } | Promise<{ locale: Locale }>
}) {
  const resolvedParams = params instanceof Promise ? await params : params
  const locale = resolvedParams?.locale || 'uz'
  const t = translations[locale] || translations.uz

  const content = {
    uz: {
      title: 'HTML Jadval',
      whatIs: `HTML jadvallar ma'lumotlarni qator va ustunlar shaklida ko'rsatish uchun ishlatiladi. <table>, <tr>, <td>, <th> teglari yordamida yaratiladi.`,
      howToUse: `Jadval <table> tegi bilan boshlanadi. Har bir qator <tr>, har bir katak <td> (oddiy) yoki <th> (sarlavha) tegi bilan yaratiladi.`,
      whenToUse: `Jadvallar jadval ma'lumotlarini ko'rsatish, narx ro'yxatlari, jadval shaklidagi ma'lumotlar uchun ishlatiladi.`,
    },
    ru: {
      title: 'HTML Таблицы',
      whatIs: `HTML таблицы используются для отображения данных в виде строк и столбцов. Создаются с помощью тегов <table>, <tr>, <td>, <th>.`,
      howToUse: `Таблица начинается с тега <table>. Каждая строка создается с помощью <tr>, каждая ячейка - <td> (обычная) или <th> (заголовок).`,
      whenToUse: `Таблицы используются для отображения табличных данных, прайс-листов, информации в табличном формате.`,
    },
  }

  const c = content[locale] || content.uz

  return (
    <TutorialLayout
      locale={locale}
      translations={t}
      title={c.title}
      prevTopic={{ slug: 'html-page-title', title: t.html.pageTitle }}
      nextTopic={{ slug: 'html-lists', title: t.html.lists }}
    >
      <h2>{t.common.whatIs}</h2>
      <p>{c.whatIs}</p>

      <h2>{t.common.howToUse}</h2>
      <p>{c.howToUse}</p>

      <div className="example-box">
        <h4>{t.common.codeExample}</h4>
        <pre>
          <code>{`<table border="1">
  <thead>
    <tr>
      <th>Ism</th>
      <th>Familiya</th>
      <th>Yosh</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Ali</td>
      <td>Valiyev</td>
      <td>25</td>
    </tr>
    <tr>
      <td>Vali</td>
      <td>Aliyev</td>
      <td>30</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td colspan="3">Jami: 2 ta odam</td>
    </tr>
  </tfoot>
</table>`}</code>
        </pre>
      </div>

      <div className="result-box">
        <h4>{t.common.result}</h4>
        <table
          style={{
            width: '100%',
            borderCollapse: 'collapse',
            marginTop: '10px',
            border: '1px solid #ddd',
          }}
        >
          <thead>
            <tr style={{ backgroundColor: '#667eea', color: 'white' }}>
              <th style={{ padding: '10px', border: '1px solid #ddd' }}>
                {locale === 'uz' ? 'Ism' : 'Имя'}
              </th>
              <th style={{ padding: '10px', border: '1px solid #ddd' }}>
                {locale === 'uz' ? 'Familiya' : 'Фамилия'}
              </th>
              <th style={{ padding: '10px', border: '1px solid #ddd' }}>
                {locale === 'uz' ? 'Yosh' : 'Возраст'}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>
                {locale === 'uz' ? 'Ali' : 'Али'}
              </td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>
                {locale === 'uz' ? 'Valiyev' : 'Валиев'}
              </td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>
                25
              </td>
            </tr>
            <tr>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>
                {locale === 'uz' ? 'Vali' : 'Вали'}
              </td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>
                {locale === 'uz' ? 'Aliyev' : 'Алиев'}
              </td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>
                30
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr style={{ backgroundColor: '#f0f0f0' }}>
              <td
                colSpan={3}
                style={{ padding: '10px', border: '1px solid #ddd' }}
              >
                {locale === 'uz' ? 'Jami: 2 ta odam' : 'Всего: 2 человека'}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>

      <h2>{t.common.whenToUse}</h2>
      <p>{c.whenToUse}</p>

      <h3>{locale === 'uz' ? 'Jadval elementlari:' : 'Элементы таблицы:'}</h3>
      <ul>
        <li>
          <code>&lt;table&gt;</code> - {locale === 'uz' ? 'jadval asosiy konteyneri' : 'основной контейнер таблицы'}
        </li>
        <li>
          <code>&lt;thead&gt;</code> - {locale === 'uz' ? 'jadval sarlavhasi' : 'заголовок таблицы'}
        </li>
        <li>
          <code>&lt;tbody&gt;</code> - {locale === 'uz' ? 'jadval tanasi' : 'тело таблицы'}
        </li>
        <li>
          <code>&lt;tfoot&gt;</code> - {locale === 'uz' ? 'jadval pastki qismi' : 'нижняя часть таблицы'}
        </li>
        <li>
          <code>&lt;tr&gt;</code> - {locale === 'uz' ? 'qator (table row)' : 'строка (table row)'}
        </li>
        <li>
          <code>&lt;th&gt;</code> - {locale === 'uz' ? 'sarlavha katak (table header)' : 'ячейка заголовка (table header)'}
        </li>
        <li>
          <code>&lt;td&gt;</code> - {locale === 'uz' ? 'oddiy katak (table data)' : 'обычная ячейка (table data)'}
        </li>
      </ul>

      <div className="info-box">
        <strong>{t.common.note}</strong> {locale === 'uz' 
          ? 'Zamonaviy dizayn uchun jadvallarni CSS bilan bezash tavsiya etiladi. Responsive dizayn uchun mobil qurilmalarda jadvallarni scroll qilish yoki boshqa formatga o\'tkazish kerak.'
          : 'Для современного дизайна рекомендуется оформлять таблицы с помощью CSS. Для адаптивного дизайна на мобильных устройствах нужно прокручивать таблицы или преобразовывать их в другой формат.'}
      </div>
    </TutorialLayout>
  )
}

