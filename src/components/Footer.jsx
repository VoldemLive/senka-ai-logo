import React from "react"

const Footer = ({ children }) => {
  return (
    <div className="relative">
      <div className="absolute left-0 bottom-0">
        <img src="../public/static/bottom_cake_bg.png" alt="" />
      </div>
      <div className="h-[118px] w-screen bg-[#fcc998]"></div>
      <div className="absolute l-0 w-screen p-2 bg-[#5c4b44] text-[#f8d0a1]">
        {new Date().getFullYear()} &copy; Volodymyr Shynkarov
      </div>
    </div>
  )
}

export default Footer
