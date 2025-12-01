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
      import('animejs').then((animeModule: any) => {
        const anime = animeModule.default || animeModule
        if (!anime || typeof anime !== 'function') {
          console.error('Anime.js is not a function')
          return
        }

        // Animate code block appearance
        anime({
          targets: containerRef.current,
          opacity: [0, 1],
          scale: [0.95, 1],
          duration: 600,
          easing: 'easeOutExpo',
        })

        // Animate code characters
        if (!codeRef.current) return
        const text = codeRef.current.textContent || ''
        codeRef.current.textContent = ''

        let currentLength = 0
        anime({
          targets: { value: 0 },
          value: text.length,
          duration: 2000,
          easing: 'linear',
          update: function(anim: any) {
            currentLength = Math.floor(anim.progress / 100 * text.length)
            if (codeRef.current) {
              codeRef.current.textContent = text.substring(0, currentLength)
            }
          },
        })
      }).catch((err) => {
        console.error('Failed to load anime.js:', err)
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

