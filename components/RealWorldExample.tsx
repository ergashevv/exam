'use client'

import React from 'react'
import { Locale } from '@/lib/translations'
import './RealWorldExample.scss'

interface RealWorldExampleProps {
  locale: Locale
  title: string
  description: string
  example: string
}

export default function RealWorldExample({ locale, title, description, example }: RealWorldExampleProps) {
  return (
    <div className="real-world-example">
      <div className="real-world-header">
        <span className="real-world-icon">🌍</span>
        <h4>{title}</h4>
      </div>
      <p className="real-world-description">{description}</p>
      <div className="real-world-code">
        <pre>
          <code>{example}</code>
        </pre>
      </div>
    </div>
  )
}

