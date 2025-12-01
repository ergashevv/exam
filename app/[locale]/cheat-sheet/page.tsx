import React from 'react'
import TutorialLayout from '@/components/TutorialLayout'
import PrintButton from '@/components/PrintButton'
import { translations, Locale } from '@/lib/translations'
import './cheat-sheet.scss'

export default async function CheatSheetPage({
  params,
}: {
  params: { locale: Locale } | Promise<{ locale: Locale }>
}) {
  const resolvedParams = params instanceof Promise ? await params : params
  const locale = resolvedParams?.locale || 'uz'
  const t = translations[locale] || translations.uz

  const htmlTags = [
    { tag: '<h1> - <h6>', desc: locale === 'uz' ? 'Sarlavhalar' : 'Заголовки' },
    { tag: '<p>', desc: locale === 'uz' ? 'Paragraf' : 'Параграф' },
    { tag: '<a>', desc: locale === 'uz' ? 'Havola' : 'Ссылка' },
    { tag: '<img>', desc: locale === 'uz' ? 'Rasm' : 'Изображение' },
    { tag: '<div>', desc: locale === 'uz' ? 'Konteyner' : 'Контейнер' },
    { tag: '<span>', desc: locale === 'uz' ? 'Inline konteyner' : 'Инлайн контейнер' },
    { tag: '<ul>', desc: locale === 'uz' ? 'Tartibsiz ro\'yxat' : 'Неупорядоченный список' },
    { tag: '<ol>', desc: locale === 'uz' ? 'Tartibli ro\'yxat' : 'Упорядоченный список' },
    { tag: '<li>', desc: locale === 'uz' ? 'Ro\'yxat elementi' : 'Элемент списка' },
    { tag: '<table>', desc: locale === 'uz' ? 'Jadval' : 'Таблица' },
    { tag: '<tr>', desc: locale === 'uz' ? 'Jadval qatori' : 'Строка таблицы' },
    { tag: '<td>', desc: locale === 'uz' ? 'Jadval katagi' : 'Ячейка таблицы' },
    { tag: '<form>', desc: locale === 'uz' ? 'Forma' : 'Форма' },
    { tag: '<input>', desc: locale === 'uz' ? 'Input maydoni' : 'Поле ввода' },
    { tag: '<button>', desc: locale === 'uz' ? 'Tugma' : 'Кнопка' },
    { tag: '<header>', desc: locale === 'uz' ? 'Sarlavha' : 'Заголовок' },
    { tag: '<footer>', desc: locale === 'uz' ? 'Pastki qism' : 'Нижняя часть' },
    { tag: '<section>', desc: locale === 'uz' ? 'Bo\'lim' : 'Раздел' },
    { tag: '<article>', desc: locale === 'uz' ? 'Maqola' : 'Статья' },
    { tag: '<nav>', desc: locale === 'uz' ? 'Navigatsiya' : 'Навигация' },
  ]

  const cssProperties = [
    { prop: 'color', desc: locale === 'uz' ? 'Matn rangi' : 'Цвет текста' },
    { prop: 'background-color', desc: locale === 'uz' ? 'Fon rangi' : 'Цвет фона' },
    { prop: 'font-size', desc: locale === 'uz' ? 'Shrift o\'lchami' : 'Размер шрифта' },
    { prop: 'font-weight', desc: locale === 'uz' ? 'Shrift qalinligi' : 'Жирность шрифта' },
    { prop: 'margin', desc: locale === 'uz' ? 'Tashqi bo\'sh joy' : 'Внешний отступ' },
    { prop: 'padding', desc: locale === 'uz' ? 'Ichki bo\'sh joy' : 'Внутренний отступ' },
    { prop: 'border', desc: locale === 'uz' ? 'Chegara' : 'Граница' },
    { prop: 'border-radius', desc: locale === 'uz' ? 'Burchak yumaloqlik' : 'Скругление углов' },
    { prop: 'width', desc: locale === 'uz' ? 'Kenglik' : 'Ширина' },
    { prop: 'height', desc: locale === 'uz' ? 'Balandlik' : 'Высота' },
    { prop: 'display', desc: locale === 'uz' ? 'Ko\'rinish turi' : 'Тип отображения' },
    { prop: 'position', desc: locale === 'uz' ? 'Joylashuv' : 'Позиционирование' },
    { prop: 'flex', desc: locale === 'uz' ? 'Flexbox' : 'Flexbox' },
    { prop: 'grid', desc: locale === 'uz' ? 'Grid' : 'Grid' },
    { prop: 'text-align', desc: locale === 'uz' ? 'Matn hizalash' : 'Выравнивание текста' },
    { prop: 'opacity', desc: locale === 'uz' ? 'Shaffoflik' : 'Прозрачность' },
    { prop: 'transform', desc: locale === 'uz' ? 'O\'zgartirish' : 'Трансформация' },
    { prop: 'transition', desc: locale === 'uz' ? 'O\'tish effekti' : 'Эффект перехода' },
    { prop: 'box-shadow', desc: locale === 'uz' ? 'Soya' : 'Тень' },
    { prop: 'z-index', desc: locale === 'uz' ? 'Qatlam tartibi' : 'Порядок слоя' },
  ]

  return (
    <TutorialLayout
      locale={locale}
      translations={t}
      title={locale === 'uz' ? 'Cheat Sheet' : 'Шпаргалка'}
      prevTopic={undefined}
      nextTopic={undefined}
    >
      <div className="cheat-sheet">
        <h2>{locale === 'uz' ? 'HTML Teglar' : 'HTML Теги'}</h2>
        <div className="cheat-grid">
          {htmlTags.map((item, index) => (
            <div key={index} className="cheat-item">
              <code className="cheat-tag">{item.tag}</code>
              <span className="cheat-desc">{item.desc}</span>
            </div>
          ))}
        </div>

        <h2>{locale === 'uz' ? 'CSS Xususiyatlari' : 'CSS Свойства'}</h2>
        <div className="cheat-grid">
          {cssProperties.map((item, index) => (
            <div key={index} className="cheat-item">
              <code className="cheat-prop">{item.prop}</code>
              <span className="cheat-desc">{item.desc}</span>
            </div>
          ))}
        </div>

        <div className="cheat-actions">
          <PrintButton locale={locale} />
        </div>
      </div>
    </TutorialLayout>
  )
}

