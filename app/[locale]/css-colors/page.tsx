import React from 'react'
import TutorialLayout from '@/components/TutorialLayout'
import { translations, Locale } from '@/lib/translations'

export default function CSSColorsPage({
  params,
}: {
  params: { locale: Locale }
}) {
  const locale = params?.locale || 'uz'
  const t = translations[locale] || translations.uz

  const content = {
    uz: {
      title: 'CSS Ranglar',
      whatIs: `Rang - bu matn yoki fonning rangi. Xuddi qog'ozga rangli qalam bilan yozgandek. CSS'da siz matn rangi va fon rangini o'zgartirishingiz mumkin.`,
      simpleExplanation: `O'ylab ko'ring: sizga qog'ozga yozish kerak. Qizil qalam bilan yozasiz - matn qizil bo'ladi. CSS'da ham xuddi shunday: "color: red" yozsangiz - matn qizil bo'ladi!`,
      howToUse: `Qadam 1: Matn rangi uchun: <code>color: red;</code> yozing. Qadam 2: Fon rangi uchun: <code>background-color: blue;</code> yozing. Qadam 3: Brauzerda ko'ring - rang o'zgardi!`,
      whenToUse: `Har doim ishlating! Muhim matnni qizil qiling, xavfli matnni sariq qiling, muvaffaqiyatli matnni yashil qiling. Ranglar foydalanuvchiga nima muhimligini ko'rsatadi.`,
    },
    ru: {
      title: 'CSS Цвета',
      whatIs: `Цвет - это цвет текста или фона. Как писать цветной ручкой на бумаге. В CSS вы можете изменить цвет текста и цвет фона.`,
      simpleExplanation: `Представьте: вам нужно написать на бумаге. Вы пишете красной ручкой - текст красный. В CSS точно так же: напишите "color: red" - текст станет красным!`,
      howToUse: `Шаг 1: Для цвета текста: напишите <code>color: red;</code>. Шаг 2: Для цвета фона: напишите <code>background-color: blue;</code>. Шаг 3: Посмотрите в браузере - цвет изменился!`,
      whenToUse: `Используйте всегда! Важный текст сделайте красным, опасный текст - желтым, успешный текст - зеленым. Цвета показывают пользователю, что важно.`,
    },
  }

  const c = content[locale] || content.uz

  return (
    <TutorialLayout
      locale={locale}
      translations={t}
      title={c.title}
      prevTopic={{ slug: 'html-input-types', title: t.html.inputTypes }}
      nextTopic={{ slug: 'css-backgrounds', title: t.css.backgrounds }}
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
          <li>CSS fayl yoki &lt;style&gt; tegi oching</li>
          <li>Matn rangi uchun: <code>color: red;</code> yozing</li>
          <li>Fon rangi uchun: <code>background-color: yellow;</code> yozing</li>
          <li>Brauzerda yangilang - ko'ring, rang o'zgardi!</li>
        </ol>
      </div>

      <div className="example-box">
        <h4>{t.common.codeExample}</h4>
        <pre>
          <code>{`/* Rang nomi */
color: red;
background-color: blue;

/* Hex kod */
color: #FF0000;
background-color: #0000FF;

/* RGB */
color: rgb(255, 0, 0);
background-color: rgb(0, 0, 255);

/* RGBA (alpha - shaffoflik) */
color: rgba(255, 0, 0, 0.5); /* 50% shaffof */

/* HSL */
color: hsl(0, 100%, 50%);
background-color: hsl(240, 100%, 50%);

/* HSLA */
color: hsla(0, 100%, 50%, 0.5);

/* Misol */
.text-red {
  color: #FF0000;
}

.bg-blue {
  background-color: #3498db;
}

.transparent {
  background-color: rgba(52, 152, 219, 0.3);
}`}</code>
        </pre>
      </div>

      <div className="result-box">
        <h4>{t.common.result}</h4>
        <div style={{ padding: '20px' }}>
          <p style={{ color: '#FF0000' }}>Qizil matn</p>
          <p style={{ background: '#3498db', color: 'white', padding: '10px' }}>
            Ko'k fon, oq matn
          </p>
          <p
            style={{
              background: 'rgba(52, 152, 219, 0.3)',
              padding: '10px',
              border: '1px solid #3498db',
            }}
          >
            Shaffof ko'k fon
          </p>
        </div>
      </div>

      <h2>{t.common.whenToUse}</h2>
      <p>{c.whenToUse}</p>
      
      <div className="example-box" style={{ background: '#f3e5f5', borderColor: '#9c27b0' }}>
        <h4>🎯 Real hayotdan misol:</h4>
        <ul>
          <li><strong>Xavfli xabar:</strong> <code>color: red;</code> - qizil rang</li>
          <li><strong>Ogohlantirish:</strong> <code>color: orange;</code> - sariq rang</li>
          <li><strong>Muvaffaqiyat:</strong> <code>color: green;</code> - yashil rang</li>
          <li><strong>Oddiy matn:</strong> <code>color: black;</code> - qora rang</li>
        </ul>
      </div>

      <h3>🎨 Rang yozish usullari (qaysi birini ishlatish kerak?):</h3>
      <ul>
        <li>
          <strong>Rang nomi (eng oson!):</strong> <code>color: red;</code> - faqat "red", "blue", "green" kabi oddiy ranglar. 
          <span style={{ color: '#4caf50' }}>✅ Boshlang'ich uchun eng yaxshi!</span>
        </li>
        <li>
          <strong>Hex kod (eng keng qo'llaniladi):</strong> <code>color: #FF0000;</code> - # belgisi bilan. 
          <span style={{ color: '#2196f3' }}>💡 Ko'p ranglar bor, aniq ranglar.</span>
        </li>
        <li>
          <strong>RGB (3 ta raqam):</strong> <code>color: rgb(255, 0, 0);</code> - qizil=255, yashil=0, ko'k=0. 
          <span style={{ color: '#9c27b0' }}>🔢 Raqamlar bilan ishlashni yaxshi ko'rsangiz.</span>
        </li>
        <li>
          <strong>RGBA (shaffof rang):</strong> <code>color: rgba(255, 0, 0, 0.5);</code> - oxirgi raqam shaffoflik (0.5 = 50%). 
          <span style={{ color: '#ff9800' }}>✨ Orqa fon ko'rinadigan rang kerak bo'lsa.</span>
        </li>
      </ul>
      
      <div className="info-box">
        <strong>💡 Maslahat:</strong> Boshlang'ich uchun rang nomini ishlating (red, blue). Keyinroq Hex kodni o'rganing (#FF0000). 
        Bu eng oson va eng keng qo'llaniladi!
      </div>
    </TutorialLayout>
  )
}

