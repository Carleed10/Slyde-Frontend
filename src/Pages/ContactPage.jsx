import React from 'react'
import Contact from '../Components/Contact/Contact'
import Banner from '../Components/Contact/Banner'
import Animation from '../Components/Animation/Animation'

const ContactPage = () => {
  return (
    <>
        <Animation>
        <div>
            <div id='Banner'>
                <Banner/>
            </div>
            <div id='Contact'>
                <Contact/>
            </div>
        </div>
        </Animation>

    </>
  )
}

export default ContactPage