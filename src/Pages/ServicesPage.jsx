import React from 'react'
import Faq from '../Components/Services/Faq'
import ServicesBanner from '../Components/Services/ServicesBanner'

const ServicesPage = () => {
  return (
    <>
        <div>
            <div id='ServicesBanner'>
                <ServicesBanner/>
            </div>
            <div id='Faq'>
                <Faq/>
            </div>
        </div>
    
    
    </>
  )
}

export default ServicesPage