import React from 'react'
import Contact from '../Components/Contact/Contact'
import Banner from '../Components/Contact/Banner'

const ContactPage = () => {
  return (
    <>
        <div>
            <div id='Banner'>
                <Banner/>
            </div>
            <div id='Contact'>
                <Contact/>
            </div>
        </div>

    </>
  )
}

export default ContactPage