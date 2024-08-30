import ReactPlayer from 'react-player/youtube'
import videotest from '../assets/448054303_7670876546312794_614272128183978856_n.mp4'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'

const VideoPlay = ({handleclick}) => {
  return (
    <div className='fixed top-0 left-0 h-screen w-screen bg-white z-50'>
      <div className='p-9 text-2xl absolute top-0 right-0 cursor-pointer'><FontAwesomeIcon icon={faClose} onClick={handleclick} /></div>
      <div className='flex justify-center items-center h-full w-full'>
         <video src={videotest} autoPlay muted loop className='w-full h-[300px] object-cover' />
      </div>
        {/* <ReactPlayer url='https://www.youtube.com/watch?v=7KDRqBpT8NA' className='w-full h-full' /> */}
    </div>
  )
}

export default VideoPlay