import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'


const SectionOne = () => {
    const textRef = useRef(null)
    const sectionOneRef = useRef(null)
    gsap.registerPlugin(ScrollTrigger)
          useEffect(() => {
            let proxy = { skew: 0 },
            skewSetter = gsap.quickSetter(sectionOneRef.current, "skewY", "deg"),
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
            gsap.fromTo(sectionOneRef.current.children, { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power3.out", scrollTrigger: { trigger: sectionOneRef.current, start: "top 80%" } });

            }, []);

        useEffect(() => {
            gsap.fromTo(
            ".image",
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
                ease: "back.out(1.7)",
                scrollTrigger: {
                trigger: sectionOneRef.current,
                start: "top center",
                end: "bottom top",
                scrub: false,
                },
            }
            );
        }, []);

        //for arrows
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
                ease: "back.out(1.7)",
                scrollTrigger: {
                trigger: ".down-arrow",
                start: "top center",
                end: "bottom top",
                scrub: false,
                },
            }
            );
        }, []);
  return (
    <div ref={sectionOneRef}>
        <div className="flex lg:flex-row flex-col-reverse justify-between lg:w-[75vw] w-[90vw] mx-auto">
            <div className="lg:w-[50%] image">
                <Image src="/assets/coffee.png" height={700} width={700} alt="side-pane" />
            </div>
            <div ref={textRef} className="lg:w-[45%] flex flex-col items-center justify-center">
                <h2 className="lg:text-[42px] lg:mt-0 mt-4 lg:text-start text-center text-[32px] font-bold w-full">Begin each day with personalized recommendations.</h2>
                <span className="lg:mt-[5vh] mt-[2vh] lg:mb-0 mb-10">Each day you&apos;ll receive a selection of discounted titles, handpicked to match your reading taste.</span>
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

export default SectionOne
