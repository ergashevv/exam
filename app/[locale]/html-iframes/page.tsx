import React from 'react'
import TutorialLayout from '@/components/TutorialLayout'
import { translations, Locale } from '@/lib/translations'

export default function HTMLIframesPage({
  params,
}: {
  params: { locale: Locale }
}) {
  const locale = params?.locale || 'uz'
  const t = translations[locale] || translations.uz

  const content = {
    uz: {
      title: 'HTML Iframe',
      whatIs: `Iframe (inline frame) boshqa HTML sahifasini joriy sahifaga kiritish uchun ishlatiladi. Video, xarita yoki boshqa kontentni ko'rsatish uchun qo'llaniladi.`,
      howToUse: `<iframe src="url" width="600" height="400"></iframe> formatida ishlatiladi. width va height atributlari o'lchamni belgilaydi.`,
      whenToUse: `Iframe video (YouTube, Vimeo), xaritalar (Google Maps), boshqa saytlardan kontent ko'rsatish uchun ishlatiladi.`,
    },
    ru: {
      title: 'HTML Iframe',
      whatIs: `Iframe (inline frame) используется для встраивания другой HTML страницы в текущую страницу. Применяется для отображения видео, карт или другого контента.`,
      howToUse: `Используется в формате <iframe src="url" width="600" height="400"></iframe>. Атрибуты width и height определяют размер.`,
      whenToUse: `Iframe используется для отображения видео (YouTube, Vimeo), карт (Google Maps), контента с других сайтов.`,
    },
  }

  const c = content[locale] || content.uz

  return (
    <TutorialLayout
      locale={locale}
      translations={t}
      title={c.title}
      prevTopic={{ slug: 'html-buttons', title: t.html.buttons }}
      nextTopic={{ slug: 'html-forms', title: t.html.forms }}
    >
      <h2>{t.common.whatIs}</h2>
      <p>{c.whatIs}</p>

      <h2>{t.common.howToUse}</h2>
      <p>{c.howToUse}</p>

      <div className="example-box">
        <h4>{t.common.codeExample}</h4>
        <pre>
          <code>{`<!-- Oddiy iframe -->
<iframe src="https://example.com" width="600" height="400"></iframe>

<!-- YouTube video -->
<iframe 
  width="560" 
  height="315" 
  src="https://www.youtube.com/embed/VIDEO_ID" 
  frameborder="0" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
  allowfullscreen>
</iframe>

<!-- Google Maps -->
<iframe 
  src="https://www.google.com/maps/embed?pb=..." 
  width="600" 
  height="450" 
  style="border:0;" 
  allowfullscreen="" 
  loading="lazy">
</iframe>

<!-- Responsive iframe -->
<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden;">
  <iframe 
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" 
    src="https://example.com">
  </iframe>
</div>`}</code>
        </pre>
      </div>

      <div className="result-box">
        <h4>{t.common.result}</h4>
        <div
          style={{
            width: '100%',
            height: '200px',
            border: '2px solid #ddd',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#f5f5f5',
            marginTop: '10px',
          }}
        >
          <p>{locale === 'uz' ? 'Iframe bu yerda ko\'rsatiladi' : 'Iframe будет показан здесь'}</p>
        </div>
      </div>

      <h2>{t.common.whenToUse}</h2>
      <p>{c.whenToUse}</p>

      <div className="info-box">
        <strong>{t.common.security}</strong> {locale === 'uz' 
          ? 'Iframe xavfsizlik siyosatlariga e\'tibor bering. Ba\'zi saytlar iframe\'da ko\'rsatilishini bloklaydi (X-Frame-Options).'
          : 'Обратите внимание на политику безопасности iframe. Некоторые сайты блокируют отображение в iframe (X-Frame-Options).'}
      </div>
    </TutorialLayout>
  )
}

