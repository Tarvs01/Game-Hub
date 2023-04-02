import React from 'react'
import { useState, useEffect } from "react"
import HeroSlider from 'hero-slider/dist/HeroSlider'
import { Slide } from 'hero-slider';

const hero1 = "../images/hero1.jpg";
const hero2 = "../images/hero2.jpg";
const hero3 = "../images/hero3.jpg";
const hero4 = "../images/hero4.jpg";

function ZoomSlider() {

    const [size, setSize] = useState(window.innerWidth);

    const checkSize = () => {
        setSize(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener('resize', checkSize);
        return () => {
            window.removeEventListener('resize', checkSize);
        };
    }, []);

    return (
        <HeroSlider
            orientation="horizontal"
            height={size > 700 ? "70vh" : "50vh"}

            controller={{
                slidingDuration: 3000,
                slidingDelay: 500,
            }}

            animations={{
                slidingAnimation: "fade",
                sliderFadeInDuration: 100
            }}

            autoplay={{
                autoplayDuration: 5000,
                autoplayDebounce: 400
            }}

            manager={{
                isMobile: true
            }}
        >
            <Slide background={{ backgroundImageSrc: hero1, backgroundAnimation: "fade" }} />
            <Slide background={{ backgroundImageSrc: hero2, backgroundAnimation: "fade" }} />
            <Slide background={{ backgroundImageSrc: hero3, backgroundAnimation: "fade" }} />
            <Slide background={{ backgroundImageSrc: hero4, backgroundAnimation: "fade" }} />

        </HeroSlider>
    )
}

export default ZoomSlider