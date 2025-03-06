import React from 'react'
import Faq from '../Components/Services/Faq'
import ServicesBanner from '../Components/Services/ServicesBanner'
import OurServices from '../Components/Services/OurServices'
import HeroSection from '../Components/Services/HeroSection'
import Animation from '../Components/Animation/Animation'

const ServicesPage = () => {
  return (
    <>
       <Animation>
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
       </Animation>
    
    
    </>
  )
}

export default ServicesPage