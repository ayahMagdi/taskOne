import mainImg from '../assets/9a60413525a7fc68c5de7ed98689796c-removebg-preview 1 (1).png';
import 'animate.css';

const AltMain = () => {
  return (
    <div className='pt-8 bg-[rgba(0,19,90,1)]'>
      <div className='bg-serv-work bg-no-repeat bg-cover mt-[165px] relative'>
        <div className='bg-[#00135A80] flex justify-center items-center'>
          <img src={mainImg} className='animate__animated animate__pulse' />
        </div>
      </div>
    </div>
  )
}

export default AltMain