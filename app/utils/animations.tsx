import gsap from 'gsap'
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime'
import Link from 'next/link'

export const animatePageIn = () => {
    const banners = document.querySelectorAll('.banner');

    if (banners.length === 4) {
        const tl = gsap.timeline();

        tl.set(banners, {
            yPercent: 0,
        }).to(banners, {
            yPercent: 100,
            stagger: 0.2,
        });
    }
}

export const animatePageOut = (href: string, router: AppRouterInstance) => {
    const banners = document.querySelectorAll('.banner');

    if (banners.length === 4) {
        const tl = gsap.timeline();

        tl.set(banners, {
            yPercent: -100,
        }).to(banners, {
            yPercent: 0,
            stagger: 0.2,
            onComplete: () => {
                router.push(href);
            }
        });
    }
}