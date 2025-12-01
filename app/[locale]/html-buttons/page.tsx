import React from 'react'
import TutorialLayout from '@/components/TutorialLayout'
import { translations, Locale } from '@/lib/translations'

export default async function HTMLButtonsPage({
  params,
}: {
  params: { locale: Locale } | Promise<{ locale: Locale }>
}) {
  const resolvedParams = params instanceof Promise ? await params : params
  const locale = resolvedParams?.locale || 'uz'
  const t = translations[locale] || translations.uz

  const content = {
    uz: {
      title: 'HTML Tugmalar',
      whatIs: `HTML tugmalar foydalanuvchi interaksiyasi uchun ishlatiladi. <button> tegi yoki <input type="button"> yordamida yaratiladi.`,
      howToUse: `Tugmalar <button>Matn</button> yoki <input type="button" value="Matn"> formatida yaratiladi. onclick atributi yoki JavaScript bilan funksiya qo'shiladi.`,
      whenToUse: `Tugmalar formani yuborish, funksiyalarni ishga tushirish, foydalanuvchi harakatlarini boshqarish uchun ishlatiladi.`,
    },
    ru: {
      title: 'HTML Кнопки',
      whatIs: `HTML кнопки используются для взаимодействия с пользователем. Создаются с помощью тега <button> или <input type="button">.`,
      howToUse: `Кнопки создаются в формате <button>Текст</button> или <input type="button" value="Текст">. Функция добавляется через атрибут onclick или JavaScript.`,
      whenToUse: `Кнопки используются для отправки форм, запуска функций, управления действиями пользователя.`,
    },
  }

  const c = content[locale] || content.uz

  return (
    <TutorialLayout
      locale={locale}
      translations={t}
      title={c.title}
      prevTopic={{ slug: 'html-id', title: t.html.idAttr }}
      nextTopic={{ slug: 'html-iframes', title: t.html.iframes }}
    >
      <h2>{t.common.whatIs}</h2>
      <p>{c.whatIs}</p>

      <h2>{t.common.howToUse}</h2>
      <p>{c.howToUse}</p>

      <div className="example-box">
        <h4>{t.common.codeExample}</h4>
        <pre>
          <code>{locale === 'uz' 
            ? `<!-- Oddiy tugma -->
<button>Bosing</button>

<!-- Tugma turi -->
<button type="button">Oddiy tugma</button>
<button type="submit">Yuborish</button>
<button type="reset">Tozalash</button>

<!-- CSS bilan -->
<button style="background: #667eea; color: white; padding: 10px 20px; border: none; border-radius: 5px;">
  Chiroyli tugma
</button>

<!-- Disabled tugma -->
<button disabled>O'chirilgan tugma</button>

<!-- JavaScript bilan -->
<button onclick="alert('Salom!')">Bosing</button>

<!-- Input tugma -->
<input type="button" value="Input tugma">
<input type="submit" value="Yuborish">
<input type="reset" value="Tozalash">`
            : `<!-- Простая кнопка -->
<button>Нажмите</button>

<!-- Тип кнопки -->
<button type="button">Обычная кнопка</button>
<button type="submit">Отправить</button>
<button type="reset">Очистить</button>

<!-- С CSS -->
<button style="background: #667eea; color: white; padding: 10px 20px; border: none; border-radius: 5px;">
  Красивая кнопка
</button>

<!-- Отключенная кнопка -->
<button disabled>Отключенная кнопка</button>

<!-- С JavaScript -->
<button onclick="alert('Привет!')">Нажмите</button>

<!-- Input кнопка -->
<input type="button" value="Input кнопка">
<input type="submit" value="Отправить">
<input type="reset" value="Очистить">`}</code>
        </pre>
      </div>

      <div className="result-box">
        <h4>{t.common.result}</h4>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginTop: '10px' }}>
          <button>{locale === 'uz' ? 'Bosing' : 'Нажмите'}</button>
          <button
            style={{
              background: '#667eea',
              color: 'white',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            {locale === 'uz' ? 'Chiroyli tugma' : 'Красивая кнопка'}
          </button>
          <button disabled>{locale === 'uz' ? 'O\'chirilgan tugma' : 'Отключенная кнопка'}</button>
          <input type="button" value={locale === 'uz' ? 'Input tugma' : 'Input кнопка'} />
        </div>
      </div>

      <h2>{t.common.whenToUse}</h2>
      <p>{c.whenToUse}</p>

      <h3>{locale === 'uz' ? 'Tugma turlari:' : 'Типы кнопок:'}</h3>
      <ul>
        <li>
          <strong>type="button"</strong> - {locale === 'uz' ? 'oddiy tugma, hech narsa qilmaydi' : 'обычная кнопка, ничего не делает'}
        </li>
        <li>
          <strong>type="submit"</strong> - {locale === 'uz' ? 'formani yuboradi' : 'отправляет форму'}
        </li>
        <li>
          <strong>type="reset"</strong> - {locale === 'uz' ? 'formani tozalaydi' : 'очищает форму'}
        </li>
      </ul>
    </TutorialLayout>
  )
}

