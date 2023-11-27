import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import "../Styles/ContactDetails.scss"

function ContactDetails() {
  const {id} = useParams();
  const navigate = useNavigate(); 

    const handleContact = () => {
      console.log("Contato sent")
      return navigate("/contact")
    }

  return (
    <div className="details-container">
      <h1>More Contact Info: {id}</h1>
      <button class="details-button" onClick={handleContact}>Router Hooks</button>
      <h4>*** Testing Hooks Navigate and Params. Go back to Contact Page</h4>
    </div>
  )
}

export default ContactDetails