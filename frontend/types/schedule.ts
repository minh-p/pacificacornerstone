import type { PortableTextBlock } from '@portabletext/types'

type Category = {
  title: string
}

type ScheduleFeed = {
  title: string
  slug: string
  startDate: Date
  endDate: Date
}

interface Schedule extends ScheduleFeed {
  body: PortableTextBlock[]
  categories: Category[]
}

type JustSlug = {
  slug: string
}

export type { ScheduleFeed, Schedule, JustSlug, Category }
