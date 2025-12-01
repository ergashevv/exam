import Link from 'next/link'
import { translations, Locale } from '@/lib/translations'
import './page.scss'

export default function HomePage({
  params,
}: {
  params: { locale: Locale } | Promise<{ locale: Locale }>
}) {
  // Handle both sync and async params
  const resolvedParams = params instanceof Promise ? undefined : params
  const locale = resolvedParams?.locale || 'uz'
  const t = translations[locale] || translations.uz || translations.uz

  const htmlTopics = [
    { key: 'headings', slug: 'html-headings' },
    { key: 'paragraphs', slug: 'html-paragraphs' },
    { key: 'colors', slug: 'html-colors' },
    { key: 'styles', slug: 'html-styles' },
    { key: 'links', slug: 'html-links' },
    { key: 'images', slug: 'html-images' },
    { key: 'favicon', slug: 'html-favicon' },
    { key: 'pageTitle', slug: 'html-page-title' },
    { key: 'tables', slug: 'html-tables' },
    { key: 'lists', slug: 'html-lists' },
    { key: 'blockInline', slug: 'html-block-inline' },
    { key: 'div', slug: 'html-div' },
    { key: 'classAttr', slug: 'html-class' },
    { key: 'idAttr', slug: 'html-id' },
    { key: 'buttons', slug: 'html-buttons' },
    { key: 'iframes', slug: 'html-iframes' },
    { key: 'forms', slug: 'html-forms' },
    { key: 'inputTypes', slug: 'html-input-types' },
  ]

  const cssTopics = [
    { key: 'colors', slug: 'css-colors' },
    { key: 'backgrounds', slug: 'css-backgrounds' },
    { key: 'borders', slug: 'css-borders' },
    { key: 'margins', slug: 'css-margins' },
    { key: 'padding', slug: 'css-padding' },
    { key: 'heightWidth', slug: 'css-height-width' },
    { key: 'outline', slug: 'css-outline' },
    { key: 'links', slug: 'css-links' },
    { key: 'tables', slug: 'css-tables' },
    { key: 'lists', slug: 'css-lists' },
    { key: 'display', slug: 'css-display' },
    { key: 'position', slug: 'css-position' },
    { key: 'zIndex', slug: 'css-z-index' },
    { key: 'overflow', slug: 'css-overflow' },
    { key: 'float', slug: 'css-float' },
  ]

  return (
    <div className="home-page">
      <div className="hero-section">
        <h1>HTML & CSS To'liq Darslik</h1>
        <p className="subtitle">
          {locale === 'uz'
            ? 'HTML va CSS bo\'yicha barcha mavzularni o\'rganing'
            : 'Изучите все темы по HTML и CSS'}
        </p>
      </div>

      <section className="topics-section">
        <div className="html-topics">
          <h2>HTML Mavzular</h2>
          <div className="topics-grid">
            {htmlTopics.map((topic) => (
              <Link
                key={topic.slug}
                href={`/${locale}/${topic.slug}`}
                className="topic-card"
              >
                <h3>{t.html[topic.key as keyof typeof t.html]}</h3>
              </Link>
            ))}
          </div>
        </div>

        <div className="css-topics">
          <h2>CSS Mavzular</h2>
          <div className="topics-grid">
            {cssTopics.map((topic) => (
              <Link
                key={topic.slug}
                href={`/${locale}/${topic.slug}`}
                className="topic-card"
              >
                <h3>{t.css[topic.key as keyof typeof t.css]}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

