import type { WithSlug, Post } from '@/types/Post'
import sanityClient from '@/lib/sanityClient'
import { convertToSimpleDate } from '@/lib/convertToSimpleDate'
import { PortableText } from '@portabletext/react'
import type { PortableTextBlock } from '@portabletext/types'

interface Props {
  slug: string
}

const allMeetingNotesQuery = `*[_type == "meetingNote"] {
  "slug": slug.current
}`

const meetingNoteQuery = `*[_type == "meetingNote" && slug.current == $slug] {
  title,
  "author": author->name,
  publishedAt,
  body
}`

export const generateStaticParams = async () => {
  const meetingNotes: WithSlug[] = await sanityClient.fetch({
    query: allMeetingNotesQuery,
    config: {
      next: { revalidate: 120 },
    },
  })
  return meetingNotes
    .map((meetingNote: WithSlug) => ({
      slug: meetingNote.slug || '',
    }))
    .filter((eachPropField: Props) => eachPropField.slug != '')
}

const MeetingNote = async ({ params }: { params: Props }) => {
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

  const date: string = convertToSimpleDate(String(meetingNote.publishedAt))
  const author: string = meetingNote.author || ''
  const body: PortableTextBlock[] = meetingNote.body as PortableTextBlock[]

  const Author = () => {
    if (author) {
      return <p>By {author}</p>
    } else {
      return <></>
    }
  }

  return (
    <div className="text-center py-8 m-auto max-w-4xl">
      <h1 className="text-[26pt] md:text-[40pt]">{meetingNote.title}</h1>
      <Author />
      <p>Published {date}</p>
      <div className="content text-left p-3">
        {/*leaving this here for when extra stuff has to be rendered.*/}
        {/*<PortableText value={body} components={components} />*/}
        <PortableText value={body} />
      </div>
    </div>
  )
}

export default MeetingNote
