import React from "react"
import PreviewImage from "./PreviewImage"

const HorizontalList = ({ logoslist, title, description }) => {
  return (
    <div>
      <h1 className="text-[#e8d7c4] text-lg font-semibold ">{title}</h1>
      <div className="flex flex-col lg:flex-row p-3">
        <div className="max-h-[290px] w-full xl:w-[35%] overflow-hidden text-ellipsis">
          <div className="text-white block rounded w-full h-full p-2">
            {description}
          </div>
        </div>
        <div className="flex flex-row overflow-x-auto rounded-lg">
          {logoslist.map((item) => {
            return <PreviewImage source={item.id} key={item.id} />
          })}
        </div>
      </div>
    </div>
  )
}

export default HorizontalList
