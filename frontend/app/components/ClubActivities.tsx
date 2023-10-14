'use client'

import YouTube, { YouTubeProps } from 'react-youtube'

const YoutubeComponent = () => {
  const onPlayerReady: YouTubeProps['onReady'] = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo()
  }

  const opts: YouTubeProps['opts'] = {
    height: '540',
    width: '960',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
    },
  }

  return <YouTube videoId="JFwl-21pzQw" opts={opts} onReady={onPlayerReady} />
}

const ClubActivities = () => {
  // TODO Add editable data here from sanity.
  return (
    <article className="relative max-w-[1280px] flex flex-col 2xl:flex-row m-auto">
      <div className="text-center bg-white lx:max-w-[640px] bg-slate-100">
        <div className="m-auto p-5 aspect-video videoWrapper">
          <YoutubeComponent />
        </div>
      </div>
      <div className="bg-[#f7f7f7] text-center max-w-[100vw] 2xl:w-[640px] ">
        <h2
          id="club-activities"
          className="underline lx:text-5xl lg:text-4xl md:text-3xl text-2xl underline mt-[50px] md:mt-[100px] font-bold"
        >
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
