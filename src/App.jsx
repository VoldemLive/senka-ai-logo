import { Routes, Route } from "react-router-dom"
import Layout from "./pages/Layout"
import About from "./pages/About"
import Home from "./pages/Home"
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />}></Route>
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  )
}

export default App
