'use client'

import { usePathname, useRouter } from 'next/navigation';
import Cart from '@/app/cart/page';
import NavLink from './navLink';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from "framer-motion";

const DynamicCart = dynamic(() => import('@/app/cart/page'), {
  ssr: false
});


export default function Nav() {

  const pathname = usePathname();

  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setOpenMobileMenu(!openMobileMenu);
  };

  const menuVars = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };
  const containerVars = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
  };

  const mobileLinkVars = {
    initial: {
      y: "30vh",
      transition: {
        duration: 0.5,
        ease: [0.37, 0, 0.63, 1],
      },
    },
    open: {
      y: 0,
      transition: {
        ease: [0, 0.55, 0.45, 1],
        duration: 0.7,
      },
    },
  };


  return (
    <nav className="fixed top-0 w-full text-white p-4 flex justify-between items-center bg-transparent z-20">
      <div className='flex justify-center items-center gap-5'>
        <NavLink nameValue={<Image src="/asset/logo2.png" alt="logo" width={50} height={50} />} href={'/'} className="text-2xl font-bold text-white" />
        <h1 className='text-xl font-bold'>MIDORI 緑</h1>
      </div>
      <ul className="space-x-4 justify-center items-center hidden md:flex">
        <NavLink nameValue={'About'} href={'/about'} className={`hover:text-gray-300 cursor-pointer text-lg ${pathname === '/about' ? "bg-[#12372A] text-white" : ""} py-2 px-3 rounded-md`} />
        <NavLink nameValue={'Katalog'} href={'/katalog'} className={`hover:text-gray-300 cursor-pointer text-lg ${pathname === '/katalog' ? "bg-[#12372A] text-white" : ""} py-2 px-3 rounded-md`} />
        <NavLink nameValue={'Contact'} href={'/contact'} className={`hover:text-gray-300 cursor-pointer text-lg ${pathname === '/contact' ? "bg-[#12372A] text-white" : ""} py-2 px-3 rounded-md`} />
      </ul>
      <div className='flex md-hidden'>
        <div className='md:flex justify-end items-center gap-4 mr-4 md:w-[144px]'>
          <DynamicCart />
        </div>
        <div
          className="cursor-pointer md:hidden text-md text-black"
          onClick={toggleMobileMenu}
        >
          Menu
        </div>
        <AnimatePresence>
          {openMobileMenu && (
            <motion.div
              variants={menuVars}
              initial="initial"
              animate="animate"
              exit="exit"
              className="fixed z-10 top-0 left-0 w-full h-screen origin-top  bg-[#12372A] p-10">
              <div className="flex h-full flex-col">
                <div className="flex justify-between">
                  <p className="text-md text-[#FBFADA]">Menu</p>
                  <p
                    className="cursor-pointer text-md text-[#FBFADA]"
                    onClick={toggleMobileMenu}
                  >
                    Close
                  </p>
                </div>
                <motion.div
                  variants={containerVars}
                  initial="initial"
                  animate="open"
                  exit="initial"
                  className='flex flex-col h-full justify-center items-center gap-4'>
                  <div className='overflow-hidden'>
                    <motion.div
                      variants={mobileLinkVars}
                      className="text-5xl uppercase text-black"
                    >
                      <Link href={'/about'} className="text-[#FBFADA] hover:text-white cursor-pointer text-4xl rounded-md" onClick={toggleMobileMenu}>About</Link>
                    </motion.div>
                  </div>
                  <div className='overflow-hidden'>
                    <motion.div
                      variants={mobileLinkVars}
                      className="text-5xl uppercase text-black"
                    >
                      <Link href={'/katalog'} className="text-[#FBFADA] hover:text-white cursor-pointer text-4xl rounded-md" onClick={toggleMobileMenu}>Katalog</Link>
                    </motion.div>
                  </div>
                  <div className='overflow-hidden'>
                    <motion.div
                      variants={mobileLinkVars}
                      className="text-5xl uppercase text-black"
                    >
                      <Link href={'/contact'} className="text-[#FBFADA] hover:text-white cursor-pointer text-4xl rounded-md" onClick={toggleMobileMenu}>Contact</Link>
                    </motion.div>
                  </div>
                </motion.div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}

