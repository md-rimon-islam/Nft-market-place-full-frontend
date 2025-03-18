"use client"

import React, { useEffect, useState } from 'react'
import { IoRocketOutline } from "react-icons/io5";

import avatar from '../../../public/Trending_Img/Primary Photo Placeholder.png'
import avatar1 from '../../../public/Trending_Img/Secondary Photo Placeholder (1).png'
import avatar2 from '../../../public/Trending_Img/Secondary Photo Placeholder (2).png'
import topcreators from '../../../public/TopCreatorsImg/Artist Avatar (1).png'
import Image from 'next/image';

function Top_creators() {

    const [topcreators, setTopCreators] = useState([]);
    const [sliceCount, setSliceCount] = useState(4)


    useEffect(() => {

        fetch("/JsonData/topCreators.json")
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setTopCreators(data)
            })


    }, [])



    // srceen wise categroy data show


    useEffect(() =>{


        const handleResize = () =>{
            if(window.innerWidth >= 1024){
                setSliceCount(12)
            }
            else if(window.innerWidth >= 768){
                setSliceCount(6)
            }else{
                setSliceCount(5);
            }
        };

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => window.removeEventListener('resize', handleResize);

    },[])





    return (
       <div className='  '>
         <div className='px-5 md:px-10 lg:px-32 pb-20 pt-0 md:pt-16 max-w-7xl mx-auto bg-[#2B2B2B]'>
            <div className=' block md:flex justify-between'>
                <div>
                    
                    <h3 className=' text-4xl text-white font-semibold '>Top creators</h3>
                    <p className=' text-[#C9C9C9] pt-3'>Checkout Top Rated Creators on the NFT Marketplace</p>
                    <div className=' pt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6 block md:hidden flex items-center justify-center pb-5'>
                        {
                            topcreators.slice(0 , sliceCount).map((topcreator, index) =>

                                <div key={index} className=' h-60 w-60 bg-[#464444] rounded-[20px] p-5 '>
                                    
                                    <img src={topcreator.bannerImage} className=' h-[120px] w-[120px] rounded-full mx-auto' alt={topcreator.ProfileName}  />
                                    <div className=' text-center'>
                                        <h5 className=' text-xl text-white font-semibold py-2'>{topcreator.ProfileName}</h5>
                                        <p className=' text-[16px] font-extralight text-[#6e6e6e]'>Total Sales : <span className=' text-[16px] text-white'> {topcreator.Price} ETH</span></p>
                                    </div>
                                    <div className=' absolute '>
                                        <h6 className=' px-[13px] py-[7px] text-[#c4c4c4] bg-[#2c2b2b] rounded-full -mt-48 text-[12px]'>{index + 1}</h6>
                                    </div>
                                </div>

                            )
                        }



                    </div>
                </div>
                <div>
                    <button className=' h-[60px] w-full md:w-64 text-center hover:bg-[#2B2B2B] hover:shadow-2xs justify-center border-2 border-[#A259FF] flex items-center gap-2 btn  btn-outline btn-[#2B2B2B] bg-none rounded-[20px]'>
                        <span className=' text-xl text-[#A259FF]'>
                            <IoRocketOutline />
                        </span>
                        <span className=' text-[16px] text-white'>
                            View Rankings
                        </span>
                    </button>
                </div>
            </div>
            <div className=' hidden md:block'>
                <div className=' pt-12 grid grid-cols-3 lg:grid-cols-4 gap-6 '>
                    {
                        topcreators.slice(0 , sliceCount).map((topcreator, index) =>

                            <div key={index} className=' h-60 w-60 md:w-56 lg:w-60 bg-[#464444] rounded-[20px] p-5 '>
                                
                                <img src={topcreator.bannerImage} className=' h-[120px] w-[120px] rounded-full mx-auto' alt={topcreator.ProfileName}  />
                                <div className=' text-center'>
                                    <h5 className=' text-xl text-white font-semibold py-2 '>{topcreator.ProfileName}</h5>
                                    <p className=' text-[16px] font-extralight text-[#6e6e6e]'>Total Sales : <span className=' text-[16px] text-white'> {topcreator.Price} ETH</span></p>
                                </div>
                                <div className=' absolute '>
                                    <h6 className=' px-[13px] py-[7px] text-[#c4c4c4] bg-[#2c2b2b] rounded-full -mt-48 text-[12px]'>{index + 1}</h6>
                                </div>
                            </div>

                        )
                    }
                </div>
            </div>
        </div>
       </div>
    )
}

export default Top_creators