import React from "react"
import PreviewImage from "./PreviewImage"

const HorizontalList = (props) => {
  const logosData = props.logoslist
  const title = props.title
  return (
    <div>
      <h1 className="text-[#e8d7c4] text-lg font-semibold ">{title}</h1>
      <div className="flex flex-row overflow-x-auto rounded-lg">
        {logosData.map((item) => {
          return <PreviewImage source={item.path} key={item.id} />
        })}
      </div>
    </div>
  )
}

export default HorizontalList
