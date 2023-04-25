import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import Image from 'next/image'

const SectionTwo = () => {
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
            ".left-arrow",
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
        <div className="flex lg:flex-row-reverse flex-col-reverse justify-between lg:w-[75vw] w-[90vw] mx-auto">
            <div className="lg:w-[50%] image">
                <Image src="/assets/ipad-library_2x.jpeg" height={700} width={700} alt="side-pane" />
            </div>
            <div ref={textRef} className="lg:w-[45%] flex flex-col items-center justify-center">
                <h2 className="lg:text-[42px] lg:mt-0 mt-4 lg:text-start text-center text-[32px] font-bold w-full">Discover new books & authors at great prices.</h2>
                <span className="lg:mt-[5vh] mt-[2vh] lg:mb-0 mb-10">With <span className="font-bold">{" "} discounts up to 95% off {" "}</span> and free ebooks daily, you&apos;ll enjoy hours of reading for less.</span>
            </div>
        </div>
        <div className="lg:flex hidden left-arrow items-center justify-center">
            <Image src="/assets/left-arrow.jpeg" height={150} width={150} alt="left-arrow" />
        </div>
        <div className="lg:hidden flex down-arrow items-center justify-center my-10">
            <Image src="/assets/down-arrow.png" height={100} width={100} alt="right-arrow" />
        </div>
    </div>
  )
}

export default SectionTwo
