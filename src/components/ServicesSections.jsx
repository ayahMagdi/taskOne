import React, { useState } from 'react'

const ServicesSections = ({sectionContent , content}) => {

    const [active ,setActive] = useState('marketing')

  return (
    <div className='flex justify-between items-center'>
        <div 
           onClick={() => {
              sectionContent('marketing')
              setActive('marketing')
           }}
           className={`rounded-3xl w-[180px] h-[95px] flex justify-center items-center text-center  cursor-pointer ${content === 'marketing' ? 'bg-background-grad border-0' :'border border-[rgba(0,0,0,0.7)] bg-white'}`}
        >
             <p className={` font-medium text-xl ${content === 'marketing' ? 'text-white' :'text-[rgba(0,19,90,1)]'}`}>تسويق الكتروني</p>
        </div>
        <div 
           onClick={() => {
              sectionContent('design')
              setActive('design')
           }}
           className={`rounded-3xl w-[180px] text-center h-[95px] flex justify-center items-center cursor-pointer ${content === 'design' ? 'bg-background-grad border-0' :'border border-[rgba(0,0,0,0.7)] bg-white'}`}
        >
             <p className={` font-medium text-xl ${content === 'design' ? 'text-white' :'text-[rgba(0,19,90,1)]'}`}>تصميم مواقع و انظمه</p>
        </div>
        <div 
          onClick={() => {
            sectionContent('3d')
            setActive('3d')
         }}
           className={`rounded-3xl w-[180px] text-center h-[95px] flex justify-center items-center cursor-pointer ${content === '3d' ? 'bg-background-grad border-0' :'border border-[rgba(0,0,0,0.7)] bg-white'}`}
        >
             <p className={` font-medium text-xl ${content === '3d' ? 'text-white' :'text-[rgba(0,19,90,1)]'}`}>تصميم 3D</p>
        </div>
        <div 
          onClick={() => {
            sectionContent('archive')
            setActive('archive')
         }}
           className={`rounded-3xl w-[180px] text-center h-[95px] flex justify-center items-center cursor-pointer ${content === 'archive' ? 'bg-background-grad border-0' :'border border-[rgba(0,0,0,0.7)] bg-white'}`}
        >
             <p className={` font-medium text-xl ${content === 'archive' ? 'text-white' :'text-[rgba(0,19,90,1)]'}`}>خدمات ارشفه الكترونيه</p>
        </div>
        <div 
         onClick={() => {
            sectionContent('apps')
            setActive('apps')
         }}
           className={`rounded-3xl w-[180px] h-[95px] flex justify-center text-center items-center cursor-pointer ${content === 'apps' ? 'bg-background-grad border-0' :'border border-[rgba(0,0,0,0.7)] bg-white'}`}
        >
             <p className={` font-medium text-xl ${content === 'apps' ? 'text-white' :'text-[rgba(0,19,90,1)]'}`}>تطبيقات موبايل Android _ ios</p>
        </div>
    </div>
  )
}

export default ServicesSections