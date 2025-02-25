import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from "../Components/Navbar/Navbar.jsx"
import Footer from '../Components/Footer.jsx'


const CountryOverviewLayout = () => {
  return (
    <>
    
    <Navbar/>
    <Outlet/>
    <Footer/>
    
    </>
  )
}

export default CountryOverviewLayout