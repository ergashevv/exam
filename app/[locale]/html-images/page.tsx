import React from 'react'
import TutorialLayout from '@/components/TutorialLayout'
import { translations, Locale } from '@/lib/translations'

export default async function HTMLImagesPage({
  params,
}: {
  params: { locale: Locale } | Promise<{ locale: Locale }>
}) {
  const resolvedParams = params instanceof Promise ? await params : params
  const locale = resolvedParams?.locale || 'uz'
  const t = translations[locale] || translations.uz

  const content = {
    uz: {
      title: 'HTML Images',
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
        <strong>💡 {t.common.simpleExplanation}</strong> {c.simpleExplanation}
      </div>

      <h2>{t.common.howToUse}</h2>
      <p>{c.howToUse}</p>
      
      <div className="example-box" style={{ background: '#fff3e0', borderColor: '#ff9800' }}>
        <h4>📝 {t.common.stepByStep}</h4>
        <ol>
          <li>{locale === 'uz' ? 'Rasm faylini toping (masalan: photo.jpg)' : 'Найдите файл изображения (например: photo.jpg)'}</li>
          <li>{locale === 'uz' ? 'HTML yozing:' : 'Напишите HTML:'} <code>&lt;img src="photo.jpg" alt="{locale === 'uz' ? 'Tavsif' : 'Описание'}"&gt;</code></li>
          <li>{locale === 'uz' ? 'src="..." ichiga rasm fayl manzilini yozing' : 'В src="..." напишите адрес файла изображения'}</li>
          <li>{locale === 'uz' ? 'alt="..." ichiga rasm haqida qisqa ma\'lumot yozing' : 'В alt="..." напишите краткое описание изображения'}</li>
          <li>{locale === 'uz' ? 'Brauzerda ko\'ring - rasm ko\'rinadi!' : 'Посмотрите в браузере - изображение появится!'}</li>
        </ol>
      </div>

      <div className="example-box">
        <h4>{t.common.codeExample}</h4>
        <pre>
          <code>{locale === 'uz' 
            ? `<!-- Oddiy rasm -->
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
     alt="Responsive rasm">`
            : `<!-- Простое изображение -->
<img src="/images/photo.jpg" alt="Описание изображения">

<!-- С размером -->
<img src="/images/photo.jpg" alt="Изображение" width="300" height="200">

<!-- Размер с CSS -->
<img src="/images/photo.jpg" alt="Изображение" style="width: 100%; max-width: 500px;">

<!-- Изображение как ссылка -->
<a href="https://example.com">
  <img src="/images/logo.png" alt="Логотип">
</a>

<!-- Адаптивное изображение -->
<img src="/images/photo.jpg" 
     srcset="/images/photo-small.jpg 300w,
             /images/photo-medium.jpg 600w,
             /images/photo-large.jpg 1200w"
     sizes="(max-width: 600px) 300px,
            (max-width: 1200px) 600px,
            1200px"
     alt="Адаптивное изображение">`}</code>
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
            {locale === 'uz' ? 'Rasm ko\'rinishi' : 'Вид изображения'}
          </div>
          <p style={{ marginTop: '10px', fontSize: '0.9rem' }}>
            {locale === 'uz' ? 'Rasm bu yerda ko\'rsatiladi' : 'Изображение будет показано здесь'}
          </p>
        </div>
      </div>

      <h2>{t.common.whenToUse}</h2>
      <p>{c.whenToUse}</p>
      
      <div className="example-box" style={{ background: '#f3e5f5', borderColor: '#9c27b0' }}>
        <h4>🎯 {t.common.realWorldExample}</h4>
        <ul>
          <li><strong>{locale === 'uz' ? 'Maqola rasmi:' : 'Изображение статьи:'}</strong> <code>&lt;img src="article.jpg" alt="{locale === 'uz' ? 'Maqola rasmi' : 'Изображение статьи'}"&gt;</code></li>
          <li><strong>Logo:</strong> <code>&lt;img src="logo.png" alt="{locale === 'uz' ? 'Sayt logosi' : 'Логотип сайта'}"&gt;</code></li>
          <li><strong>{locale === 'uz' ? 'Profil rasmi:' : 'Фото профиля:'}</strong> <code>&lt;img src="avatar.jpg" alt="{locale === 'uz' ? 'Foydalanuvchi rasmi' : 'Фото пользователя'}"&gt;</code></li>
        </ul>
      </div>

      <div className="info-box">
        <strong>💡 {t.common.importantNote}</strong> {locale === 'uz' ? 'alt atributi juda muhim!' : 'атрибут alt очень важен!'} 
        <ul style={{ marginTop: '10px' }}>
          <li>{locale === 'uz' ? 'Ko\'rlar uchun - ular alt matnini eshitadi' : 'Для слепых - они слышат текст alt'}</li>
          <li>{locale === 'uz' ? 'SEO uchun - Google alt matnini o\'qiydi' : 'Для SEO - Google читает текст alt'}</li>
          <li>{locale === 'uz' ? 'Rasm yuklanmagan bo\'lsa - alt matni ko\'rsatiladi' : 'Если изображение не загрузилось - показывается текст alt'}</li>
        </ul>
        <p style={{ marginTop: '10px' }}><strong>{t.common.tip}</strong> {locale === 'uz' ? 'Har doim alt yozing, hatto qisqa bo\'lsa ham!' : 'Всегда пишите alt, даже если коротко!'}</p>
      </div>

      <h3>📸 {locale === 'uz' ? 'Rasm formatlari (qaysi birini ishlatish kerak?):' : 'Форматы изображений (какой использовать?):'}</h3>
      <ul>
        <li>
          <strong>JPG/JPEG {locale === 'uz' ? '(eng keng qo\'llaniladi):' : '(самый распространенный):'}</strong> {locale === 'uz' ? 'Fotografiyalar uchun.' : 'Для фотографий.'} 
          <span style={{ color: '#4caf50' }}>✅ {locale === 'uz' ? 'Ko\'pchilik holatlar uchun yaxshi!' : 'Хорошо для большинства случаев!'}</span>
        </li>
        <li>
          <strong>PNG:</strong> {locale === 'uz' ? 'Shaffof fon kerak bo\'lganda (masalan: logo).' : 'Когда нужен прозрачный фон (например: логотип).'} 
          <span style={{ color: '#2196f3' }}>💡 {locale === 'uz' ? 'Logo va ikonkalar uchun.' : 'Для логотипов и иконок.'}</span>
        </li>
        <li>
          <strong>GIF:</strong> {locale === 'uz' ? 'Animatsiyalar uchun (harakatlanuvchi rasm).' : 'Для анимаций (движущееся изображение).'} 
          <span style={{ color: '#9c27b0' }}>🎬 {locale === 'uz' ? 'Animatsiya kerak bo\'lsa.' : 'Если нужна анимация.'}</span>
        </li>
        <li>
          <strong>SVG {locale === 'uz' ? '(eng yaxshi sifat):' : '(лучшее качество):'}</strong> {locale === 'uz' ? 'Vektor rasmlar, kattalashtirganda sifat yo\'qotmaydi.' : 'Векторные изображения, при увеличении качество не теряется.'} 
          <span style={{ color: '#ff9800' }}>⭐ {locale === 'uz' ? 'Logo va ikonkalar uchun ideal!' : 'Идеально для логотипов и иконок!'}</span>
        </li>
        <li>
          <strong>WebP {locale === 'uz' ? '(zamonaviy):' : '(современный):'}</strong> {locale === 'uz' ? 'Kichik fayl hajmi, yaxshi sifat.' : 'Маленький размер файла, хорошее качество.'} 
          <span style={{ color: '#f44336' }}>⚡ {locale === 'uz' ? 'Tez yuklanish uchun.' : 'Для быстрой загрузки.'}</span>
        </li>
      </ul>
      
      <div className="result-box" style={{ background: '#e1f5fe', borderColor: '#0288d1' }}>
        <h4>👀 {t.common.takeALook}</h4>
        <p>{locale === 'uz' 
          ? `Yuqoridagi "${t.common.result}" bo'limida rasm ko'rsatilgan. Agar rasm yuklanmagan bo'lsa, alt matni ko'rsatiladi!`
          : `В разделе "${t.common.result}" выше показано изображение. Если изображение не загрузилось, показывается текст alt!`}</p>
      </div>
    </TutorialLayout>
  )
}

