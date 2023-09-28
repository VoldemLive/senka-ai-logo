import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

function App() {
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
    <div className="flex flex-col min-h-screen min-w-full">
      <header className="z-[2] fixed top-0 w-screen">
        <Navbar></Navbar>
      </header>
      <section className="z-[1] mb-auto">
        <div className="mt-16 flex flex-wrap items-center content-center justify-center">
          {logosData.map((item) => {
            return (
              <div key={item.id} className="p-1">
                <img
                  className="object-cover rounded ssm:h-[250px] sm:h-[450px] md:h-[520px] lg:h-[640px]"
                  src={item.path}
                ></img>
              </div>
            )
          })}
        </div>
      </section>
      <footer className="h-1">
        <Footer></Footer>
      </footer>
    </div>
  )
}

export default App
