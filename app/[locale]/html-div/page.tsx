import TutorialLayout from '@/components/TutorialLayout'
import { translations, Locale } from '@/lib/translations'

export default function HTMLDivPage({
  params,
}: {
  params: { locale: Locale }
}) {
  const locale = params?.locale || 'uz'
  const t = translations[locale] || translations.uz

  const content = {
    uz: {
      title: 'HTML Div Elementi',
      whatIs: `<div> elementi - bu universal konteyner bo'lib, boshqa elementlarni guruhlash va strukturani yaratish uchun ishlatiladi. U block elementdir.`,
      howToUse: `<div> tegi ochiladi va yopiladi, ichiga boshqa elementlar qo'yiladi. CSS yordamida dizayn va joylashuv boshqariladi.`,
      whenToUse: `Div elementlar layout yaratish, elementlarni guruhlash, CSS bilan dizayn qilish uchun ishlatiladi.`,
    },
    ru: {
      title: 'HTML Div Элемент',
      whatIs: `Элемент <div> - это универсальный контейнер, используемый для группировки других элементов и создания структуры. Это блочный элемент.`,
      howToUse: `Тег <div> открывается и закрывается, внутрь помещаются другие элементы. Дизайн и расположение управляются с помощью CSS.`,
      whenToUse: `Div элементы используются для создания макета, группировки элементов, дизайна с помощью CSS.`,
    },
  }

  const c = content[locale]

  return (
    <TutorialLayout
      locale={locale}
      translations={t}
      title={c.title}
      prevTopic={{ slug: 'html-block-inline', title: t.html.blockInline }}
      nextTopic={{ slug: 'html-class', title: t.html.classAttr }}
    >
      <h2>{t.common.whatIs}</h2>
      <p>{c.whatIs}</p>

      <h2>{t.common.howToUse}</h2>
      <p>{c.howToUse}</p>

      <div className="example-box">
        <h4>{t.common.codeExample}</h4>
        <pre>
          <code>{`<!-- Oddiy div -->
<div>
  <p>Bu div ichidagi paragraf</p>
</div>

<!-- CSS bilan div -->
<div style="background: #3498db; color: white; padding: 20px; border-radius: 8px;">
  <h2>Ko'k fonli div</h2>
  <p>Bu div CSS bilan bezatilgan</p>
</div>

<!-- Layout uchun div -->
<div style="display: flex; gap: 20px;">
  <div style="flex: 1; background: lightblue; padding: 15px;">
    Birinchi bo'lim
  </div>
  <div style="flex: 1; background: lightgreen; padding: 15px;">
    Ikkinchi bo'lim
  </div>
</div>

<!-- Ichki divlar -->
<div class="container">
  <div class="header">Sarlavha</div>
  <div class="content">Kontent</div>
  <div class="footer">Pastki qism</div>
</div>`}</code>
        </pre>
      </div>

      <div className="result-box">
        <h4>{t.common.result}</h4>
        <div
          style={{
            background: '#3498db',
            color: 'white',
            padding: '20px',
            borderRadius: '8px',
            marginBottom: '15px',
          }}
        >
          <h2 style={{ marginTop: 0 }}>Ko'k fonli div</h2>
          <p>Bu div CSS bilan bezatilgan</p>
        </div>
        <div style={{ display: 'flex', gap: '20px' }}>
          <div
            style={{
              flex: 1,
              background: 'lightblue',
              padding: '15px',
            }}
          >
            Birinchi bo'lim
          </div>
          <div
            style={{
              flex: 1,
              background: 'lightgreen',
              padding: '15px',
            }}
          >
            Ikkinchi bo'lim
          </div>
        </div>
      </div>

      <h2>{t.common.whenToUse}</h2>
      <p>{c.whenToUse}</p>

      <div className="info-box">
        <strong>Eslatma:</strong> Zamonaviy HTML5 da semantic elementlar
        (<code>&lt;header&gt;</code>, <code>&lt;section&gt;</code>,{' '}
        <code>&lt;article&gt;</code>, <code>&lt;footer&gt;</code>) ishlatish
        tavsiya etiladi, lekin <code>&lt;div&gt;</code> hali ham keng qo'llaniladi.
      </div>
    </TutorialLayout>
  )
}

