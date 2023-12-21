import React from "react"
import faceImg from "../assets/images/download.jfif"

function Header(){
  return(
    <header>
        <div className="h1-subcontainer">
        <img src={faceImg} alt="Meme Face"/>
        <h1>Meme Generator</h1>
      </div>
      <h2>Create your own meme</h2>
    </header>
  )
}

export default Header