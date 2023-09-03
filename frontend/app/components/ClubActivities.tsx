import dynamic from 'next/dynamic'
const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false })

const ClubActivities = () => {
  // TODO Add editable data here from sanity.
  return (
    <article
      id="club-activities"
      className="relative max-w-[1920px] flex flex-col md:flex-row m-auto"
    >
      <div className="text-center bg-white md:w-[50vw] aspect-video p-5 bg-slate-100">
        <div className="m-auto">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=JFwl-21pzQw"
            width="100%"
            height="522px"
          />
        </div>
      </div>
      <div className="bg-[#f7f7f7] text-center md:w-[50vw] ">
        <h2 className="underline lx:text-5xl lg:text-4xl md:text-3xl text-2xl underline mt-[50px] md:mt-[100px]">
          Club Activities
        </h2>
        {/*TODO: Add front face video content here for paragrph and title. As well the video.*/}
        <p className="mt-[20px] lx:text-3xl lg:text-2xl md:text-xl text-lg">
          Hello
        </p>
      </div>
    </article>
  )
}

export default ClubActivities
