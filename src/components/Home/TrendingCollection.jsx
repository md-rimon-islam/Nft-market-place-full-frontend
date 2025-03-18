"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

import avatar from '../../../public/Trending_Img/Primary Photo Placeholder.png'
import avatar1 from '../../../public/Trending_Img/Secondary Photo Placeholder (1).png'
import avatar2 from '../../../public/Trending_Img/Secondary Photo Placeholder (2).png'
import topcreators from '../../../public/TopCreatorsImg/Artist Avatar (1).png'

function TrendingCollection() {


  const [Trendings, setTrendings] = useState([]);

  useEffect(() => {

    fetch('/JsonData/treanding.json')
      .then(res => res.json())
      .then(data => {
        // console.log(data)
        setTrendings(data);

      })


  }, [])


  return (
   <div className='  '>
     <div className=' px-5 md:px-10 lg:px-32 max-w-7xl mx-auto bg-[#2B2B2B] pb-20 md:pb-0'>
      <h1 className=' text-4xl text-white font-semibold py-3'>Trending Collection</h1>
      <h4 className=' text-xl text-[#C9C9C9] font-light'>Checkout our weekly updated trending collection.</h4>

      <div className=' mt-12 grid md:grid-cols-2 lg:grid-cols-3 pb-5 md:pb-20 gap-6'>
        {
          Trendings.map((trending, index) =>
            
            <div className=' h-[525px] mt-10' key={index}>
              
              <img src={trending.bannerImage} className='  w-full md:h-[330px]' alt={trending.Title} />
              <div className=' grid grid-cols-3 gap-2.5 mt-4'>
                <div className=' h-[100px]'>
                 
                  <img src={trending.ImageSecond} className='h-[100px] w-[100px]' alt={trending.Title} />
                </div>
                <div className=' h-[100px]'>
                  
                  <img src={trending.ImageThird} className='h-[100px] w-[100px]' alt={trending.Title} />
                </div>
                <div className=' h-[100px] w-[100px] bg-[#A259FF] flex items-center text-center text-xl font-semibold rounded-[20px]'>
                  <p className=' text-center justify-center pl-7 text-white'>{trending.TotalImage}+</p>
                </div>
              </div>
              <div>
                <h5 className=' text-xl font-semibold pt-4 text-white'>{trending.Title}</h5>
                <div className=' flex gap-2 items-center my-4'>
                  
                  <img src={trending.ProfileImage} className=' h-6 w-6 rounded-full' alt={trending.ProfileName} />
                  <p className=' text-[16px] text-[#C9C9C9]'>{trending.ProfileName}</p>
                </div>
              </div>
            </div>

          )
        }



      </div>
    </div> 
   </div>
  )
}

export default TrendingCollection