import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import Image from 'next/image'

const SectionFour = () => {
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

  return (
    <div ref={sectionRef}>
        <div className="flex lg:flex-row-reverse flex-col-reverse justify-between lg:w-[75vw] w-[90vw] mx-auto">
            <div className="lg:w-[50%] image">
                <Image src="/assets/author-alerts_2x.png" height={700} width={700} alt="side-pane" />
            </div>
            <div ref={textRef} className="lg:w-[45%] flex flex-col items-center justify-center">
                <h2 className="lg:text-[42px] lg:mt-0 mt-4 lg:text-start text-center text-[32px] font-bold w-full">Stay updated on all your favorites, old and new.</h2>
                <span className="lg:mt-[5vh] mt-[2vh] lg:mb-0 mb-10">We&apos;ll notify you when a book you want is on sale, or an author you love has a deal or a new release.</span>
            </div>
        </div>
    </div>
  )
}

export default SectionFour
