import React from 'react'
import GalleryBanner from '../Components/Gallery/GalleryBanner'
import Gallery from '../Components/Gallery/Gallery'

const GalleryPage = () => {
  return (
    <>
    
    <div>
        <div id='GalleryBanner'>
            <GalleryBanner/>
        </div>
        <div id='Gallery'>
            <Gallery/>
        </div>

    </div>
    
    
    </>
  )
}

export default GalleryPage