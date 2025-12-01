'use client'

import React, { useEffect, useRef } from 'react'
import CopyCodeButton from './CopyCodeButton'
import './CodeBlock.scss'

interface CodeBlockProps {
  code: string
  language?: string
  locale: 'uz' | 'ru'
}

export default function CodeBlock({ code, language = 'html', locale }: CodeBlockProps) {
  const codeRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (codeRef.current && typeof window !== 'undefined') {
      const Prism = require('prismjs')
      require('prismjs/components/prism-markup')
      require('prismjs/components/prism-css')
      require('prismjs/components/prism-javascript')
      Prism.highlightElement(codeRef.current)
    }
  }, [code, language])

  return (
    <div className="code-block-wrapper">
      <pre className="code-block">
        <code ref={codeRef} className={language ? `language-${language}` : ''}>
          {code}
        </code>
      </pre>
      <CopyCodeButton code={code} locale={locale} />
    </div>
  )
}
