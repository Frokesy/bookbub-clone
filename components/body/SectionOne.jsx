import Image from 'next/image'
import React from 'react'

const SectionOne = () => {
  return (
    <div>
        <div className="flex lg:flex-row flex-col-reverse justify-between lg:w-[75vw] w-[90vw] mx-auto">
            <div className="lg:w-[50%]">
                <Image src="/assets/coffee.png" height={700} width={700} alt="side-pane" />
            </div>
            <div className="lg:w-[45%] flex flex-col items-center justify-center">
                <h2 className="lg:text-[42px] lg:mt-0 mt-4 lg:text-start text-center text-[32px] font-bold w-full">Begin each day with personalized recommendations.</h2>
                <span className="lg:mt-[5vh] mt-[2vh] lg:mb-0 mb-10">Each day you&apos;ll receive a selection of discounted titles, handpicked to match your reading taste.</span>
            </div>
        </div>
        <div className="lg:flex hidden items-center justify-center my-10">
            <Image src="/assets/right-arrow.png" height={150} width={150} alt="right-arrow" />
        </div>
        <div className="lg:hidden flex items-center justify-center my-10">
            <Image src="/assets/down-arrow.png" height={100} width={100} alt="right-arrow" />
        </div>
    </div>
  )
}

export default SectionOne
