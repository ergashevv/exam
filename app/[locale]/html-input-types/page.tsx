import React from 'react'
import TutorialLayout from '@/components/TutorialLayout'
import { translations, Locale } from '@/lib/translations'

export default async function HTMLInputTypesPage({
  params,
}: {
  params: { locale: Locale } | Promise<{ locale: Locale }>
}) {
  const resolvedParams = params instanceof Promise ? await params : params
  const locale = resolvedParams?.locale || 'uz'
  const t = translations[locale] || translations.uz

  const content = {
    uz: {
      title: 'HTML Input Types',
      whatIs: `HTML input elementlari turli xil ma'lumotlarni olish uchun ishlatiladi. type atributi input turini belgilaydi.`,
      howToUse: `<input type="text">, <input type="email">, <input type="password"> va boshqa turlar mavjud. Har bir tur o'ziga xos funksiyaga ega.`,
      whenToUse: `Har xil input turlari turli ma'lumotlar uchun ishlatiladi: matn, email, parol, sana, raqam va boshqalar.`,
    },
    ru: {
      title: 'HTML Input Types',
      whatIs: `HTML элементы input используются для получения различных данных. Атрибут type определяет тип input.`,
      howToUse: `Существуют <input type="text">, <input type="email">, <input type="password"> и другие типы. Каждый тип имеет свою функцию.`,
      whenToUse: `Различные типы input используются для разных данных: текст, email, пароль, дата, число и другие.`,
    },
  }

  const c = content[locale] || content.uz

  return (
    <TutorialLayout
      locale={locale}
      translations={t}
      title={c.title}
      prevTopic={{ slug: 'html-forms', title: t.html.forms }}
      nextTopic={{ slug: 'css-colors', title: t.css.colors }}
    >
      <h2>{t.common.whatIs}</h2>
      <p>{c.whatIs}</p>

      <h2>{t.common.howToUse}</h2>
      <p>{c.howToUse}</p>

      <div className="example-box">
        <h4>{t.common.codeExample}</h4>
        <pre>
          <code>{locale === 'uz' 
            ? `<!-- Matn -->
<input type="text" placeholder="Ismingizni kiriting">

<!-- Email -->
<input type="email" placeholder="email@example.com">

<!-- Parol -->
<input type="password" placeholder="Parol">

<!-- Raqam -->
<input type="number" min="0" max="100" step="1">

<!-- Sana -->
<input type="date">

<!-- Vaqt -->
<input type="time">

<!-- Rang -->
<input type="color">

<!-- Checkbox -->
<input type="checkbox" id="check1">
<label for="check1">Tanlov</label>

<!-- Radio -->
<input type="radio" id="radio1" name="choice" value="1">
<label for="radio1">Variant 1</label>

<!-- Fayl -->
<input type="file" accept="image/*">

<!-- Range -->
<input type="range" min="0" max="100" value="50">

<!-- Search -->
<input type="search" placeholder="Qidirish...">

<!-- URL -->
<input type="url" placeholder="https://example.com">

<!-- Telefon -->
<input type="tel" placeholder="+998901234567">`
            : `<!-- Текст -->
<input type="text" placeholder="Введите ваше имя">

<!-- Email -->
<input type="email" placeholder="email@example.com">

<!-- Пароль -->
<input type="password" placeholder="Пароль">

<!-- Число -->
<input type="number" min="0" max="100" step="1">

<!-- Дата -->
<input type="date">

<!-- Время -->
<input type="time">

<!-- Цвет -->
<input type="color">

<!-- Checkbox -->
<input type="checkbox" id="check1">
<label for="check1">Выбор</label>

<!-- Radio -->
<input type="radio" id="radio1" name="choice" value="1">
<label for="radio1">Вариант 1</label>

<!-- Файл -->
<input type="file" accept="image/*">

<!-- Range -->
<input type="range" min="0" max="100" value="50">

<!-- Поиск -->
<input type="search" placeholder="Поиск...">

<!-- URL -->
<input type="url" placeholder="https://example.com">

<!-- Телефон -->
<input type="tel" placeholder="+79991234567">`}</code>
        </pre>
      </div>

      <div className="result-box">
        <h4>{t.common.result}</h4>
        <div style={{ display: 'grid', gap: '15px', maxWidth: '400px' }}>
          <input
            type="text"
            placeholder={locale === 'uz' ? 'Ismingizni kiriting' : 'Введите ваше имя'}
            style={{ padding: '8px', border: '1px solid #ddd', borderRadius: '4px' }}
          />
          <input
            type="email"
            placeholder="email@example.com"
            style={{ padding: '8px', border: '1px solid #ddd', borderRadius: '4px' }}
          />
          <input
            type="password"
            placeholder={locale === 'uz' ? 'Parol' : 'Пароль'}
            style={{ padding: '8px', border: '1px solid #ddd', borderRadius: '4px' }}
          />
          <input
            type="number"
            placeholder={locale === 'uz' ? 'Raqam' : 'Число'}
            min="0"
            max="100"
            style={{ padding: '8px', border: '1px solid #ddd', borderRadius: '4px' }}
          />
          <input
            type="date"
            style={{ padding: '8px', border: '1px solid #ddd', borderRadius: '4px' }}
          />
          <input
            type="color"
            style={{ padding: '8px', border: '1px solid #ddd', borderRadius: '4px', height: '40px' }}
          />
          <div>
            <input type="checkbox" id="demo-check" />
            <label htmlFor="demo-check" style={{ marginLeft: '5px' }}>
              {locale === 'uz' ? 'Checkbox tanlov' : 'Выбор checkbox'}
            </label>
          </div>
          <input
            type="range"
            min="0"
            max="100"
            defaultValue="50"
            style={{ width: '100%' }}
          />
        </div>
      </div>

      <h2>{t.common.whenToUse}</h2>
      <p>{c.whenToUse}</p>

      <h3>{locale === 'uz' ? 'Asosiy input turlari:' : 'Основные типы input:'}</h3>
      <ul>
        <li>
          <strong>text</strong> - {locale === 'uz' ? 'oddiy matn' : 'обычный текст'}
        </li>
        <li>
          <strong>email</strong> - {locale === 'uz' ? 'email manzil (validatsiya)' : 'email адрес (валидация)'}
        </li>
        <li>
          <strong>password</strong> - {locale === 'uz' ? 'parol (yashirin)' : 'пароль (скрыто)'}
        </li>
        <li>
          <strong>number</strong> - {locale === 'uz' ? 'raqam' : 'число'}
        </li>
        <li>
          <strong>date</strong> - {locale === 'uz' ? 'sana' : 'дата'}
        </li>
        <li>
          <strong>checkbox</strong> - {locale === 'uz' ? 'ko\'p tanlov' : 'множественный выбор'}
        </li>
        <li>
          <strong>radio</strong> - {locale === 'uz' ? 'bitta tanlov' : 'один выбор'}
        </li>
        <li>
          <strong>file</strong> - {locale === 'uz' ? 'fayl yuklash' : 'загрузка файла'}
        </li>
        <li>
          <strong>submit</strong> - {locale === 'uz' ? 'yuborish tugmasi' : 'кнопка отправки'}
        </li>
      </ul>
    </TutorialLayout>
  )
}

