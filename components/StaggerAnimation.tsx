'use client'

import React, { useEffect, useRef } from 'react'
import { Locale } from '@/lib/translations'
import './StaggerAnimation.scss'

interface StaggerAnimationProps {
  locale: Locale
  children: React.ReactNode[]
  staggerDelay?: number
  animationType?: 'fade' | 'slide' | 'scale' | 'rotate'
}

export default function StaggerAnimation({ 
  locale, 
  children, 
  staggerDelay = 100,
  animationType = 'fade'
}: StaggerAnimationProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window !== 'undefined' && containerRef.current) {
      import('animejs').then((animeModule: any) => {
        const anime = animeModule.default || animeModule
        if (!anime || typeof anime !== 'function') {
          console.error('Anime.js is not a function')
          return
        }

        const animations = {
          fade: {
            opacity: [0, 1],
            translateY: [20, 0],
          },
          slide: {
            translateX: [-50, 0],
            opacity: [0, 1],
          },
          scale: {
            scale: [0.5, 1],
            opacity: [0, 1],
          },
          rotate: {
            rotate: [-180, 0],
            opacity: [0, 1],
          },
        }

        const children = containerRef.current?.children
        if (!children || children.length === 0) return

        Array.from(children).forEach((child, index) => {
          anime({
            targets: child,
            ...animations[animationType],
            duration: 600,
            delay: index * staggerDelay,
            easing: 'easeOutExpo',
          })
        })
      }).catch((err) => {
        console.error('Failed to load anime.js:', err)
      })
    }
  }, [children, staggerDelay, animationType])

  return (
    <div ref={containerRef} className="stagger-animation">
      {children.map((child, index) => (
        <div key={index} className="stagger-item" style={{ opacity: 0 }}>
          {child}
        </div>
      ))}
    </div>
  )
}

