import React from 'react'
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import logo from "../Images/logo.png"

const Footer = () => {
  return (
    <>
          <div className="w-full bg-[rgb(255,245,241)] flex justify-center items-center text-black py-24">
        <div className="w-4/5">
          <div className="flex flex-col md:flex-row justify-between">
            {/* Logo and description */}
            <div className="mt-10 md:w-[25%] leading-[30px] pr-[25px] items-center flex flex-col justify-center   mt-[60px] font-light md:mt-0 text-center md:text-left">
            <img className="w-[180px] mb-4 sm:w-[220px]" src={logo} alt="" />

              <p>Your gateway to global education and unforgettable experiences.</p>
      
            </div>

            

            {/* Quick Links */}
            <div className="mt-10 md:w-[20%] leading-[30px]  mt-[60px] font-light md:mt-0 text-center md:text-left">
              <h4 className="mb-4 text-[20px] font-bold font-poppins text-[rgb(249,115,22)]">Quick Links</h4>
              
              <Link to='/services'> <p>Our Services</p>   </Link>
              <Link to='/contact'> <p>Addresses</p>   </Link>
              <Link to='/contact'> <p>Contact</p>   </Link>
              <HashLink to="/services#faq">
  <p>FAQ</p>
</HashLink>

             
            </div>

            {/* Legals */}
            <div className="mt-10 md:w-[20%] leading-[30px]  mt-[60px] font-light md:mt-0 text-center md:text-left">
              <h4 className="mb-4 text-[20px] font-bold font-poppins text-[rgb(249,115,22)]">Legals</h4>
              <p>Privacy Policy</p>
              <p>Terms of Service</p>
              <p>Disclaimer</p>
              <p>FAQ</p>

            </div>

            {/* Services */}
            <div className="mt-10 md:w-[20%] mt-[60px] md:mt-0 text-center md:text-left">
            <h4 className="mb-4 text-[20px] font-bold font-poppins text-[rgb(249,115,22)]">Address</h4>
              <h6 className="leading-[30px] text-[15px] font-light" >65, M.K.0 Abiola Way. Opposite Dikat Building, Ring Road, lbadan, Oyo State, Nigeria.</h6>
              
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col md:flex-row justify-between mt-20">
            <p className="flex items-center gap-5 md:gap-0 flex-col font-bold justify-center md:flex-row  md:justify-start">
              {/* <img className="mr-2" src={phone} alt="Phone Icon" /> +234 810 121 8869 */}
            </p>
            <p className="flex items-center gap-5 md:gap-0 flex-col md:flex-row font-semibold justify-center sm:flex-col  md:justify-start mt-6 md:mt-0">
              {/* <img className="mr-2" src={mail} alt="Mail Icon" /> support@kikperfume.com */}
            </p>

          </div>

          <hr className="border-t border-[rgb(136,134,134)] my-10" />
          <small className="block text-center">© 2025 Slyde International Services Limited. All rights served.</small>
        </div>
      </div>
    
    </>
  )
}

export default Footer