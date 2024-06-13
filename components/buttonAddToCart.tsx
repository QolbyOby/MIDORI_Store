
export default function Button({buttonName} : {buttonName: string} ) {
    return (
        <a className="group relative inline-block overflow-hidden border border-[#436850] bg-[#436850] px-8 py-3 focus:outline-none focus:ring">
            <span className="absolute inset-x-0 bottom-0 h-[2px] bg-[#ADBC9F] transition-all duration-500 group-hover:h-full group-active:bg-[#FF0000]"></span>
            <span className="relative text-sm font-medium text-[#FBFADA] transition-colors group-hover:text-white">
                {buttonName}
            </span>
        </a>
    )
}