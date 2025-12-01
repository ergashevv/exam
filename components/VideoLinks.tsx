'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Locale } from '@/lib/translations'
import './VideoLinks.scss'

interface VideoLink {
  title: string
  url: string
  platform: 'youtube' | 'other'
  duration?: string
}

interface VideoLinksProps {
  locale: Locale
  videos: VideoLink[]
}

export default function VideoLinks({ locale, videos }: VideoLinksProps) {
  const [isOpen, setIsOpen] = useState(false)

  if (!videos || videos.length === 0) return null

  return (
    <div className="video-links">
      <button
        className="video-links-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={locale === 'uz' ? 'Video darslar' : 'Видео уроки'}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
        <span>{locale === 'uz' ? '🎥 Video darslar' : '🎥 Видео уроки'}</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="video-links-content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="video-list">
              {videos.map((video, index) => (
                <motion.a
                  key={index}
                  href={video.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="video-item"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="video-icon">
                    {video.platform === 'youtube' ? '▶️' : '📹'}
                  </div>
                  <div className="video-info">
                    <div className="video-title">{video.title}</div>
                    {video.duration && (
                      <div className="video-duration">{video.duration}</div>
                    )}
                  </div>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
                  </svg>
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

