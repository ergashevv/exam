'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Locale } from '@/lib/translations'
import './SimpleExplanation.scss'

interface SimpleExplanationProps {
  locale: Locale
  title: string
  explanation: string
  emoji?: string
}

export default function SimpleExplanation({ locale, title, explanation, emoji = '💡' }: SimpleExplanationProps) {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <div className="simple-explanation">
      <button
        className="simple-explanation-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={locale === 'uz' ? 'Oddiy tushuntirish' : 'Простое объяснение'}
      >
        <span className="simple-emoji">{emoji}</span>
        <span className="simple-title">{title}</span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="simple-explanation-content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p>{explanation}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

