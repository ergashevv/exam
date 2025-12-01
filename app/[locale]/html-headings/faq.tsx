import React from 'react'
import { Locale } from '@/lib/translations'

interface FAQItem {
  question: string
  answer: string
}

export const getHeadingsFAQ = (locale: Locale): FAQItem[] => {
  if (locale === 'uz') {
    return [
      {
        question: 'h1 tegini necha marta ishlatish mumkin?',
        answer: 'h1 tegini har bir sahifada faqat bir marta ishlatish kerak. Bu SEO uchun juda muhim.',
      },
      {
        question: 'Sarlavhalar tartibida bo\'lishi kerakmi?',
        answer: 'Ha, sarlavhalar tartibida bo\'lishi kerak. h1 dan keyin h2, h2 dan keyin h3 va hokazo.',
      },
      {
        question: 'Sarlavhalar o\'lchamini qanday o\'zgartirish mumkin?',
        answer: 'CSS yordamida font-size xususiyatini ishlatib sarlavhalar o\'lchamini o\'zgartirishingiz mumkin.',
      },
    ]
  } else {
    return [
      {
        question: 'Сколько раз можно использовать тег h1?',
        answer: 'Тег h1 следует использовать только один раз на каждой странице. Это очень важно для SEO.',
      },
      {
        question: 'Должны ли заголовки быть в порядке?',
        answer: 'Да, заголовки должны быть в порядке. После h1 идет h2, после h2 идет h3 и так далее.',
      },
      {
        question: 'Как изменить размер заголовков?',
        answer: 'Вы можете изменить размер заголовков с помощью CSS, используя свойство font-size.',
      },
    ]
  }
}

