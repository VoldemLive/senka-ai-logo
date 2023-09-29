import React from "react"
import { useParams } from "react-router-dom"
import { appconst } from "../commons/static"
const Logo = () => {
  const { img } = useParams()
  const source = `${appconst.baseLogosURL}${img}`
  return (
    <div>
      <img src={source} alt={img} />
    </div>
  )
}

export default Logo
