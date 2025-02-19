import React from 'react'
import AboutBanner from '../Components/AboutUs/AboutBanner'
import About from '../Components/AboutUs/About'
import WhyChooseUs from '../Components/WhyChooseUs'

const AboutPage = () => {
  return (
    <>
        <div>
            
            <div id='AboutBanner'>
                <AboutBanner/>
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