'use client'
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import nftimage from '../../../../../public/Trending_Img/Primary Photo Placeholder (1).png'

function CardsData() {

    const [allNft, setallNft] = useState([]);
    const [limit, setlimit] = useState (12) ;
    const [loading , setloading] = useState(false);



    const fetchData = async () =>{
        setloading(true);
        try {
            const response = await fetch(`/JsonData/allData.json?limit=${limit}`);
            const data = await response.json();
            setallNft(data.slice(0, limit))
        }
        catch (error){
            console.log('Data fatching error ')
        }
        finally{
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
        <div className='max-w-7xl mx-auto'>
            <div className='h-16 grid grid-cols-2 text-center justify-center items-center px-10 lg:px-28 pt-5'>

                <div className='flex items-center justify-center gap-5'>
                    <span>
                        <h5 className='text-lg font-semibold text-white'>NFTs</h5>
                    </span>
                    <span className=' hidden md:block'>
                        <button className="flex items-center justify-center">
                            <div className="badge badge-md badge-[#858584] rounded-full">{allNft.length}</div>
                        </button>
                    </span>
                </div>


                <div className='flex items-center justify-center gap-5'>
                    <span>
                        <h5 className='text-lg font-semibold text-white'>Collections</h5>
                    </span>
                    <span className=' hidden md:block'>
                        <button className="flex items-center justify-center">
                            <div className="badge badge-md badge-[#858584] rounded-full">+99</div>
                        </button>
                    </span>
                </div>
            </div>
            <div className=' bg-[#3B3B3B] px-3 md:px-10 lg:px-28 pt-14'>
                <div className=' grid md:grid-cols-2 lg:grid-cols-3 gap-7 mx-auto  items-center justify-center'>
                    {
                        allNft.map((singleData, index) =>

                            <div key={index} className=' h-full md:h-[470px] w-[330px] '>
                                {/* <Image src={nftimage} alt='nft image'></Image> */}
                                <img src={singleData.bannerImage} className=' h-[295px] w-[330px] rounded-tl-[20px] rounded-tr-[20px]' alt="" />
                                <div className=' bg-[#2B2B2B] pb-5 rounded-bl-[20px] rounded-br-[20px]'>
                                    <h5 className='text-2xl font-semibold text-white px-7 pt-3.5'>Magic Mushroom 0325</h5>
                                    <div className=' flex items-center gap-3.5 px-7 pt-2'>
                                        
                                        <img src={singleData.ProfileImage} className='h-6 w-6 rounded-full' alt="" />
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
                    <button onClick={handleLoadMore} className=' shadow-2xs btn w-80 text-xl font-semibold rounded-full bg-[#2B2B2B] border-none text-white'>Load More</button>
                </div>
            </div>
        </div>
    ); 
}

export default CardsData;