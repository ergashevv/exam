import React from 'react'
import TutorialLayout from '@/components/TutorialLayout'
import { translations, Locale } from '@/lib/translations'

export default function HTMLFormsPage({
  params,
}: {
  params: { locale: Locale }
}) {
  const locale = params?.locale || 'uz'
  const t = translations[locale] || translations.uz

  const content = {
    uz: {
      title: 'HTML Formalar',
      whatIs: `HTML formalar foydalanuvchidan ma'lumot olish uchun ishlatiladi. <form> tegi bilan yaratiladi va ichida turli input elementlar bo'ladi.`,
      howToUse: `<form> tegi ochiladi, action atributi ma'lumot yuboriladigan URL'ni, method atributi esa yuborish usulini (GET yoki POST) belgilaydi.`,
      whenToUse: `Formalar foydalanuvchi ma'lumotlarini to'plash, login, ro'yxatdan o'tish, fikr-mulohaza qoldirish uchun ishlatiladi.`,
    },
    ru: {
      title: 'HTML Формы',
      whatIs: `HTML формы используются для получения информации от пользователя. Создаются с помощью тега <form> и содержат различные элементы input.`,
      howToUse: `Тег <form> открывается, атрибут action определяет URL для отправки данных, атрибут method - способ отправки (GET или POST).`,
      whenToUse: `Формы используются для сбора пользовательских данных, входа, регистрации, оставления комментариев.`,
    },
  }

  const c = content[locale]

  return (
    <TutorialLayout
      locale={locale}
      translations={t}
      title={c.title}
      prevTopic={{ slug: 'html-iframes', title: t.html.iframes }}
      nextTopic={{ slug: 'html-input-types', title: t.html.inputTypes }}
    >
      <h2>{t.common.whatIs}</h2>
      <p>{c.whatIs}</p>

      <h2>{t.common.howToUse}</h2>
      <p>{c.howToUse}</p>

      <div className="example-box">
        <h4>{t.common.codeExample}</h4>
        <pre>
          <code>{`<!-- Oddiy forma -->
<form action="/submit" method="POST">
  <label for="name">Ism:</label>
  <input type="text" id="name" name="name" required>
  
  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required>
  
  <label for="message">Xabar:</label>
  <textarea id="message" name="message" rows="4" required></textarea>
  
  <button type="submit">Yuborish</button>
</form>

<!-- GET metodi -->
<form action="/search" method="GET">
  <input type="text" name="q" placeholder="Qidirish...">
  <button type="submit">Qidirish</button>
</form>

<!-- Checkbox va Radio -->
<form>
  <fieldset>
    <legend>Tanlovlar</legend>
    <input type="checkbox" id="option1" name="options" value="1">
    <label for="option1">Variant 1</label>
    
    <input type="radio" id="radio1" name="choice" value="1">
    <label for="radio1">Tanlov 1</label>
  </fieldset>
</form>`}</code>
        </pre>
      </div>

      <div className="result-box">
        <h4>{t.common.result}</h4>
        <form
          style={{
            maxWidth: '400px',
            padding: '20px',
            border: '1px solid #ddd',
            borderRadius: '8px',
          }}
        >
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="demo-name" style={{ display: 'block', marginBottom: '5px' }}>
              Ism:
            </label>
            <input
              type="text"
              id="demo-name"
              style={{
                width: '100%',
                padding: '8px',
                border: '1px solid #ddd',
                borderRadius: '4px',
              }}
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="demo-email" style={{ display: 'block', marginBottom: '5px' }}>
              Email:
            </label>
            <input
              type="email"
              id="demo-email"
              style={{
                width: '100%',
                padding: '8px',
                border: '1px solid #ddd',
                borderRadius: '4px',
              }}
            />
          </div>
          <button
            type="submit"
            style={{
              background: '#667eea',
              color: 'white',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            Yuborish
          </button>
        </form>
      </div>

      <h2>{t.common.whenToUse}</h2>
      <p>{c.whenToUse}</p>

      <h3>Form atributlari:</h3>
      <ul>
        <li>
          <strong>action</strong> - ma'lumot yuboriladigan URL
        </li>
        <li>
          <strong>method</strong> - GET (URL'da ko'rinadi) yoki POST (yashirin)
        </li>
        <li>
          <strong>enctype</strong> - fayl yuborish uchun "multipart/form-data"
        </li>
      </ul>
    </TutorialLayout>
  )
}

