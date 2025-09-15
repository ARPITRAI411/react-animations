import React from 'react'
import Video from '../Components/Home/Video'
import HomeHerotext from '../Components/Home/HomeHerotext'
import HeroBottomtext from '../Components/Home/HomeBottomtext'
const Home = () => {
  return (
    <div>
      <div className='h-screen w-screen fixed'>
      <Video/>
    </div>

    <div  className='h-screen w-screen relative pb-5 overflow-hidden flex flex-col justify-between'>
      <HomeHerotext/>
      <HeroBottomtext/>
    </div>
    </div>
  )
}

export default Home
