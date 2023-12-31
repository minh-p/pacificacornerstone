import { StopCircleIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import sanityClient from '@/lib/sanityClient'
import type { PostOfFeed } from '@/types/post'
import { convertToWordDate } from '@/lib/convertToSimpleDate'

const meetingNotesFeedQuery = `*[_type == "meetingNote"] | order(publishedAt desc)[0..2] {
  title,
  publishedAt,
  description,
  "slug": slug.current,
  location
}`

const MeetingNotes = async () => {
  const meetingNotes: PostOfFeed[] = await sanityClient.fetch({
    query: meetingNotesFeedQuery,
    config: {
      next: { revalidate: 3600 },
    },
  })

  const Description = ({ description }: { description: string }) => {
    if (description) {
      return <p>{`Description: ${description}`}</p>
    } else {
      return <></>
    }
  }

  const Location = ({ location }: { location: string }) => {
    if (location) {
      return <p>{`Location: ${location}`}</p>
    } else {
      return <></>
    }
  }

  return (
    <article
      id="meeting-notes"
      className="relative max-w-[1280px] m-auto h-[700px] bg-[#f9f5eb]"
    >
      <div className="pt-[50px]">
        <h2 className="text-center font-bold lx:text-5xl lg:text-4xl md:text-3xl text-2xl underline">
          Meeting Notes
        </h2>
        <div className="md:max-w-[50%] max-w-[80%] text-2xl m-auto my-[50px] relative">
          <div className="hidden absolute top-3 bottom-0 right-full mr-7 md:mr-[3.25rem] w-[3px] bg-slate-200 dark:bg-slate-800 sm:block"></div>
          <ul>
            {meetingNotes.map((meetingNote: PostOfFeed, index: number) => {
              return (
                <li key={index} className="my-[25px] relative">
                  <StopCircleIcon className="bg-[#f9f5eb] hidden absolute mr-6 right-[99.5%] top-2 text-slate-200 dark:text-slate-600 md:mr-12 h-5 w-5 overflow-visible sm:block" />
                  <p>{convertToWordDate(String(meetingNote.publishedAt))}</p>
                  <p className="font-bold">{meetingNote.title}</p>
                  <Location location={meetingNote.location || ''} />
                  <Description description={meetingNote.description || ''} />
                </li>
              )
            })}
          </ul>
        </div>
        <Link
          href="/meetings"
          className="text-2xl no-underline bg-[#36406b] text-white p-2 rounded absolute bottom-[20px] left-[50px]"
        >
          Read More
        </Link>
      </div>
    </article>
  )
}

export default MeetingNotes
