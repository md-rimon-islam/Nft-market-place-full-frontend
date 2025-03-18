import React from 'react'

import profileimage from '../../../../../public/TopCreatorsImg/Avatar.png'
import Image from 'next/image'

function Rankings() {
    return (
       <div className=' bg-[#2B2B2B] '>
         <div className=' bg-[#2B2B2B] px-2 md:px-10 lg:px-28 max-w-7xl mx-auto pt-28'>
            <div className=' h-72 items-center'>
                <h2 className=' text-4xl font-semibold text-white py-7 pt-20'>Top Creators</h2>
                <p className=' text-xl font-extralight text-white'>Check out top ranking NFT artists on the NFT Marketplace.</p>
            </div>
           <div className='hidden md:block'> 
           <div className=' grid grid-cols-4 items-center text-center pb-10 '>
                <div>
                    <h4 className=' text-xl lg:text-2xl font-medium text-white'>Today</h4>
                </div>
                <div>
                    <h4 className=' text-xl lg:text-2xl font-medium text-white'>This Week</h4>
                </div>
                <div>
                    <h4 className=' text-xl lg:text-2xl font-medium text-white'>This Month</h4>
                </div>
                <div>
                    <h4 className=' text-xl lg:text-2xl font-medium text-white'>All Time</h4>
                </div>

            </div>
           </div>
           <div className='block md:hidden'>
           <div className=' grid grid-cols-4 items-center text-center pb-10 '>
                <div>
                    <h4 className=' text-lg lg:text-2xl font-medium text-white'>1D</h4>
                </div>
                <div>
                    <h4 className=' text-lg lg:text-2xl font-medium text-white'>7D</h4>
                </div>
                <div>
                    <h4 className=' text-lg lg:text-2xl font-medium text-white'>30D</h4>
                </div>
                <div>
                    <h4 className=' text-lg lg:text-2xl font-medium text-white'>All Time</h4>
                </div>

            </div>
           </div>
            <div className=' pb-16'>
                <div className="">
                    <table className="table w-full">
                        {/* head */}
                        <thead className=' w-full'>
                            <tr className=' border-2 border-[#3B3B3B] rounded-[20px] grid  grid-cols-10 lg:grid-cols-12 w-full h-12'>
                                <th className=' text-[#838282] font-semibold col-span-1'>#</th>
                                <th className=' text-[#838282] font-semibold col-span-5 text-center'>Artist</th>
                                <th className=' text-[#838282] font-semibold col-span-2 text-center hidden md:block'>Change</th>
                                <th className=' text-[#838282] font-semibold col-span-2 hidden lg:block'>NFTs Sold</th>
                                <th className=' text-[#838282] font-semibold col-span-2'>Valume</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            <tr className='  bg-[#3B3B3B] rounded-3xl grid grid-cols-10 lg:grid-cols-12 w-full md:w-full lg:w-[1050px] h-20 mt-5 bg-[] items-center '>
                                <th className=' col-span-1'><p className=' text-[20px] font-semibold items-center  rounded-full bg-[#2B2B2B] text-center w-10 py-1'>1</p></th>
                                <td className=' col-span-5 flex items-center gap-2.5 text-center ml-3 md:ml-0'>
                                    <span>
                                        <Image src={profileimage} className=' h-7 w-7 md:h-14 md:w-14 rounded-full' alt='Profile Image'></Image>
                                    </span>
                                    <span>
                                        <h5 className=' text-[10px]  md:text-xl lg:text-2xl font-semibold text-white '>Jaydon Ekstrom Bothman</h5>
                                    </span>
                                </td>
                                <td className=' col-span-2 text-[#00AC4F] text-[10px] md:text-[18px] font-extralight text-center hidden md:block'>+1.41%</td>
                                <td className=' col-span-2 text-white text-[10px] lg:text-[18px] font-extralight  hidden lg:block'>600</td>
                                <td className=' col-span-2 text-white text-[10px] lg:text-[18px] font-extralight text-center'>12.4 ETH</td>
                                
                            </tr>
                           
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
       </div>
    )
}

export default Rankings