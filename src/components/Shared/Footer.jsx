import React from 'react'
import { CiShop, CiYoutube } from 'react-icons/ci'
import { FaXTwitter } from "react-icons/fa6";
import { CiInstagram } from "react-icons/ci";

function Footer() {
  return (
    <div className=' h-full lg:h-96 bg-[#3B3B3B] border-t-2 border-gray-100'>
        <div className='max-w-7xl mx-auto [] px-5 md:px-10 lg:px-36 pt-10 '>
           <div className=' pb-7 border-b border-[#CCCCCC] grid lg:grid-cols-3 gap-10'>
                <div >
                    <div className=' flex items-center gap-3 pb-8'>
                        <span className=' text-3xl font-extrabold text-[#A259FF]'><CiShop /></span>
                        <span className=' text-xl font-semibold text-white'>NFT Marketplace</span>
                    </div>
                    <div className='pb-8'>
                        <p className=' text-[16px] text-[#CCCCCC] font-extralight'>NFT marketplace UI created with Anima for Figma.</p>
                    </div>
                    <div>
                        <p className=' text-[16px] text-[#CCCCCC] font-extralight pb-3.5'>Join our community</p>
                        <div className=' flex items-center gap-2.5'>
                            <span className=' text-2xl font-semibold text-[#CCCCCC]'><CiYoutube /></span>
                            <span className=' text-2xl font-semibold text-[#CCCCCC]'><FaXTwitter /></span>
                            <span className=' text-2xl font-semibold text-[#CCCCCC]'><CiInstagram /></span>
                        </div>
                    </div>
                </div>
                <div >
                    <div className=' flex items-center gap-3 pb-8'>
                        
                        <span className=' text-xl font-semibold text-white'>Explore</span>
                    </div>
                    <div className='pb-8 gap-6 space-y-4'>
                        <p className=' text-[16px] text-[#CCCCCC] font-extralight'>Marketplace</p>
                        <p className=' text-[16px] text-[#CCCCCC] font-extralight'>Rankings</p>
                        <p className=' text-[16px] text-[#CCCCCC] font-extralight'>Connect a wallet</p>
                    </div>
                    
                </div>
                <div >
                    <div className=' flex items-center gap-3 pb-8'>
                        
                        <span className=' text-xl font-semibold text-white'>Join our weekly digest</span>
                    </div>
                    <div className='pb-8'>
                        <p className=' text-[16px] text-[#CCCCCC] font-extralight'>Get exclusive promotions & updates straight to your inbox.</p>
                    </div>
                    <div>
                        <p className=' text-[16px] text-[#CCCCCC] font-extralight pb-3.5'>Join our community</p>
                        <div className=' flex items-center gap-2.5'>
                            <span className=' text-2xl font-semibold text-[#CCCCCC]'><CiYoutube /></span>
                            <span className=' text-2xl font-semibold text-[#CCCCCC]'><FaXTwitter /></span>
                            <span className=' text-2xl font-semibold text-[#CCCCCC]'><CiInstagram /></span>
                        </div>
                    </div>
                </div>
           </div>
            
        </div>
    </div>
  )
}

export default Footer