import NavLink from "./navLink";

export default function ButtonRounded({ buttonName }: { buttonName: string}) {
  return (
    
    <a className="group relative inline-block cursor-pointer text-center rounded-full h-[150px] w-[150px] overflow-hidden border-4 border-[#FBFADA]  px-9 py-14 focus:outline-none focus:ring hover:">
      <span className="absolute inset-x-0 rounded-full bottom-0 h-[0px] bg-[#436850] transition-all duration-500 group-hover:h-full group-active:bg-[#FF0000]"></span>

      <span className="relative text-sm font-medium text-[#FBFADA] transition-colors group-hover:text-white">
        {buttonName}
      </span>
    </a>
  )
}