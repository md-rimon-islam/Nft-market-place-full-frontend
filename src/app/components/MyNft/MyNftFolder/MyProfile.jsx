import React from 'react'
import mynftbannerimg from '../../../../../public/MyNftImg/Image-PlaceHolder.png'
import prorileimage from '../../../../../public/DiscoverMoreImg/Image.png'
import Image from 'next/image'
import { RiGlobalLine } from "react-icons/ri";
import { CiYoutube } from "react-icons/ci";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaRegCopy } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";



function MyProfile() {
    return (
        <div className='bg-[#2B2B2B]'>
            <div className=' max-w-7xl mx-auto pt-18'>
            <div>
                <Image src={mynftbannerimg} className=' w-full h-80'></Image>
            </div>
            <div className=' bg-[#2B2B2B] px-10 lg:px-28'>
                <div className='border-2  border-[#2B2B2B] '> 
                    <Image src={prorileimage} className=' h-32 w-32 rounded-[20px] border-2  border-[#2B2B2B] -mt-16'></Image>
                </div>
                <div className=' h-full lg:h-[460px] grid lg:grid-cols-2 gap-6 pt-10'>
                    <div>
                        <h2 className=' text-4xl font-semibold text-white pb-8'>Animakid</h2>
                        <div className=' grid grid-cols-3 items-center gap-4 pb-8'>
                            <div>
                                <h4 className=' text-2xl font-semibold text-white'>50+</h4>
                                <p className=' text-[17px] text-[#a9a9a9]'>Volume</p>
                            </div>
                            <div>
                                <h4 className=' text-2xl font-semibold text-white'>250k+</h4>
                                <p className=' text-[17px] text-[#a9a9a9]'>NFTs Sold</p>
                            </div>
                            <div>
                                <h4 className=' text-2xl font-semibold text-white'>250k+</h4>
                                <p className=' text-[17px] text-[#a9a9a9]'>Followers</p>
                            </div>
                            
                        </div>
                        <div className='pb-8'>
                            <h5 className=' text-lg font-semibold text-[#858584]'>Bio</h5>
                            <p className=' text-[16px] text-[#a9a9a9]'>The internet's friendliest designer kid.</p>
                        </div>
                        <div>
                            <h5 className=' text-lg font-semibold text-[#858584] '>Links</h5>
                            <div className='flex gap-2.5'>
                                <span className='text-[#858584] text-3xl'><RiGlobalLine /></span>
                                <span className='text-[#858584] text-3xl'><CiYoutube /></span>
                                <span className='text-[#858584] text-3xl'><FaSquareXTwitter /></span>
                                <span className='text-[#858584] text-3xl'><FaInstagram /></span>
                            </div>
                        </div>
                    </div>
                    <div className='grid md:grid-cols-2 gap-5 justify-around pb-3'>
                        <div className=' h-16 w-48 bg-[#A259FF] rounded-3xl flex items-center gap-2  justify-center' >
                            <span ><FaRegCopy className=' text-[16px] text-white font-semibold ' /></span>
                            <span>
                                <p className=' text-[16px] text-white font-semibold '>0xc0E3...B79C</p>
                            </span>
                        </div>
                        <div className=' h-16 w-48  border-2 border-[#A259FF] rounded-3xl flex items-center gap-2  justify-center' >
                            <span ><FaPlus className=' text-[16px] text-[#A259FF] font-semibold ' /></span>
                            <span>
                                <p className=' text-[16px] text-white font-semibold '>Follow</p>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default MyProfile