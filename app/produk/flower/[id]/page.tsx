'use client'

import produk from '../../../produk.json'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, selectCartItems } from '../../../../components/redux/cartSlice';
import { toast } from "sonner"
import { decrementProduk, incrementProduk } from "../../../../components/redux/cartSlice";
import { removeFromCart } from "../../../../components/redux/cartSlice";
import { useState } from 'react';
import Button from '@/components/buttonAddToCart';

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
    const produc: any = produk.flower.find((item: Product) => item.id == id)

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
        <div className='flex items-center justify-center pt-16 px-8 h-screen gap-8'>
            <div className='w-1/2 bg-slate-600 flex justify-center h-[700px] '>
                <img src={produc?.gambar} alt={produc?.nama} className='shadow-2xl w-full h-full object-cover' />
            </div>
            <div className='w-1/2'>
                <h1 className='font-bold text-7xl'>{produc?.nama}</h1>
                <p className='my-6'>{produc?.deskripsi}</p>
                <hr className='mb-5 h-1 bg-slate-600' />
                <p className='text-3xl mb-5'>Rp. {produc?.harga}</p>
                <div className="flex  mb-2 items-center">
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

                <button onClick={() => handleAddToCart(produc)} className='mb-6'>
                    <Button buttonName='Add To Cart'/>
                </button>

            </div>
        </div>
    )
}        