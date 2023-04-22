import React from 'react'
import Image from 'next/image'


const SectionFour = () => {
  return (
    <div>
        <div className="flex lg:flex-row-reverse flex-col-reverse justify-between lg:w-[75vw] w-[90vw] mx-auto">
            <div className="lg:w-[50%]">
                <Image src="/assets/author-alerts_2x.png" height={700} width={700} alt="side-pane" />
            </div>
            <div className="lg:w-[45%] flex flex-col items-center justify-center">
                <h2 className="lg:text-[42px] lg:mt-0 mt-4 lg:text-start text-center text-[32px] font-bold w-full">Stay updated on all your favorites, old and new.</h2>
                <span className="lg:mt-[5vh] mt-[2vh] lg:mb-0 mb-10">We&apos;ll notify you when a book you want is on sale, or an author you love has a deal or a new release.</span>
            </div>
        </div>
    </div>
  )
}

export default SectionFour
