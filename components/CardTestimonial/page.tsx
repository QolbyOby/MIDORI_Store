import Image from "next/image";
import { IoStar, IoStarHalf } from "react-icons/io5";

interface CardTestimonialProps {
    nama: string;
    deskripsi: string;
    profile: string 
}


export default function CardTestimonial({ nama, deskripsi, profile }: CardTestimonialProps) {
    return (
        <div className='relative flex  h-[450px] w-[300px] bg-[#ADBC9F] rounded-t-[100px] mt-10 mb-20 lg:mt-0 lg:mb-0'>
            <div className=' absolute rounded-full h-28 w-28 bg-[white] left-[50%] m-auto translate-x-[-50%] -top-14'>
                <Image src={profile} alt="background" width={1920} height={1080} className="w-full h-full object-cover rounded-full" />
            </div>
            <div className='flex  flex-col gap-5  mt-10 items-center px-5'>
                <div className="flex flex-col gap-2 justify-center items-center w-full mt-14">
                    <h1 className='text-3xl font-bold'>{nama}</h1>
                    <div className="flex gap-2 text-[#f2ed5b] text-2xl">
                        <IoStar className=" " />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStarHalf />
                    </div>
                    <hr className='h-1 bg-[#12372A] w-full' />
                </div>
                <p className="text-xl text-center">{deskripsi}</p>
            </div>
        </div>
    )
}