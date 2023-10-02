import React from "react"
import { useNavigate } from "react-router-dom"
import { appconst } from "../commons/static"
import fakedb from "../commons/fakedb"
const PreviewImage = ({ source }) => {
  const logoitem = fakedb.getItemByID(source)
  const imgsource = `${appconst.baseLogosURL}${logoitem.path}`
  const navigation = useNavigate()
  const showBigImage = () => {
    navigation(`/big/${source}`)
  }

  return (
    <div onClick={showBigImage} className="p-1">
      <img
        className="object-cover rounded min-w-[275px] h-[275px]"
        src={imgsource}
      ></img>
    </div>
  )
}

export default PreviewImage
