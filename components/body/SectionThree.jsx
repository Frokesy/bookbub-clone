import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import Image from 'next/image'


const SectionThree = () => {
    const textRef = useRef(null)
    const sectionRef = useRef(null)
    gsap.registerPlugin(ScrollTrigger)
          useEffect(() => {
            let proxy = { skew: 0 },
            skewSetter = gsap.quickSetter(sectionRef.current, "skewY", "deg"),
            clamp = gsap.utils.clamp(-20, 20);
            ScrollTrigger.create({
                onUpdate: (self) => {
                    let skew = clamp(self.getVelocity() / -300);
                    if (Math.abs(skew) > Math.abs(proxy.skew)) {
                        proxy.skew = skew;
                        gsap.to(proxy, {
                            skew: 0,
                            duration: 0.8,
                            ease: "power3",
                            overwrite: true,
                            onUpdate: () => skewSetter(proxy.skew)
                        });
                    }
                }
            });
            gsap.fromTo(sectionRef.current.children, { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power3.out", scrollTrigger: { trigger: sectionRef.current, start: "top 80%" } });

            }, []);

        useEffect(() => {
            gsap.fromTo(
            ".right-arrow",
            {
                opacity: 0,
                scale: 0.2,
                y: -20,
            },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 2,
                ease: "easeInOut",
                scrollTrigger: {
                trigger: textRef.current,
                start: "top center",
                end: "bottom top",
                scrub: true,
                },
            }
            );
        }, []);

        useEffect(() => {
            gsap.fromTo(
            ".down-arrow",
            {
                opacity: 0,
                scale: 0.2,
                y: -20,
            },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 2,
                ease: "easeInOut",
                scrollTrigger: {
                trigger: textRef.current,
                start: "top center",
                end: "bottom top",
                scrub: false,
                },
            }
            );
        }, []);
  return (
    <div ref={sectionRef}>
        <div className="flex lg:flex-row flex-col-reverse justify-between lg:w-[75vw] w-[90vw] mx-auto">
            <div className="lg:w-[50%]">
                <Image src="/assets/kindle-ice-tea_2x.png" height={700} width={700} alt="kindle-ice-tea_2x" />
            </div>
            <div ref={textRef} className="lg:w-[45%] flex flex-col items-center justify-center">
                <h2 className="lg:text-[42px] lg:mt-0 mt-4 lg:text-start text-center text-[32px] font-bold w-full">Read at your leisure, on your favorite device.</h2>
                <span className="lg:mt-[5vh] mt-[2vh] lg:mb-0 mb-10">Deals available at all major retailers. Read on your phone, tablet, Kindle, or other preferred device - it&apos;s easy!</span>
                <div className="grid grid-cols-3 gap-x-10 gap-y-4 mt-6 items-center">
                    <img src="/assets/apple.png" alt="apple" />
                    <img src="/assets/google-play.png"  alt="kindle" />
                    <div></div>
                    <img src="/assets/kindle_logo.png" alt="nook" />
                    <img src="/assets/rakuten_kobo_logo.png" alt="kobo" />
                    <img src="/assets/nook_logo.png" className="w-[5rem]" alt="google" />
                </div>
            </div>
        </div>
        <div className="lg:flex hidden right-arrow items-center justify-center">
            <Image src="/assets/right-arrow.png" height={150} width={150} alt="right-arrow" />
        </div>
        <div className="lg:hidden flex down-arrow items-center justify-center my-10">
            <Image src="/assets/down-arrow.png" height={100} width={100} alt="right-arrow" />
        </div>
    </div>
  )
}

export default SectionThree
