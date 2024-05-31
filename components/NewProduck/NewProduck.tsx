import Image from "next/image"
import Button from "../buttonAddToCart"
import { IoStar, IoStarHalf } from "react-icons/io5";

interface Product {
    href: string,
    deskripsi: string
}

export default function NewProduck({ href, deskripsi }: Product) {
    return (
        <div className="flex items-center justify-center md:mx-10 my-10">
            <div className="flex flex-col items-start md:flex md:flex-row gap-5 md:justify-between lg:w-3/4  md:h-[456px] bg-[#12372A] md:rounded-tr-[60px] rounded-br-[60px] p-6">
                <div className="w-full md:w-2/5 h-[400px]">
                    <Image src={href} alt="aglonema" width={1000} height={1000} className={"object-cover h-full"} />
                </div>
                <div className="flex flex-col  justify-between md:w-3/5 h-full text-[#FBFADA]">
                    <h1 className="text-3xl mb-5">Aglaonema</h1>
                    <p className="max-w-[350px]">{deskripsi}</p>
                    <div className="flex gap-2 text-[#f2ed5b] text-2xl">
                        <IoStar className=" "/>
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStarHalf />
                    </div>
                    <h1 className="my-4">RP 35.000</h1>
                    <div>
                        <Button buttonName="Add to Cart" />
                    </div>
                </div>
            </div>
        </div>
    )
}