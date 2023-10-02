import React from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="p-2 text-2xl text-[#F6EDD9] bg-black/20 backdrop-blur-sm">
      <Link to="/">
        <div className="flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="57px"
            height="57px"
            fill="none"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            color="#F6EDD9"
          >
            <path
              stroke="#F6EDD9"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 16.5V20a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-3.5M3 14v-1a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v1M12 8v3M12 8c1.262 0 2-.968 2-2.625S12 2 12 2s-2 1.718-2 3.375S10.738 8 12 8Z"
            ></path>
            <path
              stroke="#F6EDD9"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 14a3 3 0 1 1-6 0M15 14a3 3 0 1 1-6 0M21 14a3 3 0 1 1-6 0"
            ></path>
          </svg>
          <p className="font-bold">Nice logo</p>
        </div>
      </Link>
    </div>
  )
}

export default Navbar
