"use client"

import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area";
import { useDispatch, useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";
import { decrementProduk, removeAllProduct, removeFromCart } from "../../components/redux/cartSlice";
import { incrementProduk } from "../../components/redux/cartSlice";
import { toast } from "sonner"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,

} from "@/components/ui/sheet"
import { database, getAddresses, saveCartToFirebase } from "../lib/firebase/service";
import { useSession } from "next-auth/react";
import convertPrice from "../katalog/convertPrice";
import { useEffect, useState } from "react";
import { off, onValue, ref } from "firebase/database";

interface Product {
  id: number;
  gambar: string;
  nama: string;
  harga: number;
  qty: number;
  totalProduk: number;
}



export default function Cart() {

  const { data: session }: { data: any } = useSession();
  const userId = session?.user?.id;

  const dispatch = useDispatch();
  const cartItems = useSelector((state: any) => state.cart.items);
  const [addresses, setAddresses] = useState<any[]>([]);
  console.log(addresses);
  const [selectedAddress, setSelectedAddress] = useState<string>("");

  useEffect(() => {
    if (!userId) return;

    const addressesRef = ref(database, 'addresses');

    const handleData = (snapshot: any) => {
      const addressesData = snapshot.val();
      const userAddresses = Object.entries(addressesData || {}).filter(
        ([key, address]: [string, any]) => address.userId === userId
      ).map(([key, address]: [string, any]) => ({ id: key, ...address }));
      setAddresses(userAddresses);
    };

    onValue(addressesRef, handleData);

    return () => {
      off(addressesRef, 'value', handleData);
    };
  }, [userId, database]);

  const handleRemoveFromCart = (id: number) => {
    dispatch(removeFromCart(id));
  };

  const handleIncrement = (id: number) => {
    dispatch(incrementProduk(id));
  };

  const handleDecrement = (id: number) => {
    dispatch(decrementProduk(id));
    console.log('nilai berkurang')
  };

  const totalharga: any = cartItems.reduce((total: any, item: any) => total + item.totalProduk, 0)

  const handleCheckout = async () => {

    if (!userId) {
      return toast.error("Anda harus login terlebih dahulu");
    }

    if (!selectedAddress) {
      return toast.error("Anda harus memilih alamat terlebih dahulu");
    }

    if (cartItems.length === 0) {
      return toast.error("Anda harus memilih produk terlebih dahulu");
    }

    try {
      const namaProduk = cartItems.map((item: any) => item.nama);
      const hargaProduk = cartItems.map((item: any) => item.totalProduk);
      const gambarProduk = cartItems.map((item: any) => item.gambar);
      const response = await saveCartToFirebase(userId, namaProduk, totalharga, hargaProduk, gambarProduk);
      if (response.status) {
        dispatch(removeAllProduct());
        return toast.success(response.message);
      } else {
        return toast.error(response.message);
      }
    } catch (error) {
      console.log("Error in checkout:", error);
    }
  };



  return (

    <Sheet>
      <SheetTrigger asChild>
        <FaShoppingCart className="text-2xl cursor-pointer text-white" />
      </SheetTrigger>
      <SheetContent className="bg-[#ADBC9F]">
        <SheetHeader>
          <SheetTitle>Shopping Cart</SheetTitle>
          <SheetDescription className="text-black">
            <Select value={selectedAddress} onValueChange={setSelectedAddress}>
              <SelectTrigger className="w-[180px] bg-[#12372A] text-[#F7F6BB]">
                <SelectValue placeholder="Select a Address"/>
              </SelectTrigger>
              <SelectContent>
                <SelectGroup >
                  <SelectLabel>Address</SelectLabel>
                  {addresses.map((address: any) => (
                    <SelectItem key={address.id} value={address.address} onClick={() => setSelectedAddress(address.address)}>
                      {address.address}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </SheetDescription>
        </SheetHeader>
        <ScrollArea className="w-[337px] rounded-md border p-4 my-4">
          <div>
            {cartItems.length === 0 ? (
              <div className="flex justify-center items-center h-[600px] ">
                <p className="">Empty cart</p>
              </div>
            ) : (
              <div>
                <ul>
                  {cartItems.map((item: Product) => (
                    <li key={item.id} className="flex justify-center items-center mb-4">
                      <div className="w-4/5">
                        <img src={item.gambar} alt={item.nama} className="w-max " />
                        <p className="my-2">{item.nama} - {convertPrice(item.totalProduk)}</p>
                        <div className="flex gap-2 mb-2">
                          <button onClick={() => handleDecrement(item.id)} className="bg-[#fbfada] hover:bg-[#12372A] hover:text-[#fbfada] text-[#12372A] font-bold px-2 py-1 rounded">-</button>
                          <span>{item.qty}</span>
                          <button onClick={() => handleIncrement(item.id)} className="bg-[#fbfada] hover:bg-[#12372A] hover:text-[#fbfada] text-[#12372A] font-bold px-2 py-1 rounded">+</button>
                        </div>
                        <button onClick={() => handleRemoveFromCart(item.id)} className="bg-[#fbfada] hover:bg-[#12372A] hover:text-[#fbfada] text-[#12372A] font-bold py-2 px-4 rounded">Hapus</button>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </ScrollArea>

        <SheetFooter >
          <SheetClose asChild className="mr-10">
            <p>Total Shopping : {convertPrice(totalharga)}</p>
          </SheetClose>
          <SheetClose asChild>
            <button type="submit" onClick={handleCheckout} className="bg-[#fbfada] hover:bg-[#12372A] hover:text-[#fbfada] text-[#12372A] font-bold py-2 px-4 rounded transition duration-500">Order Now</button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
