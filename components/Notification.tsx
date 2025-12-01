'use client'

import React, { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Locale } from '@/lib/translations'
import './Notification.scss'

interface NotificationProps {
  locale: Locale
  type: 'success' | 'encouragement' | 'tip' | 'achievement'
  message: string
  onClose: () => void
  duration?: number
}

export default function Notification({ 
  locale, 
  type, 
  message, 
  onClose, 
  duration = 4000 
}: NotificationProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose()
    }, duration)

    return () => clearTimeout(timer)
  }, [duration, onClose])

  const icons = {
    success: '✅',
    encouragement: '🎉',
    tip: '💡',
    achievement: '🏆'
  }

  const colors = {
    success: '#4caf50',
    encouragement: '#ff9800',
    tip: '#2196f3',
    achievement: '#9c27b0'
  }

  return (
    <AnimatePresence>
      <motion.div
        className="notification"
        initial={{ opacity: 0, y: -50, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -50, scale: 0.8 }}
        transition={{ duration: 0.3, type: 'spring' }}
        style={{ borderLeftColor: colors[type] }}
      >
        <div className="notification-icon">{icons[type]}</div>
        <div className="notification-content">
          <p>{message}</p>
        </div>
        <button className="notification-close" onClick={onClose}>
          ×
        </button>
      </motion.div>
    </AnimatePresence>
  )
}

