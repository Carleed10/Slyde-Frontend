import React from 'react'
import { GoHome } from "react-icons/go";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from 'react-router-dom';


const AboutBanner = () => {
  return (
    <>
          <div className="w-full bg-gradient-to-r from-[rgba(9,209,2,0.164)] via-[rgba(245,255,152,0.432)] to-[rgba(0,255,34,0.123)] text-black flex bg-no-repeat bg-center justify-center items-center mt-[12vh] h-[25vh] md:h-[35vh]">
            <div>
            <h1 className="mt-2 font-bold font-poppins leading-tight text-center text-[40px] text-[rgb(0,29,8)] md:text-[50px] "
           >
            About Us
          </h1>
            <div className='flex justify-center items-center gap-4'>
            <Link to='/'>
            <h4 className='flex gap-2 cursor-pointer justify-center items-center'><GoHome  size={24} color='black' /> Home</h4>

              </Link>
            <MdOutlineKeyboardArrowRight size={30} color='black' />

            <h4>About Us</h4>
            </div>

            </div>
        </div>
    
    </>
  )
}

export default AboutBanner