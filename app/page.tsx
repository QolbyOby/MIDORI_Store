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
import NewProduck from '@/components/NewProduck/NewProduck';
import { saveCartToFirebase } from './lib/firebase/service';
import convertPrice from './katalog/convertPrice';
import { AiFillDollarCircle } from "react-icons/ai";
import { FaCheckCircle } from "react-icons/fa";
import { BiSolidLeaf } from "react-icons/bi";

import PopulerCategory from '@/components/PopulerCategory/page';
import CardTestimonial from '@/components/CardTestimonial/page';


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
            <motion.div className='md:h-[200px] md:w-[300px] h-[100px] w-[200px] px-2  flex flex-col justify-center items-center backdrop-blur-xl border-2 border-[#F7F6BB] rounded-xl'
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ amount: 0.5 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <h3 className='flex gap-2 items-center md:text-2xl md:font-semibold font-normal text-center'>wide Selection <span><FaCheckCircle /></span></h3>
              <p className='md:text-lg  font-light text-center text-xs leading-4 '>“Explore a vast range of indoor and outdoor plants, from tropical palms.”</p>
            </motion.div>
            <motion.div className='md:self-end md:h-[200px] md:w-[300px] h-[100px] w-[200px] px-2  flex flex-col justify-center items-center backdrop-blur-xl border-2 border-[#F7F6BB] rounded-xl'
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ amount: 0.5 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className='flex gap-2 items-center md:text-2xl md:font-semibold font-normal text-center'>Affordable <span><AiFillDollarCircle /></span></h3>
              <p className='md:text-lg  font-light text-center text-xs leading-4 '>“We offer competitive prices for our houseplants and flowers.”</p>
            </motion.div>
            <motion.div className='md:h-[200px] md:w-[300px] h-[100px] w-[200px] px-2  flex flex-col justify-center items-center backdrop-blur-xl border-2 border-[#F7F6BB] rounded-xl'
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ amount: 0.5 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <h3 className='flex gap-2 items-center md:text-2xl md:font-semibold font-normal text-center'>Crop Variety <span><BiSolidLeaf /></span></h3>
              <p className='md:text-lg  font-light text-center text-xs leading-4 '>“We offer a wide variety of ornamental plants to suit all tastes and needs.”</p>
            </motion.div>
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
                    <Image src={item.href} alt="" width={400} loading="lazy" height={400} className="max-w-[300px] h-[500px] object-cover rounded-t-3xl" />
                  </motion.div>
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </div>
      <div className='relative flex-col w-full h-80 overflow-hidden flex justify-center items-center'>
        <Image src={"/asset/daun-kecil-3.svg"} alt="" width={200} height={200} className="w-[200px] absolute hidden lg:block -top-[70px] -right-[80px]  -z-10 rotate-[280deg]" />
        <Image src={"/asset/daun-kecil-2.svg"} alt="" width={200} height={200} className="w-[200px] absolute hidden lg:block top-[5px] -right-[80px]  -z-40 rotate-[300deg]" />
        <Image src={"/asset/daun-kecil-1.svg"} alt="" width={200} height={200} className="w-[250px] absolute hidden lg:block -top-[110px] -right-[30px] -z-40  rotate-[230deg]" />
        <Image src={"/asset/daun-kecil-3.svg"} alt="" width={200} height={200} className="w-[200px] absolute hidden lg:block -top-[70px] -left-[80px]  -z-10 rotate-[80deg] scale-x-[-1]" />
        <Image src={"/asset/daun-kecil-2.svg"} alt="" width={200} height={200} className="w-[200px] absolute hidden lg:block top-[5px] -left-[80px]  -z-40 rotate-[60deg] scale-x-[-1]" />
        <Image src={"/asset/daun-kecil-1.svg"} alt="" width={200} height={200} className="w-[250px] absolute hidden lg:block -top-[110px] -left-[30px] -z-40  rotate-[120deg] scale-x-[-1]" />
        <h1 className='text-7xl font-bold text-center mb-6 bg-gradient-to-r from-[#094401] to-[#437b51] text-transparent bg-clip-text'>Populer Category</h1>
        <p className='text-center w-[400px]'>in our shop has 2 sales categories, namely the first selling various types of flowers and the second selling various types of ornamental plants. and we will add other types of plants in the future. </p>
      </div>
      <div className='px-6'>
        <div className='flex flex-col w-full md:flex-row md:justify-center items-center gap-10 xl:gap-14'>
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ amount: 0.5 }}
          >
            <PopulerCategory href='/asset/slider2.jpeg' name='Live Plant' />
          </motion.div>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ amount: 0.5 }}
          >
            <PopulerCategory href='/asset/flowerCategory.jpeg' name='Fresh Flower' />
          </motion.div>
        </div>
        <div>
          <h1 className='text-7xl font-bold text-center my-24 bg-gradient-to-r from-[#094401] to-[#437b51] text-transparent bg-clip-text'>New Product</h1>
          <NewProduck href='/asset/aglaonema.jpeg' deskripsi='A lavish bouquet inspired by the colors of autumn, featuring exquisite roses, freesias, and seasonal blooms, arranged with branches and adorned with beads in a chic vase.' />
          <NewProduck href='/asset/zamioculcasZamiifolia.jpeg' deskripsi='A lavish bouquet inspired by the colors of autumn, featuring exquisite roses, freesias, and seasonal blooms, arranged with branches and adorned with beads in a chic vase.' />
        </div>
        <h1 className='text-7xl font-bold text-center my-24 bg-gradient-to-r from-[#094401] to-[#437b51] text-transparent bg-clip-text'>Populer Product</h1>

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
                <h2 className="text-l text-[#FBFADA]">{convertPrice(item.harga)}</h2>
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
      <div className='flex-col flex lg:flex-row justify-center items-center gap-24 mb-20'>
        <div className='relative w-[300px] h-[400px] lg:w-[500px] lg:h-[700px] rounded-t-full outline outline-4 outline-offset-2 outline-[#fbfada]'>
          <motion.div
            initial={{ x: 100, y: 100, zIndex: '-100' }}
            whileInView={{ x: 0, y: 0, zIndex: -1 }}
            viewport={{ amount: "all" }}
            transition={{ duration: 0.5 }}
            className='z-40 hidden xl:block'
          >
            <Image
              src={"/asset/daun-kecil-3.svg"}
              alt=""
              width={200}
              height={200}
              className="w-[200px] rotate-[20deg] absolute -top-[70px] right-[410px] -z-10"
            />
          </motion.div>
          <motion.div
            initial={{ x: 200, y: 200, zIndex: '-100' }}
            whileInView={{ x: 0, y: 0, zIndex: -1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ amount: "all" }}
            className='-z-10 hidden xl:block'
          >
            <Image src={"/asset/daun-kecil-2.svg"} alt="" width={200} height={200} className="w-[250px] absolute top-[10px] right-[430px]  -z-40 rotate-[30deg]" />
          </motion.div>
          <motion.div
            initial={{ x: 100, y: 100, zIndex: '-100' }}
            whileInView={{ x: 0, y: 0, zIndex: -1 }}
            transition={{ duration: 0.5, delay: 1 }}
            viewport={{ amount: "all" }}
            className='-z-10 hidden md:block'
          >
            <Image src={"/asset/daun-kecil-1.svg"} alt="" width={200} height={200} className="w-[250px] absolute -top-[110px] right-[300px] -z-40  rotate-[20deg]" />
          </motion.div>
          <div className="relative z-10 w-full h-full">
            <Image
              src={'/asset/gambarHowTo.jpeg'}
              alt=""
              width={1000}
              height={1000}
              loading='lazy'
              className='w-full h-full object-cover rounded-t-full'
            />
          </div>
        </div>
        <div className='lg:w-[600px] px-9'>
          <h1 className='text-5xl font-bold mb-6 text-center lg:text-start'>
            How To Care For Plants
          </h1>
          <p className='mb-5 text-center lg:text-start'>
            There are several ways to care for plants. Here are some tips that will help you keep them healthy and thriving.
          </p>
          <ul className=' text-xl'>
            <li className='mb-3 flex justify-center items-center gap-5'>
              <div className='w-[110px]'><Image src={'/asset/daunHowTo.svg'} alt="daun" width={50} height={50} loading='lazy' className='w-full h-full' /></div>
              Water the plants every day. They need to be kept alive in the shade of the leaves.
            </li >
            <li className='mb-3 flex justify-center items-center gap-5'>
              <div className='w-[110px]'><Image src={'/asset/daunHowTo.svg'} alt="daun" width={50} height={50} loading='lazy' className='w-full h-full' /></div>
              Fertilize with plants every 3-4 months. They need to be kept alive in the shade of the leaves.
            </li>
            <li className='mb-3 flex justify-center items-center gap-5'>
              <div className='w-[110px]'><Image src={'/asset/daunHowTo.svg'} alt="daun" width={50} height={50} loading='lazy' className='w-full h-full' /></div>
              Prune plants every 3-4 months. They need to be kept alive in the shade of the leaves.
            </li>
            <li className='mb-3 flex justify-center items-center gap-5'>
              <div className='w-[110px]'><Image src={'/asset/daunHowTo.svg'} alt="daun" width={50} height={50} loading='lazy' className='w-full h-full' /></div>
              Remove dead leaves. They need to be kept alive in the shade of the leaves.
            </li>
          </ul>
          <button className=''></button>
          <button className='p-5 bg-[#12372A] rounded-full mt-10 text-[#fbfada]'>Catalogue</button>
        </div>
      </div>
      <div className='w-full xl:h-[900px] h-auto bg-[#12372A] mb-12'>
        <div className='text-[#fbfada]'>
          <h1 className='text-5xl font-bold text-center pt-14'>What They Say <br />
            Reviews</h1>
          <p className='text-center mt-5'>what they say who have bought flowers and ornamental plants <br /> at midori store </p>
        </div>
        <div className='flex justify-center items-center flex-col lg:flex-row gap-14 mt-36'>
          <CardTestimonial nama='Steve Job' deskripsi='"I am very happy with the ornamental plants I bought from Midori Ornamental Plant Shop."' profile='/asset/profile1.jpeg' />
          <CardTestimonial nama='Elon Musk' deskripsi='"I just started gardening and the staff at Midori Ornamental Plant Shop really helped me choose the right plants for my home. "' profile='/asset/profile2.jpeg' />
          <CardTestimonial nama='Bill Gates' deskripsi='Midori Ornamental Plant Shop is my favorite place to buy houseplants. They always have a good selection of plants and the prices are always competitive."'profile='/asset/profile3.jpeg' />
        </div>
      </div>
    </div >
  );
}
