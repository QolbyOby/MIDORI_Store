'use client'

import { usePathname, useRouter } from 'next/navigation';
import Cart from '@/app/cart/page';
import NavLink from './navLink';
import dynamic from 'next/dynamic';
import Image from 'next/image';

const DynamicCart = dynamic(() => import('@/app/cart/page'), {
  ssr: false
});


export default function Nav() {

  const pathname = usePathname();


  return (
    <nav className="fixed top-0 w-full  text-white p-4 flex justify-between items-center bg-transparent z-20">
      <div className='flex justify-center items-center gap-5'>
        <NavLink nameValue={<Image src="/asset/logo2.png" alt="logo" width={50} height={50}></Image>} href={'/'} className="text-2xl font-bold text-white" />
        <h1 className='text-xl font-bold'>MIDORI 緑</h1>
      </div>
      <ul className="flex space-x-4 justify-center items-center">
        <NavLink nameValue={'About'} href={'/about'} className={`hover:text-gray-300 cursor-pointer text-lg ${pathname === '/about' ? "bg-[#12372A] text-white" : ""} py-2 px-3 rounded-md`} />
        <NavLink nameValue={'Katalog'} href={'/katalog'} className={`hover:text-gray-300 cursor-pointer text-lg ${pathname === '/katalog' ? "bg-[#12372A] text-white" : ""} py-2 px-3 rounded-md`} />
        <NavLink nameValue={'Contact'} href={'/contact'} className={`hover:text-gray-300 cursor-pointer text-lg ${pathname === '/contact' ? "bg-[#12372A] text-white" : ""} py-2 px-3 rounded-md`} />
      </ul>
      <div
        className='flex justify-end items-center gap-4 mr-4 w-[144px]'
      >
        <DynamicCart />
      </div>
    </nav>
  )
}


