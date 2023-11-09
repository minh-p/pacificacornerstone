import type { PortableTextBlock } from '@portabletext/types'

type Category = {
  title: string
}

type ScheduleFeed = {
  title: string
  slug: string
  startDate: Date
  endDate: Date
  categories: Category[]
}

interface Schedule extends ScheduleFeed {
  body: PortableTextBlock[]
}

type JustSlug = {
  slug: string
}

export type { ScheduleFeed, Schedule, JustSlug, Category }
