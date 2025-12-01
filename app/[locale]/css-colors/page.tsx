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
        <strong>💡 {t.common.simpleExplanation}</strong> {c.simpleExplanation}
      </div>

      <h2>{t.common.howToUse}</h2>
      <p>{c.howToUse}</p>
      
      <div className="example-box" style={{ background: '#fff3e0', borderColor: '#ff9800' }}>
        <h4>📝 {t.common.stepByStep}</h4>
        <ol>
          <li>{locale === 'uz' ? 'CSS fayl yoki <style> tegi oching' : 'Откройте CSS файл или тег <style>'}</li>
          <li>{locale === 'uz' ? 'Matn rangi uchun:' : 'Для цвета текста:'} <code>color: red;</code> {locale === 'uz' ? 'yozing' : 'напишите'}</li>
          <li>{locale === 'uz' ? 'Fon rangi uchun:' : 'Для цвета фона:'} <code>background-color: yellow;</code> {locale === 'uz' ? 'yozing' : 'напишите'}</li>
          <li>{locale === 'uz' ? 'Brauzerda yangilang - ko\'ring, rang o\'zgardi!' : 'Обновите браузер - посмотрите, цвет изменился!'}</li>
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
          <p style={{ color: '#FF0000' }}>{locale === 'uz' ? 'Qizil matn' : 'Красный текст'}</p>
          <p style={{ background: '#3498db', color: 'white', padding: '10px' }}>
            {locale === 'uz' ? 'Ko\'k fon, oq matn' : 'Синий фон, белый текст'}
          </p>
          <p
            style={{
              background: 'rgba(52, 152, 219, 0.3)',
              padding: '10px',
              border: '1px solid #3498db',
            }}
          >
            {locale === 'uz' ? 'Shaffof ko\'k fon' : 'Прозрачный синий фон'}
          </p>
        </div>
      </div>

      <h2>{t.common.whenToUse}</h2>
      <p>{c.whenToUse}</p>
      
      <div className="example-box" style={{ background: '#f3e5f5', borderColor: '#9c27b0' }}>
        <h4>🎯 {t.common.realWorldExample}</h4>
        <ul>
          <li><strong>{locale === 'uz' ? 'Xavfli xabar:' : 'Опасное сообщение:'}</strong> <code>color: red;</code> - {locale === 'uz' ? 'qizil rang' : 'красный цвет'}</li>
          <li><strong>{locale === 'uz' ? 'Ogohlantirish:' : 'Предупреждение:'}</strong> <code>color: orange;</code> - {locale === 'uz' ? 'sariq rang' : 'оранжевый цвет'}</li>
          <li><strong>{locale === 'uz' ? 'Muvaffaqiyat:' : 'Успех:'}</strong> <code>color: green;</code> - {locale === 'uz' ? 'yashil rang' : 'зеленый цвет'}</li>
          <li><strong>{locale === 'uz' ? 'Oddiy matn:' : 'Обычный текст:'}</strong> <code>color: black;</code> - {locale === 'uz' ? 'qora rang' : 'черный цвет'}</li>
        </ul>
      </div>

      <h3>🎨 {locale === 'uz' ? 'Rang yozish usullari (qaysi birini ishlatish kerak?):' : 'Способы записи цвета (какой использовать?):'}</h3>
      <ul>
        <li>
          <strong>{locale === 'uz' ? 'Rang nomi (eng oson!):' : 'Название цвета (самый простой!):'}</strong> <code>color: red;</code> - {locale === 'uz' ? 'faqat "red", "blue", "green" kabi oddiy ranglar.' : 'только простые цвета типа "red", "blue", "green".'} 
          <span style={{ color: '#4caf50' }}>✅ {locale === 'uz' ? 'Boshlang\'ich uchun eng yaxshi!' : 'Лучший для начинающих!'}</span>
        </li>
        <li>
          <strong>{locale === 'uz' ? 'Hex kod (eng keng qo\'llaniladi):' : 'Hex код (самый распространенный):'}</strong> <code>color: #FF0000;</code> - {locale === 'uz' ? '# belgisi bilan.' : 'с символом #.'} 
          <span style={{ color: '#2196f3' }}>💡 {locale === 'uz' ? 'Ko\'p ranglar bor, aniq ranglar.' : 'Много цветов, точные цвета.'}</span>
        </li>
        <li>
          <strong>{locale === 'uz' ? 'RGB (3 ta raqam):' : 'RGB (3 числа):'}</strong> <code>color: rgb(255, 0, 0);</code> - {locale === 'uz' ? 'qizil=255, yashil=0, ko\'k=0.' : 'красный=255, зеленый=0, синий=0.'} 
          <span style={{ color: '#9c27b0' }}>🔢 {locale === 'uz' ? 'Raqamlar bilan ishlashni yaxshi ko\'rsangiz.' : 'Если любите работать с числами.'}</span>
        </li>
        <li>
          <strong>{locale === 'uz' ? 'RGBA (shaffof rang):' : 'RGBA (прозрачный цвет):'}</strong> <code>color: rgba(255, 0, 0, 0.5);</code> - {locale === 'uz' ? 'oxirgi raqam shaffoflik (0.5 = 50%).' : 'последнее число - прозрачность (0.5 = 50%).'} 
          <span style={{ color: '#ff9800' }}>✨ {locale === 'uz' ? 'Orqa fon ko\'rinadigan rang kerak bo\'lsa.' : 'Если нужен цвет с видимым фоном.'}</span>
        </li>
      </ul>
      
      <div className="info-box">
        <strong>💡 {t.common.tip}</strong> {locale === 'uz' 
          ? 'Boshlang\'ich uchun rang nomini ishlating (red, blue). Keyinroq Hex kodni o\'rganing (#FF0000). Bu eng oson va eng keng qo\'llaniladi!'
          : 'Для начинающих используйте название цвета (red, blue). Потом изучите Hex код (#FF0000). Это самый простой и самый распространенный!'}
      </div>
    </TutorialLayout>
  )
}

