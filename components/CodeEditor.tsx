'use client'

import React, { useState } from 'react'
import { Locale } from '@/lib/translations'
import './CodeEditor.scss'

interface CodeEditorProps {
  locale: Locale
  initialCode?: string
  initialCSS?: string
}

export default function CodeEditor({
  locale,
  initialCode = '<div>Salom dunyo!</div>',
  initialCSS = 'div { color: blue; }',
}: CodeEditorProps) {
  const [htmlCode, setHtmlCode] = useState(initialCode)
  const [cssCode, setCssCode] = useState(initialCSS)
  const [activeTab, setActiveTab] = useState<'html' | 'css' | 'result'>('result')

  const getPreview = () => {
    return `
      <!DOCTYPE html>
      <html>
      <head>
        <style>${cssCode}</style>
      </head>
      <body>${htmlCode}</body>
      </html>
    `
  }

  return (
    <div className="code-editor">
      <div className="editor-tabs">
        <button
          className={activeTab === 'html' ? 'active' : ''}
          onClick={() => setActiveTab('html')}
        >
          HTML
        </button>
        <button
          className={activeTab === 'css' ? 'active' : ''}
          onClick={() => setActiveTab('css')}
        >
          CSS
        </button>
        <button
          className={activeTab === 'result' ? 'active' : ''}
          onClick={() => setActiveTab('result')}
        >
          {locale === 'uz' ? 'Natija' : 'Результат'}
        </button>
      </div>

      <div className="editor-content">
        {activeTab === 'html' && (
          <textarea
            className="code-input"
            value={htmlCode}
            onChange={(e) => setHtmlCode(e.target.value)}
            placeholder={locale === 'uz' ? 'HTML kod yozing...' : 'Введите HTML код...'}
          />
        )}

        {activeTab === 'css' && (
          <textarea
            className="code-input"
            value={cssCode}
            onChange={(e) => setCssCode(e.target.value)}
            placeholder={locale === 'uz' ? 'CSS kod yozing...' : 'Введите CSS код...'}
          />
        )}

        {activeTab === 'result' && (
          <div className="preview-container">
            <iframe
              srcDoc={getPreview()}
              title="Preview"
              className="preview-iframe"
            />
          </div>
        )}
      </div>
    </div>
  )
}

