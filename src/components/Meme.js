import React, {useEffect, useState} from "react"
import svg from "../assets/images/images.svg"

function Meme(){
  const [meme, setMeme] = useState(
    {
      topText: "",
      bottomText: "",
      randomImage: ""
    }
  );
  const [allMemes, setAllMemes] = useState([]);

  useEffect( ()=>{
    fetch("https://api.imgflip.com/get_memes")
    .then(response => response.json())
    .then(data => setAllMemes(data.data.memes));
  }, []);

  function getMemeImage(){
    const random = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[random].url;

    setMeme( (prevState) => ( {...prevState, randomImage: url} ));
  }

  function getPhrase(event){
    const {name, value} = event.target;
    setMeme( prevState => {
      return {...prevState, [name]: value}
    })
  }

  return(
    <main>
      <div className="form">
        <input onChange={getPhrase} value={meme.topText} name="topText" type="text" placeholder="enter first phrase part"/>
        <input onChange={getPhrase} value={meme.bottomText} name="bottomText" type="text" placeholder="enter second phrase part"/>
        <button onClick={getMemeImage}>Get a new meme image <img src={svg}/></button>
      </div>
      <div className="meme-img-container">
        <img className="meme-img" src={meme.randomImage}/>
        <h2 className="phrase top">{meme.topText}</h2>
        <h2 className="phrase bottom">{meme.bottomText}</h2>
      </div>
    </main>
  )
}

export default Meme