import React, { MouseEvent } from "react";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { useAnimate } from "framer-motion";
import { IconType } from "react-icons";
import { toast } from "sonner";


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

const Example = () => {
    return (
        <div className=" px-4 py-12">
            <div className="mx-auto max-w-7xl">
                <ClipPathLinks />
            </div>
        </div>
    );
};

const ClipPathLinks = () => {
    return (
        <div className="divide-y divide-neutral-900 border border-neutral-900">
            <div className="grid grid-cols-2 divide-x divide-neutral-900 ">
                <div onClick={handleadFc}>
                    <LinkBox Icon={FaSquareFacebook} />
                </div>
                <div onClick={handleadWa}>
                    <LinkBox Icon={FaSquareWhatsapp} />
                </div>
            </div>
            <div className="grid grid-cols-2 divide-x divide-neutral-900">
                <div onClick={handleadIg}>
                    <LinkBox Icon={FaInstagram} />
                </div>
                <div onClick={handleTw}>
                    <LinkBox Icon={FaSquareTwitter} />
                </div>
            </div>
        </div>
    );
};

const NO_CLIP = "polygon(0 0, 100% 0, 100% 100%, 0% 100%)";
const BOTTOM_RIGHT_CLIP = "polygon(0 0, 100% 0, 0 0, 0% 100%)";
const TOP_RIGHT_CLIP = "polygon(0 0, 0 100%, 100% 100%, 0% 100%)";
const BOTTOM_LEFT_CLIP = "polygon(100% 100%, 100% 0, 100% 100%, 0 100%)";
const TOP_LEFT_CLIP = "polygon(0 0, 100% 0, 100% 100%, 100% 0)";

type Side = "top" | "left" | "bottom" | "right";
type KeyframeMap = {
    [key in Side]: string[];
};

const ENTRANCE_KEYFRAMES: KeyframeMap = {
    left: [BOTTOM_RIGHT_CLIP, NO_CLIP],
    bottom: [BOTTOM_RIGHT_CLIP, NO_CLIP],
    top: [BOTTOM_RIGHT_CLIP, NO_CLIP],
    right: [TOP_LEFT_CLIP, NO_CLIP],
};

const EXIT_KEYFRAMES: KeyframeMap = {
    left: [NO_CLIP, TOP_RIGHT_CLIP],
    bottom: [NO_CLIP, TOP_RIGHT_CLIP],
    top: [NO_CLIP, TOP_RIGHT_CLIP],
    right: [NO_CLIP, BOTTOM_LEFT_CLIP],
};

const LinkBox = ({ Icon }: { Icon: IconType; }) => {
    const [scope, animate] = useAnimate();

    const getNearestSide = (e: MouseEvent) => {
        const box = (e.target as HTMLElement).getBoundingClientRect();

        const proximityToLeft = {
            proximity: Math.abs(box.left - e.clientX),
            side: "left" as Side,
        };
        const proximityToRight = {
            proximity: Math.abs(box.right - e.clientX),
            side: "right" as Side,
        };
        const proximityToTop = {
            proximity: Math.abs(box.top - e.clientY),
            side: "top" as Side,
        };
        const proximityToBottom = {
            proximity: Math.abs(box.bottom - e.clientY),
            side: "bottom" as Side,
        };

        const sortedProximity = [
            proximityToLeft,
            proximityToRight,
            proximityToTop,
            proximityToBottom,
        ].sort((a, b) => a.proximity - b.proximity);

        return sortedProximity[0].side;
    };

    const handleMouseEnter = (e: MouseEvent) => {
        const side = getNearestSide(e);

        animate(scope.current, {
            clipPath: ENTRANCE_KEYFRAMES[side],
        });
    };

    const handleMouseLeave = (e: MouseEvent) => {
        const side = getNearestSide(e);

        animate(scope.current, {
            clipPath: EXIT_KEYFRAMES[side],
        });
    };

    return (
        <a
            onMouseEnter={(e) => {
                handleMouseEnter(e);
            }}
            onMouseLeave={(e) => {
                handleMouseLeave(e);
            }}
            className="relative grid h-20 w-full place-content-center sm:h-28 md:h-36"
        >
            <Icon className="text-xl sm:text-3xl lg:text-4xl" />

            <div
                ref={scope}
                style={{
                    clipPath: BOTTOM_RIGHT_CLIP,
                }}
                className="absolute inset-0 grid place-content-center bg-[#12372A] text-white"
            >
                <Icon className="text-xl sm:text-3xl md:text-4xl" />
            </div>
        </a>
    );
};

export default Example;