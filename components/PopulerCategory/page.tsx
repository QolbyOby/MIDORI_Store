import Image from "next/image";
import Link from "next/link";
import NavLink from "../navLink";

export default function PopulerCategory({href, name}: {href: string, name: string}) {
  return (
    <div className="flex flex-col items-center gap-16">
      <div className="h-[300px] w-[400px] xl:w-[600px] xl:h-[400px] rounded-full overflow-hidden">
        <Image
          src={href}
          alt="background"
          width={1920}
          height={1080}
          className="w-full h-full object-cover rounded-full hover:scale-110 transition duration-300"
        />
      </div>
      <NavLink
        nameValue={<h1 className="text-xl font-medium">{name}</h1>}
        href={"/katalog"}
        className={
          "bg-[#FBFADA] w-[190px] text-center py-3 px-4 rounded-3xl cursor-pointer hover:bg-[#1A4D2E] hover:text-[#FBFADA] transition duration-300"
        }
      />
    </div>
  );
}
