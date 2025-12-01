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
        <strong>💡 {t.common.simpleExplanation}</strong> {c.simpleExplanation}
      </div>

      <h2>{t.common.howToUse}</h2>
      <p>{c.howToUse}</p>
      
      <div className="example-box" style={{ background: '#fff3e0', borderColor: '#ff9800' }}>
        <h4>📝 {t.common.stepByStep}</h4>
        <ol>
          <li>{locale === 'uz' ? 'CSS yozing:' : 'Напишите CSS:'} <code>padding: 20px;</code></li>
          <li>{locale === 'uz' ? 'Bu degani: element ICHIDA barcha tomonlarda 20px bo\'sh joy' : 'Это значит: 20px пространства ВНУТРИ элемента со всех сторон'}</li>
          <li>{locale === 'uz' ? 'Brauzerda ko\'ring - matn chegara ichida bo\'sh joy oldi!' : 'Посмотрите в браузере - появилось пространство внутри элемента!'}</li>
        </ol>
        <p><strong>{locale === 'uz' ? 'Yoki alohida tomonlar uchun:' : 'Или для отдельных сторон:'}</strong></p>
        <ul>
          <li><code>padding-top: 10px;</code> - {locale === 'uz' ? 'faqat yuqoridan' : 'только сверху'}</li>
          <li><code>padding-bottom: 10px;</code> - {locale === 'uz' ? 'faqat pastdan' : 'только снизу'}</li>
          <li><code>padding-left: 10px;</code> - {locale === 'uz' ? 'faqat chapdan' : 'только слева'}</li>
          <li><code>padding-right: 10px;</code> - {locale === 'uz' ? 'faqat o\'ngdan' : 'только справа'}</li>
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
            Padding: 20px ({locale === 'uz' ? 'barcha tomonlar' : 'все стороны'})
          </div>
          <div
            style={{
              background: '#764ba2',
              color: 'white',
              padding: '10px 30px',
              border: '2px solid #333',
            }}
          >
            Padding: 10px 30px ({locale === 'uz' ? 'yuqori/pastki, chap/o\'ng' : 'верх/низ, лево/право'})
          </div>
          <div
            style={{
              background: '#3498db',
              color: 'white',
              padding: '5px 10px 15px 20px',
              border: '2px solid #333',
            }}
          >
            Padding: 5px 10px 15px 20px ({locale === 'uz' ? 'yuqori, o\'ng, pastki, chap' : 'верх, право, низ, лево'})
          </div>
        </div>
      </div>

      <h2>{t.common.whenToUse}</h2>
      <p>{c.whenToUse}</p>
      
      <div className="example-box" style={{ background: '#f3e5f5', borderColor: '#9c27b0' }}>
        <h4>🎯 {t.common.realWorldExample}</h4>
        <p>{locale === 'uz' ? 'Tugma yaratasiz va ichidagi matn chegara ichida yopishib qolgan. Nima qilish kerak?' : 'Создаете кнопку и текст внутри прилип к границе. Что делать?'}</p>
        <ul>
          <li>{locale === 'uz' ? 'Tugmaga:' : 'Кнопке:'} <code>padding: 15px 30px;</code> {locale === 'uz' ? 'qo\'shing' : 'добавьте'}</li>
          <li>{locale === 'uz' ? 'Bu degani: yuqori/pastki 15px, chap/o\'ng 30px bo\'sh joy' : 'Это значит: верх/низ 15px, лево/право 30px пространства'}</li>
          <li>{locale === 'uz' ? 'Natija: Tugma ichidagi matn endi qulay o\'qiladi!' : 'Результат: Текст внутри кнопки теперь удобно читать!'}</li>
        </ul>
      </div>

      <div className="info-box" style={{ background: '#fff3e0', borderLeftColor: '#ff9800' }}>
        <strong>🤔 {locale === 'uz' ? 'Margin vs Padding - farqi nima?' : 'Margin vs Padding - в чем разница?'}</strong>
        <p style={{ marginTop: '10px' }}>{c.marginVsPadding}</p>
        <p style={{ marginTop: '10px' }}>
          <strong>{locale === 'uz' ? 'Oddiy qoida:' : 'Простое правило:'}</strong> {locale === 'uz' 
            ? 'Agar matn chegara ICHIDA yopishib qolgan bo\'lsa - Padding ishlating. Agar elementlar bir-biriga TASHQARIDA yopishib qolgan bo\'lsa - Margin ishlating.'
            : 'Если текст прилип к границе ВНУТРИ - используйте Padding. Если элементы прилипли друг к другу СНАРУЖИ - используйте Margin.'}
        </p>
      </div>
      
      <div className="info-box">
        <strong>💡 {locale === 'uz' ? 'Box-sizing nima?' : 'Что такое Box-sizing?'}</strong>
        <p style={{ marginTop: '10px' }}>
          {locale === 'uz' 
            ? '<code>box-sizing: border-box;</code> qo\'shsangiz, padding va border elementning o\'lchamiga kiritiladi. Bu degani: agar width: 200px va padding: 20px bo\'lsa, umumiy o\'lcham 200px bo\'ladi (padding ichida).'
            : 'Если добавите <code>box-sizing: border-box;</code>, padding и border включаются в размер элемента. Это значит: если width: 200px и padding: 20px, общий размер будет 200px (включая padding).'}
        </p>
        <p style={{ marginTop: '10px' }}><strong>{t.common.tip}</strong> {locale === 'uz' 
          ? 'Har doim <code>box-sizing: border-box;</code> ishlating - bu osonroq!'
          : 'Всегда используйте <code>box-sizing: border-box;</code> - это проще!'}</p>
      </div>
      
      <div className="result-box" style={{ background: '#e1f5fe', borderColor: '#0288d1' }}>
        <h4>👀 {t.common.takeALook}</h4>
        <p>{locale === 'uz' 
          ? `Yuqoridagi "${t.common.result}" bo'limida 3 ta div ko'rsatilgan. Birinchisida padding: 20px (barcha tomonlar), ikkinchisida padding: 10px 30px (yuqori/pastki, chap/o'ng), uchinchisida padding: 5px 10px 15px 20px (yuqori, o'ng, pastki, chap).`
          : `В разделе "${t.common.result}" выше показаны 3 div. В первом padding: 20px (все стороны), во втором padding: 10px 30px (верх/низ, лево/право), в третьем padding: 5px 10px 15px 20px (верх, право, низ, лево).`}</p>
        <p style={{ marginTop: '10px' }}>{locale === 'uz' ? 'Ko\'ring, qanday farq bor! Matn chegara ichida bo\'sh joy oldi.' : 'Посмотрите, какая разница! Появилось пространство внутри элемента.'}</p>
      </div>
    </TutorialLayout>
  )
}

