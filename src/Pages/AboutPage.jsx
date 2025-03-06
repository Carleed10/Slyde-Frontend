import React from 'react'
import AboutBanner from '../Components/AboutUs/AboutBanner'
import About from '../Components/AboutUs/About'
import WhyChooseUs from '../Components/WhyChooseUs'
import OurVision from '../Components/AboutUs/OurVision'
import CertificateGallery from '../Components/AboutUs/CertificateGallery'
import Animation from '../Components/Animation/Animation'

const AboutPage = () => {
  return (
    <>
        <Animation>

        <div>
            
            <div id='AboutBanner'>
                <AboutBanner/>
            </div>
            <div id='OurVision'>
              <OurVision/>
            </div>

            <div id='CertificateGallery'>
            <CertificateGallery/>

            </div>
            <div id='About'>
                <About/>
            </div>
        </div>

        </Animation>
    
    </>
  )
}

export default AboutPage