import React from 'react'
import Link from 'next/link'
import { Locale } from '@/lib/translations'
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
    <div className="tutorial-page">
      <div className="tutorial-header">
        <Link href={`/${locale}`} className="back-link">
          ← {translations.common.backToHome}
        </Link>
        <h1>{title}</h1>
      </div>

      <div className="tutorial-content">{children}</div>

      <div className="tutorial-navigation">
        {prevTopic && (
          <Link
            href={`/${locale}/${prevTopic.slug}`}
            className="nav-link prev"
          >
            <span className="nav-label">{translations.common.prevTopic}</span>
            <span className="nav-title">{prevTopic.title}</span>
          </Link>
        )}
        {nextTopic && (
          <Link
            href={`/${locale}/${nextTopic.slug}`}
            className="nav-link next"
          >
            <span className="nav-label">{translations.common.nextTopic}</span>
            <span className="nav-title">{nextTopic.title}</span>
          </Link>
        )}
      </div>
    </div>
  )
}

