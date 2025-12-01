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
import { getHeadingsFAQ } from './faq'

export default async function HTMLHeadingsPage({
  params,
}: {
  params: { locale: Locale } | Promise<{ locale: Locale }>
}) {
  const resolvedParams = params instanceof Promise ? await params : params
  const locale = resolvedParams?.locale || 'uz'
  const t = translations[locale] || translations.uz

  const content = {
    uz: {
      title: 'HTML Sarlavhalar',
      whatIs: `Sarlavha - bu matnning eng muhim qismi. Xuddi kitobda bo'lgandek: katta sarlavha - asosiy mavzu, kichik sarlavhalar - kichik mavzular. HTML'da 6 xil o'lchamdagi sarlavha bor: <h1> eng katta, <h6> eng kichik.`,
      simpleExplanation: `O'ylab ko'ring: sizga kitob yozish kerak. Birinchi siz katta sarlavha yozasiz - "Mening kitobim". Keyin kichikroq sarlavhalar - "1-bob", "2-bob". HTML'da ham xuddi shunday!`,
      howToUse: `Qadam 1: Eng katta sarlavha uchun <h1>Matn</h1> yozing. Bu faqat bir marta ishlatiladi - sahifa nomi uchun. Qadam 2: Kichik sarlavhalar uchun <h2>, <h3> va hokazo ishlating. Qadam 3: Har bir sarlavhani yopishni unutmang - </h1>, </h2> va hokazo.`,
      whenToUse: `Har doim ishlating! Har bir bo'lim uchun sarlavha qo'ying. Masalan: "Mening haqimda" - <h2>, "Mening ishim" - <h2>, "Aloqa" - <h2>. Bu o'quvchiga nima borligini tushunishga yordam beradi.`,
      example: `Quyida HTML sarlavhalarining misoli keltirilgan:`,
    },
    ru: {
      title: 'HTML Заголовки',
      whatIs: `Заголовок - это самая важная часть текста. Как в книге: большой заголовок - главная тема, маленькие заголовки - подтемы. В HTML есть 6 разных размеров заголовков: <h1> самый большой, <h6> самый маленький.`,
      simpleExplanation: `Представьте: вам нужно написать книгу. Сначала вы пишете большой заголовок - "Моя книга". Потом заголовки поменьше - "Глава 1", "Глава 2". В HTML точно так же!`,
      howToUse: `Шаг 1: Для самого большого заголовка напишите <h1>Текст</h1>. Это используется только один раз - для названия страницы. Шаг 2: Для маленьких заголовков используйте <h2>, <h3> и так далее. Шаг 3: Не забудьте закрыть каждый заголовок - </h1>, </h2> и так далее.`,
      whenToUse: `Используйте всегда! Для каждого раздела добавьте заголовок. Например: "Обо мне" - <h2>, "Моя работа" - <h2>, "Контакты" - <h2>. Это помогает читателю понять, что есть на странице.`,
      example: `Ниже приведен пример HTML заголовков:`,
    },
  }

  const c = content[locale] || content.uz

  return (
    <TutorialLayout
      locale={locale}
      translations={t}
      title={c.title}
      category="html"
      prevTopic={{ slug: 'html-paragraphs', title: t.html.paragraphs }}
      nextTopic={{ slug: 'html-colors', title: t.html.colors }}
    >
      <SimpleExplanation
        locale={locale}
        title={locale === 'uz' ? 'Bu nima?' : 'Что это?'}
        explanation={c.whatIs}
        emoji="💡"
      />

      <KeyPoints
        locale={locale}
        points={locale === 'uz' 
          ? [
              'h1 - eng katta sarlavha, faqat bir marta ishlatiladi',
              'h2-h6 - kichikroq sarlavhalar, bir necha marta ishlatiladi',
              'Sarlavhalar tartibida bo\'lishi kerak (h1, keyin h2, keyin h3)',
              'Har bir sarlavhani yopishni unutmang (</h1>, </h2>)'
            ]
          : [
              'h1 - самый большой заголовок, используется только один раз',
              'h2-h6 - заголовки поменьше, можно использовать несколько раз',
              'Заголовки должны быть в порядке (h1, потом h2, потом h3)',
              'Не забудьте закрыть каждый заголовок (</h1>, </h2>)'
            ]}
      />

      <h2>{t.common.howToUse}</h2>
      <p>{c.howToUse}</p>
      
      <div className="example-box" style={{ background: '#fff3e0', borderColor: '#ff9800' }}>
        <h4>📝 {t.common.stepByStep}</h4>
        <ol>
          <li>{locale === 'uz' ? 'Kod yozishni boshlang:' : 'Начните писать код:'} <code>&lt;h1&gt;</code></li>
          <li>{locale === 'uz' ? 'Sarlavha matnini yozing:' : 'Напишите текст заголовка:'} <code>&lt;h1&gt;{locale === 'uz' ? 'Mening saytim' : 'Мой сайт'}&lt;/h1&gt;</code></li>
          <li>{locale === 'uz' ? 'Tegni yoping:' : 'Закройте тег:'} <code>&lt;/h1&gt;</code></li>
          <li>{locale === 'uz' ? 'Brauzerda ko\'ring - katta matn ko\'rinadi!' : 'Посмотрите в браузере - появится большой текст!'}</li>
        </ol>
      </div>

      <div className="example-box">
        <h4>{t.common.codeExample}</h4>
        <pre>
          <code>{locale === 'uz' 
            ? `<h1>Eng muhim sarlavha</h1>
<h2>Ikkinchi darajali sarlavha</h2>
<h3>Uchinchi darajali sarlavha</h3>
<h4>To'rtinchi darajali sarlavha</h4>
<h5>Beshinchi darajali sarlavha</h5>
<h6>Oltinchi darajali sarlavha</h6>`
            : `<h1>Самый важный заголовок</h1>
<h2>Заголовок второго уровня</h2>
<h3>Заголовок третьего уровня</h3>
<h4>Заголовок четвертого уровня</h4>
<h5>Заголовок пятого уровня</h5>
<h6>Заголовок шестого уровня</h6>`}</code>
        </pre>
      </div>

      <VisualExample
        locale={locale}
        html={locale === 'uz'
          ? '<h1>Eng muhim sarlavha</h1><h2>Ikkinchi sarlavha</h2><h3>Uchinchi sarlavha</h3>'
          : '<h1>Самый важный заголовок</h1><h2>Второй заголовок</h2><h3>Третий заголовок</h3>'}
        css="h1 { color: #667eea; font-size: 2em; } h2 { color: #764ba2; font-size: 1.5em; } h3 { color: #3498db; font-size: 1.2em; }"
        description={locale === 'uz' ? 'Sarlavhalar qanday ko\'rinadi' : 'Как выглядят заголовки'}
      />

      <div className="result-box">
        <h4>{t.common.result}</h4>
        <h1 style={{ fontSize: '2em', margin: '0.5em 0' }}>
          {locale === 'uz' ? 'Eng muhim sarlavha' : 'Самый важный заголовок'}
        </h1>
        <h2 style={{ fontSize: '1.5em', margin: '0.5em 0' }}>
          {locale === 'uz' ? 'Ikkinchi darajali sarlavha' : 'Заголовок второго уровня'}
        </h2>
        <h3 style={{ fontSize: '1.17em', margin: '0.5em 0' }}>
          {locale === 'uz' ? 'Uchinchi darajali sarlavha' : 'Заголовок третьего уровня'}
        </h3>
        <h4 style={{ fontSize: '1em', margin: '0.5em 0' }}>
          {locale === 'uz' ? 'To\'rtinchi darajali sarlavha' : 'Заголовок четвертого уровня'}
        </h4>
        <h5 style={{ fontSize: '0.83em', margin: '0.5em 0' }}>
          {locale === 'uz' ? 'Beshinchi darajali sarlavha' : 'Заголовок пятого уровня'}
        </h5>
        <h6 style={{ fontSize: '0.67em', margin: '0.5em 0' }}>
          {locale === 'uz' ? 'Oltinchi darajali sarlavha' : 'Заголовок шестого уровня'}
        </h6>
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
          ? `<h1>Mening blogim</h1>
<h2>Maqolalar</h2>
<h3>HTML haqida</h3>
<h3>CSS haqida</h3>
<h2>Haqimda</h2>
<h2>Aloqa</h2>`
          : `<h1>Мой блог</h1>
<h2>Статьи</h2>
<h3>О HTML</h3>
<h3>О CSS</h3>
<h2>Обо мне</h2>
<h2>Контакты</h2>`}
      />

      <CommonMistakes
        locale={locale}
        mistakes={locale === 'uz'
          ? [
              {
                mistake: '<h1>Bir sarlavha</h1><h1>Ikkinchi sarlavha</h1>',
                correct: '<h1>Bir sarlavha</h1><h2>Ikkinchi sarlavha</h2>',
                explanation: 'h1 faqat bir marta ishlatiladi. Keyingi sarlavhalar uchun h2, h3 va hokazo ishlating.'
              },
              {
                mistake: '<h1>Sarlavha<h2>Kichik sarlavha</h2>',
                correct: '<h1>Sarlavha</h1><h2>Kichik sarlavha</h2>',
                explanation: 'Har bir tegnni yopishni unutmang. h1 ni yopishni unutdingiz!'
              },
              {
                mistake: '<h3>Katta sarlavha</h3><h1>Kichik sarlavha</h1>',
                correct: '<h1>Katta sarlavha</h1><h3>Kichik sarlavha</h3>',
                explanation: 'Sarlavhalar tartibida bo\'lishi kerak. Avval h1, keyin h2, keyin h3.'
              }
            ]
          : [
              {
                mistake: '<h1>Один заголовок</h1><h1>Второй заголовок</h1>',
                correct: '<h1>Один заголовок</h1><h2>Второй заголовок</h2>',
                explanation: 'h1 используется только один раз. Для следующих заголовков используйте h2, h3 и так далее.'
              },
              {
                mistake: '<h1>Заголовок<h2>Маленький заголовок</h2>',
                correct: '<h1>Заголовок</h1><h2>Маленький заголовок</h2>',
                explanation: 'Не забудьте закрыть каждый тег. Вы забыли закрыть h1!'
              },
              {
                mistake: '<h3>Большой заголовок</h3><h1>Маленький заголовок</h1>',
                correct: '<h1>Большой заголовок</h1><h3>Маленький заголовок</h3>',
                explanation: 'Заголовки должны быть в порядке. Сначала h1, потом h2, потом h3.'
              }
            ]}
      />

      <h3>🎨 {t.common.howItLooksInDesign}</h3>
      <p>
        {locale === 'uz'
          ? 'Sarlavhalar avtomatik ravishda turli o\'lchamda ko\'rinadi. h1 eng katta va qalin, h6 eng kichik va ingichka. Siz CSS bilan ularning rangini, o\'lchamini o\'zgartirishingiz mumkin.'
          : 'Заголовки автоматически отображаются разного размера. h1 самый большой и жирный, h6 самый маленький и тонкий. Вы можете изменить их цвет и размер с помощью CSS.'}
      </p>
      
      <div className="result-box" style={{ background: '#e1f5fe', borderColor: '#0288d1' }}>
        <h4>👀 {t.common.takeALook}</h4>
        <p>{locale === 'uz' 
          ? `Yuqoridagi "${t.common.result}" bo'limida sarlavhalar qanday ko'rinishini ko'rdingiz. h1 eng katta, h6 eng kichik!`
          : `В разделе "${t.common.result}" выше вы увидели, как выглядят заголовки. h1 самый большой, h6 самый маленький!`}</p>
      </div>

      <h3>💻 {locale === 'uz' ? 'O\'zingiz sinab ko\'ring' : 'Попробуйте сами'}</h3>
      <CodeEditor
        locale={locale}
        initialCode={locale === 'uz' 
          ? '<h1>Mening birinchi sarlavham</h1>\n<h2>Ikkinchi sarlavha</h2>\n<h3>Uchinchi sarlavha</h3>'
          : '<h1>Мой первый заголовок</h1>\n<h2>Второй заголовок</h2>\n<h3>Третий заголовок</h3>'}
        initialCSS="h1 { color: #667eea; }\nh2 { color: #764ba2; }\nh3 { color: #3498db; }"
      />

      <PracticeMode
        locale={locale}
        task={locale === 'uz'
          ? '3 ta sarlavha yarating: h1, h2 va h3. Ularga turli ranglar bering.'
          : 'Создайте 3 заголовка: h1, h2 и h3. Придайте им разные цвета.'}
        hint={locale === 'uz'
          ? 'h1 uchun <h1>...</h1>, h2 uchun <h2>...</h2> ishlating. CSS da color xususiyatini ishlating.'
          : 'Используйте <h1>...</h1> для h1, <h2>...</h2> для h2. В CSS используйте свойство color.'}
        solution={locale === 'uz'
          ? '<h1>Birinchi sarlavha</h1>\n<h2>Ikkinchi sarlavha</h2>\n<h3>Uchinchi sarlavha</h3>\n\nCSS:\nh1 { color: red; }\nh2 { color: blue; }\nh3 { color: green; }'
          : '<h1>Первый заголовок</h1>\n<h2>Второй заголовок</h2>\n<h3>Третий заголовок</h3>\n\nCSS:\nh1 { color: red; }\nh2 { color: blue; }\nh3 { color: green; }'}
      />

      <Quiz
        locale={locale}
        questions={locale === 'uz'
          ? [
              {
                question: 'h1 tegini necha marta ishlatish mumkin?',
                options: ['1 marta', '2 marta', 'Cheksiz', 'Hech qachon'],
                correct: 0,
                explanation: 'h1 faqat bir marta ishlatiladi - sahifa nomi uchun. Bu SEO uchun juda muhim.'
              },
              {
                question: 'Qaysi sarlavha eng katta?',
                options: ['h1', 'h2', 'h6', 'Barchasi bir xil'],
                correct: 0,
                explanation: 'h1 eng katta sarlavha. h6 eng kichik.'
              },
              {
                question: 'Sarlavhalar tartibida bo\'lishi kerakmi?',
                options: ['Ha, albatta', 'Yo\'q, muhim emas', 'Faqat h1 uchun', 'Hech qachon'],
                correct: 0,
                explanation: 'Ha, sarlavhalar tartibida bo\'lishi kerak: h1, keyin h2, keyin h3 va hokazo.'
              }
            ]
          : [
              {
                question: 'Сколько раз можно использовать тег h1?',
                options: ['1 раз', '2 раза', 'Бесконечно', 'Никогда'],
                correct: 0,
                explanation: 'h1 используется только один раз - для названия страницы. Это очень важно для SEO.'
              },
              {
                question: 'Какой заголовок самый большой?',
                options: ['h1', 'h2', 'h6', 'Все одинаковые'],
                correct: 0,
                explanation: 'h1 - самый большой заголовок. h6 - самый маленький.'
              },
              {
                question: 'Должны ли заголовки быть в порядке?',
                options: ['Да, обязательно', 'Нет, не важно', 'Только для h1', 'Никогда'],
                correct: 0,
                explanation: 'Да, заголовки должны быть в порядке: h1, потом h2, потом h3 и так далее.'
              }
            ]}
      />

      <Glossary
        locale={locale}
        terms={locale === 'uz'
          ? [
              {
                term: 'h1-h6',
                definition: 'HTML sarlavha teglari. h1 eng katta, h6 eng kichik.',
                example: '<h1>Sarlavha</h1>'
              },
              {
                term: 'Semantic',
                definition: 'Ma\'noli - elementning nima ekanligi aniq bo\'ladi.',
                example: '<h1> - bu sarlavha ekanligi aniq'
              },
              {
                term: 'SEO',
                definition: 'Search Engine Optimization - qidiruv tizimlarida yaxshi ko\'rinish.',
                example: 'h1 tegi SEO uchun juda muhim'
              }
            ]
          : [
              {
                term: 'h1-h6',
                definition: 'HTML теги заголовков. h1 самый большой, h6 самый маленький.',
                example: '<h1>Заголовок</h1>'
              },
              {
                term: 'Semantic',
                definition: 'Семантический - понятно, что представляет элемент.',
                example: '<h1> - понятно, что это заголовок'
              },
              {
                term: 'SEO',
                definition: 'Search Engine Optimization - хорошая видимость в поисковых системах.',
                example: 'Тег h1 очень важен для SEO'
              }
            ]}
      />

      <VideoLinks
        locale={locale}
        videos={[
          {
            title: locale === 'uz' ? 'HTML Sarlavhalar - To\'liq dars' : 'HTML Заголовки - Полный урок',
            url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
            platform: 'youtube',
            duration: '10:30'
          }
        ]}
      />

      <h3>❓ {locale === 'uz' ? 'Tez-tez beriladigan savollar' : 'Часто задаваемые вопросы'}</h3>
      <div className="faq-section">
        {getHeadingsFAQ(locale).map((item, index) => (
          <div key={index} className="faq-item">
            <h4 className="faq-question">❓ {item.question}</h4>
            <p className="faq-answer">{item.answer}</p>
          </div>
        ))}
      </div>
    </TutorialLayout>
  )
}

