import React from 'react'
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
      whatIs: `Havola - bu bosilganda boshqa sahifaga o'tadigan matn. Xuddi telefon'da link bosgandek. HTML'da <a> tegi bilan yaratiladi.`,
      simpleExplanation: `O'ylab ko'ring: sizga "Google'ga o'tish" deb yozish kerak. Foydalanuvchi buni bosganda Google ochilishi kerak. HTML'da havola shu vazifani bajaradi!`,
      howToUse: `Qadam 1: <a href="https://google.com">Google'ga o'tish</a> yozing. Qadam 2: href="..." ichiga qaysi sahifaga o'tish kerakligini yozing. Qadam 3: Matn o'rtasiga qaysi so'z bosilishi kerakligini yozing.`,
      whenToUse: `Har doim ishlating! Boshqa sahifaga o'tish, email yuborish, telefon qilish uchun. Masalan: "Mening blogim" havolasi, "Email yuborish" havolasi.`,
    },
    ru: {
      title: 'HTML Ссылки',
      whatIs: `Ссылка - это текст, при нажатии на который переходишь на другую страницу. Как нажать на ссылку в телефоне. В HTML создается с помощью тега <a>.`,
      simpleExplanation: `Представьте: вам нужно написать "Перейти в Google". Когда пользователь нажмет, должен открыться Google. В HTML ссылка делает именно это!`,
      howToUse: `Шаг 1: Напишите <a href="https://google.com">Перейти в Google</a>. Шаг 2: В href="..." напишите, на какую страницу перейти. Шаг 3: Между тегами напишите, какое слово нужно нажать.`,
      whenToUse: `Используйте всегда! Для перехода на другую страницу, отправки email, звонка. Например: ссылка "Мой блог", ссылка "Отправить email".`,
    },
  }

  const c = content[locale] || content.uz

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
      
      <div className="info-box" style={{ background: '#e8f5e9', borderLeftColor: '#4caf50' }}>
        <strong>💡 {t.common.simpleExplanation}</strong> {c.simpleExplanation}
      </div>

      <h2>{t.common.howToUse}</h2>
      <p>{c.howToUse}</p>
      
      <div className="example-box" style={{ background: '#fff3e0', borderColor: '#ff9800' }}>
        <h4>📝 {t.common.stepByStep}</h4>
        <ol>
          <li>{locale === 'uz' ? 'Havola boshlash:' : 'Начните ссылку:'} <code>&lt;a href="..."&gt;</code> {locale === 'uz' ? 'yozing' : 'напишите'}</li>
          <li>{locale === 'uz' ? 'href="..." ichiga qaysi sahifaga o\'tish kerakligini yozing' : 'В href="..." напишите, на какую страницу перейти'}</li>
          <li>{locale === 'uz' ? 'Matnni yozing:' : 'Напишите текст:'} <code>&lt;a href="..."&gt;{locale === 'uz' ? 'Matn' : 'Текст'}&lt;/a&gt;</code></li>
          <li>{locale === 'uz' ? 'Havolani yoping:' : 'Закройте ссылку:'} <code>&lt;/a&gt;</code> {locale === 'uz' ? 'yozing' : 'напишите'}</li>
          <li>{locale === 'uz' ? 'Brauzerda ko\'ring - matn ko\'k rangda va bosiladi!' : 'Посмотрите в браузере - текст будет синим и кликабельным!'}</li>
        </ol>
      </div>

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
            {locale === 'uz' ? 'Example saytiga o\'tish' : 'Перейти на Example'}
          </a>
        </p>
        <p>
          <a href="mailto:info@example.com">{locale === 'uz' ? 'Email yuborish' : 'Отправить email'}</a>
        </p>
        <p>
          <a href="tel:+998901234567">{locale === 'uz' ? 'Telefon qilish' : 'Позвонить'}</a>
        </p>
      </div>

      <h2>{t.common.whenToUse}</h2>
      <p>{c.whenToUse}</p>
      
      <div className="example-box" style={{ background: '#f3e5f5', borderColor: '#9c27b0' }}>
        <h4>🎯 {t.common.realWorldExamples}</h4>
        <ul>
          <li><strong>{locale === 'uz' ? 'Boshqa sahifaga:' : 'На другую страницу:'}</strong> <code>&lt;a href="/about"&gt;{locale === 'uz' ? 'Haqimda' : 'Обо мне'}&lt;/a&gt;</code></li>
          <li><strong>{locale === 'uz' ? 'Internet saytiga:' : 'На интернет сайт:'}</strong> <code>&lt;a href="https://google.com"&gt;Google&lt;/a&gt;</code></li>
          <li><strong>{locale === 'uz' ? 'Email yuborish:' : 'Отправить email:'}</strong> <code>&lt;a href="mailto:info@example.com"&gt;Email&lt;/a&gt;</code></li>
          <li><strong>{locale === 'uz' ? 'Telefon qilish:' : 'Позвонить:'}</strong> <code>&lt;a href="tel:+998901234567"&gt;{locale === 'uz' ? 'Qo\'ng\'iroq' : 'Звонок'}&lt;/a&gt;</code></li>
        </ul>
      </div>

      <div className="info-box">
        <strong>🔒 {locale === 'uz' ? 'Xavfsizlik:' : 'Безопасность:'}</strong> {locale === 'uz' 
          ? 'Agar tashqi saytga havola qilsangiz (masalan: Google), <code>target="_blank"</code> bilan birga <code>rel="noopener noreferrer"</code> qo\'shing. Bu xavfsizlik uchun kerak!'
          : 'Если ссылаетесь на внешний сайт (например: Google), добавьте <code>rel="noopener noreferrer"</code> вместе с <code>target="_blank"</code>. Это нужно для безопасности!'}
      </div>
      
      <div className="result-box" style={{ background: '#e1f5fe', borderColor: '#0288d1' }}>
        <h4>👀 {t.common.takeALook}</h4>
        <p>{locale === 'uz' 
          ? `Yuqoridagi "${t.common.result}" bo'limida turli xil havolalar ko'rsatilgan. Ularni bosib ko'ring - qaysi bir qanday ishlaydi!`
          : `В разделе "${t.common.result}" выше показаны разные ссылки. Нажмите на них - посмотрите, как каждая работает!`}</p>
      </div>
    </TutorialLayout>
  )
}

