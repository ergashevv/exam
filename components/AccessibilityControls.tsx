'use client'

import React, { useState, useEffect } from 'react'
import { Locale } from '@/lib/translations'
import './AccessibilityControls.scss'

interface AccessibilityControlsProps {
  locale: Locale
}

export default function AccessibilityControls({ locale }: AccessibilityControlsProps) {
  const [fontSize, setFontSize] = useState(16)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const savedFontSize = localStorage.getItem('fontSize')
    if (savedFontSize) {
      setFontSize(Number(savedFontSize))
      document.documentElement.style.fontSize = `${savedFontSize}px`
    }
  }, [])

  const handleFontSizeChange = (size: number) => {
    setFontSize(size)
    document.documentElement.style.fontSize = `${size}px`
    localStorage.setItem('fontSize', size.toString())
  }

  return (
    <div className="accessibility-controls">
      <button
        className="accessibility-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={locale === 'uz' ? 'Accessibility sozlamalari' : 'Настройки доступности'}
      >
        ♿
      </button>

      {isOpen && (
        <div className="accessibility-panel">
          <h4>{locale === 'uz' ? 'Shrift o\'lchami' : 'Размер шрифта'}</h4>
          <div className="font-size-controls">
            <button
              onClick={() => handleFontSizeChange(14)}
              className={fontSize === 14 ? 'active' : ''}
            >
              A-
            </button>
            <button
              onClick={() => handleFontSizeChange(16)}
              className={fontSize === 16 ? 'active' : ''}
            >
              A
            </button>
            <button
              onClick={() => handleFontSizeChange(18)}
              className={fontSize === 18 ? 'active' : ''}
            >
              A+
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

