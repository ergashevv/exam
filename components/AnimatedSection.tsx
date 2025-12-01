'use client'

import React, { useEffect, useRef } from 'react'
import { Locale } from '@/lib/translations'
import './AnimatedSection.scss'

interface AnimatedSectionProps {
  locale: Locale
  children: React.ReactNode
  animationType?: 'fadeIn' | 'slideUp' | 'scale' | 'rotate' | 'bounce'
  delay?: number
}

export default function AnimatedSection({ 
  locale, 
  children, 
  animationType = 'fadeIn',
  delay = 0 
}: AnimatedSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window !== 'undefined' && sectionRef.current) {
      import('animejs').then((animeModule: any) => {
        const anime = (animeModule.default || animeModule) as any

        const animations = {
        fadeIn: {
          opacity: [0, 1],
          translateY: [30, 0],
        },
        slideUp: {
          translateY: [100, 0],
          opacity: [0, 1],
        },
        scale: {
          scale: [0.8, 1],
          opacity: [0, 1],
        },
        rotate: {
          rotate: [-180, 0],
          opacity: [0, 1],
        },
        bounce: {
          translateY: [0, -20, 0],
          opacity: [0, 1],
        },
      }

      anime({
        targets: sectionRef.current,
        ...animations[animationType],
        duration: 800,
        delay: delay,
        easing: 'easeOutExpo',
      })
      }).catch((err) => {
        console.error('Failed to load anime.js:', err)
      })
    }
  }, [animationType, delay])

  return (
    <div ref={sectionRef} className="animated-section">
      {children}
    </div>
  )
}

