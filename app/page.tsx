'use client'

import Image from 'next/image'
import produk from "@/app/produk.json";
import dynamic from 'next/dynamic';
import { usePathname, useRouter } from 'next/navigation';
import { animatePageOut } from '@/app/utils/animations';
import { addToCart, selectCartItems } from '@/components/redux/cartSlice';
import { toast } from "sonner"
import { useDispatch, useSelector } from 'react-redux';
import Button from '@/components/buttonAddToCart';
import NavLink from '@/components/navLink';
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
import { useState } from 'react';
import ButtonRounded from '@/components/buttonRounded';
import Text from "@/components/TextAnimation/Text"


const DynamicButtonRounded = dynamic(() => import('@/components/buttonRounded'), {
  ssr: false
});

const DynamicKatalogLink = dynamic(() => import("@/app/katalog/katalogLink"), {
  ssr: false
});

interface Product {
  id: number;
  gambar: string;
  nama: string;
  harga: number;
  qty: number;
  totalProduk: number;
  deskripsi: string;
}

interface Slider {
  id: number,
  href: string
}

export default function Home() {

  const dispatch = useDispatch();

  const handleAddToCart = (produk: Product) => {
    dispatch(addToCart(produk));

    toast.success("Produk ditambahkan ke keranjang");
  };

  const pathname = usePathname();
  const router = useRouter();

  const Navigation = ({ href }: { href: string }) => {
    const HandleClik = () => {
      if (pathname != href)
        animatePageOut(href, router);

    }
  }


  return (
    <div>
      <div className='relative'>
        <div className='h-screen w-full'>
          <Image src="/asset/home.jpg" alt="background" width={1920} height={1080} className='w-full h-full object-cover' />
        </div>
        <div className='w-full h-60 bg-gradient-to-t from-black absolute bottom-0 '></div>
        <div className='absolute top-0 w-full h-screen flex items-center justify-center'>
          <div className=" z-10 flex flex-col items-center justify-center  text-[#F7F6BB] border-2 border-white p-6 rounded-lg backdrop-blur-lg ">
            <div className='max-w-[1128] text-center my-6 leading-tight'>
              <h1 className='font-bold text-[82px]'>Bring Serenity to Your Place <br />
                With Interior Plants</h1>
            </div>
            <div className='text-center mb-6'>
              <p className='text-[24px]'>find your dream plant for you home decoration <br />with us, and we will make it happen.</p>
            </div>
            <NavLink href={'/katalog'} nameValue={<DynamicButtonRounded buttonName='Katalog' />} />

          </div>
        </div>
      </div>
      <div className='w-full h-[500px] bg-black flex justify-center items-center'>
        <h1 className='text-[#F7F6BB] max-w-4xl text-6xl text-center line font-bold '>We are committed to providing high quality products at affordable prices.</h1>
      </div>
      <div className='w-full flex justify-center bg-black items-center flex-col'>
        <Image src="/asset/bonsai.png" alt="" width={1000} height={1000} />
        <div className='my-6'>
          <ButtonRounded buttonName='About us' />
        </div>
        <div className='flex w-full h-[550px]'>
          <Marquee speed={100}>
            {produk.Slider.map((item: Slider) => (
              <div
                key={item.id}
                className='flex px-3'
              >
                <motion.div
                  whileHover={{ scale: 1.1, }}
                  transition={{ duration: 0.5, type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Image src={item.href} alt="" width={400} height={400} className={`max-w-[300px] h-[500px] object-cover ${item.id % 2 === 0 ? "rounded-tr-3xl" : "rounded-tl-3xl"}`} />
                </motion.div>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
      <div className='px-6'>
        <h1 className='text-8xl font-bold text-center my-24'>POPULER PRODUCK</h1>
        <div className="grid grid-cols-4 gap-4">
          {produk.populerProduk.map((item: Product) => (
            <div
              key={item.id}
              className={`cursor-pointer bg-[#12372A] flex flex-col justify-evenly items-center h-auto ${item.id % 2 === 0 ? "rounded-r-3xl" : "rounded-l-3xl"
                }`}
            >
              <div className="h-[440px] w-full">
                <DynamicKatalogLink nameValue={<Image
                  src={item.gambar}
                  alt={item.nama}
                  width={440}
                  height={440}
                  loading="lazy"
                  className={` ${item.id % 2 === 0 ? "rounded-r-3xl" : "rounded-l-3xl"
                    } shadow-2xl w-full h-full object-cover`}
                />} href={`/produk/populer/${item.id}`}>
                </DynamicKatalogLink>
              </div>
              <div className="flex flex-col justify-center items-center my-6">
                <h1 className="text-2xl font-semibold text-[#FBFADA]">{item.nama}</h1>
                <h2 className="text-l text-[#FBFADA]">{item.harga}</h2>
              </div>

              <button onClick={() => handleAddToCart(item)} className="mb-6">
                <Button buttonName='Add to Cart' />
              </button>
            </div>
          ))}
        </div>
        <div className='text-center my-20'>
          <NavLink href={'/katalog'} nameValue={<DynamicButtonRounded buttonName='All Product' />} />
        </div>
      </div>
    </div >
  );
}
