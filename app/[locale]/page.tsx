'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { translations, Locale } from '@/lib/translations'
import AnimatedCard from '@/components/AnimatedCard'
import AnimatedText from '@/components/AnimatedText'
import LearningPath from '@/components/LearningPath'
import StaggerAnimation from '@/components/StaggerAnimation'
import ScrollAnimation from '@/components/ScrollAnimation'
import SVGAnimation from '@/components/SVGAnimation'
import SpringAnimation from '@/components/SpringAnimation'
import MotivationalNotification from '@/components/MotivationalNotification'
import './page.scss'

export default function HomePage({
  params,
}: {
  params: { locale: Locale } | Promise<{ locale: Locale }>
}) {
  // Handle both sync and async params
  const resolvedParams = params instanceof Promise ? undefined : params
  const locale = resolvedParams?.locale || 'uz'
  const t = translations[locale] || translations.uz

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
    <motion.div
      className="home-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="hero-section"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <AnimatedText>
          <h1>{t.common.fullTutorial}</h1>
        </AnimatedText>
        <AnimatedText delay={0.2}>
          <p className="subtitle">
            {locale === 'uz'
              ? 'HTML va CSS bo\'yicha barcha mavzularni o\'rganing'
              : 'Изучите все темы по HTML и CSS'}
          </p>
        </AnimatedText>
      </motion.div>

      <section className="topics-section">
        <ScrollAnimation locale={locale}>
          <motion.div
            className="html-topics"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2>{t.common.htmlTopics}</h2>
            <StaggerAnimation locale={locale} animationType="scale" staggerDelay={50}>
              {htmlTopics.map((topic, index) => (
                <SpringAnimation key={topic.slug} locale={locale}>
                  <Link
                    href={`/${locale}/${topic.slug}`}
                    className="topic-card"
                  >
                    <h3>{t.html[topic.key as keyof typeof t.html]}</h3>
                  </Link>
                </SpringAnimation>
              ))}
            </StaggerAnimation>
          </motion.div>
        </ScrollAnimation>

        <ScrollAnimation locale={locale}>
          <motion.div
            className="css-topics"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h2>{t.common.cssTopics}</h2>
            <StaggerAnimation locale={locale} animationType="scale" staggerDelay={50}>
              {cssTopics.map((topic, index) => (
                <SpringAnimation key={topic.slug} locale={locale}>
                  <Link
                    href={`/${locale}/${topic.slug}`}
                    className="topic-card"
                  >
                    <h3>{t.css[topic.key as keyof typeof t.css]}</h3>
                  </Link>
                </SpringAnimation>
              ))}
            </StaggerAnimation>
          </motion.div>
        </ScrollAnimation>
      </section>

      <div style={{ margin: '3rem 0', textAlign: 'center' }}>
        <SVGAnimation 
          locale={locale} 
          type="rotate" 
          svgPath="M50 10 L90 50 L50 90 L10 50 Z"
          color="#667eea"
        />
      </div>

      <motion.section
        className="learning-path-section"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
      >
        <LearningPath locale={locale} />
      </motion.section>

      <MotivationalNotification locale={locale} trigger="time" delay={20000} />
    </motion.div>
  )
}

