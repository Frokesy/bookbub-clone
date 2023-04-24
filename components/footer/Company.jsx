import React from 'react'

const Company = () => {
  return (
    <div>
      <h2 className="font-semibold uppercase text-[20px]">Company</h2>
        <ul className="text-[13px] lg:flex lg:flex-col grid grid-cols-2 pt-3 pb-6 space-y-2">
            <li>About Us</li>
            <li>Careers</li>
            <li>For the Press</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Contact</li>
            <li>Your Privacy Choices</li>
        </ul>
        <hr className="pb-4 lg:hidden" />
    </div>
  )
}

export default Company
