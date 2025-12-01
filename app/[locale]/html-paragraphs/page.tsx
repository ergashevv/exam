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
import Encouragement from '@/components/Encouragement'
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
      category="html"
      prevTopic={{ slug: 'html-headings', title: t.html.headings }}
      nextTopic={{ slug: 'html-colors', title: t.html.colors }}
    >
      <Encouragement locale={locale} topicName={c.title} />

      <SimpleExplanation
        locale={locale}
        title={locale === 'uz' ? 'Bu nima?' : 'Что это?'}
        explanation={c.whatIs}
        emoji="📝"
      />

      <KeyPoints
        locale={locale}
        points={locale === 'uz' 
          ? [
              '<p> tegi paragraf yaratish uchun ishlatiladi',
              'Har bir paragraf alohida bo\'lim bo\'ladi',
              'Paragraflar orasida avtomatik bo\'sh joy bo\'ladi',
              'Har bir yangi fikr uchun yangi paragraf yarating',
              'Paragraflarni CSS bilan bezash mumkin'
            ]
          : [
              'Тег <p> используется для создания параграфа',
              'Каждый параграф будет отдельным блоком',
              'Между параграфами автоматически будет пространство',
              'Для каждой новой мысли создавайте новый параграф',
              'Параграфы можно стилизовать с помощью CSS'
            ]}
      />

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
      
      <VisualExample
        locale={locale}
        html={locale === 'uz'
          ? '<p style="color: #333; line-height: 1.6; margin-bottom: 1rem;">Bu birinchi paragraf. U matnning birinchi bo\'limini ifodalaydi.</p><p style="color: #333; line-height: 1.6; margin-bottom: 1rem;">Bu ikkinchi paragraf. U matnning ikkinchi bo\'limini ifodalaydi.</p>'
          : '<p style="color: #333; line-height: 1.6; margin-bottom: 1rem;">Это первый параграф. Он представляет первую часть текста.</p><p style="color: #333; line-height: 1.6; margin-bottom: 1rem;">Это второй параграф. Он представляет вторую часть текста.</p>'}
        css=""
        description={locale === 'uz' ? 'Paragraflar qanday ko\'rinadi' : 'Как выглядят параграфы'}
      />

      <RealWorldExample
        locale={locale}
        title={locale === 'uz' ? 'Haqiqiy loyihada qanday ishlatiladi?' : 'Как используется в реальном проекте?'}
        description={locale === 'uz'
          ? 'Blog sayt yaratasiz. Quyidagicha qiling:'
          : 'Создаете блог сайт. Сделайте так:'}
        example={locale === 'uz'
          ? `<article>
  <h2>Maqola sarlavhasi</h2>
  <p>Bu maqolaning kirish qismi. Bu yerda asosiy fikr yoziladi.</p>
  <p>Bu maqolaning asosiy qismi. Bu yerda batafsil ma'lumot beriladi.</p>
  <p>Bu maqolaning xulosa qismi. Bu yerda asosiy fikrlar jamlanadi.</p>
</article>`
          : `<article>
  <h2>Заголовок статьи</h2>
  <p>Это вводная часть статьи. Здесь пишется основная мысль.</p>
  <p>Это основная часть статьи. Здесь дается подробная информация.</p>
  <p>Это заключительная часть статьи. Здесь суммируются основные мысли.</p>
</article>`}
      />

      <CommonMistakes
        locale={locale}
        mistakes={locale === 'uz'
          ? [
              {
                mistake: '<p>Paragraf 1<p>Paragraf 2</p>',
                correct: '<p>Paragraf 1</p><p>Paragraf 2</p>',
                explanation: 'Har bir paragrafni yopishni unutmang! Birinchi paragrafni yopishni unutdingiz.'
              },
              {
                mistake: '<p>Paragraf 1<br>Paragraf 2</p>',
                correct: '<p>Paragraf 1</p><p>Paragraf 2</p>',
                explanation: 'Yangi paragraf uchun <br> emas, yangi <p> tegi ishlating. <br> faqat qatorni yangilash uchun.'
              },
              {
                mistake: '<p>Paragraf 1</p><p>Paragraf 2</p><p>Paragraf 3</p>',
                correct: '<p>Paragraf 1</p>\n<p>Paragraf 2</p>\n<p>Paragraf 3</p>',
                explanation: 'Kodni o\'qish oson bo\'lishi uchun har bir paragrafni yangi qatorda yozing.'
              }
            ]
          : [
              {
                mistake: '<p>Параграф 1<p>Параграф 2</p>',
                correct: '<p>Параграф 1</p><p>Параграф 2</p>',
                explanation: 'Не забудьте закрыть каждый параграф! Вы забыли закрыть первый параграф.'
              },
              {
                mistake: '<p>Параграф 1<br>Параграф 2</p>',
                correct: '<p>Параграф 1</p><p>Параграф 2</p>',
                explanation: 'Для нового параграфа используйте новый тег <p>, а не <br>. <br> только для новой строки.'
              },
              {
                mistake: '<p>Параграф 1</p><p>Параграф 2</p><p>Параграф 3</p>',
                correct: '<p>Параграф 1</p>\n<p>Параграф 2</p>\n<p>Параграф 3</p>',
                explanation: 'Для удобства чтения кода пишите каждый параграф на новой строке.'
              }
            ]}
      />

      <PracticeMode
        locale={locale}
        task={locale === 'uz'
          ? '3 ta paragraf yarating: salom, haqimda va aloqa.'
          : 'Создайте 3 параграфа: приветствие, обо мне и контакты.'}
        hint={locale === 'uz'
          ? 'Har bir paragraf uchun <p>...</p> ishlating. Har birini yopishni unutmang!'
          : 'Используйте <p>...</p> для каждого параграфа. Не забудьте закрыть каждый!'}
        solution={locale === 'uz'
          ? '<p>Salom! Mening ismim Ali.</p>\n<p>Men dasturchiman va veb-saytlar yarataman.</p>\n<p>Agar savolingiz bo\'lsa, yozing!</p>'
          : '<p>Привет! Меня зовут Али.</p>\n<p>Я программист и создаю веб-сайты.</p>\n<p>Если есть вопросы, напишите!</p>'}
      />

      <Quiz
        locale={locale}
        questions={locale === 'uz'
          ? [
              {
                question: 'Paragraf yaratish uchun qaysi teg ishlatiladi?',
                options: ['<p>', '<para>', '<paragraph>', '<text>'],
                correct: 0,
                explanation: '<p> tegi paragraf yaratish uchun ishlatiladi. Bu eng keng tarqalgan matn tegi.'
              },
              {
                question: 'Paragraflar orasida bo\'sh joy bo\'ladimi?',
                options: ['Ha, avtomatik', 'Yo\'q, CSS kerak', 'Faqat <br> bilan', 'Hech qachon'],
                correct: 0,
                explanation: 'Ha, paragraflar orasida avtomatik bo\'sh joy bo\'ladi. Bu HTML\'ning standart xususiyati.'
              },
              {
                question: 'Har bir yangi fikr uchun nima qilish kerak?',
                options: ['Yangi paragraf', 'Yangi qator', 'Yangi div', 'Hech narsa'],
                correct: 0,
                explanation: 'Har bir yangi fikr uchun yangi <p> paragraf yarating. Bu o\'qishni osonlashtiradi.'
              }
            ]
          : [
              {
                question: 'Какой тег используется для создания параграфа?',
                options: ['<p>', '<para>', '<paragraph>', '<text>'],
                correct: 0,
                explanation: 'Тег <p> используется для создания параграфа. Это самый распространенный текстовый тег.'
              },
              {
                question: 'Будет ли пространство между параграфами?',
                options: ['Да, автоматически', 'Нет, нужен CSS', 'Только с <br>', 'Никогда'],
                correct: 0,
                explanation: 'Да, между параграфами автоматически будет пространство. Это стандартная функция HTML.'
              },
              {
                question: 'Что нужно делать для каждой новой мысли?',
                options: ['Новый параграф', 'Новая строка', 'Новый div', 'Ничего'],
                correct: 0,
                explanation: 'Для каждой новой мысли создавайте новый параграф <p>. Это облегчает чтение.'
              }
            ]}
      />

      <Glossary
        locale={locale}
        terms={locale === 'uz'
          ? [
              {
                term: '<p>',
                definition: 'Paragraf tegi. Matn bo\'limini yaratish uchun ishlatiladi.',
                example: '<p>Bu paragraf</p>'
              },
              {
                term: 'Paragraf',
                definition: 'Matnning alohida bo\'limi. Har bir paragraf yangi fikrni ifodalaydi.',
                example: 'Har bir paragraf <p> tegi bilan boshlanadi va </p> bilan tugaydi.'
              }
            ]
          : [
              {
                term: '<p>',
                definition: 'Тег параграфа. Используется для создания текстового блока.',
                example: '<p>Это параграф</p>'
              },
              {
                term: 'Параграф',
                definition: 'Отдельный блок текста. Каждый параграф представляет новую мысль.',
                example: 'Каждый параграф начинается с <p> и заканчивается </p>.'
              }
            ]}
      />

      <VideoLinks
        locale={locale}
        videos={[
          {
            title: locale === 'uz' ? 'HTML Paragraflar - To\'liq dars' : 'HTML Параграфы - Полный урок',
            url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
            platform: 'youtube',
            duration: '8:00'
          }
        ]}
      />

      <h3>💻 {locale === 'uz' ? 'O\'zingiz sinab ko\'ring' : 'Попробуйте сами'}</h3>
      <CodeEditor
        locale={locale}
        initialCode={locale === 'uz' 
          ? '<p>Bu birinchi paragraf</p>\n<p>Bu ikkinchi paragraf</p>\n<p>Bu uchinchi paragraf</p>'
          : '<p>Это первый параграф</p>\n<p>Это второй параграф</p>\n<p>Это третий параграф</p>'}
        initialCSS="p { color: #333; line-height: 1.6; margin-bottom: 1rem; }"
      />

      <div className="info-box">
        <strong>💡 {t.common.note}</strong> {locale === 'uz' 
          ? 'Paragraflar orasida avtomatik bo\'sh joy bo\'ladi. Bu xuddi Word\'da "Enter" bosgandek. Agar bo\'sh joyni o\'zgartirmoqchi bo\'lsangiz, CSS ishlating.'
          : 'Между параграфами автоматически будет пространство. Это как нажать "Enter" в Word. Если хотите изменить пространство, используйте CSS.'}
      </div>
      
      <div className="result-box" style={{ background: '#e1f5fe', borderColor: '#0288d1' }}>
        <h4>👀 {t.common.takeALook}</h4>
        <p>{locale === 'uz' 
          ? `Yuqoridagi "${t.common.result}" bo'limida 3 ta paragraf ko'rsatilgan. Har biri alohida bo'lim va orasida bo'sh joy bor!`
          : `В разделе "${t.common.result}" выше показаны 3 параграфа. Каждый - отдельный блок, и между ними есть пространство!`}</p>
      </div>
    </TutorialLayout>
  )
}

