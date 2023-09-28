import React from "react"

const Footer = ({ children }) => {
  return (
    <div className="relative mt-24 sm:mt-1">
      <div className="absolute left-0 bottom-0">
        <img
          src="https://storage.cloud.google.com/senka_logos/static/bottom_cake_bg.png"
          alt=""
        />
      </div>
      <div className="h-[88px] w-screen bg-[#fcc998]"></div>
      <div className="absolute bottom-0 pl-[310px] pb-1 text-sm sm:text-base sm:pb-6 text-[#602213]">
        <p className="z-[2]">
          {new Date().getFullYear()} &copy;{" "}
          <a href="https://github.com/VoldemLive/senka-ai-logo">
            Volodymyr Shynkarov
          </a>
        </p>
      </div>
    </div>
  )
}

export default Footer
