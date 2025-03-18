'use client';
import React, { useState, useEffect } from 'react';
import mynftbannerimg from '../../../../../public/MyNftImg/Image PlaceHolder (1).png';
import prorileimage from '../../../../../public/TopCreatorsImg/Avatar (1).png';
import Image from 'next/image';
import { RiGlobalLine } from "react-icons/ri";

function NftDetails() {
    const [counter, setCounter] = useState({
       
        hours: 10,
        minutes: 24,
        seconds: 59,
    });

    useEffect(() => {
        const interval = setInterval(() => {
            setCounter((prev) => {
                const newSeconds = prev.seconds === 0 ? 59 : prev.seconds - 1;
                const newMinutes = prev.seconds === 0 ? (prev.minutes === 0 ? 59 : prev.minutes - 1) : prev.minutes;
                const newHours = prev.minutes === 0 && prev.seconds === 0 ? (prev.hours === 0 ? 23 : prev.hours - 1) : prev.hours;
               

                return {
                  
                    hours: newHours,
                    minutes: newMinutes,
                    seconds: newSeconds,
                };
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className=' bg-[#2B2B2B]'>
            <div className='max-w-7xl mx-auto pt-12'>
                <div>s
                    <Image
                        src={mynftbannerimg}
                        className='w-full h-[560px]'
                        alt="NFT Banner"
                        width={1200}
                        height={560}
                    />
                </div>

                <div className='bg-[#2B2B2B] px-10 lg:px-28 grid md:grid-cols-6'>
                    <div className=' md:col-span-4'>
                    <div className=' gap-6 pt-10 md:pr-16'>
                        <div>
                            <h2 className='text-4xl font-semibold text-white pb-2'>Animakid</h2>
                            <p className='text-[18px] text-[#7d7d7d] pb-3.5'>Minted on Sep 30, 2022</p>
                            <h5 className='text-[18px] text-[#adadad] font-semibold'>Created By</h5>
                            <div className='flex items-center gap-3.5 pt-2'>
                                <Image
                                    src={prorileimage}
                                    className='h-6 w-6 rounded-full'
                                    alt="Creator Profile"
                                    width={24}
                                    height={24}
                                />
                                <p className='text-white font-extralight'>Shroomie</p>
                            </div>
                            <div className='pb-4'>
                                <h5 className='text-lg font-semibold text-[#858584] pb-4 pt-4'>Description</h5>
                                <p className='text-[16px] text-[#a9a9a9] leading-7'>
                                    The Orbitians is a collection of 10,000 unique NFTs on the Ethereum blockchain. There are all sorts of beings in the NFT Universe. The most advanced and friendly of the bunch are Orbitians. They live in metal space machines, high up in the sky, and only have one foot on Earth. These Orbitians are a peaceful race, but they have been at war with a group of invaders for many generations. The invaders are called Upside-Downs because of their inverted bodies that live on the ground, yet do not know any other way to be. Upside-Downs believe that they will be able to win this war if they could only get an eye into Orbitian territory, so they've taken to make human beings their target.
                                </p>
                            </div>
                            <div>
                                <h5 className='text-lg font-semibold text-[#858584]'>Details</h5>
                                <div className='flex gap-2.5 items-center pt-2'>
                                    <span className='text-[#858584] text-3xl'><RiGlobalLine /></span>
                                    <span>
                                        <p className='font-semibold text-[#858584]'>View on Etherscan</p>
                                    </span>
                                </div>
                                <div className='flex gap-2.5 items-center pt-2'>
                                    <span className='text-[#858584] text-3xl'><RiGlobalLine /></span>
                                    <span>
                                        <p className='font-semibold text-[#858584]'>View Original</p>
                                    </span>
                                </div>
                            </div>
                            <div>
                                <h5 className='text-lg font-semibold text-[#858584] pt-4'>Tags</h5>
                                <div className='gap-2.5 items-center pt-2 grid md:grid-cols-2 lg:grid-cols-4'>
                                    <button className='btn uppercase bg-[#3B3B3B] rounded-full text-white border-none shadow-2xs'>Animation</button>
                                    <button className='btn uppercase bg-[#3B3B3B] rounded-full text-white border-none shadow-2xs'>Illustrator</button>
                                    <button className='btn uppercase bg-[#3B3B3B] rounded-full text-white border-none shadow-2xs'>Moon</button>
                                    <button className='btn uppercase bg-[#3B3B3B] rounded-full text-white border-none shadow-2xs'>Illustrator</button>
                                    <button className='btn uppercase bg-[#3B3B3B] rounded-full text-white border-none shadow-2xs'>Moon</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div>
                <div className=' md:col-span-2 pt-10 flex-col items-center justify-end'>
                <div className=' w-[250px] h-64 lg:h-64 lg:w-[300px] bg-[#3B3B3B] rounded-[20px] p-5 lg:p-8 '>
                    <p className='text-[16px] font-extralight text-white'>Auction ends in:</p>
                    <div className="grid grid-flow-col gap-5 text-center auto-cols-max  items-center pt-5">
                        
                        <div className="flex flex-col">
                            <span className="countdown font-mono text-5xl text-white">
                                <span style={{ "--value": counter.hours }} aria-live="polite" className='text-white'>
                                    {counter.hours}
                                </span>
                            </span>
                            hours
                        </div>
                        <div className="flex flex-col">
                            <span className="countdown font-mono text-5xl text-white">
                                <span style={{ "--value": counter.minutes }} aria-live="polite" className='text-white'>
                                    {counter.minutes}
                                </span>
                            </span>
                            min
                        </div>
                        <div className="flex flex-col">
                            <span className="countdown font-mono text-5xl text-white">
                                <span style={{ "--value": counter.seconds }} aria-live="polite" className='text-white'>
                                    {counter.seconds}
                                </span>
                            </span>
                            sec
                        </div>
                    </div>
                    <button className=' btn w-full bg-[#A259FF] rounded-[20px] h-14 shadow-2xs border-none text-white text-xl mt-8'>Place Bid</button>
                </div>
                </div>
            </div>
                </div>
            </div>
            
        </div>
    );
}

export default NftDetails;