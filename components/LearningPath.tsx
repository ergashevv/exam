'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Locale, translations } from '@/lib/translations'
import './LearningPath.scss'

interface LearningPathProps {
  locale: Locale
}

export default function LearningPath({ locale }: LearningPathProps) {
  const t = translations[locale] || translations.uz

  const htmlPath = [
    { slug: 'html-headings', title: t.html.headings, step: 1 },
    { slug: 'html-paragraphs', title: t.html.paragraphs, step: 2 },
    { slug: 'html-links', title: t.html.links, step: 3 },
    { slug: 'html-images', title: t.html.images, step: 4 },
    { slug: 'html-forms', title: t.html.forms, step: 5 },
    { slug: 'html-tables', title: t.html.tables, step: 6 },
  ]

  const cssPath = [
    { slug: 'css-colors', title: t.css.colors, step: 1 },
    { slug: 'css-margins', title: t.css.margins, step: 2 },
    { slug: 'css-padding', title: t.css.padding, step: 3 },
    { slug: 'css-display', title: t.css.display, step: 4 },
    { slug: 'css-position', title: t.css.position, step: 5 },
  ]

  return (
    <div className="learning-path">
      <h3>{locale === 'uz' ? '📚 O\'rganish yo\'li' : '📚 Путь обучения'}</h3>
      <p className="learning-path-description">
        {locale === 'uz'
          ? 'Quyidagi tartibda o\'rganishni tavsiya qilamiz:'
          : 'Рекомендуем изучать в следующем порядке:'}
      </p>

      <div className="learning-path-sections">
        <div className="path-section">
          <h4>HTML</h4>
          <div className="path-steps">
            {htmlPath.map((item, index) => (
              <motion.div
                key={item.slug}
                className="path-step"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <span className="step-number">{item.step}</span>
                <Link href={`/${locale}/${item.slug}`} className="step-link">
                  {item.title}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="path-section">
          <h4>CSS</h4>
          <div className="path-steps">
            {cssPath.map((item, index) => (
              <motion.div
                key={item.slug}
                className="path-step"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <span className="step-number">{item.step}</span>
                <Link href={`/${locale}/${item.slug}`} className="step-link">
                  {item.title}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

