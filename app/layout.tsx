import type { Metadata } from 'next'
import '../styles/globals.scss'

export const metadata: Metadata = {
  title: 'HTML & CSS Complete Tutorial - Learn Web Development',
  description: 'Complete HTML and CSS tutorial with examples. Learn web development from scratch. Full guide covering HTML headings, paragraphs, colors, styles, links, images, tables, forms, CSS colors, backgrounds, borders, margins, padding, display, position, and more.',
  keywords: 'HTML, CSS, tutorial, web development, learn HTML, learn CSS, HTML tutorial, CSS tutorial, web design, frontend development, HTML examples, CSS examples, responsive design',
  authors: [{ name: 'HTML CSS Tutorial' }],
  openGraph: {
    title: 'HTML & CSS Complete Tutorial - Learn Web Development',
    description: 'Complete HTML and CSS tutorial with examples. Learn web development from scratch.',
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['uz_UZ', 'ru_RU'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HTML & CSS Complete Tutorial',
    description: 'Complete HTML and CSS tutorial with examples. Learn web development from scratch.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://html-css-tutorial.vercel.app',
    languages: {
      'en': 'https://html-css-tutorial.vercel.app',
      'uz': 'https://html-css-tutorial.vercel.app/uz',
      'ru': 'https://html-css-tutorial.vercel.app/ru',
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="uz">
      <body>{children}</body>
    </html>
  )
}

