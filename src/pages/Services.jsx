import React, { useState } from 'react'
import Header from '../components/Header'
import AltMain from '../components/AltMain'
import Footer from '../components/Footer'
import ServicesContent from '../components/ServicesContent'

const Services = () => {

  const [content , setContent] = useState('marketing')

  const sectionContent = (content) => {
    setContent(content)
  }
  
  
  
  return (
    <div>
        <Header sectionContent={sectionContent} />
        <AltMain />
        <ServicesContent content={content} sectionContent={sectionContent} />
        <Footer sectionContent={sectionContent} />
    </div>
  )
}

export default Services