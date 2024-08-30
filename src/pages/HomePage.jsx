import React, { useState } from 'react'
import Header from '../components/Header'
import MainHome from '../components/MainHome'
import AboutSection from '../components/AboutSection'
import Video from '../components/Video'
import Services from '../components/Services'
import Footer from '../components/Footer'

const HomePage = () => {

  const [content , setContent] = useState('marketing')

  const sectionContent = (content) => {
    setContent(content)
}

  return (
    <div>
        <Header sectionContent={sectionContent} />
        <MainHome />
        <AboutSection />
        <Video />
        <Services />
        <Footer sectionContent={sectionContent} />
    </div>
  )
}

export default HomePage