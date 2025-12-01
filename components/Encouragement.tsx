'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Locale } from '@/lib/translations'
import './Encouragement.scss'

interface EncouragementProps {
  locale: Locale
  progress?: number
  topicName?: string
}

const messages = {
  uz: [
    { text: 'Ajoyib! Davom eting! 🚀', emoji: '🎯' },
    { text: 'Siz juda yaxshi ishlayapsiz! 💪', emoji: '⭐' },
    { text: 'Har bir qadam muhim! 👏', emoji: '🌟' },
    { text: 'Sizning qadamlaringiz katta! 🎊', emoji: '🔥' },
    { text: 'Davom eting, sizga ishonamiz! 💯', emoji: '🎉' },
    { text: 'Ajoyib! Keyingi mavzuga o\'ting! 🏆', emoji: '✨' },
  ],
  ru: [
    { text: 'Отлично! Продолжайте! 🚀', emoji: '🎯' },
    { text: 'Вы очень хорошо работаете! 💪', emoji: '⭐' },
    { text: 'Каждый шаг важен! 👏', emoji: '🌟' },
    { text: 'Ваши шаги велики! 🎊', emoji: '🔥' },
    { text: 'Продолжайте, мы верим в вас! 💯', emoji: '🎉' },
    { text: 'Отлично! Переходите к следующей теме! 🏆', emoji: '✨' },
  ]
}

export default function Encouragement({ locale, progress, topicName }: EncouragementProps) {
  const [showMessage, setShowMessage] = useState(false)
  const [currentMessage, setCurrentMessage] = useState<{ text: string; emoji: string } | null>(null)

  useEffect(() => {
    // Show encouragement after scrolling 30% of the page
    const handleScroll = () => {
      const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      
      if (scrollPercent > 30 && !showMessage) {
        const randomMessage = messages[locale][Math.floor(Math.random() * messages[locale].length)]
        setCurrentMessage(randomMessage)
        setShowMessage(true)
        
        setTimeout(() => {
          setShowMessage(false)
        }, 5000)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [locale, showMessage])

  if (!showMessage || !currentMessage) return null

  return (
    <AnimatePresence>
      <motion.div
        className="encouragement-message"
        initial={{ opacity: 0, scale: 0.5, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.5, y: 50 }}
        transition={{ duration: 0.4, type: 'spring' }}
      >
        <div className="encouragement-emoji">{currentMessage.emoji}</div>
        <div className="encouragement-text">{currentMessage.text}</div>
      </motion.div>
    </AnimatePresence>
  )
}

