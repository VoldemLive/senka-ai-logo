import React from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="p-2 text-2xl text-[#e8d7c4] bg-black/10 backdrop-blur-sm">
      <Link to="/">Pastry Chef</Link>
    </div>
  )
}

export default Navbar
