export const motivationalMessages = {
  ru: [
    "Экзамен уже в пути. Давай учи 😅",
    "Чуть-чуть почитай, бро. Потом спасибо скажешь 😌",
    "Хватит листать, материал ждет 😭",
    "Сегодня учишь — завтра живой будешь 😆",
    "Ну давай, один параграф. Не помрёшь 🙂",
    "Не понимаешь? Норм. Иди дальше 😂",
    "Экзамен не ждёт, брат 😒",
    "Лень? Пни её нафиг 😅",
    "Сейчас тяжело — потом легче 😌",
    "Учись, пока жизнь не начала учить сильнее 😭",
    "Давай-давай, мозг не расплавится 😂",
    "Перестань отвлекаться. Экзамен строгий 😆",
    "Один шаг сегодня — минус паника завтра 😎",
    "Ты можешь. Просто мозг ленится 🙂",
    "Не тяни. Время тикает 😅",
    "Ну, почитай, а? Экзамен же скоро 😭",
    "Встань, соберись, продолжай 😆",
    "Не сдадут тебя, если ты сам себя не сдашь 😂",
    "Бро, серьёзно, хоть что-то выучи 😅",
    "Сейчас 5 минут — завтра минус нервный тик 😌",
    "Материал сам себя не прочитает 😒",
    "Терпение. Экзамену всё равно 😭",
    "Устал? Отлично. Значит учишь 😆",
    "Не игнорь. Потом больнее будет 😂",
    "Ну давай, сделай вид что готовишься 🙂",
    "Открой материал, бро, не стесняйся 😅",
    "Экзамен не любит сюрпризы 😆",
    "Думай о результате. Но учи 😭",
    "Ты близко. Просто дочитай 😌",
    "Пока ты думаешь, другие уже учат 😒",
    "Один абзац — и свободен 😂",
    "Ну давай, не позорь будущего себя 😅",
  ],
  uz: []
}

// Get random message without repetition using localStorage
export function getRandomMotivationalMessage(locale: 'ru' | 'uz' = 'ru'): string {
  if (typeof window === 'undefined') {
    // Server-side: return random message
    const messages = motivationalMessages[locale]
    return messages[Math.floor(Math.random() * messages.length)]
  }

  const messages = motivationalMessages[locale]
  const storageKey = `motivational_messages_${locale}`
  
  // Get used messages from localStorage
  const usedMessagesStr = localStorage.getItem(storageKey)
  let usedIndices: number[] = []
  
  if (usedMessagesStr) {
    try {
      usedIndices = JSON.parse(usedMessagesStr)
    } catch (e) {
      usedIndices = []
    }
  }

  // If all messages have been used, reset
  if (usedIndices.length >= messages.length) {
    usedIndices = []
  }

  // Get available indices
  const availableIndices = messages
    .map((_, index) => index)
    .filter(index => !usedIndices.includes(index))

  // Pick random from available
  const randomIndex = availableIndices[Math.floor(Math.random() * availableIndices.length)]
  
  // Add to used list
  usedIndices.push(randomIndex)
  localStorage.setItem(storageKey, JSON.stringify(usedIndices))

  return messages[randomIndex]
}

