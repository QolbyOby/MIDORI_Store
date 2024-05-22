import { usePathname, useRouter } from 'next/navigation';
import { animatePageOut } from '../utils/animations';
import { motion } from 'framer-motion';


interface Nav {
    nameValue: React.ReactNode
    href: string
}

export default function KatalogLink({ nameValue, href,}: Nav) {
    const pathname = usePathname();
    const router = useRouter();

    const HandleClik = () => {
        if (pathname != href)
            animatePageOut(href, router);

    }

    return (
            <a onClick={HandleClik}>{nameValue}</a>
    )
}