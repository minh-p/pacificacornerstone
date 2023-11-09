import type { PortableTextBlock } from '@portabletext/types'

type Category = {
  title: string
}

type Post = {
  title: string
  author: string
  categories: Category[]
  body: PortableTextBlock[]
  publishedAt: Date
  description?: string
  location?: string
  mainImageUrl?: string
  mainImageAltText?: string
}

type JustSlug = {
  slug: string
}

type PostOfFeed = Post & JustSlug

type HomePage = {
  heroTitle: string
  heroDescription: string
  heroMeetingLocation: string
  clubActivitiesVideoLink: string
  clubActivitiesBody: PortableTextBlock[]
}

export type { Post, PostOfFeed, JustSlug, HomePage }
