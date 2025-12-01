import TutorialLayout from '@/components/TutorialLayout'
import { translations, Locale } from '@/lib/translations'

export default function HTMLBlockInlinePage({
  params,
}: {
  params: { locale: Locale }
}) {
  const locale = params?.locale || 'uz'
  const t = translations[locale] || translations.uz

  const content = {
    uz: {
      title: 'HTML Block va Inline Elementlar',
      whatIs: `HTML elementlar ikkita asosiy turga bo'linadi: block (blok) va inline (satr ichida). Block elementlar yangi qatordan boshlanadi va to'liq kenglikni egallaydi. Inline elementlar esa matn ichida joylashadi.`,
      howToUse: `Block elementlar: <div>, <p>, <h1>-<h6>, <ul>, <ol>, <li>, <table> va boshqalar. Inline elementlar: <span>, <a>, <img>, <strong>, <em>, <code> va boshqalar.`,
      whenToUse: `Block elementlar strukturani yaratish, bo'limlarni ajratish uchun. Inline elementlar matn ichidagi kichik o'zgarishlar, havolalar uchun.`,
    },
    ru: {
      title: 'HTML Блочные и Строчные Элементы',
      whatIs: `HTML элементы делятся на два основных типа: block (блочные) и inline (строчные). Блочные элементы начинаются с новой строки и занимают всю ширину. Строчные элементы размещаются внутри текста.`,
      howToUse: `Блочные элементы: <div>, <p>, <h1>-<h6>, <ul>, <ol>, <li>, <table> и другие. Строчные элементы: <span>, <a>, <img>, <strong>, <em>, <code> и другие.`,
      whenToUse: `Блочные элементы - для создания структуры, разделения секций. Строчные элементы - для небольших изменений внутри текста, ссылок.`,
    },
  }

  const c = content[locale]

  return (
    <TutorialLayout
      locale={locale}
      translations={t}
      title={c.title}
      prevTopic={{ slug: 'html-lists', title: t.html.lists }}
      nextTopic={{ slug: 'html-div', title: t.html.div }}
    >
      <h2>{t.common.whatIs}</h2>
      <p>{c.whatIs}</p>

      <h2>{t.common.howToUse}</h2>
      <p>{c.howToUse}</p>

      <div className="example-box">
        <h4>{t.common.codeExample}</h4>
        <pre>
          <code>{`<!-- Block elementlar -->
<div style="background: lightblue; padding: 10px; margin: 10px 0;">
  Bu block element - to'liq kenglikni egallaydi
</div>
<p style="background: lightgreen; padding: 10px;">
  Bu ham block element
</p>

<!-- Inline elementlar -->
<p>
  Bu oddiy matn, <span style="color: red; font-weight: bold;">qizil matn</span> va 
  <a href="#" style="color: blue;">havola</a> inline elementlar.
</p>

<!-- Block va inline birga -->
<div style="border: 2px solid #333; padding: 15px;">
  <h3>Block element ichida</h3>
  <p>
    Bu paragraf ham block element. 
    <span style="background: yellow;">Span inline element</span> va 
    <strong>strong ham inline</strong>.
  </p>
</div>`}</code>
        </pre>
      </div>

      <div className="result-box">
        <h4>{t.common.result}</h4>
        <div
          style={{
            background: 'lightblue',
            padding: '10px',
            margin: '10px 0',
          }}
        >
          Bu block element - to'liq kenglikni egallaydi
        </div>
        <p style={{ background: 'lightgreen', padding: '10px' }}>
          Bu ham block element
        </p>
        <p style={{ marginTop: '15px' }}>
          Bu oddiy matn,{' '}
          <span style={{ color: 'red', fontWeight: 'bold' }}>qizil matn</span>{' '}
          va <a href="#" style={{ color: 'blue' }}>havola</a> inline elementlar.
        </p>
        <div
          style={{
            border: '2px solid #333',
            padding: '15px',
            marginTop: '15px',
          }}
        >
          <h3 style={{ marginTop: 0 }}>Block element ichida</h3>
          <p>
            Bu paragraf ham block element.{' '}
            <span style={{ background: 'yellow' }}>Span inline element</span>{' '}
            va <strong>strong ham inline</strong>.
          </p>
        </div>
      </div>

      <h2>{t.common.whenToUse}</h2>
      <p>{c.whenToUse}</p>

      <h3>Asosiy farqlar:</h3>
      <table
        style={{
          width: '100%',
          borderCollapse: 'collapse',
          marginTop: '15px',
        }}
        border={1}
      >
        <thead>
          <tr style={{ background: '#667eea', color: 'white' }}>
            <th style={{ padding: '10px' }}>Xususiyat</th>
            <th style={{ padding: '10px' }}>Block</th>
            <th style={{ padding: '10px' }}>Inline</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ padding: '10px' }}>Qatordan boshlash</td>
            <td style={{ padding: '10px' }}>Ha</td>
            <td style={{ padding: '10px' }}>Yo'q</td>
          </tr>
          <tr>
            <td style={{ padding: '10px' }}>Kenglik</td>
            <td style={{ padding: '10px' }}>100%</td>
            <td style={{ padding: '10px' }}>Kontentga mos</td>
          </tr>
          <tr>
            <td style={{ padding: '10px' }}>Margin/Padding</td>
            <td style={{ padding: '10px' }}>Barcha tomonlarda</td>
            <td style={{ padding: '10px' }}>Faqat chap/o'ng</td>
          </tr>
        </tbody>
      </table>
    </TutorialLayout>
  )
}

