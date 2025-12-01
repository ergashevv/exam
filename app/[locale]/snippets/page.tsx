import React from 'react'
import TutorialLayout from '@/components/TutorialLayout'
import { translations, Locale } from '@/lib/translations'
import './snippets.scss'

export default async function SnippetsPage({
  params,
}: {
  params: { locale: Locale } | Promise<{ locale: Locale }>
}) {
  const resolvedParams = params instanceof Promise ? await params : params
  const locale = resolvedParams?.locale || 'uz'
  const t = translations[locale] || translations.uz

  const snippets = [
    {
      category: locale === 'uz' ? 'Tugmalar' : 'Кнопки',
      items: [
        {
          name: locale === 'uz' ? 'Oddiy tugma' : 'Простая кнопка',
          code: `<button class="btn-primary">Bosing</button>`,
          css: `.btn-primary {
  background: #667eea;
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  transition: all 0.3s ease;
}

.btn-primary:hover {
  background: #764ba2;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
}`,
        },
        {
          name: locale === 'uz' ? 'Outline tugma' : 'Кнопка с обводкой',
          code: `<button class="btn-outline">Bosing</button>`,
          css: `.btn-outline {
  background: transparent;
  color: #667eea;
  padding: 12px 24px;
  border: 2px solid #667eea;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  transition: all 0.3s ease;
}

.btn-outline:hover {
  background: #667eea;
  color: white;
}`,
        },
      ],
    },
    {
      category: locale === 'uz' ? 'Formalar' : 'Формы',
      items: [
        {
          name: locale === 'uz' ? 'Input maydoni' : 'Поле ввода',
          code: `<input type="text" class="input-field" placeholder="Ismingizni kiriting">`,
          css: `.input-field {
  width: 100%;
  padding: 12px 16px;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-size: 16px;
  transition: border-color 0.3s ease;
}

.input-field:focus {
  outline: none;
  border-color: #667eea;
}`,
        },
      ],
    },
    {
      category: locale === 'uz' ? 'Navigation' : 'Навигация',
      items: [
        {
          name: locale === 'uz' ? 'Navbar' : 'Навбар',
          code: `<nav class="navbar">
  <a href="#" class="nav-link active">Bosh sahifa</a>
  <a href="#" class="nav-link">Haqimda</a>
  <a href="#" class="nav-link">Aloqa</a>
</nav>`,
          css: `.navbar {
  display: flex;
  gap: 2rem;
  padding: 1rem 2rem;
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.nav-link {
  text-decoration: none;
  color: #333;
  font-weight: 500;
  transition: color 0.3s ease;
}

.nav-link:hover,
.nav-link.active {
  color: #667eea;
}`,
        },
      ],
    },
  ]

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  return (
    <TutorialLayout
      locale={locale}
      translations={t}
      title={locale === 'uz' ? 'Kod Snippets' : 'Код Сниппеты'}
      prevTopic={undefined}
      nextTopic={undefined}
    >
      <div className="snippets-page">
        <p style={{ marginBottom: '2rem', color: '#666' }}>
          {locale === 'uz'
            ? 'Tayyor kod snippets - copy qilib ishlatishingiz mumkin'
            : 'Готовые код сниппеты - можете скопировать и использовать'}
        </p>

        {snippets.map((category, catIndex) => (
          <div key={catIndex} className="snippet-category">
            <h2>{category.category}</h2>
            {category.items.map((item, itemIndex) => (
              <div key={itemIndex} className="snippet-item">
                <h3>{item.name}</h3>
                <div className="snippet-code">
                  <div className="code-header">
                    <span>HTML</span>
                    <button
                      onClick={() => copyToClipboard(item.code)}
                      className="copy-btn"
                    >
                      {locale === 'uz' ? '📋 Copy' : '📋 Копировать'}
                    </button>
                  </div>
                  <pre>
                    <code>{item.code}</code>
                  </pre>
                </div>
                <div className="snippet-code">
                  <div className="code-header">
                    <span>CSS</span>
                    <button
                      onClick={() => copyToClipboard(item.css)}
                      className="copy-btn"
                    >
                      {locale === 'uz' ? '📋 Copy' : '📋 Копировать'}
                    </button>
                  </div>
                  <pre>
                    <code>{item.css}</code>
                  </pre>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </TutorialLayout>
  )
}

