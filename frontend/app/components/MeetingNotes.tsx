import { StopCircleIcon } from '@heroicons/react/24/solid'
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
        <div className="pt-[50px]">
          <h2 className="text-center font-bold lx:text-5xl lg:text-4xl md:text-3xl text-2xl underline">
            Meeting Notes
          </h2>
          <div className="md:max-w-[50%] max-w-[80%] text-2xl m-auto my-[50px] relative">
            <div className="hidden absolute top-3 bottom-0 right-full mr-7 md:mr-[3.25rem] w-[3px] bg-slate-200 dark:bg-slate-800 sm:block"></div>
            <ul>
              <li className="my-[25px] relative text-xl xl:text-2xl">
                <StopCircleIcon className="bg-[#f9f5eb] hidden absolute mr-6 right-[99.5%] top-2 text-slate-200 dark:text-slate-600 md:mr-12 h-5 w-5 overflow-visible sm:block" />
                <p>September 28th, 2023</p>
                <p className="font-bold">
                  First Meeting: Testing out the site.
                </p>
                <p>Description: All Hail Ian Alves</p>
              </li>
            </ul>
          </div>
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
      className="relative max-w-[1920px] m-auto h-[800px] bg-[#f9f5eb] p-5"
    >
      <div className="pt-[50px]">
        <h2 className="text-center font-bold lx:text-5xl lg:text-4xl md:text-3xl text-2xl underline">
          Meeting Notes
        </h2>
        <div className="md:max-w-[50%] max-w-[80%] text-2xl m-auto my-[50px] relative">
          <div className="hidden absolute top-3 bottom-0 right-full mr-7 md:mr-[3.25rem] w-[3px] bg-slate-200 dark:bg-slate-800 sm:block"></div>
          <ul>
            <li className="my-[25px] relative text-xl xl:text-2xl">
              <StopCircleIcon className="bg-[#f9f5eb] hidden absolute mr-6 right-[99.5%] top-2 text-slate-200 dark:text-slate-600 md:mr-12 h-5 w-5 overflow-visible sm:block" />
              <p>September 28th, 2023</p>
              <p className="font-bold">First Meeting: Testing out the site.</p>
              <p>Description: All Hail Ian Alves</p>
            </li>
          </ul>
        </div>
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
