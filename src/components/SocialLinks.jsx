import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import { faPinterest } from '@fortawesome/free-brands-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';

const SocialLinks = () => {

  return (
    <ul className='flex items-center gap-3'>
            <li className='text-white w-7 h-7 bg-[#1877F2] transition-all border border-[#1877F2] rounded-full flex justify-center items-center hover:bg-white hover:text-[#1877F2]'>
              <Link><FontAwesomeIcon icon={faFacebookF} /></Link>
           </li>
           <li className='text-white w-7 h-7 bg-[#BD081C] border border-[#BD081C] rounded-full flex justify-center items-center transition-all hover:bg-white hover:text-[#BD081C]'>
            <Link><FontAwesomeIcon icon={faPinterest} /></Link>
        </li> 
        <li className='text-white w-7 h-7 bg-[#1DA1F2] border border-[#1DA1F2] rounded-full flex justify-center items-center transition-all hover:bg-white hover:text-[#1DA1F2]'>
            <Link><FontAwesomeIcon icon={faTwitter} /></Link>
        </li>
        <li className='text-white w-7 h-7 bg-[#E4405F] border border-[#E4405F] rounded-full flex justify-center items-center transition-all hover:bg-white hover:text-[#E4405F]'>
           <Link><FontAwesomeIcon icon={faInstagram} /></Link>
        </li>
    </ul>
  )
}

export default SocialLinks