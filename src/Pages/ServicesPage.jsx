import React from 'react'
import Faq from '../Components/Services/Faq'
import ServicesBanner from '../Components/Services/ServicesBanner'
import OurServices from '../Components/Services/OurServices'

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
            <div id='Faq'>
                <Faq/>
            </div>
        </div>
    
    
    </>
  )
}

export default ServicesPage