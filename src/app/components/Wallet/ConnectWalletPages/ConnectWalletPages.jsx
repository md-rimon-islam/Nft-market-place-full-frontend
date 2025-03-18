"use client";
import React, { useState } from 'react';
import signUpImage from "../../../../../public/SignUpImage/SignUpImage.png";
import coinbase from "../../../../../public/walletImage/coinbase.webp";
import metamask from "../../../../../public/walletImage/metamask.webp";
import WalletConnect from "../../../../../public/walletImage/WalletConnect.png";
import Image from 'next/image';
import { ethers } from "ethers";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { db } from '@/Firebase/firebase.config'; // Ensure this path is correct

function ConnectWalletPages() {
  const [walletAddress, setWalletAddress] = useState(null);

  const metamaskConnectWallet = async () => {
    if (window.ethereum) {
      try {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const address = await signer.getAddress();
        setWalletAddress(address);
        storeWalletAddress(address); // Store the wallet address in Firestore
      } catch (error) {
        console.log("Error connecting to MetaMask:", error);
      }
    } else {
      alert('MetaMask not detected');
    }
  };

  const storeWalletAddress = async (wallet) => {
    const userRef = doc(db, "users", wallet);
    const docSnap = await getDoc(userRef);

    if (!docSnap.exists()) {
      await setDoc(userRef, {
        walletAddress: wallet,
        createdAt: new Date(),
      });
    }
  };

  return (
    <div className='bg-[#2B2B2B]'>
      <div className='max-w-7xl mx-auto pt-20'>
        <div className='h-full lg:h-[700px] grid md:grid-cols-2 gap-10'>
          <div>
            <Image src={signUpImage} alt="Sign Up Image" />
          </div>
          <div className='py-1 lg:py-20 px-2 md:px-0'>
            <h2 className='text-3xl lg:text-5xl font-semibold text-white pb-5 md:text-left text-center'>
              Connect wallet
            </h2>
            <p className='text-lg lg:text-2xl font-light text-white w-full md:w-[70%] leading-6 lg:leading-10 md:text-left text-center'>
              Choose a wallet you want to connect. There are several wallet providers.
            </p>
            <div className='pt-5 lg:pt-10 space-y-4 mb-3 flex flex-col items-center justify-center md:items-start md:justify-items-start'>
              <div
                onClick={metamaskConnectWallet}
                className='h-[72] w-80 border-2 border-[#A259FF] rounded-[20px] btn bg-[#4c4c4c] shadow-2xs flex items-center gap-4 cursor-pointer'
              >
                <span>
                  <Image src={metamask} className='h-10 w-10' alt='Metamask' />
                </span>
                <span>
                  <h5 className='text-2xl text-white font-semibold'>Metamask</h5>
                </span>
              </div>
              <div className='h-[72] w-80 border-2 border-[#A259FF] rounded-[20px] btn bg-[#4c4c4c] shadow-2xs flex items-center gap-4'>
                <span>
                  <Image src={coinbase} className='h-10 w-10' alt='Coinbase' />
                </span>
                <span>
                  <h5 className='text-2xl text-white font-semibold'>Coinbase</h5>
                </span>
              </div>
              <div className='h-[72] w-80 border-2 border-[#A259FF] rounded-[20px] btn bg-[#4c4c4c] shadow-2xs flex items-center gap-4'>
                <span>
                  <Image src={WalletConnect} className='h-10 w-10' alt='WalletConnect' />
                </span>
                <span>
                  <h5 className='text-2xl text-white font-semibold'>WalletConnect</h5>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConnectWalletPages;