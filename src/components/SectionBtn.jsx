import { Link } from 'react-router-dom'
import btn from '../assets/Vector.png'

const SectionBtn = ({link}) => {
  return (
    <Link to={link}>
        <div className='flex justify-center mx-auto mt-12 items-center border gap-2 py-2 rounded-xl border-[rgba(0,19,90,1)] w-[126px]'>
           <img src={btn} alt='btn' />
           <h4 className='text-[rgba(0,19,90,1)]'>المزيد</h4>
        </div>
    </Link>
  )
}

export default SectionBtn