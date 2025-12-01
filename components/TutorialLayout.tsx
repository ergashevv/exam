'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Locale } from '@/lib/translations'
import PrintButton from './PrintButton'
import TableOfContents from './TableOfContents'
import Breadcrumbs from './Breadcrumbs'
import RelatedTopics from './RelatedTopics'
import Encouragement from './Encouragement'
import './TutorialLayout.scss'

interface TutorialLayoutProps {
  locale: Locale
  translations: any
  title: string
  children: React.ReactNode
  prevTopic?: { slug: string; title: string }
  nextTopic?: { slug: string; title: string }
  category?: 'html' | 'css'
}

export default function TutorialLayout({
  locale,
  translations,
  title,
  children,
  prevTopic,
  nextTopic,
  category,
}: TutorialLayoutProps) {
  // Auto-detect category from prevTopic or nextTopic if not provided
  const detectedCategory = category || 
    (prevTopic?.slug.startsWith('html-') ? 'html' : 
     prevTopic?.slug.startsWith('css-') ? 'css' :
     nextTopic?.slug.startsWith('html-') ? 'html' :
     nextTopic?.slug.startsWith('css-') ? 'css' : 'html')
  return (
    <motion.div
      className="tutorial-page"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="tutorial-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <motion.div
          whileHover={{ x: -5 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link href={`/${locale}`} className="back-link">
            ← {translations.common.backToHome}
          </Link>
        </motion.div>
        <Breadcrumbs locale={locale} category={detectedCategory} title={title} />
        <div className="tutorial-title-row">
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {title}
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <PrintButton locale={locale} />
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="tutorial-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {children}
        <RelatedTopics 
          locale={locale} 
          currentSlug={prevTopic?.slug || nextTopic?.slug || ''}
          category={detectedCategory}
        />
      </motion.div>

      <TableOfContents locale={locale} />
      <Encouragement locale={locale} />

      <motion.div
        className="tutorial-navigation"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        {prevTopic && (
          <motion.div
            whileHover={{ x: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href={`/${locale}/${prevTopic.slug}`}
              className="nav-link prev"
            >
              <span className="nav-label">{translations.common.prevTopic}</span>
              <span className="nav-title">{prevTopic.title}</span>
            </Link>
          </motion.div>
        )}
        {nextTopic && (
          <motion.div
            whileHover={{ x: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href={`/${locale}/${nextTopic.slug}`}
              className="nav-link next"
            >
              <span className="nav-label">{translations.common.nextTopic}</span>
              <span className="nav-title">{nextTopic.title}</span>
            </Link>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  )
}

