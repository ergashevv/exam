'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Locale } from '@/lib/translations'
import './KeyPoints.scss'

interface KeyPointsProps {
  locale: Locale
  points: string[]
}

export default function KeyPoints({ locale, points }: KeyPointsProps) {
  const [isOpen, setIsOpen] = useState(true)

  if (!points || points.length === 0) return null

  return (
    <div className="key-points">
      <button
        className="key-points-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={locale === 'uz' ? 'Asosiy qoidalar' : 'Основные правила'}
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
        <span>{locale === 'uz' ? '🔑 Asosiy qoidalar' : '🔑 Основные правила'}</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="key-points-content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="key-points-list">
              {points.map((point, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="key-point-item"
                >
                  <span className="key-point-icon">✓</span>
                  <span>{point}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

