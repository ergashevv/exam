'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Locale } from '@/lib/translations'
import { getRandomMotivationalMessage } from '@/lib/motivationalMessages'
import './MotivationalNotification.scss'

interface MotivationalNotificationProps {
  locale: Locale
  trigger?: 'scroll' | 'time' | 'manual'
  delay?: number
}

export default function MotivationalNotification({ 
  locale, 
  trigger = 'scroll',
  delay = 30000 
}: MotivationalNotificationProps) {
  const [showNotification, setShowNotification] = useState(false)
  const [message, setMessage] = useState('')
  const hasShownRef = useRef(false)
  const lastShownTimeRef = useRef(0)
  const scrollTimeoutRef = useRef<NodeJS.Timeout>()

  useEffect(() => {
    if (locale !== 'ru') return

    const MIN_INTERVAL = 3000 // Minimum 30 seconds between notifications

    if (trigger === 'time') {
      const timer = setTimeout(() => {
        const now = Date.now()
        if (now - lastShownTimeRef.current < MIN_INTERVAL) return
        
        const newMessage = getRandomMotivationalMessage('ru')
        setMessage(newMessage)
        setShowNotification(true)
        hasShownRef.current = true
        lastShownTimeRef.current = now
        
        setTimeout(() => {
          setShowNotification(false)
        }, 7000)
      }, delay)

      return () => clearTimeout(timer)
    } else if (trigger === 'scroll') {
      const handleScroll = () => {
        if (scrollTimeoutRef.current) {
          clearTimeout(scrollTimeoutRef.current)
        }
        
        scrollTimeoutRef.current = setTimeout(() => {
          const now = Date.now()
          const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
          
          // Show notification when user stops scrolling at 25-75% of page
          if (scrollPercent > 25 && scrollPercent < 75) {
            // Check if enough time has passed and hasn't been shown yet
            if (now - lastShownTimeRef.current >= MIN_INTERVAL && !hasShownRef.current) {
              const newMessage = getRandomMotivationalMessage('ru')
              setMessage(newMessage)
              setShowNotification(true)
              hasShownRef.current = true
              lastShownTimeRef.current = now
              
              setTimeout(() => {
                setShowNotification(false)
                // Reset after 1 minute to allow next notification
                setTimeout(() => {
                  hasShownRef.current = false
                }, 60000)
              }, 7000)
            }
          }
        }, 1000)
      }

      window.addEventListener('scroll', handleScroll, { passive: true })
      return () => {
        window.removeEventListener('scroll', handleScroll)
        if (scrollTimeoutRef.current) {
          clearTimeout(scrollTimeoutRef.current)
        }
      }
    }
  }, [locale, trigger, delay])

  const handleClose = () => {
    setShowNotification(false)
  }

  if (locale !== 'ru' || !showNotification || !message) return null

  return (
    <AnimatePresence>
      {showNotification && (
        <motion.div
          className="motivational-notification"
          initial={{ opacity: 0, y: 100, scale: 0.8, rotateX: -15 }}
          animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
          exit={{ opacity: 0, y: 100, scale: 0.8, rotateX: 15 }}
          transition={{ 
            duration: 0.6, 
            type: 'spring', 
            stiffness: 200, 
            damping: 20 
          }}
        >
          <div className="notification-glow"></div>
          <div className="notification-icon-wrapper">
            <motion.div 
              className="notification-icon"
              animate={{ 
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                repeatDelay: 3,
                ease: 'easeInOut'
              }}
            >
              💪
            </motion.div>
          </div>
          <div className="notification-content">
            <p className="notification-text">{message}</p>
          </div>
          <button 
            className="notification-close" 
            onClick={handleClose} 
            aria-label="Close"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path 
                d="M10 4L4 10M4 4l6 6" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round"
              />
            </svg>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

