import { Routes, Route } from "react-router-dom"
import Layout from "./pages/Layout"
import LayoutBigLogo from "./pages/LayoutBigLogo"
import About from "./pages/About"
import Home from "./pages/Home"
import Logo from "./pages/Logo"
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />}></Route>
        <Route path="about" element={<About />} />
      </Route>
      <Route path="big/" element={<LayoutBigLogo />}>
        <Route path=":id" element={<Logo />} />
      </Route>
    </Routes>
  )
}

export default App
