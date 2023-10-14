'use client'

import YouTube, { YouTubeProps } from 'react-youtube'
import type { PortableTextBlock } from '@portabletext/types'
import { PortableText } from '@portabletext/react'

interface Props {
  clubActivitiesVideoLink: string
  clubActivitiesBody: PortableTextBlock[]
}

const YoutubeComponent = ({
  clubActivitiesVideoLink,
}: {
  clubActivitiesVideoLink: string
}) => {
  const videoId: string = clubActivitiesVideoLink.includes('youtu.be')
    ? `${clubActivitiesVideoLink.split('/').pop()}`
    : `${clubActivitiesVideoLink.split('v=').pop()}`

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

  return <YouTube videoId={videoId} opts={opts} onReady={onPlayerReady} />
}

const ClubActivities = ({
  clubActivitiesVideoLink,
  clubActivitiesBody,
}: Props) => {
  // TODO Add editable data here from sanity.
  return (
    <article className="relative max-w-[1280px] flex flex-col 2xl:flex-row m-auto">
      <div className="text-center bg-white lx:max-w-[640px] bg-slate-100">
        <div className="m-auto p-5 aspect-video videoWrapper">
          <YoutubeComponent clubActivitiesVideoLink={clubActivitiesVideoLink} />
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
        <div className="content">
          <PortableText value={clubActivitiesBody} />
        </div>
      </div>
    </article>
  )
}

export default ClubActivities
