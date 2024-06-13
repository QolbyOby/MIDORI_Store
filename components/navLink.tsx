import { usePathname, useRouter } from 'next/navigation';
import { animatePageOut } from '../app/utils/animations';
import { motion } from 'framer-motion';


interface Nav {
    nameValue?: string | React.ReactNode
    href: string
    className?: string
}

export default function NavLink({ nameValue, href, className }: Nav) {
    const pathname = usePathname();
    const router = useRouter();

    const HandleClik = () => {
        if (pathname != href)
            animatePageOut(href, router);

    }

    return (
            <div onClick={HandleClik} className={className}>{nameValue}</div>
    )
}
