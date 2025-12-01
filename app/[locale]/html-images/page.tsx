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
      whatIs: `Rasm - bu sahifaga qo'shiladigan tasvir. Xuddi Word'ga rasm qo'shgandek. HTML'da <img> tegi bilan yaratiladi.`,
      simpleExplanation: `O'ylab ko'ring: sizga sahifaga rasm qo'shish kerak. Rasm faylini topasiz va HTML'da ko'rsatasiz. Brauzer rasmni ko'rsatadi!`,
      howToUse: `Qadam 1: <img src="rasm.jpg" alt="Tavsif"> yozing. Qadam 2: src="..." ichiga rasm fayl manzilini yozing. Qadam 3: alt="..." ichiga rasm haqida qisqa ma'lumot yozing (ko'rlar uchun).`,
      whenToUse: `Har doim ishlating! Maqola rasmlari, logo, ikonkalar, dizayn uchun. Masalan: "Mening rasmi", "Logo", "Mahsulot rasmi".`,
    },
    ru: {
      title: 'HTML Изображения',
      whatIs: `Изображение - это картинка, которую добавляют на страницу. Как добавить картинку в Word. В HTML создается с помощью тега <img>.`,
      simpleExplanation: `Представьте: вам нужно добавить картинку на страницу. Вы находите файл картинки и показываете его в HTML. Браузер покажет картинку!`,
      howToUse: `Шаг 1: Напишите <img src="image.jpg" alt="Описание">. Шаг 2: В src="..." напишите адрес файла картинки. Шаг 3: В alt="..." напишите краткое описание картинки (для слепых).`,
      whenToUse: `Используйте всегда! Для картинок в статьях, логотипов, иконок, дизайна. Например: "Мое фото", "Логотип", "Фото товара".`,
    },
  }

  const c = content[locale] || content.uz

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
      
      <div className="info-box" style={{ background: '#e8f5e9', borderLeftColor: '#4caf50' }}>
        <strong>💡 Oddiy tushuntirish:</strong> {c.simpleExplanation}
      </div>

      <h2>{t.common.howToUse}</h2>
      <p>{c.howToUse}</p>
      
      <div className="example-box" style={{ background: '#fff3e0', borderColor: '#ff9800' }}>
        <h4>📝 Qadam-baqadam:</h4>
        <ol>
          <li>Rasm faylini toping (masalan: photo.jpg)</li>
          <li>HTML yozing: <code>&lt;img src="photo.jpg" alt="Tavsif"&gt;</code></li>
          <li>src="..." ichiga rasm fayl manzilini yozing</li>
          <li>alt="..." ichiga rasm haqida qisqa ma'lumot yozing</li>
          <li>Brauzerda ko'ring - rasm ko'rinadi!</li>
        </ol>
      </div>

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
      
      <div className="example-box" style={{ background: '#f3e5f5', borderColor: '#9c27b0' }}>
        <h4>🎯 Real hayotdan misol:</h4>
        <ul>
          <li><strong>Maqola rasmi:</strong> <code>&lt;img src="article.jpg" alt="Maqola rasmi"&gt;</code></li>
          <li><strong>Logo:</strong> <code>&lt;img src="logo.png" alt="Sayt logosi"&gt;</code></li>
          <li><strong>Profil rasmi:</strong> <code>&lt;img src="avatar.jpg" alt="Foydalanuvchi rasmi"&gt;</code></li>
        </ul>
      </div>

      <div className="info-box">
        <strong>💡 Muhim eslatma:</strong> alt atributi juda muhim! 
        <ul style={{ marginTop: '10px' }}>
          <li>Ko'rlar uchun - ular alt matnini eshitadi</li>
          <li>SEO uchun - Google alt matnini o'qiydi</li>
          <li>Rasm yuklanmagan bo'lsa - alt matni ko'rsatiladi</li>
        </ul>
        <p style={{ marginTop: '10px' }}><strong>Maslahat:</strong> Har doim alt yozing, hatto qisqa bo'lsa ham!</p>
      </div>

      <h3>📸 Rasm formatlari (qaysi birini ishlatish kerak?):</h3>
      <ul>
        <li>
          <strong>JPG/JPEG (eng keng qo'llaniladi):</strong> Fotografiyalar uchun. 
          <span style={{ color: '#4caf50' }}>✅ Ko'pchilik holatlar uchun yaxshi!</span>
        </li>
        <li>
          <strong>PNG:</strong> Shaffof fon kerak bo'lganda (masalan: logo). 
          <span style={{ color: '#2196f3' }}>💡 Logo va ikonkalar uchun.</span>
        </li>
        <li>
          <strong>GIF:</strong> Animatsiyalar uchun (harakatlanuvchi rasm). 
          <span style={{ color: '#9c27b0' }}>🎬 Animatsiya kerak bo'lsa.</span>
        </li>
        <li>
          <strong>SVG (eng yaxshi sifat):</strong> Vektor rasmlar, kattalashtirganda sifat yo'qotmaydi. 
          <span style={{ color: '#ff9800' }}>⭐ Logo va ikonkalar uchun ideal!</span>
        </li>
        <li>
          <strong>WebP (zamonaviy):</strong> Kichik fayl hajmi, yaxshi sifat. 
          <span style={{ color: '#f44336' }}>⚡ Tez yuklanish uchun.</span>
        </li>
      </ul>
      
      <div className="result-box" style={{ background: '#e1f5fe', borderColor: '#0288d1' }}>
        <h4>👀 Ko'rib chiqing:</h4>
        <p>Yuqoridagi "Natija" bo'limida rasm ko'rsatilgan. Agar rasm yuklanmagan bo'lsa, alt matni ko'rsatiladi!</p>
      </div>
    </TutorialLayout>
  )
}

