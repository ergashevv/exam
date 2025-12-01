'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Locale } from '@/lib/translations'
import './TableOfContents.scss'

interface TableOfContentsProps {
  locale: Locale
}

interface Heading {
  id: string
  text: string
  level: number
}

export default function TableOfContents({ locale }: TableOfContentsProps) {
  const [headings, setHeadings] = useState<Heading[]>([])
  const [activeId, setActiveId] = useState<string>('')
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const content = document.querySelector('.tutorial-content')
    if (!content) return

    const headingElements = content.querySelectorAll('h2, h3')
    const headingList: Heading[] = []

    headingElements.forEach((heading) => {
      const id = heading.id || heading.textContent?.toLowerCase().replace(/\s+/g, '-') || ''
      if (!heading.id) {
        heading.id = id
      }
      headingList.push({
        id,
        text: heading.textContent || '',
        level: parseInt(heading.tagName.charAt(1)),
      })
    })

    setHeadings(headingList)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const headingElements = document.querySelectorAll('.tutorial-content h2, .tutorial-content h3')
      let current = ''

      headingElements.forEach((heading) => {
        const rect = heading.getBoundingClientRect()
        if (rect.top <= 100) {
          current = heading.id
        }
      })

      setActiveId(current)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [headings])

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 100
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    }
  }

  if (headings.length === 0) return null

  return (
    <div className={`table-of-contents ${isOpen ? 'open' : ''}`}>
      <button
        className="toc-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={locale === 'uz' ? 'Mundarija' : 'Содержание'}
      >
        <span>{locale === 'uz' ? '📑 Mundarija' : '📑 Содержание'}</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      <motion.div
        className="toc-content"
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <ul className="toc-list">
          {headings.map((heading) => (
            <li
              key={heading.id}
              className={`toc-item toc-level-${heading.level} ${activeId === heading.id ? 'active' : ''}`}
            >
              <button onClick={() => scrollToHeading(heading.id)}>
                {heading.text}
              </button>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  )
}

