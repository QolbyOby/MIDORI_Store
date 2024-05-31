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
import NewProduck from '@/components/NewProduck/NewProduck';
import { ImLeaf } from "react-icons/im";


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

  const [isLoading, setIsLoading] = useState(true);


  return (
    <div>
      <div className='relative'>
        <div className='h-screen w-full'>
          <Image src="/asset/home1.jpg" alt="background" loading="lazy" width={1920} height={1080} onLoad={() => { setIsLoading(false) }} className='w-full h-full object-cover' />
        </div>
        <div className='w-full h-60 bg-gradient-to-t from-black absolute bottom-0 '></div>
        <div className='absolute top-0 w-full h-screen flex items-center justify-center px-4'>
          <div className="z-10 flex flex-col items-center justify-center  max-w-[1140px] text-[#F7F6BB] border-2 border-white p-4 sm:p-6 rounded-lg backdrop-blur-lg">
            {/* <Image src={"/asset/Leaf png.svg"} alt="logo" width={1000} height={1000} className={""} /> */}
            <div className='text-center sm:my-6 leading-tight '>
              <h1 className='font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>Bring Serenity to Your Place <br />
                With Interior Plants</h1>
            </div>
            <div className='text-center my-6'>
              <p className='text-[15px] sm:text-lg md:text-xl lg:text-2xl xl:text-3xl'>Find your dream plant for you home decoration <br />with us, and we will make it happen.</p>
            </div>
            <NavLink href={'/katalog'} nameValue={<DynamicButtonRounded buttonName='Katalog' />} />
          </div>
        </div>
      </div>
      <div className='w-full h-[500px] bg-black flex justify-center items-center px-4'>
        <h1 className='text-[#F7F6BB] max-w-4xl text-4xl md:text-6xl text-center line font-bold '>We are committed to providing high quality products at affordable prices.</h1>
      </div>
      <div className='w-full flex justify-center bg-black items-center flex-col px-4'>
        <div className='relative  text-[#F7F6BB] flex flex-col justify-center items-center'>
          <div className='absolute flex flex-col gap-4 top-0 md:top-48 md:flex-row md:h-[450px] md:w-[1100px] md:justify-between lg:top-96'>
            <h1 className='md:absolute md:left-[440px] md:top-20 md:text-4xl text-center text-xl font-semibold'> Why Choose Us</h1>
            <div className='md:h-[200px] md:w-[300px] h-[100px] w-[200px] px-2  flex flex-col justify-center items-center backdrop-blur-xl border-2 border-[#F7F6BB] rounded-xl'>
              <h3 className='md:text-2xl md:font-semibold font-normal text-center'>wide Selection</h3>
              <p className='md:text-lg  font-light text-center text-xs leading-4 '>“Explore a vast range of indoor and outdoor plants, from tropical palms.”</p>
            </div>
            <div className='md:self-end md:h-[200px] md:w-[300px] h-[100px] w-[200px] px-2  flex flex-col justify-center items-center backdrop-blur-xl border-2 border-[#F7F6BB] rounded-xl'>
              <h3 className=' md:text-2xl md:font-semibold font-normal text-center'>wide Selection</h3>
              <p className='md:text-lg  font-light text-center text-xs leading-4 '>“Explore a vast range of indoor and outdoor plants, from tropical palms.”</p>
            </div>
            <div className='md:h-[200px] md:w-[300px] h-[100px] w-[200px] px-2  flex flex-col justify-center items-center backdrop-blur-xl border-2 border-[#F7F6BB] rounded-xl'>
              <h3 className=' md:text-2xl md:font-semibold font-normal text-center'>wide Selection</h3>
              <p className='md:text-lg  font-light text-center text-xs leading-4 '>“Explore a vast range of indoor and outdoor plants, from tropical palms.”</p>
            </div>
          </div>
          <Image src="/asset/bonsai.png" alt="" width={1000} height={1000} loading='lazy' />
          <div className='mb-6 mt-24'>
            <ButtonRounded buttonName='About us' />
          </div>
        </div>
        <div className='flex w-full h-[500px] overflow-hidden py-4 md:py-8'>
          <div className='overflow-hidden'>
            <Marquee speed={100}>
              {produk.Slider.map((item: Slider) => (
                <div
                  key={item.id}
                  className='flex px-2 md:px-4 overflow-hidden'
                >
                  <motion.div
                    whileHover={{ scale: 1.1, }}
                    transition={{ duration: 0.5, type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Image src={item.href} alt="" width={400} loading="lazy" height={400} className={`max-w-[300px] h-[500px] object-cover ${item.id % 2 === 0 ? "rounded-tr-3xl" : "rounded-tl-3xl"}`} />
                  </motion.div>
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </div>
      <div className='px-6'>
        <div>
          <h1 className='text-7xl font-bold text-center my-24'>New Produck</h1>
          <NewProduck href='/asset/aglaonema.jpeg' deskripsi='A lavish bouquet inspired by the colors of autumn, featuring exquisite roses, freesias, and seasonal blooms, arranged with branches and adorned with beads in a chic vase.' />
          <NewProduck href='/asset/zamioculcasZamiifolia.jpeg' deskripsi='A lavish bouquet inspired by the colors of autumn, featuring exquisite roses, freesias, and seasonal blooms, arranged with branches and adorned with beads in a chic vase.' />
        </div>
        <h1 className='text-7xl font-bold text-center my-24'>POPULER PRODUCK</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
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
      <div className='flex-col flex lg:flex-row justify-center items-center gap-24 mb-20 '>
        <div className='w-[300px] h-[400px] lg:w-[500px] lg:h-[500px] rounded-tr-full rounded-tl-full overflow-hidden outline outline-4 outline-offset-2 outline-[#fbfada]'>
          <Image src={'/asset/toko1.jpg'} alt="" width={1000} height={1000} loading='lazy' className='w-full h-full object-cover' />
        </div>
        <div className='lg:w-[600px] px-9'>
          <h1 className='text-5xl font-bold mb-6'>
            how to care for plants
          </h1>
          <ul className='list-disc text-xl'>
            <li className='mb-3'>
              <span className='font-bold'>Water: </span>
              Water the plants every day. They need to be kept alive in the shade of the leaves.
            </li >
            <li className='mb-3'>
              <span className='font-bold'>Fertilize: </span>
              Fertilize with plants every 3-4 months. They need to be kept alive in the shade of the leaves.
            </li>
            <li className='mb-3'>
              <span className='font-bold'>Pruning: </span>
              Prune plants every 3-4 months. They need to be kept alive in the shade of the leaves.
            </li>
            <li className='mb-3'>
              <span className='font-bold'>Remove dead leaves: </span>
              Remove dead leaves. They need to be kept alive in the shade of the leaves.
            </li>
          </ul>
          <button className=''></button>
          <button className='p-5 bg-[#12372A] rounded-full mt-10 text-[#fbfada]'>Catalogue</button>
        </div>
      </div>
    </div >
  );
}
