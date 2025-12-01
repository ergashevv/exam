import React from 'react'
import TutorialLayout from '@/components/TutorialLayout'
import { translations, Locale } from '@/lib/translations'

export default function CSSPaddingPage({
  params,
}: {
  params: { locale: Locale }
}) {
  const locale = params?.locale || 'uz'
  const t = translations[locale] || translations.uz

  const content = {
    uz: {
      title: 'CSS Padding',
      whatIs: `Padding - bu elementning ICHKIDAGI bo'sh joy. Xuddi quti ichidagi matn va quti devori orasidagi masofa. Agar padding bo'lmasa, matn chegara ichida yopishib qoladi.`,
      simpleExplanation: `O'ylab ko'ring: sizga quti ichiga matn yozish kerak. Agar matn quti devoriga yopishib qolsa, o'qish qiyin bo'ladi. Padding - bu matn va devor orasidagi bo'sh joy!`,
      howToUse: `Qadam 1: <code>padding: 20px;</code> yozing - barcha tomonlarda 20px bo'sh joy. Qadam 2: <code>padding-left: 10px;</code> - faqat chapdan. Qadam 3: Brauzerda ko'ring - matn chegara ichida bo'sh joy oldi!`,
      whenToUse: `Har doim ishlating! Matn chegara ichida yopishib qolganda, o'qish qiyin bo'lganda. Masalan: tugma ichidagi matn, karta ichidagi matn.`,
      marginVsPadding: `Padding = ICHKIDAGI bo'sh joy (matn va chegara orasi). Margin = TASHQARIDAGI bo'sh joy (elementlar orasi).`,
    },
    ru: {
      title: 'CSS Padding',
      whatIs: `Padding - это пространство ВНУТРИ элемента. Как расстояние между текстом в коробке и стенкой коробки. Если padding нет, текст прилипает к границе.`,
      simpleExplanation: `Представьте: вам нужно написать текст в коробке. Если текст прилипнет к стенке коробки, читать будет трудно. Padding - это пространство между текстом и стенкой!`,
      howToUse: `Шаг 1: Напишите <code>padding: 20px;</code> - 20px пространства со всех сторон. Шаг 2: <code>padding-left: 10px;</code> - только слева. Шаг 3: Посмотрите в браузере - появилось пространство внутри элемента!`,
      whenToUse: `Используйте всегда! Когда текст прилипает к границе внутри, когда трудно читать. Например: текст внутри кнопки, текст внутри карточки.`,
      marginVsPadding: `Padding = пространство ВНУТРИ (между текстом и границей). Margin = пространство СНАРУЖИ (между элементами).`,
    },
  }

  const c = content[locale] || content.uz

  return (
    <TutorialLayout
      locale={locale}
      translations={t}
      title={c.title}
      prevTopic={{ slug: 'css-margins', title: t.css.margins }}
      nextTopic={{ slug: 'css-height-width', title: t.css.heightWidth }}
    >
      <h2>{t.common.whatIs}</h2>
      <p>{c.whatIs}</p>
      
      <div className="info-box" style={{ background: '#e8f5e9', borderLeftColor: '#4caf50' }}>
        <strong>💡 Oddiy tushuntirish:</strong> {c.simpleExplanation}
      </div>

      <h2>{t.common.howToUse}</h2>
      <p>{c.howToUse}</p>
      
      <div className="example-box" style={{ background: '#fff3e0', borderColor: '#ff9800' }}>
        <h4>📝 Qadam-baqadam:</h4>
        <ol>
          <li>CSS yozing: <code>padding: 20px;</code></li>
          <li>Bu degani: element ICHIDA barcha tomonlarda 20px bo'sh joy</li>
          <li>Brauzerda ko'ring - matn chegara ichida bo'sh joy oldi!</li>
        </ol>
        <p><strong>Yoki alohida tomonlar uchun:</strong></p>
        <ul>
          <li><code>padding-top: 10px;</code> - faqat yuqoridan</li>
          <li><code>padding-bottom: 10px;</code> - faqat pastdan</li>
          <li><code>padding-left: 10px;</code> - faqat chapdan</li>
          <li><code>padding-right: 10px;</code> - faqat o'ngdan</li>
        </ul>
      </div>

      <div className="example-box">
        <h4>{t.common.codeExample}</h4>
        <pre>
          <code>{`/* Barcha tomonlar */
padding: 20px;

/* Yuqori/pastki, chap/o'ng */
padding: 10px 20px;

/* Yuqori, chap/o'ng, pastki */
padding: 10px 20px 30px;

/* Yuqori, o'ng, pastki, chap */
padding: 10px 20px 30px 40px;

/* Alohida tomonlar */
padding-top: 20px;
padding-right: 15px;
padding-bottom: 10px;
padding-left: 5px;

/* Box-sizing bilan */
box-sizing: border-box; /* Padding o'lchamga kiritiladi */`}</code>
        </pre>
      </div>

      <div className="result-box">
        <h4>{t.common.result}</h4>
        <div style={{ display: 'grid', gap: '15px', marginTop: '10px' }}>
          <div
            style={{
              background: '#667eea',
              color: 'white',
              padding: '20px',
              border: '2px solid #333',
            }}
          >
            Padding: 20px (barcha tomonlar)
          </div>
          <div
            style={{
              background: '#764ba2',
              color: 'white',
              padding: '10px 30px',
              border: '2px solid #333',
            }}
          >
            Padding: 10px 30px (yuqori/pastki, chap/o'ng)
          </div>
          <div
            style={{
              background: '#3498db',
              color: 'white',
              padding: '5px 10px 15px 20px',
              border: '2px solid #333',
            }}
          >
            Padding: 5px 10px 15px 20px (yuqori, o'ng, pastki, chap)
          </div>
        </div>
      </div>

      <h2>{t.common.whenToUse}</h2>
      <p>{c.whenToUse}</p>
      
      <div className="example-box" style={{ background: '#f3e5f5', borderColor: '#9c27b0' }}>
        <h4>🎯 Real hayotdan misol:</h4>
        <p>Tugma yaratasiz va ichidagi matn chegara ichida yopishib qolgan. Nima qilish kerak?</p>
        <ul>
          <li>Tugmaga: <code>padding: 15px 30px;</code> qo'shing</li>
          <li>Bu degani: yuqori/pastki 15px, chap/o'ng 30px bo'sh joy</li>
          <li>Natija: Tugma ichidagi matn endi qulay o'qiladi!</li>
        </ul>
      </div>

      <div className="info-box" style={{ background: '#fff3e0', borderLeftColor: '#ff9800' }}>
        <strong>🤔 Margin vs Padding - farqi nima?</strong>
        <p style={{ marginTop: '10px' }}>{c.marginVsPadding}</p>
        <p style={{ marginTop: '10px' }}>
          <strong>Oddiy qoida:</strong> Agar matn chegara ICHIDA yopishib qolgan bo'lsa - Padding ishlating. 
          Agar elementlar bir-biriga TASHQARIDA yopishib qolgan bo'lsa - Margin ishlating.
        </p>
      </div>
      
      <div className="info-box">
        <strong>💡 Box-sizing nima?</strong>
        <p style={{ marginTop: '10px' }}>
          <code>box-sizing: border-box;</code> qo'shsangiz, padding va border elementning o'lchamiga kiritiladi. 
          Bu degani: agar width: 200px va padding: 20px bo'lsa, umumiy o'lcham 200px bo'ladi (padding ichida).
        </p>
        <p style={{ marginTop: '10px' }}><strong>Maslahat:</strong> Har doim <code>box-sizing: border-box;</code> ishlating - bu osonroq!</p>
      </div>
      
      <div className="result-box" style={{ background: '#e1f5fe', borderColor: '#0288d1' }}>
        <h4>👀 Ko'rib chiqing:</h4>
        <p>Yuqoridagi "Natija" bo'limida 3 ta div ko'rsatilgan. Birinchisida padding: 20px (barcha tomonlar), 
        ikkinchisida padding: 10px 30px (yuqori/pastki, chap/o'ng), uchinchisida padding: 5px 10px 15px 20px (yuqori, o'ng, pastki, chap).</p>
        <p style={{ marginTop: '10px' }}>Ko'ring, qanday farq bor! Matn chegara ichida bo'sh joy oldi.</p>
      </div>
    </TutorialLayout>
  )
}

