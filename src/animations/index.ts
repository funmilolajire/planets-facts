import gsap from 'gsap';

const tl = gsap.timeline();

type PageAnimationFunc = (navbar: string, image: string, text: string, bottom: string) => void

export const pageAnimation: PageAnimationFunc = (navbar, image, text, bottom) => {
    tl.from(navbar, { x: '-100%', opacity: 0, ease: 'circ.in', duration: 1 }).to(navbar, { zIndex: 50 })
    tl.from(image, { xPercent: -100, opacity: 0, ease: 'bounce.out', duration: 1 })
    tl.from(text, { xPercent: -20, opacity: 0, stagger: 0.2, duration: 1, scale: -1, ease: "back.out" })
    tl.from(bottom, { y: '-100%', opacity: 0, ease: 'bounce.in', duration: 1 })
}

//Open menu
export const menuShow = (elem: string) => {
    gsap.from(elem, {
        duration: 0.7,
        xPercent: 100,
        ease: "power4.inOut",
        opacity: 0
    });
};
//Close menu
export const menuHide = (elem: string) => {
    gsap.to(elem, {
        duration: 0.8,
        xPercent: 100,
        opacity: 0,
        ease: "power4.inOut",
    });
};