import about1 from '../assets/png-clipart-computer-icons-visualization-vision-icon-logo-eye-removebg-preview 1.png'
import about2 from '../assets/png-transparent-computer-icons-shooting-target-others-miscellaneous-text-logo-removebg-preview 1.png'
import about3 from '../assets/Service-Gear-PNG-Free-Download-removebg-preview 1.png'
import SectionBtn from './SectionBtn'

const AboutSection = () => {
  return (
    <div className='py-8'>
        <h2 className='text-[rgba(0,19,90,1)] font-bold text-xl text-center'>من نحن</h2>
        <div className='flex justify-center items-end gap-16 mt-12'>
            <div className='border border-[rgba(0,19,90,1)] p-4 rounded-2xl text-center w-[235px]'>
                <div className='flex justify-center items-center h-[89px]'>
                     <img src={about1} alt='about' />
                </div>
                <h3 className='text-[rgba(0,19,90,1)] text-[20px] font-bold mb-3'>الرؤيه</h3>
                <p className='text-[rgba(0,19,90,1)] font-medium pb-2'>تحقيق الوعي بالعلامة التجارية وفقا لاستراتيجية تضمن لك الظهور بفاعلية في السوق المستهدف</p>
            </div>
            <div className='border border-[rgba(0,19,90,1)] p-4 rounded-2xl text-center w-[235px]'>
               <div className='flex justify-center items-center h-[89px]'>
                    <img src={about2} alt='about' />
                </div>
                <h3 className='text-[rgba(0,19,90,1)] text-[20px] font-bold mb-3'>ما نسعي اليه</h3>
                <p className='text-[rgba(0,19,90,1)] font-medium pb-2'>تحقيق الوعي بالعلامة التجارية وفقا لاستراتيجية تضمن لك الظهور بفاعلية في السوق المستهدف</p>
            </div>
            <div className='border border-[rgba(0,19,90,1)] p-4 rounded-2xl text-center w-[235px]'>
                <div className='flex justify-center items-center h-[89px]'>
                   <img src={about3} alt='about' />
                </div>
                <h3 className='text-[rgba(0,19,90,1)] text-[20px] font-bold mb-3'>ما نقدمه</h3>
                <p className='text-[rgba(0,19,90,1)] font-medium pb-2'>تحقيق الوعي بالعلامة التجارية وفقا لاستراتيجية تضمن لك الظهور بفاعلية في السوق المستهدف</p>
            </div>
        </div>
        <SectionBtn link={'./about'} />
    </div>
  )
}

export default AboutSection