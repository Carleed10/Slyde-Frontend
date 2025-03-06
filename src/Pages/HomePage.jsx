import React from 'react'
import Hero from '../Components/Hero'
import Footer from '../Components/Footer'
import HowWeHelp from '../Components/HowWeHelp'
import Countries from '../Components/Countries'
import Marquee from '../Components/FlagMarquee'
import WhyChooseUs from '../Components/WhyChooseUs'
import ServiceSection from '../Components/ServiceSection'
import ServiceProvided from '../Components/ServiceProvided'
import Video from '../Components/Video'
import Testimonials from '../Components/Testimonials'
import Animation from '../Components/Animation/Animation'

const HomePage = () => {
  return (
    <>
    
        <Animation>
        <div>
            <div id='Hero'>
                <Hero/>
            </div>
            <div id='WhyChooseUs'>
                <WhyChooseUs/>
            </div>
            <div id='ServiceProvided'>
                <ServiceProvided/>
            </div>
            {/* <div id='ServiceSection'>
                <ServiceSection/>
            </div> */}
            <div id='Video'>
                <Video/>
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

            <div id='Testimonials'>
                <Testimonials/>
            </div>

        </div>
        </Animation>
    
    </>
  )
}

export default HomePage