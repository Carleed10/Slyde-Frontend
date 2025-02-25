import React from 'react'
import AboutBanner from '../Components/AboutUs/AboutBanner'
import About from '../Components/AboutUs/About'
import WhyChooseUs from '../Components/WhyChooseUs'
import OurVision from '../Components/AboutUs/OurVision'
import CertificateGallery from '../Components/AboutUs/CertificateGallery'

const AboutPage = () => {
  return (
    <>
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
    
    </>
  )
}

export default AboutPage