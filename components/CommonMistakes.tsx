'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Locale } from '@/lib/translations'
import './CommonMistakes.scss'

interface Mistake {
  mistake: string
  correct: string
  explanation: string
}

interface CommonMistakesProps {
  locale: Locale
  mistakes: Mistake[]
}

export default function CommonMistakes({ locale, mistakes }: CommonMistakesProps) {
  const [isOpen, setIsOpen] = useState(false)

  if (!mistakes || mistakes.length === 0) return null

  return (
    <div className="common-mistakes">
      <button
        className="mistakes-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={locale === 'uz' ? 'Keng tarqalgan xatolar' : 'Распространенные ошибки'}
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
        <span>{locale === 'uz' ? '⚠️ Keng tarqalgan xatolar' : '⚠️ Распространенные ошибки'}</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="mistakes-content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="mistakes-list">
              {mistakes.map((mistake, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="mistake-item"
                >
                  <div className="mistake-wrong">
                    <span className="mistake-label">{locale === 'uz' ? '❌ Xato:' : '❌ Ошибка:'}</span>
                    <code>{mistake.mistake}</code>
                  </div>
                  <div className="mistake-correct">
                    <span className="mistake-label">{locale === 'uz' ? '✅ To\'g\'ri:' : '✅ Правильно:'}</span>
                    <code>{mistake.correct}</code>
                  </div>
                  {mistake.explanation && (
                    <div className="mistake-explanation">
                      <span>{mistake.explanation}</span>
                    </div>
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

