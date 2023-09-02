import Link from 'next/link'
import SignInButton from '@/app/components/SignInButton'

const Appbar = () => {
  return (
    <nav className="w-screen flex flex-col xl:flex-row bg-red bg-[#952004] p-5 h-[179px]">
      <div className="m-auto flex flex-col xl:flex-row space-x-14">
        <div>
          <ul className="flex flex-col">
            <li className="text-3xl xl:text-4xl text-[#00a9ff]">
              Pacifica GGUSD
            </li>
            <li className="text-3xl xl:text-4xl text-white">Corner Stone</li>
          </ul>
        </div>
        <div className="flex flex-col space-y-4">
          <ul className="flex flex-col xl:flex-row xl:space-x-10">
            <li>
              <Link
                className="hover:underline text-3xl xl:text-4xl"
                href="/mission"
              >
                Mission
              </Link>
            </li>
            <li>
              <Link
                className="hover:underline text-3xl text-3xl xl:text-4xl"
                href="/members"
              >
                Members
              </Link>
            </li>
            <li>
              <Link
                className="hover:underline text-3xl text-3xl xl:text-4xl"
                href="/schedule"
              >
                Schedule
              </Link>
            </li>
            <li>
              <Link
                className="hover:underline text-3xl xl:text-4xl"
                href="/meeting"
              >
                Meeting
              </Link>
            </li>
            <li>
              <SignInButton />
            </li>
          </ul>
          <ul className="flex flex-col xl:flex-row xl:space-x-10">
            <li>
              <Link
                className="hover:outline outline-2 bg-[#f40707] text-2xl p-1 rounded"
                href="/theological-questions"
              >
                Theological Questions
              </Link>
            </li>
            <li>
              <Link
                className="hover:outline outline-2 bg-[#f40707] text-2xl p-1 rounded"
                href="/writing-press"
              >
                Writing Press
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Appbar
