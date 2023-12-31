'use client'

import Link from 'next/link'
import SignInButton from '@/app/components/SignInButton'
import MobileNav from '@/app/components/MobileNav'
import { usePathname } from 'next/navigation'

const Appbar = () => {
  const currentRoute = usePathname()

  return (
    <nav className="w-screen flex flex-row bg-red bg-[#952004] p-5 h-[179px] overflow-visible">
      <div className="m-auto flex flex-row overflow-visible">
        <div>
          <Link href="/">
            <ul className="flex flex-col">
              <li className="text-3xl xl:text-4xl text-[#00a9ff]">
                Pacifica GGUSD
              </li>
              <li className="text-3xl xl:text-4xl text-white">Corner Stone</li>
            </ul>
          </Link>
        </div>
        <div className="flex flex-col space-y-4 pl-5 hidden sm:block mx-5">
          <ul className="flex flex-row space-x-10">
            <li>
              <Link
                className={`hover:underline text-2xl xl:text-3xl ${
                  currentRoute == '/' ? 'underline' : ''
                }`}
                href="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className={`hover:underline text-2xl xl:text-3xl ${
                  currentRoute == '/mission' ? 'underline' : ''
                }`}
                href="/mission"
              >
                Mission
              </Link>
            </li>
            <li>
              <Link
                className={`hover:underline text-2xl xl:text-3xl hidden md:block ${
                  currentRoute == '/members' ? 'underline' : ''
                }`}
                href="/members"
              >
                Members
              </Link>
            </li>
            <li>
              <Link
                className={`hover:underline text-2xl xl:text-3xl hidden lg:block ${
                  currentRoute == '/schedules' ? 'underline' : ''
                }`}
                href="/schedules"
              >
                Schedules
              </Link>
            </li>
            <li>
              <Link
                className={`hover:underline text-2xl xl:text-3xl hidden xl:block ${
                  currentRoute.includes('/meetings') ? 'underline' : ''
                }`}
                href="/meetings"
              >
                Meetings
              </Link>
            </li>
            <li className="hidden xl:block">
              <SignInButton />
            </li>
          </ul>
          <ul className="flex flex-row space-x-10">
            <li>
              <Link
                className={`hover:outline outline-2 bg-[#f40707] text-2xl p-1 rounded ${
                  currentRoute.includes('/theological-questions')
                    ? 'outline'
                    : ''
                }`}
                href="/theological-questions"
              >
                Theological Questions
              </Link>
            </li>
            <li>
              <Link
                className={`hover:outline outline-2 bg-[#f40707] text-2xl p-1 rounded hidden lg:inline ${
                  currentRoute.includes('/writing-press') ? 'outline' : ''
                }`}
                href="/writing-press"
              >
                Writing Press
              </Link>
            </li>
          </ul>
        </div>
        <MobileNav />
      </div>
    </nav>
  )
}

export default Appbar
