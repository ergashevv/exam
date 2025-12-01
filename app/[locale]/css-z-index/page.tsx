import React from 'react'
import TutorialLayout from '@/components/TutorialLayout'
import { translations, Locale } from '@/lib/translations'

export default function CSSZIndexPage({
  params,
}: {
  params: { locale: Locale }
}) {
  const locale = params?.locale || 'uz'
  const t = translations[locale] || translations.uz

  const content = {
    uz: {
      title: 'CSS z-index Xususiyati',
      whatIs: `z-index elementning qatlam tartibini (stacking order) belgilaydi. Katta qiymat yuqorida, kichik qiymat pastda ko'rsatiladi.`,
      howToUse: `z-index: 1;, z-index: 999;, z-index: -1; kabi qiymatlar ishlatiladi. Faqat positioned elementlarda (relative, absolute, fixed) ishlaydi.`,
      whenToUse: `Overlay yaratish, modal oynalar, dropdown menular, tooltip'lar, elementlarni bir-birining ustiga qo'yishda ishlatiladi.`,
    },
    ru: {
      title: 'CSS Свойство z-index',
      whatIs: `z-index определяет порядок слоев (stacking order). Большее значение отображается сверху, меньшее - снизу.`,
      howToUse: `Используются значения типа z-index: 1;, z-index: 999;, z-index: -1;. Работает только на positioned элементах (relative, absolute, fixed).`,
      whenToUse: `Используется для создания overlay, модальных окон, выпадающих меню, подсказок, размещения элементов друг над другом.`,
    },
  }

  const c = content[locale]

  return (
    <TutorialLayout
      locale={locale}
      translations={t}
      title={c.title}
      prevTopic={{ slug: 'css-position', title: t.css.position }}
      nextTopic={{ slug: 'css-overflow', title: t.css.overflow }}
    >
      <h2>{t.common.whatIs}</h2>
      <p>{c.whatIs}</p>

      <h2>{t.common.howToUse}</h2>
      <p>{c.howToUse}</p>

      <div className="example-box">
        <h4>{t.common.codeExample}</h4>
        <pre>
          <code>{`/* Oddiy z-index */
.element {
  position: relative;
  z-index: 1;
}

/* Modal oyna */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
}

/* Overlay */
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
}

/* Dropdown */
.dropdown {
  position: absolute;
  z-index: 100;
}

/* Pastga yuborish */
.background {
  position: relative;
  z-index: -1;
}`}</code>
        </pre>
      </div>

      <div className="result-box">
        <h4>{t.common.result}</h4>
        <div
          style={{
            position: 'relative',
            height: '150px',
            border: '2px solid #ddd',
            marginTop: '10px',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: '20px',
              left: '20px',
              width: '100px',
              height: '100px',
              background: '#667eea',
              zIndex: 1,
            }}
          >
            z-index: 1
          </div>
          <div
            style={{
              position: 'absolute',
              top: '50px',
              left: '50px',
              width: '100px',
              height: '100px',
              background: '#764ba2',
              zIndex: 2,
            }}
          >
            z-index: 2 (yuqorida)
          </div>
        </div>
      </div>

      <h2>{t.common.whenToUse}</h2>
      <p>{c.whenToUse}</p>

      <div className="warning-box">
        <strong>Muhim:</strong> z-index faqat positioned elementlarda (position:
        relative, absolute, fixed, sticky) ishlaydi. Static elementlarda ishlamaydi.
      </div>
    </TutorialLayout>
  )
}

