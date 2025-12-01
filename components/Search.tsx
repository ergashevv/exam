'use client'

import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Locale, translations } from '@/lib/translations'
import './Search.scss'

interface SearchResult {
  title: string
  slug: string
  category: 'html' | 'css'
  locale: Locale
}

interface SearchProps {
  locale: Locale
}

export default function Search({ locale }: SearchProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchResult[]>([])
  const searchRef = useRef<HTMLDivElement>(null)
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

  useEffect(() => {
    if (query.trim().length === 0) {
      setResults([])
      return
    }

    const searchQuery = query.toLowerCase().trim()
    const foundResults: SearchResult[] = []

    // Search HTML topics
    htmlTopics.forEach((topic) => {
      const title = t.html[topic.key as keyof typeof t.html]
      if (title.toLowerCase().includes(searchQuery)) {
        foundResults.push({
          title,
          slug: topic.slug,
          category: 'html',
          locale,
        })
      }
    })

    // Search CSS topics
    cssTopics.forEach((topic) => {
      const title = t.css[topic.key as keyof typeof t.css]
      if (title.toLowerCase().includes(searchQuery)) {
        foundResults.push({
          title,
          slug: topic.slug,
          category: 'css',
          locale,
        })
      }
    })

    setResults(foundResults.slice(0, 10))
  }, [query, locale, t])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsOpen(false)
      setQuery('')
    }
  }

  return (
    <div className="search-container" ref={searchRef}>
      <button
        className="search-trigger"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={locale === 'uz' ? 'Qidirish' : 'Поиск'}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.35-4.35" />
        </svg>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="search-modal"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            <div className="search-input-wrapper">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="search-icon"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
              <input
                type="text"
                className="search-input"
                placeholder={locale === 'uz' ? 'Qidirish...' : 'Поиск...'}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                autoFocus
              />
              {query && (
                <button
                  className="search-clear"
                  onClick={() => setQuery('')}
                  aria-label={locale === 'uz' ? 'Tozalash' : 'Очистить'}
                >
                  ×
                </button>
              )}
            </div>

            {query && (
              <div className="search-results">
                {results.length > 0 ? (
                  <ul>
                    {results.map((result) => (
                      <li key={result.slug}>
                        <Link
                          href={`/${locale}/${result.slug}`}
                          onClick={() => {
                            setIsOpen(false)
                            setQuery('')
                          }}
                        >
                          <span className="result-category">
                            {result.category.toUpperCase()}
                          </span>
                          <span className="result-title">{result.title}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="no-results">
                    {locale === 'uz'
                      ? 'Hech narsa topilmadi'
                      : 'Ничего не найдено'}
                  </div>
                )}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

