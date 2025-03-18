import Hero from '@/components/Home/Hero'
import React from 'react'
import BannerSection from './MarketPlacesFolder/BannerSection'
import CardsData from './MarketPlacesFolder/CardsData'

function Page() {
  return (
    <div className="  bg-[#2B2B2B]">
        <BannerSection/>
        <CardsData/>
    </div>
  )
}

export default Page