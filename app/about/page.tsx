'use client'

import Image from "next/image"
import ShapeAbout from '@/public/wave.svg'

export default function AboutPage() {
  return (
    <>
      <div className="h-screen bg-[#12372A]">
        <div className="flex items-center justify-center">
          <div className="my-36">
            <h1 className="text-8xl font-bold text-[#FBFADA]">About Page</h1>
          </div>
        </div>
        <div className="flex items-center justify-center mx-6">
          <div className="max-w-3xl text-center text-3xl">
            <div>
              <h1 className="text-[#FBFADA]">We are an online store that focuses on selling various types of ornamental plants. Established in 2024, we have a commitment to provide high quality ornamental plants at competitive prices.</h1>
            </div>
          </div>
        </div>
      </div >
        <div>
          <Image
            priority
            src={ShapeAbout}
            alt="Follow us on Twitter"
            className="w-full"
          />
        </div>
      <div className="flex justify-center items-center">
        <h1 className="text-8xl font-bold">Vision and Mission</h1>
      </div>
      <div className="h-[1000px] flex justify-between mt-20">
        <div className="w-1/2 flex justify-around items-center flex-col h-full">
          <Image src="/asset/toko1.jpg" alt="" width={1000} height={1000} className="w-4/5 max-h-[500px] object-cover rounded-tl-3xl" />
          <div className="flex flex-col justify-center items-start gap-5 w-4/5 mt-20">
            <h1 className="text-8xl font-bold">MISI</h1>
            <p className="text-xl">Quality and Variety: To offer a diverse selection of high-quality ornamental plants that cater to various tastes and preferences.
              Customer Experience: To provide exceptional customer service, ensuring a delightful shopping experience and comprehensive support for plant care.
              Sustainability: To promote eco-friendly practices and sustainable gardening, reducing our environmental footprint.
              Education: To empower customers with knowledge about plant care, the benefits of greenery, and the importance of environmental stewardship.
              Community Building: To foster a community of plant lovers through engaging events, workshops, and an active online presence, encouraging the sharing of ideas and experiences.
            </p>
          </div>
        </div>
        <div className="w-[100px] flex justify-center">
          <div className="w-1 h-full bg-black"></div>
        </div>
        <div className="w-1/2  flex justify-around items-center text-left flex-col h-full">
          <div className="flex flex-col justify-center items-start gap-5 w-4/5">
            <h1 className="text-8xl font-bold">VISI</h1>
            <p className="text-xl">To become the premier destination for plant enthusiasts, inspiring a greener world by connecting people with nature through beautiful and sustainable ornamental plants.</p>
          </div>
          <Image src="/asset/toko2.jpg" width={1000} height={100} alt="toko2" className="w-4/5 max-h-[500px] object-cover rounded-tr-3xl" />
        </div>
      </div>
    </>
  )
}

