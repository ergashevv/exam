import React from 'react'
import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Sidebar from '@/components/Sidebar'
import { translations, Locale } from '@/lib/translations'
import '../[locale]/layout.scss'

export async function generateMetadata({
  params,
}: {
  params: { locale: Locale } | Promise<{ locale: Locale }>
}): Promise<Metadata> {
  const resolvedParams = params instanceof Promise ? await params : params
  const locale = resolvedParams?.locale || 'uz'
  const isUz = locale === 'uz'
  const isRu = locale === 'ru'

  const title = isUz
    ? 'HTML & CSS To\'liq Darslik - Web Dasturlashni O\'rganing'
    : isRu
    ? 'HTML & CSS Полный Учебник - Изучите Веб-Разработку'
    : 'HTML & CSS Complete Tutorial - Learn Web Development'

  const description = isUz
    ? 'HTML va CSS bo\'yicha to\'liq darslik misollar bilan. Web dasturlashni noldan o\'rganing. HTML sarlavhalar, paragraflar, ranglar, uslublar, havolalar, rasmlar, jadvallar, formalar, CSS ranglar, fonlar, chegaralar, margin, padding, display, position va boshqalar.'
    : isRu
    ? 'Полный учебник по HTML и CSS с примерами. Изучите веб-разработку с нуля. HTML заголовки, параграфы, цвета, стили, ссылки, изображения, таблицы, формы, CSS цвета, фоны, границы, margin, padding, display, position и многое другое.'
    : 'Complete HTML and CSS tutorial with examples. Learn web development from scratch. HTML headings, paragraphs, colors, styles, links, images, tables, forms, CSS colors, backgrounds, borders, margins, padding, display, position, and more.'

  return {
    title,
    description,
    keywords: isUz
      ? 'HTML, CSS, darslik, web dasturlash, HTML o\'rganish, CSS o\'rganish, HTML darslik, CSS darslik, web dizayn, frontend dasturlash'
      : isRu
      ? 'HTML, CSS, учебник, веб-разработка, изучение HTML, изучение CSS, учебник HTML, учебник CSS, веб-дизайн, фронтенд разработка'
      : 'HTML, CSS, tutorial, web development, learn HTML, learn CSS, HTML tutorial, CSS tutorial, web design, frontend development',
    openGraph: {
      title,
      description,
      type: 'website',
      locale: isUz ? 'uz_UZ' : isRu ? 'ru_RU' : 'en_US',
    },
    alternates: {
      canonical: `https://html-css-tutorial.vercel.app/${locale}`,
      languages: {
        'en': 'https://html-css-tutorial.vercel.app',
        'uz': 'https://html-css-tutorial.vercel.app/uz',
        'ru': 'https://html-css-tutorial.vercel.app/ru',
      },
    },
  }
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { locale: Locale } | Promise<{ locale: Locale }>
}) {
  // Handle both sync and async params
  const resolvedParams = params instanceof Promise ? await params : params
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

