'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { Locale } from '@/lib/translations'
import './Sidebar.scss'

interface SidebarProps {
  locale: Locale
  translations: any
}

export default function Sidebar({ locale, translations }: SidebarProps) {
  const pathname = usePathname()

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
    <motion.aside
      className="sidebar"
      initial={{ x: -280, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="sidebar-content">
        <motion.div
          className="sidebar-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h3>{translations.nav.html}</h3>
          <ul>
            {htmlTopics.map((topic, index) => {
              const href = `/${locale}/${topic.slug}`
              const isActive = pathname === href
              return (
                <motion.li
                  key={topic.slug}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 + index * 0.02 }}
                >
                  <motion.div
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href={href}
                      className={isActive ? 'active' : ''}
                    >
                      {translations.html[topic.key as keyof typeof translations.html]}
                    </Link>
                  </motion.div>
                </motion.li>
              )
            })}
          </ul>
        </motion.div>

        <motion.div
          className="sidebar-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3>{translations.nav.css}</h3>
          <ul>
            {cssTopics.map((topic, index) => {
              const href = `/${locale}/${topic.slug}`
              const isActive = pathname === href
              return (
                <motion.li
                  key={topic.slug}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.02 }}
                >
                  <motion.div
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href={href}
                      className={isActive ? 'active' : ''}
                    >
                      {translations.css[topic.key as keyof typeof translations.css]}
                    </Link>
                  </motion.div>
                </motion.li>
              )
            })}
          </ul>
        </motion.div>
      </div>
    </motion.aside>
  )
}

