import Link from 'next/link'

const Homehero = () => {
  return (
    <article className="max-w-[1280px] m-auto relative">
      <div className="border-[2px] border-black border-solid brightness-75 m-auto p-5 bg-center bg-cover relative bg-hero-image h-[400px] md:h-[844px]"></div>
      <div className="absolute top-[0px] md:ml-[50px] md:top-[300px] space-y-5 p-5 m-auto overflow-y-auto">
        <h1 className="text-left lx:text-7xl lg:text-6xl md:text-5xl sm:text-4xl text-3xl font-bold italic text-white">
          A Pacifica Christian Club
        </h1>
        <p className="ml-0 w-full lg:ml-10 text-left p-2 rounded md:text-lg text-md stroke-2 font-bold md:w-[620px] text-white">
          Biblical Study and Discussion for Christians and Non Christians.
        </p>
        <p className="ml-0 w-full text-left p-2 rounded md:text-2xl text-md stroke-2 font-bold md:w-[620px] text-white">
          Room: 108
        </p>
        <div>
          <Link
            href="#club-activities"
            className="md:text-2xl no-underline bg-[#36406b] text-white p-2 rounded"
          >
            Learn More
          </Link>
        </div>
      </div>
    </article>
  )
}

export default Homehero
