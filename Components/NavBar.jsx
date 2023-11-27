import React from 'react'
import { Link } from 'react-router-dom'
import "../Styles/NavBar.scss"

function NavBar() {
  return (
    <nav className="navbar">
        <div>
          <Link className="list" to="/">Home</Link>
        </div>
        <div>
          <Link className="list" to="/contact">Contact</Link>
        </div>
        </nav>
)}

export default NavBar