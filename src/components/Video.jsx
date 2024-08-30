// import video from '../assets/pexels-photo-3760093 1.png'
import { useState } from 'react'
import play from '../assets/octicon_play-16.png'
import VideoPlay from './VideoPlay'

const Video = () => {

  const [playvideo , setPlayvideo] = useState(false)

  return (
    <div className='bg-[rgba(0,19,90,1)] py-10 h-[350px]'>
        <div className='bg-hero-pattern h-full w-full bg-no-repeat bg-cover flex justify-center items-center'>
            <img src={play} alt='play' className='cursor-pointer' onClick={() => setPlayvideo(true)} />
        </div>
        
        {playvideo && <VideoPlay handleclick={() => setPlayvideo(false)} />}
    </div>
  )
}

export default Video