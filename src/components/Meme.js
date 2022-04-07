import React from "react";
import memesData from "../memesData.js";

export default function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage:
      "https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder-1024x1024.png",
  });

  function getMemeImage() {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: memesArray[randomNumber].url,
    }));
  }

  return (
    <main>
      <div className="form">
        <input type="text" placeholder="Top text" className="form--input" />
        <input type="text" placeholder="Bottom text" className="form--input" />
        <button className="form--button" onClick={getMemeImage}>
          Get a new meme image 🖼
        </button>
      </div>
      <img
        src={meme.randomImage}
        alt="Base for memes"
        className="meme--image"
      />
    </main>
  );
}
