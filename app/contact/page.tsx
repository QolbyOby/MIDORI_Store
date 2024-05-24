'use client'

import { FaInstagram } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import dynamic from "next/dynamic";
import { toast } from "sonner";
import SosialMedia from "@/components/SosialMedia/SosialMedia"

const ButtonSubmit = dynamic(() => import("@/components/buttonAddToCart"), { ssr: false });
const Map = dynamic(() => import("@/components/Maps/Map"), { ssr: false });

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
        <Map />
        <div className="w-full">
          <SosialMedia />
        </div>
      </div>
    </div>
  );
}

