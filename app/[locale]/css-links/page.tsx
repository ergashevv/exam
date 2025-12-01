import React from 'react'
import TutorialLayout from '@/components/TutorialLayout'
import { translations, Locale } from '@/lib/translations'

export default async function CSSLinksPage({
  params,
}: {
  params: { locale: Locale } | Promise<{ locale: Locale }>
}) {
  const resolvedParams = params instanceof Promise ? await params : params
  const locale = resolvedParams?.locale || 'uz'
  const t = translations[locale] || translations.uz

  const content = {
    uz: {
      title: 'CSS Links',
      whatIs: `CSS havolalar (linklar) uchun turli holatlar mavjud: :link, :visited, :hover, :active. Bu holatlar havolaning ko'rinishini boshqaradi.`,
      howToUse: `a:link, a:visited, a:hover, a:active selektorlari ishlatiladi. Hover effektlari, rang o'zgarishlari, bezatish qo'shiladi.`,
      whenToUse: `Havolalar dizaynini yaxshilash, foydalanuvchi interaksiyasini ko'rsatish, hover effektlari qo'shish uchun ishlatiladi.`,
    },
    ru: {
      title: 'CSS Ссылки',
      whatIs: `Для CSS ссылок (ссылок) существуют различные состояния: :link, :visited, :hover, :active. Эти состояния управляют внешним видом ссылки.`,
      howToUse: `Используются селекторы a:link, a:visited, a:hover, a:active. Добавляются эффекты наведения, изменения цвета, оформление.`,
      whenToUse: `Используется для улучшения дизайна ссылок, показа взаимодействия пользователя, добавления эффектов наведения.`,
    },
  }

  const c = content[locale] || content.uz

  return (
    <TutorialLayout
      locale={locale}
      translations={t}
      title={c.title}
      prevTopic={{ slug: 'css-outline', title: t.css.outline }}
      nextTopic={{ slug: 'css-tables', title: t.css.tables }}
    >
      <h2>{t.common.whatIs}</h2>
      <p>{c.whatIs}</p>

      <h2>{t.common.howToUse}</h2>
      <p>{c.howToUse}</p>

      <div className="example-box">
        <h4>{t.common.codeExample}</h4>
        <pre>
          <code>{locale === 'uz' 
            ? `/* Simple link */
a:link {
  color: #667eea;
  text-decoration: none;
}

/* Visited */
a:visited {
  color: #764ba2;
}

/* Hover (mouse over) */
a:hover {
  color: #3498db;
  text-decoration: underline;
}

/* Active (clicked) */
a:active {
  color: #e74c3c;
}

/* All states */
a {
  color: #667eea;
  text-decoration: none;
  transition: color 0.3s ease;
}

a:hover {
  color: #3498db;
  text-decoration: underline;
}

/* Button-style link */
a.button {
  display: inline-block;
  padding: 10px 20px;
  background: #667eea;
  color: white;
  border-radius: 5px;
  text-decoration: none;
}

a.button:hover {
  background: #764ba2;
}`
            : `/* Простая ссылка */
a:link {
  color: #667eea;
  text-decoration: none;
}

/* Посещенная */
a:visited {
  color: #764ba2;
}

/* Hover (наведение мыши) */
a:hover {
  color: #3498db;
  text-decoration: underline;
}

/* Active (нажата) */
a:active {
  color: #e74c3c;
}

/* Все состояния */
a {
  color: #667eea;
  text-decoration: none;
  transition: color 0.3s ease;
}

a:hover {
  color: #3498db;
  text-decoration: underline;
}

/* Ссылка в виде кнопки */
a.button {
  display: inline-block;
  padding: 10px 20px;
  background: #667eea;
  color: white;
  border-radius: 5px;
  text-decoration: none;
}

a.button:hover {
  background: #764ba2;
}`}</code>
        </pre>
      </div>

      <div className="result-box">
        <h4>{t.common.result}</h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '10px' }}>
          <a
            href="#"
            style={{
              color: '#667eea',
              textDecoration: 'none',
              transition: 'color 0.3s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#3498db')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#667eea')}
          >
            Oddiy havola (hover qiling)
          </a>
          <a
            href="#"
            style={{
              display: 'inline-block',
              padding: '10px 20px',
              background: '#667eea',
              color: 'white',
              borderRadius: '5px',
              textDecoration: 'none',
              transition: 'background 0.3s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = '#764ba2')}
            onMouseLeave={(e) => (e.currentTarget.style.background = '#667eea')}
          >
            Tugma ko'rinishidagi havola
          </a>
        </div>
      </div>

      <h2>{t.common.whenToUse}</h2>
      <p>{c.whenToUse}</p>

      <h3>Havola holatlari:</h3>
      <ul>
        <li>
          <strong>:link</strong> - oddiy havola
        </li>
        <li>
          <strong>:visited</strong> - tashrif buyurilgan havola
        </li>
        <li>
          <strong>:hover</strong> - sichqoncha ustida
        </li>
        <li>
          <strong>:active</strong> - bosilganda
        </li>
      </ul>
    </TutorialLayout>
  )
}

