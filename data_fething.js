import React, { useEffect, useState } from 'react'

function App() {
let [productData,setProductData] = useState([])

 useEffect(()=>{
   fetch('https://dummyjson.com/products')
.then(res => res.json())
.then(data=>{console.log(data.products)
  setProductData(data.products)})
 },[])

  return (
    <div>
      <h1>My Products</h1>
      <div style={{display:"grid", gridTemplateColumns:"1fr 1fr 1fr" , gap:"20px"}}
      >{productData.map((e,i)=>{
          return <div style={{border:"solid 1px black" , padding:"20px"}} >
              <p>{e.title}</p>
              <img style={{width:"200px", height:"200px" }} src={e.images[0]} alt="" />
              <p>Price : {e.price}</p>
          </div>
      })}</div>
    </div>
  )
}

export default App
