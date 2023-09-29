import React, { useEffect } from "react"
import { useState } from "react"
const LogosList = (props) => {
  //const [logos, setLogos] = useState([])
  const logosData = props.logoslist
  //   useEffect(() => {
  //     setLogos(logosData)
  //   }, [logosData])
  return (
    <div className="mt-16 flex flex-wrap items-center content-center justify-center">
      {logosData.map((item) => {
        return (
          <div key={item.id} className="p-1">
            <img
              className="object-cover rounded h-auto xs:h-[240px] md:h-[350px] lg:-[550px]"
              src={item.path}
            ></img>
          </div>
        )
      })}
    </div>
  )
}

export default LogosList
