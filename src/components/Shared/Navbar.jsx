"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import { CiShop } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";
import { RxCrossCircled } from "react-icons/rx";

function Navbar() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const links = (
        <>
            <li className='text-[16px] font-semibold text-white'><Link href="/components/MarketPlaces">Marketplace</Link></li>
            <li className='text-[16px] font-semibold text-white'><Link href="/components/Rankings">Rankings</Link></li>
            <li className='text-[16px] font-semibold text-white'><Link href="/components/Wallet">Connect a wallet</Link></li>
            <li className='text-[16px] font-semibold text-white'><Link href="/components/MyNft">My NFT</Link></li>
            <li className='text-[16px] font-semibold text-white'><Link href="/components/NftDetails">Nft details</Link></li>
        </>
    );

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    const closeDrawer = () => {
        setIsDrawerOpen(false);
    };

    return (
        <div className="navbar shadow-sm mx-auto fixed z-40 bg-white/30 backdrop-blur-sm px-2.5 lg:px-28">
            <div className="navbar-start">
                <Link href="/">
                    <h1 className='flex items-center gap-2'>
                        <span className=' text-lg md:text-3xl font-extrabold text-[#A259FF]'><CiShop /></span>
                        <span className='font-bold text-[14px] md:text-2xl text-white'>NFT Marketplace</span>
                    </h1>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-9">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <div className='hidden lg:block'>
                    <div className='flex gap-3 items-center btn h-14 w-40 rounded-3xl bg-[#A259FF] border-none shadow-2xs'>
                        <span className='text-white text-xl'><FaRegUserCircle /></span>
                        <Link href="/components/Auth/SignUp" className="text-[16px] font-semibold text-white">Sign Up</Link>
                    </div>
                </div>
                <div className="dropdown">
                    {/* Drawer Toggle Button */}
                    <button className="btn btn-ghost lg:hidden" onClick={toggleDrawer}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </button>

                    {/* Drawer Content */}
                    {isDrawerOpen && (
                        <div className="fixed inset-0 z-40">
                            {/* Overlay */}
                            <div className="fixed inset-0 bg-black/50" onClick={closeDrawer}></div>
                            {/* Drawer Side */}
                            <div className="fixed  w-full md:w-[50%] bg-[#2B2B2B] text-white ">
                                <div className='absolute right-2 top-2'>
                                    <button className='text-4xl text-white cursor-pointer' onClick={closeDrawer}>
                                        <RxCrossCircled />
                                    </button>
                                </div>
                               <div className=' '>
                                <ul className="p-5 mt-10 bg-[#2B2B2B] w-full min-h-screen pt-10">
                                        {links}
                                    </ul>
                               </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Navbar;