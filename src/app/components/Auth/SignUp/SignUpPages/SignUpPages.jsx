"use client"
import React, { useContext, useState } from 'react'
import signUpImage from "../../../../../../public/SignUpImage/SignUpImage.png"
import Image from 'next/image'
import { ToastContainer, toast } from 'react-toastify';
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";
import { AuthContext } from '@/ContextProvider/MyContext';
import { redirect, useRouter } from 'next/navigation';

function SignUpPages() {

    const {CreateUserEmailAndPassword,setUsers, users, updateUserProfile} = useContext(AuthContext);

   const [showpassword, setshowpasssword] = useState(false);
   const [showconfirmpassword, setshowconfirmpasssword] = useState(false);

   const router = useRouter()

    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,20}$/;

    const handleSignUpPages = (e) =>{
        e.preventDefault()
        
        const form = e.target;
        const username = form.username.value
        const email = form.email.value
        const password = form.password.value
        const confirmpassword = form.confirmpassword.value
        
        console.log(username, email, password,confirmpassword)


        if(!passwordRegex.test(password)){

            toast.error('Password must contain at least one number, one uppercase letter, one lowercase letter, one special character, and be 8-20 characters long.')
            return
        }
        

        if(password !== confirmpassword){
            toast.error('Passwords do not match!')
            return
        }



        CreateUserEmailAndPassword(email, password)
        .then((currentuser) => {
           
            const user = currentuser.user 
            console.log(user)
            router.push('/components/MyNft');
        })
        .catch((error) => {
            
           toast.error ('Error', error)
        })
        
            


    }

   



    return (
        <div  className=' bg-[#2B2B2B]'>
            <ToastContainer/>
            <div className=" max-w-7xl mx-auto ">
            <div className=' h-full lg:h-[700px] grid md:grid-cols-2 gap-10'>
                <div>
                    <Image src={signUpImage} alt="Sign Up Image"></Image>
                </div>
                <div className=' py-0 lg:py-20 ml-0 lg:ml-32 px-3'>
                    <h2 className=' text-3xl lg:text-5xl font-semibold text-white pb-5'>Create account</h2>
                    <p className='text-xl lg:text-2xl font-light text-white w-[95%] lg:w-[70%] leading-10'> Welcome! enter your details and start creating, collecting and selling NFTs.</p>
                    <div className=' pt-3 lg:pt-10'>
                        <form onSubmit={handleSignUpPages}>
                            
                            <input type="text" name='username' className="input my-2 rounded-full border-none w-[300px] md:w-[330px]" placeholder="Username" required />
                            <input type="email" name='email' className="input my-2 rounded-full border-none w-[300px] md:w-[330px]" placeholder="Email Address" required />
                            <input type={showpassword ? "text" : "password"} name='password' className="input my-2 rounded-full border-none w-[300px] md:w-[330px]" placeholder="Password" required />
                            <div className=' absolute right-96' onClick={() => setshowpasssword(!showpassword)}>
                                {showpassword ? <FaEye className=' text-2xl absolute right-24 z-30 -mt-10 cursor-pointer' /> : <FaEyeSlash className=' text-2xl absolute right-24 z-30 -mt-10 cursor-pointer' /> }
                            
                            </div>
                            <input type={showconfirmpassword ? "text" : "password"}  name='confirmpassword' className="input my-2 rounded-full border-none w-[300px] md:w-[330px]" placeholder="Confirm Password" required />
                            <div className=' absolute right-96' onClick={() => setshowconfirmpasssword(!showconfirmpassword)}>
                                {showconfirmpassword ? <FaEye className=' text-2xl absolute right-24 z-30 -mt-10 cursor-pointer' /> : <FaEyeSlash className=' text-2xl absolute right-24 z-30 -mt-10 cursor-pointer' /> }
                            
                            </div>
                            <br />
                            <button className=' btn bg-[#A259FF] w-[300px] md:w-[330px] my-2 border-none rounded-full text-white shadow-2xs'>Create Account</button>
                        </form>
                    </div>
                </div>
            </div>

        </div>
        </div>
    )
}

export default SignUpPages