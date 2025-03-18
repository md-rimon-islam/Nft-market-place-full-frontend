'use client';
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { IoEyeSharp } from 'react-icons/io5'

import cardimage from '../../../public/DiscoverMoreImg/Image (1).png'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Pagination } from 'swiper/modules';



function Discover_More() {


    const [Discovers, setDiscrovers] = useState([])


    useEffect(() => {


        fetch('/JsonData/DiscoverMore.json')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setDiscrovers(data);

            })

    }, [])


    return (
       <div className='  '>
         <div className= 'px-5 md:px-10 lg:px-32 pb-20 pt-10 max-w-7xl mx-auto bg-[#2B2B2B]'>
            <div className=' block md:flex md:justify-between'>
                <div>
                    <h3 className=' text-4xl text-white font-semibold'>Discover More NFTs</h3>
                    <p className=' text-[#C9C9C9] pt-3 font-light'>Explore new trending NFTs</p>
                        <div className=' block md:hidden'>
                        <div className=' pt-12 pb-10'>
                <Swiper

                    slidesPerView={1}
                    spaceBetween={10}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                    }}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >

                    {
                        Discovers.map((discover, index) => <SwiperSlide>
                            <div key={index} className=' h-[470px] rounded-[20px]'>
                                <div className='h-[296px] '>
                                    <img src={discover.bannerImage} className='h-full w-full rounded-tl-[20px] rounded-tr-[20px] h-[296px]'></img>
                                </div>
                                <div className=' h-[173px] px-8 py-3 bg-[#3B3B3B] rounded-bl-[20px] rounded-br-[20px] ' >
                                    <h4 className=' text-2xl font-semibold text-white'>{discover.Title}</h4>
                                    <div className=' flex items-center gap-3 pt-3'>
                                        <img src={discover.ProfileImage} className='  h-6 w-6 rounded-full'></img>
                                        <p className=' text-[16px] font-light text-white'>{discover.ProfileName}</p>
                                    </div>

                                    <div className=' flex items-center justify-between pt-3'>
                                        <div>
                                            <p className=' text-[12px] font-extralight text-[#858584]'>Price</p>
                                            <p className=' text-[16px] font-light  pt-3 text-white'>{discover.Price} ETH</p>
                                        </div>
                                        <div>
                                            <p className=' text-[12px] font-extralight text-[#858584]'>Highest Bid</p>
                                            <p className=' text-[16px] font-light  pt-3 text-white'>{discover.HightBid} ETH</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>)
                    }



                    

                </Swiper>
            </div>
                        </div>

                </div>
                <div>
                    <button className=' h-[60px] w-full md:w-64 text-center hover:bg-[#2B2B2B] hover:shadow-2xs justify-center border-2 border-[#A259FF] flex items-center gap-2 btn  btn-outline btn-[#2B2B2B] bg-none rounded-[20px]'>
                        <span className=' text-xl text-[#A259FF]'>
                            <IoEyeSharp />
                        </span>
                        <span className=' text-[16px] text-white'>
                            See All
                        </span>
                    </button>
                </div>
            </div>
            <div className=' pt-12 hidden md:block'>
                <Swiper

                    slidesPerView={1}
                    spaceBetween={10}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                    }}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >

                    {
                        Discovers.map((discover, index) => <SwiperSlide>
                            <div key={index} className=' h-[470px] rounded-[20px]'>
                                <div className='h-[296px] '>
                                    <img src={discover.bannerImage} className='h-full w-full rounded-tl-[20px] rounded-tr-[20px] h-[296px]'></img>
                                </div>
                                <div className=' h-[173px] px-8 py-3 bg-[#3B3B3B] rounded-bl-[20px] rounded-br-[20px] ' >
                                    <h4 className=' text-2xl font-semibold text-white'>{discover.Title}</h4>
                                    <div className=' flex items-center gap-3 pt-3'>
                                        <img src={discover.ProfileImage} className='  h-6 w-6 rounded-full'></img>
                                        <p className=' text-[16px] font-light text-white'>{discover.ProfileName}</p>
                                    </div>

                                    <div className=' flex items-center justify-between pt-3'>
                                        <div>
                                            <p className=' text-[12px] font-extralight text-[#858584]'>Price</p>
                                            <p className=' text-[16px] font-light  pt-3 text-white'>{discover.Price} ETH</p>
                                        </div>
                                        <div>
                                            <p className=' text-[12px] font-extralight text-[#858584]'>Highest Bid</p>
                                            <p className=' text-[16px] font-light  pt-3 text-white'>{discover.HightBid} ETH</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>)
                    }



                    

                </Swiper>
            </div>

        </div>
       </div>
    )
}

export default Discover_More