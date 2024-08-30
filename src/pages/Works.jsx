import React, { useState } from 'react'
import Header from '../components/Header'
import AltMain from '../components/AltMain'
import Footer from '../components/Footer'
import WorkContent from '../components/WorkContent'

const Works = () => {

  const [content , setContent] = useState('marketing')

  const sectionContent = (content) => {
    setContent(content)
  }

  return (
    <div>
         <Header />
         <AltMain />
         <WorkContent />
         <Footer sectionContent={sectionContent} />
    </div>
  )
}

export default Works