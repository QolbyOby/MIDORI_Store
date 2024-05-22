'use client'

import { FaInstagram } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import dynamic from "next/dynamic";
import { toast } from "sonner";

const ButtonSubmit = dynamic(() => import("@/components/buttonAddToCart"), { ssr: false });

export default function Home() {


  const handleadIg = () => {
    window.open("https://www.instagram.com/ourgreenpeace._/", "_blank")
  }

  const handleadWa = () => {
    window.open("https://wa.me/+6287730821690", "_blank")
  }

  const handleadFc = () => {
    toast.error("Belum Punya Facebook 😊");
  }

  const handleTw = () => {
    toast.error("Belum Punya Twitter 😊")
  }

  const handleEmail = () => {
    toast.success("Terima kasih, Pesan Berhasil Terkirim😊")
  }  


  return (
    <div>
      <div className="flex flex-col items-center justify-center mt-36">
        <div>
          <h1 className="text-8xl font-bold">CONTACT PAGE</h1>
        </div>
        <div className="flex justify-center items-center flex-col mb-10 mt-10">
          <FaLocationDot className="text-5xl" />
          <h1 className="text-4xl font-medium text-center">Getaskerep Village, <br />RT 07 RW 02, Talang District, Tegal Regency</h1>
        </div>
        <div className="flex ">
          <div className="border-2 border-black w-[300px] rounded-xl flex flex-col justify-center gap items-center">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3 cursor-pointer" onClick={handleadIg}>
                <FaInstagram className="text-4xl" />
                <h1>ourgreenpeace._</h1>
              </div>
              <div className="flex items-center gap-3 cursor-pointer" onClick={handleTw}>
                <FaSquareFacebook className="text-4xl" />
                <h1>Midori</h1>
              </div>
              <div className="flex items-center gap-3 cursor-pointer" onClick={handleadWa}>
                <FaSquareWhatsapp className="text-4xl" />
                <h1>087730821690</h1>
              </div>
              <div className="flex items-center gap-3 cursor-pointer" onClick={handleadFc}>
                <FaSquareTwitter className="text-4xl" />
                <h1>Midori</h1>
              </div>
            </div>
          </div>
          <div>
            <form className="p-6 flex flex-col justify-center border-2 border-black rounded-xl ml-5">
              <div className="flex flex-col">
                <label htmlFor="name" className="hidden">Full Name</label>
                <input type="name" name="name" id="name" placeholder="Full Name" className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none" />
              </div>

              <div className="flex flex-col mt-2">
                <label htmlFor="email" className="hidden">Email</label>
                <input type="email" name="email" id="email" placeholder="Email" className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none" />
              </div>

              <div className="flex flex-col mt-2">
                <label htmlFor="tel" className="hidden">Number</label>
                <input type="tel" name="tel" id="tel" placeholder="Telephone Number" className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none" />
              </div>

              <button className="py-3 px-6 mt-3" onClick={handleEmail}>
                <ButtonSubmit buttonName="Submit"/>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

