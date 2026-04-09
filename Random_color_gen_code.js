import React from 'react';
import { useState } from 'react'

function App() {
  const [bgColor, setBgColor] = useState("black")
  let changeBGC = () =>{
    let r = Math.floor(Math.random()*256)
    let g = Math.floor(Math.random()*256)
    let b = Math.floor(Math.random()*256)
    setBgColor(`rgb(${r},${g},${b})`)
  }
  
  
  return (
    <div >
      <p style={{backgroundColor:bgColor , color:"white"}}>Hello Shaan</p>
      <button onClick={changeBGC}>Change BGC</button>
    </div>
  )
}

export default App
