import React from "react"
import HorizontalList from "../components/HorizontalList"
import fakedb from "../commons/fakedb"
const Home = () => {
  const logosData = fakedb.getItemsByListID([1, 2, 3, 4, 5])
  const logosData2 = fakedb.getItemsByListID([6, 7, 8, 9, 10])
  const logosData3 = fakedb.getItemsByListID([11, 12, 13, 14, 15])
  const logosData4 = fakedb.getItemsByListID([16, 17, 18, 19, 20])
  const logosData5 = fakedb.getItemsByListID([21, 22, 23, 24, 25])
  const descr = fakedb.getItemByID(1).description
  const descr2 = fakedb.getItemByID(6).description
  const descr3 = fakedb.getItemByID(11).description
  const descr4 = fakedb.getItemByID(16).description
  const descr5 = fakedb.getItemByID(21).description

  return (
    <div>
      <HorizontalList
        description={descr}
        title="Vector 3d style"
        logoslist={logosData}
      />
      <HorizontalList
        description={descr2}
        title="Ribbon style"
        logoslist={logosData2}
      />
      <HorizontalList
        description={descr3}
        title="Pestel"
        logoslist={logosData3}
      />
      <HorizontalList
        description={descr4}
        title="Modern style"
        logoslist={logosData4}
      />
      <HorizontalList
        description={descr5}
        title="Gradient style"
        logoslist={logosData5}
      />
    </div>
  )
}

export default Home
