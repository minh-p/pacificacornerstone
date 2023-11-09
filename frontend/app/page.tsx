import Homehero from '@/app/components/Homehero'
import ClubActivities from '@/app/components/ClubActivities'
import MeetingNotes from '@/app/components/MeetingNotes'
import sanityClient from '@/lib/sanityClient'
import type { PortableTextBlock } from '@portabletext/types'
import type { HomePage } from '@/types/post'

const homePageQuery = `*[_type == "homePage"] {
  heroTitle,
  heroDescription,
  heroMeetingLocation,
  clubActivitiesVideoLink,
  clubActivitiesBody
}`

const Home = async () => {
  const data: HomePage[] = await sanityClient.fetch({
    query: homePageQuery,
    config: {
      next: { revalidate: 120 },
    },
  })

  const homePage: HomePage = data[0]

  if (!homePage) {
    return (
      <p>
        Data cannot fetched. Please try to reload the page. Or, contact
        maintainer.
      </p>
    )
  }

  const heroTitle: string = homePage.heroTitle
  const heroDescription: string = homePage.heroDescription
  const heroMeetingLocation: string = homePage.heroMeetingLocation
  const clubActivitiesVideoLink: string = homePage.clubActivitiesVideoLink
  const clubActivitiesBody: PortableTextBlock[] =
    homePage.clubActivitiesBody as PortableTextBlock[]

  return (
    <section className="bg-zinc-200">
      <Homehero
        heroTitle={heroTitle}
        heroDescription={heroDescription}
        heroMeetingLocation={heroMeetingLocation}
      />
      <ClubActivities
        clubActivitiesVideoLink={clubActivitiesVideoLink}
        clubActivitiesBody={clubActivitiesBody}
      />
      <MeetingNotes />
    </section>
  )
}

export default Home
