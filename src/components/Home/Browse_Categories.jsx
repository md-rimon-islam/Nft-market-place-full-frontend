"use client"
import React, { useEffect, useState } from 'react'
import avatar2 from '../../../public/Trending_Img/Secondary Photo Placeholder (2).png'
import Image from 'next/image'

function Browse_Categories() {

    const [categories, setCategories] = useState([])

    useEffect(() => {

        fetch('/JsonData/BrowserCategory.json')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setCategories(data)
            })



    }, [])




    return (
        <div className='  '>
            <div className='px-5 md:px-10 lg:px-32 pb-5 md:pb-20 max-w-7xl mx-auto bg-[#2B2B2B]'>
            <h3 className=' text-4xl text-white font-semibold py-3'> Browse Categories</h3>
            <div className=' grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6 pt-12'>
                {
                    categories.map((categorie, index) =>

                        <div key={index} className=' h-80 w-full md:w-56 lg:w-60 rounded-[20px]'>
                            
                            <img src={categorie.bannerImage} className=' h-60 w-full md:w-60  ' alt={categorie.CategoryName} />
                            <h5 className='text-xl font-semibold text-white pl-5 pt-3 bg-[#3B3B3B] pb-6 rounded-bl-[20px] rounded-br-[20px]'>{categorie.CategoryName}</h5>
                        </div>

                    )
                }


            </div>
        </div>
        </div>
    )
}

export default Browse_Categories