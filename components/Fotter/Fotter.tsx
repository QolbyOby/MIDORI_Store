'use client'

import Image from 'next/image'
import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { useMediaQuery } from "react-responsive";


export default function () {
    const isMobile = useMediaQuery({ maxWidth: 768 });

    return (
        <footer className=" relative flex items-center justify-center p-10 bg-[#1A4D2E] text-white overflow-hidden">
            {!isMobile && (
                <>
                <Image src="/asset/Group 7.svg" alt="logo" width={250} height={250} className='absolute -left-4 -bottom-1 scale-x-[-1]' />
                <Image src="/asset/Group 7.svg" alt="logo" width={250} height={250} className='absolute -right-4 -bottom-1 ' />
                </>
            )}
            
            <div className='flex flex-col items-center justify-center gap-3'>
                <div>
                    <Image src="/asset/logo2.png" alt="logo" width={50} height={50} />
                </div>
                <p className="font-bold text-center leading-5">
                    MIDORI Store Ltd. <br />Providing reliable tech since 2024
                </p>
                <div className='flex gap-3 justify-center items-center'>
                    <FaInstagram className='text-3xl cursor-pointer' />
                    <FaSquareFacebook className='text-3xl cursor-pointer' />
                    <FaSquareTwitter className='text-3xl cursor-pointer' />
                    <FaSquareWhatsapp className='text-3xl cursur-pointer' />
                </div>
                <hr className='w-full bg-white h-[1px]' />
                <p className='text-center'>Copyright © 2022 - All right reserved by Midori Store</p>
            </div>
        </footer>
    )
}