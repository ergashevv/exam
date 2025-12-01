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
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism-tomorrow.min.css" />
        <style dangerouslySetInnerHTML={{
          __html: `
            /* Override Prism.js colors for better visibility */
            code[class*="language-"],
            pre[class*="language-"] {
              color: #d4d4d4;
              background: #1e1e1e;
            }
            
            .token.comment,
            .token.prolog,
            .token.doctype,
            .token.cdata {
              color: #6a9955;
              font-style: italic;
            }
            
            .token.punctuation {
              color: #d4d4d4;
            }
            
            .token.property,
            .token.tag,
            .token.boolean,
            .token.number,
            .token.constant,
            .token.symbol,
            .token.deleted {
              color: #569cd6;
            }
            
            .token.selector,
            .token.attr-name,
            .token.string,
            .token.char,
            .token.builtin,
            .token.inserted {
              color: #ce9178;
            }
            
            .token.operator,
            .token.entity,
            .token.url {
              color: #d4d4d4;
            }
            
            .token.atrule,
            .token.attr-value,
            .token.keyword {
              color: #569cd6;
              font-weight: 500;
            }
            
            .token.function,
            .token.class-name {
              color: #dcdcaa;
            }
            
            .token.regex,
            .token.important,
            .token.variable {
              color: #ce9178;
            }
          `
        }} />
        <meta name="theme-color" content="#667eea" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="HTML & CSS Tutorial" />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}

