"use client";

import produk from "../produk.json";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, selectCartItems } from "../../components/redux/cartSlice";
import { toast } from "sonner";
import Image from "next/image";
import { usePathname, useRouter } from 'next/navigation';
import { animatePageOut } from '../utils/animations';
import dynamic from "next/dynamic";
import Button from "@/components/buttonAddToCart";

const DynamicKatalogLink = dynamic(() => import("./katalogLink"), {
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

export default function Dimsum() {
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
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -10, opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {produk.flower.map((item: Product) => (
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
            />} href={`/produk/flower/${item.id}`}>

            </DynamicKatalogLink>
          </div>
          <div className="flex flex-col justify-center items-center my-6">
            <h1 className="text-2xl font-semibold text-[#FBFADA]">{item.nama}</h1>
            <h2 className="text-l text-[#FBFADA]">{item.harga}</h2>
          </div>
          <button onClick={() => handleAddToCart(item)} className="mb-6">
            <Button buttonName="Add To Cart" />
          </button>
        </div>
      ))}
    </motion.div>
  );
}
