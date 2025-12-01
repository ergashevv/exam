import TutorialLayout from '@/components/TutorialLayout'
import { translations, Locale } from '@/lib/translations'

export default function HTMLLinksPage({
  params,
}: {
  params: { locale: Locale }
}) {
  const locale = params?.locale || 'uz'
  const t = translations[locale] || translations.uz

  const content = {
    uz: {
      title: 'HTML Havolalar',
      whatIs: `HTML havolalar (<a> tegi) boshqa sahifalar, fayllar yoki sahifa ichidagi bo'limlarga o'tish uchun ishlatiladi. Havolalar internetning asosiy qismidir.`,
      howToUse: `Havolalar <a href="url">Matn</a> formatida yaratiladi. href atributi havola manzilini belgilaydi. target="_blank" yangi oynada ochish uchun ishlatiladi.`,
      whenToUse: `Havolalar navigatsiya, tashqi resurslarga havola, email yoki telefon raqamiga havola qilish uchun ishlatiladi.`,
    },
    ru: {
      title: 'HTML Ссылки',
      whatIs: `HTML ссылки (тег <a>) используются для перехода на другие страницы, файлы или разделы внутри страницы. Ссылки являются основой интернета.`,
      howToUse: `Ссылки создаются в формате <a href="url">Текст</a>. Атрибут href определяет адрес ссылки. target="_blank" используется для открытия в новом окне.`,
      whenToUse: `Ссылки используются для навигации, ссылок на внешние ресурсы, email или телефонные номера.`,
    },
  }

  const c = content[locale]

  return (
    <TutorialLayout
      locale={locale}
      translations={t}
      title={c.title}
      prevTopic={{ slug: 'html-styles', title: t.html.styles }}
      nextTopic={{ slug: 'html-images', title: t.html.images }}
    >
      <h2>{t.common.whatIs}</h2>
      <p>{c.whatIs}</p>

      <h2>{t.common.howToUse}</h2>
      <p>{c.howToUse}</p>

      <div className="example-box">
        <h4>{t.common.codeExample}</h4>
        <pre>
          <code>{`<!-- Oddiy havola -->
<a href="https://example.com">Example saytiga o'tish</a>

<!-- Yangi oynada ochish -->
<a href="https://example.com" target="_blank">Yangi oynada ochish</a>

<!-- Email havola -->
<a href="mailto:info@example.com">Email yuborish</a>

<!-- Telefon havola -->
<a href="tel:+998901234567">Telefon qilish</a>

<!-- Sahifa ichidagi bo'limga havola -->
<a href="#section1">Bo'limga o'tish</a>
<div id="section1">Bu bo'lim</div>

<!-- Havola bilan rasm -->
<a href="https://example.com">
  <img src="image.jpg" alt="Rasm">
</a>`}</code>
        </pre>
      </div>

      <div className="result-box">
        <h4>{t.common.result}</h4>
        <p>
          <a href="https://example.com" target="_blank" rel="noopener noreferrer">
            Example saytiga o'tish
          </a>
        </p>
        <p>
          <a href="mailto:info@example.com">Email yuborish</a>
        </p>
        <p>
          <a href="tel:+998901234567">Telefon qilish</a>
        </p>
      </div>

      <h2>{t.common.whenToUse}</h2>
      <p>{c.whenToUse}</p>

      <div className="info-box">
        <strong>Xavfsizlik:</strong> Tashqi havolalar uchun{' '}
        <code>rel="noopener noreferrer"</code> qo'shish tavsiya etiladi.
      </div>
    </TutorialLayout>
  )
}

