import React from 'react'
import { Link } from "react-router-dom"
import "../Styles/Contact.scss"

function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-items">
        <button>
          <Link className="items" to="/contact/1">Contact 1</Link>
        </button>
        <button>
          <Link className="items" to="/contact/2">Contact 2</Link>
        </button>
        <button>
          <Link className="items"  to="/contact/3">Contact 3</Link>
        </button>
      </div>
    </div>
  )
}

export default Contact