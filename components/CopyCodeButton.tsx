'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import './CopyCodeButton.scss'

interface CopyCodeButtonProps {
  code: string
  locale: 'uz' | 'ru'
}

export default function CopyCodeButton({ code, locale }: CopyCodeButtonProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  return (
    <motion.button
      className="copy-code-button"
      onClick={handleCopy}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      title={locale === 'uz' ? 'Kodni nusxalash' : 'Копировать код'}
    >
      {copied ? (
        <>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="20 6 9 17 4 12" />
          </svg>
          <span>{locale === 'uz' ? 'Nusxalandi!' : 'Скопировано!'}</span>
        </>
      ) : (
        <>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
          </svg>
          <span>{locale === 'uz' ? 'Nusxalash' : 'Копировать'}</span>
        </>
      )}
    </motion.button>
  )
}

