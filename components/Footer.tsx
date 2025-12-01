import { Locale } from '@/lib/translations'
import './Footer.scss'

interface FooterProps {
  locale: Locale
  translations: any
}

export default function Footer({ locale, translations }: FooterProps) {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>
          {locale === 'uz'
            ? 'HTML & CSS bo\'yicha to\'liq darslik. Barcha huquqlar himoyalangan.'
            : 'Полный учебник по HTML и CSS. Все права защищены.'}
        </p>
        <p className="year">© {new Date().getFullYear()}</p>
      </div>
    </footer>
  )
}

