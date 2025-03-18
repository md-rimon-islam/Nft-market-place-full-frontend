"use client";
import Link from 'next/link';
import React from 'react';
import { CiShop } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";

function Navbar() {
    const links = (
        <>
            <li className='text-[16px] font-semibold text-white'><Link href="/components/MarketPlaces">Marketplace</Link></li>
            <li className='text-[16px] font-semibold text-white'><Link href="/components/Rankings">Rankings</Link></li>
            <li className='text-[16px] font-semibold text-white'><Link href="/components/Wallet">Connect a wallet</Link></li>
            <li className='text-[16px] font-semibold text-white'><Link href="/components/MyNft">My NFT</Link></li>
            <li className='text-[16px] font-semibold text-white'><Link href="/components/NftDetails">Nft details</Link></li>
        </>
    );

    return (
        <div className="navbar shadow-sm mx-auto fixed z-40 bg-white/30 backdrop-blur-sm px-2.5 lg:px-28" >
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
                    <div className=' hidden lg:block'>
                    <div className='flex gap-3 items-center btn h-14 w-40 rounded-3xl bg-[#A259FF] border-none shadow-2xs '>
                        <span className='text-white text-xl'><FaRegUserCircle /></span>
                        <Link href="/components/Auth/SignUp" className="text-[16px] font-semibold text-white">Sign Up</Link>
                    </div>
                    </div>
                    <div className="dropdown">
                        {/* Drawer Toggle */}
                        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                        <label htmlFor="my-drawer" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </label>
                        {/* Drawer Content */}
                        <div className="drawer-side z-40">
                            <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                            
                            <ul className="menu bg-[#2B2B2B] text-white min-h-full w-80 p-4">
                            
                                {links}
                            </ul>
                           
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default Navbar;