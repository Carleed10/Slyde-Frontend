import React from 'react'
import Faq from '../Components/Services/Faq'
import ServicesBanner from '../Components/Services/ServicesBanner'
import OurServices from '../Components/Services/OurServices'
import HeroSection from '../Components/Services/HeroSection'

const ServicesPage = () => {
  return (
    <>
        <div>
            <div id='ServicesBanner'>
                <ServicesBanner/>
            </div>
            <div id='OurServices'>
              <OurServices/>
            </div>
            <div id='HeroSection'>
              <HeroSection/>
            </div>
            <div id='Faq'>
                <Faq/>
            </div>
        </div>
    
    
    </>
  )
}

export default ServicesPage