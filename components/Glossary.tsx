'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Locale } from '@/lib/translations'
import './Glossary.scss'

interface GlossaryTerm {
  term: string
  definition: string
  example?: string
}

interface GlossaryProps {
  locale: Locale
  terms: GlossaryTerm[]
}

export default function Glossary({ locale, terms }: GlossaryProps) {
  const [isOpen, setIsOpen] = useState(false)

  if (!terms || terms.length === 0) return null

  return (
    <div className="glossary">
      <button
        className="glossary-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={locale === 'uz' ? 'Lug\'at' : 'Словарь'}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
        <span>{locale === 'uz' ? '📖 Atamalar lug\'ati' : '📖 Словарь терминов'}</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="glossary-content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="glossary-terms">
              {terms.map((term, index) => (
                <motion.div
                  key={index}
                  className="glossary-term"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <dt className="term-name">{term.term}</dt>
                  <dd className="term-definition">{term.definition}</dd>
                  {term.example && (
                    <dd className="term-example">
                      <strong>{locale === 'uz' ? 'Misol:' : 'Пример:'}</strong>
                      <code>{term.example}</code>
                    </dd>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

