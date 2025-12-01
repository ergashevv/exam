import React from 'react'
import TutorialLayout from '@/components/TutorialLayout'
import { translations, Locale } from '@/lib/translations'

export default function HTMLColorsPage({
  params,
}: {
  params: { locale: Locale }
}) {
  const locale = params?.locale || 'uz'
  const t = translations[locale] || translations.uz

  const content = {
    uz: {
      title: 'HTML Ranglar',
      whatIs: `HTML ranglar matn, fon va boshqa elementlarning rangini belgilash uchun ishlatiladi. Ranglar nom, hex kod, RGB yoki HSL formatida ko'rsatilishi mumkin.`,
      howToUse: `Ranglar style atributi yoki CSS yordamida belgilanadi. Eng keng tarqalgan usullar: rang nomi (red, blue), hex kod (#FF0000), RGB (rgb(255,0,0)) va HSL (hsl(0,100%,50%)).`,
      whenToUse: `Ranglar dizayn yaratishda, muhim ma'lumotlarni ajratib ko'rsatishda va foydalanuvchi e'tiborini jalb qilishda ishlatiladi.`,
    },
    ru: {
      title: 'HTML Цвета',
      whatIs: `HTML цвета используются для определения цвета текста, фона и других элементов. Цвета могут быть представлены в формате имени, hex кода, RGB или HSL.`,
      howToUse: `Цвета определяются с помощью атрибута style или CSS. Наиболее распространенные методы: имя цвета (red, blue), hex код (#FF0000), RGB (rgb(255,0,0)) и HSL (hsl(0,100%,50%)).`,
      whenToUse: `Цвета используются при создании дизайна, выделении важной информации и привлечении внимания пользователя.`,
    },
  }

  const c = content[locale] || content.uz

  return (
    <TutorialLayout
      locale={locale}
      translations={t}
      title={c.title}
      prevTopic={{ slug: 'html-paragraphs', title: t.html.paragraphs }}
      nextTopic={{ slug: 'html-styles', title: t.html.styles }}
    >
      <h2>{t.common.whatIs}</h2>
      <p>{c.whatIs}</p>

      <h2>{t.common.howToUse}</h2>
      <p>{c.howToUse}</p>

      <div className="example-box">
        <h4>{t.common.codeExample}</h4>
        <pre>
          <code>{locale === 'uz' 
            ? `<!-- Rang nomi -->
<p style="color: red;">Qizil matn</p>

<!-- Hex kod -->
<p style="color: #FF0000;">Qizil matn (hex)</p>

<!-- RGB -->
<p style="color: rgb(255, 0, 0);">Qizil matn (RGB)</p>

<!-- HSL -->
<p style="color: hsl(0, 100%, 50%);">Qizil matn (HSL)</p>

<!-- Fon rangi -->
<div style="background-color: #3498db; color: white; padding: 20px;">
  Ko'k fon, oq matn
</div>`
            : `<!-- Название цвета -->
<p style="color: red;">Красный текст</p>

<!-- Hex код -->
<p style="color: #FF0000;">Красный текст (hex)</p>

<!-- RGB -->
<p style="color: rgb(255, 0, 0);">Красный текст (RGB)</p>

<!-- HSL -->
<p style="color: hsl(0, 100%, 50%);">Красный текст (HSL)</p>

<!-- Цвет фона -->
<div style="background-color: #3498db; color: white; padding: 20px;">
  Синий фон, белый текст
</div>`}</code>
        </pre>
      </div>

      <div className="result-box">
        <h4>{t.common.result}</h4>
        <p style={{ color: 'red' }}>{locale === 'uz' ? 'Qizil matn' : 'Красный текст'}</p>
        <p style={{ color: '#FF0000' }}>{locale === 'uz' ? 'Qizil matn (hex)' : 'Красный текст (hex)'}</p>
        <p style={{ color: 'rgb(255, 0, 0)' }}>{locale === 'uz' ? 'Qizil matn (RGB)' : 'Красный текст (RGB)'}</p>
        <p style={{ color: 'hsl(0, 100%, 50%)' }}>{locale === 'uz' ? 'Qizil matn (HSL)' : 'Красный текст (HSL)'}</p>
        <div
          style={{
            backgroundColor: '#3498db',
            color: 'white',
            padding: '20px',
            marginTop: '10px',
            borderRadius: '4px',
          }}
        >
          {locale === 'uz' ? 'Ko\'k fon, oq matn' : 'Синий фон, белый текст'}
        </div>
      </div>

      <h2>{t.common.whenToUse}</h2>
      <p>{c.whenToUse}</p>

      <h3>{locale === 'uz' ? 'Rang formatlari:' : 'Форматы цветов:'}</h3>
      <ul>
        <li>
          <strong>{locale === 'uz' ? 'Rang nomi:' : 'Название цвета:'}</strong> {locale === 'uz' ? 'red, blue, green - oson, lekin cheklangan' : 'red, blue, green - просто, но ограничено'}
        </li>
        <li>
          <strong>{locale === 'uz' ? 'Hex kod:' : 'Hex код:'}</strong> {locale === 'uz' ? '#FF0000 - keng qo\'llaniladi, aniq ranglar' : '#FF0000 - широко используется, точные цвета'}
        </li>
        <li>
          <strong>RGB:</strong> {locale === 'uz' ? 'rgb(255,0,0) - qizil, yashil, ko\'k qiymatlari' : 'rgb(255,0,0) - значения красного, зеленого, синего'}
        </li>
        <li>
          <strong>HSL:</strong> {locale === 'uz' ? 'hsl(0,100%,50%) - hue, saturation, lightness' : 'hsl(0,100%,50%) - оттенок, насыщенность, яркость'}
        </li>
      </ul>
    </TutorialLayout>
  )
}

