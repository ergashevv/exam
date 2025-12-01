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
      const anime = require('animejs').default

      if (isHovered) {
        anime({
          targets: elementRef.current,
          scale: 1.1,
          rotate: 5,
          duration: 300,
          easing: `spring(${stiffness}, ${damping})`,
        })
      } else {
        anime({
          targets: elementRef.current,
          scale: 1,
          rotate: 0,
          duration: 300,
          easing: `spring(${stiffness}, ${damping})`,
        })
      }
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

