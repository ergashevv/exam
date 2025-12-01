'use client'

import React, { useEffect, useRef } from 'react'
import { Locale } from '@/lib/translations'
import './CodeBlockAnimation.scss'

interface CodeBlockAnimationProps {
  locale: Locale
  code: string
  language?: string
}

export default function CodeBlockAnimation({ 
  locale, 
  code,
  language = 'html'
}: CodeBlockAnimationProps) {
  const codeRef = useRef<HTMLElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window !== 'undefined' && containerRef.current && codeRef.current) {
      const anime = require('animejs').default

      // Animate code block appearance
      anime({
        targets: containerRef.current,
        opacity: [0, 1],
        scale: [0.95, 1],
        duration: 600,
        easing: 'easeOutExpo',
      })

      // Animate code characters
      const text = codeRef.current.textContent || ''
      codeRef.current.textContent = ''

      anime({
        targets: { value: 0 },
        value: text.length,
        duration: 2000,
        easing: 'linear',
        update: function(anim: any) {
          const currentLength = Math.floor(anim.progress / 100 * text.length)
          codeRef.current!.textContent = text.substring(0, currentLength)
        },
      })
    }
  }, [code, language])

  return (
    <div ref={containerRef} className="code-block-animation" style={{ opacity: 0 }}>
      <pre className="code-block">
        <code ref={codeRef} className={language ? `language-${language}` : ''}>
          {code}
        </code>
      </pre>
    </div>
  )
}

