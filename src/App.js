//import react library
import React, { useState, useEffect } from "react";
import DogPics from "./DogPics";

//rendering my main component App
function App() {

  //changes when button is clicked
  //will run useEffect in DogPics
  const [runEffect ,setRunEffect] = useState(1);

  //handleClickMe sets runEffect state and increments by 1
  const handleClickMe = (e) => {
    //call set runEffect
    //setRunEffect updates runEffect which is in dependency array
    //in DogPics at useEffect:15
    setRunEffect(runEffect => runEffect + 1)
  }

  //useEffect hook
  useEffect(() => {
    console.log("useEffect called");
  });

  console.log("Component rendering");
  
  //JSX to be rendered to the DOM
  return (<div>
      <DogPics runEffect={runEffect}/>
      <button onClick={handleClickMe}>Click Me: {runEffect}</button>
    </div>);
}

//export default App to be used in index.js
export default App;
