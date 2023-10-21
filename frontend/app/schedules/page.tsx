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
import NextPrevButtons from '@/app/components/NextPrevButtons'

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
        <div className="m-auto">
          <p>Nothing Here Yet</p>
        </div>
      </article>
    </section>
  )
}

export default Schedules
