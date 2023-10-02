import React from "react"
import { useParams } from "react-router-dom"
import { appconst } from "../commons/static"
import fakedb from "../commons/fakedb"
const Logo = () => {
  const { id } = useParams()
  const dblogo = fakedb.getItemByID(id)
  console.log(id, dblogo)

  const source = `${appconst.baseLogosURL}${dblogo.path}`
  return (
    <div className="max-w-[1024px]">
      <img src={source} alt={dblogo.description} />
      <div className=" bg-neutral-400 rounded mt-3 mb-6 p-3 text-white">
        <p>{dblogo.description}</p>
      </div>
    </div>
  )
}

export default Logo
