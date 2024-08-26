import React from 'react'
import Header from '../components/Header'
import MainHome from '../components/MainHome'
import AboutSection from '../components/AboutSection'
import Video from '../components/Video'
import Services from '../components/Services'
import Footer from '../components/Footer'

const HomePage = () => {
  return (
    <div>
        <Header />
        <MainHome />
        <AboutSection />
        <Video />
        <Services />
        <Footer />
    </div>
  )
}

export default HomePage