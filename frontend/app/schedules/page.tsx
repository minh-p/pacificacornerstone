'use client'

import { useState } from 'react'
import {
  getCurrentMonth,
  getCurrentYear,
  getNextMonth,
  getPrevMonth,
  getPrevYear,
  getNextYear,
} from '@/lib/dateGetter'
import useSWR from 'swr'
import NextPrevButtons from '@/app/components/NextPrevButtons'
import { ChevronRightIcon, StopCircleIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import { convertToWordDate } from '@/lib/convertToSimpleDate'
import type { ScheduleFeed } from '@/types/schedule'

const Schedules = () => {
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth())
  const [currentYear, setCurrentYear] = useState(getCurrentYear())

  const setNextMonth = () => {
    const returns = getNextMonth(currentMonth)
    const newMonth: string = returns.month
    setCurrentMonth(newMonth)

    if (returns.newYear) {
      setCurrentYear(getNextYear(Number(currentYear)))
    }
  }

  const setPrevMonth = () => {
    const returns = getPrevMonth(currentMonth)
    const newMonth: string = returns.month
    setCurrentMonth(newMonth)
    if (returns.newYear) {
      setCurrentYear(getPrevYear(Number(currentYear)))
    }
  }

  const { data: schedules, error } = useSWR(
    `/api/schedules?currentYear=${currentYear}&currentMonth=${currentMonth}`,
    (url) => fetch(url).then((res) => res.json())
  )
  if (error)
    return (
      <div>
        <p>
          An Error Occured With front-end configuration. Please contact
          site&apos;s maintainer.
        </p>
      </div>
    )
  if (!schedules)
    return (
      <div>
        <p>Loading...</p>
      </div>
    )

  console.log(currentMonth)

  return (
    <section className="bg-zinc-200">
      <article className="max-w-[1280px] m-auto h-full p-5 bg-[#f9f5eb] min-h-[calc(100vh-179px)]">
        <div className="m-auto">
          <h1 className="font-bold text-center lx-text-5xl lg:text-4xl md:text-3xl text-2xl underline my-[25px]">
            Schedules
          </h1>
          <NextPrevButtons
            nextFunction={setNextMonth}
            prevFunction={setPrevMonth}
            textInMiddleWidth={'130'}
            textInMiddle={`${currentMonth} ${currentYear}`}
          />
        </div>
        <div className="md:max-w-[50%] text-2xl m-auto my-[50px] relative">
          <div className="hidden absolute top-3 bottom-0 right-full mr-7 md:mr-[3.25rem] w-[3px] bg-slate-200 dark:bg-slate-800 sm:block"></div>
          <ul>
            {schedules.map((schedule: ScheduleFeed, index: number) => {
              const link: string = schedule.slug || 'not found'
              return (
                <li key={index} className="my-[25px] relative">
                  <StopCircleIcon className="bg-[#f9f5eb] hidden absolute mr-6 right-[99.5%] top-2 text-slate-200 dark:text-slate-600 md:mr-12 h-5 w-5 overflow-visible sm:block" />
                  <p className="font-bold">{schedule.title}</p>
                  <p>
                    Start Date: {convertToWordDate(String(schedule.startDate))}
                  </p>
                  <p>End Date: {convertToWordDate(String(schedule.endDate))}</p>
                  <Link
                    href={`/schedules/${encodeURIComponent(
                      link
                    )}?currentYear=${new Date(
                      schedule.startDate
                    ).getFullYear()}`}
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
      </article>
    </section>
  )
}

export default Schedules
