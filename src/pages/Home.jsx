import React from "react"
import LogosList from "../components/LogosList"
import HorizontalList from "../components/HorizontalList"
const Home = () => {
  const logosData = [
    {
      id: 1,
      path: "https://storage.cloud.google.com/senka_logos/logos/logo1.png",
    },
    {
      id: 2,
      path: "https://storage.cloud.google.com/senka_logos/logos/logo2.png",
    },
    {
      id: 3,
      path: "https://storage.cloud.google.com/senka_logos/logos/logo3.png",
    },
    {
      id: 4,
      path: "https://storage.cloud.google.com/senka_logos/logos/logo4.png",
    },
    {
      id: 5,
      path: "https://storage.cloud.google.com/senka_logos/logos/logo5.png",
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
