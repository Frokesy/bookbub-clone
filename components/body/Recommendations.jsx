import Image from 'next/image'
import React from 'react'

const Recommendations = () => {
  return (
    <div>
        <div className="flex lg:flex-row flex-col-reverse justify-between lg:w-[85vw] lg:pr-10 mt-[10vh] w-[90vw] mx-auto">
            <div className="lg:w-[50%] lg:pr-0 pr-6 lg:mt-0 mt-10">
                <Image src="/assets/sign-up-iphone_2x.png" height={700} width={700} alt="kindle-ice-tea_2x" />
            </div>
            <div className="lg:w-[45%] flex flex-col justify-center">
                <h2 className="lg:text-[16px] lg:mt-0 mt-4 lg:text-start text-center text-[14px] uppercase font-semibold">Join Bookbub</h2>
                <span className="lg:text-[42px] lg:mt-0 mt-4 lg:text-start text-center text-[32px] font-bold w-full">Get your own, personalized recommendations:</span>
                                
                <div className="lg:w-[80%] w-[90vw] lg:text-start text-center">
                    <div className="flex lg:flex-row flex-col items-center justify-between lg:border border-[#B9BCBE] py-1 px-1 mt-4 w-full">
                        <input type="text" placeholder="Enter your email address..." className="lg:px-6 px-3 placeholder:text-[#ccc] lg:w-[50%] w-[100%] lg:py-0 py-3 outline-none lg:border-none border border-[#B9BCBE] lg:mb-0 mb-3" />
                        <button className="bg-[#F44336] text-[#fff] py-3 rounded-md lg:px-12 px-3 text-[14px] font-bold lg:w-auto w-[100%]">Get Started</button>
                    </div>
                    <span className="flex items-center justify-center my-3">or</span>
                    <div className="flex items-center justify-center py-2 w-full border border-[#B9BCBE] space-x-2 text-[14px]">
                        <Image src="/assets/google.png" width={40} height={40} alt="google-icon" />
                        <span>Continue with Google</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Recommendations
