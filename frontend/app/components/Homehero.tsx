import Link from 'next/link'

const Homehero = () => {
  return (
    <article className="max-w-screen">
      <div className="border-[2px] border-black border-solid blur-[2px] m-auto p-5 bg-center bg-cover relative bg-hero-image h-[300px] md:h-[1044px] max-h-[80vh]"></div>
      <div className="absolute left-0 top-[20%] md:left-[20%] space-y-2 md:top-[50%] p-5 right-15">
        <h1 className="text-left lx:text-7xl lg:text-6xl md:text-5xl text-4xl font-bold italic top-[10%] left-[5%] md:top-[50%] md:left-[10%] text-white">
          A Pacifica Christian Club
        </h1>
        <p className="ml-0 w-full lg:ml-10 text-left p-2 rounded md:text-lg text-md stroke-2 font-bold top-[22%] left-[10px] md:top-[60%] md:w-[620px] md:left-[15%] text-white">
          Biblical Study and Discussion for Christians and Non Christians.
        </p>
        <p className="ml-0 w-full text-left p-2 rounded md:text-2xl text-md stroke-2 font-bold top-[22%] left-[10px] md:top-[60%] md:w-[620px] md:left-[15%] text-white">
          Room: 108
        </p>
        <Link
          href="#club-activities"
          className="md:text-2xl absolute no-underline bg-[#36406b] text-white p-2 rounded"
        >
          Learn More
        </Link>
      </div>
    </article>
  )
}

export default Homehero
