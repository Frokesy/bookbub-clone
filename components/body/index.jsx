import Image from 'next/image'
import React from 'react'
import SectionOne from './SectionOne'
import SectionTwo from './SectionTwo'
import SectionThree from './SectionThree'
import SectionFour from './SectionFour'
import Feedback from './Feedback'

const Body = () => {
  return (
    <div>
      <div className="lg:mt-[8vh] mt-[3vh] lg:w-[75vw] lg:space-x-[5vw] mx-auto flex lg:flex-row flex-col justify-between">
        <div className="lg:w-[40%] w-[90vw] mx-auto lg:text-start text-center">
          <h2 className="lg:text-[46px] text-[32px] font-extrabold lg:pb-6 pb-2">Amazing deals on bestselling ebooks</h2>
          <span className="lg:text-[20px] text-[16px] font-bold lg:text-start">Join for 
              <span className="uppercase font-bold text-[#F44336]">{" "} free {" "}</span>
              to never miss a deal
          </span>

          <div className="flex lg:flex-row flex-col items-center justify-between lg:border border-[#B9BCBE] py-1 px-1 mt-4 w-full">
              <input type="text" placeholder="Enter your email address..." className="lg:px-6 px-3 placeholder:text-[#ccc] lg:w-[50%] w-[100%] lg:py-0 py-3 outline-none lg:border-none border border-[#B9BCBE] lg:mb-0 mb-3" />
              <button className="bg-[#F44336] text-[#fff] py-3 rounded-md lg:px-12 px-3 text-[14px] font-bold lg:w-auto w-[100%]">Get Started</button>
          </div>

          <span className="flex items-center justify-center my-3">or</span>
          <div className="flex items-center justify-center py-3 w-full border border-[#B9BCBE] space-x-2 text-[14px]">
            <Image src="/assets/google.png" width={40} height={40} alt="google-icon" />
            <span>Continue with Google</span>
          </div>
        </div>

        <div className="lg:w-[45%] w-[70%] mx-auto mt-[8vh] lg:mt-0">
            <Image src="/assets/side-pane.jpeg" height={650} width={700} alt="side-pane" />
        </div>
      </div>

      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <div className="mt-[5vh] lg:w-[75vw] mx-auto">
        <h2 className="text-center font-bold text-[42px]">Join millions of happy readers.</h2>
          <div className="flex lg:flex-row flex-col lg:space-x-10 mt-[8vh] items-center justify-between">
            <Feedback 
            comment="I would tell anyone to just sign up without reservation. I now have more books than I can read in a lifetime."
            user="Suzie M."
            address="Auburn, WA"
            />
            <Feedback 
            comment="There are series I would have never discovered if it weren’t for BookBub, and I always feel like I got a deal, always."
            user="Ellyn C."
            address="Huntington Beach, CA"
            />
            <Feedback 
            comment="I actually download several books a week... I would say I’ve saved approximately $40 or more each month using BookBub."
            user="Mona E."
            address="Stockton, CA"
            />
          </div>
      </div>

    </div>
  )
}

export default Body
