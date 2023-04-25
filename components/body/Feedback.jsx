import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import FiveStars from '../Star'

const Feedback = ({comment, user, address}) => {
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
            <div ref={sectionRef} className="flex flex-col space-y-6 lg:w-[30%] lg:px-0 px-4 lg:pt-0 pt-10 items-center text-center">
                <FiveStars />
                <span className="text-[18px]">{'"'}{comment}{'"'}</span>
                <div className="text-center flex flex-col">
                    <span className="text-[14px]">{user}</span>
                    <span className="font-semibold uppercase text-[13px]">{address}</span>
                </div>
            </div>
  )
}

export default Feedback
