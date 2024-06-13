'use client'

import produk from '../../../produk.json'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, selectCartItems } from '../../../../components/redux/cartSlice';
import { toast } from "sonner"
import { decrementProduk, incrementProduk } from "../../../../components/redux/cartSlice";
import { removeFromCart } from "../../../../components/redux/cartSlice";
import { useState } from 'react';
import Button from '@/components/buttonAddToCart';
import Image from 'next/image';
import convertPrice from '@/app/katalog/convertPrice';

interface Product {
    id: number;
    gambar: string;
    nama: string;
    harga: number;
    qty: number;
    totalProduk: number;
    deskripsi: string;
}

export default function ProdukDetailPage({ params: { id } }: any) {
    const produc: any = produk.Plant.find((item: Product) => item.id == id)

    const dispatch = useDispatch();
    const cartItems = useSelector((state: any) => state.cart.items);
    const [quantity, setQuantity] = useState(1);

    const handleAddToCart = (produk: Product) => {
        const newProduk = { ...produk };
        newProduk.qty = quantity;
        newProduk.totalProduk = newProduk.harga * quantity;

        // Cek apakah produk sudah ada di keranjang
        const existingProduct = cartItems.find((item: Product) => item.id === newProduk.id);

        if (existingProduct) {
            // Jika produk sudah ada, update jumlahnya
            dispatch(incrementProduk(newProduk.id));
        } else {
            // Jika tidak, tambahkan produk baru
            dispatch(addToCart(newProduk));
        }

        toast.success("Produk ditambahkan ke keranjang");
    };

    const handleIncrement = (id: number) => {
        setQuantity(quantity + 1);
        dispatch(incrementProduk(id));
    };

    const handleDecrement = (id: number) => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
            dispatch(decrementProduk(id));
        }
    };


    return (
        <div className='flex flex-col xl:flex-row items-center justify-around pt-36 xl:pt-16 px-14 xl:px-28 h-[1000px] xl:h-[800px] mb-36'>
            <div className='w-[570px] flex justify-center h-[570px]'>
                <Image src={produc?.gambar} alt={produc?.nama} width={570} height={570} className='rounded-tl-[50px] xl:rounded-tl-[100px] rounded-br-[50px] xl:rounded-br-[100px] shadow-2xl object-cover' />
            </div>
            <div className='text-center mt-20 xl:mt-0 xl:text-start xl:w-[500px]'>
                <h1 className='font-bold text-7xl'>{produc?.nama}</h1>
                <p className='my-6'>{produc?.deskripsi}</p>
                <hr className='mb-5 h-1 bg-slate-600' />
                <div className="flex  mb-2 items-center justify-between">
                    <div className='flex items-center'>
                        <div className='flex flex-col items-center gap-3'>
                            <div>
                                <h1 className='text-2xl'>Quantity</h1>
                            </div>
                            <div className='flex items-center '>
                                <button onClick={() => handleDecrement(produc?.id)}>
                                    <a
                                        className="group relative inline-block overflow-hidden border border-[#436850] bg-[#436850] px-5 py-2 focus:outline-none focus:ring"
                                    >
                                        <span
                                            className="absolute inset-x-0 bottom-0 h-[2px] bg-[#ADBC9F] transition-all duration-500 group-hover:h-full group-active:bg-[#FF0000]"
                                        ></span>

                                        <span
                                            className="relative text-sm font-medium text-[#FBFADA]  transition-colors group-hover:text-white"
                                        >
                                            -
                                        </span>
                                    </a>
                                </button>
                                <span className='text-xl  px-3 mb-1 h-full'>{quantity}</span>
                                <button onClick={() => handleIncrement(produc?.id)}>
                                    <a
                                        className="group relative inline-block overflow-hidden border border-[#436850] bg-[#436850] px-5 py-2 focus:outline-none focus:ring"
                                    >
                                        <span
                                            className="absolute inset-x-0 bottom-0 h-[2px] bg-[#ADBC9F] transition-all duration-500 group-hover:h-full group-active:bg-[#FF0000]"
                                        ></span>

                                        <span
                                            className="relative text-sm font-medium text-[#FBFADA] transition-colors group-hover:text-white"
                                        >
                                            +
                                        </span>
                                    </a>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-3 items-center'>
                        <h1 className='text-2xl'>Price</h1>
                        <p className='text-3xl mb-5'>{convertPrice(produc?.harga)}</p>
                    </div>
                </div>
                <button onClick={() => handleAddToCart(produc)} className='mb-6 w-full '>
                    <a className="group relative inline-block w-full overflow-hidden border border-[#436850] bg-[#436850] px-8 py-3 focus:outline-none focus:ring">
                        <span className="absolute inset-x-0 bottom-0 h-[2px] bg-[#ADBC9F] transition-all duration-500 group-hover:h-full group-active:bg-[#FF0000]"></span>
                        <span className="relative text-sm font-medium text-[#FBFADA] transition-colors group-hover:text-white">
                            Add To Cart
                        </span>
                    </a>
                </button>
            </div>
        </div>
    )
}        