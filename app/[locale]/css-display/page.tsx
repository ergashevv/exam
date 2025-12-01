import TutorialLayout from '@/components/TutorialLayout'
import { translations, Locale } from '@/lib/translations'

export default function CSSDisplayPage({
  params,
}: {
  params: { locale: Locale }
}) {
  const locale = params?.locale || 'uz'
  const t = translations[locale] || translations.uz

  const content = {
    uz: {
      title: 'CSS Display Xususiyati',
      whatIs: `Display xususiyati elementning ko'rinishini va layout'dagi o'rnini belgilaydi. Block, inline, flex, grid va boshqa qiymatlar mavjud.`,
      howToUse: `display: block;, display: inline;, display: flex;, display: grid;, display: none; va boshqa qiymatlar ishlatiladi.`,
      whenToUse: `Layout yaratish, elementlarni joylashtirish, responsive dizayn, flexbox va grid layout uchun ishlatiladi.`,
    },
    ru: {
      title: 'CSS Свойство display',
      whatIs: `Свойство display определяет способ отображения элемента и его место в макете. Существуют значения block, inline, flex, grid и другие.`,
      howToUse: `Используются display: block;, display: inline;, display: flex;, display: grid;, display: none; и другие значения.`,
      whenToUse: `Используется для создания макета, размещения элементов, адаптивного дизайна, flexbox и grid layout.`,
    },
  }

  const c = content[locale]

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

      <h2>{t.common.howToUse}</h2>
      <p>{c.howToUse}</p>

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

      <h3>Asosiy display qiymatlari:</h3>
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

