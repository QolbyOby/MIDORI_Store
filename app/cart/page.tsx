"use client"

import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area";
import { useDispatch, useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";
import { decrementProduk, removeAllProduct, removeFromCart } from "../../components/redux/cartSlice";
import { incrementProduk } from "../../components/redux/cartSlice";
import { toast } from "sonner"

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

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

interface Product {
  id: number;
  gambar: string;
  nama: string;
  harga: number;
  qty: number;
  totalProduk: number;
}

export default function Cart() {

  const dispatch = useDispatch();
  const cartItems = useSelector((state: any) => state.cart.items);

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

  
  const handleCheckout = () => {
    const promise = () => new Promise((resolve) => setTimeout(() => resolve({ name: 'pesanan' }), 2000));

    if(cartItems.length === 0) {
      toast.error('Keranjang belanja masih kosong, silahkan tambahkan produk ke keranjang');
      return
    }

    toast.promise(promise, {
      loading: 'Diproses...',
      success: (data: any) => {
        return `${data.name} telah dibuat`;
      },
      error: 'Error',
    });

    dispatch(removeAllProduct());
    
    return (
    <Drawer>
      <DrawerContent>
        <DrawerHeader>  
        <DrawerTitle>Are you absolutely sure?</DrawerTitle>
      <DrawerDescription>This action cannot be undone.</DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
        <Button>Submit</Button>
      <DrawerClose>
        <Button variant="outline">Cancel</Button>
      </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
    )

  };


  return (
    
    <Sheet>
      <SheetTrigger asChild>
        <FaShoppingCart className="text-2xl cursor-pointer text-black dark:text-white"/>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Shopping Cart</SheetTitle>
          <SheetDescription>
          Basket contents
          </SheetDescription>
        </SheetHeader>
      <ScrollArea className="h-4/5 w-[350px] rounded-md border p-4 my-4">
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
                  <img src={item.gambar} alt={item.nama} className="w-max "/>
                  <p className="my-2">{item.nama} - Rp{item.totalProduk}</p>
                  <div className="flex gap-2 mb-2">
                    <button onClick={() => handleDecrement(item.id) }  className="bg-[#3D0000] hover:bg-blue-700 text-white font-bold px-2 py-1 rounded">-</button>
                    <span>{item.qty}</span>
                    <button onClick={() => handleIncrement(item.id)} className="bg-[#3D0000] hover:bg-blue-700 text-white font-bold px-2 py-1 rounded">+</button>
                  </div>
                  <button onClick={() => handleRemoveFromCart(item.id)} className="bg-[#3D0000] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Hapus</button>
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
            <p>Total Shopping : {cartItems.reduce((total: any, item: any) => total + item.totalProduk, 0)}</p>
          </SheetClose>
          <SheetClose asChild>
            <Button type="submit" onClick={handleCheckout}>Order Now</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
