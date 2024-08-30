import React, { useState } from 'react'
import Header from '../components/Header'
import AltMain from '../components/AltMain'
import Footer from '../components/Footer'
import ContactContent from '../components/ContactContent'

const Contact = () => {

  const [content , setContent] = useState('marketing')

  const sectionContent = (content) => {
    setContent(content)
  }

  return (
    <div>
        <Header />
         <AltMain />
         <ContactContent />
         <Footer sectionContent={sectionContent} />
    </div>
  )
}

export default Contact