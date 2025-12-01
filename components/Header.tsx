'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
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
            <span className="logo-full">HTML & CSS Darslik</span>
            <span className="logo-short">HTML & CSS</span>
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
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Link href={`/${switchLocale}`} className="lang-switcher">
            {switchLocale.toUpperCase()}
          </Link>
        </motion.div>
      </div>
    </motion.header>
  )
}

