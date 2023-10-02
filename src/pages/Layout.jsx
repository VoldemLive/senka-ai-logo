import React from "react"
import { Outlet } from "react-router-dom"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen min-w-full">
      <header className="fixed top-0 w-screen">
        <Navbar></Navbar>
      </header>
      <section className="p-2 mb-auto mt-16">
        <Outlet />
      </section>
      <footer className="mt-10">
        <Footer></Footer>
      </footer>
    </div>
  )
}

export default Layout
