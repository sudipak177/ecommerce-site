import React from 'react'
import HeroForHome from '../components/HeroForHome'
import LatestCollection from '../components/LatestCollection'
import BestSellers from '../components/BestSellers'
import OurPolicy from '../components/OurPolicy'
import NewsLetter from '../components/NewsLetter'

function Home() {
  return (
    <>
    <HeroForHome/>
    <LatestCollection/>
    <BestSellers/>
    <OurPolicy/>
    <NewsLetter/>
    </>
  )
}

export default Home
