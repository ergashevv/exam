import React from 'react'
import TutorialLayout from '@/components/TutorialLayout'
import { translations, Locale } from '@/lib/translations'

export default async function HTMLIdPage({
  params,
}: {
  params: { locale: Locale } | Promise<{ locale: Locale }>
}) {
  const resolvedParams = params instanceof Promise ? await params : params
  const locale = resolvedParams?.locale || 'uz'
  const t = translations[locale] || translations.uz

  const content = {
    uz: {
      title: 'HTML id Atributi',
      whatIs: `id atributi elementga noyob identifikator beradi. Har bir sahifada bir xil id faqat bir marta ishlatilishi kerak.`,
      howToUse: `id atributi id="nomi" formatida yoziladi. CSS da # belgisi bilan, JavaScript da getElementById() yordamida ishlatiladi.`,
      whenToUse: `id atributi noyob elementlarni belgilash, havolalar uchun anchor, JavaScript bilan ishlash uchun ishlatiladi.`,
    },
    ru: {
      title: 'HTML Атрибут id',
      whatIs: `Атрибут id дает элементу уникальный идентификатор. На каждой странице один и тот же id должен использоваться только один раз.`,
      howToUse: `Атрибут id пишется в формате id="имя". В CSS используется с символом #, в JavaScript - с помощью getElementById().`,
      whenToUse: `Атрибут id используется для обозначения уникальных элементов, якорей для ссылок, работы с JavaScript.`,
    },
  }

  const c = content[locale] || content.uz

  return (
    <TutorialLayout
      locale={locale}
      translations={t}
      title={c.title}
      prevTopic={{ slug: 'html-class', title: t.html.classAttr }}
      nextTopic={{ slug: 'html-buttons', title: t.html.buttons }}
    >
      <h2>{t.common.whatIs}</h2>
      <p>{c.whatIs}</p>

      <h2>{t.common.howToUse}</h2>
      <p>{c.howToUse}</p>

      <div className="example-box">
        <h4>{t.common.codeExample}</h4>
        <pre>
          <code>{`<!-- HTML -->
<div id="header">Sahifa sarlavhasi</div>
<div id="main-content">Asosiy kontent</div>
<div id="footer">Pastki qism</div>

<!-- Havola bilan -->
<a href="#section1">Bo'limga o'tish</a>
<div id="section1">Bu bo'lim</div>

<!-- CSS -->
<style>
  #header {
    background: #333;
    color: white;
    padding: 20px;
  }
  
  #main-content {
    padding: 20px;
  }
  
  #footer {
    background: #f0f0f0;
    padding: 10px;
    text-align: center;
  }
</style>

<!-- JavaScript -->
<script>
  const header = document.getElementById('header');
  header.style.color = 'blue';
</script>`}</code>
        </pre>
      </div>

      <div className="result-box">
        <h4>{t.common.result}</h4>
        <div
          style={{
            background: '#333',
            color: 'white',
            padding: '20px',
            marginBottom: '10px',
          }}
        >
          Sahifa sarlavhasi
        </div>
        <div style={{ padding: '20px', marginBottom: '10px' }}>
          Asosiy kontent
        </div>
        <div
          style={{
            background: '#f0f0f0',
            padding: '10px',
            textAlign: 'center',
          }}
        >
          Pastki qism
        </div>
      </div>

      <h2>{t.common.whenToUse}</h2>
      <p>{c.whenToUse}</p>

      <div className="warning-box">
        <strong>Muhim:</strong> Bir sahifada bir xil id bir necha marta
        ishlatilmasligi kerak. Bu HTML standartiga zid va xatolarga olib keladi.
      </div>
    </TutorialLayout>
  )
}

