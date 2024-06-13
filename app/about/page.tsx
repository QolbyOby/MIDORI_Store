'use client'

import Image from "next/image"
import Style from "./curve.module.css"
import { FaShoppingCart } from "react-icons/fa";
import { motion } from "framer-motion";
import { BiSolidLeaf } from "react-icons/bi";
import { RiPlantFill } from "react-icons/ri";
import { GiFlamedLeaf } from "react-icons/gi";
import { FaCanadianMapleLeaf } from "react-icons/fa6";



export default function AboutPage() {
  return (
    <div>
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
      <div className="mx-6 mb-36 pt-10">
        <h1 className="text-center text-7xl font-extrabold tracking-tighter">
          We are committed to providing high quality products at affordable prices.
        </h1>
      </div>
      <div className="relative flex flex-col lg:flex-row items-center justify-center px-16 mb-20 gap-24">
        <div className="flex flex-col w-[320px] lg:w-[600px] lg:text-xl items-start justify-center text-center lg:text-start gap-3">
          <h1 className="text-7xl font-bold mb-10">Our Story</h1>
          <motion.p
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ amount: 0.5 }}
          >
            Our story began with a simple passion for nature and beauty. In 2010, our founder, Daisuke, started growing a small collection of plants in their backyard. What began as a hobby soon blossomed into a deep love for horticulture and the intricate beauty of plants. Inspired by the joy that plants brought into their life, Daisuke decided to share this passion with others, leading to the creation of Midori In 2024.</motion.p>
          <motion.p
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ amount: 0.5 }}
          >
            Our commitment to quality and customer satisfaction is at the heart of everything we do. We provide detailed care instructions and personalized advice to ensure that your plants continue to flourish. Thank you for choosing [Your Store Name] as your trusted source for beautiful and healthy plants. Together, let's cultivate a greener, more beautiful world.</motion.p
          >
          <motion.p
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ amount: 0.5 }}
          >
            At Midori, we offer a wide variety of ornamental plants, from lush greenery to blooming flowers, each selected for its unique charm and ability to enhance your surroundings. Whether you're a seasoned plant enthusiast or just starting your green journey, we are here to help you find the perfect plant to suit your style and needs
          </motion.p>
        </div>
        <div className="relative my-10 h-[430px] w-[320px] lg:h-[800px] lg:w-[600px] rounded-t-full outline-4 outline-offset-4 outline-[#436850] outline">
          <Image src={"/asset/daun-kecil-3.svg"} alt="" width={200} height={200} className="w-[200px] hidden xl:block absolute -top-[80px] right-[450px] -z-10 rotate-[20deg]" />
          <Image src={"/asset/daun-kecil-2.svg"} alt="" width={200} height={200} className="w-[250px] hidden xl:block absolute top-[10px] right-[460px] -z-40 rotate-[30deg]" />
          <Image src={"/asset/daun-kecil-1.svg"} alt="" width={200} height={200} className="w-[250px] hidden xl:block absolute -top-[120px] right-[314px] -z-40 rotate-[10deg]" />
          <Image src={"/asset/toko2.jpeg"} alt="" width={1000} height={1000} className="w-full h-full rounded-t-full object-cover" />
        </div>
      </div>
      <div className="lg:relative flex flex-col lg:flex-row gap-10 justify-center items-center bg-[#12372A] py-28 px-10 rounded-3xl overflow-hidden z-10">
        <Image src={"/asset/daun-kecil-3.svg"} alt="" width={200} height={200} className="w-[200px] hidden xl:block absolute -top-[80px] -left-[30px]  rotate-[180deg]" />
        <Image src={"/asset/daun-kecil-2.svg"} alt="" width={200} height={200} className="w-[200px] hidden xl:block absolute top-[10px] -left-[50px] -z-10 rotate-[220deg]" />
        <Image src={"/asset/daun-kecil-1.svg"} alt="" width={200} height={200} className="w-[250px] hidden xl:block absolute -top-[120px] -left-[0px] -z-10 rotate-[150deg]" />
        <div className="text-[#FBFADA] md:w-[320px] lg:w-[600px] ">
          <h1 className="text-7xl font-bold text-center lg:text-start">Our Services</h1>
          <p className="text-center lg:text-start my-10">We also have services or services for those of you who need information about what plants you want.</p>
          <motion.hr className="rounded-full h-1 bg-[#FBFADA]"
            initial={{ width: "0%" }}
            whileInView={{ width: '100%' }}
            viewport={{ amount: "all" }}
            transition={{ duration: 1.5, delay: 0.5 }}


          />
        </div>
        <div className="relative mb-10 flex flex-col justify-center items-center  h-[320px] w-[320px] bg-[#fbfada] rounded-3xl px-2">
          <h1 className="text-3xl font-bold text-center">Sell plants</h1>
          <FaShoppingCart className="text-5xl text-[#12372A] mt-4 mb-10" />
          <p className="text-center">
            we sell various types of ornamental plants that we provide for you with the best quality and affordable prices
          </p>
          <Image src={"/asset/daun.svg"} alt="" width={200} height={200} className="w-[130px] h-[130px] absolute  -bottom-20" />
        </div>
        <div className="relative mb-10 flex flex-col justify-center items-center  h-[320px] w-[320px] bg-[#fbfada] rounded-3xl px-2">
          <h1 className="text-3xl font-bold text-center">Arrange Plants</h1>
          <BiSolidLeaf className="text-5xl text-[#12372A] mt-4 mb-10" />
          <p className="text-center">
            We also serve the arrangement of ornamental plants that we provide for you, directly to your home.
          </p>
          <Image src={"/asset/daun.svg"} alt="" width={200} height={200} className="w-[130px] h-[130px] absolute  -bottom-20" />
        </div>
        <div className="relative mb-10 flex flex-col justify-center items-center  h-[320px] w-[320px] bg-[#fbfada] rounded-3xl px-2">
          <h1 className="text-3xl font-bold text-center">Plants Design </h1>
          <RiPlantFill className="text-5xl text-[#12372A] mt-4 mb-10" />
          <p className="text-center">
            we serve plant designs that we provide with the best quality, served by our design  <br />experts.
          </p>
          <Image src={"/asset/daun.svg"} alt="" width={200} height={200} className="w-[130px] h-[130px] absolute  -bottom-20" />
        </div>
      </div>
      <div className="flex flex-col mt-20 lg:items-center lg:px-16">
        <div className="w-full lg:my-10 my-32">
          <div className="h-36 flex items-center lg:justify-between justify-center">
            <motion.hr className="h-1 hidden lg:block bg-[#12372A] rounded-full w-[350px]"
              initial={{ width: "0%" }}
              whileInView={{ width: '350px' }}
              viewport={{ amount: "all" }}
              transition={{ duration: 1.5, delay: 0.5 }}
            />
            <h1 className="text-7xl font-bold text-center">Mission & Vision</h1>
            <motion.hr className="h-1 hidden lg:block bg-[#12372A] rounded-full w-[350px]"
              initial={{ width: "0%" }}
              whileInView={{ width: '350px' }}
              viewport={{ amount: "all" }}
              transition={{ duration: 1.5, delay: 0.5 }}
            />
          </div>
        </div>
        <div className="relative w-full flex flex-col lg:items-start items-center justify-center mt-10 h-[700px]">
          <div className="absolute -top-10 lg:top-7 right-0 h-[350px] w-[400px] lg:h-[436px] lg:w-3/5 bg-[#fbfada] outline outline-4 outline-[#436850]">
            <Image src={"/asset/aboutimg.jpg"} alt="" width={1000} height={1000} className="w-full h-full object-cover" />
          </div>
          <Image src={"/asset/daun-kecil-3.svg"} alt="" width={200} height={200} className="w-[200px] hidden xl:block absolute -top-[60px] right-[800px] -z-10 rotate-[20deg]" />
          <Image src={"/asset/daun-kecil-2.svg"} alt="" width={200} height={200} className="w-[250px] hidden xl:block absolute top-[10px] right-[830px] -z-40 rotate-[30deg]" />
          <Image src={"/asset/daun-kecil-1.svg"} alt="" width={200} height={200} className="w-[250px] hidden xl:block absolute -top-[120px] right-[700px] -z-40 rotate-[10deg]" />
          <div className="relative -z-10 h-[350px] w-[400px] lg:w-3/5 lg:h-[436px] flex flex-col justify-end lg:justify-start items-start p-10 bg-[#fbfada] outline outline-4 outline-[#436850]">
            <h1 className="text-3xl font-bold lg:text-6xl lg:mb-10">Vision</h1>
            <p className="lg:w-3/5 lg:text-xl lg:font-extralight">
              To become the premier destination for plant enthusiasts, inspiring a greener world by connecting people with nature through beautiful and sustainable ornamental plants.
            </p>
            <GiFlamedLeaf className="absolute hidden lg:block bottom-0 left-0 text-9xl text-[#FBFADA] bg-[#12372A] p-5 rounded-tr-[60px]" />
          </div>
        </div>
        <div className="relative w-full flex flex-col lg:items-end items-center justify-center mt-10 h-[700px]">
          <div className="absolute -top-10 lg:top-7 left-0 h-[350px] w-[400px] lg:h-[436px] lg:w-3/5 bg-[#fbfada] outline outline-4 outline-[#436850]">
            <Image src={"/asset/aboutimg4.jpg"} alt="" width={1000} height={1000} className="w-full h-full object-cover" />
          </div>
          <Image src={"/asset/daun-kecil-3.svg"} alt="" width={200} height={200} className="w-[200px] absolute -top-[40px] right-[430px] -z-10 rotate-[80deg]" />
          <Image src={"/asset/daun-kecil-2.svg"} alt="" width={200} height={200} className="w-[250px] absolute -top-[89px] right-[460px] -z-40 rotate-[90deg]" />
          <Image src={"/asset/daun-kecil-1.svg"} alt="" width={200} height={200} className="w-[250px] absolute -top-[20px] right-[308px] -z-40 rotate-[60deg]" />
          <div className="relative -z-10 h-[350px] w-[400px] lg:w-3/5 lg:h-[436px] flex justify-end items-end lg:justify-end lg:items-start p-10 bg-[#fbfada] outline outline-4 outline-[#436850]">
            <div className="flex flex-col justify-center items-start w-3/5">
              <h1 className="text-3xl font-bold lg:text-6xl lg:mb-10">Mission</h1>
              <p className="lg:w-full lg:text-xl lg:font-extralight">
                To offer a diverse selection of high-quality ornamental plants that cater to various tastes and preferences. To provide exceptional customer service, ensuring a delightful shopping experience and comprehensive              </p>
              <FaCanadianMapleLeaf  className="absolute hidden lg:block bottom-0 right-0 text-9xl text-[#FBFADA] bg-[#12372A] p-5 rounded-tl-[60px]"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

