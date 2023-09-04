import * as React from "react"
import { Link } from "gatsby"
import { useState, useEffect } from "react"

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear())

  useEffect(() => {
    // Update the current year once the component mounts
    setCurrentYear(new Date().getFullYear())
  }, [])

  return (
    <>
      <div
        className=" bg-black text-white justify-center item-center
    "
      >
        <div className="w-full h-[1px] bg-[#212425]" />
        <div className="flex justify-center item-center font-thin py-5">
          &copy; {currentYear} - All rights reserved
        </div>
      </div>
    </>
  )
}

export default Footer
