import Link from 'next/link'
import { Locale, translations } from '@/lib/translations'
import './Header.scss'

interface HeaderProps {
  locale: Locale
  translations?: any
}

export default function Header({ locale, translations: propsTranslations }: HeaderProps) {
  const switchLocale = locale === 'uz' ? 'ru' : 'uz'
  const t = propsTranslations || translations[locale] || translations.uz

  return (
    <header className="header">
      <div className="header-container">
        <Link href={`/${locale}`} className="logo">
          HTML & CSS Darslik
        </Link>
        <nav className="nav">
          <Link href={`/${locale}`}>{t.nav.home}</Link>
          <Link href={`/${locale}#html`}>{t.nav.html}</Link>
          <Link href={`/${locale}#css`}>{t.nav.css}</Link>
        </nav>
        <Link href={`/${switchLocale}`} className="lang-switcher">
          {switchLocale.toUpperCase()}
        </Link>
      </div>
    </header>
  )
}

