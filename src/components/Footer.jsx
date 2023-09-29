import React from "react"
import { appconst } from "../commons/static"

const Footer = ({ children }) => {
  const imgsource = `${appconst.staticRescourcesURL}bottom_cake_bg.png`
  return (
    <div className="relative mt-3 sm:mt-1">
      <div className="absolute left-0 bottom-0">
        <img src={imgsource} alt="" />
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
