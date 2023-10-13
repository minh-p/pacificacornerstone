import Homehero from '@/app/components/Homehero'
import ClubActivities from '@/app/components/ClubActivities'
import MeetingNotes from '@/app/components/MeetingNotes'

const Home = () => {
  return (
    <section className="bg-zinc-200">
      <Homehero />
      <ClubActivities />
      <MeetingNotes />
    </section>
  )
}

export default Home
