import React from "react"

const Footer = ({ children }) => {
  return (
    <div className="relative mt-3 sm:mt-1">
      <div className="absolute left-0 bottom-0">
        <img
          src="https://storage.cloud.google.com/senka_logos/static/bottom_cake_bg.png"
          alt=""
        />
      </div>
      <div className="h-[101px] w-screen bg-[#fcc998]"></div>
      <div className="absolute bottom-0 pl-2 pb-1 text-[#602213]">
        <p>
          {new Date().getFullYear()} &copy;
          <a href="https://github.com/VoldemLive/senka-ai-logo">
            Volodymyr Shynkarov
          </a>
        </p>
      </div>
    </div>
  )
}

export default Footer
