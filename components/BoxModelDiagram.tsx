'use client'

import React from 'react'
import { Locale } from '@/lib/translations'
import './BoxModelDiagram.scss'

interface BoxModelDiagramProps {
  locale: Locale
}

export default function BoxModelDiagram({ locale }: BoxModelDiagramProps) {
  return (
    <div className="box-model-diagram">
      <h4>{locale === 'uz' ? 'CSS Box Model' : 'CSS Box Model'}</h4>
      <div className="diagram-container">
        <div className="box-content">
          <span className="label-content">
            {locale === 'uz' ? 'Content' : 'Контент'}
          </span>
          <div className="box-padding">
            <span className="label-padding">
              {locale === 'uz' ? 'Padding' : 'Отступ'}
            </span>
            <div className="box-border">
              <span className="label-border">
                {locale === 'uz' ? 'Border' : 'Граница'}
              </span>
              <div className="box-margin">
                <span className="label-margin">
                  {locale === 'uz' ? 'Margin' : 'Внешний отступ'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="diagram-legend">
        <div className="legend-item">
          <div className="legend-color margin"></div>
          <span>Margin</span>
        </div>
        <div className="legend-item">
          <div className="legend-color border"></div>
          <span>Border</span>
        </div>
        <div className="legend-item">
          <div className="legend-color padding"></div>
          <span>Padding</span>
        </div>
        <div className="legend-item">
          <div className="legend-color content"></div>
          <span>Content</span>
        </div>
      </div>
    </div>
  )
}

