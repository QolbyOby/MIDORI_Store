'use client'
import { signIn } from "next-auth/react";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {

    const { push } = useRouter();
    const [error, setError] = useState('');

    const handleSubmit = async (event: any) => {
        event.preventDefault();
        setError('');
        try {
            const res = await signIn("credentials", {
                redirect: false,
                email: event.target.email.value,
                password: event.target.password.value,
                callbackUrl: "/katalog",
            })
            if (!res?.error) {
                push("/katalog")
            } else {
                setError('Email atau Password salah');
            }
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <>
            <div className="min-h-screen  flex items-center justify-center px-4 lg:px-0">
                <div className="relative w-1/2 h-screen hidden xl:block">
                    <div className="absolute w-full h-full -z-10">
                        <Image src={"/asset/bg-left.png"} width={1000} height={1000} alt="gambar" className="object-cover w-full h-full" />
                    </div>
                    <div className="flex items-center justify-center flex-col z-20 text-white h-full">
                        <h1 className="font-bold text-3xl ">MIDORI 緑</h1>
                        <div className="my-10">
                            <Image src={"/asset/logo2.png"} width={500} height={500} alt="logo" className="object-cover w-96" />
                        </div>
                        <h1 className="text-center">Online stores that sell ornamental <br />plants and flowers  </h1>
                        <p>By Midori Store</p>
                    </div>
                </div>
                <div className="w-1/2 h-screen flex justify-center items-center flex-col">
                    <div className="text-center mb-6">
                        <h1 className="text-3xl font-extralight">
                            Welcome back to the <br />
                            Midori Store
                        </h1>
                    </div>
                    <div className="w-auto h-auto">
                        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md  bg- space-y-8">
                            <h2 className="text-2xl font-bold text-center text-gray-900">Login</h2>
                            <form className="mt-8 space-y-6" onSubmit={(event) => handleSubmit(event)}>
                                <div className="rounded-md shadow-sm -space-y-px">
                                    <div className="mb-4">
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                                        <input type="email" id="email" name="email" autoComplete="email" required className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                                        <input type="password" id="password" name="password" autoComplete="new-password" required className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                                    </div>
                                </div>
                                <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                    Login
                                </button>
                                <div className="flex justify-center">
                                    <h1>don't have an account yet <a href="/auth/signup" className='text-blue-500'>Sign Up</a></h1>
                                </div>
                            </form>
                        </div>
                        {error !== '' && <h1 className='text-red-500 text-center mt-5'>{error}</h1>}
                    </div>
                </div>
            </div>
        </>
    )
}