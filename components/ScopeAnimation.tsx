'use client'

import React, { useEffect, useRef } from 'react'
import { Locale } from '@/lib/translations'
import './ScopeAnimation.scss'

interface ScopeAnimationProps {
  locale: Locale
  children: React.ReactNode
  mediaQuery?: string
}

export default function ScopeAnimation({ 
  locale, 
  children,
  mediaQuery = '(max-width: 768px)'
}: ScopeAnimationProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window !== 'undefined' && containerRef.current) {
      const anime = require('animejs').default

      const mediaQueryList = window.matchMedia(mediaQuery)

      const handleMediaChange = (e: MediaQueryListEvent) => {
        if (e.matches) {
          // Mobile animation
          anime({
            targets: containerRef.current?.children,
            translateY: [50, 0],
            opacity: [0, 1],
            duration: 600,
            delay: anime.stagger(100),
            easing: 'easeOutExpo',
          })
        } else {
          // Desktop animation
          anime({
            targets: containerRef.current?.children,
            translateX: [-50, 0],
            opacity: [0, 1],
            duration: 600,
            delay: anime.stagger(100),
            easing: 'easeOutExpo',
          })
        }
      }

      // Initial animation
      handleMediaChange({ matches: mediaQueryList.matches } as MediaQueryListEvent)

      mediaQueryList.addEventListener('change', handleMediaChange)

      return () => {
        mediaQueryList.removeEventListener('change', handleMediaChange)
      }
    }
  }, [mediaQuery])

  return (
    <div ref={containerRef} className="scope-animation">
      {React.Children.map(children, (child, index) => (
        <div key={index} className="scope-item" style={{ opacity: 0 }}>
          {child}
        </div>
      ))}
    </div>
  )
}

