import React from 'react'
import GalleryBanner from '../Components/Gallery/GalleryBanner'
import Gallery from '../Components/Gallery/Gallery'
import Animation from '../Components/Animation/Animation'

const GalleryPage = () => {
  return (
    <>
    <Animation>
      
    <div>
        <div id='GalleryBanner'>
            <GalleryBanner/>
        </div>
        <div id='Gallery'>
            <Gallery/>
        </div>

    </div>
    </Animation>
    
    
    </>
  )
}

export default GalleryPage