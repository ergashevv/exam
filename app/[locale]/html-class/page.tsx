import React from 'react'
import TutorialLayout from '@/components/TutorialLayout'
import { translations, Locale } from '@/lib/translations'

export default function HTMLClassPage({
  params,
}: {
  params: { locale: Locale }
}) {
  const locale = params?.locale || 'uz'
  const t = translations[locale] || translations.uz

  const content = {
    uz: {
      title: 'HTML class Atributi',
      whatIs: `class atributi bir nechta elementga bir xil uslub yoki funksiyani qo'llash uchun ishlatiladi. Bir elementda bir nechta class bo'lishi mumkin.`,
      howToUse: `class atributi class="nomi" formatida yoziladi. Bir nechta class bo'lsa, ular bo'sh joy bilan ajratiladi: class="class1 class2".`,
      whenToUse: `class atributi bir xil dizaynga ega bo'lgan elementlarni guruhlash, CSS va JavaScript bilan ishlash uchun ishlatiladi.`,
    },
    ru: {
      title: 'HTML Атрибут class',
      whatIs: `Атрибут class используется для применения одинакового стиля или функции к нескольким элементам. У одного элемента может быть несколько классов.`,
      howToUse: `Атрибут class пишется в формате class="имя". Если несколько классов, они разделяются пробелом: class="class1 class2".`,
      whenToUse: `Атрибут class используется для группировки элементов с одинаковым дизайном, работы с CSS и JavaScript.`,
    },
  }

  const c = content[locale]

  return (
    <TutorialLayout
      locale={locale}
      translations={t}
      title={c.title}
      prevTopic={{ slug: 'html-div', title: t.html.div }}
      nextTopic={{ slug: 'html-id', title: t.html.idAttr }}
    >
      <h2>{t.common.whatIs}</h2>
      <p>{c.whatIs}</p>

      <h2>{t.common.howToUse}</h2>
      <p>{c.howToUse}</p>

      <div className="example-box">
        <h4>{t.common.codeExample}</h4>
        <pre>
          <code>{`<!-- HTML -->
<div class="card">
  <h3>Karta sarlavhasi</h3>
  <p>Karta matni</p>
</div>

<div class="card">
  <h3>Ikkinchi karta</h3>
  <p>Bu ham xuddi shu uslubga ega</p>
</div>

<div class="card highlighted">
  <h3>Ajratilgan karta</h3>
  <p>Bu karta ikkita classga ega</p>
</div>

<!-- CSS -->
<style>
  .card {
    background: white;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 20px;
    margin: 10px 0;
  }
  
  .highlighted {
    background: #fff3cd;
    border-color: #ffc107;
  }
</style>`}</code>
        </pre>
      </div>

      <div className="result-box">
        <h4>{t.common.result}</h4>
        <div
          style={{
            background: 'white',
            border: '1px solid #ddd',
            borderRadius: '8px',
            padding: '20px',
            margin: '10px 0',
          }}
        >
          <h3 style={{ marginTop: 0 }}>Karta sarlavhasi</h3>
          <p>Karta matni</p>
        </div>
        <div
          style={{
            background: '#fff3cd',
            border: '1px solid #ffc107',
            borderRadius: '8px',
            padding: '20px',
            margin: '10px 0',
          }}
        >
          <h3 style={{ marginTop: 0 }}>Ajratilgan karta</h3>
          <p>Bu karta ikkita classga ega</p>
        </div>
      </div>

      <h2>{t.common.whenToUse}</h2>
      <p>{c.whenToUse}</p>

      <h3>Class va ID farqi:</h3>
      <ul>
        <li>
          <strong>Class:</strong> Bir nechta elementda ishlatilishi mumkin
        </li>
        <li>
          <strong>ID:</strong> Faqat bir elementda ishlatilishi kerak (noyob)
        </li>
        <li>
          <strong>Class:</strong> CSS da <code>.</code> bilan belgilanadi
        </li>
        <li>
          <strong>ID:</strong> CSS da <code>#</code> bilan belgilanadi
        </li>
      </ul>
    </TutorialLayout>
  )
}

