'use client'
import React, { useContext } from 'react'
import { IoRocketOutline } from "react-icons/io5";
import Image from 'next/image';
import bannerimage from "../../../public/BannerImg/Image_Placeholder.png"
import bannerprofileimg from "../../../public/TopCreatorsImg/Artist Avatar (1).png"
import { AuthContext } from '@/ContextProvider/MyContext';



function Hero() {


    


    return (
      
        <div className=' h-full lg:h-[700px] py-20 px-5 md:px-10 lg:px-32 max-w-7xl mx-auto bg-[#2B2B2B]'>
            <div className=' grid md:grid-cols-2 mt-20'>
                <div className=' pr-3'>
                    <h1 className=' text-4xl lg:text-6xl font-bold leading-12 lg:leading-16 text-white mb-8'>Discover Digital art & Collect NFTs</h1>
                    <h4 className=' text-lg md:text-xl text-[#FFFFFF] leading-8  lg:leading-10 mb-8'>NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from more than 20k NFT artists.</h4>
                    <div className='   rounded-4xl rounded-bl-2xl block md:hidden pb-10 '>
                        <Image src={bannerimage} className='w-full rounded-tl-4xl rounded-tr-4xl ' />

                        <div className='pl-5 bg-[#3B3B3B] rounded-bl-4xl rounded-br-4xl'>
                            <h3 className=' text-2xl py-2.5 text-white'>Space Walking</h3>
                            <div className=' flex gap-2.5 items-center pb-4'>
                                <Image src={bannerprofileimg} className='h-6 w-6' />
                                <h4 className=' text-xl text-[#FFFFFF]'>Animakid</h4>
                            </div>
                        </div>
                    </div> 
                    <button className=' flex gap-3 items-center h-16 w-full md:w-56 bg-[#A259FF] rounded-3xl border-none shadow-2xs btn'>
                        <span className=' text-xl text-white'><IoRocketOutline /></span>
                        <span className=' text-[16px] font-semibold text-white'>Get Started</span>
                    </button>
                    <div className=' mt-8 grid grid-cols-3 text-left items-center  ' >
                        <div>
                            <h3 className=' text-2xl font-semibold text-white'>240k+</h3>
                            <p className=' text-[#FFFFFF] text-lg font-light'>Total Sale</p>
                        </div>
                        <div>
                            <h3 className=' text-xl font-semibold text-white'>100k+</h3>
                            <p className=' text-[#f1efef] text-lg font-light'>Auctions</p>
                        </div>
                        <div>
                            <h3 className=' text-xl font-semibold text-white'>240k+</h3>
                            <p className=' text-[#FFFFFF] text-lg font-light'>Artists</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className=' h-[510px]  rounded-4xl rounded-bl-2xl hidden md:block'>
                        <Image src={bannerimage} className='w-full rounded-tl-4xl rounded-tr-4xl ' />

                        <div className='pl-5 bg-[#3B3B3B] rounded-bl-4xl rounded-br-4xl'>
                            <h3 className=' text-2xl py-2.5 text-white'>Space Walking</h3>
                            <div className=' flex gap-2.5 items-center pb-4'>
                                <Image src={bannerprofileimg} className='h-6 w-6' />
                                <h4 className=' text-xl text-[#FFFFFF]'>Animakid</h4>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default Hero