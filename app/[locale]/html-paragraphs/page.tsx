import React from 'react'
import TutorialLayout from '@/components/TutorialLayout'
import { translations, Locale } from '@/lib/translations'

export default async function HTMLParagraphsPage({
  params,
}: {
  params: { locale: Locale } | Promise<{ locale: Locale }>
}) {
  const resolvedParams = params instanceof Promise ? await params : params
  const locale = resolvedParams?.locale || 'uz'
  const t = translations[locale] || translations.uz

  const content = {
    uz: {
      title: 'HTML Paragraflar',
      whatIs: `Paragraf - bu oddiy matn bo'limi. Xuddi maktabda insho yozgandek: har bir yangi fikr yangi paragrafdan boshlanadi. HTML'da paragraf <p> tegi bilan yoziladi.`,
      simpleExplanation: `O'ylab ko'ring: sizga xabar yozish kerak. Birinchi paragrafda salom aytasiz. Ikkinchi paragrafda asosiy xabarni yozasiz. Uchinchi paragrafda xayrlashasiz. HTML'da ham xuddi shunday!`,
      howToUse: `Qadam 1: <p> yozing. Qadam 2: Matnni yozing. Qadam 3: </p> yozing. Tugadi! Har bir paragraf alohida bo'lim bo'ladi va orasida bo'sh joy bo'ladi.`,
      whenToUse: `Har doim ishlating! Har bir yangi fikr uchun yangi paragraf. Masalan: birinchi paragraf - "Salom", ikkinchi paragraf - "Men haqimda", uchinchi paragraf - "Aloqa".`,
    },
    ru: {
      title: 'HTML Параграфы',
      whatIs: `Параграф - это простой текстовый блок. Как в школе при написании сочинения: каждая новая мысль начинается с нового параграфа. В HTML параграф пишется с помощью тега <p>.`,
      simpleExplanation: `Представьте: вам нужно написать сообщение. В первом параграфе вы здороваетесь. Во втором параграфе пишете основное сообщение. В третьем параграфе прощаетесь. В HTML точно так же!`,
      howToUse: `Шаг 1: Напишите <p>. Шаг 2: Напишите текст. Шаг 3: Напишите </p>. Готово! Каждый параграф будет отдельным блоком с промежутком между ними.`,
      whenToUse: `Используйте всегда! Для каждой новой мысли - новый параграф. Например: первый параграф - "Привет", второй параграф - "Обо мне", третий параграф - "Контакты".`,
    },
  }

  const c = content[locale] || content.uz

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
      
      <div className="info-box" style={{ background: '#e8f5e9', borderLeftColor: '#4caf50' }}>
        <strong>💡 {t.common.simpleExplanation}</strong> {c.simpleExplanation}
      </div>

      <h2>{t.common.howToUse}</h2>
      <p>{c.howToUse}</p>
      
      <div className="example-box" style={{ background: '#fff3e0', borderColor: '#ff9800' }}>
        <h4>📝 {t.common.stepByStep}</h4>
        <ol>
          <li>{locale === 'uz' ? 'Kod yozishni boshlang:' : 'Начните писать код:'} <code>&lt;p&gt;</code></li>
          <li>{locale === 'uz' ? 'Matnni yozing:' : 'Напишите текст:'} <code>&lt;p&gt;{locale === 'uz' ? 'Bu mening birinchi paragrafim' : 'Это мой первый параграф'}&lt;/p&gt;</code></li>
          <li>{locale === 'uz' ? 'Yangi paragraf uchun yana' : 'Для нового параграфа снова'} <code>&lt;p&gt;</code> {locale === 'uz' ? 'yozing' : 'напишите'}</li>
          <li>{locale === 'uz' ? 'Brauzerda ko\'ring - har bir paragraf alohida bo\'lim bo\'ladi!' : 'Посмотрите в браузере - каждый параграф будет отдельным блоком!'}</li>
        </ol>
      </div>

      <div className="example-box">
        <h4>{t.common.codeExample}</h4>
        <pre>
          <code>{locale === 'uz' 
            ? `<p>Bu birinchi paragraf. U matnning birinchi bo'limini ifodalaydi.</p>
<p>Bu ikkinchi paragraf. U matnning ikkinchi bo'limini ifodalaydi.</p>
<p>Har bir paragraf alohida bo'lim sifatida ko'rsatiladi.</p>`
            : `<p>Это первый параграф. Он представляет первую часть текста.</p>
<p>Это второй параграф. Он представляет вторую часть текста.</p>
<p>Каждый параграф отображается как отдельный блок.</p>`}</code>
        </pre>
      </div>

      <div className="result-box">
        <h4>{t.common.result}</h4>
        <p>{locale === 'uz' 
          ? 'Bu birinchi paragraf. U matnning birinchi bo\'limini ifodalaydi.'
          : 'Это первый параграф. Он представляет первую часть текста.'}</p>
        <p>{locale === 'uz' 
          ? 'Bu ikkinchi paragraf. U matnning ikkinchi bo\'limini ifodalaydi.'
          : 'Это второй параграф. Он представляет вторую часть текста.'}</p>
        <p>{locale === 'uz' 
          ? 'Har bir paragraf alohida bo\'lim sifatida ko\'rsatiladi.'
          : 'Каждый параграф отображается как отдельный блок.'}</p>
      </div>

      <h2>{t.common.whenToUse}</h2>
      <p>{c.whenToUse}</p>
      
      <div className="example-box" style={{ background: '#f3e5f5', borderColor: '#9c27b0' }}>
        <h4>🎯 {t.common.realWorldExample}</h4>
        <p>{locale === 'uz' ? 'Veb-sayt yaratasiz. Quyidagicha qiling:' : 'Создаете веб-сайт. Сделайте так:'}</p>
        <ul>
          <li>{locale === 'uz' ? 'Birinchi paragraf:' : 'Первый параграф:'} <code>&lt;p&gt;{locale === 'uz' ? 'Salom! Mening ismim Ali.' : 'Привет! Меня зовут Али.'}&lt;/p&gt;</code></li>
          <li>{locale === 'uz' ? 'Ikkinchi paragraf:' : 'Второй параграф:'} <code>&lt;p&gt;{locale === 'uz' ? 'Men dasturchiman va veb-saytlar yarataman.' : 'Я программист и создаю веб-сайты.'}&lt;/p&gt;</code></li>
          <li>{locale === 'uz' ? 'Uchinchi paragraf:' : 'Третий параграф:'} <code>&lt;p&gt;{locale === 'uz' ? 'Agar savolingiz bo\'lsa, yozing!' : 'Если есть вопросы, напишите!'}&lt;/p&gt;</code></li>
        </ul>
        <p><strong>{t.common.result}:</strong> {locale === 'uz' ? 'Har bir paragraf alohida bo\'lim bo\'ladi va o\'qish oson bo\'ladi!' : 'Каждый параграф будет отдельным блоком и читать будет легко!'}</p>
      </div>

      <div className="info-box">
        <strong>💡 {t.common.note}</strong> {locale === 'uz' 
          ? 'Paragraflar orasida avtomatik bo\'sh joy bo\'ladi. Bu xuddi Word\'da "Enter" bosgandek. Agar bo\'sh joyni o\'zgartirmoqchi bo\'lsangiz, CSS ishlating.'
          : 'Между параграфами автоматически будет пространство. Это как нажать "Enter" в Word. Если хотите изменить пространство, используйте CSS.'}
      </div>
      
      <div className="result-box" style={{ background: '#e1f5fe', borderColor: '#0288d1' }}>
        <h4>👀 {t.common.takeALook}</h4>
        <p>{locale === 'uz' 
          ? `Yuqoridagi "${t.common.result}" bo'limida 3 ta paragraf ko'rsatilgan. Har biri alohida bo'lim va orasida bo'sh joy bor!`
          : `В разделе "${t.common.result}" выше показаны 3 параграфа. Каждый - отдельный блок и между ними есть пространство!`}</p>
      </div>
    </TutorialLayout>
  )
}

