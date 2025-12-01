'use client'

import React, { useEffect, useRef } from 'react'
import { Locale } from '@/lib/translations'
import './SVGAnimation.scss'

interface SVGAnimationProps {
  locale: Locale
  type?: 'draw' | 'morph' | 'rotate' | 'scale'
  svgPath?: string
  color?: string
}

export default function SVGAnimation({ 
  locale, 
  type = 'draw',
  svgPath = 'M10 10 L90 10 L90 90 L10 90 Z',
  color = '#667eea'
}: SVGAnimationProps) {
  const svgRef = useRef<SVGSVGElement>(null)
  const pathRef = useRef<SVGPathElement>(null)

  useEffect(() => {
    if (typeof window !== 'undefined' && pathRef.current) {
      const anime = require('animejs').default

      if (type === 'draw') {
        const pathLength = pathRef.current.getTotalLength()
        pathRef.current.style.strokeDasharray = `${pathLength}`
        pathRef.current.style.strokeDashoffset = `${pathLength}`

        anime({
          targets: pathRef.current,
          strokeDashoffset: [pathLength, 0],
          duration: 2000,
          easing: 'easeInOutSine',
          delay: 500,
        })
      } else if (type === 'morph') {
        const morphPaths = [
            'M10 10 L90 10 L90 90 L10 90 Z',
            'M50 10 L90 50 L50 90 L10 50 Z',
            'M50 10 Q90 50 50 90 Q10 50 50 10 Z',
          ]

        anime({
          targets: pathRef.current,
          d: morphPaths,
          duration: 3000,
          easing: 'easeInOutQuad',
          loop: true,
          direction: 'alternate',
        })
      } else if (type === 'rotate') {
        anime({
          targets: svgRef.current,
          rotate: 360,
          duration: 2000,
          easing: 'linear',
          loop: true,
        })
      } else if (type === 'scale') {
        anime({
          targets: pathRef.current,
          scale: [1, 1.2, 1],
          duration: 1500,
          easing: 'easeInOutQuad',
          loop: true,
        })
      }
    }
  }, [type, svgPath, color])

  return (
    <div className="svg-animation">
      <svg
        ref={svgRef}
        width="100"
        height="100"
        viewBox="0 0 100 100"
        className="svg-container"
      >
        <path
          ref={pathRef}
          d={svgPath}
          fill="none"
          stroke={color}
          strokeWidth="2"
          className="svg-path"
        />
      </svg>
    </div>
  )
}

