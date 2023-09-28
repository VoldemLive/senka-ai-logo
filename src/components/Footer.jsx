import React from "react"

const Footer = ({ children }) => {
  return (
    <div className="relative">
      <div className="absolute left-0 bottom-0">
        <img
          src="https://storage.cloud.google.com/senka_logos/static/bottom_cake_bg.png"
          alt=""
        />
      </div>
      <div className="h-[118px] w-screen bg-[#fcc998]"></div>
      <div className="absolute bottom-0 pl-3 pb-2 text-[#602213]">
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
