import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

function App() {
  const logosData = [
    { id: 1, path: "./public/logos/logo1.png" },
    { id: 2, path: "./public/logos/logo2.png" },
    { id: 3, path: "./public/logos/logo3.png" },
    { id: 4, path: "./public/logos/logo4.png" },
    { id: 5, path: "./public/logos/logo5.png" },
  ]
  return (
    <div className="flex flex-col min-h-screen min-w-full bg-[#e8d7c4]">
      <header className="fixed top-0 w-screen">
        <Navbar></Navbar>
      </header>
      <section className="mb-auto">
        <div className="mt-16 flex flex-wrap items-center content-center justify-center">
          {logosData.map((item) => {
            return (
              <div key={item.id} className="p-1">
                <img
                  className="object-cover rounded h-80"
                  src={item.path}
                ></img>
              </div>
            )
          })}
        </div>
      </section>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  )
}

export default App
