import React from 'react'
import logoImage from '../assets/Mask group.png';
import rightImg from '../assets/Rectangle 17 (1).png';
import leftImg from '../assets/Rectangle 17.png';
import mainImg1 from '../assets/Rectangle 19.png'
import mainImg2 from '../assets/Rectangle 20.png'
import { useTranslation } from 'react-i18next';

const MainHome = () => {

    const { t , i18n } = useTranslation()

    const {text1 ,text2 , btn} = t('main')

  return (
    <div className='bg-[rgba(0,19,90,1)] h-screen relative'>
         <div className='flex justify-center h-full ml-28 absolute left-[50%] translate-x-[-50%]'>
            <img src={logoImage} />
        </div>
        <div className=' absolute w-[50%] bottom-0 h-[60%] left-[50%] translate-x-[-50%] flex items-bottom justify-between'>
       
        <div className={`flex justify-start ${i18n.language === 'en' ? 'order-2' : 'order-1'}`}>
          <img src={leftImg} />
        </div>

       
        <div className={`flex justify-start ${i18n.language === 'en' ? 'order-1' : 'order-2'}`}>
          <img src={rightImg} />
        </div>
        
        </div>
        <div className='absolute w-[50%] bottom-0 h-[20%] left-[50%] translate-x-[-50%]'>
            <div className={`absolute  ${i18n.language === 'en' ? 'right-[-27px]' : 'left-[-55px]' }`}>
                <img src={mainImg1} />
            </div>
            <div className={`absolute top-[30px] ${i18n.language === 'en' ? 'right-[-55px]' : 'left-[-27px]' } `}>
                <img src={mainImg2} />
            </div>
        </div>

         <div className='main__desc text-white w-[80%] flex justify-end items-center h-full'>
           <div className='flex justify-center items-center relative flex-col'>
           <h1 className='text-[45px] font-bold text-center mb-10'> {text1} <span className='block mt-2'>{text2}</span></h1>
            <button className='bg-white rounded-2xl font-semibold text-lg w-36 text-[rgba(0,19,90,1)] py-2'>{btn}</button>
           </div>
         </div>

    </div>
  )
}

export default MainHome