const month = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

export const getCurrentMonth = () => {
  return month[new Date().getMonth()]
}

export const getCurrentYear = () => {
  return new Date().getFullYear()
}

export const getNextMonth = (currentMonth: string) => {
  const index: number = month.findIndex((x) => x == currentMonth)
  if (index == month.length - 1) {
    return { month: month[0], newYear: true }
  } else {
    return { month: month[index + 1] }
  }
}

export const getPrevMonth = (currentMonth: string) => {
  const index: number = getDateIndex(currentMonth)
  if (index == 0) {
    return { month: month[month.length - 1], newYear: true }
  } else {
    return { month: month[index - 1] }
  }
}

export const getNextYear = (currentYear: number) => {
  return currentYear + 1
}

export const getPrevYear = (currentYear: number) => {
  return currentYear - 1
}

export const getDateIndex = (currentMonth: string) => {
  return month.findIndex((x) => x == currentMonth)
}
