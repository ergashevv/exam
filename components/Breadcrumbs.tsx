'use client'

import React from 'react'
import Link from 'next/link'
import { Locale } from '@/lib/translations'
import './Breadcrumbs.scss'

interface BreadcrumbsProps {
  locale: Locale
  category: 'html' | 'css'
  title: string
}

export default function Breadcrumbs({ locale, category, title }: BreadcrumbsProps) {
  const homeLabel = locale === 'uz' ? 'Bosh sahifa' : 'Главная'
  const categoryLabel = category === 'html' 
    ? (locale === 'uz' ? 'HTML' : 'HTML')
    : (locale === 'uz' ? 'CSS' : 'CSS')

  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <ol className="breadcrumbs-list">
        <li className="breadcrumb-item">
          <Link href={`/${locale}`}>{homeLabel}</Link>
        </li>
        <li className="breadcrumb-separator">/</li>
        <li className="breadcrumb-item">
          <Link href={`/${locale}#${category}`}>{categoryLabel}</Link>
        </li>
        <li className="breadcrumb-separator">/</li>
        <li className="breadcrumb-item active" aria-current="page">
          {title}
        </li>
      </ol>
    </nav>
  )
}

