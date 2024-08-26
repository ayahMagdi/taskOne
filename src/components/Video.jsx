// import video from '../assets/pexels-photo-3760093 1.png'
import play from '../assets/octicon_play-16.png'

const Video = () => {
  return (
    <div className='bg-[rgba(0,19,90,1)] py-10 relative'>
        <div className='bg-hero-pattern h-[350px] w-full bg-no-repeat bg-cover flex justify-center items-center'>
            <img src={play} alt='play' className='cursor-pointer' />
        </div>
    </div>
  )
}

export default Video