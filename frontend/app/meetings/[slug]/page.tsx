import type { JustSlug, Post } from '@/types/post'
import sanityClient from '@/lib/sanityClient'
import { convertToWordDate } from '@/lib/convertToSimpleDate'
import { PortableText } from '@portabletext/react'
import type { PortableTextBlock } from '@portabletext/types'

const allMeetingNotesQuery = `*[_type == "meetingNote"] {
  "slug": slug.current
}`

const meetingNoteQuery = `*[_type == "meetingNote" && slug.current == $slug] {
  title,
  "author": author->name,
  publishedAt,
  body,
  description,
  location
}`

export const generateStaticParams = async () => {
  const meetingNotes: JustSlug[] = await sanityClient.fetch({
    query: allMeetingNotesQuery,
    config: {
      next: { revalidate: 120 },
    },
  })
  return meetingNotes
    .map((meetingNote: JustSlug) => ({
      slug: meetingNote.slug || '',
    }))
    .filter((eachPropField: JustSlug) => eachPropField.slug != '')
}

const MeetingNote = async ({ params }: { params: JustSlug }) => {
  const data: Post[] = await sanityClient.fetch({
    query: meetingNoteQuery,
    params: {
      slug: params.slug,
    },
    config: {
      next: { revalidate: 120 },
    },
  })

  const meetingNote: Post = data[0]
  if (!meetingNote) {
    return <h1 className="text-center">Invalid Meeting Note. Please Return.</h1>
  }

  const date: string = convertToWordDate(String(meetingNote.publishedAt))
  const author: string = meetingNote.author || ''
  const body: PortableTextBlock[] = meetingNote.body as PortableTextBlock[]
  const description: string = meetingNote.description || ''
  const location: string = meetingNote.location || ''

  const Author = () => {
    if (author) {
      return <p>By {author}</p>
    } else {
      return <></>
    }
  }

  const Description = () => {
    if (description) {
      return <p className="italic">{description}</p>
    } else {
      return <></>
    }
  }

  const Location = () => {
    if (location) {
      return <p>{location}</p>
    } else {
      return <></>
    }
  }

  return (
    <div className="text-center py-8 m-auto max-w-4xl">
      <h1 className="text-[26pt] md:text-[40pt]">{meetingNote.title}</h1>
      <Location />
      <Author />
      <p>{date}</p>
      <div className="content text-left p-3">
        <Description />
        {/*leaving this here for when extra stuff has to be rendered.*/}
        {/*<PortableText value={body} components={components} />*/}
        <PortableText value={body} />
      </div>
    </div>
  )
}

export default MeetingNote
