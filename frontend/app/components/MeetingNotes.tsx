import { useSession } from 'next-auth/react'
import Link from 'next/link'

const MeetingNotes = () => {
  const { data: session } = useSession()

  if (session && session.user) {
    return (
      <article
        id="meeting-notes"
        className="relative max-w-[1920px] m-auto h-[800px] bg-[#f9f5eb]"
      >
        <div className="text-center pt-[50px]">
          <h2 className="font-bold lx:text-5xl lg:text-4xl md:text-3xl text-2xl underline">
            Meeting Notes
          </h2>
          <Link
            href="/meetings"
            className="md:text-2xl no-underline bg-[#36406b] text-white p-2 rounded absolute bottom-[20px] left-[50px]"
          >
            Read More
          </Link>
        </div>
      </article>
    )
  }
  return (
    <article
      id="meeting-notes"
      className="relative max-w-[1920px] m-auto h-[800px] bg-[#f9f5eb]"
    >
      <div className="text-center pt-[50px]">
        <h2 className="font-bold lx:text-5xl lg:text-4xl md:text-3xl text-2xl underline">
          Meeting Notes
        </h2>
        <Link
          href="/api/auth/signin"
          className="md:text-2xl no-underline bg-[#36406b] text-white p-2 rounded absolute bottom-[20px] left-[50px]"
        >
          Read More (Students Only)
        </Link>
      </div>
    </article>
  )
}

export default MeetingNotes
