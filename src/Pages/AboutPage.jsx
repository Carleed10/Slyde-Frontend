import React from 'react'
import AboutBanner from '../Components/AboutUs/AboutBanner'
import About from '../Components/AboutUs/About'
import WhyChooseUs from '../Components/WhyChooseUs'
import OurVision from '../Components/AboutUs/OurVision'

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
            <div>
              <WhyChooseUs/>
            </div>
            <div id='About'>
                <About/>
            </div>
        </div>
    
    </>
  )
}

export default AboutPage