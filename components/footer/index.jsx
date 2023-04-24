import React from 'react'
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter } from 'react-icons/fa'
import Company from './Company'
import Readers from './Readers'
import PublishersAndAuthors from './PublishersAndAuthors'
import BlogPosts from './BlogPosts'

const Footer = () => {
  return (
    <div className="mt-[10vh] bg-[#162127] w-full text-[#fff]"> 
      <div className="lg:w-[70vw] w-[90vw] mx-auto pt-4 pb-[15vh]">
            <div className="flex space-x-12 lg:justify-start justify-between pb-4">
                <h2 className="font-semibold lg:text-[46px] text-[32px]">Bookbub</h2>
                <div className="flex space-x-2 items-center lg:scale-150 scale-110">
                    <FaFacebook />
                    <FaTwitter />
                    <FaPinterest />
                    <FaInstagram />
                </div>
            </div>
            <hr />
            <div className="grid lg:grid-cols-4 grid-cols-1 gap-x-[3vw] mt-6">
                <Company />
                <Readers />
                <PublishersAndAuthors />
                <BlogPosts />
            </div>
            <span className="text-[13px] lg:justify-start flex items-center justify-center">© 2023 BookBub. All rights reserved.</span>
      </div>
    </div>
  )
}

export default Footer
