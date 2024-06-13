'use client'

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { ref, onValue, off } from "firebase/database";
import { database, deleteAddress } from "@/app/lib/firebase/service";
import convertPrice from "../katalog/convertPrice";
import { addAddress } from "@/app/lib/firebase/service";

const OrdersPage = () => {
    const { data: session }: { data: any } = useSession();
    console.log(session);
    const [orders, setOrders] = useState<any[]>([]);
    const [addresses, setAddresses] = useState<string[]>([]);
    console.log(addresses);
    const userId = session?.user?.id;


    useEffect(() => {
        if (!userId) return;

        const ordersRef = ref(database, 'orders');

        const handleData = (snapshot: any) => {
            const ordersData = snapshot.val();
            console.log("Orders data from Firebase:", ordersData);
            const userOrders = Object.values(ordersData || {}).filter(
                (order: any) => order.userId === userId
            );
            console.log("User orders:", userOrders);
            setOrders(userOrders);
        };

        onValue(ordersRef, handleData);

        // Cleanup function to avoid multiple subscriptions
        return () => {
            off(ordersRef, 'value', handleData);
        };
    }, [userId]);

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

    const handleAddAddress = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const address = event.currentTarget.addres.value;
        console.log(address)
        const result = await addAddress(userId, address);
        console.log(result.message);
    };

    const handleDeleteAddress = async (addressId: string) => {
        const result = await deleteAddress(addressId);
        console.log(result);
    };

    if (status === "loading") {
        return <p>Loading...</p>;
    }

    if (!session) {
        return <p>Please log in to view your orders.</p>;
    }


    return (
        <div className="mb-[300px] mt-[200px] flex flex-col justify-center items-center">
            <div className="bg-[#12372A] text-white p-10  xl:w-[600px] rounded-tl-[50px] rounded-br-[50px]">
                <h1 className="text-2xl font-semibold text-center">Hello {session?.user?.username.toUpperCase()}</h1>
                <form onSubmit={handleAddAddress} className="mt-4 flex flex-col">
                    <label htmlFor="text">Add Address</label>
                    <div>
                        <input type="text" id="addres" name="addres" autoComplete="addres" required className="text-black  px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm w-[300px]" />
                        <button type="submit" className=" text-white px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm lg:ml-5 mt-5 lg:mt-0">Add</button>
                    </div>
                </form>
                <div>
                    <h2 className="mt-5">Your Addresses:</h2>
                    {addresses.length === 0 ? (
                        <p>No addresses found.</p>
                    ) : (
                        <ul>
                            {addresses.map((address: any) => (
                                <li key={address.id}>
                                    {address.address}
                                    <button onClick={() => handleDeleteAddress(address.id)} className="text-white px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm ml-5">Delete</button>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
            <h1>Your Orders</h1>
            {orders.length === 0 ? (
                <p>No orders found.</p>
            ) : (
                <ul>
                    {orders.map((order, index) => (
                        <div key={index} className="my-4">
                            <h2>Order placed on: {new Date(order.timestamp).toLocaleString()}</h2>
                            <div className="bg-[#12372A] text-white p-4 w-[300px] xl:w-[500px] flex flex-col gap-6 items-start">
                                {order.nama && order.nama.map((productName: string, i: number) => (
                                    <div key={i} className="flex ">
                                        <div className="">
                                            <img src={order.gambarProduk[i]} alt={productName} className="h-28 w-28 mr-10" />
                                        </div>
                                        <div className="flex flex-col justify-center">
                                            <div>
                                                {productName}
                                            </div>
                                            <div>
                                                {convertPrice(order.hargaProduk[i])}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <p>Total: {convertPrice(order.total)}</p>
                        </div>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default OrdersPage;
