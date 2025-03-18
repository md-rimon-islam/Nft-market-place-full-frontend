
'use client'


import mynftbannerimg from '../../../../../public/MyNftImg/Image-PlaceHolder.png'
import prorileimage from '../../../../../public/DiscoverMoreImg/Image.png'
import Image from 'next/image'
import { RiGlobalLine } from "react-icons/ri";
import { CiYoutube } from "react-icons/ci";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaRegCopy } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";

import React, { useEffect, useState } from 'react';
import nftimage from '../../../../../public/Trending_Img/Primary Photo Placeholder (1).png'
import { GoArrowRight } from "react-icons/go";


function SuggestNft() {




    const [allNft, setallNft] = useState([]);
    const [limit, setlimit] = useState(12);
    const [loading, setloading] = useState(false);




    const fetchData = async () => {
        setloading(true);
        try {
            const response = await fetch(`/JsonData/allData.json?limit=${limit}`);
            const data = await response.json();
            setallNft(data.slice(0, limit))
        }
        catch (error) {
            console.log('Data fatching error ')
        }
        finally {
            setloading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, [limit]);

    const handleLoadMore = () => {
        setlimit(prevLimit => prevLimit + 12);
    };





    return (
        <div className='bg-[#2B2B2B]'>
            <div className='max-w-7xl mx-auto'>
            <div className='h-16 hidden  md:flex  text-center justify-between items-center px-10 lg:px-28 bg-[#2B2B2B] py-20'>

                <div className='flex items-center justify-center gap-5'>
                    <h3 className=' text-3xl lg:text-4xl font-semibold text-white'>More from this artist</h3>
                </div>

                
                <div className=' h-16 w-72  border-2 border-[#A259FF] rounded-3xl flex items-center gap-2  justify-center' >
                    <span ><GoArrowRight className=' text-[22px] text-[#A259FF] font-semibold ' /></span>
                    <span>
                        <p className=' text-[16px] text-white font-semibold '>Go To Artist Page</p>
                    </span>
                </div>



            </div>
            <div className=' bg-[#2B2B2B] px-10 lg:px-28 pt-14'>
                <div className=' grid md:grid-cols-2 lg:grid-cols-3 gap-7'>
                    {
                        allNft.map((singleData, index) =>

                            <div key={index} className=' h-[470px] w-full md:w-[330px]'>

                                <img src={singleData.bannerImage} className=' h-[295px] w-full md:w-[330px] rounded-tl-[20px] rounded-tr-[20px]' alt="" />
                                <div className=' bg-[#3B3B3B] pb-5 rounded-bl-[20px] rounded-br-[20px]'>
                                    <h5 className='text-2xl font-semibold text-white px-7 pt-3.5'>Magic Mushroom 0325</h5>
                                    <div className=' flex items-center gap-3.5 px-7 pt-2'>

                                        <img src={singleData.bannerImage} className='h-6 w-6 rounded-full' alt="" />
                                        <p className=' text-white font-extralight'>Shroomie</p>
                                    </div>
                                    <div className=' grid grid-cols-2  justify-between px-7 pt-3.5'>
                                        <div className=' '>
                                            <p className=' text-[10px] font-extralight text-[#858584]'>Price</p>
                                            <p className=' text-white'>1.63 ETH</p>
                                        </div>
                                        <div className=' justify-end'>
                                            <p className=' text-[10px] font-extralight text-[#858584]'>Highest Bid</p>
                                            <p className=' text-white'>1.63 ETH</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        )
                    }


                </div>

                <div className=' pb-20 pt-10 justify-center flex'>
                    <button onClick={handleLoadMore} className=' shadow-2xs btn w-80 text-xl font-semibold rounded-full bg-[#3B3B3B] border-none text-white'>Load More</button>
                </div>
            </div>

        </div>
        </div>
    )
}

export default SuggestNft