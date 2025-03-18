"use client"; // Needed if using Next.js App Router

import React from "react";
import { ParallaxBanner, ParallaxProvider } from "react-scroll-parallax";
import avatar from '../../../public/TopCreatorsImg/Artist Avatar (4).png';
import Image from "next/image";
import { IoIosEye } from "react-icons/io";

function Home_Banner() {
  return (
    <div className='  '>
        <ParallaxProvider>
      <div className=" h-full lg:h-[640px] w-full bg-no-repeat bg-cover bg-center relative max-w-7xl mx-auto bg-[#2B2B2B]">

        {/* Parallax Banner with Background Image */}
        <ParallaxBanner
          layers={[{ image: "/BannerImg/homebanner.png", speed: -20 }]}
          className="h-[640px] relative"
        >
          {/* Pink Blur Effect */}
          <div className="absolute inset-0 flex flex-col">
            <div className="absolute bottom-0 left-0 w-full h-full backdrop-blur-xs bg-gradient-to-t from-[#a159ff9d] to-transparent"></div>
          </div>

          {/* Content inside ParallaxBanner */}
          <div className="absolute inset-0 flex px-28 justify-center items-center text-center text-white mt-20  md:mt-40">
            <div  className=" ">
              {/* Profile Button */}
              <button className="flex items-center gap-2.5 p-2 px-6 bg-[#2B2B2B] rounded-4xl mt-10 lg:mt-20 ">
                <Image src={avatar} alt="Avatar" className="h-6 w-6 rounded-full" />
                <span className="text-lg font-medium">Shroomie</span>
              </button>

              
              <div className=" block md:flex gap-0 md:gap-20 lg:gap-72 ">
               
                <div className="  justify-evenly">
                  <h1 className="mt-4 text-5xl font-semibold pt-3.5 lg:pt-10 text-left ">Magic Mushrooms</h1>
                  <div className=" mt-5 block md:hidden">
                  <div className="w-80 h-40 mt-4 rounded-3xl bg-[#5A407E] text-left p-6">
                    <p className="text-[12px]">Auction ends in:</p>
                    <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
                     
                      <div className="flex flex-col p-2 bg-none rounded-box text-neutral-content">
                        <span className="countdown font-mono text-5xl">
                          <span style={{ "--value": 10 }}>10</span>
                        </span>
                        hours
                      </div>
                      <div className="flex flex-col p-2 bg-none rounded-box text-neutral-content">
                        <span className="countdown font-mono text-5xl">
                          <span style={{ "--value": 24 }}>24</span>
                        </span>
                        min
                      </div>
                      <div className="flex flex-col p-2 bg-none rounded-box text-neutral-content">
                        <span className="countdown font-mono text-5xl">
                          <span style={{ "--value": 59 }}>59</span>
                        </span>
                        sec
                      </div>
                    </div>
                  </div>
                  </div>
                  <button className="flex items-center w-full lg:w-48 h-16 btn bg-white border-none rounded-3xl mt-5 lg:mt-10 ">
                    <span className="text-[#9251E8] text-xl"><IoIosEye /></span>
                    <span className="text-[16px] text-black font-medium">See NFT</span>
                  </button>
                </div>

                
                <div className=" mt-10 hidden md:block">
                  <div className="w-80 h-40 mt-4 rounded-3xl bg-[#5A407E] text-left p-6">
                    <p className="text-[12px]">Auction ends in:</p>
                    <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
                     
                      <div className="flex flex-col p-2 bg-none rounded-box text-neutral-content">
                        <span className="countdown font-mono text-5xl">
                          <span style={{ "--value": 10 }}>10</span>
                        </span>
                        hours
                      </div>
                      <div className="flex flex-col p-2 bg-none rounded-box text-neutral-content">
                        <span className="countdown font-mono text-5xl">
                          <span style={{ "--value": 24 }}>24</span>
                        </span>
                        min
                      </div>
                      <div className="flex flex-col p-2 bg-none rounded-box text-neutral-content">
                        <span className="countdown font-mono text-5xl">
                          <span style={{ "--value": 59 }}>59</span>
                        </span>
                        sec
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </ParallaxBanner>

      </div>
    </ParallaxProvider>
    </div>
  );
}

export default Home_Banner;
