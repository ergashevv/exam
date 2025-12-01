import TutorialLayout from '@/components/TutorialLayout'
import { translations, Locale } from '@/lib/translations'

export default function HTMLFaviconPage({
  params,
}: {
  params: { locale: Locale }
}) {
  const locale = params?.locale || 'uz'
  const t = translations[locale] || translations.uz

  const content = {
    uz: {
      title: 'HTML Favicon',
      whatIs: `Favicon - bu brauzer yorliqlarida va xatcho'plarda ko'rsatiladigan kichik ikonka. U saytning vizual identifikatoridir.`,
      howToUse: `Favicon <head> bo'limida <link> tegi yordamida qo'shiladi. Favicon fayli odatda .ico, .png yoki .svg formatida bo'ladi.`,
      whenToUse: `Favicon har bir sayt uchun yaratilishi kerak. U saytning professional ko'rinishini yaratadi va foydalanuvchilar uchun saytni topishni osonlashtiradi.`,
    },
    ru: {
      title: 'HTML Favicon',
      whatIs: `Favicon - это маленькая иконка, отображаемая на вкладках браузера и в закладках. Это визуальный идентификатор сайта.`,
      howToUse: `Favicon добавляется в секции <head> с помощью тега <link>. Файл favicon обычно имеет формат .ico, .png или .svg.`,
      whenToUse: `Favicon должен быть создан для каждого сайта. Он создает профессиональный вид сайта и облегчает пользователям поиск сайта.`,
    },
  }

  const c = content[locale]

  return (
    <TutorialLayout
      locale={locale}
      translations={t}
      title={c.title}
      prevTopic={{ slug: 'html-images', title: t.html.images }}
      nextTopic={{ slug: 'html-page-title', title: t.html.pageTitle }}
    >
      <h2>{t.common.whatIs}</h2>
      <p>{c.whatIs}</p>

      <h2>{t.common.howToUse}</h2>
      <p>{c.howToUse}</p>

      <div className="example-box">
        <h4>{t.common.codeExample}</h4>
        <pre>
          <code>{`<!DOCTYPE html>
<html>
<head>
  <title>Mening saytim</title>
  
  <!-- ICO format -->
  <link rel="icon" type="image/x-icon" href="/favicon.ico">
  
  <!-- PNG format -->
  <link rel="icon" type="image/png" href="/favicon.png">
  
  <!-- SVG format (zamonaviy brauzerlar) -->
  <link rel="icon" type="image/svg+xml" href="/favicon.svg">
  
  <!-- Apple touch icon -->
  <link rel="apple-touch-icon" href="/apple-touch-icon.png">
  
  <!-- Bir nechta o'lchamlar -->
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
</head>
<body>
  <!-- Kontent -->
</body>
</html>`}</code>
        </pre>
      </div>

      <h2>{t.common.whenToUse}</h2>
      <p>{c.whenToUse}</p>

      <h3>Favicon yaratish:</h3>
      <ol>
        <li>Rasm yarating yoki logoni oling (kvadrat format, 16x16 yoki 32x32 piksel)</li>
        <li>Favicon generator saytlaridan foydalaning (favicon.io, realfavicongenerator.net)</li>
        <li>Yaratilgan fayllarni public yoki root papkasiga qo'ying</li>
        <li>HTML <head> bo'limiga <link> teglarini qo'shing</li>
      </ol>

      <div className="info-box">
        <strong>Eslatma:</strong> Favicon fayli odatda 16x16 yoki 32x32 piksel
        bo'lishi kerak. SVG formatida favicon kattalashtirganda sifat yo'qotmaydi.
      </div>
    </TutorialLayout>
  )
}

