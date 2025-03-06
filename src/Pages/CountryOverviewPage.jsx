import React from 'react'
import StudyAbroad from '../Components/CountryOverview/StudyAbroad'
import CountryOverviewBanner from '../Components/CountryOverview/CountryOverviewBanner'
import Animation from '../Components/Animation/Animation'

const CountryOverviewPage = () => {
  return (
    <>
        <Animation>
        <div id='CountryOverviewBanner'>
          <CountryOverviewBanner/>
        </div>
        <div id='StudyAbroad'>
          <StudyAbroad/>
        </div>
        </Animation>

    
    </>
  )
}

export default CountryOverviewPage 