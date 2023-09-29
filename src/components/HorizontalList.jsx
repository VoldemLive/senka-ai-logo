import React from "react"

const HorizontalList = (props) => {
  const logosData = props.logoslist
  const title = props.title
  return (
    <div>
      <h1 className="text-[#e8d7c4] text-lg font-semibold ">{title}</h1>
      <div className="flex flex-row overflow-x-auto">
        {logosData.map((item) => {
          return (
            <div key={item.id} className="p-1">
              <img
                className="object-cover rounded min-w-[275px] h-[275px]"
                src={item.path}
              ></img>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default HorizontalList
