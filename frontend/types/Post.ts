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

type WithSlug = {
  slug: string
}

type PostOfFeed = Post & WithSlug

export type { Post, PostOfFeed, WithSlug }
