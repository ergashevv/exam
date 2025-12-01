import React from 'react'
import TutorialLayout from '@/components/TutorialLayout'
import { translations, Locale } from '@/lib/translations'

export default function HTMLHeadingsPage({
  params,
}: {
  params: { locale: Locale }
}) {
  const locale = params?.locale || 'uz'
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
      prevTopic={{ slug: 'html-paragraphs', title: t.html.paragraphs }}
      nextTopic={{ slug: 'html-colors', title: t.html.colors }}
    >
      <h2>{t.common.whatIs}</h2>
      <p>{c.whatIs}</p>
      
      <div className="info-box" style={{ background: '#e8f5e9', borderLeftColor: '#4caf50' }}>
        <strong>💡 Oddiy tushuntirish:</strong> {c.simpleExplanation}
      </div>

      <h2>{t.common.howToUse}</h2>
      <p>{c.howToUse}</p>
      
      <div className="example-box" style={{ background: '#fff3e0', borderColor: '#ff9800' }}>
        <h4>📝 Qadam-baqadam:</h4>
        <ol>
          <li>Kod yozishni boshlang: <code>&lt;h1&gt;</code></li>
          <li>Sarlavha matnini yozing: <code>&lt;h1&gt;Mening saytim&lt;/h1&gt;</code></li>
          <li>Tegni yoping: <code>&lt;/h1&gt;</code></li>
          <li>Brauzerda ko'ring - katta matn ko'rinadi!</li>
        </ol>
      </div>

      <div className="example-box">
        <h4>{t.common.codeExample}</h4>
        <pre>
          <code>{`<h1>Eng muhim sarlavha</h1>
<h2>Ikkinchi darajali sarlavha</h2>
<h3>Uchinchi darajali sarlavha</h3>
<h4>To'rtinchi darajali sarlavha</h4>
<h5>Beshinchi darajali sarlavha</h5>
<h6>Oltinchi darajali sarlavha</h6>`}</code>
        </pre>
      </div>

      <div className="result-box">
        <h4>{t.common.result}</h4>
        <h1 style={{ fontSize: '2em', margin: '0.5em 0' }}>
          Eng muhim sarlavha
        </h1>
        <h2 style={{ fontSize: '1.5em', margin: '0.5em 0' }}>
          Ikkinchi darajali sarlavha
        </h2>
        <h3 style={{ fontSize: '1.17em', margin: '0.5em 0' }}>
          Uchinchi darajali sarlavha
        </h3>
        <h4 style={{ fontSize: '1em', margin: '0.5em 0' }}>
          To'rtinchi darajali sarlavha
        </h4>
        <h5 style={{ fontSize: '0.83em', margin: '0.5em 0' }}>
          Beshinchi darajali sarlavha
        </h5>
        <h6 style={{ fontSize: '0.67em', margin: '0.5em 0' }}>
          Oltinchi darajali sarlavha
        </h6>
      </div>

      <h2>{t.common.whenToUse}</h2>
      <p>{c.whenToUse}</p>
      
      <div className="example-box" style={{ background: '#f3e5f5', borderColor: '#9c27b0' }}>
        <h4>🎯 Real hayotdan misol:</h4>
        <p>Veb-sayt yaratasiz. Quyidagicha qiling:</p>
        <ul>
          <li><code>&lt;h1&gt;</code> - Sayt nomi (masalan: "Mening blogim") - faqat 1 marta</li>
          <li><code>&lt;h2&gt;</code> - Katta bo'limlar (masalan: "Maqolalar", "Haqimda")</li>
          <li><code>&lt;h3&gt;</code> - Kichik bo'limlar (masalan: "Maqola 1", "Maqola 2")</li>
        </ul>
      </div>

      <div className="info-box">
        <strong>⚠️ Muhim qoida:</strong> <code>&lt;h1&gt;</code> faqat bir marta! 
        Xuddi kitobda bitta katta sarlavha bo'lgandek. Agar 2 marta yozsangiz, Google xato deb biladi.
      </div>

      <h3>🎨 Dizaynda qanday ko'rinadi?</h3>
      <p>
        {locale === 'uz'
          ? 'Sarlavhalar avtomatik ravishda turli o\'lchamda ko\'rinadi. <h1> eng katta va qalin, <h6> eng kichik va ingichka. Siz CSS bilan ularning rangini, o\'lchamini o\'zgartirishingiz mumkin.'
          : 'Заголовки автоматически отображаются разного размера. <h1> самый большой и жирный, <h6> самый маленький и тонкий. Вы можете изменить их цвет и размер с помощью CSS.'}
      </p>
      
      <div className="result-box" style={{ background: '#e1f5fe', borderColor: '#0288d1' }}>
        <h4>👀 Ko'rib chiqing:</h4>
        <p>Yuqoridagi "Natija" bo'limida sarlavhalar qanday ko'rinishini ko'rdingiz. <code>&lt;h1&gt;</code> eng katta, <code>&lt;h6&gt;</code> eng kichik!</p>
      </div>
    </TutorialLayout>
  )
}

