'use client'

import React, { useState, useEffect } from 'react'
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
  const [hasShown, setHasShown] = useState(false)

  useEffect(() => {
    if (locale !== 'ru' || hasShown) return

    if (trigger === 'time') {
      const timer = setTimeout(() => {
        setMessage(getRandomMotivationalMessage('ru'))
        setShowNotification(true)
        setHasShown(true)
        
        setTimeout(() => {
          setShowNotification(false)
        }, 8000)
      }, delay)

      return () => clearTimeout(timer)
    } else if (trigger === 'scroll') {
      let scrollTimeout: NodeJS.Timeout
      
      const handleScroll = () => {
        clearTimeout(scrollTimeout)
        
        scrollTimeout = setTimeout(() => {
          const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
          
          // Show notification when user stops scrolling at 40-60% of page
          if (scrollPercent > 40 && scrollPercent < 60 && !hasShown) {
            setMessage(getRandomMotivationalMessage('ru'))
            setShowNotification(true)
            setHasShown(true)
            
            setTimeout(() => {
              setShowNotification(false)
            }, 8000)
          }
        }, 1000)
      }

      window.addEventListener('scroll', handleScroll)
      return () => {
        window.removeEventListener('scroll', handleScroll)
        clearTimeout(scrollTimeout)
      }
    }
  }, [locale, trigger, delay, hasShown])

  const handleClose = () => {
    setShowNotification(false)
  }

  if (locale !== 'ru' || !showNotification || !message) return null

  return (
    <AnimatePresence>
      {showNotification && (
        <motion.div
          className="motivational-notification"
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.8 }}
          transition={{ duration: 0.4, type: 'spring', stiffness: 200 }}
        >
          <div className="notification-content">
            <div className="notification-emoji">💪</div>
            <p className="notification-text">{message}</p>
          </div>
          <button className="notification-close" onClick={handleClose}>
            ×
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

