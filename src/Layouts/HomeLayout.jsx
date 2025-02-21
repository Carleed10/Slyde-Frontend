import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from "../Components/Navbar/Navbar.jsx"
import Footer from '../Components/Footer.jsx'

const HomeLayout = () => {
  return (
    <>
    
    <Navbar/>
    <Outlet/>
    <Footer/>
    
    
    </>
  )
}

export default HomeLayout