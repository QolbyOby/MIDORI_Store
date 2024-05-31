'use client'

import Image from "next/image"
import { motion, useTransform, useInView, useScroll, useMotionValueEvent } from "framer-motion"
import Style from "./curve.module.css"
import { FaShoppingCart } from "react-icons/fa";

export default function AboutPage() {
  return (
    <>
      <div className={`${Style.curve} flex flex-col bg-[#12372A] h-[1020px] w-full mb-[300px] md:mb-[450px]`}>
        <div className="z-1 flex items-center justify-center">
          <div className="mt-36 mb-7 flex flex-col gap-2">
            <h1 className="text-7xl font-bold text-[#FBFADA]">About</h1>
            <hr className="rounded-full h-1 bg-[#FBFADA]" />
          </div>
        </div>
        <div className="relative flex flex-col items-center gap-8 justify-center mx-6">
          <h1 className="text-3xl font-bold text-[#FBFADA]">
            We Are Midori Store
          </h1>
          <div className="max-w-3xl text-center text-xl sm:text-xl md:text-2xl ">
            <p className="text-[#FBFADA] text-md">We are an online store that focuses on selling various types of ornamental plants. Established in 2024, we have a commitment to provide high quality ornamental plants at competitive prices.</p>
          </div>
        </div>
      </div >
      <div className="absolute md:outline-offset-8 outline-offset-4 md:outline-8 outline-4 outline-[#436850] outline overflow-hidden -translate-x-1/2 -bottom-[360px] md:-bottom-[450px] lg:-bottom-[560px] left-1/2  h-[430px] w-[320px] xl:h-[870px] xl:w-[700px] lg:h-[790px] lg:w-[660px] md:h-[650px] md:w-[500px] bg-[#fbfada] rounded-full">
        <Image src={"/asset/aboutimg2.jpg"} alt="" width={1000} height={1000} className="w-full h-full object-cover" />
      </div>
      <div className="mx-6 mb-10 pt-40">
        <h1 className="text-center text-7xl font-extrabold tracking-tighter">
          We are committed to providing high quality products at affordable prices.
        </h1>
      </div>
      <div className="relative flex flex-col items-center justify-center px-16 mb-20 ">
        <div className="my-10 h-[430px] w-[320px] lg:h-[800px] lg:w-[600px] rounded-tl-full rounded-tr-full overflow-hidden outline-4 outline-offset-4 outline-[#436850] outline">
          <Image src={"/asset/toko2.jpg"} alt="" width={1000} height={1000} className="w-full h-full object-cover" />
        </div>
        <div className="flex flex-col w-[320px] lg:w-[600px] lg:text-2xl items-center justify-center gap-3">
          <p >
            Midori was founded in 2024 by Mr. X. We have a great passion for flowers, houseplants, and bonsai.
          </p>
          <p>
            We believe that the beauty of nature can bring happiness and freshness into our lives.
          </p>
        </div>
        <div className="moving-box"></div>
      </div>
      <div className="lg:relative flex flex-col lg:flex-row gap-10 justify-center items-center bg-[#12372A] py-28 px-10 rounded-3xl">
        <div className="flex flex-col justify-center items-center  h-[320px] w-[320px] bg-[#fbfada] rounded-3xl px-2">
          <h1 className="text-3xl font-bold">Sales</h1>
          <FaShoppingCart className="text-5xl text-[#12372A] mt-4 mb-10" />
          <p className="text-center">
            we sell various types of ornamental plants that we provide for you with the best quality and affordable prices
          </p>
        </div>
        <div className="flex flex-col justify-center items-center  h-[320px] w-[320px] bg-[#fbfada] rounded-3xl px-2">
          <h1 className="text-3xl font-bold text-center">Plant Arrangement</h1>
          <FaShoppingCart className="text-5xl text-[#12372A] mt-4 mb-10" />
          <p className="text-center">
            We also serve the arrangement of ornamental plants that we provide for you, directly to your home.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center  h-[320px] w-[320px] bg-[#fbfada] rounded-3xl px-2">
          <h1 className="text-3xl font-bold text-center">Plant Design </h1>
          <FaShoppingCart className="text-5xl text-[#12372A] mt-4 mb-10" />
          <p className="text-center">
            we serve plant designs that we provide with the best quality, served by our design experts.
          </p>
        </div>
      </div>
      <div className="flex flex-col mt-20 lg:items-center lg:px-16">
        <div className="relative w-full flex flex-col lg:items-start items-center justify-center mt-10 h-[700px]">
          <div className="absolute -top-10 lg:-top-4 right-0 h-[350px] w-[400px] lg:h-[436px] lg:w-3/5 bg-[#fbfada] outline outline-4 outline-[#436850]">
            <Image src={"/asset/aboutimg.jpg"} alt="" width={1000} height={1000} className="w-full h-full object-cover" />
          </div>
          <div className="h-[350px] w-[400px] lg:w-3/5 lg:h-[516px] flex flex-col justify-end lg:justify-start items-start p-10 bg-[#fbfada] outline outline-4 outline-[#436850]">
            <h1 className="text-3xl font-bold lg:text-6xl lg:mb-10">Visi</h1>
            <p className="lg:w-3/5 lg:text-xl lg:font-extralight">
              To become the premier destination for plant enthusiasts, inspiring a greener world by connecting people with nature through beautiful and sustainable ornamental plants.
            </p>
          </div>
        </div>
        <div className="relative w-full flex flex-col lg:items-end items-center justify-center mt-10 h-[700px]">
          <div className="absolute -top-10 lg:-top-4 left-0 h-[350px] w-[400px] lg:h-[436px] lg:w-3/5 bg-[#fbfada] outline outline-4 outline-[#436850]">
            <Image src={"/asset/aboutimg4.jpg"} alt="" width={1000} height={1000} className="w-full h-full object-cover" />
          </div>
          <div className="h-[350px] w-[400px] lg:w-3/5 lg:h-[516px] flex justify-end items-end lg:justify-end lg:items-start p-10 bg-[#fbfada] outline outline-4 outline-[#436850]">
            <div className="flex flex-col justify-center items-start w-3/5">
              <h1 className="text-3xl font-bold lg:text-6xl lg:mb-10">Misi</h1>
              <p className="lg:w-full lg:text-xl lg:font-extralight">
                To offer a diverse selection of high-quality ornamental plants that cater to various tastes and preferences. To provide exceptional customer service, ensuring a delightful shopping experience and comprehensive              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

