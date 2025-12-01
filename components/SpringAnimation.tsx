'use client'

import React, { useEffect, useRef, useState } from 'react'
import { Locale } from '@/lib/translations'
import './SpringAnimation.scss'

interface SpringAnimationProps {
  locale: Locale
  children: React.ReactNode
  stiffness?: number
  damping?: number
}

export default function SpringAnimation({ 
  locale, 
  children,
  stiffness = 100,
  damping = 10
}: SpringAnimationProps) {
  const elementRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined' && elementRef.current) {
      import('animejs').then((animeModule: any) => {
        const anime = animeModule.default || animeModule
        if (!anime || typeof anime !== 'function') {
          console.error('Anime.js is not a function')
          return
        }

        if (isHovered) {
          anime({
            targets: elementRef.current,
            scale: 1.1,
            rotate: 5,
            duration: 300,
            easing: 'easeOutElastic(1, .6)',
          })
        } else {
          anime({
            targets: elementRef.current,
            scale: 1,
            rotate: 0,
            duration: 300,
            easing: 'easeOutElastic(1, .6)',
          })
        }
      }).catch((err) => {
        console.error('Failed to load anime.js:', err)
      })
    }
  }, [isHovered, stiffness, damping])

  return (
    <div
      ref={elementRef}
      className="spring-animation"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </div>
  )
}

