import React from 'react'
import TutorialLayout from '@/components/TutorialLayout'
import { translations, Locale } from '@/lib/translations'

export default function HTMLStylesPage({
  params,
}: {
  params: { locale: Locale }
}) {
  const locale = params?.locale || 'uz'
  const t = translations[locale] || translations.uz

  const content = {
    uz: {
      title: 'HTML Uslublar - CSS',
      whatIs: `HTML elementlariga uslub qo'shish uchun 3 ta usul mavjud: inline style, <style> tegi va tashqi CSS fayl. CSS (Cascading Style Sheets) HTML elementlarining ko'rinishini boshqaradi.`,
      howToUse: `1. Inline style - style atributi yordamida to'g'ridan-to'g'ri elementga qo'shiladi. 2. <style> tegi - <head> bo'limida yoziladi. 3. Tashqi CSS fayl - alohida .css fayl yaratiladi va <link> orqali ulashadi.`,
      whenToUse: `Inline style - kichik o'zgarishlar uchun. <style> tegi - bitta sahifa uchun. Tashqi CSS fayl - butun sayt uchun, eng yaxshi amaliyot.`,
    },
    ru: {
      title: 'HTML Стили - CSS',
      whatIs: `Существует 3 способа добавления стилей к HTML элементам: inline стили, тег <style> и внешний CSS файл. CSS (Cascading Style Sheets) управляет внешним видом HTML элементов.`,
      howToUse: `1. Inline стили - добавляются напрямую к элементу через атрибут style. 2. Тег <style> - пишется в секции <head>. 3. Внешний CSS файл - создается отдельный .css файл и подключается через <link>.`,
      whenToUse: `Inline стили - для небольших изменений. Тег <style> - для одной страницы. Внешний CSS файл - для всего сайта, лучшая практика.`,
    },
  }

  const c = content[locale] || content.uz

  return (
    <TutorialLayout
      locale={locale}
      translations={t}
      title={c.title}
      prevTopic={{ slug: 'html-colors', title: t.html.colors }}
      nextTopic={{ slug: 'html-links', title: t.html.links }}
    >
      <h2>{t.common.whatIs}</h2>
      <p>{c.whatIs}</p>

      <h2>{t.common.howToUse}</h2>
      <p>{c.howToUse}</p>

      <h3>1. Inline Style</h3>
      <div className="example-box">
        <h4>{t.common.codeExample}</h4>
        <pre>
          <code>{`<p style="color: blue; font-size: 20px;">Bu ko'k rangdagi matn</p>
<div style="background-color: yellow; padding: 15px;">
  Sariq fonli div
</div>`}</code>
        </pre>
      </div>

      <h3>2. Style Tegi</h3>
      <div className="example-box">
        <h4>{t.common.codeExample}</h4>
        <pre>
          <code>{`<head>
  <style>
    .my-class {
      color: red;
      font-size: 18px;
    }
    #my-id {
      background-color: lightblue;
    }
  </style>
</head>
<body>
  <p class="my-class">Qizil matn</p>
  <div id="my-id">Och ko'k fon</div>
</body>`}</code>
        </pre>
      </div>

      <h3>3. Tashqi CSS Fayl</h3>
      <div className="example-box">
        <h4>{t.common.codeExample}</h4>
        <pre>
          <code>{`<!-- HTML fayl -->
<head>
  <link rel="stylesheet" href="styles.css">
</head>

/* styles.css fayl */
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 20px;
}

.header {
  background-color: #333;
  color: white;
  padding: 20px;
}`}</code>
        </pre>
      </div>

      <h2>{t.common.whenToUse}</h2>
      <p>{c.whenToUse}</p>

      <div className="info-box">
        <strong>{locale === 'uz' ? 'Yaxshi amaliyot:' : 'Хорошая практика:'}</strong> {locale === 'uz' 
          ? 'Tashqi CSS fayl ishlatish eng yaxshi usul, chunki u kodni tashkil qiladi, qayta ishlatishni osonlashtiradi va sahifa yuklanish tezligini yaxshilaydi.'
          : 'Использование внешнего CSS файла - лучший способ, так как он организует код, облегчает повторное использование и улучшает скорость загрузки страницы.'}
      </div>
    </TutorialLayout>
  )
}

