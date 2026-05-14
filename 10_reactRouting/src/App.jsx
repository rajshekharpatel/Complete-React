import Home from "./components/Home"
import Dashboard from "./components/Dashboard"  
import About from "./components/About"
import { createBrowserRouter } from "react-router-dom"
import { RouterProvider } from "react-router-dom"
import Navbar from "./components/Navbar"


const router = createBrowserRouter(
  [
    {
      path:"/",
      element:
      <div>
        <Navbar />
        <Home />
      </div>
    },
    {
      path:"/about",
      element:
      <div>
        <Navbar />
        <About />
      </div>
    },
    {
      path:"/dashboard",
      element:
      <div>
        <Navbar />
        <Dashboard />
      </div>
    },
  ]
);


function App() {

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
