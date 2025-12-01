'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Locale } from '@/lib/translations'
import './Quiz.scss'

interface QuizQuestion {
  question: string
  options: string[]
  correct: number
  explanation: string
}

interface QuizProps {
  locale: Locale
  questions: QuizQuestion[]
}

export default function Quiz({ locale, questions }: QuizProps) {
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: number }>({})
  const [showResults, setShowResults] = useState(false)

  const handleAnswer = (questionIndex: number, optionIndex: number) => {
    setSelectedAnswers({ ...selectedAnswers, [questionIndex]: optionIndex })
  }

  const checkAnswers = () => {
    setShowResults(true)
  }

  const getScore = () => {
    let correct = 0
    questions.forEach((q, index) => {
      if (selectedAnswers[index] === q.correct) {
        correct++
      }
    })
    return { correct, total: questions.length }
  }

  const score = showResults ? getScore() : null

  return (
    <div className="quiz-container">
      <div className="quiz-header">
        <span className="quiz-icon">📝</span>
        <h4>{locale === 'uz' ? 'O\'z-o\'zini tekshirish' : 'Проверьте себя'}</h4>
      </div>

      <div className="quiz-questions">
        {questions.map((question, qIndex) => (
          <div key={qIndex} className="quiz-question">
            <h5>
              {qIndex + 1}. {question.question}
            </h5>
            <div className="quiz-options">
              {question.options.map((option, oIndex) => {
                const isSelected = selectedAnswers[qIndex] === oIndex
                const isCorrect = oIndex === question.correct
                const showAnswer = showResults

                return (
                  <button
                    key={oIndex}
                    className={`quiz-option ${
                      showAnswer
                        ? isCorrect
                          ? 'correct'
                          : isSelected && !isCorrect
                          ? 'incorrect'
                          : ''
                        : isSelected
                        ? 'selected'
                        : ''
                    }`}
                    onClick={() => !showResults && handleAnswer(qIndex, oIndex)}
                    disabled={showResults}
                  >
                    <span className="option-letter">
                      {String.fromCharCode(65 + oIndex)}
                    </span>
                    <span className="option-text">{option}</span>
                    {showAnswer && isCorrect && (
                      <span className="option-check">✓</span>
                    )}
                    {showAnswer && isSelected && !isCorrect && (
                      <span className="option-cross">✗</span>
                    )}
                  </button>
                )
              })}
            </div>
            {showResults && (
              <motion.div
                className="quiz-explanation"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <strong>{locale === 'uz' ? 'Tushuntirish:' : 'Объяснение:'}</strong>
                <p>{question.explanation}</p>
              </motion.div>
            )}
          </div>
        ))}
      </div>

      <div className="quiz-actions">
        {!showResults ? (
          <button className="quiz-check-btn" onClick={checkAnswers}>
            {locale === 'uz' ? 'Javoblarni tekshirish' : 'Проверить ответы'}
          </button>
        ) : (
          <div className="quiz-results">
            <div className="quiz-score">
              {locale === 'uz' ? 'Natija:' : 'Результат:'} {score?.correct} / {score?.total}
            </div>
            <button
              className="quiz-reset-btn"
              onClick={() => {
                setShowResults(false)
                setSelectedAnswers({})
              }}
            >
              {locale === 'uz' ? 'Qayta urinish' : 'Попробовать снова'}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

