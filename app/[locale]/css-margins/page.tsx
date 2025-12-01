import React from 'react'
import TutorialLayout from '@/components/TutorialLayout'
import { translations, Locale } from '@/lib/translations'

export default function CSSMarginsPage({
  params,
}: {
  params: { locale: Locale }
}) {
  const locale = params?.locale || 'uz'
  const t = translations[locale] || translations.uz

  const content = {
    uz: {
      title: 'CSS Margin',
      whatIs: `Margin - bu elementning TASHQARIDAGI bo'sh joy. Xuddi ikki quti orasidagi masofa. Agar margin bo'lmasa, elementlar bir-biriga yopishib qoladi.`,
      simpleExplanation: `O'ylab ko'ring: sizga 2 ta quti qo'yish kerak. Agar ular orasida bo'sh joy bo'lmasa, ular bir-biriga yopishib qoladi. Margin - bu shu bo'sh joy!`,
      howToUse: `Qadam 1: <code>margin: 20px;</code> yozing - barcha tomonlarda 20px bo'sh joy. Qadam 2: <code>margin-top: 10px;</code> - faqat yuqoridan. Qadam 3: Brauzerda ko'ring - elementlar orasida bo'sh joy paydo bo'ldi!`,
      whenToUse: `Har doim ishlating! Elementlar bir-biriga yopishib qolganda, orasiga bo'sh joy kerak bo'lganda. Masalan: 2 ta paragraf orasida, rasm va matn orasida.`,
      marginVsPadding: `Margin = TASHQARIDAGI bo'sh joy (elementlar orasi). Padding = ICHKIDAGI bo'sh joy (matn va chegara orasi).`,
    },
    ru: {
      title: 'CSS Margin',
      whatIs: `Margin - это пространство СНАРУЖИ элемента. Как расстояние между двумя коробками. Если margin нет, элементы прилипают друг к другу.`,
      simpleExplanation: `Представьте: вам нужно поставить 2 коробки. Если между ними нет пространства, они прилипнут друг к другу. Margin - это это пространство!`,
      howToUse: `Шаг 1: Напишите <code>margin: 20px;</code> - 20px пространства со всех сторон. Шаг 2: <code>margin-top: 10px;</code> - только сверху. Шаг 3: Посмотрите в браузере - появилось пространство между элементами!`,
      whenToUse: `Используйте всегда! Когда элементы прилипают друг к другу, когда нужно пространство между ними. Например: между 2 параграфами, между изображением и текстом.`,
      marginVsPadding: `Margin = пространство СНАРУЖИ (между элементами). Padding = пространство ВНУТРИ (между текстом и границей).`,
    },
  }

  const c = content[locale] || content.uz

  return (
    <TutorialLayout
      locale={locale}
      translations={t}
      title={c.title}
      prevTopic={{ slug: 'css-borders', title: t.css.borders }}
      nextTopic={{ slug: 'css-padding', title: t.css.padding }}
    >
      <h2>{t.common.whatIs}</h2>
      <p>{c.whatIs}</p>
      
      <div className="info-box" style={{ background: '#e8f5e9', borderLeftColor: '#4caf50' }}>
        <strong>💡 {t.common.simpleExplanation}</strong> {c.simpleExplanation}
      </div>

      <h2>{t.common.howToUse}</h2>
      <p>{c.howToUse}</p>
      
      <div className="example-box" style={{ background: '#fff3e0', borderColor: '#ff9800' }}>
        <h4>📝 {t.common.stepByStep}</h4>
        <ol>
          <li>{locale === 'uz' ? 'CSS yozing:' : 'Напишите CSS:'} <code>margin: 20px;</code></li>
          <li>{locale === 'uz' ? 'Bu degani: barcha tomonlarda 20px bo\'sh joy' : 'Это значит: 20px пространства со всех сторон'}</li>
          <li>{locale === 'uz' ? 'Brauzerda ko\'ring - element atrofida bo\'sh joy paydo bo\'ldi!' : 'Посмотрите в браузере - появилось пространство вокруг элемента!'}</li>
        </ol>
        <p><strong>{locale === 'uz' ? 'Yoki alohida tomonlar uchun:' : 'Или для отдельных сторон:'}</strong></p>
        <ul>
          <li><code>margin-top: 10px;</code> - {locale === 'uz' ? 'faqat yuqoridan' : 'только сверху'}</li>
          <li><code>margin-bottom: 10px;</code> - {locale === 'uz' ? 'faqat pastdan' : 'только снизу'}</li>
          <li><code>margin-left: 10px;</code> - {locale === 'uz' ? 'faqat chapdan' : 'только слева'}</li>
          <li><code>margin-right: 10px;</code> - {locale === 'uz' ? 'faqat o\'ngdan' : 'только справа'}</li>
        </ul>
      </div>

      <div className="example-box">
        <h4>{t.common.codeExample}</h4>
        <pre>
          <code>{`/* Barcha tomonlar */
margin: 20px;

/* Yuqori/pastki, chap/o'ng */
margin: 10px 20px;

/* Yuqori, chap/o'ng, pastki */
margin: 10px 20px 30px;

/* Yuqori, o'ng, pastki, chap */
margin: 10px 20px 30px 40px;

/* Alohida tomonlar */
margin-top: 20px;
margin-right: 15px;
margin-bottom: 10px;
margin-left: 5px;

/* Auto - markazga joylashtirish */
margin: 0 auto; /* Gorizontal markaz */

/* Manfiy margin */
margin-top: -10px; /* Elementlarni bir-biriga yaqinlashtiradi */`}</code>
        </pre>
      </div>

      <div className="result-box">
        <h4>{t.common.result}</h4>
        <div style={{ border: '1px solid #ddd', padding: '20px' }}>
          <div
            style={{
              background: '#667eea',
              color: 'white',
              padding: '15px',
              margin: '20px',
            }}
          >
            Margin: 20px ({locale === 'uz' ? 'barcha tomonlar' : 'все стороны'})
          </div>
          <div
            style={{
              background: '#764ba2',
              color: 'white',
              padding: '15px',
              margin: '10px 30px',
            }}
          >
            Margin: 10px 30px ({locale === 'uz' ? 'yuqori/pastki, chap/o\'ng' : 'верх/низ, лево/право'})
          </div>
          <div
            style={{
              background: '#3498db',
              color: 'white',
              padding: '15px',
              margin: '0 auto',
              maxWidth: '300px',
            }}
          >
            Margin: 0 auto ({locale === 'uz' ? 'markazga' : 'по центру'})
          </div>
        </div>
      </div>

      <h2>{t.common.whenToUse}</h2>
      <p>{c.whenToUse}</p>
      
      <div className="example-box" style={{ background: '#f3e5f5', borderColor: '#9c27b0' }}>
        <h4>🎯 {t.common.realWorldExample}</h4>
        <p>{locale === 'uz' ? '2 ta paragraf bor va ular bir-biriga yopishib qolgan. Nima qilish kerak?' : 'Есть 2 параграфа и они прилипли друг к другу. Что делать?'}</p>
        <ul>
          <li>{locale === 'uz' ? 'Birinchi paragrafga:' : 'Первому параграфу:'} <code>margin-bottom: 20px;</code> {locale === 'uz' ? 'qo\'shing' : 'добавьте'}</li>
          <li>{locale === 'uz' ? 'Yoki ikkinchi paragrafga:' : 'Или второму параграфу:'} <code>margin-top: 20px;</code> {locale === 'uz' ? 'qo\'shing' : 'добавьте'}</li>
          <li>{locale === 'uz' ? 'Natija:' : 'Результат:'} {locale === 'uz' ? 'Paragraflar orasida 20px bo\'sh joy bo\'ladi!' : 'Между параграфами будет 20px пространства!'}</li>
        </ul>
      </div>

      <div className="info-box" style={{ background: '#fff3e0', borderLeftColor: '#ff9800' }}>
        <strong>🤔 {locale === 'uz' ? 'Margin vs Padding - farqi nima?' : 'Margin vs Padding - в чем разница?'}</strong>
        <p style={{ marginTop: '10px' }}>{c.marginVsPadding}</p>
        <p style={{ marginTop: '10px' }}>
          <strong>{locale === 'uz' ? 'Oddiy qoida:' : 'Простое правило:'}</strong> {locale === 'uz' 
            ? 'Agar elementlar bir-biriga yopishib qolgan bo\'lsa - Margin ishlating. Agar matn chegara ichida yopishib qolgan bo\'lsa - Padding ishlating.'
            : 'Если элементы прилипли друг к другу - используйте Margin. Если текст прилип к границе внутри - используйте Padding.'}
        </p>
      </div>
      
      <div className="result-box" style={{ background: '#e1f5fe', borderColor: '#0288d1' }}>
        <h4>👀 {t.common.takeALook}</h4>
        <p>{locale === 'uz' 
          ? `Yuqoridagi "${t.common.result}" bo'limida 3 ta div ko'rsatilgan. Birinchisida margin: 20px (barcha tomonlar), ikkinchisida margin: 10px 30px (yuqori/pastki, chap/o'ng), uchinchisida margin: 0 auto (markazga).`
          : `В разделе "${t.common.result}" выше показаны 3 div. В первом margin: 20px (все стороны), во втором margin: 10px 30px (верх/низ, лево/право), в третьем margin: 0 auto (по центру).`}</p>
        <p style={{ marginTop: '10px' }}>{locale === 'uz' ? 'Ko\'ring, qanday farq bor!' : 'Посмотрите, какая разница!'}</p>
      </div>
    </TutorialLayout>
  )
}

