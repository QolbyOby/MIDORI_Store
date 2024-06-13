'use client'

import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
const Footer = dynamic(() => import("@/components/Fotter/Fotter"), {
    ssr: false
});


export default function Disable() {
    const disableFooter = ["/profile", "/auth/signin", "/auth/signup"];
    const pathname = usePathname();
    return (
        <>
            {!disableFooter.includes(pathname) && <Footer />}
        </>
    )
}