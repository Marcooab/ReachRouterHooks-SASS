import React from 'react'
import "../Styles/Home.scss"
import reactpic from "./react.png"
import sasspic from "./sass.png"

function Home() {
  return (
    <div className="home-container">
      <h2>React Router & SASS Practice</h2>
      <div className="icons">
        <img src={reactpic} alt="react-icon" />
        <img src={sasspic} alt="sass-icon" />
      </div>
    </div>
  )
}

export default Home