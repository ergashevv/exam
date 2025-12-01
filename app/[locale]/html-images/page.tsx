import React from 'react'
import TutorialLayout from '@/components/TutorialLayout'
import { translations, Locale } from '@/lib/translations'

export default function HTMLImagesPage({
  params,
}: {
  params: { locale: Locale }
}) {
  const locale = params?.locale || 'uz'
  const t = translations[locale] || translations.uz

  const content = {
    uz: {
      title: 'HTML Rasmlar',
      whatIs: `HTML rasmlar <img> tegi yordamida sahifaga qo'shiladi. Rasm manzili src atributida, alternativ matn esa alt atributida ko'rsatiladi.`,
      howToUse: `Rasmlar <img src="path/to/image.jpg" alt="Tavsif"> formatida qo'shiladi. width va height atributlari o'lchamni belgilaydi.`,
      whenToUse: `Rasmlar kontentni tushuntirish, dizayn yaratish, logo va ikonkalar ko'rsatish uchun ishlatiladi.`,
    },
    ru: {
      title: 'HTML Изображения',
      whatIs: `HTML изображения добавляются на страницу с помощью тега <img>. Адрес изображения указывается в атрибуте src, альтернативный текст - в атрибуте alt.`,
      howToUse: `Изображения добавляются в формате <img src="path/to/image.jpg" alt="Описание">. Атрибуты width и height определяют размер.`,
      whenToUse: `Изображения используются для иллюстрации контента, создания дизайна, отображения логотипов и иконок.`,
    },
  }

  const c = content[locale]

  return (
    <TutorialLayout
      locale={locale}
      translations={t}
      title={c.title}
      prevTopic={{ slug: 'html-links', title: t.html.links }}
      nextTopic={{ slug: 'html-favicon', title: t.html.favicon }}
    >
      <h2>{t.common.whatIs}</h2>
      <p>{c.whatIs}</p>

      <h2>{t.common.howToUse}</h2>
      <p>{c.howToUse}</p>

      <div className="example-box">
        <h4>{t.common.codeExample}</h4>
        <pre>
          <code>{`<!-- Oddiy rasm -->
<img src="/images/photo.jpg" alt="Rasm tavsifi">

<!-- O'lcham bilan -->
<img src="/images/photo.jpg" alt="Rasm" width="300" height="200">

<!-- CSS bilan o'lcham -->
<img src="/images/photo.jpg" alt="Rasm" style="width: 100%; max-width: 500px;">

<!-- Rasm havola sifatida -->
<a href="https://example.com">
  <img src="/images/logo.png" alt="Logo">
</a>

<!-- Responsive rasm -->
<img src="/images/photo.jpg" 
     srcset="/images/photo-small.jpg 300w,
             /images/photo-medium.jpg 600w,
             /images/photo-large.jpg 1200w"
     sizes="(max-width: 600px) 300px,
            (max-width: 1200px) 600px,
            1200px"
     alt="Responsive rasm">`}</code>
        </pre>
      </div>

      <div className="result-box">
        <h4>{t.common.result}</h4>
        <div style={{ textAlign: 'center', padding: '20px' }}>
          <div
            style={{
              width: '200px',
              height: '150px',
              backgroundColor: '#e0e0e0',
              margin: '0 auto',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '8px',
            }}
          >
            Rasm ko'rinishi
          </div>
          <p style={{ marginTop: '10px', fontSize: '0.9rem' }}>
            Rasm bu yerda ko'rsatiladi
          </p>
        </div>
      </div>

      <h2>{t.common.whenToUse}</h2>
      <p>{c.whenToUse}</p>

      <div className="info-box">
        <strong>Muhim:</strong> Har doim <code>alt</code> atributini qo'shing.
        Bu SEO va foydalanuvchilar uchun muhimdir.
      </div>

      <h3>Rasm formatlari:</h3>
      <ul>
        <li>
          <strong>JPG/JPEG:</strong> Fotografiyalar uchun, kichik fayl hajmi
        </li>
        <li>
          <strong>PNG:</strong> Shaffof fon kerak bo'lganda
        </li>
        <li>
          <strong>GIF:</strong> Animatsiyalar uchun
        </li>
        <li>
          <strong>SVG:</strong> Vektor rasmlar, kattalashtirganda sifat yo'qotmaydi
        </li>
        <li>
          <strong>WebP:</strong> Zamonaviy format, yaxshi siqiladi
        </li>
      </ul>
    </TutorialLayout>
  )
}

