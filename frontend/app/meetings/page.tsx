import { ChevronRightIcon, StopCircleIcon } from "@heroicons/react/24/solid"
import Link from "next/link"

const Meetings = () => {
  return (
    <section className="bg-[#f9f5eb]">
      <article className="max-w-[1920px] m-auto h-full p-5">
        <div className="m-auto max-w-[1920px]">
          <h1 className="font-bold text-center lx-text-5xl lg:text-4xl md:text-3xl text-2xl underline my-[25px]">
            Meeting Notes
          </h1>
          <div className="md:max-w-[50%] text-2xl m-auto my-[50px] relative">
            <div className="hidden absolute top-3 bottom-0 right-full mr-7 md:mr-[3.25rem] w-[3px] bg-slate-200 dark:bg-slate-800 sm:block">
            </div>
            <ul>
              <li className="my-[25px] relative">
                <StopCircleIcon className="bg-[#f9f5eb] hidden absolute mr-6 right-[99.5%] top-2 text-slate-200 dark:text-slate-600 md:mr-12 h-5 w-5 overflow-visible sm:block" />
                <p>September 28th, 2023</p>
                <p className="font-bold">First Meeting: Testing out the site.</p>
                <p>Description: All Hail Ian Alves</p>
                <Link href="/" className="md:text-lg no-underline bg-[#36406b] text-white p-2 py-1 my-2 rounded inline-flex">Read more
                  <ChevronRightIcon ariaHidden="true" className="-mr-1 h-8 w-5 text-white"/>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </article>
    </section>
  )
}

export default Meetings
