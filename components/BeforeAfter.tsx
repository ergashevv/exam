'use client'

import React, { useState } from 'react'
import { Locale } from '@/lib/translations'
import './BeforeAfter.scss'

interface BeforeAfterProps {
  locale: Locale
  beforeCode: string
  afterCode: string
  beforeTitle?: string
  afterTitle?: string
}

export default function BeforeAfter({
  locale,
  beforeCode,
  afterCode,
  beforeTitle,
  afterTitle,
}: BeforeAfterProps) {
  const [activeView, setActiveView] = useState<'before' | 'after' | 'both'>('both')

  return (
    <div className="before-after">
      <div className="view-controls">
        <button
          className={activeView === 'before' ? 'active' : ''}
          onClick={() => setActiveView('before')}
        >
          {beforeTitle || (locale === 'uz' ? 'Oldin' : 'До')}
        </button>
        <button
          className={activeView === 'both' ? 'active' : ''}
          onClick={() => setActiveView('both')}
        >
          {locale === 'uz' ? 'Ikki tomonlama' : 'Оба'}
        </button>
        <button
          className={activeView === 'after' ? 'active' : ''}
          onClick={() => setActiveView('after')}
        >
          {afterTitle || (locale === 'uz' ? 'Keyin' : 'После')}
        </button>
      </div>

      <div className="comparison-container">
        {(activeView === 'before' || activeView === 'both') && (
          <div className="comparison-item">
            <h4>{beforeTitle || (locale === 'uz' ? 'Oldin' : 'До')}</h4>
            <pre>
              <code>{beforeCode}</code>
            </pre>
          </div>
        )}

        {(activeView === 'after' || activeView === 'both') && (
          <div className="comparison-item">
            <h4>{afterTitle || (locale === 'uz' ? 'Keyin' : 'После')}</h4>
            <pre>
              <code>{afterCode}</code>
            </pre>
          </div>
        )}
      </div>
    </div>
  )
}

