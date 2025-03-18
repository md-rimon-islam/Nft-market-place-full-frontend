import Image from 'next/image'
import React from 'react'
import howimg from '../../../public/HowItImg/Icon.png'
import howimg1 from '../../../public/HowItImg/Icon (2).png'
import howimg2 from '../../../public/HowItImg/Icon (1).png'

function How_It_Works() {
    return (
        <div className='  '>
            <div className='px-5 md:px-10 lg:px-32 pb-5 md:pb-20 pt-10 max-w-7xl mx-auto bg-[#2B2B2B]'>

            <div>
                <h3 className=' text-4xl font-semibold text-white'>How it works</h3>
                <p className=' text-xl font-extralight pt-2.5 text-white'>Find out how to get started</p>
            </div>
            <div className=' grid md:grid-cols-3 gap-6 pt-8'>
                <div className=' h-[440px] bg-[#3B3B3B] rounded-[20px] overflow-hidden'>

                    <Image src={howimg} alt="How it works icon" className=' h-60 md:h-64 lg:h-60 w-60 mx-auto' />

                    <div className=' px-5 text-center pt-4'>
                        <h5 className=' text-[22px] font-semibold text-white'>Setup Your wallet</h5>
                        <small className=' text-[16px] font-light pt-4 text-white'>Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner.</small>
                    </div>
                </div>
                <div className=' h-[440px] bg-[#3B3B3B] rounded-[20px] overflow-hidden'>

                    <Image src={howimg1} alt="How it works icon" className=' h-60 md:h-64 lg:h-60 mx-auto' />

                    <div className=' px-5 text-center pt-4'>
                        <h5 className=' text-[22px] font-semibold text-white'>Start Earning</h5>
                        <small className=' text-[16px] font-light pt-4 text-white'>Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others.</small>
                    </div>
                </div>
                <div className=' h-[440px] bg-[#3B3B3B] rounded-[20px] overflow-hidden'>

                    <Image src={howimg2} alt="How it works icon" className=' h-60 md:h-64 lg:h-60 mx-auto' />

                    <div className=' px-5 text-center pt-4 '>
                        <h5 className=' text-[22px] font-semibold text-white'>Create Collection</h5>
                        <small className=' text-[16px] font-light pt-4 text-white'>Upload your work and setup your collection. Add a description, social links and floor price.</small>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default How_It_Works