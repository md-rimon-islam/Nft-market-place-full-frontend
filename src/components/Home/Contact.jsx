import React from 'react'

import subscribeimg from '../../../public/BannerImg/Photo.png'
import Image from 'next/image'
import { MdEmail } from "react-icons/md";

function Contact() {
    return (
        <div className='  '>
            <div className='px-5 md:px-10 lg:px-32 pb-10 max-w-7xl mx-auto bg-[#2B2B2B]'>
            <div className=' bg-[#3B3B3B] rounded-[20px] h-full lg:h-[430px] md:grid grid-cols-2 items-center justify-center mx-auto px-2 md:px-5 lg:px-14 py-0 md:py-5 lg:py-0'>
                <div className='pt-2'>
                    <Image src={subscribeimg} alt='subscribe image' className=' h-[310px] w-full lg:w-[425px]' ></Image>

                </div>
                <div className=' pl-0 md:pl-3 lg:pl-0'>
                    <h1 className=' text-2xl md:text-4xl font-semibold text-white pt-2.5 md:pt-0'>Join our weekly digest</h1>
                    <p className='text-lg md:text-2xl font-extralight pt-4 text-white'>Get exclusive promotions & updates straight to your inbox.</p>
                    <div className=' mt-2 md:mt-5 '>
                        <label className="input w-full bg-white border-none rounded-[12px] mt-2 md:mt-5 mb-2 md:mb-0">

                            <input type="text" className="grow text-black border-none py-2.5 " placeholder="Enter your email here" />
                            <span className="flex items-center badge-neutral badge-xs px-10 py-2 bg-[#A259FF] border-none pr-4 gap-2 rounded-xl -mr-3.5">
                                <div>
                                    <span>
                                        <MdEmail className=' text-white text-[16px]' />
                                    </span>
                                </div>
                                <div>
                                    <span className=' text-[16px] font-semibold  mr-5'>Subscribe</span>
                                </div>
                            </span>
                        </label>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}
export default Contact 