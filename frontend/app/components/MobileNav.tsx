'use client'

import { useState, useEffect } from 'react'
import SignInButton from '@/app/components/SignInButton'
import Link from 'next/link'

const MobileNav = () => {
  const [isOpened, setIsOpened] = useState(false)

  useEffect(() => {
    const closeNavBar = () => {
      if (window.innerWidth >= 1280) {
        setIsOpened(false)
      }
    }
    window.addEventListener('resize', closeNavBar)
    return () => window.removeEventListener('resize', closeNavBar)
  }, [])

  if (typeof window != 'undefined' && window.document) {
    document.body.style.overflow = 'visible'
  }

  if (!isOpened) {
    if (typeof window != 'undefined' && window.document) {
      document.body.style.overflow = 'visible'
    }
    return (
      <>
        <button
          className="ml-[5px]"
          onClick={() => {
            setIsOpened(true)
          }}
        >
          <div className="mt-[48px] md:mt-[5px] space-y-2 block xl:hidden">
            <span className="block h-1 w-8 bg-[#f40707]"></span>
            <span className="block h-1 w-8 bg-[#f40707]"></span>
            <span className="block h-1 w-8 bg-[#f40707]"></span>
          </div>
        </button>
      </>
    )
  } else {
    if (typeof window != 'undefined' && window.document) {
      document.body.style.overflow = 'hidden'
    }
    return (
      <>
        <button
          className="ml-[5px]"
          onClick={() => {
            setIsOpened(false)
          }}
        >
          <div className="mt-[48px] md:mt-[5px] space-y-2 block xl:hidden">
            <span className="block h-1 w-8 bg-[#f40707]"></span>
            <span className="block h-1 w-8 bg-[#f40707]"></span>
            <span className="block h-1 w-8 bg-[#f40707]"></span>
          </div>
        </button>
        <div className="fixed xl:hidden h-[50vh] bg-[#791818] z-20 bottom-0 w-screen right-0 md:right-0 md:top-[179px] md:w-[240px] md:h-[calc(100vh-179px)] p-0 overflow-auto">
          <div className="flex flex-col space-y-5 w-[70%] m-auto my-10">
            <ul className="flex flex-col space-y-5">
              <li>
                <Link
                  className="hover:underline text-2xl xl:text-3xl block sm:hidden"
                  href="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="hover:underline text-2xl xl:text-3xl block sm:hidden"
                  href="/mission"
                >
                  Mission
                </Link>
              </li>
              <li>
                <Link
                  className="hover:underline text-2xl xl:text-3xl block md:hidden"
                  href="/members"
                >
                  Members
                </Link>
              </li>
              <li>
                <Link
                  className="hover:underline text-2xl xl:text-3xl block lg:hidden"
                  href="/schedule"
                >
                  Schedules
                </Link>
              </li>
              <li>
                <Link
                  className="hover:underline text-2xl xl:text-3xl block xl:hidden"
                  href="/meetings"
                >
                  Meetings
                </Link>
              </li>
              <li className="block xl:hidden">
                <SignInButton />
              </li>
            </ul>
            <ul className="flex flex-col space-y-5">
              <li>
                <Link
                  className="hover:outline outline-2 bg-[#f40707] text-2xl p-1 rounded block md:hidden w-[260px]"
                  href="/theological-questions"
                >
                  Theological Questions
                </Link>
              </li>
              <li>
                <Link
                  className="hover:outline outline-2 bg-[#f40707] text-2xl p-1 rounded inline lg:hidden"
                  href="/writing-press"
                >
                  Writing Press
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </>
    )
  }
}

export default MobileNav
