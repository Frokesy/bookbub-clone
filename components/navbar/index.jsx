import React,{ useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const NavBar = () => {
    const nav = useRef(null)
    useEffect(() => {
        gsap.fromTo(nav.current, {  
            opacity: 0 
        }, { 
            y: 0, 
            opacity: 1, 
            duration: 1, 
            ease: "easeIn",
            delay: 1.2,
        });
    }, [])
  return (
    <div ref={nav}>
        <div className="lg:w-[69vw] w-[92vw] mx-auto mt-4 flex justify-between items-center">
            <div className="flex justify-between space-x-[8vw] items-center">
                <h2 className="text-[#F44336] font-semibold text-[26px]">BookBub</h2>
                <div className="lg:flex hidden pt-3 space-x-8 text-[14px] text-[#162127] items-center">
                    <h2 className="border-b-[3px] border-b-[#F44336] pb-2">Home</h2>
                    <h2 className="pb-2">Free Ebooks</h2>
                    <h2 className="pb-2">All Deals</h2>
                </div>
            </div>
            <div className="button">
                <button className="bg-inherit border border-[#B9BCBE] text-[#5C6468] py-2 lg:px-12 px-3 text-[14px]">Sign In</button>
            </div>
        </div>
        <hr className="mt-4" />
        <div className="w-[92vw] mx-auto mt-4 flex lg:hidden space-x-6 text-[14px] text-[#162127]">
            <h2 className="border-b-2 border-b-[#F44336] pb-2">Home</h2>
            <h2>Free Ebooks</h2>
            <h2>All Deals</h2>
        </div>
    </div>
  )
}

export default NavBar
