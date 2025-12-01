'use client'

import React, { useEffect, useRef, useState } from 'react'
import CopyCodeButton from './CopyCodeButton'
import './CodeBlock.scss'

interface CodeBlockProps {
  code: string
  language?: string
  locale: 'uz' | 'ru'
  showLineNumbers?: boolean
  title?: string
}

export default function CodeBlock({ 
  code, 
  language = 'html', 
  locale,
  showLineNumbers = true,
  title
}: CodeBlockProps) {
  const codeRef = useRef<HTMLElement>(null)
  const [formattedCode, setFormattedCode] = useState(code)

  useEffect(() => {
    // Format code with proper indentation
    const lines = code.split('\n')
    const formatted = lines
      .map((line, index) => {
        // Remove trailing whitespace but preserve indentation
        const trimmed = line.trimEnd()
        return trimmed
      })
      .join('\n')
    setFormattedCode(formatted)
  }, [code])

  useEffect(() => {
    if (codeRef.current && typeof window !== 'undefined') {
      // Use setTimeout to ensure DOM is ready
      const timer = setTimeout(() => {
        try {
          const Prism = require('prismjs')
          
          // Load language components
          if (language === 'html' || language === 'markup') {
            require('prismjs/components/prism-markup')
          } else if (language === 'css') {
            require('prismjs/components/prism-css')
          } else if (language === 'javascript' || language === 'js') {
            require('prismjs/components/prism-javascript')
          }
          
          // Highlight the code
          if (codeRef.current) {
            Prism.highlightElement(codeRef.current)
          }
        } catch (err) {
          console.error('Failed to load Prism.js:', err)
        }
      }, 100)

      return () => clearTimeout(timer)
    }
  }, [formattedCode, language])

  const lines = formattedCode.split('\n')
  const lineCount = lines.length

  const getLanguageLabel = () => {
    const labels: { [key: string]: { uz: string; ru: string } } = {
      html: { uz: 'HTML', ru: 'HTML' },
      css: { uz: 'CSS', ru: 'CSS' },
      javascript: { uz: 'JavaScript', ru: 'JavaScript' },
      js: { uz: 'JavaScript', ru: 'JavaScript' },
    }
    return labels[language]?.[locale] || language.toUpperCase()
  }

  return (
    <div className="code-block-wrapper">
      {(title || language) && (
        <div className="code-block-header">
          {title && <span className="code-block-title">{title}</span>}
          <span className="code-block-language">{getLanguageLabel()}</span>
        </div>
      )}
      <div className="code-block-container">
        {showLineNumbers && (
          <div className="code-line-numbers">
            {Array.from({ length: lineCount }, (_, i) => (
              <span key={i} className="line-number">{i + 1}</span>
            ))}
          </div>
        )}
        <pre className="code-block">
          <code 
            ref={codeRef} 
            className={language ? `language-${language === 'html' ? 'markup' : language}` : ''}
          >
            {formattedCode}
          </code>
        </pre>
        <CopyCodeButton code={formattedCode} locale={locale} />
      </div>
    </div>
  )
}
