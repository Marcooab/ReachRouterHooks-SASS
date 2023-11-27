import NavBar from './Components/NavBar'
import Footer from './Components/Footer'
import "../src/Styles/App.scss"

// Reusing Strucuture
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div className="container">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
