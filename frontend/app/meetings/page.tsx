import { ChevronRightIcon, StopCircleIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import sanityClient from '@/lib/sanityClient'
import type { PostOfFeed } from '@/types/Post'
import { convertToWordDate } from '@/lib/convertToSimpleDate'

const meetingFeedQuery = `*[_type == "meetingNote"] | order(publishedAt desc) {
  title,
  publishedAt,
  description,
  "slug": slug.current,
  location
}`

const Meetings = async () => {
  const meetingNotes: PostOfFeed[] = await sanityClient.fetch({
    query: meetingFeedQuery,
    config: {
      next: { revalidate: 300 },
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
    <section className="bg-zinc-200">
      <article className="max-w-[1280px] m-auto h-full p-5 bg-[#f9f5eb] min-h-[calc(100vh-179px)]">
        <div className="m-auto">
          <h1 className="font-bold text-center lx-text-5xl lg:text-4xl md:text-3xl text-2xl underline my-[25px]">
            Meeting Notes
          </h1>
          <div className="md:max-w-[50%] text-2xl m-auto my-[50px] relative">
            <div className="hidden absolute top-3 bottom-0 right-full mr-7 md:mr-[3.25rem] w-[3px] bg-slate-200 dark:bg-slate-800 sm:block"></div>
            <ul>
              {meetingNotes.map((meetingNote: PostOfFeed, index: number) => {
                const link: string = meetingNote.slug || 'not found'
                return (
                  <li key={index} className="my-[25px] relative">
                    <StopCircleIcon className="bg-[#f9f5eb] hidden absolute mr-6 right-[99.5%] top-2 text-slate-200 dark:text-slate-600 md:mr-12 h-5 w-5 overflow-visible sm:block" />
                    <p>{convertToWordDate(String(meetingNote.publishedAt))}</p>
                    <p className="font-bold">{meetingNote.title}</p>
                    <Location location={meetingNote.location || ''} />
                    <Description description={meetingNote.description || ''} />
                    <Link
                      href={`/meetings/${encodeURIComponent(link)}`}
                      className="md:text-lg no-underline bg-[#36406b] text-white p-2 py-1 my-2 rounded inline-flex"
                    >
                      Read more
                      <ChevronRightIcon
                        aria-hidden="true"
                        className="-mr-1 h-8 w-5 text-white"
                      />
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </article>
    </section>
  )
}

export default Meetings
