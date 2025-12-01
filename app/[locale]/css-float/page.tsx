import React from 'react'
import TutorialLayout from '@/components/TutorialLayout'
import { translations, Locale } from '@/lib/translations'

export default function CSSFloatPage({
  params,
}: {
  params: { locale: Locale }
}) {
  const locale = params?.locale || 'uz'
  const t = translations[locale] || translations.uz

  const content = {
    uz: {
      title: 'CSS Float',
      whatIs: `Float xususiyati elementni chap yoki o'ng tomonga suzib borishini ta'minlaydi. Matn element atrofida oqadi.`,
      howToUse: `float: left;, float: right;, float: none; ishlatiladi. Clear xususiyati float effektini bekor qiladi.`,
      whenToUse: `Rasm va matnni birga joylashtirish, layout yaratish (eski usul), lekin hozir flexbox va grid ishlatiladi.`,
    },
    ru: {
      title: 'CSS Float',
      whatIs: `Свойство float обеспечивает обтекание элемента слева или справа. Текст обтекает элемент вокруг.`,
      howToUse: `Используются float: left;, float: right;, float: none;. Свойство clear отменяет эффект float.`,
      whenToUse: `Используется для размещения изображений и текста вместе, создания макета (старый способ), но сейчас используются flexbox и grid.`,
    },
  }

  const c = content[locale] || content.uz

  return (
    <TutorialLayout
      locale={locale}
      translations={t}
      title={c.title}
      prevTopic={{ slug: 'css-overflow', title: t.css.overflow }}
    >
      <h2>{t.common.whatIs}</h2>
      <p>{c.whatIs}</p>

      <h2>{t.common.howToUse}</h2>
      <p>{c.howToUse}</p>

      <div className="example-box">
        <h4>{t.common.codeExample}</h4>
        <pre>
          <code>{`/* Float left */
img {
  float: left;
  margin-right: 20px;
}

/* Float right */
.sidebar {
  float: right;
  width: 300px;
}

/* Clear float */
.clearfix::after {
  content: "";
  display: table;
  clear: both;
}

/* Yoki */
.container {
  overflow: auto; /* Clear float */
}

/* Misol - Rasm va matn */
<div class="container">
  <img src="photo.jpg" style="float: left; margin-right: 20px;">
  <p>Matn rasm atrofida oqadi...</p>
</div>

/* Clear */
.clear {
  clear: both; /* Ikkala tomondan */
  clear: left; /* Chapdan */
  clear: right; /* O'ngdan */
}`}</code>
        </pre>
      </div>

      <div className="result-box">
        <h4>{t.common.result}</h4>
        <div style={{ border: '1px solid #ddd', padding: '15px', marginTop: '10px' }}>
          <div
            style={{
              float: 'left',
              width: '100px',
              height: '100px',
              background: '#667eea',
              marginRight: '15px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
            }}
          >
            Float left
          </div>
          <p>
            Bu matn float element atrofida oqadi. Float xususiyati elementni
            chap yoki o'ng tomonga suzib borishini ta'minlaydi. Matn element
            atrofida tabiiy ravishda oqadi.
          </p>
          <div style={{ clear: 'both' }}></div>
        </div>
      </div>

      <h2>{t.common.whenToUse}</h2>
      <p>{c.whenToUse}</p>

      <div className="info-box">
        <strong>Zamonaviy usul:</strong> Float eski layout usuli. Hozir flexbox
        va grid ishlatiladi. Float faqat rasm va matnni birga joylashtirish
        uchun qo'llaniladi.
      </div>

      <h3>Float qiymatlari:</h3>
      <ul>
        <li>
          <strong>left</strong> - chap tomonga suzadi
        </li>
        <li>
          <strong>right</strong> - o'ng tomonga suzadi
        </li>
        <li>
          <strong>none</strong> - float yo'q (default)
        </li>
      </ul>

      <h3>Clear xususiyati:</h3>
      <ul>
        <li>
          <strong>clear: both</strong> - ikkala tomondan float'ni bekor qiladi
        </li>
        <li>
          <strong>clear: left</strong> - chapdan
        </li>
        <li>
          <strong>clear: right</strong> - o'ngdan
        </li>
      </ul>
    </TutorialLayout>
  )
}

