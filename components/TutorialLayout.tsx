'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Locale } from '@/lib/translations'
import PrintButton from './PrintButton'
import './TutorialLayout.scss'

interface TutorialLayoutProps {
  locale: Locale
  translations: any
  title: string
  children: React.ReactNode
  prevTopic?: { slug: string; title: string }
  nextTopic?: { slug: string; title: string }
}

export default function TutorialLayout({
  locale,
  translations,
  title,
  children,
  prevTopic,
  nextTopic,
}: TutorialLayoutProps) {
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
      </motion.div>

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

