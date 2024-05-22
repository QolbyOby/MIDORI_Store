import Card from "./Card";
import { animate, motion, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";
import useMeasure from "react-use-measure";
import { Image } from "lucide-react";

export default function Slider() {
    const images = [
        
        "/asset/slider1.jpeg",
        "/asset/slider2.jpeg",
        "/asset/slider3.jpeg",
        "/asset/slider4.jpeg",
        "/asset/slider5.jpeg",
        "/asset/slider6.jpeg",
        "/asset/slider7.jpeg",
    ];

    <div>
        {images.map((images, index) => (
            <div key={index}>
                <Image src={image} alt="slider" weight={300} height={3000}/>
            </div>
        ))}
    </div>

}