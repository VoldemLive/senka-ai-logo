import React from "react"
import HorizontalList from "../components/HorizontalList"
const Home = () => {
  const logosData = [
    {
      id: 1,
      path: "logo1.png",
    },
    {
      id: 2,
      path: "logo2.png",
    },
    {
      id: 3,
      path: "logo3.png",
    },
    {
      id: 4,
      path: "logo4.png",
    },
    {
      id: 5,
      path: "logo5.png",
    },
  ]
  return (
    <div>
      <HorizontalList title="Vector 3d style" logoslist={logosData} />
      <HorizontalList title="Vector 3d style" logoslist={logosData} />
      <HorizontalList title="Vector 3d style" logoslist={logosData} />
      <HorizontalList title="Vector 3d style" logoslist={logosData} />
    </div>
  )
}

export default Home
