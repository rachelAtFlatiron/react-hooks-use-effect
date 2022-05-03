//import React library and hooks
import React, { useState, useEffect } from "react";

// WARNING: this useEffect will run in an infinite loop!
// to fix, pass an empty array as the second argument for useEffect

//DogPics component to be imported in App.js
function DogPics({runEffect}) {
  //state for list of dog images
  const [images, setImages] = useState([]);
  

  //effect HOOK to fetch GET list of dog images
  //only runs after DOM is rendered or re-rendered
  useEffect(() => {
    console.log(runEffect);
    console.log("useEffect");
    fetch("https://dog.ceo/api/breeds/image/random/3")
      .then((r) => r.json())
      .then((data) => {
        console.log("setState");
        //SET STATE - re-render page .... 
        setImages(data.message);
      });
  }, [runEffect]);

  //will run every time there is a render or re-render
  //because there is no dependency array
  useEffect(() => {
    alert('hi');
  })

  //sidenote: this will run once BEFORE use-effect 
  console.log("render");

  //JSX to be rendered and displayed on the DOM
  return (
    <div>
      {images.map((image) => (
        <img src={image} key={image} />
      ))}
    </div>
  );
}

//DogPics component to be imported in App.js
export default DogPics;
