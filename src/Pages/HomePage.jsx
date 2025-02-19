import React from 'react'
import Hero from '../Components/Hero'
import Footer from '../Components/Footer'
import HowWeHelp from '../Components/HowWeHelp'
import Countries from '../Components/Countries'
import Marquee from '../Components/FlagMarquee'
import WhyChooseUs from '../Components/WhyChooseUs'

const HomePage = () => {
  return (
    <>
    
        <div>
            <div id='Hero'>
                <Hero/>
            </div>
            <div id='WhyChooseUs'>
                <WhyChooseUs/>
            </div>
            <div id='HowWeHelp'>
                <HowWeHelp/>
            </div>
            <div id='Countries'>
                <Countries/>
            </div>
            <div id='Marquee'>
                <Marquee/>
            </div>
            <div id='Footer'>
                <Footer/>
            </div>
        </div>
    
    </>
  )
}

export default HomePage