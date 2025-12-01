import React from 'react'
import TutorialLayout from '@/components/TutorialLayout'
import { translations, Locale } from '@/lib/translations'

export default async function CSSDisplayPage({
  params,
}: {
  params: { locale: Locale } | Promise<{ locale: Locale }>
}) {
  const resolvedParams = params instanceof Promise ? await params : params
  const locale = resolvedParams?.locale || 'uz'
  const t = translations[locale] || translations.uz

  const content = {
    uz: {
      title: 'CSS Display Xususiyati',
      whatIs: `Display - bu elementning qanday ko'rinishini aytadi. Xuddi quti qanday qo'yilishini: to'liq qator (block), qator ichida (inline), yoki yonma-yon (flex).`,
      simpleExplanation: `O'ylab ko'ring: sizga qutilar qo'yish kerak. Agar "block" desangiz - har bir quti to'liq qatorni egallaydi. Agar "inline" desangiz - qutilar yonma-yon bo'ladi.`,
      howToUse: `Qadam 1: <code>display: block;</code> yozing - element to'liq qatorni egallaydi. Qadam 2: <code>display: inline;</code> yozing - elementlar yonma-yon bo'ladi. Qadam 3: <code>display: flex;</code> yozing - zamonaviy usul (eng yaxshi!).`,
      whenToUse: `Har doim ishlating! Elementlarni yonma-yon qo'yish, markazga joylashtirish, responsive dizayn uchun. Masalan: tugmalar yonma-yon, kartalar yonma-yon.`,
      blockVsInline: `Block = to'liq qator (div, p, h1). Inline = qator ichida (span, a, img). Flex = zamonaviy usul (yaxshi layout).`,
    },
    ru: {
      title: 'CSS Свойство display',
      whatIs: `Display - это говорит, как элемент должен отображаться. Как коробки должны стоять: полная строка (block), в строке (inline), или рядом (flex).`,
      simpleExplanation: `Представьте: вам нужно поставить коробки. Если скажете "block" - каждая коробка займет всю строку. Если скажете "inline" - коробки будут рядом.`,
      howToUse: `Шаг 1: Напишите <code>display: block;</code> - элемент займет всю строку. Шаг 2: Напишите <code>display: inline;</code> - элементы будут рядом. Шаг 3: Напишите <code>display: flex;</code> - современный способ (лучший!).`,
      whenToUse: `Используйте всегда! Для размещения элементов рядом, центрирования, адаптивного дизайна. Например: кнопки рядом, карточки рядом.`,
      blockVsInline: `Block = полная строка (div, p, h1). Inline = в строке (span, a, img). Flex = современный способ (хороший layout).`,
    },
  }

  const c = content[locale] || content.uz

  return (
    <TutorialLayout
      locale={locale}
      translations={t}
      title={c.title}
      prevTopic={{ slug: 'css-lists', title: t.css.lists }}
      nextTopic={{ slug: 'css-position', title: t.css.position }}
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
          <li>{locale === 'uz' ? 'Elementni tanlang (masalan: div, span)' : 'Выберите элемент (например: div, span)'}</li>
          <li>{locale === 'uz' ? 'CSS yozing:' : 'Напишите CSS:'} <code>display: block;</code> {locale === 'uz' ? 'yoki' : 'или'} <code>display: flex;</code></li>
          <li>{locale === 'uz' ? 'Brauzerda ko\'ring - element qanday ko\'rinishini o\'zgartirdi!' : 'Посмотрите в браузере - изменился способ отображения элемента!'}</li>
        </ol>
        <p style={{ marginTop: '15px' }}><strong>{locale === 'uz' ? 'Eng muhim 3 ta:' : 'Самые важные 3:'}</strong></p>
        <ul>
          <li><code>display: block;</code> - {locale === 'uz' ? 'to\'liq qator (div, p, h1)' : 'полная строка (div, p, h1)'}</li>
          <li><code>display: inline;</code> - {locale === 'uz' ? 'qator ichida (span, a)' : 'в строке (span, a)'}</li>
          <li><code>display: flex;</code> - {locale === 'uz' ? 'zamonaviy usul (eng yaxshi!)' : 'современный способ (лучший!)'}</li>
        </ul>
      </div>

      <div className="example-box">
        <h4>{t.common.codeExample}</h4>
        <pre>
          <code>{`/* Block */
display: block; /* Yangi qatordan, to'liq kenglik */

/* Inline */
display: inline; /* Matn ichida */

/* Inline-block */
display: inline-block; /* Inline, lekin o'lchamga ega */

/* Flex */
display: flex; /* Flexbox layout */

/* Grid */
display: grid; /* Grid layout */

/* None */
display: none; /* Yashirish */

/* Misol - Flexbox */
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* Misol - Grid */
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}`}</code>
        </pre>
      </div>

      <div className="result-box">
        <h4>{t.common.result}</h4>
        <div style={{ marginTop: '10px' }}>
          <div
            style={{
              display: 'flex',
              gap: '10px',
              marginBottom: '15px',
            }}
          >
            <div style={{ background: '#667eea', color: 'white', padding: '15px', flex: 1 }}>
              Flex 1
            </div>
            <div style={{ background: '#764ba2', color: 'white', padding: '15px', flex: 1 }}>
              Flex 2
            </div>
            <div style={{ background: '#3498db', color: 'white', padding: '15px', flex: 1 }}>
              Flex 3
            </div>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '10px',
            }}
          >
            <div style={{ background: '#667eea', color: 'white', padding: '15px' }}>
              Grid 1
            </div>
            <div style={{ background: '#764ba2', color: 'white', padding: '15px' }}>
              Grid 2
            </div>
            <div style={{ background: '#3498db', color: 'white', padding: '15px' }}>
              Grid 3
            </div>
          </div>
        </div>
      </div>

      <h2>{t.common.whenToUse}</h2>
      <p>{c.whenToUse}</p>
      
      <div className="example-box" style={{ background: '#f3e5f5', borderColor: '#9c27b0' }}>
        <h4>🎯 {t.common.realWorldExample}</h4>
        <ul>
          <li><strong>{locale === 'uz' ? 'Tugmalar yonma-yon:' : 'Кнопки рядом:'}</strong> <code>display: flex;</code> {locale === 'uz' ? 'ishlating' : 'используйте'}</li>
          <li><strong>{locale === 'uz' ? 'Kartalar yonma-yon:' : 'Карточки рядом:'}</strong> <code>display: grid;</code> {locale === 'uz' ? 'ishlating' : 'используйте'}</li>
          <li><strong>{locale === 'uz' ? 'Elementni yashirish:' : 'Скрыть элемент:'}</strong> <code>display: none;</code> {locale === 'uz' ? 'ishlating' : 'используйте'}</li>
        </ul>
      </div>

      <div className="info-box" style={{ background: '#fff3e0', borderLeftColor: '#ff9800' }}>
        <strong>🤔 {locale === 'uz' ? 'Block vs Inline vs Flex - farqi nima?' : 'Block vs Inline vs Flex - в чем разница?'}</strong>
        <p style={{ marginTop: '10px' }}>{c.blockVsInline}</p>
        <p style={{ marginTop: '10px' }}>
          <strong>{t.common.tip}</strong> {locale === 'uz' 
            ? 'Zamonaviy saytlar uchun <code>display: flex;</code> yoki <code>display: grid;</code> ishlating. Bu eng oson va eng kuchli usul!'
            : 'Для современных сайтов используйте <code>display: flex;</code> или <code>display: grid;</code>. Это самый простой и самый мощный способ!'}
        </p>
      </div>

      <h3>📋 Asosiy display qiymatlari:</h3>
      <ul>
        <li>
          <strong>block</strong> - blok element
        </li>
        <li>
          <strong>inline</strong> - satr ichida element
        </li>
        <li>
          <strong>inline-block</strong> - inline, lekin o'lchamga ega
        </li>
        <li>
          <strong>flex</strong> - flexbox layout
        </li>
        <li>
          <strong>grid</strong> - grid layout
        </li>
        <li>
          <strong>none</strong> - elementni yashirish
        </li>
      </ul>
    </TutorialLayout>
  )
}

