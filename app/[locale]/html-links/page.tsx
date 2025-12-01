import React from 'react'
import TutorialLayout from '@/components/TutorialLayout'
import CodeEditor from '@/components/CodeEditor'
import KeyPoints from '@/components/KeyPoints'
import CommonMistakes from '@/components/CommonMistakes'
import VisualExample from '@/components/VisualExample'
import RealWorldExample from '@/components/RealWorldExample'
import SimpleExplanation from '@/components/SimpleExplanation'
import PracticeMode from '@/components/PracticeMode'
import Quiz from '@/components/Quiz'
import Glossary from '@/components/Glossary'
import VideoLinks from '@/components/VideoLinks'
import { translations, Locale } from '@/lib/translations'

export default async function HTMLLinksPage({
  params,
}: {
  params: { locale: Locale } | Promise<{ locale: Locale }>
}) {
  const resolvedParams = params instanceof Promise ? await params : params
  const locale = resolvedParams?.locale || 'uz'
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
      category="html"
      prevTopic={{ slug: 'html-styles', title: t.html.styles }}
      nextTopic={{ slug: 'html-images', title: t.html.images }}
    >
      <SimpleExplanation
        locale={locale}
        title={locale === 'uz' ? 'Bu nima?' : 'Что это?'}
        explanation={c.whatIs}
        emoji="🔗"
      />

      <KeyPoints
        locale={locale}
        points={locale === 'uz' 
          ? [
              '<a> tegi havola yaratish uchun ishlatiladi',
              'href="..." ichiga qaysi sahifaga o\'tish kerakligini yozing',
              'Matn o\'rtasiga bosiladigan so\'zni yozing',
              'target="_blank" yangi oynada ochish uchun',
              'rel="noopener noreferrer" xavfsizlik uchun'
            ]
          : [
              'Тег <a> используется для создания ссылки',
              'В href="..." напишите, на какую страницу перейти',
              'Между тегами напишите слово, которое нужно нажать',
              'target="_blank" для открытия в новом окне',
              'rel="noopener noreferrer" для безопасности'
            ]}
      />

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
          <code>{locale === 'uz' 
            ? `<!-- Oddiy havola -->
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
</a>`
            : `<!-- Простая ссылка -->
<a href="https://example.com">Перейти на Example</a>

<!-- Открыть в новом окне -->
<a href="https://example.com" target="_blank">Открыть в новом окне</a>

<!-- Email ссылка -->
<a href="mailto:info@example.com">Отправить email</a>

<!-- Телефонная ссылка -->
<a href="tel:+998901234567">Позвонить</a>

<!-- Ссылка на раздел внутри страницы -->
<a href="#section1">Перейти к разделу</a>
<div id="section1">Этот раздел</div>

<!-- Ссылка с изображением -->
<a href="https://example.com">
  <img src="image.jpg" alt="Изображение">
</a>`}</code>
        </pre>
      </div>

      <VisualExample
        locale={locale}
        html={locale === 'uz'
          ? '<a href="https://example.com" style="color: #667eea; text-decoration: none; padding: 10px; background: #f0f4ff; border-radius: 5px; display: inline-block;">Example saytiga o\'tish</a>'
          : '<a href="https://example.com" style="color: #667eea; text-decoration: none; padding: 10px; background: #f0f4ff; border-radius: 5px; display: inline-block;">Перейти на Example</a>'}
        css=""
        description={locale === 'uz' ? 'Havola qanday ko\'rinadi' : 'Как выглядит ссылка'}
      />

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
      
      <RealWorldExample
        locale={locale}
        title={locale === 'uz' ? 'Haqiqiy loyihada qanday ishlatiladi?' : 'Как используется в реальном проекте?'}
        description={locale === 'uz'
          ? 'Blog sayt yaratasiz. Quyidagicha qiling:'
          : 'Создаете блог сайт. Сделайте так:'}
        example={locale === 'uz'
          ? `<nav>
  <a href="/">Bosh sahifa</a>
  <a href="/about">Haqimda</a>
  <a href="/blog">Blog</a>
  <a href="/contact">Aloqa</a>
</nav>

<article>
  <h2>Maqola sarlavhasi</h2>
  <p>Maqola matni...</p>
  <a href="https://example.com" target="_blank" rel="noopener noreferrer">
    To'liq o'qish
  </a>
</article>`
          : `<nav>
  <a href="/">Главная</a>
  <a href="/about">Обо мне</a>
  <a href="/blog">Блог</a>
  <a href="/contact">Контакты</a>
</nav>

<article>
  <h2>Заголовок статьи</h2>
  <p>Текст статьи...</p>
  <a href="https://example.com" target="_blank" rel="noopener noreferrer">
    Читать полностью
  </a>
</article>`}
      />

      <CommonMistakes
        locale={locale}
        mistakes={locale === 'uz'
          ? [
              {
                mistake: '<a href="example.com">Havola</a>',
                correct: '<a href="https://example.com">Havola</a>',
                explanation: 'Internet saytlarga havola qilganda https:// yoki http:// qo\'shishni unutmang!'
              },
              {
                mistake: '<a href="https://example.com" target="_blank">Havola</a>',
                correct: '<a href="https://example.com" target="_blank" rel="noopener noreferrer">Havola</a>',
                explanation: 'target="_blank" ishlatganda rel="noopener noreferrer" qo\'shishni unutmang - bu xavfsizlik uchun kerak!'
              },
              {
                mistake: '<a>Havola</a>',
                correct: '<a href="https://example.com">Havola</a>',
                explanation: 'href atributini yozishni unutmang! U holda havola ishlamaydi.'
              }
            ]
          : [
              {
                mistake: '<a href="example.com">Ссылка</a>',
                correct: '<a href="https://example.com">Ссылка</a>',
                explanation: 'При ссылке на интернет сайты не забудьте добавить https:// или http://!'
              },
              {
                mistake: '<a href="https://example.com" target="_blank">Ссылка</a>',
                correct: '<a href="https://example.com" target="_blank" rel="noopener noreferrer">Ссылка</a>',
                explanation: 'При использовании target="_blank" не забудьте добавить rel="noopener noreferrer" - это нужно для безопасности!'
              },
              {
                mistake: '<a>Ссылка</a>',
                correct: '<a href="https://example.com">Ссылка</a>',
                explanation: 'Не забудьте написать атрибут href! Иначе ссылка не будет работать.'
              }
            ]}
      />

      <PracticeMode
        locale={locale}
        task={locale === 'uz'
          ? '3 ta havola yarating: bosh sahifaga, email yuborish va telefon qilish.'
          : 'Создайте 3 ссылки: на главную страницу, отправка email и звонок.'}
        hint={locale === 'uz'
          ? 'href="/" bosh sahifa uchun, href="mailto:..." email uchun, href="tel:..." telefon uchun.'
          : 'href="/" для главной страницы, href="mailto:..." для email, href="tel:..." для телефона.'}
        solution={locale === 'uz'
          ? '<a href="/">Bosh sahifa</a>\n<a href="mailto:info@example.com">Email yuborish</a>\n<a href="tel:+998901234567">Telefon qilish</a>'
          : '<a href="/">Главная</a>\n<a href="mailto:info@example.com">Отправить email</a>\n<a href="tel:+998901234567">Позвонить</a>'}
      />

      <Quiz
        locale={locale}
        questions={locale === 'uz'
          ? [
              {
                question: 'Havola yaratish uchun qaysi teg ishlatiladi?',
                options: ['<a>', '<link>', '<href>', '<url>'],
                correct: 0,
                explanation: '<a> tegi havola yaratish uchun ishlatiladi. href atributi ichiga qaysi sahifaga o\'tish kerakligini yozasiz.'
              },
              {
                question: 'Yangi oynada ochish uchun qanday atribut ishlatiladi?',
                options: ['target="_new"', 'target="_blank"', 'open="new"', 'window="new"'],
                correct: 1,
                explanation: 'target="_blank" yangi oynada ochish uchun ishlatiladi. Xavfsizlik uchun rel="noopener noreferrer" ham qo\'shing.'
              },
              {
                question: 'Email yuborish uchun href ichiga nima yoziladi?',
                options: ['email:info@example.com', 'mailto:info@example.com', 'send:info@example.com', 'href:info@example.com'],
                correct: 1,
                explanation: 'mailto: dan keyin email manzilini yozasiz. Masalan: mailto:info@example.com'
              }
            ]
          : [
              {
                question: 'Какой тег используется для создания ссылки?',
                options: ['<a>', '<link>', '<href>', '<url>'],
                correct: 0,
                explanation: 'Тег <a> используется для создания ссылки. В атрибут href пишете, на какую страницу перейти.'
              },
              {
                question: 'Какой атрибут используется для открытия в новом окне?',
                options: ['target="_new"', 'target="_blank"', 'open="new"', 'window="new"'],
                correct: 1,
                explanation: 'target="_blank" используется для открытия в новом окне. Для безопасности также добавьте rel="noopener noreferrer".'
              },
              {
                question: 'Что пишется в href для отправки email?',
                options: ['email:info@example.com', 'mailto:info@example.com', 'send:info@example.com', 'href:info@example.com'],
                correct: 1,
                explanation: 'После mailto: пишете email адрес. Например: mailto:info@example.com'
              }
            ]}
      />

      <Glossary
        locale={locale}
        terms={locale === 'uz'
          ? [
              {
                term: '<a>',
                definition: 'Havola tegi. href atributi bilan ishlatiladi.',
                example: '<a href="https://example.com">Havola</a>'
              },
              {
                term: 'href',
                definition: 'Havola manzili. Qaysi sahifaga o\'tish kerakligini ko\'rsatadi.',
                example: 'href="https://example.com"'
              },
              {
                term: 'target="_blank"',
                definition: 'Havolani yangi oynada ochish uchun.',
                example: '<a href="..." target="_blank">Havola</a>'
              }
            ]
          : [
              {
                term: '<a>',
                definition: 'Тег ссылки. Используется с атрибутом href.',
                example: '<a href="https://example.com">Ссылка</a>'
              },
              {
                term: 'href',
                definition: 'Адрес ссылки. Показывает, на какую страницу перейти.',
                example: 'href="https://example.com"'
              },
              {
                term: 'target="_blank"',
                definition: 'Для открытия ссылки в новом окне.',
                example: '<a href="..." target="_blank">Ссылка</a>'
              }
            ]}
      />

      <VideoLinks
        locale={locale}
        videos={[
          {
            title: locale === 'uz' ? 'HTML Havolalar - To\'liq dars' : 'HTML Ссылки - Полный урок',
            url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
            platform: 'youtube',
            duration: '12:00'
          }
        ]}
      />

      <h3>💻 {locale === 'uz' ? 'O\'zingiz sinab ko\'ring' : 'Попробуйте сами'}</h3>
      <CodeEditor
        locale={locale}
        initialCode={locale === 'uz' 
          ? '<a href="https://example.com">Example saytiga o\'tish</a>\n<a href="mailto:info@example.com">Email yuborish</a>'
          : '<a href="https://example.com">Перейти на Example</a>\n<a href="mailto:info@example.com">Отправить email</a>'}
        initialCSS="a { color: #667eea; text-decoration: none; padding: 10px; background: #f0f4ff; border-radius: 5px; display: inline-block; margin: 5px; }"
      />

      <div className="info-box">
        <strong>🔒 {locale === 'uz' ? 'Xavfsizlik:' : 'Безопасность:'}</strong> {locale === 'uz' 
          ? 'Agar tashqi saytga havola qilsangiz (masalan: Google), <code>target="_blank"</code> bilan birga <code>rel="noopener noreferrer"</code> qo\'shing. Bu xavfsizlik uchun kerak!'
          : 'Если ссылаетесь на внешний сайт (например: Google), добавьте <code>rel="noopener noreferrer"</code> вместе с <code>target="_blank"</code>. Это нужно для безопасности!'}
      </div>
      
      <div className="result-box" style={{ background: '#e1f5fe', borderColor: '#0288d1' }}>
        <h4>👀 {t.common.takeALook}</h4>
        <p>{locale === 'uz' 
          ? `Yuqoridagi "${t.common.result}" bo'limida turli xil havolalar ko'rsatilgan. Ularni bosib ko'ring - qaysi bir qanday ishlaydi!`
          : `В разделе "${t.common.result}" выше показаны различные ссылки. Нажмите на них - посмотрите, как каждая работает!`}</p>
      </div>
    </TutorialLayout>
  )
}

