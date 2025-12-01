import React from 'react'
import TutorialLayout from '@/components/TutorialLayout'
import { translations, Locale } from '@/lib/translations'

export default function HTMLParagraphsPage({
  params,
}: {
  params: { locale: Locale }
}) {
  const locale = params?.locale || 'uz'
  const t = translations[locale] || translations.uz

  const content = {
    uz: {
      title: 'HTML Paragraflar',
      whatIs: `HTML paragraflar matn bo'limlarini ifodalash uchun ishlatiladi. <p> tegi yordamida yaratiladi va avtomatik ravishda yuqori va pastki margin qo'shiladi.`,
      howToUse: `Paragraflarni yaratish uchun <p> tegi ochiladi va yopiladi. Har bir paragraf alohida bo'lim sifatida ko'rsatiladi.`,
      whenToUse: `Paragraflar matnni tuzilgan va o'qish oson qilish uchun ishlatiladi. Har bir fikr yoki mavzu uchun alohida paragraf yaratiladi.`,
    },
    ru: {
      title: 'HTML Параграфы',
      whatIs: `HTML параграфы используются для представления текстовых блоков. Создаются с помощью тега <p> и автоматически добавляют верхний и нижний отступ.`,
      howToUse: `Для создания параграфов используется открывающий и закрывающий тег <p>. Каждый параграф отображается как отдельный блок.`,
      whenToUse: `Параграфы используются для структурирования текста и облегчения чтения. Для каждой мысли или темы создается отдельный параграф.`,
    },
  }

  const c = content[locale]

  return (
    <TutorialLayout
      locale={locale}
      translations={t}
      title={c.title}
      prevTopic={{ slug: 'html-headings', title: t.html.headings }}
      nextTopic={{ slug: 'html-colors', title: t.html.colors }}
    >
      <h2>{t.common.whatIs}</h2>
      <p>{c.whatIs}</p>

      <h2>{t.common.howToUse}</h2>
      <p>{c.howToUse}</p>

      <div className="example-box">
        <h4>{t.common.codeExample}</h4>
        <pre>
          <code>{`<p>Bu birinchi paragraf. U matnning birinchi bo'limini ifodalaydi.</p>
<p>Bu ikkinchi paragraf. U matnning ikkinchi bo'limini ifodalaydi.</p>
<p>Har bir paragraf alohida bo'lim sifatida ko'rsatiladi.</p>`}</code>
        </pre>
      </div>

      <div className="result-box">
        <h4>{t.common.result}</h4>
        <p>Bu birinchi paragraf. U matnning birinchi bo'limini ifodalaydi.</p>
        <p>Bu ikkinchi paragraf. U matnning ikkinchi bo'limini ifodalaydi.</p>
        <p>Har bir paragraf alohida bo'lim sifatida ko'rsatiladi.</p>
      </div>

      <h2>{t.common.whenToUse}</h2>
      <p>{c.whenToUse}</p>

      <div className="info-box">
        <strong>Eslatma:</strong> Paragraflar orasida avtomatik bo'sh joy qo'shiladi.
        Bu CSS yordamida o'zgartirilishi mumkin.
      </div>
    </TutorialLayout>
  )
}

