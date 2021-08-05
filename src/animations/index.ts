import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

const tl = gsap.timeline();

type PageAnimationFunc = (navbar: string, image: string, text: string, bottom: string) => void

export const pageAnimation: PageAnimationFunc = (navbar, image, text, bottom) => {
    tl.from(navbar, { x: '-100%', opacity: 0, ease: 'circ.in', duration: 1 }).to(navbar, { zIndex: 50 })
    tl.from(image, { xPercent: -100, opacity: 0, ease: 'bounce.out', duration: 1 })
    tl.from(text, textIntro())
    tl.from(bottom, { y: '-100%', opacity: 0, ease: 'bounce.in', duration: 1 })
}

export const textIntro = () => {
    return {
        xPercent: -20,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        scale: -1,
        ease: "back.out",
    };
};

//Open menu
export const menuShow = (elem1: string, elem2: string) => {
    gsap.from([elem1, elem2], {
        duration: 0.7,
        height: 0,
        transformOrigin: "right top",
        skewY: 2,
        ease: "power4.inOut",
        stagger: {
            amount: 0.2,
        },
    });
};
//Close menu
export const menuHide = (elem1: string, elem2: string) => {
    gsap.to([elem1, elem2], {
        duration: 0.8,
        height: 0,
        ease: "power4.inOut",
        stagger: {
            amount: 0.07,
        },
    });
};