'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Locale } from '@/lib/translations'
import CodeEditor from './CodeEditor'
import './PracticeMode.scss'

interface PracticeModeProps {
  locale: Locale
  task: string
  hint?: string
  solution?: string
}

export default function PracticeMode({ locale, task, hint, solution }: PracticeModeProps) {
  const [showHint, setShowHint] = useState(false)
  const [showSolution, setShowSolution] = useState(false)

  return (
    <div className="practice-mode">
      <div className="practice-header">
        <span className="practice-icon">✏️</span>
        <h4>{locale === 'uz' ? 'Amaliyot: O\'zingiz yozing' : 'Практика: Напишите сами'}</h4>
      </div>
      <div className="practice-task">
        <p><strong>{locale === 'uz' ? 'Vazifa:' : 'Задача:'}</strong> {task}</p>
      </div>

      <div className="practice-editor">
        <CodeEditor
          locale={locale}
          initialCode="<div>Bu yerga kod yozing</div>"
          initialCSS="div { }"
        />
      </div>

      <div className="practice-actions">
        {hint && (
          <button
            className="practice-hint-btn"
            onClick={() => setShowHint(!showHint)}
          >
            {locale === 'uz' ? '💡 Yordam' : '💡 Подсказка'}
          </button>
        )}
        {solution && (
          <button
            className="practice-solution-btn"
            onClick={() => setShowSolution(!showSolution)}
          >
            {locale === 'uz' ? '✅ Yechim' : '✅ Решение'}
          </button>
        )}
      </div>

      {showHint && hint && (
        <motion.div
          className="practice-hint"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <strong>{locale === 'uz' ? 'Yordam:' : 'Подсказка:'}</strong>
          <p>{hint}</p>
        </motion.div>
      )}

      {showSolution && solution && (
        <motion.div
          className="practice-solution"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <strong>{locale === 'uz' ? 'Yechim:' : 'Решение:'}</strong>
          <pre><code>{solution}</code></pre>
        </motion.div>
      )}
    </div>
  )
}

