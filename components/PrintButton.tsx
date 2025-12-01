'use client'

import React from 'react'
import { Locale } from '@/lib/translations'
import './PrintButton.scss'

interface PrintButtonProps {
  locale: Locale
}

export default function PrintButton({ locale }: PrintButtonProps) {
  const handlePrint = () => {
    window.print()
  }

  return (
    <button
      className="print-button"
      onClick={handlePrint}
      aria-label={locale === 'uz' ? 'Chop etish' : 'Печать'}
      title={locale === 'uz' ? 'Chop etish' : 'Печать'}
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
        <polyline points="6 9 6 2 18 2 18 9" />
        <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
        <rect x="6" y="14" width="12" height="8" />
      </svg>
      <span>{locale === 'uz' ? 'Chop etish' : 'Печать'}</span>
    </button>
  )
}

