import type { JustSlug, Schedule, Category } from '@/types/schedule'
import { PortableText } from '@portabletext/react'
import sanityClient from '@/lib/sanityClient'
import type { PortableTextBlock } from '@portabletext/types'
import { convertToWordDate } from '@/lib/convertToSimpleDate'
import { getCategoriesString } from '@/lib/basicArrayAlgorithms'

const scheduleFeedQuery = `*[_type == "schedule"] {
  "slug": slug.current,
}`

const scheduleQuery = `*[_type == "schedule" && slug.current == $slug] {
  title,
  "slug": slug.current,
  startDate,
  endDate,
  body,
  categories[]->{
    title
  }
}`

export const generateStaticParams = async () => {
  const schedules: JustSlug[] = await sanityClient.fetch({
    query: scheduleFeedQuery,
    config: {
      next: { revalidate: 300 },
    },
  })

  return schedules
    .map((schedule: JustSlug) => ({
      slug: schedule.slug || '',
    }))
    .filter((eachPropField: JustSlug) => eachPropField.slug != '')
}

const Schedule = async ({ params }: { params: JustSlug }) => {
  const data: Schedule[] = await sanityClient.fetch({
    query: scheduleQuery,
    params: {
      slug: params.slug,
    },
    config: {
      next: { revalidate: 120 },
    },
  })

  const schedule: Schedule = data[0]
  if (!schedule) {
    return <h1 className="text-center">Invalid Schedule Item. Please Return</h1>
  }

  const startDate: string = convertToWordDate(String(schedule.startDate))
  const endDate: string = convertToWordDate(String(schedule.endDate))
  const body: PortableTextBlock[] = schedule.body as PortableTextBlock[]
  const categories: Category[] = schedule.categories

  return (
    <section className="bg-zinc-200">
      <article className="max-w-[1280px] m-auto h-full p-5 bg-[#f9f5eb] min-h-[calc(100vh-179px)]">
        <div className="text-center py-8 m-auto max-w-4xl">
          <h1 className="text-[26pt] md:text-[40pt]">{schedule.title}</h1>
          <p>Categories: {getCategoriesString(categories)}</p>
          <p>Start: {startDate}</p>
          <p>End: {endDate}</p>
          <div className="content text-left p-3">
            {/*leaving this here for when extra stuff has to be rendered.*/}
            {/*<PortableText value={body} components={components} />*/}
            <PortableText value={body} />
          </div>
        </div>
      </article>
    </section>
  )
}

export default Schedule
