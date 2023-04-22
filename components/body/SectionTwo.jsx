import React from 'react'
import Image from 'next/image'

const SectionTwo = () => {
  return (
    <div>
        <div className="flex lg:flex-row-reverse flex-col-reverse justify-between lg:w-[75vw] w-[90vw] mx-auto">
            <div className="lg:w-[50%]">
                <Image src="/assets/ipad-library_2x.jpeg" height={700} width={700} alt="side-pane" />
            </div>
            <div className="lg:w-[45%] flex flex-col items-center justify-center">
                <h2 className="lg:text-[42px] lg:mt-0 mt-4 lg:text-start text-center text-[32px] font-bold w-full">Discover new books & authors at great prices.</h2>
                <span className="lg:mt-[5vh] mt-[2vh] lg:mb-0 mb-10">With <span className="font-bold">{" "} discounts up to 95% off {" "}</span> and free ebooks daily, you&apos;ll enjoy hours of reading for less.</span>
            </div>
        </div>
        <div className="lg:flex hidden items-center justify-center">
            <Image src="/assets/left-arrow.jpeg" height={150} width={150} alt="left-arrow" />
        </div>
        <div className="lg:hidden flex items-center justify-center my-10">
            <Image src="/assets/down-arrow.png" height={100} width={100} alt="right-arrow" />
        </div>
    </div>
  )
}

export default SectionTwo
