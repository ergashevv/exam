'use client'

import React, { useEffect, useRef } from 'react'
import { Locale } from '@/lib/translations'
import './TimelineAnimation.scss'

interface TimelineAnimationProps {
  locale: Locale
  items: Array<{ id: string; content: React.ReactNode }>
}

export default function TimelineAnimation({ locale, items }: TimelineAnimationProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window !== 'undefined' && containerRef.current) {
      const anime = require('animejs').default

      const timeline = anime.timeline({
        easing: 'easeOutExpo',
        duration: 600,
      })

      items.forEach((item, index) => {
        const element = containerRef.current?.querySelector(`[data-item-id="${item.id}"]`)
        if (element) {
          timeline.add({
            targets: element,
            opacity: [0, 1],
            translateX: [-50, 0],
            scale: [0.8, 1],
          }, index * 100)
        }
      })
    }
  }, [items])

  return (
    <div ref={containerRef} className="timeline-animation">
      {items.map((item) => (
        <div
          key={item.id}
          data-item-id={item.id}
          className="timeline-item"
          style={{ opacity: 0 }}
        >
          {item.content}
        </div>
      ))}
    </div>
  )
}

