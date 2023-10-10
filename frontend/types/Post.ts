import type { PortableTextBlock } from '@portabletext/types'

type Category = {
  title: string
}

type Post = {
  title: string
  author: string
  categories: Category[]
  body: PortableTextBlock[]
  mainImageUrl?: string
  mainImageAltText?: string
  description?: string
  publishedAt: Date
}

type WithSlug = {
  slug: string
}

type PostOfFeed = Post & WithSlug

export type { Post, PostOfFeed }
