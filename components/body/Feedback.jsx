import React from 'react'
import FiveStars from '../Star'

const Feedback = ({comment, user, address}) => {
  return (
            <div className="flex flex-col space-y-6 lg:w-[25%] lg:px-0 px-4 lg:pt-0 pt-10 items-center text-center">
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
