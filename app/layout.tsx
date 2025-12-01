import type { Metadata } from 'next'
import '../styles/globals.scss'

export const metadata: Metadata = {
  title: 'HTML & CSS To\'liq Darslik | Полный Учебник',
  description: 'HTML va CSS bo\'yicha to\'liq darslik. Полный учебник по HTML и CSS.',
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

