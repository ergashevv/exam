import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Sidebar from '@/components/Sidebar'
import { translations, Locale } from '@/lib/translations'
import '../[locale]/layout.scss'

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { locale: Locale } | Promise<{ locale: Locale }>
}) {
  // Handle both sync and async params
  const resolvedParams = params instanceof Promise ? undefined : params
  const locale = resolvedParams?.locale || 'uz'
  const t = translations[locale] || translations.uz

  return (
    <div className="app-container">
      <Header locale={locale} translations={t} />
      <div className="main-content">
        <Sidebar locale={locale} translations={t} />
        <main className="content-area">{children}</main>
      </div>
      <Footer locale={locale} translations={t} />
    </div>
  )
}

