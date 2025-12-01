'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Locale, translations } from '@/lib/translations'
import './RelatedTopics.scss'

interface RelatedTopicsProps {
  locale: Locale
  currentSlug: string
  category: 'html' | 'css'
}

export default function RelatedTopics({ locale, currentSlug, category }: RelatedTopicsProps) {
  const t = translations[locale] || translations.uz

  const htmlTopics = [
    { slug: 'html-headings', title: t.html.headings },
    { slug: 'html-paragraphs', title: t.html.paragraphs },
    { slug: 'html-links', title: t.html.links },
    { slug: 'html-images', title: t.html.images },
    { slug: 'html-forms', title: t.html.forms },
    { slug: 'html-tables', title: t.html.tables },
  ]

  const cssTopics = [
    { slug: 'css-colors', title: t.css.colors },
    { slug: 'css-margins', title: t.css.margins },
    { slug: 'css-padding', title: t.css.padding },
    { slug: 'css-display', title: t.css.display },
    { slug: 'css-position', title: t.css.position },
  ]

  const topics = category === 'html' ? htmlTopics : cssTopics
  const relatedTopics = topics
    .filter((topic) => topic.slug !== currentSlug)
    .slice(0, 4)

  if (relatedTopics.length === 0) return null

  return (
    <div className="related-topics">
      <h3>{locale === 'uz' ? 'Tegishli mavzular' : 'Связанные темы'}</h3>
      <div className="related-topics-grid">
        {relatedTopics.map((topic, index) => (
          <motion.div
            key={topic.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
          >
            <Link href={`/${locale}/${topic.slug}`} className="related-topic-card">
              <span className="topic-icon">
                {category === 'html' ? '📄' : '🎨'}
              </span>
              <span className="topic-title">{topic.title}</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

