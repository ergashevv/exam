import React from 'react'
import TutorialLayout from '@/components/TutorialLayout'
import { translations, Locale } from '@/lib/translations'

export default function HTMLPageTitlePage({
  params,
}: {
  params: { locale: Locale }
}) {
  const locale = params?.locale || 'uz'
  const t = translations[locale] || translations.uz

  const content = {
    uz: {
      title: 'HTML Sahifa Sarlavhasi',
      whatIs: `Sahifa sarlavhasi (<title> tegi) brauzer yorlig'ida ko'rsatiladi va SEO uchun juda muhimdir. U har bir sahifa uchun noyob bo'lishi kerak.`,
      howToUse: `Sarlavha <head> bo'limida <title>Matn</title> formatida yoziladi. U 50-60 belgidan oshmasligi tavsiya etiladi.`,
      whenToUse: `Har bir HTML sahifada <title> tegi bo'lishi kerak. U SEO, brauzer yorlig'i va xatcho'plarda ko'rsatiladi.`,
    },
    ru: {
      title: 'HTML Заголовок страницы',
      whatIs: `Заголовок страницы (тег <title>) отображается на вкладке браузера и очень важен для SEO. Он должен быть уникальным для каждой страницы.`,
      howToUse: `Заголовок пишется в секции <head> в формате <title>Текст</title>. Рекомендуется не превышать 50-60 символов.`,
      whenToUse: `Тег <title> должен быть на каждой HTML странице. Он отображается в SEO, на вкладке браузера и в закладках.`,
    },
  }

  const c = content[locale] || content.uz

  return (
    <TutorialLayout
      locale={locale}
      translations={t}
      title={c.title}
      prevTopic={{ slug: 'html-favicon', title: t.html.favicon }}
      nextTopic={{ slug: 'html-tables', title: t.html.tables }}
    >
      <h2>{t.common.whatIs}</h2>
      <p>{c.whatIs}</p>

      <h2>{t.common.howToUse}</h2>
      <p>{c.howToUse}</p>

      <div className="example-box">
        <h4>{t.common.codeExample}</h4>
        <pre>
          <code>{locale === 'uz' 
            ? `<!DOCTYPE html>
<html>
<head>
  <title>HTML & CSS Darslik - Bosh sahifa</title>
  <meta charset="UTF-8">
  <meta name="description" content="HTML va CSS bo'yicha to'liq darslik">
</head>
<body>
  <!-- Kontent -->
</body>
</html>`
            : `<!DOCTYPE html>
<html>
<head>
  <title>HTML & CSS Учебник - Главная</title>
  <meta charset="UTF-8">
  <meta name="description" content="Полный учебник по HTML и CSS">
</head>
<body>
  <!-- Контент -->
</body>
</html>`}</code>
        </pre>
      </div>

      <h2>{t.common.whenToUse}</h2>
      <p>{c.whenToUse}</p>

      <h3>{locale === 'uz' ? 'Yaxshi amaliyotlar:' : 'Хорошие практики:'}</h3>
      <ul>
        <li>{locale === 'uz' ? 'Har bir sahifa uchun noyob sarlavha yarating' : 'Создавайте уникальный заголовок для каждой страницы'}</li>
        <li>{locale === 'uz' ? '50-60 belgidan oshmasligi kerak' : 'Не должно превышать 50-60 символов'}</li>
        <li>{locale === 'uz' ? 'Asosiy kalit so\'zlarni qo\'shing' : 'Добавьте основные ключевые слова'}</li>
        <li>{locale === 'uz' ? 'Sayt nomini ham qo\'shing (masalan: "Mavzu - Sayt Nomi")' : 'Также добавьте название сайта (например: "Тема - Название сайта")'}</li>
        <li>{locale === 'uz' ? 'Har bir sahifa uchun mos sarlavha tanlang' : 'Выберите подходящий заголовок для каждой страницы'}</li>
      </ul>

      <div className="info-box">
        <strong>{locale === 'uz' ? 'SEO uchun:' : 'Для SEO:'}</strong> {locale === 'uz' 
          ? 'Sarlavha Google va boshqa qidiruv tizimlarida natijalarda ko\'rsatiladi. To\'g\'ri sarlavha SEO reytingini yaxshilaydi.'
          : 'Заголовок отображается в результатах поиска Google и других поисковых систем. Правильный заголовок улучшает SEO рейтинг.'}
      </div>
    </TutorialLayout>
  )
}

