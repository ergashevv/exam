import TutorialLayout from '@/components/TutorialLayout'
import { translations, Locale } from '@/lib/translations'

export default function CSSListsPage({
  params,
}: {
  params: { locale: Locale }
}) {
  const locale = params?.locale || 'uz'
  const t = translations[locale] || translations.uz

  const content = {
    uz: {
      title: "CSS Ro'yxatlar",
      whatIs: `CSS ro'yxatlar uchun markerlar, pozitsiya, rasm markerlar va boshqa dizayn xususiyatlarini boshqarish uchun ishlatiladi.`,
      howToUse: `list-style-type, list-style-position, list-style-image xususiyatlari yoki qisqa yozuv list-style ishlatiladi.`,
      whenToUse: `Ro'yxatlarni bezash, markerlarni o'zgartirish, custom markerlar yaratish uchun ishlatiladi.`,
    },
    ru: {
      title: 'CSS Списки',
      whatIs: `CSS используется для управления маркерами, позицией, изображениями маркеров и другими дизайнерскими свойствами для списков.`,
      howToUse: `Используются свойства list-style-type, list-style-position, list-style-image или краткая запись list-style.`,
      whenToUse: `Используется для оформления списков, изменения маркеров, создания пользовательских маркеров.`,
    },
  }

  const c = content[locale]

  return (
    <TutorialLayout
      locale={locale}
      translations={t}
      title={c.title}
      prevTopic={{ slug: 'css-tables', title: t.css.tables }}
      nextTopic={{ slug: 'css-display', title: t.css.display }}
    >
      <h2>{t.common.whatIs}</h2>
      <p>{c.whatIs}</p>

      <h2>{t.common.howToUse}</h2>
      <p>{c.howToUse}</p>

      <div className="example-box">
        <h4>{t.common.codeExample}</h4>
        <pre>
          <code>{`/* Marker turi */
list-style-type: disc;      /* To'ldirilgan doira */
list-style-type: circle;    /* Bo'sh doira */
list-style-type: square;    /* Kvadrat */
list-style-type: decimal;    /* Raqamlar */
list-style-type: lower-roman; /* Rim raqamlari */
list-style-type: none;       /* Yo'q */

/* Marker pozitsiyasi */
list-style-position: inside;  /* Ichida */
list-style-position: outside; /* Tashqarida */

/* Rasm marker */
list-style-image: url('bullet.png');

/* Qisqa yozuv */
list-style: square inside;

/* Marker yo'q */
ul {
  list-style: none;
  padding-left: 0;
}

li::before {
  content: "• ";
  color: #667eea;
  font-weight: bold;
}`}</code>
        </pre>
      </div>

      <div className="result-box">
        <h4>{t.common.result}</h4>
        <div style={{ display: 'grid', gap: '20px', marginTop: '10px' }}>
          <ul style={{ listStyleType: 'disc' }}>
            <li>To'ldirilgan doira</li>
            <li>Ikkinchi element</li>
          </ul>
          <ul style={{ listStyleType: 'circle' }}>
            <li>Bo'sh doira</li>
            <li>Ikkinchi element</li>
          </ul>
          <ol style={{ listStyleType: 'decimal' }}>
            <li>Raqamli ro'yxat</li>
            <li>Ikkinchi element</li>
          </ol>
          <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
            <li style={{ position: 'relative', paddingLeft: '20px' }}>
              <span
                style={{
                  position: 'absolute',
                  left: 0,
                  color: '#667eea',
                  fontWeight: 'bold',
                }}
              >
                •
              </span>
              Custom marker
            </li>
            <li style={{ position: 'relative', paddingLeft: '20px' }}>
              <span
                style={{
                  position: 'absolute',
                  left: 0,
                  color: '#667eea',
                  fontWeight: 'bold',
                }}
              >
                •
              </span>
              Ikkinchi element
            </li>
          </ul>
        </div>
      </div>

      <h2>{t.common.whenToUse}</h2>
      <p>{c.whenToUse}</p>
    </TutorialLayout>
  )
}

