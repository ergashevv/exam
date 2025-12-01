'use client'

import React from 'react'
import { Locale } from '@/lib/translations'
import './VisualExample.scss'

interface VisualExampleProps {
  locale: Locale
  html?: string
  css?: string
  description?: string
}

export default function VisualExample({ locale, html = '', css = '', description }: VisualExampleProps) {
  const fullHtml = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>${css}</style>
    </head>
    <body>
      ${html}
    </body>
    </html>
  `

  return (
    <div className="visual-example">
      {description && (
        <div className="visual-description">
          <strong>{locale === 'uz' ? '📱 Ko\'rinishi:' : '📱 Как выглядит:'}</strong>
          <p>{description}</p>
        </div>
      )}
      <div className="visual-preview">
        <iframe
          srcDoc={fullHtml}
          title="Visual Example"
          className="visual-iframe"
          sandbox="allow-scripts"
        />
      </div>
    </div>
  )
}

