'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Locale, translations } from '@/lib/translations'
import Search from './Search'
import './Header.scss'

interface HeaderProps {
  locale: Locale
  translations?: any
}

export default function Header({ locale, translations: propsTranslations }: HeaderProps) {
  const switchLocale = locale === 'uz' ? 'ru' : 'uz'
  const t = propsTranslations || translations[locale] || translations.uz

  return (
    <motion.header
      className="header"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="header-container">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link href={`/${locale}`} className="logo">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="logo-icon"
            >
              <rect width="32" height="32" rx="6" fill="url(#gradient)" />
              <path
                d="M8 10L10 24L16 26L22 24L24 10H8Z"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16 10V26"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M8 10L16 10L24 10"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <defs>
                <linearGradient id="gradient" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#667eea" />
                  <stop offset="1" stopColor="#764ba2" />
                </linearGradient>
              </defs>
            </svg>
          </Link>
        </motion.div>
        <nav className="nav">
          {[
            { href: `/${locale}`, label: t.nav.home },
            { href: `/${locale}#html`, label: t.nav.html },
            { href: `/${locale}#css`, label: t.nav.css },
          ].map((item, index) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index + 0.2 }}
              whileHover={{ y: -2 }}
            >
              <Link href={item.href}>{item.label}</Link>
            </motion.div>
          ))}
        </nav>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <Search locale={locale} />
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Link href={`/${switchLocale}`} className="lang-switcher">
              {switchLocale.toUpperCase()}
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.header>
  )
}

