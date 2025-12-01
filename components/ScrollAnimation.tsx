'use client'

import React, { useEffect, useRef } from 'react'
import { Locale } from '@/lib/translations'
import './ScrollAnimation.scss'

interface ScrollAnimationProps {
  locale: Locale
  children: React.ReactNode
  threshold?: number
}

export default function ScrollAnimation({ 
  locale, 
  children, 
  threshold = 0.3 
}: ScrollAnimationProps) {
  const elementRef = useRef<HTMLDivElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (typeof window === 'undefined' || !elementRef.current || hasAnimated.current) return

    import('animejs').then((animeModule: any) => {
      const anime = animeModule.default || animeModule
      if (!anime || typeof anime !== 'function') {
        console.error('Anime.js is not a function')
        return
      }

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !hasAnimated.current) {
              hasAnimated.current = true

              anime({
                targets: elementRef.current,
                opacity: [0, 1],
                translateY: [50, 0],
                scale: [0.9, 1],
                duration: 1000,
                easing: 'easeOutExpo',
              })

              observer.unobserve(entry.target)
            }
          })
        },
        { threshold }
      )

      observer.observe(elementRef.current!)

      return () => {
        if (elementRef.current) {
          observer.unobserve(elementRef.current)
        }
      }
    }).catch((err) => {
      console.error('Failed to load anime.js:', err)
    })
  }, [threshold])

  return (
    <div ref={elementRef} className="scroll-animation" style={{ opacity: 0 }}>
      {children}
    </div>
  )
}

