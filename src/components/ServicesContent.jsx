import React, { useState } from 'react'
import ServicesSections from './ServicesSections'
import Marketing from './Marketing'
import { Link } from 'react-router-dom'
import Designing from './Designing'
import Design3d from './Design3d'
import Archive from './Archive'
import Apps from './Apps'

const ServicesContent = ({sectionContent ,content}) => {
   
  return (
    <div className='bg-[rgba(0,19,90,1)] pt-10'>
        <div className='bg-white py-10 px-[200px]'>
            <ServicesSections sectionContent={sectionContent} content={content} />
            {content === 'marketing' &&  <Marketing />}
            {content === 'design' &&  <Designing />}
            {content === '3d' &&  <Design3d />}
            {content === 'archive' &&  <Archive />}
            {content === 'apps' &&  <Apps />}
            <div className='flex justify-center items-center'>
                <Link className='text-white tex-lg font-bold bg-[rgba(0,19,90,1)] rounded-2xl py-3 px-7'>انصم الينا</Link>
            </div>
        </div>
    </div>
  )
}

export default ServicesContent