import React from 'react'
import TutorialLayout from '@/components/TutorialLayout'
import { translations, Locale } from '@/lib/translations'

export default function HTMLHeadingsPage({
  params,
}: {
  params: { locale: Locale }
}) {
  const locale = params?.locale || 'uz'
  const t = translations[locale] || translations.uz

  const content = {
    uz: {
      title: 'HTML Sarlavhalar',
      whatIs: `HTML sarlavhalar matnni muhimligiga ko'ra tuzilishga yordam beradi. <h1> dan <h6> gacha 6 ta sarlavha darajasi mavjud, bu yerda <h1> eng muhim va eng katta, <h6> esa eng kam muhim va eng kichik.`,
      howToUse: `Sarlavhalarni <h1> dan <h6> gacha teglar yordamida yaratasiz. <h1> faqat bir marta, sahifa sarlavhasi sifatida ishlatilishi kerak. Qolgan sarlavhalar esa kerak bo'lganda bir necha marta ishlatilishi mumkin.`,
      whenToUse: `Sarlavhalar sahifa strukturasini yaratishda, SEO optimizatsiyasida va foydalanuvchilar uchun kontentni tushunishda muhim rol o'ynaydi. Har bir bo'lim uchun mos darajadagi sarlavha ishlatilishi kerak.`,
      example: `Quyida HTML sarlavhalarining misoli keltirilgan:`,
    },
    ru: {
      title: 'HTML Заголовки',
      whatIs: `HTML заголовки помогают структурировать текст по важности. Существует 6 уровней заголовков от <h1> до <h6>, где <h1> самый важный и крупный, а <h6> наименее важный и самый маленький.`,
      howToUse: `Заголовки создаются с помощью тегов от <h1> до <h6>. <h1> должен использоваться только один раз, как заголовок страницы. Остальные заголовки можно использовать несколько раз по необходимости.`,
      whenToUse: `Заголовки играют важную роль в создании структуры страницы, SEO оптимизации и понимании контента пользователями. Для каждого раздела должен использоваться соответствующий уровень заголовка.`,
      example: `Ниже приведен пример HTML заголовков:`,
    },
  }

  const c = content[locale] || content.uz

  return (
    <TutorialLayout
      locale={locale}
      translations={t}
      title={c.title}
      prevTopic={{ slug: 'html-paragraphs', title: t.html.paragraphs }}
      nextTopic={{ slug: 'html-colors', title: t.html.colors }}
    >
      <h2>{t.common.whatIs}</h2>
      <p>{c.whatIs}</p>

      <h2>{t.common.howToUse}</h2>
      <p>{c.howToUse}</p>

      <div className="example-box">
        <h4>{t.common.codeExample}</h4>
        <pre>
          <code>{`<h1>Eng muhim sarlavha</h1>
<h2>Ikkinchi darajali sarlavha</h2>
<h3>Uchinchi darajali sarlavha</h3>
<h4>To'rtinchi darajali sarlavha</h4>
<h5>Beshinchi darajali sarlavha</h5>
<h6>Oltinchi darajali sarlavha</h6>`}</code>
        </pre>
      </div>

      <div className="result-box">
        <h4>{t.common.result}</h4>
        <h1 style={{ fontSize: '2em', margin: '0.5em 0' }}>
          Eng muhim sarlavha
        </h1>
        <h2 style={{ fontSize: '1.5em', margin: '0.5em 0' }}>
          Ikkinchi darajali sarlavha
        </h2>
        <h3 style={{ fontSize: '1.17em', margin: '0.5em 0' }}>
          Uchinchi darajali sarlavha
        </h3>
        <h4 style={{ fontSize: '1em', margin: '0.5em 0' }}>
          To'rtinchi darajali sarlavha
        </h4>
        <h5 style={{ fontSize: '0.83em', margin: '0.5em 0' }}>
          Beshinchi darajali sarlavha
        </h5>
        <h6 style={{ fontSize: '0.67em', margin: '0.5em 0' }}>
          Oltinchi darajali sarlavha
        </h6>
      </div>

      <h2>{t.common.whenToUse}</h2>
      <p>{c.whenToUse}</p>

      <div className="info-box">
        <strong>Muhim:</strong> SEO uchun <code>&lt;h1&gt;</code> tegi sahifada
        faqat bir marta ishlatilishi kerak va u asosiy mavzuni ifodalashi kerak.
      </div>

      <h3>Dizaynda qanday ishlaydi?</h3>
      <p>
        {params.locale === 'uz'
          ? 'Sarlavhalar sahifa ierarxiyasini yaratadi va foydalanuvchiga kontent strukturasini tushunishga yordam beradi. To\'g\'ri ishlatilgan sarlavhalar saytning navigatsiyasini yaxshilaydi va SEO reytingini oshiradi.'
          : 'Заголовки создают иерархию страницы и помогают пользователю понять структуру контента. Правильно использованные заголовки улучшают навигацию сайта и повышают SEO рейтинг.'}
      </p>
    </TutorialLayout>
  )
}

