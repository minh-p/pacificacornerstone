import type { Category } from '@/types/schedule'

export const getCategoriesString = (categories: Category[]) => {
  let categoriesString = ''
  for (let i = 0; i < categories.length; i++) {
    if (i == categories.length - 1) {
      categoriesString += categories[i].title
    } else {
      categoriesString += `${categories[i].title}, `
    }
  }
  return categoriesString
}
